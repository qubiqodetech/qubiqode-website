"use client";

import { Marquee } from "@/components/ui/marquee";
import { portfolioProjects } from "@/lib/portfolio";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ProjectMarquee() {
  return (
    <section className="py-12 bg-stone-950 overflow-hidden relative">
      <div className="relative flex flex-col items-center justify-center [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] w-full">
        <Marquee className="[--duration:60s] py-8" pauseOnHover>
          {portfolioProjects.concat(portfolioProjects).map((project, index) => (
            <Link
              href={`/portfolio/${project.slug}`}
              key={index}
              className="group relative block w-[300px] md:w-[500px] aspect-[4/3] rounded-[2rem] overflow-hidden mx-4 bg-stone-900 border border-white/10"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-stone-950/40 group-hover:bg-stone-950/20 transition-colors duration-500" />
               <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="font-display text-2xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-stone-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">{project.category}</p>
                
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-primary-500 group-hover:border-primary-500 group-hover:text-white transition-all duration-300 translate-y-2 group-hover:translate-y-0 text-white">
                  <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
