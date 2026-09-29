# دلني (Delini)

Landing page for **Delini**, an interactive indoor-navigation map app for King Saud University.
Built with [Next.js](https://nextjs.org) (App Router), React, Tailwind CSS, shadcn/ui and Framer Motion.

## Prerequisites

- **Node.js 20.9 or newer** (Node 22 LTS recommended). Check with `node -v`.
- **npm** (comes with Node). The project uses `package-lock.json`, so use npm rather than pnpm/yarn.

## Getting started

1. Clone the repo and move into it:

   ```bash
   git clone <repo-url> delini
   cd delini
   ```

2. Install dependencies (uses the exact versions from the lockfile):

   ```bash
   npm ci
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000). Edits to files in `app/` and `components/` reload automatically.

## Scripts

| Command             | What it does                                              |
| ------------------- | --------------------------------------------------------- |
| `npm run dev`       | Start the dev server with hot reload on port 3000         |
| `npm run build`     | Create an optimized production build in `.next/`          |
| `npm start`         | Serve the production build (run `npm run build` first)    |
| `npm run typecheck` | Type-check the project with TypeScript                    |

To use a different port: `npm run dev -- -p 4000`.

## Running in production

```bash
npm ci
npm run build
npm start
```

The site is fully static, so it can also be deployed directly to [Vercel](https://vercel.com) by importing the repository.

## Project structure

```
app/
  layout.tsx                 Root layout (lang="ar") and site metadata
  page.tsx                   Home page and SEO metadata
  DeliniAboutPageClient.tsx  The landing page content and animations
  globals.css                Global styles and Tailwind theme variables
  icon.png                   Favicon
components/ui/               shadcn/ui components (button, card, ...)
hooks/                       Shared React hooks
lib/utils.ts                 `cn()` class-name helper
public/                      Static images
```

Most page content (text, feature list, team members and their links) lives in
`app/DeliniAboutPageClient.tsx`.

## Adding UI components

The project is set up for [shadcn/ui](https://ui.shadcn.com) (see `components.json`). Components live in
`components/ui/` and are imported with the `@/` alias, e.g. `import { Button } from "@/components/ui/button"`.

## Troubleshooting

- **`next: command not found`**: dependencies aren't installed; run `npm ci`.
- **Port 3000 already in use**: stop the other process or run `npm run dev -- -p 3001`.
- **Unsupported engine / syntax errors on install or start**: upgrade Node to 20.9+ (`node -v`).
- **Stale build output**: delete the `.next/` folder and run the command again.
