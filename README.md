# 🏢 MTI Engineering - Complete Engineering Solutions

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Quick Start](#quick-start)
- [Available Scripts](#available-scripts)
- [Architecture](#architecture)
- [Components](#components)
- [Pages](#pages)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Performance](#performance)
- [SEO & Accessibility](#seo--accessibility)
- [Contributing](#contributing)
- [License](#license)

## 📖 Overview

**MTI Engineering** is a leading engineering solutions company established in 1995, specializing in cutting-edge technology implementations including IoT, Digital Twin, AI-powered surveillance, and smart infrastructure solutions. This project represents their corporate website built with modern web technologies to showcase their expertise and services.

### 🎯 Mission
To deliver innovative engineering solutions that transform industries through technology integration, real-time monitoring, and predictive analytics.

### 📊 Key Statistics
- **29+ Years** of engineering excellence since 1995
- **30+ Active Projects** worldwide
- **500+ IoT Devices** connected and monitored
- **1000+ Surveillance Cameras** deployed
- **99.7% System Uptime** guaranteed

## ✨ Features

### 🏗️ Smart Infrastructure Solutions
- **Smart Sites**: Real-time monitoring of construction and industrial facilities
- **IoT Integration**: Seamless connectivity across 500+ devices
- **Digital Twin**: Virtual replicas for simulation and optimization
- **AI Surveillance**: Advanced analytics with 1000+ cameras
- **Real-time Analytics**: Live data visualization and predictive insights

### 🌐 Interactive Web Experience
- **3D Building Visualization**: Interactive exploration of company headquarters
- **Live Dashboard**: Real-time metrics and system monitoring
- **AI Chatbot**: Intelligent assistant for user inquiries
- **Responsive Design**: Optimized for all devices and screen sizes
- **Smooth Animations**: Framer Motion powered transitions

### 📱 User Experience
- **Multilingual Support**: Arabic and English interfaces
- **Dark Theme**: Modern cyberpunk-inspired design
- **Accessibility**: WCAG compliant features
- **Fast Loading**: Optimized performance with Next.js

## 🛠️ Technology Stack

### Frontend Framework
- **Next.js 14** - React framework with App Router
- **React 18** - Component-based UI library
- **TypeScript** - Type-safe JavaScript

### Styling & Animation
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion 10.16.4** - Animation library
- **Custom CSS** - Cyberpunk theme with gradients

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes
- **TypeScript Compiler** - Type checking

### Icons & UI
- **React Icons 4.12.0** - Icon library
- **clsx** - Conditional CSS classes

## 📁 Project Structure

```
mti-engineering/
├── app/                          # Next.js App Router
│   ├── (pages)/                  # Route groups
│   ├── about/                    # About page
│   ├── ar-vr/                    # AR/VR page
│   ├── building/                 # Building visualization
│   │   ├── floor-1/             # Engineering Labs
│   │   ├── floor-2/             # Innovation Center
│   │   ├── floor-3/             # General floor
│   │   ├── floor-4/             # Executive floor
│   │   └── ground/              # Ground floor
│   ├── careers/                  # Careers page
│   ├── contact/                  # Contact page
│   ├── dashboard/                # Live dashboard
│   ├── digital-twin/            # Digital Twin page
│   ├── history/                  # Company history
│   ├── news/                     # News & updates
│   ├── portfolio/                # Portfolio showcase
│   ├── projects/                 # Projects gallery
│   ├── rd-lab/                   # R&D Lab page
│   ├── services/                 # Services overview
│   ├── team/                     # Team members
│   ├── technology/               # Technology showcase
│   ├── try-fix-it/               # Interactive demo
│   ├── visualization/            # Data visualization
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── components/                   # Reusable components
│   ├── Chatbot.tsx              # AI assistant
│   ├── CTASection.tsx           # Call-to-action
│   ├── Footer.tsx               # Site footer
│   ├── LazyImage.tsx            # Optimized images
│   ├── LiveDashboard.tsx        # Real-time metrics
│   └── Navbar.tsx               # Navigation bar
├── public/                      # Static assets
├── node_modules/                # Dependencies
├── package.json                 # Project config
├── tsconfig.json               # TypeScript config
├── next.config.js              # Next.js config
├── tailwind.config.ts          # Tailwind config
├── .eslintrc.json              # ESLint config
└── README.md                   # This file
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** 16.0 or higher
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mti-engineering
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

## 🏛️ Architecture

### Next.js App Router
- **File-based routing** with app directory
- **Server Components** for optimal performance
- **Client Components** for interactivity
- **Route Groups** for organization

### Component Architecture
- **Atomic Design** principles
- **Reusable components** in `/components`
- **Page-specific components** in respective directories
- **TypeScript interfaces** for type safety

### State Management
- **React hooks** for local state
- **Context API** for global state (future)
- **Server state** via Next.js data fetching

## 🧩 Components

### Core Components

#### `Navbar.tsx`
- Responsive navigation bar
- Smooth scroll to sections
- Mobile-friendly hamburger menu
- Active link highlighting

#### `Footer.tsx`
- Company information
- Social media links
- Contact details
- Newsletter signup

#### `LiveDashboard.tsx`
- Real-time metrics display
- Animated counters
- Performance charts
- Status indicators

#### `Chatbot.tsx`
- AI-powered assistant
- Quick reply buttons
- Message history
- Responsive chat interface

#### `CTASection.tsx`
- Call-to-action components
- Gradient backgrounds
- Hover animations
- Conversion optimization

#### `LazyImage.tsx`
- Optimized image loading
- Lazy loading implementation
- Placeholder support
- Error handling

## 📄 Pages

### Homepage (`/`)
- Interactive building visualization
- Statistics showcase
- Feature highlights
- Testimonials
- Call-to-action sections

### About (`/about`)
- Company history since 1995
- Mission and vision
- Core values
- Leadership team

### Services (`/services`)
- IoT Integration
- Digital Twin solutions
- AI Surveillance
- Smart Infrastructure
- Consulting services

### Projects (`/projects`)
- Portfolio showcase
- Case studies
- Success metrics
- Industry applications

### Building Visualization (`/building/*`)
- Interactive floor exploration
- Department information
- 3D-like navigation
- Immersive experience

### Contact (`/contact`)
- Contact form
- Office locations
- Business hours
- Map integration

## ⚙️ Configuration

### Next.js Config (`next.config.js`)
```javascript
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http', hostname: '**' }
    ]
  }
}
```

### TypeScript Config (`tsconfig.json`)
- Strict type checking enabled
- ES2020 target
- Path mapping with `@/*`
- Incremental compilation

### Tailwind Config (`tailwind.config.ts`)
- Custom color palette
- Extended animations
- Cyberpunk theme colors
- Responsive breakpoints

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Environment Variables
Create `.env.local` for:
- API endpoints
- Analytics keys
- Contact form settings

### Hosting Platforms
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Self-hosted** with Node.js

## ⚡ Performance

### Optimization Features
- **Static Generation** for marketing pages
- **Image Optimization** with Next.js Image
- **Code Splitting** automatic
- **Lazy Loading** for components
- **CSS Optimization** with Tailwind

### Performance Metrics
- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1

## 🔍 SEO & Accessibility

### SEO Features
- **Meta tags** optimization
- **Structured data** for rich snippets
- **Open Graph** tags for social sharing
- **Sitemap** generation
- **robots.txt** configuration

### Accessibility
- **WCAG 2.1 AA** compliance
- **Keyboard navigation** support
- **Screen reader** compatibility
- **Color contrast** ratios
- **Focus indicators** visible

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Code Standards
- **TypeScript** strict mode
- **ESLint** rules compliance
- **Prettier** formatting
- **Conventional commits**

### Testing
- Component testing with Jest
- E2E testing with Playwright
- Performance testing with Lighthouse

## 📄 License

This project is proprietary software owned by MTI Engineering.
All rights reserved. Unauthorized use, reproduction, or distribution is prohibited.

## 📞 Contact

**MTI Engineering Solutions**
- **Website**: [www.mtiengineering.com](https://www.mtiengineering.com)
- **Email**: info@mtiengineering.com
- **Phone**: +971-4-XXX-XXXX
- **Address**: Dubai, UAE

## 🎯 Future Roadmap

### Phase 1 (Q1 2025)
- [ ] Advanced chatbot with NLP
- [ ] Multi-language support expansion
- [ ] Performance monitoring dashboard

### Phase 2 (Q2 2025)
- [ ] Admin panel for content management
- [ ] API integration for real-time data
- [ ] Progressive Web App features

### Phase 3 (Q3 2025)
- [ ] E-commerce integration
- [ ] Client portal
- [ ] Advanced analytics

---

**Built with ❤️ by MTI Engineering Team**

*Transforming industries through innovative engineering solutions since 1995*