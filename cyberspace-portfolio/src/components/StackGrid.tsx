"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Languages",
    items: ["TypeScript", "Python", "C++", "Java", "SQL"],
  },
  {
    title: "Frontend",
    items: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs"],
  },
  {
    title: "ML & Data",
    items: ["PyTorch", "scikit-learn", "Pandas", "NumPy"],
  },
  {
    title: "Cloud & Infra",
    items: ["AWS Lambda", "Amazon S3", "AWS Bedrock", "Docker"],
  },
  {
    title: "Databases & Storage",
    items: ["PostgreSQL", "Supabase", "Oracle SQL"],
  },
  {
    title: "Dev workflow",
    items: ["Git / GitHub", "Testing & CI", "Code review"],
  },
];

export default function StackGrid() {
  return (
    <div className="relative">
      {/* subtle grid just for this section */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(39,39,42,0.6)_1px,transparent_1px),linear-gradient(to_bottom,rgba(39,39,42,0.6)_1px,transparent_1px)] bg-size-[28px_28px]" />
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.35,
              delay: i * 0.05,
            }}
            className="group rounded-2xl border border-zinc-800/90 bg-black/70 px-4 py-3 shadow-[0_0_24px_rgba(0,0,0,0.85)] backdrop-blur-sm"
          >
            <div className="flex items-center justify-between">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                {cat.title}
              </p>
              <span className="h-px flex-1 translate-x-2 bg-linear-to-r from-zinc-700/70 to-transparent group-hover:from-cyan-400/70" />
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {cat.items.map((item, j) => (
                <SkillPill key={item} label={item} index={i * 10 + j} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SkillPill({ label, index }: { label: string; index: number }) {
  return (
    <motion.button
      type="button"
      className="rounded-full border border-zinc-700 bg-zinc-900/80 px-3 py-1 text-[0.75rem] text-zinc-100 shadow-[0_0_12px_rgba(0,0,0,0.9)] transition-colors hover:border-cyan-400 hover:text-cyan-100"
      initial={{ opacity: 0, scale: 0.6, y: 6 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        delay: 0.02 * index,
        duration: 0.25,
      }}
      whileHover={{ scale: 1.06, y: -1 }}
      whileTap={{ scale: 0.96 }}
    >
      {label}
    </motion.button>
  );
}
