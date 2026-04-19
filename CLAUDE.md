# CLAUDE.md — thedeveco.com Session Bible

> **Purpose**: This file is the single-source onboarding document for any Claude Chat or Claude Code session working on thedeveco.com. Read this file FIRST before making any changes. It contains everything needed to understand the codebase, make changes safely, and produce work that matches the established patterns.

---

## Project Identity

**Repository**: `github.com/thedeveco/thedeveco.com`
**Live URL**: `https://thedeveco.com`
**Owner**: devEco Consulting LLC (Robert Wolff, Founder)
**Purpose**: Professional website for devEco Consulting — a developer relations consultancy and community platform

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Vue 3 (Composition API + `<script setup>`) | ^3.5.22 |
| Language | TypeScript (strict) | ~5.9.0 |
| Build | Vite | ^7.1.7 |
| Router | Vue Router 4 (history mode) | ^4.5.1 |
| State | Pinia (installed, only boilerplate store exists) | ^3.0.3 |
| Icons | Font Awesome 7 (solid + brands, via `@fortawesome/vue-fontawesome`) | ^7.1.0 |
| Typeface | JetBrains Mono (Google Fonts CDN, loaded in App.vue) | — |
| Node | ^20.19.0 or >=22.12.0 | — |

---

## Deployment Pipeline

**Host**: GitHub Pages (gh-pages branch)
**Trigger**: Push to `main` branch
**Workflow**: `.github/workflows/deploy.yml`

```
Push to main → GitHub Actions → npm ci → npm run build-only → peaceiris/actions-gh-pages@v4 → dist/ → gh-pages branch
```

**Key deployment details**:
- The workflow uses Node 22 and runs `npm run build-only` (Vite build without type-check, for speed)
- Output publishes to `gh-pages` branch via `peaceiris/actions-gh-pages@v4`
- Custom domain configured via `CNAME` files (root and `/public/CNAME`) containing `thedeveco.com`
- SPA routing on GitHub Pages uses a `404.html` redirect trick: stores path in `sessionStorage`, redirects to `/`, and `main.ts` picks it up after router is ready
- `/public/.nojekyll` prevents GitHub Pages from processing files through Jekyll

> **IMPORTANT**: `DEPLOYMENT.md` in the repo references DigitalOcean App Platform — this is OUTDATED. The actual deployment is GitHub Pages via GitHub Actions as described above.

---

## Project Structure

