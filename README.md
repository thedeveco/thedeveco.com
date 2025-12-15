# TheDevEco Vue Website

Professional website for TheDevEco - a developer relations consultancy helping organizations build thriving developer communities.

## Overview

This is a modern Vue 3 + TypeScript website built with Vite, featuring:

- **Two Main Divisions**: Consultancy services and Community platform
- **Professional Design**: Clean, modern interface with TheDevEco branding
- **Responsive Layout**: Mobile-first design that works on all devices
- **Dynamic Client Logos**: Automatic display of client/partner logos
- **Contact Forms**: Interactive contact forms for lead generation
- **Performance Optimized**: Fast loading with code splitting and optimization

## Tech Stack

- **Frontend**: Vue 3 with Composition API
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Scoped CSS with modern features
- **Routing**: Vue Router 4
- **State Management**: Pinia
- **Icons**: Heroicons (inline SVG)
- **Deployment**: Digital Ocean App Platform (Static Site)

## Key Features

### 🏠 Landing Page
- Hero section with animated hexagonal logo pattern
- Two-division overview (Consultancy & Community)
- Partner team showcase (Robert, Tory, Moheeb)
- Dynamic client logos carousel
- Call-to-action sections

### 💼 Consultancy Services
- Comprehensive service offerings
- Team member profiles with expertise
- Process workflow explanation
- Detailed service descriptions

### 🌐 Community Platform
- Portal Network explanation and stats
- B3VY community overview
- Events and workshops information
- Community values and guidelines

### 📦 Products & Tools
- Portal Network Discord bot details
- B3VY meta-community platform
- LaunchCue CRM (beta)
- Technical specifications
- Product roadmap

### 📞 Contact & Engagement
- Multiple contact methods
- Detailed contact form with service selection
- FAQ section
- Virtual office hours information

### 🎨 Dynamic Logo System
- Automatic client logo detection
- Supports multiple image formats
- Responsive carousel display
- Easy logo management via file system

## Development Setup

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd thedeveco-vue

# Install dependencies
npm install

# Start development server
npm run dev
```

## Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Type checking
npm run type-check

# Linting
npm run lint

# Run all checks (type-check + build)
npm run build
```

## Adding Client Logos - STEP-BY-STEP GUIDE

### ⚠️ IMPORTANT: The logo system is MANUAL, not automatic!

### Step 1: Prepare Your Logo File
1. **Get the logo file** in PNG, SVG, JPG, or WebP format
2. **Optimize the image**:
   - Recommended dimensions: ~400px width, ~200px height (2:1 ratio works best)
   - File size: Keep under 50KB if possible
   - Background: Transparent (PNG/SVG) or white
3. **Name the file** using lowercase with no spaces:
   - ✅ CORRECT: `solidrun.png`, `microsoft.svg`, `edge-ai.png`
   - ❌ WRONG: `SolidRun.PNG`, `Microsoft Logo.svg`, `EDGE AI.png`

### Step 2: Add Logo File to Project
1. Place the logo file in: `/public/clients/` directory
2. Verify file is there: `ls public/clients/` should show your new logo

### Step 3: Update the Vue Component (REQUIRED!)
1. Open the file: `src/components/ui/ClientLogos.vue`
2. Find the `<div class="clients-grid">` section (around line 9-28)
3. Add a new logo entry BEFORE the closing `</div>` tag:
   ```html
   <div class="client-logo">
     <img src="/clients/YOUR-LOGO-FILENAME.png" alt="Company Name" />
   </div>
   ```
4. Replace:
   - `YOUR-LOGO-FILENAME.png` with your actual filename
   - `Company Name` with the actual company name

### Step 4: Example - Adding a New Logo
If adding a logo for "Acme Corp" with file `acme.png`:

1. Save `acme.png` to `/public/clients/acme.png`
2. Edit `src/components/ui/ClientLogos.vue`:
   ```html
   <!-- Existing logos -->
   <div class="client-logo">
     <img src="/clients/solidrun.png" alt="SolidRun" />
   </div>
   <!-- ADD YOUR NEW LOGO HERE -->
   <div class="client-logo">
     <img src="/clients/acme.png" alt="Acme Corp" />
   </div>
   ```

### Step 5: Test Your Changes
1. Run the development server: `npm run dev`
2. Open browser to `http://localhost:5173`
3. Scroll to "Our Partners & Clients" section
4. Verify your logo appears and looks good

### Step 6: Common Mistakes to Avoid
- ❌ **DON'T** write `class="public/clients/client-logo"` (wrong path in class)
- ❌ **DON'T** forget the `/` at the start of the image path
- ❌ **DON'T** use uppercase in filenames
- ❌ **DON'T** forget to add the HTML code to ClientLogos.vue
- ✅ **DO** use `class="client-logo"` for the div
- ✅ **DO** use `src="/clients/filename.ext"` for the image

### Step 7: Commit Your Changes
After testing, commit both files:
```bash
git add public/clients/your-logo.png
git add src/components/ui/ClientLogos.vue
git commit -m "Added [Company Name] logo to partners section"
```

### Need Help?
Check the existing logos in `ClientLogos.vue` as examples - they all follow the same pattern!

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer
│   └── ui/              # Reusable UI components
├── views/               # Page components
│   ├── HomeView.vue     # Landing page
│   ├── ConsultancyView.vue
│   ├── CommunityView.vue
│   ├── ProductsView.vue
│   └── ContactView.vue
├── router/              # Vue Router configuration
├── stores/              # Pinia stores
└── assets/              # Static assets

public/
├── clients/             # Client logo images
└── images/              # Other public images
```

## Styling & Design

- **Color Scheme**: Based on TheDevEco logo colors (#378a8b, #5fb3b4)
- **Typography**: System font stack for optimal performance
- **Layout**: CSS Grid and Flexbox for responsive design
- **Components**: Scoped CSS with BEM-like naming
- **Interactions**: Subtle animations and hover effects

## Deployment

This site is configured for deployment on Digital Ocean App Platform as a static site.

### Quick Deploy

1. Push code to GitHub
2. Connect repository to Digital Ocean App Platform
3. Use the provided `.do/app.yaml` configuration
4. Configure custom domain (thedeveco.com)

See `DEPLOYMENT.md` for detailed deployment instructions.

### Build Output

```
dist/
├── index.html
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
└── clients/             # Client logos
```

## Performance Features

- **Code Splitting**: Automatic route-based code splitting
- **Asset Optimization**: Images and fonts optimized for web
- **Tree Shaking**: Unused code eliminated in production
- **Gzip Compression**: Enabled by Digital Ocean
- **Lazy Loading**: Images and components loaded on demand

## Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Features**: ES2020, CSS Grid, Flexbox, CSS Custom Properties

## Contributing

1. Create feature branch from `main`
2. Make changes following existing code style
3. Test locally with `npm run dev`
4. Run `npm run build` to ensure production build works
5. Submit pull request with clear description

## License

Private project for TheDevEco LLC.

## Support

For development issues:
- Check Vue 3 documentation
- Review Vite configuration docs
- Contact development team

For business inquiries:
- Email: hello@thedeveco.com
- Discord: https://discord.gg/deveco
