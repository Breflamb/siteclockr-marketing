# SiteClockr — Marketing Site

Marketing website for **SiteClockr**, hosted at **www.siteclockr.com**.

Built with [Next.js](https://nextjs.org) (App Router) + [Tailwind CSS](https://tailwindcss.com) and exported as a **fully static site** so it can be served by nginx on the existing OVH VPS — completely separate from the SiteClockr application itself (which runs on `siteclockr.ie`).

## Tech stack

- Next.js 16 (App Router, static export via `output: "export"`)
- React 19
- Tailwind CSS v4
- TypeScript

## Local development

Requires Node.js 20+.

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production build

```bash
npm run build    # outputs a static site to ./out
```

The `out/` directory contains plain HTML/CSS/JS with no server runtime required.

Preview the static build locally:

```bash
npx serve out
```

## Project structure

```
src/
  app/
    layout.tsx        # root layout, metadata, header + footer
    page.tsx          # landing page (composes the sections)
    globals.css       # brand tokens (mirrors the app's teal theme) + Tailwind
    robots.ts         # /robots.txt
    sitemap.ts        # /sitemap.xml
  components/
    Header.tsx, Footer.tsx, Logo.tsx, icons.tsx
    sections/         # Hero, Features, HowItWorks, Compliance, Pricing, Faq, CtaBand
  lib/
    site.ts           # site constants: URLs, nav, copy
public/
  brand/logo.png      # SiteClockr logo
```

## Editing content

Most copy lives in the section components under `src/components/sections/` and in
`src/lib/site.ts` (URLs, contact email, tagline). All content is placeholder-quality
and intended to be refined.

## Deployment

See [`DEPLOY.md`](./DEPLOY.md) for the nginx setup on the OVH VPS.
