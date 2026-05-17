import { Metadata } from "next";
import { notFound } from "next/navigation";
import { portfolioProjects } from "@/lib/portfolio";
import { CaseStudyClient } from "./CaseStudyClient";

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

  return <CaseStudyClient project={project} />;
}
