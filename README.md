# Kozak Adjusting

Marketing website for **Kozak Adjusting LLC** — New Jersey licensed public adjusters.
Built with React + Vite, styled to match the sister site (Ukrainian Restoration), and
deployable as a static site to Firebase Hosting.

## Stack

- **React 18** + **React Router 6**
- **Vite 5** (dev server + production build)
- **Firebase Hosting** (static, SPA rewrites)

## Local development

```bash
npm install
npm run dev
```

The dev server prints a local URL (default `http://localhost:5173`).

## Production build

```bash
npm run build      # outputs static files to dist/
npm run preview    # serves the built dist/ locally to verify
```

## Deploy to Firebase

1. Install the Firebase CLI (bundled as a dev dependency, or install globally):
   ```bash
   npm install -g firebase-tools
   firebase login
   ```
2. The Firebase project is **`kozakadjusting-e76a3`**, already set as the default in
   [`.firebaserc`](.firebaserc).
3. Build and deploy:
   ```bash
   npm run deploy      # runs "npm run build && firebase deploy"
   ```

The `firebase.json` config serves `dist/` and rewrites all routes to `index.html`
so client-side routing works on refresh/deep links.

## Continuous deployment (GitHub Actions)

Two pipelines live in [`.github/workflows/`](.github/workflows/) and show up in the
repo's **Actions** tab:

- **`deploy.yml`** — on every push to `main`: `npm ci` → `npm run build` → deploy to the
  **live** Firebase Hosting channel.
- **`preview.yml`** — on every pull request: builds and deploys a temporary **preview**
  channel; the preview URL is posted as a comment on the PR.

### One-time setup (required before the pipelines work)

1. **Firebase project ID** is `kozakadjusting-e76a3` — already set in both workflow files
   (`projectId:`) and in [`.firebaserc`](.firebaserc).

2. **Add the `FIREBASE_TOKEN` secret.** This Google org enforces
   `iam.disableServiceAccountKeyCreation`, so service-account JSON keys can't be created.
   The workflows instead authenticate with a CI token (a user OAuth token, not a SA key):
   ```bash
   firebase login:ci        # opens a browser, prints a token
   ```
   Copy the token it prints, then store it as a repo secret:
   ```bash
   gh secret set FIREBASE_TOKEN -R gregreda37/kozakadjusting
   # paste the token when prompted
   ```
   (Or add it in the GitHub UI: repo → Settings → Secrets and variables → Actions →
   New repository secret, named `FIREBASE_TOKEN`.)

Once the secret exists, every push to `main` auto-builds and deploys, and each run is
visible under the repo's **Actions** tab.

### Custom domain (www.kozakadjusting.com)

In the Firebase console → **Hosting** → **Add custom domain**, enter
`www.kozakadjusting.com` and follow the DNS instructions (add the provided A / TXT
records at your domain registrar). Firebase provisions an SSL certificate automatically.

## Deploy to GitHub Pages (alternative)

Firebase Hosting is recommended. If you prefer GitHub Pages, the build in `dist/` can
be published from a `gh-pages` branch, but SPA routing requires a `404.html` fallback —
Firebase Hosting handles this automatically, so it's the simpler path.

## Contact form

The site is fully static, so the contact form ([`src/pages/Contact.jsx`](src/pages/Contact.jsx))
currently opens the visitor's email client via a `mailto:` link (to
`info@kozakadjusting.com`). To collect submissions server-side instead, swap the
`handleSubmit` handler for either:

- a **Formspree** endpoint (no backend code — just a POST URL), or
- a **Firebase Cloud Function** if you add the Functions product to this project.

## Project structure

```
index.html            Vite entry HTML
src/
  main.jsx            React entry
  App.jsx             Routes + layout
  index.css           Design system (shared with sister site)
  components/
    Navbar.jsx
    Footer.jsx
  pages/
    Home.jsx
    WaterFireDamage.jsx
    Reconstruction.jsx
    Contact.jsx
public/
  favicon.svg
firebase.json         Firebase Hosting config
.firebaserc           Firebase project ID
```

## Business details

- **Phone:** (973) 219-4973
- **NJ Public Adjuster License:** #1609652
- **Hours:** 24/7
- **Services:** Water & fire damage claims, remediation, and full reconstruction
