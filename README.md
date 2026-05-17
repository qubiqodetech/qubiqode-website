<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
</div>

<h1 align="center">QubiQode Digital Agency</h1>

<p align="center">
  <strong>Modern premium digital agency platform built with Next.js and Tailwind CSS.</strong>
</p>

<p align="center">
  A state-of-the-art web presence engineered for high performance, exceptional UI/UX, and conversion optimization.
</p>

---

## 📖 Project Overview

**QubiQode** is a creative technology and digital solutions brand. This repository contains the source code for our primary web platform. The purpose of this website is to establish a premium digital footprint, showcase our portfolio, offer our digital services, and generate highly qualified leads.

**Primary Goals:**
- Deliver a world-class, premium agency experience.
- Maintain top-tier performance metrics (Core Web Vitals).
- Maximize lead generation through optimized user journeys.
- Communicate our technical expertise through the platform's execution itself.

---

## ✨ Features

- 💎 **Premium UI/UX:** Glassmorphism, subtle gradients, and elegant spacing.
- 🚀 **Next.js App Router:** Server components and robust routing architecture.
- 🎨 **Responsive Design:** Mobile-first approach scaling beautifully to ultra-wide displays.
- 💫 **Framer Motion:** Cinematic scroll animations and refined micro-interactions.
- 🔍 **SEO Optimized:** Dynamic metadata, semantic HTML, and high-performance load times.
- 📈 **Conversion Focused:** Strategically placed CTAs, lead forms, and service pages.
- 📑 **Dynamic Navigation:** Multi-column mega menu with mobile drawer.
- 🌗 **Premium Theming:** High-contrast modern color palette.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** [Next.js 15+](https://nextjs.org/)
- **Library:** [React](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://motion.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)

### Tooling & Deployment
- **Linting:** ESLint & Prettier
- **Hosting:** [Vercel](https://vercel.com/)
- **Design:** Figma

---

## 📂 Folder Structure

```text
├── app/                  # Next.js App Router pages and layouts
├── components/           # Reusable UI components (Navbar, Footer, etc.)
│   ├── sections/         # Page-specific building blocks (Hero, Features, etc.)
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and configuration
├── public/               # Static assets (images, fonts, etc.)
├── next.config.ts        # Next.js configuration
├── postcss.config.mjs    # PostCSS configuration for Tailwind
└── package.json          # Project dependencies and scripts
```

---

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/qubiqode.git
   cd qubiqode
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   npm run start
   ```

---

## ⚙️ Environment Variables

Create a `.env.example` or `.env` file in the root directory for local development:

```env
# Example environment configuration
NEXT_PUBLIC_SITE_URL="https://qubiqode.com"
```

---

## 📜 Scripts

- `npm run dev` — Starts the development server with fast refresh.
- `npm run build` — Compiles the application for production.
- `npm run start` — Runs the compiled production build.
- `npm run lint` — Runs ESLint to catch syntax and style issues.

---

## 🎨 UI/UX Philosophy

The QubiQode UI is built around a "Modern Minimalist Agency" aesthetic. We believe that less is more, but quality is everything.
- **Strong Spacing:** Generous whitespace to let content breathe.
- **Conversion-focused:** Clear visual hierarchy guiding users to CTAs.
- **Accessibility:** High contrast ratios, semantic HTML, and keyboard navigation support.
- **Elegant Motion:** Motion is used to draw attention and confirm actions, not to distract.

---

## 🎬 Animation System

Powered by **Framer Motion**, our animation system focuses on elegance and performance:
- **Scroll Reveal:** Elements gracefully fade and slide up as they enter the viewport.
- **Micro-interactions:** Buttons and cards respond physically (`scale: 0.98`) to interactions.
- **Layout Transitions:** Shared element routing and smooth accordion/drawer toggling.

---

## 📊 SEO & Performance

Built from the ground up for search engine dominance:
- **Metadata:** Dynamic titles and descriptions per route.
- **Open Graph:** Fully optimized for social sharing.
- **Image Optimization:** Utilizes `next/image` for automatic WebP conversion and resizing.
- **Core Web Vitals:** Pre-rendered HTML, code splitting, and zero-layout-shift design.

---

## 🗺️ Pages Included

- **Core:** Home, About, Process, Testimonials, Careers.
- **Services:** Overview, Web Development, UI/UX Design, SEO Optimization, Branding & Creative Media, Video Editing & Animation, AI & Automation Solutions.
- **Work:** Portfolio, Case Studies, Technology Stack, Industries Served, Design System / UI Showcase.
- **Resources:** Blog, Resources / Freebies, FAQ.
- **Contact:** Contact, Book Consultation, Support / Maintenance Plans.
- **Legal:** Privacy Policy, Terms & Conditions, Sitemap.

---

## 🛣️ Future Roadmap

- [ ] AI-powered interactive Chatbot for lead qualification.
- [ ] Headless CMS integration for dynamic blog and portfolio management.
- [ ] Client Portal with secure login for project tracking.
- [ ] Internationalization (i18n) for global reach.
- [ ] Advanced behavioral analytics dashboard.

---

## 📸 Screenshots

> *(Screenshot placeholders - Update with actual site imagery)*

<div align="center">
  <img src="https://via.placeholder.com/800x450/1c1917/ffffff?text=Homepage+Hero" alt="Homepage Screenshot" width="48%" />
  <img src="https://via.placeholder.com/800x450/1c1917/ffffff?text=Services+Page" alt="Services Screenshot" width="48%" />
  <br/>
  <img src="https://via.placeholder.com/800x450/1c1917/ffffff?text=Portfolio+Showcase" alt="Portfolio Screenshot" width="48%" />
  <img src="https://via.placeholder.com/800x450/1c1917/ffffff?text=Mobile+Responsive" alt="Mobile Screenshot" width="48%" />
</div>

---

## 🤝 Contribution Guidelines

We welcome contributions to improve the QubiQode platform.
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m "Add some feature"`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.

Please ensure you adhere to our ESLint and Prettier formatting guidelines.

---

## 🌍 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/).
Connect your GitHub repository to Vercel and it will automatically handle build settings, environment variables, and CDN distribution.

---

## 🏢 Branding

**QubiQode** represents the intersection of creative vision and rigorous engineering. Our brand identity relies on:
- **Creative Technology:** Beyond just code, we build experiences.
- **Premium Real Estate:** Every pixel conveys trust and expertise.
- **Performance:** Speed is a feature of our brand.

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 📫 Contact

- **Website:** [qubiqode.com](https://qubiqode.com)
- **GitHub:** [@qubiqode](https://github.com/qubiqode)
- **LinkedIn:** [linkedin.com/company/qubiqode](https://linkedin.com)
- **Instagram:** [@qubiqode](https://instagram.com)
- **Email:** hello@qubiqode.com

---

<div align="center">
  <p><strong>Built with creativity, technology, and innovation by QubiQode.</strong></p>
</div>
