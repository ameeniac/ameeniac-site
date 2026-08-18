# ameeniac.com

A static blog. Posts are Markdown files; the site builds to plain HTML.

## Running it locally

1. Install [Node.js](https://nodejs.org) 18 or newer.
2. In this folder, run `npm install`.
3. Run `npm run dev` and open http://localhost:4321.

The dev server reloads as you edit, so you can write with it open.

## Writing a post

1. Create a new `.md` file in `src/content/blog/`. The filename becomes the URL —
   `map-is-not-the-estate.md` publishes at `/blog/map-is-not-the-estate`.
2. Start the file with this block, between the two `---` lines:

```
---
title: "Your title"
description: "One sentence. This shows on the front page and in the RSS feed."
date: 2026-08-20
tag: "Discovery"
---
```

3. Write the body in Markdown below it.
4. Save. That's the whole workflow — no database, no admin panel.

`tag` is optional. Add `draft: true` to keep a post out of the site while you
work on it.

## Publishing

Push the folder to a GitHub repository, then connect it to
[Cloudflare Pages](https://pages.cloudflare.com) (free):

1. Create a repo and push this folder to it.
2. In Cloudflare Pages, choose **Connect to Git** and pick the repo.
3. Build command: `npm run build`. Output directory: `dist`.
4. Add `ameeniac.com` as a custom domain in the Pages project settings.

After that, every `git push` publishes. You can write posts directly in the
GitHub web editor if you don't want to work locally.

## Changing the look

All colours, fonts and spacing live at the top of `src/styles/global.css` as
CSS variables. Change them there and everything follows.

- `--pine` is the accent used for links and tags.
- `--amber` is reserved for the trace markers on the front page. It's the one
  loud colour on the site, so it stays meaningful only while it's rare.
- Fonts are Fraunces (headings), Literata (body) and IBM Plex Mono (dates and
  labels), loaded from Google Fonts in `src/layouts/Base.astro`.

## Before you go live

- Replace the two sample posts in `src/content/blog/`.
- Update the LinkedIn and GitHub links in `src/pages/about.astro`.
- The site URL is set in `astro.config.mjs` — change it if you use a different
  domain.
