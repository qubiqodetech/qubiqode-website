import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Chatbot } from "@/components/chatbot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "QubiQode | Premium Digital Agency",
  description:
    "We are a modern digital agency specializing in custom web development, UI/UX design, branding, and video production. Build your digital future with QubiQode.",
  metadataBase: new URL("https://qubiqode.com"),
  openGraph: {
    title: "QubiQode | Premium Digital Agency",
    description:
      "Modern digital agency specializing in high-performing web experiences and brand identities.",
    url: "https://qubiqode.com",
    siteName: "QubiQode",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://picsum.photos/seed/qubiqode-og/1200/630",
        width: 1200,
        height: 630,
        alt: "QubiQode Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QubiQode | Premium Digital Agency",
    description:
      "Modern digital agency specializing in high-performing web experiences.",
  },
  keywords: [
    "digital agency",
    "web development",
    "UI/UX design",
    "branding",
    "next.js",
    "video editing",
    "SEO",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "QubiQode",
    image: "https://picsum.photos/seed/qubiqode-og/1200/630",
    "@id": "https://qubiqode.com",
    url: "https://qubiqode.com",
    telephone: "+1234567890",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Innovation Drive, Suite 400",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94103",
      addressCountry: "US",
    },
    sameAs: [
      "https://twitter.com/qubiqode",
      "https://linkedin.com/company/qubiqode",
      "https://instagram.com/qubiqode",
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body
        className="font-sans antialiased bg-stone-50 text-stone-950 flex min-h-screen flex-col"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
