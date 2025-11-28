# Tamsin Urquhart

Personal website for Tamsin Urquhart.

## Live Site

https://ejntaylor.github.io/tamsinurquhart/

## Deployment

This site is hosted on GitHub Pages and deploys automatically from the `main` branch.

To deploy changes:
```bash
git add .
git commit -m "Your commit message"
git push
```

Changes typically go live within 1-2 minutes.

## Custom Domain (Optional)

To use a custom domain (e.g., `tamsinurquhart.com`):

1. Go to repository **Settings** → **Pages** → **Custom domain**
2. Enter your domain and save
3. Add DNS records with your domain registrar:
   - For apex domain (`tamsinurquhart.com`): Add A records pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - For subdomain (`www.tamsinurquhart.com`): Add a CNAME record pointing to `ejntaylor.github.io`
4. Wait for DNS propagation (can take up to 24 hours)
5. Enable "Enforce HTTPS" in Pages settings once the certificate is issued
