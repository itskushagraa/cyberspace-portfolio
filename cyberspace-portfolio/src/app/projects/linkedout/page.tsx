"use client";

import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import {
  Bot,
  Cloud,
  Network,
  Laugh,
  Sparkles,
  Server,
  Shield,
  Linkedin,
} from "lucide-react";
import Image from "next/image";

export default function LinkedOutPage() {
  return (
    <div className="px-6 pb-28 pt-20 md:px-10 lg:px-16 space-y-20">
      <SectionHeader
        eyebrow="Project · CIC x AWS GenAI Hackathon"
        title="LinkedOut — weaponized corporate satire powered by AWS"
      />

      <HeroSection />
      <CoreFeatures />
      <ArchitectureSection />
      <CollaboratorsSection />
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
          LinkedOut is a satire of modern LinkedIn culture, built during the CIC
          GenAI Hackathon on AWS. You type something painfully ordinary like
          &quot;I opened my eyes today&quot; and the app turns it into an
          over-engineered, AI-generated humble-brag post drenched in corporate
          jargon.
        </p>

        <p>
          Under the jokes, it&apos;s a real serverless stack: a Streamlit
          frontend talking to AWS Lambda, Bedrock models, and S3 for storage —
          wired together with IAM, CloudWatch, and a fully managed, zero-servers
          backend. It&apos;s what happens when actual cloud engineering is used
          to roast performative productivity.
        </p>

        <div className="flex flex-wrap gap-3 pt-1 text-[0.7rem] uppercase tracking-[0.18em]">
          <TechPill icon={Cloud} label="AWS serverless" />
          <TechPill icon={Bot} label="Bedrock GenAI" />
          <TechPill icon={Server} label="Lambda + S3" />
          <TechPill icon={Network} label="IAM + CloudWatch" />
          <TechPill icon={Laugh} label="Satire-driven UX" />
        </div>

        <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/50 bg-sky-500/10 px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-sky-100">
          <Sparkles className="h-3.5 w-3.5" />
          Hackathon prototype · 24 hours
        </span>
      </div>

      {/* Visual: sarcastic LinkedOut post */}
      <PostPreviewCard />
    </motion.section>
  );
}

function TechPill({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-[0.7rem] text-sky-100">
      <Icon className="h-3.5 w-3.5" />
      {label}
    </span>
  );
}

