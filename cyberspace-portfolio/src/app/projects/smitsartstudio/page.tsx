"use client";

import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import Image from "next/image";
import { Palette, LayoutDashboard, MapPin, Brush } from "lucide-react";
import Link from "next/link";

export default function SmitsArtStudioPage() {
  return (
    <div className="px-6 pb-24 pt-20 md:px-10 lg:px-16 space-y-16">
      <SectionHeader
        eyebrow="Project · Art Gallery Website"
        title="SmitsArtStudio — a digital gallery that feels like a real room"
      />
      <LiveSiteCTA href="https://smitsartstudio.com"/>
    
      {/* Hero strip – big gallery card across the top */}
      <motion.section
        className="space-y-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)] items-stretch">
          {/* Wide screenshot */}
          <motion.div
            className="relative overflow-hidden rounded-[2.4rem] border border-fuschia-200/15 bg-[#070b0f] shadow-[0_0_80px_rgba(45,212,191,0.35)]"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <div className="pointer-events-none absolute -inset-10 rounded-[3rem] bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.3),transparent_55%),radial-gradient(circle_at_bottom,rgba(244,244,245,0.16),transparent_60%)] opacity-80 blur-3xl" />
            <div className="relative rounded-[2.4rem] bg-linear-to-b from-slate-950/70 via-slate-950 to-black p-px">
              <div className="relative overflow-hidden rounded-[2.35rem] bg-[#f7f3eb]">
                {/* swap this screenshot path for a real one */}
                <Image
                  src="/studio-screen.png"
                  alt="SmitsArtStudio homepage"
                  width={1400}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Summary text block */}
          <div className="flex flex-col justify-center space-y-5 text-sm leading-relaxed text-zinc-300">
            <p className="text-zinc-100 text-[0.98rem]">
              SmitsArtStudio is a Next.js art gallery site built to feel like
              walking through a calm, minimal studio — warm off-white walls,
              mint accents, and paintings staged inside interior mockups instead
              of just flat thumbnails.
            </p>
            <p>
              The site is split into a focused set of pages — home, works,
              about, locations (India & Vancouver), and contact — with a single
              scrollable landing page that highlights the four main series:
              figurative, landscapes, abstract, and prints on demand.
            </p>

            <div className="grid gap-3 text-[0.78rem] md:grid-cols-2">
              <MiniFact
                label="Role"
                value="Design, frontend architecture, asset pipeline"
              />
              <MiniFact
                label="Stack"
                value="Next.js · TypeScript · Tailwind · container queries"
              />
              <MiniFact
                label="Focus"
                value="Visual storytelling & smooth browsing"
              />
              <MiniFact
                label="Status"
                value="Frontend live, backend & CMS planned"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Three-column feature cards – different layout from Hivemind */}
      <motion.section
        className="grid gap-8 lg:grid-cols-3"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.4 }}
      >
        <FeatureCard
          icon={Palette}
          title="Gallery first, UI second"
          body="Every decision starts from the paintings: generous whitespace, muted UI chrome, and typography that stays out of the way so the colors in the pieces carry the page."
          accent="from-emerald-300/25 via-emerald-400/0 to-sky-400/35"
        />
        <FeatureCard
          icon={LayoutDashboard}
          title="Category-driven layout"
          body="Home is a vertical strip of four hero sections — Figurative, Landscape, Abstract, Prints. Each section pulls from the same artwork data model and routes to a filtered works grid."
          accent="from-sky-300/30 via-sky-400/0 to-fuchsia-400/35"
        />
        <FeatureCard
          icon={MapPin}
          title="Two cities, one studio"
          body="Location content splits between India and Vancouver. The layout uses the same component shell but swaps copy, images, and map embeds while keeping the brand consistent."
          accent="from-amber-300/30 via-amber-400/0 to-emerald-400/40"
        />
      </motion.section>

      {/* Artwork system section – more technical */}
      <motion.section
        className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)] items-start"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.45, delay: 0.03 }}
      >
        <div className="space-y-4 text-sm leading-relaxed text-zinc-300">
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
            Artwork data & file organisation
          </h2>
          <p>
            Behind the soft visuals is a rigid structure. Each piece has a
            single source of truth — title, size, price, series, and media —
            defined in TypeScript, then mapped to a folder in{" "}
            <code className="rounded bg-zinc-900/80 px-1.5 py-0.5 text-[0.72rem]">
              public/artworks/&lt;slug&gt;/
            </code>
            .
          </p>
          <p>
            Every folder can include a full painting, an interior mockup, and a
            looping texture video. The works page pulls from that manifest so
            adding a new painting is just: drop files in the right folder, add
            one object to the array.
          </p>

          <ul className="mt-2 space-y-2 text-xs text-zinc-400">
            <li>• Consistent naming keeps imports simple and type-safe.</li>
            <li>
              • Assets are heavy now (&gt;1GB) but structured for later
              compression & CDN.
            </li>
            <li>
              • Layout uses container queries so grids adapt cleanly from phone
              to 4K without special cases.
            </li>
          </ul>
        </div>

        {/* code-ish card */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 text-[0.72rem] font-mono text-zinc-100 shadow-[0_0_50px_rgba(15,23,42,0.9)]">
          <div className="mb-3 flex items-center justify-between text-[0.68rem] text-zinc-500">
            <span>lib/artworks.ts</span>
            <span className="inline-flex items-center gap-1 text-emerald-300/80">
              <Brush className="h-3 w-3" /> typed manifest
            </span>
          </div>
          <pre className="whitespace-pre-wrap leading-relaxed">
            {`export type ArtworkSeries = "figurative" | "landscape" | "abstract" | "prints";

export interface Artwork {
  slug: string;            // "mist-over-darjeeling"
  title: string;
  series: ArtworkSeries;
  size: string;            // "24\" × 18\""
  medium: string;         // "Acrylic on canvas"
  price?: string;         // optional, hides if not for sale
  year?: number;
}

export const artworks: Artwork[] = [
  {
    slug: "mist-over-darjeeling",
    title: "Mist over Darjeeling",
    series: "landscape",
    size: "24\" × 18\"",
    medium: "Acrylic on canvas",
    year: 2024,
  },
  // …
];`}
          </pre>
        </div>
      </motion.section>

      {/* Experience row – how it should feel to browse */}
      <motion.section
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, delay: 0.04 }}
      >
        <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
          Browsing experience
        </h2>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.4fr)] items-center">
          <div className="space-y-4 text-sm leading-relaxed text-zinc-300">
            <p>
              The goal was to avoid the “e-commerce grid of thumbnails”
              feeling. Instead, each section on the homepage reads like a wall
              in a gallery: one hero mockup, a short curatorial blurb, and a
              single CTA into the works page.
            </p>
            <p>
              Transitions are simple but deliberate — gentle parallax on mockups,
              hover lifts on paintings, and subtle color shifts in the beige /
              mint palette so everything feels tactile without being noisy.
            </p>
          </div>

          {/* small stacked screenshots */}
          <div className="grid gap-4 md:grid-cols-2">
            <GalleryThumb
              src="/landscape-works.png"
              label="Landscape Section"
            />
            <GalleryThumb
              src="/contact-form.png"
              label="Contact Form"
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
}

