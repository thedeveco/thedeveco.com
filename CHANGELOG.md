# CHANGELOG.md — thedeveco.com

> **Purpose**: Track all meaningful changes to the website. Updated each session. Follows [Keep a Changelog](https://keepachangelog.com/) format with Conventional Commit categories.

---

## [Unreleased]

### Added
- `CLAUDE.md` — Primary session bible file for Claude Chat and Claude Code onboarding
- `README.md` — Rewritten project README reflecting actual architecture and deployment (replaces outdated version)
- `ROADMAP.md` — Project roadmap with technical debt, planned features, and future vision
- `CHANGELOG.md` — This file
- Created `LogoCarousel` component with auto-scrolling, pause-on-hover, and clickable logos
- Added logo carousel to home page between hero and How We Help sections

### Changed
- Moved Ecosystem from standalone nav link into new Explore dropdown in HeaderNav
- Added Explore dropdown with Ecosystem (internal route), devEco.io, and devEco.app (external links)
- Reordered navigation: Services, Products, Community, Explore, Contact Us
- Converted Services into dropdown containing Consultancy and DevXRL links
- Moved DevXRL from standalone nav link into Services dropdown
- Renamed Products nav tab to About and changed route from /projects to /about
- Reordered navigation: About, Services, Community, Explore, Contact Us
- Moved The Collective team section from home page to /about page
- Updated /about page hero text from Products to About Us
- Updated Robert Wolff bio text on /about page
- Updated /about CTA section to devEco Community Engine messaging
- Restructured footer columns to mirror navigation: Services, Community, Explore
- Updated footer bottom text: company name and Edge AI Foundation formatting

### Fixed
- *(none yet)*

### Removed
- Removed portalNetwork, B3VY, and LaunchCue product cards from /about page
- Removed The Collective team section from home page
- Removed Partners & Clients static grid section from home page
- Deleted `ClientLogos.vue` component (replaced by `LogoCarousel`)

---

## Pre-Bible File History

> The following is a summary of the project's state prior to bible file creation, reconstructed from the codebase and git history. The repository has 192 commits on `main` as of 2026-03-28.

### Architecture Milestones
- **Vue 3 + TypeScript + Vite** application created and deployed
- **GitHub Pages deployment** via GitHub Actions (`peaceiris/actions-gh-pages@v4`)
- **SPA routing** on GitHub Pages via `404.html` sessionStorage redirect
- **Custom domain** `thedeveco.com` configured via CNAME

### Pages Shipped
- **Home** (`/`) — Landing page with animated SVG hex grid, services overview, process steps, team section, partner logos, CTA
- **Consultancy** (`/consultancy`) — Services page with animated logo, 6 service cards, process, expandable team bios
- **Ecosystem** (`/ecosystem`) — Data-driven directory with 20+ listings across 4 categories (partners, supported creators, clients, collaborators) with tile + modal UI
- **DevXRL** (`/devxrl`) — Full-page scroll-snap product page for the DevXRL Audit, with interactive readiness scale table, canvas-drawn journey graph, pipeline diagram, methodology cards, and process steps
- **Community** (`/community`) — Community values and events page with logo slam animation
- **Products** (`/projects`) — Products page featuring portalNetwork (with stats), B3VY Live Hub, and LaunchCue CRM, with rocket-portal SVG animation
- **Contact** (`/contact`) — Contact options, form (simulated submission), virtual office hours

### Components Built
- `HeaderNav.vue` — Sticky navigation with mobile hamburger, Community dropdown with external links
- `FooterNav.vue` — 4-column footer with services, products, connect links, dynamic year
- `ClientLogos.vue` — 14 partner/client logos in responsive grid with hover effects
- `EcosystemTile.vue` — Clickable tile card for ecosystem directory
- `EcosystemModal.vue` — Detail modal with Teleport, ESC close, scroll lock
- `ProcessVisualization.vue` — 4-step process visualization with Font Awesome icons

### Design System Established
- JetBrains Mono typeface throughout
- Teal/navy brand palette with pink/yellow/cyan accents
- Zero border-radius convention
- Stamp (dashed) and badge (solid) tag components
- Card components with hover shadow offset
- CSS custom properties for colors, spacing, typography
- Responsive breakpoints at 900px, 768px, 480px

### Static Assets
- Team photos (Robert, Moheeb, Tory)
- 14+ client/partner logos
- Product logos (portalNetwork, B3VY, LaunchCue)
- Site logos (consulting + community variants)
- EDGE AI Trail game static export (`/trail-sandiego/`)

### Font Awesome Icons Registered
**Solid**: magnifying-glass, pencil-ruler, gears, chart-line, code, users, bullhorn, rocket, handshake, lightbulb, arrow-right, check, bars, times, external-link-alt, envelope, phone, map-marker-alt, graduation-cap, calendar-days, briefcase, network-wired, layer-group, code-branch

**Brands**: discord, linkedin, github, youtube, twitter

---

*Changelog format: Each session that modifies the codebase adds entries under `[Unreleased]`. When a batch of changes is deployed and considered a release, the Unreleased section is renamed with a date header and a new Unreleased section is created.*

*Last updated: 2026-03-28*
