"use client";

import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Cog,
  Ruler,
  Weight,
  Layers,
  Cpu,
  Settings,
  Boxes,
  Radio,
} from "lucide-react";

export default function FourWardThinkerPage() {
  return (
    <div className="px-6 pb-28 pt-20 md:px-10 lg:px-16 space-y-20">
      
      <SectionHeader
        eyebrow="Project · UBC Design League Designathon"
        title="The 4Ward Thinker — a modular robotic meal-serving system"
      />

      {/* --- HERO ROW: copy + hero render --- */}
      <HeroRow />

      {/* --- FEATURE GRID --- */}
      <EngineeringFeatures />

      {/* --- MECHANICAL INSIGHT SECTION --- */}
      <MechanicalBreakdown />

      {/* --- TAKEAWAYS / ROLE SECTION --- */}
      <FinalTakeaways />
    </div>
  );
}

/* ----------------------------------------------------------- */
/* ------------------------- HERO ROW ------------------------- */
/* ----------------------------------------------------------- */

function HeroRow() {
  return (
    <motion.section
      className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)] items-center"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45 }}
    >
      {/* LEFT — overview copy */}
      <div className="space-y-6 text-sm leading-relaxed text-zinc-300">
        <p className="text-zinc-100 text-base md:text-[1rem]">
          The 4Ward Thinker was designed during a 48-hour engineering sprint:
          an affordable, mass-manufacturable meal-serving robot capable of
          carrying a load up to <span className="text-cyan-300 font-semibold">
          60kg
          </span>{" "} (backed by stress analysis testing)
          while remaining modular, maintainable, and feasible for real-world
          deployment in cafeterias, senior homes, and hospitals.
        </p>

        <p>
          Our goal was simple: build a robot that’s strong enough to handle
          real loads, safe enough to move around people, and cheap enough
          that scaling to dozens of units is realistic — all while completing
          the entire concept, CAD, stress analysis, and electronics layout
          in under two days.
        </p>

        <div className="flex flex-wrap gap-3 pt-1 text-[0.7rem] uppercase tracking-[0.18em]">
          <TechTag icon={Cog} label="Fusion360 CAD" />
          <TechTag icon={Weight} label="Stress Analysis" />
          <TechTag icon={Cpu} label="Circuit Design" />
          <TechTag icon={Radio} label="Ultrasonic Sensors" />
          <TechTag icon={Layers} label="Modular Build" />
          <Link
              href="https://github.com/itskushagraa/Autonomous-Meal-Serving-System"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-cyan-200 hover:text-cyan-100"
            > 
              <span className="text-[0.6rem] underline">View source on GitHub</span>
              <span className="text-[0.75rem]">↗</span>
            </Link>
        </div>
      </div>

      {/* RIGHT — hero render / neon engineering card */}
      <motion.div
        className="relative rounded-[2.6rem] border border-cyan-500/30 bg-black/90 p-0.5 shadow-[0_0_70px_rgba(56,189,248,0.45)] overflow-hidden"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        {/* ambient glow */}
        <div className="pointer-events-none absolute -inset-10 rounded-[3rem] bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.4),transparent_55%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.35),transparent_55%)] opacity-70 blur-2xl" />

        <div className="relative rounded-[2.4rem] bg-linear-to-b from-slate-950 via-black to-black p-6 space-y-4">
        {/* Two-portrait grid */}
        <div className="grid grid-cols-2 gap-4">
            <Image
            src="/4ward/final-model.png"
            width={800}
            height={1200}
            alt="4Ward Thinker CAD render 1"
            className="w-full h-full rounded-xl object-fill shadow-[0_0_40px_rgba(56,189,248,0.4)]"
            />
            <Image
            src="/4ward/orthographic-projection.png"
            width={800}
            height={1200}
            alt="4Ward Thinker CAD render 2"
            className="w-full h-auto rounded-xl object-contain shadow-[0_0_40px_rgba(56,189,248,0.4)]"
            />
        </div>

    <p className="text-xs text-zinc-400 tracking-wide text-center">
        Primary CAD assembly — tray structure, outer shell, and base frame
    </p>
    </div>
      </motion.div>
    </motion.section>
  );
}

function TechTag({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 text-cyan-200">
      <Icon className="h-3.5 w-3.5" />
      {label}
    </span>
  );
}

/* ----------------------------------------------------------- */
/* --------------------- ENGINEERING FEATURES ----------------- */
/* ----------------------------------------------------------- */

