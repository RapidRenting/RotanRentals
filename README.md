# Roatan Rental

Simple static site for a rental property, hosted on GitHub Pages.

## Deploy

This repo deploys automatically on push to `main` using GitHub Pages Actions.

1. In the repo Settings, go to Pages and set **Source** to **GitHub Actions**.
2. Push to `main`. The workflow publishes the site from `public/`.

After the workflow completes the site will be available at:
`https://<your-username>.github.io/<your-repo>/`.

## Project Structure

- `public/index.html` — main site page
- `public/assets/css/style.css` — site styles
- `public/assets/js/main.js` — tiny JS
- `public/assets/media/` — photos and video
  - `enhanced/` — full-size 2400px WebP photos (also used by the full-screen gallery zoom)
  - `responsive/` — 480/800/1200/1600px copies offered through `srcset`
  - `og/` — 1200×630 JPEG link-preview images (keep each under ~300 KB so WhatsApp shows them)

## Photos

After adding or replacing a photo in `gallery/`/`enhanced/` (or `activities/`), create its smaller copies and commit them:

```bash
python tools/build_responsive_images.py
```

`tools/validate_i18n.py` fails if any page, or the gallery list in `main.js`, points at an image or file that does not exist.

## English and Spanish pages

English pages are the source for the matching Spanish pages under `public/es/`. After changing shared page structure or English copy, update the Spanish replacement text as needed and regenerate the Spanish pages:

```powershell
pwsh -File tools/Build-SpanishPages.ps1
python tools/validate_i18n.py
node tools/test_language_redirect.js
```

The validation checks English/Spanish structural parity, reciprocal `hreflang` links, self-canonicals, JSON-LD, indexing directives, the required property-management handoff, and all eight sitemap entries.

## Booking click analytics

Cloudflare Web Analytics is already installed as the site's free, privacy-conscious analytics service. To see how often a visitor opens the Lodgix booking page, filter **Path** to exactly `/analytics-events/booking-page-open/`, exclude bots, and use **Page views** as the outbound booking-click count. `/analytics-events/section-book/` separately shows opens of the availability section.

Use the installation token from Cloudflare **Manage site → Install JS Snippet** in `data-cf-beacon`; the dashboard's `siteTag` identifier is a different value. `tools/validate_i18n.py` checks the installation token on all eight visitor pages and all analytics event pages. If the installation token is rotated, update those pages and the validator together, then regenerate Spanish pages.

To verify collection after publication, visit the actual production site from a browser/network that permits Cloudflare Web Analytics, confirm beacon delivery, and allow a few minutes for the visit to appear in the correct site's dashboard. Label verification visits separately from organic traffic. A script tag, successful build, or zero report alone does not establish collection or the absence of visitors. On September 27, 2026, the production snippet was found using the site tag instead of the installation token; the local network also resolved `static.cloudflareinsights.com` to `0.0.0.0`. Keep privacy protections intact and use an independently permitted connection for live verification.

This reports clicks from the site, not unique people, completed bookings, or activity within the embedded Lodgix calendar. Privacy tools and ad blockers can undercount; repeat clicks can overcount people.

## Custom domain

Add a `CNAME` file into `public/` with your domain and commit.
