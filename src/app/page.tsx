"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { projectTranslations } from "@/data/i18n";
import { useApp } from "@/components/providers";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

function Hero() {
  const { t } = useApp();
  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center px-6 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-4 h-24 w-24 overflow-hidden rounded-full border-2 border-border"
      >
        <Image
          src="/profile.jpeg"
          alt="Brunno Seneguini"
          width={96}
          height={96}
          className="h-full w-full object-cover"
          priority
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-3xl font-bold tracking-tight sm:text-4xl"
      >
        Brunno Seneguini
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-2 text-base text-accent font-medium"
      >
        {t.hero.role}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-3 max-w-md text-sm text-muted leading-relaxed"
      >
        {t.hero.bio}
      </motion.p>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const { locale } = useApp();
  const pt = projectTranslations[locale][project.slug as keyof (typeof projectTranslations)["pt"]];

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeUp}
    >
      <Link
        href={`/projetos/${project.slug}`}
        className="group block rounded-xl border border-border bg-card overflow-hidden transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
      >
        <div className="relative aspect-[16/9] overflow-hidden bg-background">
          <Image
            src={`/screenshots/${project.slug}.jpg`}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="mt-0.5 text-xs text-muted">{pt.tagline}</p>
            </div>
            <span
              className="mt-1 h-2.5 w-2.5 rounded-full shrink-0"
              style={{ backgroundColor: project.color }}
            />
          </div>
          <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-2">
            {pt.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-background px-2 py-0.5 text-xs text-muted border border-border"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="rounded-md bg-background px-2 py-0.5 text-xs text-muted border border-border">
                +{project.stack.length - 4}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function Projects() {
  const { t } = useApp();
  return (
    <section id="projetos" className="mx-auto max-w-5xl px-6 py-12">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm font-semibold uppercase tracking-widest text-accent"
      >
        {t.projects.label}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-1 text-xl font-bold"
      >
        {t.projects.headline}
      </motion.p>
      <div className="mt-6 grid gap-5 sm:grid-cols-1 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

function About() {
  const { t } = useApp();
  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Next.js", "TanStack", "Tailwind CSS", "shadcn/ui"],
    },
    {
      category: "Backend",
      items: ["Python", "Supabase", "PostgreSQL", "REST APIs"],
    },
    {
      category: "IA & Data",
      items: ["JEV (TypeSafe)", "Claude API", "Web Scraping", "Chart.js"],
    },
    {
      category: "Product",
      items: ["Discovery", "PRD", "Design System", "Deploy (Vercel)"],
    },
  ];

  return (
    <section id="sobre" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-semibold uppercase tracking-widest text-accent"
        >
          {t.about.label}
        </motion.h2>
        <div className="mt-4 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3 text-sm text-muted leading-relaxed"
          >
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>
              {t.about.p3before}
              <span className="text-foreground font-medium">
                {t.about.p3highlight}
              </span>
              .
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((group) => (
              <div key={group.category}>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                  {group.category}
                </h4>
                <ul className="space-y-1">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useApp();
  const links = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/brunno-seneguini" },
    { label: "GitHub", href: "https://github.com/deflist-app" },
    { label: "CV Online", href: "https://brunno-seneguini-cv.vercel.app" },
  ];

  return (
    <section id="contato" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-12 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-semibold uppercase tracking-widest text-accent"
        >
          {t.contact.label}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-2 text-xl font-bold"
        >
          {t.contact.headline}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-2 text-sm text-muted"
        >
          {t.contact.location}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 flex justify-center gap-3"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition hover:border-accent/40 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
