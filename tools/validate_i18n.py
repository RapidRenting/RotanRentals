from __future__ import annotations

import json
import re
import sys
import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
ORIGIN = "https://staypristinebay.com"

PAGE_PAIRS = (
    ("index.html", "es/index.html", "/", "/es/"),
    (
        "pristine-bay-vacation-rental/index.html",
        "es/pristine-bay-vacation-rental/index.html",
        "/pristine-bay-vacation-rental/",
        "/es/pristine-bay-vacation-rental/",
    ),
    (
        "roatan-golf-and-diving/index.html",
        "es/roatan-golf-and-diving/index.html",
        "/roatan-golf-and-diving/",
        "/es/roatan-golf-and-diving/",
    ),
    (
        "villa-and-amenities/index.html",
        "es/villa-and-amenities/index.html",
        "/villa-and-amenities/",
        "/es/villa-and-amenities/",
    ),
)


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.in_body = False
        self.body_signature: list[tuple[str, tuple[str, ...]]] = []
        self.links: list[dict[str, str]] = []
        self.metas: list[dict[str, str]] = []
        self.html_attrs: dict[str, str] = {}
        self.scripts: list[tuple[dict[str, str], str]] = []
        self._script_attrs: dict[str, str] | None = None
        self._script_text: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attr_map = {key: value or "" for key, value in attrs}
        if tag == "html":
            self.html_attrs = attr_map
        if tag == "body":
            self.in_body = True
        if tag == "link":
            self.links.append(attr_map)
        if tag == "meta":
            self.metas.append(attr_map)
        if tag == "script":
            self._script_attrs = attr_map
            self._script_text = []
        if self.in_body:
            structural_attrs = tuple(sorted(key for key in attr_map if key in {"class", "id", "data-route", "data-view"}))
            self.body_signature.append((tag, structural_attrs))

    def handle_endtag(self, tag: str) -> None:
        if tag == "script" and self._script_attrs is not None:
            self.scripts.append((self._script_attrs, "".join(self._script_text).strip()))
            self._script_attrs = None
            self._script_text = []
        if self.in_body:
            self.body_signature.append((f"/{tag}", ()))
        if tag == "body":
            self.in_body = False

    def handle_data(self, data: str) -> None:
        if self._script_attrs is not None:
            self._script_text.append(data)


def parse_page(path: Path) -> tuple[str, PageParser]:
    text = path.read_text(encoding="utf-8")
    parser = PageParser()
    parser.feed(text)
    return text, parser


def value_for(items: list[dict[str, str]], key: str, value: str) -> dict[str, str]:
    return next((item for item in items if item.get(key) == value), {})


def validate_page_pair(en_rel: str, es_rel: str, en_path: str, es_path: str) -> list[str]:
    errors: list[str] = []
    en_text, en = parse_page(PUBLIC / en_rel)
    es_text, es = parse_page(PUBLIC / es_rel)

    if en.html_attrs.get("lang") != "en":
        errors.append(f"{en_rel}: html lang must be en")
    if es.html_attrs.get("lang") != "es-HN":
        errors.append(f"{es_rel}: html lang must be es-HN")
    if en.body_signature != es.body_signature:
        errors.append(f"{es_rel}: body structure differs from its English page")

    expected = {
        "en": ORIGIN + en_path,
        "es": ORIGIN + es_path,
        "x-default": ORIGIN + en_path,
    }
    for label, expected_url in expected.items():
        en_link = next((link for link in en.links if link.get("rel") == "alternate" and link.get("hreflang") == label), {})
        es_link = next((link for link in es.links if link.get("rel") == "alternate" and link.get("hreflang") == label), {})
        if en_link.get("href") != expected_url or es_link.get("href") != expected_url:
            errors.append(f"{en_rel}/{es_rel}: invalid reciprocal hreflang {label}")

    en_canonical = value_for(en.links, "rel", "canonical").get("href")
    es_canonical = value_for(es.links, "rel", "canonical").get("href")
    if en_canonical != ORIGIN + en_path:
        errors.append(f"{en_rel}: invalid self-canonical")
    if es_canonical != ORIGIN + es_path:
        errors.append(f"{es_rel}: invalid self-canonical")

    robots = value_for(es.metas, "name", "robots").get("content", "")
    if "index" not in robots or "follow" not in robots:
        errors.append(f"{es_rel}: Spanish page is not index, follow")

    json_ld = [text for attrs, text in es.scripts if attrs.get("type") == "application/ld+json"]
    if not json_ld:
        errors.append(f"{es_rel}: missing JSON-LD")
    for index, payload in enumerate(json_ld):
        try:
            json.loads(payload)
        except json.JSONDecodeError as exc:
            errors.append(f"{es_rel}: JSON-LD block {index + 1} is invalid: {exc}")

    handoff_pattern = re.compile(r"MANAGED BY\s*<a[^>]*>ROATAN PROPERTY MANAGEMENT")
    if not handoff_pattern.search(en_text) or not handoff_pattern.search(es_text):
        errors.append(f"{en_rel}/{es_rel}: required property-management handoff changed")
    if "`r`n" in es_text:
        errors.append(f"{es_rel}: contains escaped newline text")
    if re.search(r'(?:href|src|srcset|poster)="assets/', es_text):
        errors.append(f"{es_rel}: contains an asset URL relative to /es/")

    return errors


