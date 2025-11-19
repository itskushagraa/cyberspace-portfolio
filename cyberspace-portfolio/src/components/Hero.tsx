"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center">
      <div className="flex-1 space-y-5">
        <motion.p
          className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-300"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 1 }}
        >
          SOFTWARE • ML • SYSTEMS
        </motion.p>

        <motion.h1
          className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="bg-linear-to-r from-cyan-400 via-sky-300 to-fuchsia-500 bg-clip-text text-transparent">
            Building engines, pipelines,
          </span>
          <br />
          and cyber-looking systems that actually run.
        </motion.h1>

        <motion.p
          className="max-w-xl text-sm text-zinc-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I work across C++, ML, and cloud: chess engines, AWS-backed GenAI
          systems, and backend infrastructure for real users. This is the
          scratchpad for everything I ship.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/projects"
            className="rounded-full bg-linear-to-r from-cyan-500 to-fuchsia-500 px-5 py-2 text-xs font-medium text-black shadow-[0_0_25px_rgba(14,165,233,0.7)] hover:brightness-110"
          >
            View projects
          </Link>
          <a
            href="/Kushagra_Sharma_Resume.pdf"
            className="rounded-full border border-zinc-700 bg-zinc-900/70 px-5 py-2 text-xs font-medium text-zinc-200 hover:border-cyan-400 hover:text-cyan-200"
          >
            Download resume
          </a>
        </motion.div>
      </div>

      <motion.div
        className="mt-8 flex flex-1 items-center justify-center md:mt-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="relative h-56 w-56 rounded-4xl border border-zinc-800 bg-linear-to-br from-zinc-900 via-zinc-950 to-black shadow-[0_0_80px_rgba(0,255,255,0.25)]">
          <div className="absolute -inset-px rounded-4xl bg-[conic-gradient(from_180deg_at_50%_50%,#22d3ee,#f97316,#e879f9,#22d3ee)] opacity-40 blur-lg" />
          <div className="relative flex h-full w-full items-center justify-center rounded-4xl border border-zinc-800 bg-black/80 backdrop-blur">
            <div className="flex flex-col items-center gap-2 text-xs text-zinc-300">
              <span className="text-[0.65rem] uppercase tracking-[0.3em] text-zinc-500">
                MODE
              </span>
              <span className="rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-cyan-300">
                BUILD
              </span>
              <span className="mt-2 text-[0.7rem] text-zinc-500">
                ML • Cloud • C++
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