```
thedeveco.com/
├── .github/
│   ├── scripts/              # Python scripts for event updates (unused currently)
│   │   ├── update_events.py
│   │   └── update_events_local.py
│   └── workflows/
│       └── deploy.yml        # GitHub Pages deployment workflow
├── public/                   # Static assets (copied as-is to dist/)
│   ├── 404.html              # SPA redirect for GitHub Pages
│   ├── .nojekyll             # Prevents Jekyll processing
│   ├── CNAME                 # Custom domain: thedeveco.com
│   ├── favicon.ico
│   ├── clients/              # Partner/client logo images
│   ├── images/               # Site images (logos)
│   │   ├── deveco-community-logo.png
│   │   └── deveco-consulting-logo.png
│   ├── projects/             # Product screenshots/logos
│   │   ├── portalnetwork.png
│   │   ├── portalnetwork-new.png
│   │   ├── b3vy.png
│   │   └── launchcue.png
│   ├── team/                 # Team member photos
│   │   ├── robert.jpg
│   │   ├── moheeb.jpg
│   │   └── tory.jpg
│   └── trail-sandiego/       # Static export of EDGE AI Trail game (Next.js)
├── src/
│   ├── App.vue               # Root component: HeaderNav + RouterView + FooterNav
│   │                         # Contains ALL global CSS variables and base styles
│   ├── main.ts               # Entry point: Font Awesome setup, Pinia, Router, SPA redirect handler
│   ├── assets/
│   │   ├── base.css          # Vue scaffolding CSS (mostly overridden by App.vue)
│   │   ├── main.css          # Minimal app CSS (mostly overridden by App.vue)
│   │   └── logo.svg          # Unused Vue default logo
│   ├── components/
│   │   ├── layout/
│   │   │   ├── HeaderNav.vue # Sticky nav with mobile hamburger + Services dropdown + Community dropdown + Explore dropdown
│   │   │   └── FooterNav.vue # 4-column footer: brand + Services, Community, Explore columns
│   │   ├── ui/
│   │   │   ├── LogoCarousel.vue        # Auto-scrolling logo carousel (pause-on-hover, CSS animation)
│   │   │   ├── EcosystemTile.vue      # Clickable tile card for ecosystem listings
│   │   │   ├── EcosystemModal.vue     # Detail modal for ecosystem listings (Teleport to body)
│   │   │   └── ProcessVisualization.vue # 4-step process with FA icons (unused on current pages)
│   │   ├── HelloWorld.vue    # Vue scaffolding (unused)
│   │   ├── TheWelcome.vue    # Vue scaffolding (unused)
│   │   ├── WelcomeItem.vue   # Vue scaffolding (unused)
│   │   └── icons/            # Vue scaffolding icon components (unused)
│   ├── router/
│   │   └── index.ts          # 8 routes: / /consultancy /ecosystem /devxrl /community /about /contact /heimdall
│   ├── stores/
│   │   └── counter.ts        # Pinia boilerplate (unused)
│   └── views/
│       ├── HomeView.vue       # Landing page with hex grid animation, services, process, team, CTA
│       ├── ConsultancyView.vue # Services page with animated logo, services grid, process, team bios
│       ├── EcosystemView.vue  # Data-driven ecosystem directory (20+ listings, tile+modal)
│       ├── DevXRL.vue         # Full-page scroll-snap DevXRL audit product page
│       ├── CommunityView.vue  # Community page with logo slam animation
│       ├── ProjectsView.vue   # Products page with rocket-portal SVG animation
│       ├── ContactView.vue    # Contact form (simulated submission, no backend)
│       ├── HeimdallView.vue   # Hidden easter egg page (not in nav)
│       └── AboutView.vue      # Boilerplate placeholder (not in router)
├── index.html                # Vite entry HTML
├── package.json
├── vite.config.ts            # Vite config: @ alias, vendor chunk splitting, base: '/'
├── tsconfig.json             # References tsconfig.app.json and tsconfig.node.json
├── tsconfig.app.json
├── tsconfig.node.json
├── eslint.config.ts
├── env.d.ts                  # Vite client types
├── CNAME                     # Domain file (root level)
├── DEPLOYMENT.md             # OUTDATED — references DigitalOcean, actual deploy is GitHub Pages
├── README.md                 # Project README
├── CLAUDE.md                 # THIS FILE — session bible
├── ROADMAP.md                # Project roadmap
├── CHANGELOG.md              # Change history
├── animation.html            # Standalone hex animation prototype (not part of build)
├── hexanimate.html           # Standalone hex animation prototype (not part of build)
└── mockup.html               # Standalone design mockup (not part of build)
```

---

## Route Map

| Path | View Component | Load | Nav Label |
|------|---------------|------|-----------|
| `/` | HomeView.vue | Eager | (logo click) |
| `/consultancy` | ConsultancyView.vue | Lazy | Services (dropdown trigger, clickable) |
| `/ecosystem` | EcosystemView.vue | Lazy | Explore → Ecosystem (dropdown) |
| `/devxrl` | DevXRL.vue | Lazy | Services → DevXRL (dropdown) |
| `/community` | CommunityView.vue | Lazy | Community (has dropdown) |
| `/about` | ProjectsView.vue | Lazy | About |
| `/contact` | ContactView.vue | Lazy | Contact Us (CTA button) |
| `/heimdall` | HeimdallView.vue | Lazy | (hidden — easter egg, not in nav) |

**Nav order**: About | Services (dropdown) | Community (dropdown) | Explore (dropdown) | Contact Us (CTA)

The Services nav item is a clickable `<router-link to="/consultancy">` with a hover dropdown containing: Consultancy (internal route), DevXRL (internal route).

The Explore nav item includes a dropdown with: Ecosystem (internal route), devEco.io (external), devEco.app (external).

The Community nav item includes a dropdown with external links: Discord, GitHub, LinkedIn, YouTube, Instagram, Twitch.

---

## Design System

### Typography
- **Font**: JetBrains Mono exclusively (loaded from Google Fonts in App.vue)
- **Weights**: 400, 500, 700 (+ 600, 800 on DevXRL page)
- **Scale**: `clamp()` for responsive headings; `0.875rem` body text; `0.75rem` labels/small

