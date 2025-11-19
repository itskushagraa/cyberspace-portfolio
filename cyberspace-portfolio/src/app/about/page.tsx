// src/app/about/page.tsx
"use client";

import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import Image from "next/image";
import { Music2, Puzzle, Gamepad2, Code2 } from "lucide-react";
import { CubeLoop } from "@/components/about/CubeLoop";

export default function AboutPage() {
  return (
    <div className="px-6 pb-24 pt-20 md:px-10 lg:px-16 space-y-16">
      <SectionHeader
        eyebrow="About"
        title="Code, music, puzzles, and pixels"
      />

      {/* Section 1: Music + intro */}
      <motion.section
        className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)] items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4 }}
      >
        <div className="space-y-5 text-sm leading-relaxed text-zinc-300">
          <p className="text-zinc-100">
            I&apos;m Kushagra. I write code, play a lot of music, get stuck on
            puzzles, and disappear into story-driven games. The same brain that
            spends hours on a riff or a cube algorithm shows up in how I build
            systems and projects.
          </p>

          <section className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
              Piano & guitar
            </h2>
            <p>
              I split time between piano and guitar — learning songs by ear,
              building arrangements that are a bit too big for my room, and
              messing with chords until something sticks. Music is the side of
              my life where nothing has to ship; it just has to feel right.
            </p>
          </section>

          <div className="mt-4 grid gap-3 text-[0.8rem] text-zinc-300 sm:grid-cols-2">
            <MiniTag icon={Music2} label="Arranging" />
            <MiniTag icon={Code2} label="Systems brain" />
          </div>
        </div>

        <KeyboardVisual />
      </motion.section>

      {/* Section 2: Cubing + puzzles */}
      <motion.section
        className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,2fr)] items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, delay: 0.05 }}
      >
        <CubeLoop />

        <div className="space-y-5 text-sm leading-relaxed text-zinc-300">
          <section className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
              Cubes & puzzles
            </h2>
            <p>
              Speedcubing and pattern-heavy puzzles are how I reset my brain:
              finite states, crisp algorithms, instant feedback. It&apos;s the
              same mindset I bring to debugging a gnarly bug or tuning a search
              routine in my chess engine.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
              How this leaks into code
            </h2>
            <p>
              I like projects where you can trace everything: input → logic →
              output. Engines like Kepler, traffic simulations, or cloud
              backends like Hivemind/LinkedOut all feel like bigger, noisier
              puzzles with more interesting constraints.
            </p>
          </section>

          <div className="mt-1 grid gap-3 text-[0.8rem] text-zinc-300 sm:grid-cols-2">
            <MiniTag icon={Puzzle} label="Algorithms" />
            <MiniTag icon={Code2} label="Engines & infra" />
          </div>
        </div>
      </motion.section>

      {/* Section 3: Games + Firefly easter egg */}
      <motion.section
        className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)] items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, delay: 0.05 }}
      >
        <div className="space-y-5 text-sm leading-relaxed text-zinc-300">
          <section className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
              Games & atmosphere
            </h2>
            <p>
              I gravitate to games with heavy atmosphere and strong writing —
              slow walks, quiet scenes, and worlds that feel lived in. I think
              about pacing and tension a lot when I design interfaces and flows:
              not just what a system does, but how it feels to move through it.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
              Offline balance
            </h2>
            <p>
              When I&apos;m not coding, I&apos;m usually at a keyboard, with a
              controller, or turning a cube. The portfolio is just the “ship it”
              side of things — the rest happens off-screen.
            </p>
          </section>

          <div className="mt-1 grid gap-3 text-[0.8rem] text-zinc-300 sm:grid-cols-2">
            <MiniTag icon={Gamepad2} label="Story-driven games" />
            <MiniTag icon={Music2} label="Long piano sessions" />
          </div>
        </div>

        <FireflyOrb />
        <SpotifySection />
      </motion.section>
    </div>
  );
}

/* ---------- small chips for tags ---------- */

type MiniTagProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
};

function MiniTag({ icon: Icon, label }: MiniTagProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950/80 px-3 py-1 text-[0.7rem] uppercase tracking-[0.16em] text-zinc-300">
      <Icon className="h-3.5 w-3.5 text-cyan-300" />
      <span>{label}</span>
    </div>
  );
}

/* ---------- Keyboard visual (music) ---------- */