def validate_sitemap() -> list[str]:
    errors: list[str] = []
    tree = ET.parse(PUBLIC / "sitemap.xml")
    root = tree.getroot()
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9", "xhtml": "http://www.w3.org/1999/xhtml"}
    urls = root.findall("sm:url", ns)
    expected_locations = {ORIGIN + item for pair in PAGE_PAIRS for item in pair[2:]}
    actual_locations = {item.findtext("sm:loc", namespaces=ns) for item in urls}
    if actual_locations != expected_locations:
        errors.append("sitemap.xml: URL set does not match the eight bilingual pages")
    for item in urls:
        loc = item.findtext("sm:loc", namespaces=ns) or "unknown"
        alternates = {link.attrib.get("hreflang"): link.attrib.get("href") for link in item.findall("xhtml:link", ns)}
        if set(alternates) != {"en", "es", "x-default"}:
            errors.append(f"sitemap.xml: {loc} does not list en, es and x-default alternates")
    return errors


def validate_booking_analytics() -> list[str]:
    errors: list[str] = []
    event_path = "/analytics-events/booking-page-open/"
    for relative_path in ("index.html", "es/index.html"):
        page = (PUBLIC / relative_path).read_text(encoding="utf-8")
        outbound_links = re.findall(r'<a\b[^>]*\bhref="https://www\.lodgix\.com/', page)
        if len(outbound_links) != 2:
            errors.append(f"{relative_path}: expected exactly two explicit Lodgix booking links")

    script = (PUBLIC / "assets/js/main.js").read_text(encoding="utf-8")
    if 'document.querySelectorAll(\'a[href*="lodgix.com"]\')' not in script:
        errors.append("assets/js/main.js: Lodgix booking links are not tracked")
    if 'trackSiteEvent("booking-page-open")' not in script:
        errors.append("assets/js/main.js: booking click event is missing")

    event_page = (PUBLIC / event_path.strip("/") / "index.html").read_text(encoding="utf-8")
    if 'name="robots" content="noindex,nofollow"' not in event_page:
        errors.append("booking analytics event page must remain noindex,nofollow")
    if event_path in (PUBLIC / "sitemap.xml").read_text(encoding="utf-8"):
        errors.append("booking analytics event page must not appear in sitemap.xml")
    return errors


def validate_analytics_beacons() -> list[str]:
    """The dashboard site tag is not the JS snippet installation token."""
    errors: list[str] = []
    installation_token = "dbda8af15e39403cb84db871c0b8263f"
    pages = [PUBLIC / item for pair in PAGE_PAIRS for item in pair[:2]]
    pages.extend((PUBLIC / "analytics-events").glob("*/index.html"))
    for path in pages:
        html = path.read_text(encoding="utf-8")
        snippets = re.findall(r'data-cf-beacon=\'([^\']+)\'', html)
        if len(snippets) != 1:
            errors.append(f"{path.relative_to(PUBLIC)}: expected one analytics beacon")
            continue
        try:
            token = json.loads(snippets[0]).get("token")
        except (ValueError, AttributeError):
            token = None
        if token != installation_token:
            errors.append(f"{path.relative_to(PUBLIC)}: incorrect analytics installation token")
    return errors


def main() -> int:
    errors = []
    for pair in PAGE_PAIRS:
        errors.extend(validate_page_pair(*pair))
    errors.extend(validate_sitemap())
    errors.extend(validate_booking_analytics())
    errors.extend(validate_analytics_beacons())
    if errors:
        print("Bilingual site validation failed:")
        for error in errors:
            print(f"- {error}")
        return 1
    print("Bilingual site validation passed for 4 English and 4 Spanish pages.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
