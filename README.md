# Infina AI web

![App Preview](https://imgix.cosmicjs.com/3dfd3880-63e2-11f1-ac8c-330ac011d850-autopilot-photo-1611974789855-9c2a0a7236a3-1780995877889.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, editorial-style blog and content platform for **Infina AI** — built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com). It surfaces in-depth posts on AI adoption for financial services and enterprise markets, with dedicated pages for authors and categories. Clean typography, real photography, and a confident, advisory tone make it feel like a knowledgeable peer talking to a CTO — not a sales pitch.

## Features

- 📰 **Editorial homepage** with a featured hero post and a responsive post grid
- 📝 **Full post pages** with rich content rendering, featured images, author bylines, category badges, and tags
- ✍️ **Author profiles** showing avatar, role, bio, and all of their posts
- 🏷️ **Category pages** that filter posts by topic
- 🔍 **Primary keyword surfacing** for SEO-conscious B2B content
- 🖼️ **Real-photo-first design** using imgix-optimized images
- ⚡ **Server-rendered** for fast loads and great SEO
- 📱 **Fully responsive** across mobile, tablet, and desktop

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a27d69e7da35436b10e959a&clone_repository=6a27d7cf7da35436b10e95d1)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a blog with posts (including featured images, content, and tags), authors, and categories.
>
> User instructions: A blog with posts, authors, and categories
> You are a B2B tech writer specializing in AI solutions for financial services and enterprise markets. Write a 1,200–1,500 word blog post targeting [SPECIFIC VERTICAL: securities firms / banks / insurance companies / e-wallets / SMEs] that are evaluating AI adoption.
> Core angle: Open with the argument — building AI in-house made sense in 2021, when it was a competitive differentiator. In 2025, every competitor already has AI. The question is no longer "should we adopt AI?" but "what's the fastest path to production?" Frame the shift from "build vs. buy" to "speed to value."
> About the product: Infina AI Inside is a white-label AI layer that integrates directly into a partner's existing app or web platform via API/SDK in 2–3 weeks — no core system changes required. Already live in production on infina.ai and securities partners. 20–40% lower cost than in-house builds, zero upfront fee, pay only after go-live.
> Structure:
>
> H2: Why building AI in-house is no longer a competitive advantage (cost, time, talent, risk)
> H2: What [VERTICAL] businesses actually need AI to do (use specific, realistic use cases for that industry)
> H2: From contract to live in 3 weeks — how it works
> H2: The right questions to ask before you decide
> Closing CTA — soft, consultative, pointing to emfina.ai
>
> Tone: Direct and advisory — like a knowledgeable peer talking to a CTO or Head of Product, not a sales pitch. Avoid words like "revolutionary," "cutting-edge," "game-changing." Ground every claim in a real operational problem.
> Primary keyword: "AI integration for [VERTICAL]" — use naturally 4–5 times.
>
> Three ready-to-use topic combos:
>
> Securities firms — keyword: "AI integration for securities firms"
> SME businesses — keyword: "AI automation for SMEs"
> Banking apps — keyword: "AI layer for banking applications"
>
> The user is rebuilding an existing website and provided these design notes: use real photos. Factor these preferences into the content structure."

### Code Generation Prompt

> Build a Next.js application for a creative portfolio called "Infina AI web". The content is managed in Cosmic CMS with the following object types: authors, categories, posts. Create a beautiful, modern, responsive design with a homepage and pages for each content type. The user is rebuilding an existing website and wants these design improvements: use real photos.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic](https://www.cosmicjs.com/docs) (headless CMS)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (or Node.js 18+)
- A [Cosmic](https://www.cosmicjs.com) account with a bucket containing `authors`, `categories`, and `posts` object types

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd infina-ai-web

# Install dependencies
bun install

# Set up environment variables (see below)

# Run the development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Environment Variables

Set the following in your hosting platform or a local `.env.local` file:

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all posts with author + category data (depth 1)
const { objects: posts } = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch a single post by slug
const { object: post } = await cosmic.objects
  .findOne({ type: 'posts', slug })
  .depth(1)

// Fetch posts in a category
const { objects } = await cosmic.objects
  .find({ type: 'posts', 'metadata.category': categoryId })
  .depth(1)
```

## Cosmic CMS Integration

This app consumes three object types from your Cosmic bucket:

- **authors** — `name`, `role`, `bio`, `avatar`
- **categories** — `name`, `description`
- **posts** — `title`, `excerpt`, `content`, `featured_image`, `primary_keyword`, `author`, `category`, `tags`

The `posts` type connects to `authors` and `categories` via object metafields, which are resolved with the `depth(1)` parameter. Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

### Vercel (recommended)

1. Push your code to GitHub
2. Import the project into [Vercel](https://vercel.com)
3. Add the environment variables above
4. Deploy

### Netlify

1. Connect your repository to [Netlify](https://www.netlify.com)
2. Set the build command to `bun run build`
3. Add the environment variables
4. Deploy

<!-- README_END -->