### Color Palette

**Brand Colors**:
| Token | Hex | Usage |
|-------|-----|-------|
| `--teal-light` | `#4db3a8` | Primary accent, links, highlights |
| `--teal` | `#3d9991` | Buttons, active states |
| `--teal-dark` | `#2a6b6b` | Hover states |
| `--navy` | `#1e3a3a` | Dark backgrounds, text headings, logo frame |

**Accent Colors**:
| Token | Hex | Usage |
|-------|-----|-------|
| `--accent-pink` | `#e84a7f` | Stamps, badges |
| `--accent-yellow` | `#f7c948` | Highlights, yellow accent |
| `--accent-cyan` | `#4ecdc4` | Cyan accent |
| `--accent-blue` | `#5bc0eb` | Blue accent |

**Neutrals**:
| Token | Hex | Usage |
|-------|-----|-------|
| `--text-dark` | `#1a2e2e` | Body text, footer background |
| `--text-mid` | `#4a5e5e` | Secondary text |
| `--text-light` | `#7a8e8e` | Muted text |
| `--border` | `#c5d5d5` | Borders, dividers |
| `--bg-light` | `#eef3f6` | Page backgrounds |
| `--bg-white` | `#f8fafb` | Section backgrounds |

**DevXRL Page** uses its own parallel palette (defined in DevXRL.vue):
| Token | Hex |
|-------|-----|
| `--dxrl-bg` | `#f0ede4` (parchment) |
| `--dxrl-teal` | `#4db3a8` |
| `--dxrl-gold` | `#d4a843` |
| `--dxrl-red` | `#c45b5b` |
| `--dxrl-ink` | `#1e3a3a` |

### Component Patterns

**Zero border-radius** is used throughout the entire site. No rounded corners anywhere.

**Stamps** (dashed border tags):
```html
<span class="stamp stamp-teal">Label</span>
<span class="stamp stamp-pink">Label</span>
<span class="stamp stamp-navy">Label</span>
```

**Badges** (solid background tags):
```html
<span class="badge badge-teal">Label</span>
<span class="badge badge-pink">Label</span>
<span class="badge badge-navy">Label</span>
```

**Cards** (hoverable with offset box-shadow):
```html
<div class="card">Content</div>
<!-- Hover: border-color: teal, box-shadow: 6px 6px 0 teal -->
```

**Buttons**:
```html
<router-link class="btn btn-primary">Primary</router-link>  <!-- Teal bg, navy shadow -->
<router-link class="btn btn-secondary">Secondary</router-link>  <!-- Transparent, navy border -->
```

**Section structure**:
```html
<section>
  <div class="container">
    <div class="section-header">
      <h2>Title</h2>  <!-- Gets ::after teal underline -->
    </div>
    <!-- Content -->
  </div>
</section>
```

### Layout
- **Max width**: 1200px (`.container`)
- **Grids**: CSS Grid with `auto-fit, minmax()` for responsive columns
- **Breakpoints**: 900px (grid collapse), 768px (mobile), 480px (small mobile)
- **Spacing**: CSS custom properties (`--space-xs` through `--space-2xl`)

---

## Conventions & Patterns

### Vue Component Conventions
- All components use `<script setup lang="ts">` (Composition API)
- Scoped styles (`<style scoped>`) for component-specific CSS
- Unscoped styles (`<style>`) used for SVG animations that need to target child elements
- Global CSS variables defined in `App.vue`'s unscoped `<style>` block
- Font Awesome icons registered globally in `main.ts` and used as `<font-awesome-icon :icon="['fas', 'icon-name']" />`

### File Naming
- Views: `PascalCase` + `View` suffix (e.g., `HomeView.vue`, `ConsultancyView.vue`)
- Components: `PascalCase` (e.g., `ClientLogos.vue`, `HeaderNav.vue`)
- Exception: `DevXRL.vue` (product name, not a generic view)

### Image Assets
- Client/partner logos: `/public/clients/` — lowercase filenames, PNG/SVG/JPG
- Team photos: `/public/team/` — `firstname.jpg`
- Product logos: `/public/projects/`
- Site images: `/public/images/`
- Reference in templates as `/clients/filename.ext` (no `public/` prefix)

