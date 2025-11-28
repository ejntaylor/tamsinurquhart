# Tamsin Urquhart

Personal website for Tamsin Urquhart.

## Live Site (Staging)

https://dynamic-twilight-d845a6.netlify.app

**Password:** `tamsin`

## Deployment

```bash
netlify deploy --prod --dir .
```

## Staging vs Production

### Enable Staging Mode (password + noindex)

Run this to add protection before sharing for review:

```bash
# Add noindex to all HTML files
find . -name "*.html" -exec sed -i '' 's/<meta name="robots" content="index, follow">/<meta name="robots" content="noindex, nofollow">/g' {} \;

# Uncomment password script in all HTML files
find . -name "*.html" -exec sed -i '' 's/<!-- <script src="js\/password-protect.js"><\/script> -->/<script src="js\/password-protect.js"><\/script>/g' {} \;
find . -name "*.html" -exec sed -i '' 's/<!-- <script src="..\/js\/password-protect.js"><\/script> -->/<script src="..\/js\/password-protect.js"><\/script>/g' {} \;
```

### Enable Production Mode (no password, SEO enabled)

Run this when ready to go live:

```bash
# Enable SEO indexing
find . -name "*.html" -exec sed -i '' 's/<meta name="robots" content="noindex, nofollow">/<meta name="robots" content="index, follow">/g' {} \;

# Comment out password script
find . -name "*.html" -exec sed -i '' 's/<script src="js\/password-protect.js"><\/script>/<!-- <script src="js\/password-protect.js"><\/script> -->/g' {} \;
find . -name "*.html" -exec sed -i '' 's/<script src="..\/js\/password-protect.js"><\/script>/<!-- <script src="..\/js\/password-protect.js"><\/script> -->/g' {} \;
```

Then deploy:
```bash
netlify deploy --prod --dir .
```

## Current Status

- [x] Password protection enabled
- [x] SEO blocked (noindex)
- [x] Netlify forms configured
- [ ] Custom domain configured

## Custom Domain Setup

When ready to add custom domain:

1. Go to Netlify dashboard → **Site settings** → **Domain management**
2. Click **Add custom domain** and enter your domain
3. Add DNS records at your registrar:
   - **Apex domain** (tamsinurquhart.com): A record → `75.2.60.5`
   - **www subdomain**: CNAME → `dynamic-twilight-d845a6.netlify.app`
4. Wait for DNS propagation and SSL provisioning

## Forms

Contact form submissions go to: Netlify dashboard → **Forms**

## Local Development

```bash
npx serve .
```
