# Rotan Rental — Static Site Scaffold

This workspace contains a minimal static website ready for deployment to GitHub Pages via GitHub Actions.

What I added

- `public/index.html` — main site page
- `public/assets/css/style.css` — simple styles
- `public/assets/js/main.js` — tiny JS
- `.github/workflows/gh-pages.yml` — GitHub Actions workflow to publish `public/` to the `gh-pages` branch

Quick start

1. Create a GitHub repository and add it as `origin`.
2. Commit and push the `main` branch; the workflow will run and publish the site to the `gh-pages` branch.

Example commands (run in the repository root):

```bash
git init
git add .
git commit -m "Initial scaffold: static site + GH Pages workflow"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

After the workflow completes the site will be available at `https://<your-username>.github.io/<your-repo>/`.

If you want a custom domain, add a `CNAME` file into `public/` with your domain and commit.