### Client Logo Management
Client logos in `LogoCarousel.vue` are defined as a TypeScript array in the `<script setup>` block. Each entry has `href`, `src`, `alt`, and `darkBg`. To add a logo:
1. Add image file to `/public/clients/` (lowercase filename)
2. Add an entry to the `logos` array in `src/components/ui/LogoCarousel.vue`
3. For logos that need a dark background, set `darkBg: true`

### Ecosystem Directory
Ecosystem listings in `EcosystemView.vue` are defined as a TypeScript array of `EcosystemListing` objects. Each listing has:
- `id`, `name`, `logo?`, `category` (partner | support | client | collaborator)
- `shortDescription`, `tags?`, `longDescription?`, `website?`, `socialLinks?`, `highlights?`
- Listings are grouped into sections by category and rendered as `EcosystemTile` + `EcosystemModal` pairs

---

## Git Workflow

### Branch Strategy
- `main`: Production branch. Pushes trigger auto-deploy to GitHub Pages
- Feature branches: Create from `main`, merge via PR

### Commit Convention
Use Conventional Commits:
```
feat: add new blog section
fix: correct mobile nav z-index
style: update hero section spacing
docs: update CLAUDE.md with new route
refactor: extract service card component
chore: update dependencies
```

### Deployment
1. Create feature branch from `main`
2. Make changes, test locally with `npm run dev`
3. Run `npm run build` to verify production build
4. Push branch, create PR to `main`
5. Merge PR — GitHub Actions auto-deploys to GitHub Pages

---

## Development Commands

```bash
npm run dev          # Start dev server (localhost:5173)
npm run build        # Type-check + Vite build (full validation)
npm run build-only   # Vite build only (what CI runs)
npm run preview      # Preview production build locally
npm run type-check   # TypeScript checking via vue-tsc
npm run lint         # ESLint with auto-fix
```

---

## Known Issues & Technical Debt

1. **DEPLOYMENT.md is outdated** — References DigitalOcean; actual deployment is GitHub Pages
2. **Unused Vue scaffolding files** — `HelloWorld.vue`, `TheWelcome.vue`, `WelcomeItem.vue`, icon components, `AboutView.vue`, `counter.ts` store
3. **base.css and main.css are largely overridden** — Global styles in `App.vue` take precedence; these files contain leftover Vue create-app defaults
4. **Contact form has no backend** — `submitForm()` in `ContactView.vue` simulates a 2-second delay, no actual email/API integration
5. **ProcessVisualization.vue component exists but is unused** — The home page and consultancy page have their own inline process sections
6. **DevXRL page overrides global styles** — Has its own complete reset and design system within `.devxrl` scope; adds `devxrl-page` class to `<html>` for scroll-snap
7. **Some animation styles are unscoped** — HomeView, CommunityView, ConsultancyView, and ProjectsView use unscoped `<style>` blocks for SVG animations. Be careful not to create class name collisions

---

## Page-by-Page Reference

### HomeView (/)
- **Hero**: Two-column grid with text left, animated hex grid right
- **Hex grid animation**: Procedurally generated SVG hexagons with 6 phases (appear → breathe → pulse → explode outward → logo frame expands → logo hexes pop in → color shift → random flash)
- **Logo Carousel**: `LogoCarousel` component — auto-scrolling partner/client logos between hero and services
- **Services**: 6-card grid with stamps
- **Process**: 4-step numbered grid with hexagonal step indicators
- **CTA**: Navy background, centered
- *Note*: The Collective team section was moved to the About page; Partners & Clients grid replaced by LogoCarousel

### ConsultancyView (/consultancy)
- **Hero**: Navy background with animated SVG logo (staggered keyframe entrance)
- **Services**: 6-card grid with service lists
- **Process**: Same 4-step layout as home
- **Team**: Full bios with expandable read-more on mobile
- **CTA**: Navy background

### EcosystemView (/ecosystem)
- **Hero**: Navy, text only
- **Sections**: 4 category sections (Partners, Support, Clients, Collaborators) each with grid of `EcosystemTile` components
- **Modal**: Click tile → `EcosystemModal` with full details (Teleport to body, ESC to close, body scroll lock)

