# CHANGELOG.md — thedeveco.com

> **Purpose**: Track all meaningful changes to the website. Updated each session. Follows [Keep a Changelog](https://keepachangelog.com/) format with Conventional Commit categories.

---

## [Unreleased]

### Added
- New `/trl` route and `TRL.vue` view for the Technology Readiness Levels audit one-pager. Full-page scroll-snap with 10 sections: hero, problem (6 cards on overclaim and evidence failure modes), pipeline (maturation flow with development and deployment funnels), scale (9 level canonical NASA TRL table with devEco commercial translation layer and click-to-expand criteria), Technical Foundation (engineering decisions and IP preservation KB with upstream sources feeding a hexagonal TECHNICAL KNOWLEDGE core and fanning to downstream surfaces including investor data rooms and tax credit audits), deliverables (7 items), methodology (4 cards), process (4 steps), what-comes-after (G2MRL explainer with mini-table, plus DevXRL and SMRL intros and a 3-badge row), CTA.
- TRL added to the Services dropdown in `HeaderNav.vue` (desktop and mobile).
- TRL Audit added to the Services column in `FooterNav.vue`.
- New `/g2mrl` route and `G2MRL.vue` view for the Go-to-Market Readiness Levels audit one-pager. Full-page scroll-snap with 10 sections: hero, problem (6 cards), pipeline (GTM pipeline with acquisition and revenue funnels), scale (9 level G2MRL scoring table with click-to-expand criteria), Data Foundation (GTM intelligence KB with upstream sources feeding a hexagonal core and fanning to downstream sales AI surfaces), deliverables (7 items), methodology (4 cards), process (4 steps), what-comes-after (DevXRL explainer with mini-table, plus SMRL and TRL intros and a 3-badge row), CTA.
- G2MRL added to the Services dropdown in `HeaderNav.vue` (desktop and mobile).
- G2MRL Audit added to the Services column in `FooterNav.vue`.
- New `/smrl` route and `SMRL.vue` view for the Social Media Readiness Levels audit one-pager. Full-page scroll-snap with 10 sections: hero, problem (6 cards), pipeline (social pipeline with production and relationship funnels), scale (9 level SMRL scoring table with click-to-expand criteria), KB Foundation (upstream sources, knowledge base core, downstream surfaces), deliverables (7 items), methodology (4 cards), process (4 steps), TRL/what-comes-after (DevXRL explainer plus TRL and G2MRL intros), CTA.
- SMRL added to the Services dropdown in `HeaderNav.vue` (desktop and mobile).
- SMRL Audit added to the Services column in `FooterNav.vue`.
- New KB Foundation section pattern: side-by-side text plus a vertical diagram showing upstream sources flowing into a hexagonal knowledge base core, then fanning out to downstream surfaces (AI Assistants, Content Gen, Sales & Support, White-Label Tools).
- `CLAUDE.md` — Primary session bible file for Claude Chat and Claude Code onboarding
- `README.md` — Rewritten project README reflecting actual architecture and deployment (replaces outdated version)
- `ROADMAP.md` — Project roadmap with technical debt, planned features, and future vision
- `CHANGELOG.md` — This file
- Created `LogoCarousel` component with auto-scrolling, pause-on-hover, and clickable logos
- Added logo carousel to home page between hero and How We Help sections
- Interactive devEco Community Engine explorer widget on /about page with clickable node grid, expandable detail panels, and pulse dot animations
- Easter egg: Heimdall portal accessible by hovering the top-left logo hexagon and scrolling forward
- Hidden /heimdall placeholder page
- Pipeline section vertical diagram with activation funnel (gold clip-path trapezoid) and conversion funnel (teal clip-path trapezoid), plus a branch node for Social, Discord, etc.
- Hero scroll-hint indicator at the bottom with a nudge animation.
- TRL section now includes a row of three summary badges (TRL, DevXRL, G2MRL).

### Changed
- `servicesLinks` array in `HeaderNav.vue` extended from 4 items to 5 (Consultancy, DevXRL, SMRL, G2MRL, TRL). All four readiness audits now live under the Services dropdown.
- `servicesLinks` array in `HeaderNav.vue` extended from 3 items to 4 (Consultancy, DevXRL, SMRL, G2MRL).
- `servicesLinks` array in `HeaderNav.vue` extended from 2 items to 3 (Consultancy, DevXRL, SMRL).
- Rebuilt `DevXRL.vue` from a new one-pager HTML source. Content revised across all sections. Layout, spacing, and typography tightened.
- Nav dots count is now derived from a `sectionList` array rather than hardcoded to 10.
- CSS variables for the DevXRL page consolidated under a `--dxrl-*` prefix scoped on `.devxrl` (moved from `:root`). All class names in the DevXRL scope are now prefixed with `devxrl-` to prevent any leakage.
- Noise overlay scoped to `html.devxrl-page` so it only shows on the DevXRL page.
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
- Removed static CTA section from /about page (replaced by Community Engine widget)

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

*Last updated: 2026-04-19*
