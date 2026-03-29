# thedeveco.com

Professional website for **devEco Consulting LLC** — a developer relations consultancy helping organizations build thriving developer communities.

**Live site**: [thedeveco.com](https://thedeveco.com)

---

## Tech Stack

- **Framework**: Vue 3 with Composition API (`<script setup>`)
- **Language**: TypeScript
- **Build**: Vite 7
- **Routing**: Vue Router 4 (history mode)
- **State**: Pinia
- **Icons**: Font Awesome 7 (solid + brands)
- **Typography**: JetBrains Mono (Google Fonts)
- **Deployment**: GitHub Pages via GitHub Actions

## Quick Start

```bash
# Prerequisites: Node.js 20+ or 22+
git clone https://github.com/thedeveco/thedeveco.com.git
cd thedeveco.com
npm install
npm run dev
# Open http://localhost:5173
```

## Available Scripts

```bash
npm run dev          # Development server with hot reload
npm run build        # Type-check + production build
npm run build-only   # Production build only (used by CI)
npm run preview      # Preview production build locally
npm run type-check   # TypeScript validation
npm run lint         # ESLint with auto-fix
```

## Deployment

The site deploys automatically to GitHub Pages when changes are pushed to `main`.

**Pipeline**: Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) → `npm ci && npm run build-only` → publish `dist/` to `gh-pages` branch

Custom domain `thedeveco.com` is configured via CNAME files. SPA routing on GitHub Pages is handled by a `404.html` redirect that preserves paths for Vue Router.

## Project Structure

```
src/
├── App.vue                    # Root component with global styles and CSS variables
├── main.ts                    # Entry: Font Awesome, Pinia, Router, SPA redirect handler
├── assets/                    # CSS files
├── components/
│   ├── layout/
│   │   ├── HeaderNav.vue      # Sticky nav with mobile menu + Community dropdown
│   │   └── FooterNav.vue      # 4-column footer
│   └── ui/
│       ├── ClientLogos.vue    # Partner/client logo grid
│       ├── EcosystemTile.vue  # Clickable card for ecosystem listings
│       ├── EcosystemModal.vue # Detail modal for ecosystem listings
│       └── ProcessVisualization.vue
├── router/
│   └── index.ts               # 7 routes
├── stores/
│   └── counter.ts             # Pinia boilerplate
└── views/
    ├── HomeView.vue            # Landing page with hex grid animation
    ├── ConsultancyView.vue     # Services, process, team bios
    ├── EcosystemView.vue       # Ecosystem directory (20+ listings)
    ├── DevXRL.vue              # DevXRL audit product page (scroll-snap)
    ├── CommunityView.vue       # Community page with logo animation
    ├── ProjectsView.vue        # Products: portalNetwork, B3VY, LaunchCue
    └── ContactView.vue         # Contact form and office hours

public/
├── clients/                   # Partner/client logo images
├── images/                    # Site logos
├── projects/                  # Product images
├── team/                      # Team member photos
├── trail-sandiego/            # EDGE AI Trail game (static Next.js export)
├── 404.html                   # SPA redirect for GitHub Pages
├── CNAME                      # Custom domain
└── .nojekyll                  # Prevents Jekyll processing
```

## Site Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Landing with animated hex grid, services overview, team, partners |
| Services | `/consultancy` | Detailed service offerings, process, team bios |
| Ecosystem | `/ecosystem` | Directory of partners, clients, supported creators, collaborators |
| DevXRL | `/devxrl` | DevXRL Audit product page with interactive readiness scale |
| Community | `/community` | Community values, events, Discord CTA |
| About | `/about` | The Collective team section, rocket-portal animation |
| Contact | `/contact` | Contact options, form, virtual office hours |

## Design System

- **Typeface**: JetBrains Mono exclusively
- **Border radius**: Zero throughout (sharp corners everywhere)
- **Primary palette**: Teal (`#4db3a8`), Navy (`#1e3a3a`)
- **Accents**: Pink (`#e84a7f`), Yellow (`#f7c948`), Cyan (`#4ecdc4`)
- **Components**: Stamps (dashed borders), Badges (solid), Cards (hover shadow offset)
- **Layout**: 1200px max-width, CSS Grid, responsive at 900px/768px/480px

Full design system details are documented in `CLAUDE.md`.

## Adding Client Logos

1. Add image file to `/public/clients/` (lowercase filename, PNG/SVG/JPG)
2. Edit `src/components/ui/ClientLogos.vue`
3. Add entry inside `.partners-grid`:
   ```html
   <a href="https://company.com" target="_blank" rel="noopener" class="partner-logo">
     <img src="/clients/company-logo.png" alt="Company Name" />
   </a>
   ```
4. Test locally, commit both files

## Contributing

1. Create feature branch from `main`
2. Follow patterns in `CLAUDE.md`
3. Test locally with `npm run dev`
4. Verify production build with `npm run build`
5. Submit PR with Conventional Commit messages

## Bible Files

This project uses bible files for session-agnostic development:

- **CLAUDE.md** — Primary onboarding document for Claude sessions (architecture, patterns, conventions)
- **README.md** — This file (project overview and quick reference)
- **ROADMAP.md** — Planned features and improvements
- **CHANGELOG.md** — History of changes

## Contact

- **Email**: hello@thedeveco.com
- **Discord**: [discord.gg/deveco](https://discord.gg/deveco)
- **LinkedIn**: [linkedin.com/company/thedeveco](https://linkedin.com/company/thedeveco)

---

*devEco Consulting LLC — DevRel from the workshop floor.*
