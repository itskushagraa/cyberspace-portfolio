"use client";

import SectionHeader from "@/components/SectionHeader";
import ERDiagram from "@/components/StrayCareERD";
import { motion } from "framer-motion";
import {
  PawPrint,
  MapPin,
  Users,
  Syringe,
  LineChart,
  Database,
  ShieldCheck,
  Globe2,
  ClipboardList,
} from "lucide-react";

export default function StrayCarePage() {
  return (
    <div className="px-6 pb-28 pt-20 md:px-10 lg:px-16 space-y-20">
      <SectionHeader
        eyebrow="Project · CPSC 304"
        title="StrayCare — database-first platform for stray animal care"
      />

      {/* Hero: narrative + glowing plus-code map */}
      <HeroSection />

      {/* Core feature grid */}
      <CoreFeatureGrid />

      {/* Data model + ER diagram placeholder */}
      <DataModelSection />

      {/* Backend architecture + takeaways */}
      <ArchitectureAndTakeaways />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*                               HERO                                 */
/* ------------------------------------------------------------------ */

function HeroSection() {
  return (
    <motion.section
      className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1.3fr)] items-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45 }}
    >
      {/* Copy */}
      <div className="space-y-6 text-sm leading-relaxed text-zinc-300">
        <p className="text-zinc-100 text-base md:text-[0.98rem]">
          StrayCare is a community-driven system that treats stray animal care
          like a proper data problem. Every feeding event, vaccination, and
          volunteer action is logged in an Oracle-backed schema so that no
          animal quietly drops off the map.
        </p>

        <p>
          The app models animals, locations, volunteers, communities, feeding
          events, and vaccinations in a single relational graph. Volunteers can
          see which animals were fed, when they were last vaccinated, and which
          communities need more help – all grounded in real SQL instead of
          spreadsheets.
        </p>

        <div className="flex flex-wrap gap-3 pt-1 text-[0.7rem] uppercase tracking-[0.18em]">
          <TechPill icon={Database} label="Oracle SQL" />
          <TechPill icon={Users} label="Volunteer network" />
          <TechPill icon={MapPin} label="Plus-code locations" />
          <TechPill icon={PawPrint} label="Animal profiles" />
          <TechPill icon={LineChart} label="Community analytics" />
          
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border text-amber-300/80 bg-violet-500/10 px-3 py-1 uppercase tracking-[0.18em]">
              <ClipboardList className="h-3.5 w-3.5" />
              Course project
          </span>
      </div>

      {/* Visual: plus-code geo grid */}
      <GeoGridPanel />
    </motion.section>
  );
}

