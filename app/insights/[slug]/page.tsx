import { notFound } from "next/navigation";
import { BlogClient } from "./BlogClient";

// Mock data, in a real app this would come from a CMS
const articles = [
  {
    title: "The Future of AI in Digital Product Design",
    excerpt: "How generative AI is reshaping the way we approach user interfaces, rapid prototyping, and automated user testing.",
    category: "Design",
    date: "Oct 24, 2026",
    readTime: "6 min read",
    image: "https://picsum.photos/seed/blog1/1200/800",
    slug: "future-of-ai-design",
    author: "Elena Rodriguez",
    authorRole: "Head of Design",
    authorAvatar: "https://picsum.photos/seed/avatar7/150/150",
    content: `
      <p>The role of the product designer is undergoing a massive shift. With the proliferation of generative AI tools, the manual labor of pushing pixels is accelerating, allowing designers to focus on higher-order problem solving and strategic thinking.</p>
      
      <h2>Automating the Prototype</h2>
      <p>Imagine feeding a text description of a user flow into a model, and instantly receiving a high-fidelity, interactive prototype. This isn't science fiction; it's the reality we are rapidly approaching. This allows teams to validate ideas with users in hours, rather than weeks.</p>
      
      <blockquote>
        <p>"AI doesn't replace the designer. It replaces the tedious aspects of the design process, unleashing true creativity."</p>
      </blockquote>
      
      <h2>Dynamic Personalization at Scale</h2>
      <p>AI enables interfaces that adapt in real-time to the behavior and preferences of the individual user. We're moving from a paradigm of "one-size-fits-all" UI to "one-size-fits-one".</p>
      
      <h3>Key areas of impact:</h3>
      <ul>
        <li><strong>Accessibility:</strong> Automatically generating color-contrast compliant alternatives.</li>
        <li><strong>Localization:</strong> Context-aware layout adjustments based on language length and cultural norms.</li>
        <li><strong>Micro-copy:</strong> Generating perfectly toned error messages and calls-to-action on the fly.</li>
      </ul>
      
      <p>To stay relevant, product teams must embrace these tools not as threats, but as force multipliers. The future belongs to those who understand how to direct the machine.</p>
    `
  },
  {
    title: "Why Next.js 15 is Our Default React Framework",
    excerpt: "An engineering deep-dive into the performance, developer experience, and architectural benefits we see with App Router and Turbopack.",
    category: "Engineering",
    date: "Oct 18, 2026",
    readTime: "8 min read",
    image: "https://picsum.photos/seed/blog2/800/600",
    slug: "nextjs-default-framework",
    author: "David Chen",
    authorRole: "Lead Engineer",
    authorAvatar: "https://picsum.photos/seed/avatar8/150/150",
    content: "<p>Coming soon...</p>"
  }
];

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const article = articles.find(a => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  // We'll pass the current article and a list of other articles for "Related Posts"
  const relatedPosts = articles.filter(a => a.slug !== resolvedParams.slug).slice(0, 3);

  return <BlogClient article={article} relatedPosts={relatedPosts} />;
}
