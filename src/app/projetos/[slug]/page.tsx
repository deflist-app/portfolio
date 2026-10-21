import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { caseStudies } from "@/data/case-studies";
import ProjectContent from "./project-content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const study = caseStudies[slug];

  if (!project || !study) notFound();

  return <ProjectContent project={project} study={study} />;
}