function PostPreviewCard() {
  return (
    <motion.div
      className="relative rounded-[2.4rem] border border-sky-500/40 bg-black/90 p-0.5 shadow-[0_0_80px_rgba(56,189,248,0.65)] overflow-hidden"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, delay: 0.05 }}
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -inset-10 rounded-[3rem] bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.45),transparent_55%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.4),transparent_60%)] opacity-80 blur-3xl" />

      <div className="relative rounded-[2.2rem] bg-linear-to-b from-slate-950 via-slate-950/95 to-black p-6 space-y-4">
        {/* pseudo header */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 ring-2 ring-sky-400/60">
            <Bot className="h-5 w-5 text-sky-300" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-zinc-100">
              LinkedOut AI
            </span>
            <span className="text-[0.7rem] uppercase tracking-[0.18em] text-sky-300/80">
              Corporate Slop Generation Engine
            </span>
          </div>
        </div>

        {/* input vs output */}
        <div className="grid gap-4 text-xs md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)]">
          <div className="rounded-2xl border border-zinc-800 bg-slate-950/80 p-3">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-zinc-500">
              User prompt
            </p>
            <p className="mt-2 text-sm text-zinc-200">
              &quot;I opened my eyes today.&quot;
            </p>
          </div>

          <div className="relative rounded-2xl border border-sky-500/40 bg-slate-950/80 p-3">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-sky-300">
              LinkedOut post
            </p>
            <p className="mt-2 text-[0.78rem] leading-relaxed text-zinc-100">
              Thrilled to share that I kicked off my morning by successfully
              executing a full eyelid activation sprint 👁️. This small but
              meaningful &quot;vision boot sequence&quot; reminded me that
              growth isn&apos;t about massive milestones — it&apos;s about
              choosing to show up, one blink at a time.
              <br />
              <br />
              Grateful for the opportunity to collaborate with my circadian
              rhythm, nervous system, and a world-class pillow that believed in
              my potential even when I was offline. Onwards and upwards. 🚀
              #mindset #growth #eyelidLeadership
            </p>

            <div className="mt-3 flex items-center justify-between text-[0.65rem] text-zinc-500">
              <span>Generated via AWS Bedrock · us-west-2</span>
              <span className="rounded-full border border-sky-500/40 bg-sky-500/10 px-2 py-0.5 text-sky-200">
                1,024 reactions · 87 comments
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*                         CORE FEATURE GRID                          */
/* ------------------------------------------------------------------ */

function CoreFeatures() {
  const features = [
    {
      icon: Laugh,
      title: "Satire-tuned UX",
      body: "The interface is intentionally minimal: you type something boring, press a single button, and get a catastrophically over-celebratory LinkedOut post.",
    },
    {
      icon: Bot,
      title: "Bedrock-powered tone",
      body: "Prompts are engineered to maximize buzzwords, inspirational framing, and faux vulnerability while staying just barely plausible as a real post.",
    },
    {
      icon: Cloud,
      title: "Serverless everything",
      body: "S3 for storage, Lambda for compute, and Bedrock for inference. No servers to patch, just events, functions, and a lot of sarcasm.",
    },
    {
      icon: Network,
      title: "Secure by default",
      body: "IAM roles keep Bedrock, Lambda, and S3 tightly scoped. CloudWatch tracks every generation so debugging cringe is actually observability.",
    },
    {
      icon: Server,
      title: "Streamlit front-end",
      body: "We used Streamlit for rapid iteration at the hackathon: single-page app, instant reloads, and zero JS build pipeline to babysit.",
    },
    {
      icon: Shield,
      title: "Rate limiting the chaos",
      body: "Soft constraints on post length and frequency keep the app fun demo material rather than a firehose of infinite corporate monologues.",
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
    <div className="relative overflow-hidden rounded-[1.9rem] border border-sky-500/35 bg-linear-to-b from-slate-950 via-slate-950/95 to-black p-5 shadow-[0_0_40px_rgba(8,47,73,0.8)]">
      <div className="pointer-events-none absolute -inset-14 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.45),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.35),transparent_55%)] opacity-80 blur-3xl" />
      <div className="relative space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/15 px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-sky-100">
          <Icon className="h-3.5 w-3.5" />
          {title}
        </div>
        <p className="text-xs leading-relaxed text-zinc-200">{body}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*                         ARCHITECTURE SECTION                       */
/* ------------------------------------------------------------------ */

function ArchitectureSection() {
  return (
    <motion.section
      className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1.4fr)] items-start"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
    >
      {/* Architecture diagram-ish card */}
      <div className="rounded-[2.2rem] border border-slate-800 bg-slate-950/80 p-5 shadow-[0_0_40px_rgba(15,23,42,0.9)] space-y-4 text-xs text-zinc-300">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-zinc-400">
          Architecture at a glance
        </p>

        <ul className="space-y-2">
          <li>
            <span className="font-semibold text-zinc-100">
              Streamlit frontend:
            </span>{" "}
            single-page UI where users drop in mundane life events and view the
            generated LinkedOut post side-by-side.
          </li>
          <li>
            <span className="font-semibold text-zinc-100">
              API via AWS Lambda:
            </span>{" "}
            Streamlit calls a lightweight Lambda function that builds the
            Bedrock prompt, forwards the request, and logs metadata.
          </li>
          <li>
            <span className="font-semibold text-zinc-100">Bedrock models:</span>{" "}
            used through the Bedrock runtime client with carefully tuned
            system + user prompts for that cursed &quot;LinkedIn thought
            leader&quot; tone.
          </li>
          <li>
            <span className="font-semibold text-zinc-100">S3 storage:</span>{" "}
            keeps example posts and hackathon artifacts; architecture is ready
            to persist user slop if we ever want a timeline view.
          </li>
          <li>
            <span className="font-semibold text-zinc-100">IAM + CloudWatch:</span>{" "}
            least-privilege roles for Bedrock + S3 access, and request logs
            streamed into CloudWatch for debugging and post-mortems.
          </li>
        </ul>

        <div className="mt-3 rounded-2xl border border-sky-500/40 bg-sky-500/5 p-3 font-mono text-[0.7rem] text-sky-100">
          <p>// Request flow</p>
          <p>Streamlit ↦ Lambda ↦ Bedrock ↦ Lambda ↦ Streamlit</p>
          <p>// Side-channel: Lambda ↦ CloudWatch logs, optional S3 dump</p>
        </div>
      </div>

      {/* Takeaways */}
      <div className="grid gap-4 text-xs text-zinc-300">
        <TakeawayCard
          title="From annoyance to concept"
          body="The idea came straight from our own feeds: endless AI-written posts about trivial events. LinkedOut distilled that frustration into a focused, shippable joke."
        />
        <TakeawayCard
          title="Serious stack, unserious tone"
          body="Even though the output is comedic, the stack is production-relevant: Bedrock integration, IAM hardening, observability, and a clean serverless boundary."
        />
        <TakeawayCard
          title="Shipping in 24 hours"
          body="The hackathon constraint forced a tight scope: one core interaction, one polished flow, and a stack we could fully explain to judges in under five minutes."
        />
      </div>
    </motion.section>
  );
}

function TakeawayCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/85 p-4 shadow-[0_0_32px_rgba(15,23,42,0.85)]">
      <h3 className="text-sm font-semibold text-zinc-50">{title}</h3>
      <p className="mt-2 text-xs text-zinc-400">{body}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*                         COLLABORATORS SECTION                      */
/* ------------------------------------------------------------------ */

type Collaborator = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
};

const collaborators: Collaborator[] = [
  {
    name: "Arsh",
    role: "Teammate 1",
    image: "/linkedout/collab-0.png",
    linkedin: "#", // TODO: replace with your LinkedIn URL
  },
  {
    name: "Kush (me)",
    role: "Teammate 2",
    image: "/linkedout/collab-1.jpeg",
    linkedin: "https://www.linkedin.com/in/ksharma22/", // TODO: replace with collaborator's LinkedIn
  },
  {
    name: "Sarim",
    role: "Teammate 3",
    image: "/linkedout/collab-2.jpeg",
    linkedin: "https://www.linkedin.com/in/sarim-zulkifl-48471725b/",
  },
  {
    name: "Sayuj",
    role: "Teammate 4",
    image: "/linkedout/collab-3.jpeg",
    linkedin: "https://www.linkedin.com/in/sayuj-sethi/",
  },
];

function CollaboratorsSection() {
  return (
    <motion.section
      className="space-y-6"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
    >
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
            Team
          </h2>
          <p className="text-sm text-zinc-200">
            Built by a small crew of LinkedIn survivors who turned doomscrolling
            into a hackathon brief.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {collaborators.map((c) => (
          <a
            key={c.name}
            href={c.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-col items-center gap-3 rounded-2xl border border-sky-500/30 bg-slate-950/80 p-4 text-center shadow-[0_0_36px_rgba(8,47,73,0.8)] transition-transform hover:-translate-y-1 hover:border-sky-400/70"
          >
            <div className="relative h-16 w-16">
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.6),transparent_60%)] opacity-80 blur-xl" />
              <div className="relative h-full w-full overflow-hidden rounded-full ring-2 ring-sky-400/70 ring-offset-2 ring-offset-slate-950">
                {/* Replace src paths with actual profile images in /public */}
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-sky-500 text-slate-950 shadow-md">
                <Linkedin className="h-3.5 w-3.5" />
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-sm font-semibold text-zinc-50">{c.name}</p>
              <p className="text-[0.7rem] uppercase tracking-[0.18em] text-sky-300">
                {c.role}
              </p>
            </div>

            <p className="mt-1 text-[0.7rem] text-zinc-400">
              Click to view their LinkedIn profile and the other side of the
              joke: real experience behind the satire.
            </p>
          </a>
        ))}
      </div>
    </motion.section>
  );
}
