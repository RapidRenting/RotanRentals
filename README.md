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

## English and Spanish pages

English pages are the source for the matching Spanish pages under `public/es/`. After changing shared page structure or English copy, update the Spanish replacement text as needed and regenerate the Spanish pages:

```powershell
pwsh -File tools/Build-SpanishPages.ps1
python tools/validate_i18n.py
node tools/test_language_redirect.js
```

The validation checks English/Spanish structural parity, reciprocal `hreflang` links, self-canonicals, JSON-LD, indexing directives, the required property-management handoff, and all eight sitemap entries.

## Custom domain

Add a `CNAME` file into `public/` with your domain and commit.
