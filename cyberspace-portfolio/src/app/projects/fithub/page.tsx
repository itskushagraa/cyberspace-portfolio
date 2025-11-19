"use client";

import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Dumbbell, Utensils, ClipboardList, BarChart3 } from "lucide-react";

export default function FitHubPage() {
  return (
    <div className="px-6 pb-24 pt-20 md:px-10 lg:px-16 space-y-16">
      <SectionHeader
        eyebrow="Project • FitHub"
        title="A full-stack-feeling fitness app built in Java Swing"
      />

      {/* Hero: copy + screenshot mosaic */}
      <motion.section
        className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.7fr)] items-center"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.35 }}
      >
        <div className="space-y-5 text-sm leading-relaxed text-zinc-300">
          <p className="text-zinc-100">
            FitHub is a desktop fitness companion built for a software
            development course. It started as a console app and grew into a full
            Java Swing application with a splash screen, user profiles,
            workout/meal planners, and JSON persistence under the hood.
          </p>

          <p>
            The goal was to treat it like a real product: clean flows, durable
            save/load logic, and enough structure that new features (stats,
            new plans, different users) could be plugged in without rewriting
            everything.
          </p>

          <ul className="mt-3 space-y-1 text-xs text-zinc-400">
            <li>• Java Swing UI with custom layout for each feature.</li>
            <li>• Workout planner + weekly diet planner with generated plans.</li>
            <li>• JSON-based persistence layer with full read/write coverage.</li>
            <li>• Built + tested as a term-long software development project.</li>
          </ul>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-violet-200/80">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 uppercase tracking-[0.18em]">
              <ClipboardList className="h-3.5 w-3.5" />
              Course project
            </span>

            <Link
              href="https://github.com/itskushagraa/fithub" // <-- update this
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[0.8rem] text-violet-200 hover:text-violet-100"
            >
              View source on GitHub
              <span className="text-[0.75rem]">↗</span>
            </Link>
          </div>
        </div>

        <ScreenshotMosaic />
      </motion.section>

      {/* Feature row */}
      <motion.section
        className="grid gap-6 md:grid-cols-3"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.35, delay: 0.05 }}
      >
        <FeatureCard
          icon={Dumbbell}
          title="Workout planner"
          body="Create or generate weekly workout splits, track exercises per day, and save your routine so it’s always there when you reopen the app."
        />
        <FeatureCard
          icon={Utensils}
          title="Meal planner"
          body="A 7×3 grid for breakfast, lunch, dinner. Click into any day to swap meals, view macros, and experiment with different weekly layouts."
        />
        <FeatureCard
          icon={BarChart3}
          title="Progress & stats"
          body="Behind the scenes, FitHub tracks volume and meal changes over time so you can see how your routine evolves instead of losing changes in memory."
        />
      </motion.section>

      {/* Implementation details */}
      <motion.section
        className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.3fr)] items-start"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.35, delay: 0.05 }}
      >
        <div className="space-y-4 text-sm leading-relaxed text-zinc-300">
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300/90">
            Under the hood
          </h2>
          <p>
            Every core model in FitHub implements a{" "}
            <code className="rounded bg-zinc-900 px-1.5 py-0.5 text-[0.72rem] text-violet-200">
              Writable
            </code>{" "}
            interface that converts the object into JSON. The UI talks to this
            layer instead of juggling file logic directly, which keeps the Swing
            code focused on layout and interaction.
          </p>

          <p>
            The result is a project that feels like a small product: a proper
            entry point, a splash-screen flow, a main hub, and a persistence
            layer that survives refactors and new features.
          </p>

          <div className="grid gap-3 text-xs text-zinc-300 sm:grid-cols-2">
            <DetailBullet
              label="Persistence"
              body="All user data (profile, workouts, diet plans) is stored in JSON and rehydrated on launch."
            />
            <DetailBullet
              label="Test coverage"
              body="Model + persistence packages are fully unit-tested to avoid silent data loss."
            />
            <DetailBullet
              label="Flow design"
              body="Splash → profile selection → main hub → specialized planners, then save on exit."
            />
            <DetailBullet
              label="Extensibility"
              body="New stats or planners can be added by extending model classes without rewiring the UI."
            />
          </div>
        </div>

        <StatsStrip />
      </motion.section>
    </div>
  );
}

/* ---------- Screenshot section: full images + hover descriptions ---------- */

