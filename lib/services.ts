import {
  Code,
  PenTool,
  Search,
  MonitorPlay,
  Film,
  Share2,
  Camera,
} from "lucide-react";

export const services = [
  {
    title: "Web Development",
    slug: "web-development",
    icon: Code,
    summary:
      "Custom, high-performance web applications built from the ground up to serve your unique business needs and scale with your growth.",
    description:
      "Our web development service focuses on creating robust, scalable, and lightning-fast applications. We use modern stacks like Next.js, React, and Node.js to ensure your platform is future-proof and provides an exceptional user experience on any device.",
    benefits: [
      "Lightning-fast global performance",
      "Scalable architecture for future growth",
      "Bank-grade security standards",
      "Seamless third-party integrations",
    ],
    deliverables: [
      "Custom Web Application",
      "Source Code & Documentation",
      "Deployment Setup",
      "Admin Dashboard",
    ],
    workflow: [
      {
        title: "Architecture Planning",
        description: "Defining the tech stack and database schema.",
      },
      {
        title: "Frontend Development",
        description: "Building the user interface with modern frameworks.",
      },
      {
        title: "Backend Integration",
        description: "Developing APIs and integrating business logic.",
      },
      {
        title: "Testing & QA",
        description: "Rigorous testing across devices and browsers.",
      },
    ],
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    icon: PenTool,
    summary:
      "User-centric interfaces that combine stunning aesthetics with frictionless user journeys to maximize engagement and conversions.",
    description:
      "Great design is more than just aesthetics; it is about how it works. We design intuitive, accessible, and beautiful interfaces that guide users effortlessly to their goals, turning complex systems into simple, enjoyable experiences.",
    benefits: [
      "Increased user retention and engagement",
      "Higher conversion rates",
      "Reduced support costs",
      "Stronger brand perception",
    ],
    deliverables: [
      "Interactive Prototypes",
      "High-Fidelity Mockups",
      "Comprehensive Design System",
      "User Journey Maps",
    ],
    workflow: [
      {
        title: "User Research",
        description: "Understanding your audience and their pain points.",
      },
      {
        title: "Wireframing",
        description: "Mapping out layouts and user flow.",
      },
      {
        title: "Visual Design",
        description: "Applying brand aesthetics and creating UI components.",
      },
      {
        title: "Prototyping",
        description: "Creating interactive models for testing.",
      },
    ],
  },
  {
    title: "SEO-Optimized Websites",
    slug: "seo-optimized-websites",
    icon: Search,
    summary:
      "Beautiful websites engineered with technical SEO best practices to dominate search rankings and drive organic traffic.",
    description:
      "We build websites that search engines love as much as users do. From semantic markup to extremely fast load times and structured data, every site we produce is designed to rank higher and attract your ideal audience naturally.",
    benefits: [
      "Higher visibility on search engines",
      "Sustainable, unpaid organic traffic",
      "Better user experience leading to lower bounce rates",
      "Competitive edge in your industry",
    ],
    deliverables: [
      "Fully Responsive Website",
      "On-Page SEO Optimization",
      "Technical SEO Audit & Fixes",
      "CMS Integration",
    ],
    workflow: [
      {
        title: "Keyword Strategy",
        description: "Identifying high-value search terms.",
      },
      {
        title: "Semantic Coding",
        description: "Writing HTML that search engines understand.",
      },
      {
        title: "Speed Optimization",
        description: "Tuning assets and server response times.",
      },
      {
        title: "Launch & Submit",
        description: "Submitting sitemaps and monitoring initial indexing.",
      },
    ],
  },
  {
    title: "Logo Animation",
    slug: "logo-animation",
    icon: MonitorPlay,
    summary:
      "Bring your brand to life with dynamic, memorable logo animations that capture attention instantly.",
    description:
      "A static logo is easily forgotten, but an animated one tells a story. We create custom motion graphics for your branding that can be used across your website, video intros, and social media to make a lasting impression.",
    benefits: [
      "Immediate brand recognition",
      "Higher engagement in video content",
      "Demonstrates a premium, modern brand identity",
      "Versatile asset for all digital platforms",
    ],
    deliverables: [
      "2D/3D Logo Animation",
      "Multiple Format Exports (MP4, GIF, Lottie)",
      "Transparent Background Versions",
      "Source Project Files",
    ],
    workflow: [
      {
        title: "Concept Ideation",
        description:
          "Brainstorming motion concepts based on your brand values.",
      },
      {
        title: "Storyboarding",
        description: "Sketching the animation sequence.",
      },
      {
        title: "Animation",
        description:
          "Bringing the logo to life in After Effects or 3D software.",
      },
      {
        title: "Final Polish",
        description: "Adding sound design and rendering final formats.",
      },
    ],
  },
  {
    title: "Video Editing",
    slug: "video-editing",
    icon: Film,
    summary:
      "Professional video production and editing to engage your audience and communicate your message clearly.",
    description:
      "From corporate overviews to dynamic product demos, our video editing team crafts compelling visual narratives. We handle pacing, color grading, sound mixing, and motion graphics to produce cinematic quality content.",
    benefits: [
      "Professional brand image",
      "Increased engagement on landing pages",
      "Clearer communication of complex products",
      "Higher shareability",
    ],
    deliverables: [
      "Edited Video Content",
      "Color Grading & Correction",
      "Audio Mixing & Sound Design",
      "Subtitles & Captions",
    ],
    workflow: [
      {
        title: "Brief & Ingestion",
        description: "Reviewing raw footage and aligning on goals.",
      },
      { title: "Rough Cut", description: "Assembling the story and pacing." },
      {
        title: "VFX & Color",
        description: "Adding graphics and enhancing visual quality.",
      },
      {
        title: "Final Delivery",
        description: "Exporting optimized files for your exact needs.",
      },
    ],
  },
  {
    title: "Social Media Content",
    slug: "social-media-content",
    icon: Share2,
    summary:
      "Scroll-stopping visual content tailored for Instagram, TikTok, LinkedIn, and more.",
    description:
      "We design and produce high-quality social media assets that elevate your feed. Whether it is animated reels, carousel posts, or stylized graphics, we make sure your brand stands out in crowded timelines.",
    benefits: [
      "Consistent, high-quality brand presence",
      "Increased follower growth and engagement",
      "Higher click-through rates on social ads",
      "Saved time for your internal marketing team",
    ],
    deliverables: [
      "Short-form vertical videos (Reels/TikTok)",
      "Static & Carousel Graphic Posts",
      "Custom Story Templates",
      "Platform-specific optimized exports",
    ],
    workflow: [
      {
        title: "Content Strategy",
        description: "Planning themes and content pillars.",
      },
      {
        title: "Asset Creation",
        description: "Designing graphics and editing short videos.",
      },
      { title: "Review", description: "Batch reviewing content for approval." },
      {
        title: "Delivery",
        description: "Providing organized folders of ready-to-post content.",
      },
    ],
  },
  {
    title: "Photography / Creative Media",
    slug: "creative-media",
    icon: Camera,
    summary:
      "Stunning commercial photography and creative direction to showcase your products, team, and workspace.",
    description:
      "Stock photos only get you so far. We provide custom photography services, from product shoots to lifestyle and corporate portraits, ensuring your digital presence is authentic and visually striking.",
    benefits: [
      "Authentic representation of your brand",
      "Unique assets your competitors cannot copy",
      "Higher trust and credibility from users",
      "Versatile images for web, print, and ads",
    ],
    deliverables: [
      "High-Resolution Edited Images",
      "Web-Optimized Image Formats",
      "Product/Lifestyle/Team Shots",
      "Full Commercial Usage Rights",
    ],
    workflow: [
      {
        title: "Moodboard & Planning",
        description: "Defining the visual style and shot list.",
      },
      {
        title: "Production",
        description: "The photoshoot day with proper lighting and direction.",
      },
      {
        title: "Selection",
        description: "Choosing the best shots from the raw proofs.",
      },
      {
        title: "Retouching",
        description: "Color grading and fine-tuning the final selections.",
      },
    ],
  },
];
