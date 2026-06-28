# KDigital — Website

A modern, multi-page marketing site for **KDigital Technologies**, built as self-contained HTML pages. It runs as plain static files — no build step, no framework install — so it deploys anywhere that serves static files (Vercel, Netlify, GitHub Pages, S3, any web server).

---

## What's in here

```
.
├── Home.dc.html              # Home (site entry point)
├── Platform.dc.html          # Platform / Agent OS
├── Workflows.dc.html
├── Integrations.dc.html
├── Security.dc.html
├── KonaCRM.dc.html           # Product pages
├── KonaLMS.dc.html
├── CommerceAI.dc.html
├── Solutions.dc.html         # Solutions hub
├── Industry.dc.html          # Per-industry page (reads ?ind=…)
├── Services.dc.html
├── Salesforce.dc.html
├── ServiceNow.dc.html
├── Marketing.dc.html
├── Resources.dc.html
├── CustomerStories.dc.html
├── Company.dc.html
├── Contact.dc.html
├── Privacy.dc.html
├── Terms.dc.html
├── Nav.dc.html               # Shared nav (imported by every page)
├── Footer.dc.html            # Shared footer (imported by every page)
├── support.js                # Runtime that renders the .dc.html pages
├── _ds/                      # Design system (tokens, fonts, styles)
├── uploads/                  # Logo and brand assets
├── favicon.png  og-image.png # Icons & social share image
├── robots.txt  sitemap.xml   # SEO crawl files
├── vercel.json               # Clean-URL routing for Vercel
└── SEO-Report.md             # SEO audit & pre-launch checklist
```

> **Note:** Pages use the `.dc.html` extension. They are ordinary HTML files — they open directly in any browser. `Nav.dc.html` and `Footer.dc.html` are shared components the other pages pull in; keep them alongside the rest.

You can safely delete `screenshots/` and `_archive/` before deploying — they aren't used by the site.

---

## Run locally

Because pages load a few sibling files, use a tiny static server rather than opening the file directly:

```bash
# Python (already on most machines)
python3 -m http.server 8000
# then open http://localhost:8000/Home.dc.html
```

```bash
# or Node
npx serve .
```

---

## Put it on GitHub

1. Install [git](https://git-scm.com/) and create a free account at [github.com](https://github.com).
2. In this folder, initialize and commit:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: KDigital website"
   ```

3. Create a new **empty** repository on GitHub (no README/license) — e.g. `kdigital-website`.
4. Connect and push (replace `YOUR-USERNAME`):

   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/kdigital-website.git
   git push -u origin main
   ```

Your code is now on GitHub.

---

## Deploy on Vercel

### Option A — Import from GitHub (recommended)

1. Sign in at [vercel.com](https://vercel.com) with your GitHub account.
2. Click **Add New… → Project**, then **Import** your `kdigital-website` repo.
3. Framework Preset: **Other**. Leave **Build Command** empty and **Output Directory** as `./` (root). There is no build step — it's static.
4. Click **Deploy**. In ~30 seconds you'll get a live URL like `kdigital-website.vercel.app`.

`vercel.json` is picked up automatically and gives you clean URLs (`/platform`, `/products/kona-crm`, `/solutions/education`, …) plus long-lived caching for assets.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel        # preview deploy (follow the prompts)
vercel --prod # production deploy
```

### Add your custom domain (kdigital.ai)

1. In the Vercel project → **Settings → Domains**, add `kdigital.ai` and `www.kdigital.ai`.
2. At your domain registrar, point DNS to Vercel (an `A` record for the apex and a `CNAME` for `www`, as Vercel instructs).
3. Vercel provisions HTTPS automatically.

> Every push to your GitHub `main` branch will auto-deploy to production. Pull requests get their own preview URLs.

---

## ⚠️ Wire up the demo form (do this before launch)

The Contact page form validates input, shows a success state, and saves every submission to the browser's `localStorage` (`kd_demo_requests`) as a backup. **Once you add a free access key, every submission is emailed to `kona@kdigital.ai`.**

It uses **[Web3Forms](https://web3forms.com)** — no account or server needed:

1. Go to **[web3forms.com](https://web3forms.com)** and enter **`kona@kdigital.ai`** as the email to receive submissions.
2. They instantly email you an **Access Key** (a long code).
3. Open **`Contact.dc.html`**, find this line near the top of the `<script data-dc-script>` block:

   ```js
   ACCESS_KEY = 'YOUR_ACCESS_KEY';
   ```

4. Replace `YOUR_ACCESS_KEY` with the key from your email. (To send leads somewhere else later, register a new key with that address — the recipient is tied to the key.)
5. Redeploy. Submit a test from the live site and confirm the email lands in `kona@kdigital.ai`.

That's it — submissions now arrive in your inbox, with the `localStorage` copy as a safety net. If the request ever fails, it falls back to opening the visitor's email client addressed to `kona@kdigital.ai` so a lead is never lost.

> Prefer Formspree or your own backend instead? Swap the `FORM_ENDPOINT` and the `body` of the `fetch` in `submit()` — the rest of the flow stays the same.

---

## Before you go live (from SEO-Report.md)

- **Wire the demo form** (above) and confirm a test lead is delivered end to end.
- Confirm the production domain is `https://www.kdigital.ai` — if it changes, update the URLs in `robots.txt`, `sitemap.xml`, and the `canonical`/`og:url` tags.
- Verify the site in **Google Search Console** + **Bing Webmaster Tools** and submit `sitemap.xml`.
- Add **GA4** (or a privacy-first analytics tag) — paste the snippet into each page's `<helmet>`.
- Set `<html lang="en">` if you later move to a server-rendered setup.

See **SEO-Report.md** for the full audit, URL map, and keyword targets.

---

## Editing content

Each page is a single `.dc.html` file. Text and styling live inline; the page's data (cards, stats, menu items) lives in the `<script data-dc-script>` block at the bottom of the file. Edit, save, refresh — no build required. Shared header/footer changes go in `Nav.dc.html` / `Footer.dc.html` and apply everywhere.
