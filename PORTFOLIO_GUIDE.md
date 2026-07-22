# Portfolio Customization Guide

Welcome to your new portfolio template! This guide will help you understand the project structure and show you exactly where to edit files to make this portfolio your own.

## 🛠️ Where to Change Personal Information
All your personal data, site configurations, and navigation are centralized. Update these files first:

- **User Profile**: `src/features/portfolio/data/user.ts` (or `.json`) 
  *Change your name, bio, keywords, and ogImage here.*
- **Social Links**: `src/features/portfolio/data/social-links.ts` (or `.json`)
  *Update your GitHub, Twitter/X handles, and other social media links.*
- **Site Navigation & Meta**: `src/config/site.ts`
  *Modify the main navigation links, site URLs, and theme colors.*

## 📝 Where to Add Content (Blog & Docs)
This project uses MDX for content rendering.

- **Content Directory**: `src/features/doc/content/`
  *Add new `.mdx` files here. Subfolders determine the category (e.g., `blog/` for blog posts, `components/` for documentation).*

## 🧩 Modifying Pages and UI Components
If you want to change the layout or add new sections:

- **Main Pages**: `src/app/`
  *This is a Next.js App Router project. You'll find your main pages like `page.tsx` (Home), `blog/page.tsx`, etc., inside this directory.*
- **Shared UI Components**: `src/components/`
  *Find your common elements like headers, footers, and layouts here.*
- **Shadcn/UI Registry**: `src/registry/`
  *If you want to tweak or add complex UI components, hooks, or blocks, they are located in the registry.*

## ⚙️ Environment Variables
Check `.env.example` for the environment variables you need to set up:
- `NEXT_PUBLIC_APP_URL` (Your production URL)
- `GITHUB_API_TOKEN` (For fetching GitHub stats)

> **Quick Start**: 
> 1. Copy `.env.example` to `.env.local`
> 2. Run `pnpm install`
> 3. Run `pnpm dev` to start the development server.
