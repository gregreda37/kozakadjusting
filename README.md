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

2. **Add the service-account secret.** The workflows authenticate with a
   `FIREBASE_SERVICE_ACCOUNT` GitHub secret. The easiest way to generate it is:
   ```bash
   firebase login
   firebase init hosting:github
   ```
   Point it at this repo (`gregreda37/kozakadjusting`). It creates a service account,
   stores its JSON as a repo secret, and writes a workflow. **Rename** the secret it
   creates to `FIREBASE_SERVICE_ACCOUNT` (or update the workflow files to match the name
   it generated), and delete the extra workflow it adds if you want to keep only these two.

   To add the secret manually instead: create a service account key in the Firebase
   console (Project settings → Service accounts → Generate new private key), then:
   ```bash
   gh secret set FIREBASE_SERVICE_ACCOUNT < path/to/serviceAccountKey.json
   ```

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
