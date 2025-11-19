// src/components/KeplerNeuralViz.tsx
"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: "18%", y: "26%", delay: 0.0 },
  { x: "32%", y: "12%", delay: 0.15 },
  { x: "55%", y: "18%", delay: 0.3 },
  { x: "72%", y: "32%", delay: 0.45 },
  { x: "68%", y: "58%", delay: 0.6 },
  { x: "48%", y: "70%", delay: 0.75 },
  { x: "26%", y: "62%", delay: 0.9 },
];

export default function KeplerNeuralViz() {
  return (
    <div className="relative mx-auto h-72 w-full max-w-sm">
      {/* outer glow ring */}
      <motion.div
        className="absolute inset-0 rounded-[2.5rem] bg-[conic-gradient(from_180deg_at_50%_50%,#22d3ee,#f97316,#e879f9,#22d3ee)] opacity-60 blur-xl"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      />

      {/* inner card */}
      <div className="relative flex h-full w-full items-center justify-center rounded-[2.5rem] border border-zinc-800 bg-black/80 p-4 shadow-[0_0_40px_rgba(34,211,238,0.3)] backdrop-blur">
        {/* subtle background grid */}
        <div className="pointer-events-none absolute inset-[10%] rounded-3xl border border-zinc-800/60 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_55%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.16),transparent_55%)]" />

        {/* spinning orbit ring */}
        <motion.div
          className="pointer-events-none absolute inset-[16%] rounded-full border border-cyan-400/50"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
        />

        {/* second orbit */}
        <motion.div
          className="pointer-events-none absolute inset-[28%] rounded-full border border-fuchsia-400/45"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
        />

        {/* neural graph nodes */}
        {nodes.map((node, i) => (
          <motion.div
            key={i}
            className="pointer-events-none absolute h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]"
            style={{ left: node.x, top: node.y }}
            initial={{ scale: 0.8, opacity: 0.7 }}
            animate={{ scale: 1.1, opacity: 1 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.6,
              delay: node.delay,
            }}
          />
        ))}

        {/* central "brain" */}
        <motion.div
          className="relative z-10 flex h-24 w-24 items-center justify-center rounded-3xl border border-cyan-400/70 bg-zinc-950/90 shadow-[0_0_35px_rgba(56,189,248,0.8)]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -inset-2 rounded-3xl bg-[conic-gradient(from_120deg_at_50%_50%,rgba(34,211,238,0.3),rgba(168,85,247,0.0),rgba(236,72,153,0.35))] blur-lg" />
          <div className="relative flex flex-col items-center gap-1 text-[0.65rem] text-zinc-200">
            <span className="uppercase tracking-[0.25em] text-zinc-500">
              KEPLER
            </span>
            <span className="rounded-full bg-zinc-900/90 px-3 py-1 text-[0.6rem] uppercase tracking-[0.22em] text-cyan-300">
              SEARCH NET
            </span>
            <span className="text-[0.6rem] text-zinc-500">
              α–β · TT · Eval
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
