"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

function Hero() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6 h-28 w-28 overflow-hidden rounded-full border-2 border-border"
      >
        <Image
          src="/profile.jpeg"
          alt="Brunno Seneguini"
          width={112}
          height={112}
          className="h-full w-full object-cover"
          priority
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-4xl font-bold tracking-tight sm:text-5xl"
      >
        Brunno Seneguini
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-3 text-lg text-accent font-medium"
      >
        Product Builder
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-4 max-w-lg text-muted leading-relaxed"
      >
        11 anos em finanças corporativas. Agora construo produtos digitais do
        zero ao deploy — com o rigor analítico de quem viveu dados, risco e
        resultado.
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
        className="group block rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
      >
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-muted">{project.tagline}</p>
          </div>
          <span
            className="mt-1 h-3 w-3 rounded-full shrink-0"
            style={{ backgroundColor: project.color }}
          />
        </div>
        <p className="mt-4 text-sm text-muted leading-relaxed">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-background px-2.5 py-1 text-xs text-muted border border-border"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 5 && (
            <span className="rounded-md bg-background px-2.5 py-1 text-xs text-muted border border-border">
              +{project.stack.length - 5}
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  );
}

function Projects() {
  return (
    <section id="projetos" className="mx-auto max-w-5xl px-6 py-20">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm font-semibold uppercase tracking-widest text-accent"
      >
        Projetos
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-2 text-2xl font-bold"
      >
        3 produtos construídos em 2 meses
      </motion.p>
      <div className="mt-10 grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

function About() {
  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "TypeScript",
        "Next.js",
        "TanStack",
        "Tailwind CSS",
        "shadcn/ui",
      ],
    },
    {
      category: "Backend",
      items: ["Python", "Supabase", "PostgreSQL", "REST APIs"],
    },
    {
      category: "IA & Dados",
      items: ["JEV (TypeSafe)", "Claude API", "Web Scraping", "Chart.js"],
    },
    {
      category: "Produto",
      items: ["Discovery", "PRD", "Design System", "Deploy (Vercel)"],
    },
  ];

  return (
    <section id="sobre" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-semibold uppercase tracking-widest text-accent"
        >
          Sobre
        </motion.h2>
        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 text-muted leading-relaxed"
          >
            <p>
              Sou analista financeiro com mais de 11 anos em grandes empresas —
              Itaú, Redecard, Grupo Fleury e a fintech PAGGI — atuando em
              tesouraria, contas a receber, controladoria e risco de crédito.
            </p>
            <p>
              O que me motiva é transformar dados dispersos em decisões
              concretas. Essa motivação me levou à tecnologia: hoje desenvolvo
              produtos digitais de ponta a ponta, do banco de dados ao deploy em
              produção.
            </p>
            <p>
              Trago algo que costuma faltar em times técnicos:{" "}
              <span className="text-foreground font-medium">
                profundo entendimento de negócio, finanças e risco
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
                <h4 className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  {group.category}
                </h4>
                <ul className="space-y-1.5">
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
  const links = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/brunno-seneguini",
    },
    { label: "GitHub", href: "https://github.com/deflist-app" },
    { label: "CV Online", href: "https://brunno-seneguini-cv.vercel.app" },
  ];

  return (
    <section id="contato" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-semibold uppercase tracking-widest text-accent"
        >
          Contato
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-2xl font-bold"
        >
          Vamos conversar?
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-muted"
        >
          São Paulo, SP · Disponível para oportunidades em tecnologia, produto e
          inovação
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex justify-center gap-4"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-accent/40 hover:text-accent"
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
