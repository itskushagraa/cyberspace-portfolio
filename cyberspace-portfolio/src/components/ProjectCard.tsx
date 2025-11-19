"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/lib/projects";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const content = (
    <motion.article
      className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4 shadow-[0_0_40px_rgba(15,23,42,0.7)] backdrop-blur"
      whileHover={{ y: project.caseStudy ? -4 : 0 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.16),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative space-y-3">
        <h3 className="text-sm font-semibold text-zinc-50">
          {project.name}
        </h3>
        <p className="text-xs text-zinc-300">{project.tagline}</p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-zinc-900/80 px-2 py-0.5 text-[0.65rem] uppercase tracking-[0.14em] text-zinc-400"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="pt-3 text-[0.7rem] text-cyan-300">
          {project.caseStudy ? (
            <span className="inline-flex items-center gap-1">
              Open case study <span className="text-xs">↗</span>
            </span>
          ) : (
            <span className="text-zinc-500">Case study coming soon</span>
          )}
        </div>
      </div>
    </motion.article>
  );

  return project.caseStudy ? (
    <Link href={project.caseStudy} className="block">
      {content}
    </Link>
  ) : (
    content
  );
}
