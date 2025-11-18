# Cummins Investment Analysis

A professional investment analysis website showcasing comprehensive research on Cummins Inc. (CMI) and their AI power generation strategy for data centers.

## Overview

This website presents detailed investment analysis covering:
- Executive Summary
- AI-Driven Power Market Dynamics
- Cummins' Strategic Positioning
- Competitive Landscape Analysis
- Financial Performance & Investment Thesis
- Comprehensive References

## Features

- 🎨 **Professional Design**: Dark navy and gold theme inspired by Wall Street aesthetics
- 📊 **Data Visualizations**: Market share breakdowns and financial metrics
- 📱 **Responsive**: Optimized for desktop, tablet, and mobile devices
- 🔗 **Cited Research**: Full references with links to source materials
- ⚡ **Modern Stack**: Built with React 19, TypeScript, and Tailwind CSS 4

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 with OKLCH color system
- **UI Components**: shadcn/ui
- **Routing**: Wouter
- **Build Tool**: Vite
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 22+
- pnpm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
cummins-analysis/
├── client/
│   ├── src/
│   │   ├── pages/         # Page components
│   │   ├── components/    # Reusable UI components
│   │   ├── contexts/      # React contexts
│   │   ├── hooks/         # Custom hooks
│   │   ├── lib/           # Utility functions
│   │   ├── App.tsx        # Main app component
│   │   └── index.css      # Global styles
│   ├── public/            # Static assets
│   └── index.html         # HTML template
├── package.json
├── vite.config.ts
└── tailwind.config.ts
```

## Design System

### Colors
- **Primary**: Gold (#D4AF37) - Used for accents and highlights
- **Background**: Deep Navy (#0A1628) - Main background color
- **Card**: Lighter Navy - Content containers
- **Foreground**: Off White - Text color

### Typography
- **Headings**: Playfair Display (Serif)
- **Body**: Inter (Sans-serif)

## Deployment

The site is a static single-page application and can be deployed to any static hosting service.

### Vercel Deployment

This project is configured for easy deployment on Vercel:

#### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Deploy
vercel

# For production deployment
vercel --prod
```

#### Option 2: Deploy via GitHub Integration

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will automatically detect the Vite configuration
6. Click "Deploy"

#### Configuration

The project includes a `vercel.json` file with the following settings:
- **Build Command**: `pnpm build:static` (builds only the static site)
- **Output Directory**: `dist/public`
- **Framework**: Vite
- **SPA Routing**: Configured to serve `index.html` for all routes

#### Environment Variables (Optional)

If you're using analytics, you can set these in Vercel's project settings:
- `VITE_ANALYTICS_ENDPOINT` - Analytics endpoint URL
- `VITE_ANALYTICS_WEBSITE_ID` - Analytics website ID

These are optional and the site will work without them.

### Other Deployment Options

- **Netlify**: Drag and drop the `dist/public` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions workflow
- **AWS S3**: Upload `dist/public` folder to S3 bucket with static hosting enabled

## License

This project is for educational and informational purposes only. All investment analysis and data are based on publicly available information as of November 2025.

## Disclaimer

This analysis is for informational purposes only and does not constitute investment advice. Investors should conduct their own due diligence and consult with financial advisors before making investment decisions.

## Author

Created by Power Insights AI - November 2025