### DevXRL (/devxrl)
- **Full-page scroll-snap** with 10 sections (hero, problem, pipeline, scale, journey, deliverables, methodology, process, trl, cta) and navigation dots synced via IntersectionObserver
- **Own design system**: Parchment background, `--dxrl-*` CSS variable set scoped on `.devxrl`, SVG noise overlay scoped to `html.devxrl-page`
- **Interactive elements**: Clickable scale table rows (single-row expand), canvas-drawn journey graph with three-way toggle (BOTH, CURRENT STATE, AFTER AUDIT), intersection observer animations
- **Pipeline diagram**: Vertical flow with clip-path trapezoids representing the activation funnel (gold) and conversion funnel (teal), plus a branch node for Social and Discord channels
- **TRL section**: Side-by-side explainer for Technology Readiness Levels and Go-to-Market Readiness (G2MRL), with a 3-badge summary row
- **Completely self-contained**: All class names prefixed `devxrl-`, styles namespaced within `.devxrl` scope; adds `devxrl-page` class to `<html>` on mount and removes on unmount

### CommunityView (/community)
- **Hero**: Teal background with logo slam animation (frame slam → hex pop → glitch → particles → text slide → color shift)
- **Values**: 6-card grid
- **Events**: 4-card grid
- **CTA**: Navy background

### ProjectsView (/about)
- **Hero**: Navy with rocket-through-portal SVG animation (6s loop with gear emergence), "About Us" label, "The people behind devEco." heading
- **Team**: The Collective — 3-member grid with hexagonal clipped photos, badges, roles, bios, and links (moved from HomeView)
- **Community Engine Explorer**: Interactive widget with 6-cell node grid (5 clickable nodes + 1 hub), expandable detail panel, pulse dot animations, and CTA buttons

### ContactView (/contact)
- **Hero**: Teal, centered
- **Contact options**: 3-card grid (Email preferred, Discord, LinkedIn)
- **Form**: Name, email, company, service dropdown, message textarea (simulated submission)
- **Office hours**: Navy section with schedule details

---

## Adding a New Page (Step-by-Step)

1. Create view component: `src/views/NewPageView.vue`
2. Add route in `src/router/index.ts`:
   ```ts
   {
     path: '/new-page',
     name: 'new-page',
     component: () => import('../views/NewPageView.vue'),
   }
   ```
3. Add nav link in `src/components/layout/HeaderNav.vue` inside `.nav-links`
4. Optionally add footer link in `src/components/layout/FooterNav.vue`
5. Follow existing view structure: hero section → content sections → CTA section
6. Use scoped styles with existing CSS variables
7. Test locally, verify build, push to feature branch

---

## Adding New Font Awesome Icons

1. Find icon name at [fontawesome.com](https://fontawesome.com/icons)
2. Import in `src/main.ts`:
   ```ts
   import { faNewIcon } from '@fortawesome/free-solid-svg-icons'
   // or from '@fortawesome/free-brands-svg-icons'
   ```
3. Add to `library.add(...)` call
4. Use in template: `<font-awesome-icon :icon="['fas', 'new-icon']" />`

---

## Session Handoff Protocol

When ending a session that made changes:
1. Update this `CLAUDE.md` if any structural changes were made
2. Update `CHANGELOG.md` with what was done
3. Update `ROADMAP.md` if planned items were completed or new items identified
4. Provide clear commit messages following Conventional Commits
5. Note any incomplete work or follow-up items

---

## Easter Eggs

### Heimdall Portal
- **Trigger**: Hover over the top-left inner hexagon of the animated logo on the home page, then scroll the mouse wheel forward (up). Requires ~3-4 scroll ticks (threshold: `SCROLL_THRESHOLD = -150` accumulated deltaY).
- **Effect**: A teal portal animation expands from the hexagon's position, then navigates to `/heimdall`.
- **Route**: `/heimdall` — lazy-loaded `HeimdallView.vue`
- **Page**: Placeholder with "You found the Bifrost" messaging. Not linked from nav or footer.
- **Implementation**: Portal hex is the second `<polygon>` in `<g id="logoHexes">` in HomeView.vue, identified by `ref="portalHex"`. Event listeners attached in `onMounted`, cleaned up in `onUnmounted`. Portal overlay uses `<Teleport to="body">` with unscoped CSS animations.

---

*Last updated: 2026-04-19*
*Bible file version: 1.0*
