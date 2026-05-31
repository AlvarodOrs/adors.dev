# adors.dev

Personal portfolio — Álvaro d'Ors Nestares  
Next.js 14 · Cloudflare Pages · TypeScript · Tailwind

## Stack

- **Framework**: Next.js 14 (App Router)
- **Deployment**: Cloudflare Pages via `@cloudflare/next-on-pages`
- **Styling**: Tailwind CSS
- **Content**: MDX (`next-mdx-remote`)

## Dev

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run pages:build   # builds for Cloudflare Pages
npm run pages:deploy  # deploys via wrangler
```

## Adding a project

Create a new `.mdx` file in `content/projects/`:

```mdx
---
title: "Project Name"
description: "One line description."
status: "in-progress"   # or "live"
tags: ["python", "finance"]
date: "2025-06-01"
---

Your MDX content here.
```

The project will appear automatically on the homepage.
