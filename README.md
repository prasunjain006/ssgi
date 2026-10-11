# Shiv Sai Global Impex — Website Prototype

A responsive static website prototype for a merchant importer/exporter. Built with HTML, CSS and vanilla JavaScript.

## Files
- `index.html` — homepage and enquiry form
- `style.css` — responsive styling
- `script.js` — mobile navigation, category-to-form selection, demo form behaviour, reveal animations
- `privacy.html` — draft privacy page; company review required before public launch
- `assets/logo.jpeg` — supplied company logo used in header and footer

## Run locally
Open `index.html` in a modern browser. For local development, you may also use the VS Code Live Server extension.

## Publish with GitHub Pages
1. Create or sign in to a GitHub account.
2. Create a new public repository, for example `shiv-sai-global-impex`.
3. Upload the files in this folder to the repository root (not the containing folder itself). Ensure `index.html` is at the repository root.
4. Open repository **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/(root)`, then save.
7. Wait for GitHub Pages to publish the site. The URL is usually `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.
8. Open the URL and test it on desktop and mobile. Each new commit may trigger a fresh deployment.

## Before client presentation / public launch
- The supplied logo is included at `assets/logo.jpeg`; confirm the final brand colours with the client.
- Verify the supplied office address; it appears to begin with `7016569600B-203`, which may contain a phone number joined to the address.
- Obtain the company's confirmed business email, phone and WhatsApp details.
- Confirm target markets, product availability, specifications, packaging, MOQ and all company claims.
- Do not claim BRCGS, SEDEX/SMETA or other certification unless the company provides applicable verified evidence.
- The enquiry form is a prototype only. It generates a local text download and does not submit data to a server. Integrate a verified email/backend/form service before production.
- Product photos load from remote Unsplash image URLs; replace with licensed, approved images before production if required.
- The privacy policy is a draft placeholder and should be reviewed for the company's actual data handling practices.