/* ---------------- helpers ---------------- */

type MiniFactProps = { label: string; value: string };

function MiniFact({ label, value }: MiniFactProps) {
  return (
    <div className="space-y-0.5">
      <p className="text-[0.7rem] uppercase tracking-[0.18em] text-zinc-500">
        {label}
      </p>
      <p className="text-[0.8rem] text-zinc-100">{value}</p>
    </div>
  );
}

type FeatureCardProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  body: string;
  accent: string; // gradient classes
};

function FeatureCard({ icon: Icon, title, body, accent }: FeatureCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/90 p-5 shadow-[0_0_40px_rgba(15,23,42,0.9)]">
      <div
        className={`pointer-events-none absolute -inset-10 bg-linear-to-br ${accent} opacity-75 blur-2xl`}
      />
      <div className="relative space-y-2">
        <div className="inline-flex items-center justify-center rounded-xl border border-zinc-800 bg-black/70 p-2">
          <Icon className="h-4 w-4 text-emerald-300" />
        </div>
        <h3 className="text-sm font-semibold text-zinc-50">{title}</h3>
        <p className="text-xs leading-relaxed text-zinc-400">{body}</p>
      </div>
    </div>
  );
}

type GalleryThumbProps = { src: string; label: string };

function GalleryThumb({ src, label }: GalleryThumbProps) {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-zinc-800 bg-zinc-950/90 shadow-[0_0_40px_rgba(15,23,42,0.8)]">
      <div className="pointer-events-none absolute -inset-8 bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.32),transparent_55%)] opacity-70 blur-2xl" />
      <div className="relative flex flex-col">
        <Image
          src={src}
          alt={label}
          width={900}
          height={700}
          className="h-40 w-full object-cover md:h-44"
        />
        <div className="border-t border-zinc-800 bg-black/80 px-4 py-3 text-[0.78rem] text-zinc-300">
          {label}
        </div>
      </div>
    </div>
  );
}

type LiveSiteCTAProps = {
  href: string;
};

function LiveSiteCTA({ href }: LiveSiteCTAProps) {
  return (
    <section className="mt-4">
      <div className="relative overflow-hidden rounded-[2.25rem] border border-emerald-400/35 bg-zinc-950/90 p-px shadow-[0_0_70px_rgba(45,212,191,0.45)]">
        {/* soft glow */}
        <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_left,rgba(45,212,191,0.5),transparent_55%),radial-gradient(circle_at_right,rgba(56,189,248,0.4),transparent_55%)] opacity-70 blur-2xl" />

        <div className="relative flex flex-col gap-4 rounded-[2.15rem] bg-linear-to-r from-slate-950 via-slate-950/95 to-black px-6 py-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-emerald-300/80">
              Live gallery
            </p>
            <p className="text-sm text-zinc-100">
              Browse the full SmitsArtStudio site with all current paintings,
              mockups, and contact details.
            </p>
          </div>

          <Link
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-emerald-300/60 bg-emerald-400/10 px-5 py-2.5 text-[0.8rem] font-medium text-emerald-100 shadow-[0_0_30px_rgba(45,212,191,0.5)] transition hover:-translate-y-px hover:bg-emerald-400/20 hover:text-emerald-50"
          >
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(45,212,191,1)]" />
            Open SmitsArtStudio
            <span className="ml-2 text-[0.75rem]">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}