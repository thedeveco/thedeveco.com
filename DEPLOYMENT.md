# TheDevEco Vue - Deployment Guide

This guide covers deploying the TheDevEco Vue application to Digital Ocean App Platform as a static site.

## Digital Ocean App Platform Deployment

### Prerequisites

1. Digital Ocean account
2. GitHub repository containing this code
3. Domain name (thedeveco.com) configured in your domain registrar

### Setup Instructions

#### 1. Prepare Repository

```bash
# Ensure all code is committed and pushed to GitHub
git add .
git commit -m "Ready for deployment"
git push origin main
```

#### 2. Deploy to Digital Ocean App Platform

**Option A: Using the Web Interface**

1. Go to [Digital Ocean App Platform](https://cloud.digitalocean.com/apps)
2. Click "Create App"
3. Choose "GitHub" as source
4. Select your repository and branch (main)
5. Choose "Static Site" as resource type
6. Configure build settings:
   - **Build Command**: `npm ci && npm run build`
   - **Output Directory**: `dist`
   - **Environment**: Node.js

**Option B: Using the App Spec (Recommended)**

1. Use the provided `.do/app.yaml` file:
   ```bash
   doctl apps create --spec .do/app.yaml
   ```

#### 3. Configure Build Settings

The app is configured with the following build settings:

- **Build Command**: `npm ci && npm run build`
- **Output Directory**: `dist`
- **Node Version**: Latest LTS (automatically detected)
- **Index Document**: `index.html`
- **Error Document**: `index.html` (for SPA routing)
- **Catchall Document**: `index.html` (for SPA routing)

#### 4. Domain Configuration

1. In the Digital Ocean dashboard, go to your app settings
2. Navigate to "Domains" tab
3. Add custom domains:
   - `thedeveco.com` (Primary)
   - `www.thedeveco.com` (Alias)
4. Update your domain's DNS settings to point to Digital Ocean:
   - Add CNAME record: `www` → `your-app-url.ondigitalocean.app`
   - Add ALIAS/ANAME record: `@` → `your-app-url.ondigitalocean.app`

#### 5. Environment Variables (if needed)

No environment variables are required for this static site deployment.

#### 6. SSL Certificate

Digital Ocean automatically provisions SSL certificates for custom domains.

## Build Process

The application uses Vite for building:

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Type checking
npm run type-check

# Linting
npm run lint
```

## File Structure for Deployment

```
dist/
├── index.html
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
└── clients/        # Client logos directory
    └── (logo files)
```

## Client Logo Management

To add client logos:

1. Add logo files to `public/clients/` directory
2. Use lowercase names (e.g., `microsoft.png`, `google.svg`)
3. Supported formats: `.png`, `.jpg`, `.jpeg`, `.svg`, `.webp`
4. Recommended size: 200x100px or similar aspect ratio
5. The ClientLogos component will automatically detect and display them

## Performance Optimizations

The build is optimized with:

- **Code Splitting**: Vendor libraries separated into chunks
- **Asset Optimization**: Images and assets optimized
- **Minification**: JavaScript and CSS minified
- **Tree Shaking**: Unused code removed
- **Gzip Compression**: Enabled by Digital Ocean

## Monitoring and Analytics

Consider adding:

- Google Analytics or similar for usage tracking
- Error monitoring (Sentry, LogRocket, etc.)
- Performance monitoring (Web Vitals)

## Continuous Deployment

The app is configured for automatic deployment:

- Pushes to the `main` branch trigger automatic builds
- Build status is visible in the Digital Ocean dashboard
- Failed builds will not affect the current live version

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are in package.json
   - Review build logs in Digital Ocean dashboard

2. **Routing Issues**
   - Ensure catchall document is set to `index.html`
   - Verify Vue Router is in history mode

3. **Asset Loading Issues**
   - Check asset paths in built files
   - Verify `base` configuration in vite.config.ts

4. **Domain Configuration**
   - Allow 24-48 hours for DNS propagation
   - Use DNS checker tools to verify configuration

### Support

For deployment issues:
- Check Digital Ocean App Platform documentation
- Review build logs in the dashboard
- Contact Digital Ocean support if needed

## Security Considerations

- SSL is automatically enabled
- CORS is configured for the specified domains
- No sensitive data is exposed in the client-side code
- Client logo files should be optimized and safe

## Backup and Recovery

- Source code is version controlled in GitHub
- Digital Ocean maintains deployment history
- Easy rollback to previous versions through the dashboard

## Cost Estimation

Digital Ocean App Platform static site pricing:
- Static sites: $3/month for basic plan
- Bandwidth: First 100GB free, then $0.01/GB
- Build minutes: 1000 minutes/month included

## Next Steps

After successful deployment:

1. Test all pages and functionality
2. Add client logos to the `/public/clients/` directory
3. Set up monitoring and analytics
4. Configure any required redirects
5. Set up automated backups if needed