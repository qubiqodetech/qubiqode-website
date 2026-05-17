import { Hero } from "@/components/sections/hero";
import { DigitalDNA } from "@/components/sections/digital-dna";
import { TextMarquee } from "@/components/sections/text-marquee";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { Portfolio } from "@/components/sections/portfolio";
import { ProjectMarquee } from "@/components/sections/project-marquee";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { Blog } from "@/components/sections/blog";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <DigitalDNA />
      <TextMarquee />
      <Services />
      <About />
      <Portfolio />
      <ProjectMarquee />
      <Process />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
