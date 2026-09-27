"""Create the smaller WebP copies that pages offer through srcset.

The full-size files in enhanced/ (2400px) and activities/ stay where they are and
remain the largest srcset candidate; this script only adds downsized copies to
responsive/ so phones and small layouts can download far less. Re-run it after
adding or replacing a photo, then commit the new files.

    python tools/build_responsive_images.py
"""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]
MEDIA = ROOT / "public" / "assets" / "media"
OUTPUT = MEDIA / "responsive"

# Downscaling hides most compression artefacts, so quality 84 keeps these copies
# visually indistinguishable from the full-size WebP at their display size.
QUALITY = 84
GALLERY_WIDTHS = (480, 800, 1200, 1600)
SMALL_WIDTHS = (480, 800)


def sources() -> list[tuple[Path, tuple[int, ...]]]:
    gallery = sorted((MEDIA / "gallery").glob("*.jpg"))
    items = [(MEDIA / "enhanced" / photo.with_suffix(".webp").name, GALLERY_WIDTHS) for photo in gallery]
    items += [(path, SMALL_WIDTHS) for path in sorted((MEDIA / "activities").glob("*.webp"))]
    items.append((MEDIA / "scuba-shop-roatan.jpeg", SMALL_WIDTHS + (1200,)))
    return items


def main() -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)
    written = 0
    for source, widths in sources():
        if not source.exists():
            raise FileNotFoundError(source)
        with Image.open(source) as opened:
            image = ImageOps.exif_transpose(opened).convert("RGB")
            for width in widths:
                if width >= image.width:
                    continue
                target = OUTPUT / f"{source.stem}-{width}.webp"
                if target.exists() and target.stat().st_mtime >= source.stat().st_mtime:
                    continue
                height = round(image.height * width / image.width)
                resized = image.resize((width, height), Image.Resampling.LANCZOS)
                resized.save(target, "WEBP", quality=QUALITY, method=6)
                written += 1
    total = sum(path.stat().st_size for path in OUTPUT.glob("*.webp"))
    print(f"Wrote {written} images; responsive/ holds {total / 1_000_000:.1f} MB.")


if __name__ == "__main__":
    main()
