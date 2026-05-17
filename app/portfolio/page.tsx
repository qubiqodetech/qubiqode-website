import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { portfolioProjects } from "@/lib/portfolio";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Our Portfolio | QubiQode Digital Agency",
  description:
    "Explore our latest work. We build scalable, beautiful digital products that drive real business results.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="pt-32 pb-24 bg-stone-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mb-16">
            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-stone-950 mb-6">
              Our <span className="text-orange-600">Work</span>
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed">
              We don't just build websites and apps; we build businesses. Browse
              a selection of our recent projects and see how we've helped our
              clients achieve their goals.
            </p>
          </div>

          <div className="space-y-24">
            {portfolioProjects.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 items-center group`}
              >
                <div className="w-full lg:w-3/5">
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="block relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl shadow-stone-200/50"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500" />
                  </Link>
                </div>

                <div className="w-full lg:w-2/5">
                  <div className="flex items-center gap-4 text-sm font-medium text-stone-500 mb-4">
                    <span className="text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span>{project.client}</span>
                  </div>

                  <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-950 mb-6">
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="hover:text-orange-600 transition-colors"
                    >
                      {project.title}
                    </Link>
                  </h2>

                  <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-10 pb-10 border-b border-stone-200">
                    {project.impact.map((item, idx) => (
                      <div key={idx}>
                        <div className="font-display font-bold text-2xl text-stone-950 mb-1">
                          {item.metric}
                        </div>
                        <div className="text-xs text-stone-500">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center justify-center rounded-full bg-stone-950 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-stone-900/20 hover:bg-stone-800 transition-all duration-200 group/btn"
                  >
                    Read Case Study
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