function ScreenshotMosaic() {
  return (
    <div className="relative">
      {/* ambient purple glow */}
      <div className="absolute -inset-10 rounded-[2.8rem] bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.7),transparent_60%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.45),transparent_55%)] opacity-70 blur-2xl" />

      <div className="relative rounded-[2.4rem] border border-violet-500/40 bg-linear-to-b from-slate-950 via-slate-950/95 to-black p-6 shadow-[0_0_60px_rgba(139,92,246,0.7)] space-y-5">

        {/* Four main UI views – each has its own space + hover description */}
        <div className="grid gap-4 md:grid-cols-2">
          <ScreenshotCard
            src="/workout-planner.png"
            alt="FitHub workout planner UI"
            title="Workout planner"
            description="Weekly split view with days across the top and per-day exercises underneath. Built for quick scanning rather than clicking through dialogs."
          />

          <ScreenshotCard
            src="/meal-plan.png"
            alt="FitHub meal planner UI"
            title="Meal planner"
            description="7×3 grid for breakfast, lunch, dinner. Each cell opens a details view where meals can be swapped and macros inspected."
          />

          <ScreenshotCard
            src="/workout-split.png"
            alt="FitHub workout statistics"
            title="Workout stats"
            description="Volume and frequency over the week: see which days are overloaded and how many sets each muscle group is getting."
          />

          <ScreenshotCard
            src="/diet-tracker.png"
            alt="FitHub diet statistics"
            title="Diet stats"
            description="Macro + calorie breakdown across the week so meal changes show up as trends instead of one-off numbers."
          />
        </div>
      </div>
    </div>
  );
}

type ScreenshotCardProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

function ScreenshotCard({ src, alt, title, description }: ScreenshotCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-violet-400/40 bg-zinc-950/80 shadow-[0_0_30px_rgba(139,92,246,0.6)]">
      {/* Image – fully visible, scaled down if needed, never cropped */}
      <div className="relative flex items-center justify-center px-3 pt-3 pb-10">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={800}
          className="h-auto w-full max-h-[260px] object-contain"
        />
      </div>

      {/* label row */}
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3 text-[0.72rem] uppercase tracking-[0.18em] text-violet-200/85 bg-linear-to-t from-black/80 via-black/60 to-transparent">
        <span>{title}</span>
        <span className="text-[0.65rem] text-violet-300/80 group-hover:text-violet-100 transition-colors">
          hover for details
        </span>
      </div>

      {/* hover description overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-end bg-black/0 opacity-0 transition-opacity duration-300 group-hover:bg-black/60 group-hover:opacity-100">
        <div className="w-full px-4 pb-4 text-[0.78rem] leading-relaxed text-violet-50">
          <p className="mb-1 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-violet-200">
            {title}
          </p>
          <p className="text-xs text-violet-100/95">{description}</p>
        </div>
      </div>
    </div>
  );
}

/* ---------- Feature + detail cards ---------- */

type FeatureCardProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  body: string;
};

function FeatureCard({ icon: Icon, title, body }: FeatureCardProps) {
  return (
    <div className="relative overflow-hidden rounded-[1.9rem] border border-violet-500/35 bg-linear-to-b from-slate-950 via-slate-950/95 to-black p-5 shadow-[0_0_40px_rgba(129,140,248,0.6)]">
      <div className="pointer-events-none absolute -inset-12 bg-[radial-gradient(circle_at_top_left,rgba(129,140,248,0.5),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.4),transparent_55%)] opacity-70 blur-2xl" />
      <div className="relative space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/15 px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-violet-100">
          <Icon className="h-3.5 w-3.5" />
          {title}
        </div>
        <p className="text-xs leading-relaxed text-zinc-200">{body}</p>
      </div>
    </div>
  );
}

type DetailBulletProps = {
  label: string;
  body: string;
};

function DetailBullet({ label, body }: DetailBulletProps) {
  return (
    <div className="space-y-1 rounded-2xl border border-violet-500/20 bg-slate-950/70 p-3">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-violet-300/90">
        {label}
      </p>
      <p className="text-[0.78rem] text-zinc-300">{body}</p>
    </div>
  );
}

/* ---------- Stats strip (used in implementation section) ---------- */

function StatsStrip() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 rounded-[2.6rem] bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.6),transparent_55%),radial-gradient(circle_at_bottom,rgba(236,72,153,0.55),transparent_55%)] opacity-70 blur-2xl" />
      <div className="relative space-y-4 rounded-[2.2rem] border border-violet-500/40 bg-linear-to-b from-slate-950 via-slate-950/95 to-black p-6 shadow-[0_0_50px_rgba(139,92,246,0.8)]">
        <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-200/90">
          How the stats work
        </h3>
        <p className="text-xs text-zinc-200">
          Stats aren&apos;t a separate database — they&apos;re computed from the
          same JSON that powers workout and meal plans. That keeps the data
          model simple while still letting the UI show progress views like
          &quot;weekly volume&quot; or &quot;meals changed this week&quot;.
        </p>
        <div className="grid gap-3 text-[0.75rem] text-zinc-200 sm:grid-cols-2">
          <div className="rounded-xl border border-violet-500/30 bg-slate-950/80 p-3">
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-violet-300/90">
              Workout metrics
            </p>
            <p className="mt-1">
              Aggregate number of sessions, days trained per week, and total
              planned sets per muscle group.
            </p>
          </div>
          <div className="rounded-xl border border-fuchsia-500/30 bg-slate-950/80 p-3">
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-fuchsia-300/90">
              Meal planner metrics
            </p>
            <p className="mt-1">
              Track how often you change meals, which days tend to drift from
              plan, and which weeks are most consistent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
