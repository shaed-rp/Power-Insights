# Deployment Guide

This guide provides detailed instructions for deploying the Cummins Analysis website to Vercel.

## Prerequisites

- A GitHub account (for Git-based deployment)
- A Vercel account (sign up at [vercel.com](https://vercel.com))
- Node.js 22+ installed locally (for testing builds)

## Vercel Deployment Steps

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the configuration

3. **Configure Build Settings**
   - Build Command: `pnpm build:static` (auto-detected)
   - Output Directory: `dist/public` (auto-detected)
   - Install Command: `pnpm install` (auto-detected)
   - Framework Preset: Vite (auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at `https://your-project.vercel.app`

### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # Deploy to preview
   vercel

   # Deploy to production
   vercel --prod
   ```

## Project Configuration

### Build Process

The project uses a custom build script `build:static` that:
- Builds the Vite application
- Outputs static files to `dist/public`
- Does not include the Express server (not needed for static hosting)

### File Structure

```
dist/
└── public/          # Static files served by Vercel
    ├── index.html
    ├── favicon.svg
    └── assets/      # JS, CSS, and other assets
```

### Routing

The `vercel.json` file includes a rewrite rule to handle client-side routing:
- All routes (`/*`) are rewritten to `/index.html`
- This ensures the SPA works correctly with direct URL access

### Caching

Static assets are cached for optimal performance:
- `favicon.svg`: 1 year cache
- `/assets/*`: 1 year cache (immutable)

## Environment Variables

### Optional Variables

If you want to enable analytics, add these in Vercel's project settings:

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_ANALYTICS_ENDPOINT` | Analytics service endpoint | No |
| `VITE_ANALYTICS_WEBSITE_ID` | Analytics website ID | No |

**Note**: The site works perfectly without these variables. They're only needed if you want to track analytics.

### Setting Environment Variables in Vercel

1. Go to your project dashboard on Vercel
2. Navigate to Settings → Environment Variables
3. Add each variable for Production, Preview, and Development environments
4. Redeploy for changes to take effect

## Custom Domain

To add a custom domain:

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your domain name
4. Follow DNS configuration instructions
5. Vercel will automatically provision SSL certificates

## Troubleshooting

### Build Fails

- **Issue**: Build command fails
  - **Solution**: Ensure `pnpm` is available. Vercel should auto-detect it from `packageManager` in `package.json`

- **Issue**: Output directory not found
  - **Solution**: Verify `dist/public` exists after build. Check `vite.config.ts` output directory

### Routing Issues

- **Issue**: 404 errors on direct URL access
  - **Solution**: Verify `vercel.json` includes the rewrite rule for `/*` → `/index.html`

### Environment Variables Not Working

- **Issue**: Variables not available in build
  - **Solution**: Ensure variables are prefixed with `VITE_` for Vite to expose them

## Post-Deployment Checklist

- [ ] Site loads correctly at the Vercel URL
- [ ] All routes work (test navigation)
- [ ] Mobile responsiveness verified
- [ ] Favicon displays correctly
- [ ] All external links work
- [ ] Custom domain configured (if applicable)
- [ ] Analytics working (if configured)

## Continuous Deployment

Once connected to GitHub, Vercel will automatically:
- Deploy on every push to `main` branch (production)
- Create preview deployments for pull requests
- Run builds automatically
- Send deployment notifications

## Support

For Vercel-specific issues, consult:
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