function KeyboardVisual() {
  const whiteKeyCount = 7;
  const blackKeyPositions = ["10.5%", "24.5%", "39%", "67.5%", "81.5%"]; // rough spacing

  return (
    <div className="relative">
      {/* outer glow */}
      <div className="absolute -inset-6 rounded-[2.5rem] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(34,211,238,0.45),rgba(168,85,247,0.0),rgba(236,72,153,0.4),rgba(34,211,238,0.45))] opacity-60 blur-xl" />

      <div className="relative rounded-[2.2rem] border border-zinc-800 bg-black/90 p-5 shadow-[0_0_40px_rgba(15,23,42,0.9)] backdrop-blur">
        {/* keyboard only – no text */}
        <div className="relative mx-auto h-24 w-full max-w-md overflow-hidden rounded-2xl border border-zinc-800 bg-black/90">
          {/* animated neon “white” keys */}
          <div className="flex h-full">
            {Array.from({ length: whiteKeyCount }).map((_, i) => (
              <div
                key={i}
                className="relative flex-1 border-r border-zinc-900 bg-linear-to-b from-zinc-900 via-zinc-950 to-black key-white"
                style={{
                  animationDelay: `${i * 0.16}s`,
                }}
              >
                {/* inner neon stripe */}
                <div className="pointer-events-none absolute inset-x-[18%] inset-y-[8%] rounded-full bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.7),transparent_55%)] opacity-70 mix-blend-screen" />
              </div>
            ))}
          </div>

          {/* animated glowing black keys */}
          {blackKeyPositions.map((left, i) => (
            <div
              key={i}
              className="absolute top-0 h-[72%] w-[8%] rounded-b-lg border border-zinc-900 bg-linear-to-b from-black via-zinc-900 to-black shadow-[0_0_18px_rgba(0,0,0,0.9)] key-black"
              style={{
                left,
                animationDelay: `${i * 0.22 + 0.4}s`,
              }}
            >
              <div className="pointer-events-none absolute inset-x-[20%] inset-y-[8%] rounded-full bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.8),transparent_55%)] opacity-80 mix-blend-screen" />
            </div>
          ))}

          {/* underglow */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-7 bg-linear-to-t from-cyan-400/55 via-fuchsia-400/25 to-transparent mix-blend-screen" />
        </div>
      </div>
    </div>
  );
}

/* ---------- Firefly orb (games easter egg) ---------- */

function FireflyOrb() {
  return (
    <div className="relative">
      {/* ambient glow – cyan / magenta instead of green */}
      <div className="absolute -inset-6 rounded-[3rem] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.55),transparent_55%),radial-gradient(circle_at_center,rgba(236,72,153,0.45),transparent_60%)] opacity-100 blur-2xl" />

      <div className="relative flex items-center justify-center rounded-[2.4rem] border border-cyan-400/30 bg-black/90 p-6 shadow-[0_0_40px_rgba(56,189,248,0.45)] backdrop-blur">
        {/* breathing + slight sway on the logo */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{
            scale: [0.96, 1.02, 0.96],
            rotate: [-1.5, 1.5, -1.5],
            opacity: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          {/* pulsing halo behind the PNG */}
          <motion.div
            className="pointer-events-none absolute -inset-8 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.9),transparent_60%),radial-gradient(circle_at_center,rgba(236,72,153,0.9),transparent_70%)] mix-blend-screen blur-2xl"
            animate={{ opacity: [0.4, 0.9, 0.5] }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Firefly PNG itself */}
          <Image
            src="/firefly-logo.png"
            alt="Firefly emblem"
            width={260}
            height={260}
            className="relative z-10 object-contain drop-shadow-[0_0_40px_rgba(56,189,248,0.75)]"
          />
        </motion.div>
      </div>
    </div>
  );
}

/* ---------- Spotify section ---------- */

function SpotifySection() {
  return (
    <section className="mt-16 space-y-6">
      <div className="space-y-2">
        <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
          Listening / Spotify
        </h2>
        <p className="max-w-2xl text-sm text-zinc-300">
          If I&apos;m coding, there&apos;s almost always music running in the
          background. These are a few of the playlists / vibes I keep
          returning to, plus a link straight into my Spotify profile.
        </p>
      </div>

      <div className="flex w-custom flex-col gap-6 md:flex-row md:items-stretch">
        <div className="flex-1 min-w-0">
            <PlaylistCard
            eyebrow="Playlist"
            title="Late-night grind"
            subtitle="Ambient / cinematic focus mix"
            embedUrl="https://open.spotify.com/embed/playlist/5YiJEO1UHi08w14ykfYjx3?utm_source=generator"
            />
        </div>

        <div className="flex-1 min-w-0">
            <PlaylistCard
            eyebrow="Playlist"
            title="Piano + strings"
            subtitle="Melodic stuff I keep looping"
            embedUrl="https://open.spotify.com/embed/playlist/6IAfS2PMhZNU7TiyHqO4Io?utm_source=generator"
            />
        </div>

        <div className="flex-1 min-w-0">
            <SpotifyProfileCard
            eyebrow="Profile"
            title="Spotify profile"
            subtitle="All my public playlists & activity"
            profileUrl="https://open.spotify.com/user/31s372imsgvmuin7vuchzwl3txtm"
            />
        </div>
      </div>
    </section>
  );
}

type PlaylistCardProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  embedUrl: string;
};

function PlaylistCard({
  eyebrow,
  title,
  subtitle,
  embedUrl,
}: PlaylistCardProps) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[2.2rem] border border-emerald-500/35 bg-linear-to-b from-emerald-950/80 via-black to-black shadow-[0_0_60px_rgba(16,185,129,0.55)]">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -inset-20 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.45),transparent_60%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.35),transparent_60%)] opacity-70" />

      <div className="relative flex h-full flex-col gap-4 p-5">
        <div className="space-y-1">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-emerald-300/80">
            {eyebrow}
          </p>
          <h3 className="text-sm font-semibold text-emerald-50">{title}</h3>
          <p className="text-xs text-emerald-100/70">{subtitle}</p>
        </div>

        <div className="mt-2 overflow-hidden rounded-2xl border border-emerald-400/40 shadow-[0_0_40px_rgba(16,185,129,0.7)]">
          <iframe
            src={embedUrl}
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="block h-[352px] w-full"
          />
        </div>
      </div>
    </div>
  );
}

type SpotifyProfileCardProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  profileUrl: string;
};

function SpotifyProfileCard({
  eyebrow,
  title,
  subtitle,
  profileUrl,
}: SpotifyProfileCardProps) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[2.2rem] border border-emerald-500/35 bg-linear-to-b from-emerald-950/80 via-black to-black shadow-[0_0_60px_rgba(16,185,129,0.55)]">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -inset-20 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.55),transparent_60%),radial-gradient(circle_at_bottom,rgba(52,211,153,0.45),transparent_60%)] opacity-80" />
      <a
        href={profileUrl}
        target="_blank"
        rel="noreferrer"
        className="relative flex h-full flex-col justify-between p-5 transition-transform duration-300 hover:-translate-y-px"
      >
        <div className="space-y-1">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-emerald-300/80">
            {eyebrow}
          </p>
          <h3 className="text-sm font-semibold text-emerald-50">{title}</h3>
          <p className="text-xs text-emerald-100/70">{subtitle}</p>
        </div>

        <div className="mt-4 flex flex-1 flex-col items-center justify-center gap-4 rounded-2xl border border-emerald-400/40 bg-black/70 p-6 shadow-[0_0_40px_rgba(22,163,74,0.9)]">
          {/* Spotify-ish icon */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-300/50">
            <svg
              viewBox="0 0 168 168"
              className="h-8 w-8 text-emerald-300"
              aria-hidden="true"
            >
              <circle cx="84" cy="84" r="84" fill="currentColor" />
              <path
                d="M120.9 108.1c-1.6 2.6-5 3.4-7.6 1.8-20.9-12.8-47.1-15.7-78.1-8.6-3 0.7-6-1.2-6.7-4.2-.7-3 1.2-6 4.2-6.7 34.7-7.9 64.3-4.5 87.5 10.1 2.6 1.6 3.4 5 1.7 7.6zm8.4-19.5c-2 3.2-6.3 4.2-9.5 2.2-24-14.8-60.6-19.1-88.9-10.5-3.6 1.1-7.4-1-8.5-4.6-1.1-3.6 1-7.4 4.6-8.5 32.9-10.1 73.8-5.3 101.8 11.6 3.2 2 4.1 6.3 2.1 9.5zm.9-20.5C102.7 51.2 63.3 49.7 39.2 57.2c-4.3 1.4-8.9-1-10.3-5.3-1.4-4.3 1-8.9 5.3-10.3 28.8-9.2 72.7-7.4 101.8 10.3 3.9 2.4 5.1 7.6 2.7 11.5-2.4 3.8-7.6 5-11.5 2.7z"
                fill="#000"
              />
            </svg>
          </div>

          <div className="space-y-1 text-center">
            <p className="text-sm font-medium text-emerald-50">
              Open full profile
            </p>
            <p className="text-xs text-emerald-100/70">
              Click to jump into all my public playlists and listening history.
            </p>
          </div>

          <span className="mt-2 text-[0.7rem] uppercase tracking-[0.2em] text-emerald-300/80">
            View on Spotify ↗
          </span>
        </div>
      </a>
    </div>
  );
}
