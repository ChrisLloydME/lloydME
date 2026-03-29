# lloydME

Personal website and blog built with Astro, TypeScript, Markdown content collections, and Tailwind CSS v4.

The site is statically generated and includes:

- a homepage with featured blog and project sections
- a blog index and individual post pages
- tag archive pages
- an about page
- a projects index and project detail pages

## Tech Stack

- Astro 5/6
- TypeScript
- Astro Content Collections
- Markdown
- Tailwind CSS v4

## Requirements

- Node.js `>= 22.12.0`
- npm

## Development

```bash
npm install
npm run dev
```

The local dev server usually runs at [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
npm run preview
```

If you want correct canonical URLs and absolute site metadata during build, set `SITE_URL` first:

```bash
SITE_URL="https://example.com" npm run build
```

## Project Structure

```text
src/
  assets/          Images used by pages and content
  components/      Reusable Astro components
  content/blog/    Markdown blog posts
  data/            Structured data for projects
  layouts/         Shared page layouts
  pages/           Route entry files
  styles/          Global styles
  utils/           Path and blog helpers
```

## Blog Content

Blog posts live in `src/content/blog` and use frontmatter like this:

```md
---
title: Example Post
date: 2026-03-14
description: Short summary
tags: [blog, example]
draft: false
featured: true
updatedDate: 2026-03-20
heroImage: ./cover.jpg
cardImage: ./card.jpg
heroImageAlt: Cover description
pageTheme: blue-immersive
---
```

Current schema fields:

- `title`
- `date`
- `description`
- `tags`
- `draft`
- `featured`
- `updatedDate`
- `heroImage`
- `cardImage`
- `heroImageAlt`
- `pageTheme`

## Routes

- `/`
- `/blog`
- `/blog/[slug]`
- `/tags`
- `/tags/[tag]`
- `/about`
- `/projects`
- `/projects/[slug]`

## Deployment

This project is a good fit for Cloudflare Pages or any static hosting platform that serves the generated `dist/` directory.

For Cloudflare Pages, use:

1. Framework preset: `Astro`
2. Build command: `npm run build`
3. Build output directory: `dist`
4. Environment variable: `SITE_URL=https://your-domain.com`
