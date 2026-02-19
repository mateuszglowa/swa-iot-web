# Remote Monitoring – One-Page Site

A static one-page website for an industrial sensing and remote monitoring engineering team. The site targets operations-focused decision-makers (maintenance managers, plant managers, farm operators, infrastructure operators) and encourages intro-call signups for 30-day pilot projects.

## What’s included

- **Hero** – Headline, 30-day pilot badge, primary and secondary CTAs  
- **What we do** – Capabilities (sensor integration, edge, cloud, alerting, pilot model)  
- **Industries & use cases** – Five verticals: manufacturing, agricultural water, cold storage, energy, water treatment  
- **Pilot model** – Five-step process and reassurance (no long-term commitment)  
- **Our approach** – Short, no-hype positioning  
- **Final CTA** – Contact block and footer (email, LinkedIn, schedule call)  
- **Dark mode** – Toggle with persistence via `localStorage`

## Tech stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS v4**
- **shadcn/ui** (Button and theme)
- **Lucide React** (icons)
- **TypeScript**

The app is built as a **static export** (`output: "export"` in `next.config.ts`). No server or API routes; suitable for any static host.

## Prerequisites

- Node.js 18+
- npm (or yarn / pnpm / bun)

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build and deploy

Produce a static export:

```bash
npm run build
```

Output is written to the **`out/`** directory. Deploy the contents of `out/` to any static host (e.g. Vercel, Netlify, GitHub Pages, S3, Cloudflare Pages).

To preview the production build locally:

```bash
npm run build
npx serve out
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx    # Root layout, fonts, theme script, ThemeProvider
│   ├── page.tsx      # Single-page content and sections
│   └── globals.css   # Tailwind, theme variables, dark mode, utilities
├── components/
│   ├── theme-provider.tsx   # Client theme context and localStorage
│   ├── theme-toggle.tsx     # Dark/light switch (fixed top-right)
│   └── ui/
│       └── button.tsx      # shadcn Button
└── lib/
    └── utils.ts      # cn() for class names
```

## Customization

- **Contact details** – Update the placeholder email, LinkedIn URL, and Calendly (or booking) link in `src/app/page.tsx` (footer and CTA button).
- **Theme** – Colors and dark mode are defined in `src/app/globals.css` (`:root` and `.dark`). Navy and accent-industrial are used for primary actions and highlights.
- **Content** – Copy and use-case data live in `src/app/page.tsx` (constants and JSX).

## Scripts

| Command        | Description                    |
|----------------|--------------------------------|
| `npm run dev`  | Start dev server (Turbopack)   |
| `npm run build`| Static export into `out/`      |
| `npm run start`| Serve production build (needs prior `build`) |
| `npm run lint` | Run ESLint                     |

## License

Private. All rights reserved.
