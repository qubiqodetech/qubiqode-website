import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { About } from '@/components/sections/about';
import { Portfolio } from '@/components/sections/portfolio';
import { Process } from '@/components/sections/process';
import { Testimonials } from '@/components/sections/testimonials';
import { Blog } from '@/components/sections/blog';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Process />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
