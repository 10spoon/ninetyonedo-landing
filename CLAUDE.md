# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Korean-language landing page for 91도 (91 Degrees), an MVP development company. Built with Next.js 16, React 19, and Tailwind CSS v4.

## Commands

```bash
pnpm dev      # Start development server
pnpm build    # Production build
pnpm lint     # Run ESLint
pnpm start    # Start production server
```

## Architecture

**Single-page landing site** with section-based components:
- `app/page.tsx` - Main page composing all sections
- `components/` - Section components (hero, pricing, fields, portfolio, considerations, contact, footer, navigation)
- `components/ui/` - shadcn/ui primitives (new-york style)

**Server Action**: `app/actions.ts` handles contact form submission to Notion database. Requires `@notionhq/client` package and environment variables `NOTION_API_KEY` and `NOTION_DATABASE_ID`.

## Key Technical Details

- **Tailwind CSS v4** with `@tailwindcss/postcss` - uses new `@import 'tailwindcss'` syntax
- **shadcn/ui** configured in `components.json` with path aliases (`@/components`, `@/lib`, `@/hooks`)
- **Styling**: CSS variables for theming in `app/globals.css` using oklch color space; `cn()` utility in `lib/utils.ts` for class merging
- **Notifications**: Uses `sonner` toast library (configured in layout)
- **Analytics**: Vercel Analytics enabled
- **TypeScript build errors ignored** in `next.config.mjs`
