# Vercel Quick Start Guide

## One-Command Deployment

```bash
vercel --prod
```

That's it! The project is pre-configured for Vercel.

## What's Configured

✅ **vercel.json** - Build settings and routing  
✅ **build:static** script - Optimized static build  
✅ **SPA Routing** - All routes redirect to index.html  
✅ **Caching** - Static assets cached for performance  
✅ **pnpm** - Package manager configured  

## Quick Deploy Steps

### Via GitHub (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import repository
5. Click "Deploy"

### Via CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

## Build Output

- **Output Directory**: `dist/public`
- **Build Command**: `pnpm build:static`
- **Framework**: Vite (auto-detected)

## Environment Variables

Optional (only if using analytics):
- `VITE_ANALYTICS_ENDPOINT`
- `VITE_ANALYTICS_WEBSITE_ID`

## Need Help?

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

