"use client";

import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { BookAudioIcon, BrainCircuit, Cloud, Database, LucideFileAudio2, Speech, Users, Voicemail } from "lucide-react";
import Image from "next/image";

export default function HivemindPage() {
  return (
    <div className="px-6 pb-24 pt-20 md:px-10 lg:px-16 space-y-16">
      <SectionHeader
        eyebrow="Project · AWS Hackathon Runner-up"
        title="Hivemind — turning a whole event into one collective thought"
      />

      {/* Hero row */}
      <motion.section
        className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.4fr)] items-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.4 }}
      >
        <div className="space-y-6 text-sm leading-relaxed text-zinc-300">
          <p className="text-zinc-100 text-base md:text-[0.98rem]">
            Hivemind was built for an in-person AWS hackathon. Every attendee
            could send in a single word from their phone. We funneled those
            words into a central “brain” that periodically generated a single
            sentence describing what the whole crowd was thinking.
          </p>

          <p>
            A Lambda function writes each word into Couchbase. Another Lambda
            periodically grabs a random subset of those words, feeds them to
            Amazon Bedrock, and renders the resulting “hive thought” on the
            main event screen so the room can literally see its collective
            mood.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-[0.7rem] uppercase tracking-[0.16em]">
            <TechPill icon={Cloud} label="AWS Lambda" />
            <TechPill icon={Database} label="Couchbase" />
            <TechPill icon={BrainCircuit} label="Amazon Bedrock" />
            <TechPill icon={Speech} label="Amazon Polly" />
            <TechPill icon={Users} label="Live event experience" />
          </div>
        </div>

        {/* Visual card */}
        <motion.div
          className="relative rounded-[2.4rem] border border-cyan-500/30 bg-black/90 p-0.5 shadow-[0_0_80px_rgba(56,189,248,0.45)]"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          <div className="pointer-events-none absolute -inset-10 rounded-[2.8rem] bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.35),transparent_60%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.4),transparent_60%)] opacity-80 blur-2xl" />

          <div className="relative rounded-[2.3rem] bg-linear-to-b from-slate-950 via-black to-black px-8 pb-8 pt-7 overflow-hidden">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-cyan-300/80">
              Live event brain
            </p>
            <h2 className="mt-2 text-lg font-semibold text-zinc-50">
              Everyone sends one word. The screen shows one mind.
            </h2>

            <p className="mt-3 text-xs text-zinc-400">
              Inputs from hundreds of attendees are sampled, remixed via Bedrock,
              and surfaced as a single animated thought on the main display.
            </p>

            <div className="mt-6 rounded-3xl border border-cyan-500/30 bg-black/80 px-6 py-5 backdrop-blur">
              <p className="text-[0.7rem] uppercase tracking-[0.18em] text-cyan-300/80">
                Sample hive output
              </p>
              <p className="mt-3 text-sm text-cyan-50">
                “We&apos;re a room full of builders, running on caffeine,
                hoping the demo gods are kind.”
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between text-[0.7rem] text-zinc-500">
              <span>Built in under 24 hours.</span>
              <span className="text-cyan-300/80">AWS Hackathon · Runner-up</span>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* How it works */}
      <motion.section
        className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1.5fr)] items-start"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.4, delay: 0.03 }}
      >
        <div className="space-y-4 text-sm leading-relaxed text-zinc-300">
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
            How it works
          </h2>

          <ol className="space-y-3 text-xs md:text-sm text-zinc-300">
            <li>
              <span className="font-semibold text-cyan-300">1. One-word input</span>{" "}
              — each attendee submits a single word from a simple web form.
            </li>
            <li>
              <span className="font-semibold text-cyan-300">
                2. Lambda → Couchbase
              </span>{" "}
              — an AWS Lambda function writes the word, user/session metadata,
              and timestamp into Couchbase.
            </li>
            <li>
              <span className="font-semibold text-cyan-300">
                3. Sampling the hive
              </span>{" "}
              — a scheduled Lambda grabs a random subset of recent words to
              avoid the same few people dominating the feed.
            </li>
            <li>
              <span className="font-semibold text-cyan-300">
                4. Prompting Bedrock
              </span>{" "}
              — the words are turned into a compact prompt and sent to Amazon
              Bedrock, which generates a short “hive thought.”
            </li>
            <li>
              <span className="font-semibold text-cyan-300">
                5. Main-screen render
              </span>{" "}
              — the thought is pushed to the event display as a glowing banner
              that updates periodically as more people submit.
            </li>
          </ol>

          <CodeCard />
        </div>

        {/* diagram / how-it-works visual */}
        <div className="relative">
          <div className="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.5),transparent_55%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.4),transparent_60%)] opacity-80 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.6rem] border border-cyan-500/40 bg-black/95 shadow-[0_0_80px_rgba(56,189,248,0.7)]">
            {/* Replace src with your actual diagram path */}
            <Image
              src="/brain.png"
              alt="Hivemind architecture diagram"
              width={1000}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Takeaways */}
      <motion.section
        className="grid gap-8 lg:grid-cols-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, delay: 0.05 }}
      >
        <TakeawayCard
          title="Designing for crowds"
          body="The interesting part wasn’t the UI — it was making sure hundreds of tiny inputs still felt like one coherent output instead of chaos."
        />
        <TakeawayCard
          title="Stateless by default"
          body="Keeping the logic in Lambda + Couchbase made the system trivially scalable for any event size with almost no ops overhead."
        />
        <TakeawayCard
          title="Prompting as glue"
          body="Most of the magic came from how we shaped the prompt from raw words into something Bedrock could reliably turn into a single, readable thought."
        />
      </motion.section>
    </div>
  );
}

/* ---------- small components ---------- */

type TechPillProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
};

function TechPill({ icon: Icon, label }: TechPillProps) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 text-[0.7rem] text-cyan-200">
      <Icon className="h-3.5 w-3.5" />
      {label}
    </span>
  );
}

function CodeCard() {
  return (
    <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 text-[0.72rem] font-mono text-zinc-200 shadow-[0_0_40px_rgba(15,23,42,0.9)]">
      <div className="mb-3 flex items-center justify-between text-[0.68rem] text-zinc-500">
        <span>lambda/hivePrompt.ts</span>
        <span className="text-cyan-300/80">sample</span>
      </div>
      <pre className="whitespace-pre-wrap leading-relaxed">
        {`export async function handler(event) {
  const word = event.body.word.trim();

  // 1) write to Couchbase
  await bucket.collection("words").insert(uuid(), {
    word,
    ts: Date.now(),
  });

  return { statusCode: 200, body: JSON.stringify({ ok: true }) };
}

// separate scheduled lambda:
async function generateHiveThought() {
  const sample = await sampleRecentWords(bucket, 40);

  const prompt = "You are the voice of a live audience. In ONE " +
    "short sentence, describe the crowd's mood using these words: " +
    sample.join(", ") + ".";

  const completion = await bedrock.invoke(prompt);

  await pushToMainScreen(completion.text);
}`}
      </pre>
    </div>
  );
}

type TakeawayCardProps = {
  title: string;
  body: string;
};

function TakeawayCard({ title, body }: TakeawayCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5 shadow-[0_0_40px_rgba(15,23,42,0.9)]">
      <h3 className="text-sm font-semibold text-zinc-50">{title}</h3>
      <p className="mt-2 text-xs text-zinc-400">{body}</p>
    </div>
  );
}
