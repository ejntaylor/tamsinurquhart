# Tamsin Urquhart

Personal website for Tamsin Urquhart.

## Live Site (Staging)

https://dynamic-twilight-d845a6.netlify.app

**Password:** `tamsin`

## Deployment

This site is hosted on Netlify.

To deploy changes:
```bash
netlify deploy --prod --dir .
```

Or commit and push to GitHub, then deploy from Netlify.

## Current Protections

- **Password protection:** Client-side JavaScript password prompt (password: `tamsin`)
- **SEO blocked:** All pages have `<meta name="robots" content="noindex, nofollow">` tags

## Going Live

When ready to launch on the custom domain:

1. Remove password protection:
   - Delete `js/password-protect.js`
   - Remove `<script src="js/password-protect.js"></script>` from all HTML files

2. Remove noindex tags:
   - Remove `<meta name="robots" content="noindex, nofollow">` from all HTML files

3. Add custom domain in Netlify:
   - Go to **Site settings** → **Domain management** → **Add custom domain**
   - Add DNS records with your registrar:
     - For apex domain: Add A record pointing to `75.2.60.5`
     - For www: Add CNAME record pointing to `dynamic-twilight-d845a6.netlify.app`
   - Netlify will auto-provision SSL certificate

## Local Development

Simply open any HTML file in a browser, or use a local server:
```bash
npx serve .
```