function TechPill({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-rose-500/40 bg-rose-500/10 px-3 py-1 text-[0.7rem] text-rose-100">
      <Icon className="h-3.5 w-3.5" />
      {label}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*                        PLUS CODE GEO GRID                          */
/* ------------------------------------------------------------------ */

const geoNodes = [
  { x: "12%", y: "28%", type: "animal" },
  { x: "32%", y: "18%", type: "volunteer" },
  { x: "52%", y: "30%", type: "animal" },
  { x: "68%", y: "22%", type: "animal" },
  { x: "76%", y: "42%", type: "volunteer" },
  { x: "60%", y: "60%", type: "animal" },
  { x: "40%", y: "68%", type: "volunteer" },
  { x: "22%", y: "56%", type: "animal" },
];

function GeoGridPanel() {
  return (
    <motion.div
      className="relative rounded-[2.6rem] border border-rose-500/40 bg-black/90 p-0.5 shadow-[0_0_80px_rgba(248,113,113,0.55)] overflow-hidden"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, delay: 0.05 }}
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -inset-10 rounded-[3rem] bg-[radial-gradient(circle_at_top,rgba(248,113,113,0.45),transparent_55%),radial-gradient(circle_at_bottom,rgba(251,191,36,0.4),transparent_60%)] opacity-80 blur-3xl" />

      <div className="relative rounded-[2.4rem] bg-linear-to-b from-zinc-950 via-black to-black p-6">
        {/* subtle grid */}
        <div className="pointer-events-none absolute inset-[10%] rounded-3xl border border-rose-500/25 bg-[radial-gradient(circle_at_top,rgba(248,113,113,0.18),transparent_55%),radial-gradient(circle_at_bottom,rgba(251,191,36,0.16),transparent_55%)]">
          <div className="absolute inset-[12%] bg-[linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-size-[22px_22px]" />
        </div>

        {/* plus-code label strip */}
        <div className="relative z-10 flex items-center justify-between text-[0.7rem] text-zinc-400">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-500/50 bg-black/70 px-3 py-1 font-mono text-[0.68rem] text-rose-100">
            <Globe2 className="h-3.5 w-3.5" />
            8V7X+9F · 8V7X+9G · 8V7X+9H
          </span>
          <span className="hidden md:inline text-[0.65rem] uppercase tracking-[0.2em] text-amber-300/80">
            plus-code grid · neighborhoods
          </span>
        </div>

        {/* nodes */}
        <div className="relative mt-6 h-60 w-full overflow-hidden rounded-3xl">
          {geoNodes.map((node, i) => (
            <motion.div
              key={i}
              className={`absolute h-3 w-3 rounded-full ${
                node.type === "animal"
                  ? "bg-amber-300 shadow-[0_0_18px_rgba(252,211,77,0.9)]"
                  : "bg-rose-400 shadow-[0_0_18px_rgba(248,113,113,0.9)]"
              }`}
              style={{ left: node.x, top: node.y }}
              initial={{ scale: 0.7, opacity: 0.7 }}
              animate={{ scale: 1.15, opacity: 1 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: node.type === "animal" ? 1.6 : 2.1,
                delay: i * 0.15,
              }}
            />
          ))}

          {/* roaming link lines (static for now) */}
          <div className="pointer-events-none absolute inset-0">
            <svg
              className="h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polyline
                points="10,30 30,20 50,30 70,22 82,42 60,60 40,70 22,58 10,30"
                className="stroke-rose-400/40"
                strokeWidth="0.4"
                fill="none"
              />
            </svg>
          </div>
        </div>

        <p className="mt-4 text-[0.72rem] text-zinc-400">
          Each node represents a stray animal or active volunteer. StrayCare
          maps animals by Plus Code so feeding, vaccination, and community
          activity are tied to real neighborhoods instead of vague labels.
        </p>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*                         CORE FEATURE GRID                          */
/* ------------------------------------------------------------------ */

function CoreFeatureGrid() {
  const features = [
    {
      icon: PawPrint,
      title: "Animal profiles",
      body: "Dogs and cats with detailed attributes: sex, age, traits, training, and location, all linked to feeding and vaccination history.",
    },
    {
      icon: Users,
      title: "Volunteer communities",
      body: "Volunteers grouped into geographic communities with role-based permissions so people only manage animals in their area.",
    },
    {
      icon: MapPin,
      title: "Location-aware care",
      body: "Every animal and volunteer is anchored to a Plus Code location, enabling precise filtering by neighborhood or cluster.",
    },
    {
      icon: Syringe,
      title: "Vaccination tracking",
      body: "Full vaccination records with vaccine type, dosage, date, and vet. Under-vaccinated animals can be surfaced quickly.",
    },
    {
      icon: LineChart,
      title: "Community analytics",
      body: "Feeding frequency, volunteer activity, and vaccination coverage are queryable through Oracle views and aggregation queries.",
    },
    {
      icon: ShieldCheck,
      title: "Access control",
      body: "Session-backed auth and role checks so only authorized volunteers can edit data for their assigned communities.",
    },
  ];

  return (
    <motion.section
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
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
    <div className="relative overflow-hidden rounded-[1.9rem] border border-rose-500/35 bg-linear-to-b from-zinc-950 via-zinc-950/95 to-black p-5 shadow-[0_0_40px_rgba(127,29,29,0.7)]">
      <div className="pointer-events-none absolute -inset-14 bg-[radial-gradient(circle_at_top_left,rgba(248,113,113,0.42),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.32),transparent_55%)] opacity-80 blur-3xl" />
      <div className="relative space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-rose-500/15 px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-rose-100">
          <Icon className="h-3.5 w-3.5" />
          {title}
        </div>
        <p className="text-xs leading-relaxed text-zinc-200">{body}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*                       DATA MODEL + ER PLACEHOLDER                  */
/* ------------------------------------------------------------------ */

function DataModelSection() {
  return (
    <motion.section
      className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1.4fr)] items-start"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
    >
      {/* Left: explanation */}
      <div className="space-y-5 text-sm leading-relaxed text-zinc-300">
        <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
          Database-first design
        </h2>

        <p>
          StrayCare was built around the Oracle schema first: strong entities
          for animals, volunteers, communities, vets, and locations, plus
          relationship tables for feeding and vaccination events. The UI simply
          surfaces what the database already models precisely.
        </p>

        <p>
          The schema uses Plus Codes for location keys, separates animal
          attributes from community mappings, and stores vaccination events as
          their own records so they can be analyzed independently from feeding
          history.
        </p>

        <ul className="mt-2 list-disc space-y-2 pl-5 text-xs text-zinc-400">
          <li>Normalized tables for animals, volunteers, communities, vets.</li>
          <li>Bridge tables for volunteer–community and animal–location links.</li>
          <li>Separate vaccination and feeding event tables with timestamps.</li>
          <li>Views for “last fed”, “vaccination gaps”, and volunteer activity.</li>
        </ul>
      </div>

      {/* Right: ER diagram placeholder */}
      <ERDiagramPlaceholder />
    </motion.section>
  );
}

function ERDiagramPlaceholder() {
  return (
    <div className="relative rounded-[2.6rem] border border-rose-500/40 bg-black/90 p-6 shadow-[0_0_70px_rgba(248,113,113,0.6)]">
    {/* ambient glow */}
      <div className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle_at_top,rgba(248,113,113,0.5),transparent_55%),radial-gradient(circle_at_bottom,rgba(251,191,36,0.45),transparent_60%)] opacity-80 blur-3xl" />

      <div className="relative flex h-72 w-full items-center justify-center rounded-[2.1rem] border border-dashed border-rose-500/40 bg-zinc-950/85">
        <ERDiagram />
      </div>

      <p className="mt-3 text-[0.72rem] text-zinc-500">
        StrayCare ER Diagram (Abstract Version)
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*                     ARCHITECTURE + TAKEAWAYS                       */
/* ------------------------------------------------------------------ */

function ArchitectureAndTakeaways() {
  return (
    <motion.section
      className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1.4fr)] items-start"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
    >
      {/* Architecture card */}
      <div className="rounded-[2.2rem] border border-zinc-800 bg-zinc-950/80 p-5 shadow-[0_0_40px_rgba(15,23,42,0.9)] space-y-4 text-xs text-zinc-300">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-zinc-400">
          Backend architecture
        </p>

        <ul className="space-y-2">
          <li>
            <span className="font-semibold text-zinc-100">Express API:</span>{" "}
            layered into controller + service modules for clean separation
            between HTTP and database logic.
          </li>
          <li>
            <span className="font-semibold text-zinc-100">Oracle DB:</span>{" "}
            SQL-backed operations with prepared statements and views for
            analytics.
          </li>
          <li>
            <span className="font-semibold text-zinc-100">Session auth:</span>{" "}
            cookie-backed sessions with server-side checks before any
            mutation.
          </li>
          <li>
            <span className="font-semibold text-zinc-100">Static frontend:</span>{" "}
            vanilla JS, HTML, and CSS consuming the Express endpoints directly.
          </li>
        </ul>

        <div className="mt-3 rounded-2xl border border-rose-500/40 bg-rose-500/5 p-3 font-mono text-[0.7rem] text-rose-100">
          <p>// High-level flow</p>
          <p>Volunteer → browser form → Express route → service layer →</p>
          <p>Oracle query → commit → updated animal / feeding / vaccine view.</p>
        </div>
      </div>

      {/* Takeaways */}
      <div className="grid gap-4 text-xs text-zinc-300">
        <TakeawayCard
          title="Designing around data"
          body="The UI exists to expose the schema, not the other way around. Most features started as SQL queries and only then became screens."
        />
        <TakeawayCard
          title="Real-world constraints"
          body="Oracle, not Postgres or SQLite, drove decisions: explicit schemas, verbose SQL, and attention to indexing and joins."
        />
        <TakeawayCard
          title="Community impact"
          body="The system is built so communities can reason about their stray populations with actual numbers instead of intuition."
        />
      </div>
    </motion.section>
  );
}

function TakeawayCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/85 p-4 shadow-[0_0_32px_rgba(15,23,42,0.85)]">
      <h3 className="text-sm font-semibold text-zinc-50">{title}</h3>
      <p className="mt-2 text-xs text-zinc-400">{body}</p>
    </div>
  );
}
