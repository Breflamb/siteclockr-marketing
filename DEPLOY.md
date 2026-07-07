# Deploying www.siteclockr.com (nginx on OVH VPS)

The marketing site is a static export (`./out`). Deploy = build locally (or in CI),
copy `out/` to the server, and point an nginx server block at it.

The SiteClockr **application** stays exactly as it is on `siteclockr.ie`; this is a
separate static site on its own domain.

## 1. Build

```bash
npm ci
npm run build   # produces ./out
```

## 2. Copy to the server

Pick a directory outside the app tree, e.g. `/var/www/siteclockr-marketing`.

```bash
# create the target once (as a user with rights, e.g. ubuntu)
ssh ubuntu@siteclockr.ie 'sudo mkdir -p /var/www/siteclockr-marketing && sudo chown $USER /var/www/siteclockr-marketing'

# sync the static build (repeat on every deploy)
rsync -az --delete out/ ubuntu@siteclockr.ie:/var/www/siteclockr-marketing/
```

## 3. DNS

Point the domain at the VPS:

- `A`  `siteclockr.com`      -> <VPS IP>
- `CNAME` `www.siteclockr.com` -> `siteclockr.com`  (or an `A` record to the same IP)

## 4. nginx server block

Create `/etc/nginx/sites-available/siteclockr-marketing`:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name siteclockr.com www.siteclockr.com;

    root /var/www/siteclockr-marketing;
    index index.html;

    # Static export uses trailingSlash, so URLs map to /path/index.html
    location / {
        try_files $uri $uri/ $uri.html /index.html;
    }

    # Long-cache the hashed Next.js assets
    location /_next/static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    error_page 404 /404.html;
}
```

Enable and reload:

```bash
sudo ln -s /etc/nginx/sites-available/siteclockr-marketing /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

## 5. HTTPS (Let's Encrypt)

```bash
sudo certbot --nginx -d siteclockr.com -d www.siteclockr.com
```

Certbot will add the `listen 443 ssl` block and an http->https redirect.

## Redeploying

```bash
npm run build && rsync -az --delete out/ ubuntu@siteclockr.ie:/var/www/siteclockr-marketing/
```

(Optionally wire this into a GitHub Action later so pushing to `main` deploys automatically.)
