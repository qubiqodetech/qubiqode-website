import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'QubiQode | Premium Digital Agency',
  description: 'QubiQode is a modern digital agency specializing in web development, design, branding, and digital services.',
  openGraph: {
    title: 'QubiQode | Premium Digital Agency',
    description: 'Modern digital agency specializing in high-performing web experiences.',
    url: 'https://qubiqode.com',
    siteName: 'QubiQode',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-stone-50 text-stone-950 flex min-h-screen flex-col" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1 flex flex-col pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