function EngineeringFeatures() {
  const features = [
    {
      icon: Boxes,
      title: "Modular chassis",
      body: "Designed around detachable side panels, independent enclosures, and standardized mounting points for sensors and batteries.",
    },
    {
      icon: Ruler,
      title: "Mass-manufacturable trays",
      body: "Minimum tray footprint of 30cm×40cm, with parametric sizing for different dish sets and kitchen standards.",
    },
    {
      icon: Weight,
      title: "Load capacity: 60 dishes",
      body: "Stress-tested to withstand up to 15kg per tray × 4 trays using Fusion360 simulation tools.",
    },
    {
      icon: Settings,
      title: "Lid-locking mechanism",
      body: "Sliding lid rails on each tray edge keep dishes from slipping during motion or sudden stops.",
    },
    {
      icon: Radio,
      title: "Collision detection",
      body: "Six ultrasonic sensors validate safe forward motion, turning radius, and obstacle thresholds.",
    },
    {
      icon: Cpu,
      title: "Electronics enclosure",
      body: "Dedicated, ventilated housing for motor drivers, battery pack, and cable routing.",
    },
  ];

  return (
    <motion.section
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.4 }}
    >
      {features.map((f, i) => (
        <FeatureCard key={i} icon={f.icon} title={f.title} body={f.body} />
      ))}
    </motion.section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  body,
}: {
  icon: any;
  title: string;
  body: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-4xl border border-cyan-500/25 bg-black/80 p-5 shadow-[0_0_35px_rgba(56,189,248,0.4)]">
      <div className="pointer-events-none absolute -inset-14 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.36),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.28),transparent_55%)] opacity-70 blur-2xl" />

      <div className="relative space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-cyan-100">
          <Icon className="h-3.5 w-3.5" />
          {title}
        </div>
        <p className="text-xs leading-relaxed text-zinc-300">{body}</p>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------- */
/* --------------------- MECHANICAL INSIGHTS ------------------ */
/* ----------------------------------------------------------- */

function MechanicalBreakdown() {
  return (
    <motion.section
      className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1.3fr)] items-start"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
    >
      <div className="space-y-5 text-sm leading-relaxed text-zinc-300">
        <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
          Mechanical Design Notes
        </h2>

        <p>
          The assembly weighs <span className="text-cyan-300">32.67kg</span>,
          balancing stability with portability. PLA was chosen as a
          low-carbon-footprint material that still offered the stiffness
          required for our short development timeline.
        </p>

        <p>
          Tray geometry, lid thickness, bending stress, and expected fatigue
          regions were simulated in Fusion360. This ensured that the tray
          arms wouldn’t flex under full load or during acceleration.
        </p>

        <ul className="mt-2 list-disc space-y-2 pl-5 text-xs text-zinc-400">
          <li>Finite-element simulation for tray bending and torsion.</li>
          <li>Motor enclosure with isolated vibration paths.</li>
          <li>Cable routing channels for fast assembly and maintenance.</li>
          <li>Battery compartment with passive cooling gaps.</li>
          <li>Trays designed for easy-to-replace lid mechanisms.</li>
        </ul>
      </div>

      <div className="relative rounded-[2.4rem] border border-fuchsia-500/30 bg-black/85 p-6 shadow-[0_0_60px_rgba(236,72,153,0.45)]">
        {/* ambient glow */}
        <div className="absolute -inset-6 rounded-[2.8rem] bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.5),transparent_55%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.35),transparent_60%)] opacity-70 blur-2xl" />

        <Image
          src="/4ward/exploded-view.png"
          alt="Exploded view"
          width={1200}
          height={900}
          className="relative w-full h-auto object-contain rounded-2xl shadow-[0_0_40px_rgba(236,72,153,0.5)]"
        />

        <p className="mt-3 text-xs text-zinc-400 text-center">
          Exploded view — structural rails, battery compartment, and tray arm assemblies
        </p>
      </div>
    </motion.section>
  );
}

/* ----------------------------------------------------------- */
/* ----------------------- FINAL TAKEAWAYS -------------------- */
/* ----------------------------------------------------------- */

function FinalTakeaways() {
  return (
    <motion.section
      className="grid gap-6 lg:grid-cols-3"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
    >
      <TakeawayCard
        title="Rapid engineering"
        body="Going from concept → CAD → simulation → electronics in under 48 hours was the real challenge — not just the robot itself."
      />
      <TakeawayCard
        title="Design for manufacturing"
        body="Every part was chosen with real costs and tooling in mind, not just appearance. Scaling to dozens of units had to be realistic."
      />
      <TakeawayCard
        title="Cross-disciplinary workflow"
        body="I handled CAD modeling, stress analysis, and electronics layout — ensuring mechanics, sensors, and circuits fit a unified design."
      />
    </motion.section>
  );
}

function TakeawayCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5 shadow-[0_0_40px_rgba(15,23,42,0.9)]">
      <h3 className="text-sm font-semibold text-zinc-50">{title}</h3>
      <p className="mt-2 text-xs text-zinc-400">{body}</p>
    </div>
  );
}
