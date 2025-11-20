// src/components/ModeLifeSection.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type ModeId = "coding" | "vibing" | "sleeping";

const MODES: {
  id: ModeId;
  label: string;
  subtitle: string;
  gif: string;
}[] = [
  {
    id: "coding",
    label: "Coding",
    subtitle: "\"it worked on my machine\"",
    gif: "/gifs/coding.gif",
  },
  {
    id: "vibing",
    label: "Vibing",
    subtitle: "*insert Mia and Sebastian's Theme*",
    gif: "/gifs/vibin.gif",
  },
  {
    id: "sleeping",
    label: "Sleeping",
    subtitle: "zzz..",
    gif: "/gifs/sleeping.gif",
  },
];

export default function ModeLifeSection() {
  const [activeId, setActiveId] = useState<ModeId>("coding");
  const order: ModeId[] = ["coding", "vibing", "sleeping"];
  const active = MODES.find((m) => m.id === activeId)!;

  const handleCycle = () => {
    const idx = order.indexOf(activeId);
    const next = order[(idx + 1) % order.length];
    setActiveId(next);
  };

  return (
    <motion.section
      className="px-6 pb-28 pt-10"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center">
        {/* LEFT: copy + mode card */}
        <div className="flex-1 space-y-8">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-zinc-50 md:text-2xl">
              If I was a state machine...
            </h2>
            <p className="max-w-md text-sm text-zinc-400">
                A few core states I move between naturally—sometimes sharply, sometimes gradually—forming the full range of how I show up in the world.
            </p>
          </div>

          <ModeCard mode={active} onCycle={handleCycle} />
        </div>

        {/* RIGHT: bigger portrait GIF viewer */}
        <div className="flex-1">
          <div className="relative mx-auto max-w-sm">
            {/* soft glow */}
            <div className="pointer-events-none absolute -inset-10 rounded-[2.6rem] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.38),transparent_60%),radial-gradient(circle_at_bottom,rgba(244,63,94,0.32),transparent_60%)] opacity-70 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.2rem] border border-zinc-800 bg-black/95 p-4 shadow-[0_0_50px_rgba(0,0,0,0.95)]">
              <div className="flex flex-col items-center gap-4">
                <div className="flex h-104 w-full items-center justify-center rounded-2xl bg-black">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active.id}
                      initial={{ opacity: 0, y: 10, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.96 }}
                      transition={{ duration: 0.22 }}
                      className="flex h-full w-full items-center justify-center"
                    >
                      <Image
                        src={active.gif}
                        alt={`${active.label} mode`}
                        width={360}
                        height={416}
                        className="h-full w-auto object-contain"
                        unoptimized
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="w-full text-left">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-zinc-400">
                    {active.label} mode
                  </p>
                  <p className="mt-1 text-sm text-zinc-300">{active.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

/* ------------------------- MODE CARD ------------------------- */
function ModeCard({
  mode,
  onCycle,
}: {
  mode: (typeof MODES)[number];
  onCycle: () => void;
}) {
  const [burst, setBurst] = useState(false);

  const handleClick = () => {
    onCycle();
    setBurst(true);
  };

  return (
    <motion.div
      className="relative h-60 w-60 rounded-4xl border border-zinc-800 bg-linear-to-br from-zinc-900 via-zinc-950 to-black shadow-[0_0_80px_rgba(0,255,255,0.25)]"
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.45 }}
    >
      {/* outer glow */}
      <div className="pointer-events-none absolute -inset-px rounded-4xl bg-[conic-gradient(from_180deg_at_50%_50%,#22d3ee,#f97316,#e879f9,#22d3ee)] opacity-40 blur-lg" />

      {/* inner clickable card */}
      <motion.button
        type="button"
        onClick={handleClick}
        whileHover={{ scale: 1.03 }}
        animate={
          burst
            ? {
                scale: [1, 1.12, 0.94, 1.04, 1],
                rotateZ: [0, -3, 3, -1.5, 0],
                boxShadow: [
                  "0 0 0px rgba(34,211,238,0.0)",
                  "0 0 80px rgba(34,211,238,0.9)",
                  "0 0 40px rgba(34,211,238,0.4)",
                  "0 0 0px rgba(34,211,238,0.0)",
                ],
              }
            : {
                scale: 1,
                rotateZ: 0,
                boxShadow: "0 0 80px rgba(0,255,255,0.25)",
              }
        }
        transition={{ duration: 0.6, ease: "easeOut" }}
        onAnimationComplete={() => {
          if (burst) setBurst(false);
        }}
        className="relative flex h-full w-full items-center justify-center rounded-4xl border border-zinc-800 bg-black/80 text-xs text-zinc-300 backdrop-blur"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[0.65rem] uppercase tracking-[0.3em] text-zinc-500">
            Mode
          </span>

          <span className="rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-cyan-300">
            {mode.label.toUpperCase()}
          </span>

          <span className="mt-2 text-[0.7rem] text-zinc-400 text-center px-4">
            {mode.subtitle}
          </span>

          <span className="mt-4 text-[0.6rem] uppercase tracking-[0.3em] text-zinc-700">
            Click Me!
          </span>
        </div>
      </motion.button>
    </motion.div>
  );
}
