"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/data/projects";
import type { CaseStudy } from "@/data/case-studies";
import { useApp } from "@/components/providers";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function ProjectContent({
  project,
  study,
}: {
  project: Project;
  study: CaseStudy;
}) {
  const { t } = useApp();
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          href="/#projetos"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-foreground"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="shrink-0"
          >
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {t.caseStudy.back}
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="mt-8"
      >
        <div className="flex items-center gap-3">
          <span
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: project.color }}
          />
          <h1 className="text-3xl font-bold sm:text-4xl">{project.title}</h1>
        </div>
        <p className="mt-2 text-lg text-muted">{project.tagline}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-6 flex flex-wrap gap-3"
      >
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-accent bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition hover:bg-accent/20"
        >
          {t.caseStudy.liveApp} &rarr;
        </a>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition hover:border-accent/40"
          >
            GitHub
          </a>
        )}
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-12"
      >
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
          {t.caseStudy.overview}
        </h2>
        <p className="mt-3 text-muted leading-relaxed">{study.overview}</p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="mt-10"
      >
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
          {t.caseStudy.challenge}
        </h2>
        <p className="mt-3 text-muted leading-relaxed">{study.problem}</p>
      </motion.section>

      <motion.section
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-10"
      >
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
          {t.caseStudy.stack}
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.section>

      <motion.section
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-10"
      >
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
          {t.caseStudy.architecture}
        </h2>
        <div className="mt-4 space-y-3">
          {study.architecture.map((item, i) => (
            <div key={i} className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent/60" />
              <p className="text-sm text-muted leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-10"
      >
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
          {t.caseStudy.features}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {study.features.map((feat, i) => (
            <motion.div
              key={feat.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-xl border border-border bg-card p-5"
            >
              <h3 className="font-semibold text-foreground">{feat.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        custom={3}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-10"
      >
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
          {t.caseStudy.highlights}
        </h2>
        <ul className="mt-4 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-muted">
              <span className="mt-1 text-accent">&#10003;</span>
              {h}
            </li>
          ))}
        </ul>
      </motion.section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 flex justify-center"
      >
        <Link
          href="/#projetos"
          className="rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition hover:border-accent/40 hover:text-accent"
        >
          &larr; {t.caseStudy.allProjects}
        </Link>
      </motion.div>
    </div>
  );
}
