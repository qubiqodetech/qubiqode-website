import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Target, Lightbulb } from "lucide-react";
import { portfolioProjects } from "@/lib/portfolio";
import { Contact } from "@/components/sections/contact";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | QubiQode",
    };
  }

  return {
    title: `${project.title} | Case Study | QubiQode`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-stone-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-sm font-medium text-stone-500 hover:text-stone-950 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 ml-0 mr-2" />
            Back to Portfolio
          </Link>

          <div className="flex items-center gap-4 text-sm font-medium text-stone-500 mb-6">
            <span className="text-orange-600 bg-orange-50 px-3 py-1 rounded-full uppercase tracking-wider text-xs">
              {project.category}
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-950 mb-8 max-w-4xl">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-12 pt-8 border-t border-stone-200">
            <div>
              <p className="text-sm text-stone-500 mb-1">Client</p>
              <p className="font-semibold text-stone-950">{project.client}</p>
            </div>
            <div>
              <p className="text-sm text-stone-500 mb-1">Timeline</p>
              <p className="font-semibold text-stone-950">{project.timeline}</p>
            </div>
            <div>
              <p className="text-sm text-stone-500 mb-1">Role</p>
              <p className="font-semibold text-stone-950">{project.category}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-8 bg-stone-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="relative aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl shadow-stone-200/50">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center">
                  <Target className="w-5 h-5 text-stone-900" />
                </div>
                <h2 className="font-display text-3xl font-bold text-stone-950">
                  The Challenge
                </h2>
              </div>
              <p className="text-lg text-stone-600 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="font-display text-3xl font-bold text-stone-950">
                  The Solution
                </h2>
              </div>
              <p className="text-lg text-stone-600 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Impact/Results */}
          <div className="bg-stone-950 text-white rounded-[2rem] p-12 md:p-16 mb-24 text-center">
            <h3 className="font-display text-2xl font-bold mb-12 text-stone-300">
              Project Impact
            </h3>
            <div className="grid sm:grid-cols-3 gap-8">
              {project.impact.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="font-display font-bold text-6xl text-orange-500 mb-4">
                    {item.metric}
                  </div>
                  <div className="text-lg text-stone-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div className="space-y-8">
            <h3 className="font-display text-3xl font-bold text-stone-950 mb-8 text-center">
              Gallery
            </h3>
            {project.gallery.map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-[16/9] rounded-[2rem] overflow-hidden bg-stone-100"
              >
                <Image
                  src={img}
                  alt={`${project.title} - view ${idx + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
