# QubiQode Website Plan & Design System

## 1. Website Structure & Strategy

### Sitemap
- **Home (`/`)**: Main entry point, establishes brand and drives to key pages.
- **About (`/about`)**: Agency story, team, mission, and culture.
- **Services (`/services`)**: Comprehensive overview of capabilities.
  - Web Development (`/services/web-development`)
  - UI/UX Design (`/services/ui-ux-design`)
  - Brand Identity (`/services/brand-identity`)
  - Video Editing (`/services/video-editing`)
- **Portfolio (`/portfolio`)**: Case studies and past work.
  - Single Project (`/portfolio/[slug]`)
- **Process (`/process`)**: How we work, methodology.
- **Blog / Insights (`/blog`)**: SEO content, agency news, thought leadership.
  - Single Post (`/blog/[slug]`)
- **Contact (`/contact`)**: Lead capture form, contact info, WhatsApp link.

### Component Breakdown
- **Layout**: `Navbar`, `Footer`, `SectionContainer`.
- **UI Elements**: `Button` (Primary/Secondary variants), `Badge` (pill-shaped label), `IconWrapper` (consistent sized icons).
- **Sections**: `Hero`, `ServiceCard`, `ProjectCard`, `ProcessStep`, `TestimonialCard`, `BlogCard`, `CallToActionBanner`.

### Content & CTA Strategy
- **Focus**: Confidence, outcomes, clarity. No fluff.
- **Primary CTA**: "Start a Project" / "Get a Quote" 
- **Secondary CTA**: "View Our Work" / "Learn More"
- **SEO Keywords**: Premium digital agency, UI/UX design services, custom web development Next.js, modern brand identity, corporate video editing.

---

## 2. Wireframe Blueprint

### Homepage Breakdown
- **Hero**: Large display headline, brief subtext, dual CTAs (Start Project & View Work). Subtle blurred background shapes.
- **Services Preview**: 4-column grid on desktop, stacking to 2 then 1 on mobile. Focus on icons, short descriptions, hover to elevate.
- **About Preview**: 2-column split. Left: High-quality image or abstract visual. Right: Short compelling text and "More About Us" CTA.
- **Featured Projects**: 2-column masonry or interlocking grid. Dark section background to create contrast from previous sections. Images have hover-reveal effects.
- **Process**: Sticky header on left (desktop), scrolling numbered steps (1-4) on right.
- **Testimonials**: 3-column grid of cards. Star ratings, quote, avatar, and title. Light background.
- **Blog Preview**: Section header with "View All", followed by 3 latest posts in a card format (Image, Date, Category, Title).
- **Final CTA**: High contrast, dark section. "Ready to start your project?" with an email entry form or direct link to contact.
- **Footer**: 4 columns (Brand/Socials, Services, Agency Links, Newsletter).

---

## 3. Visual Design System

### Color Palette
- **Primary Background**: Stone 50 (`#fafaf9`) - A warm, sophisticated off-white (instead of harsh pure white).
- **Primary Text**: Stone 950 (`#0c0a09`) - Almost black, provides deep contrast.
- **Accent**: Orange 600 (`#ea580c`) - Vibrant and energetic for CTAs, highlights, and active states.
- **Secondary Elements**: Stone 500 (`#78716c`) - Muted text for descriptions, placeholders, and borders (`#e7e5e4`).
- **Dark Mode / Contrast Sections**: Deep Stone (`#1c1917`) with pure white (`#ffffff`) text and `white/10` borders.

### Typography
- **Display/Headings**: `Outfit`
  - Values: Geometric, modern, confident.
  - Usage: H1, H2, H3, large numbers. Tight tracking (`tracking-tight`).
- **Body/Sans**: `Inter`
  - Values: Legible, clean, reliable.
  - Usage: Paragraphs, buttons, small labels. Relaxed line height (`leading-relaxed`).

### Shapes & Spacing
- **Border Radius**: 
  - Buttons & Badges: Full (`rounded-full` / `9999px`)
  - Cards & Containers: 3XL (`rounded-3xl` / `24px`) for large sections, XL (`rounded-xl` / `12px`) for smaller inputs/images.
- **Spacing Scale**: Extensive use of padding. `py-24` or `py-32` for sections on desktop to give elements "room to breathe".
- **Borders over Shadows**: Favor thin `1px` borders (`border-stone-200`) instead of heavy drop shadows to create separation.

### Animation & Interaction
- **Easing**: Custom spring-like easing `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Page Load**: Subtle stagger fade-up (opacity 0 -> 1, y 20 -> 0).
- **Hover States**: 
  - Buttons: Slight scale down (`active:scale-[0.98]`).
  - Cards: Border colour change, slight background shift.
  - Project Images: Slow transform scale (`group-hover:scale-105`) with a 500ms-700ms duration.
