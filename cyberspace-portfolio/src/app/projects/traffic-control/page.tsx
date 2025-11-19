"use client";

import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TrafficControlPage() {
  return (
    <div className="px-6 pb-24 pt-20 md:px-10 lg:px-16 space-y-16">
      <SectionHeader
        eyebrow="Project"
        title="Autonomous Traffic Control"
      />

      {/* Hero layout: text + visual */}
      <motion.section
        className="grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1.1fr)] items-start"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
      >
        {/* Narrative */}
        <div className="space-y-6 text-sm leading-relaxed text-zinc-300">
          <p className="text-zinc-100 text-[0.98rem]">
            This project started as a physical simulation of a city
            intersection: 12 LEDs for traffic lights, 4 LED bar graphs for car
            density, a keypad for manual overrides, and a Raspberry Pi
            orchestrating everything. Over time it grew into a full
            ML-assisted traffic controller.
          </p>

          <p>
            The goal was simple: stop wasting time at empty red lights. Instead
            of hard-coded timings, the system reads lane occupancy and adjusts
            green phases dynamically, while still respecting safety constraints
            like minimum red times and pedestrian crossings.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <InfoCard
              title="What it controls"
              items={[
                "12 LEDs + 12 resistors representing 4 directions",
                "4 LED bar graphs that visualize lane density",
                "Keypad input for manual car counts / overrides",
                "LCDs per direction showing phase + timers",
              ]}
            />
            <InfoCard
              title="Logic in the loop"
              items={[
                "Queue lengths per lane estimated from sensors / camera",
                "Adaptive phase selection based on total delay",
                "Fail-safe defaults if signals look inconsistent",
                "Logging for later replay + analysis",
              ]}
            />
          </div>
        </div>

        {/* Visual card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          {/* outer glow */}
          <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(34,211,238,0.5),rgba(59,130,246,0.0),rgba(248,250,252,0.45),rgba(34,211,238,0.5))] opacity-70 blur-xl" />

          <div className="relative overflow-hidden rounded-[2.2rem] border border-zinc-800 bg-black/90 p-5 shadow-[0_0_50px_rgba(15,23,42,0.9)] backdrop-blur">
            <div className="mb-3 flex items-center justify-between text-[0.7rem] uppercase tracking-[0.18em] text-zinc-400">
              <span>Vehicle Detection</span>
              <span className="text-cyan-300/80">North • South • East • West</span>
            </div>

            <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-zinc-800 bg-linear-to-br from-slate-900 via-black to-slate-950">
              {/* If you have an image, drop it in /public/images/projects/traffic-control/board.png */}
              <Image
                src="/lanes.png"
                alt="Traffic control simulation board"
                fill
                className="object-cover object-center opacity-90"
                priority={false}
              />
              {/* fallback overlay if you don't have the image yet */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.35),transparent_55%)] mix-blend-screen" />
            </div>

            <p className="mt-3 text-xs text-zinc-400">
              The first version ran purely on discrete hardware; the current
              one is wired to a computer-vision pipeline that estimates lane
              density from video frames.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* ML / CV section */}
      <motion.section
        className="grid gap-10 lg:grid-cols-2 items-start"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
      >
        <div className="space-y-4 text-sm leading-relaxed text-zinc-300">
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Computer vision & YOLOPv2
          </h2>
          <p>
            The second phase replaces manual car counts with a proper
            perception stack. Using YOLOPv2 for joint object detection and
            drivable-area segmentation, the system only counts vehicles inside
            the road mask instead of relying on hand-drawn ROIs.
          </p>
          <p>
            That drivable mask feeds into a simple time-series model that
            predicts near-future queue lengths, which is enough to choose which
            phase to grant next and how long to hold it.
          </p>
          <ul className="mt-2 space-y-2 text-xs text-zinc-400">
            <li>• YOLOPv2 for lane + drivable area segmentation</li>
            <li>• Vehicle counts per lane from masked detections</li>
            <li>• Rolling window of counts → short-horizon predictions</li>
            <li>• Phase chooser minimizes total predicted waiting time</li>
          </ul>
        </div>

        {/* Pseudo-code card */}
        <div className="relative rounded-[2.1rem] border border-zinc-800 bg-black/90 p-5 shadow-[0_0_40px_rgba(15,23,42,0.9)]">
          <div className="mb-3 flex items-center justify-between text-[0.7rem] uppercase tracking-[0.18em] text-zinc-400">
            <span>Loop sketch</span>
            <span className="text-fuchsia-300/80">pi@junction-node</span>
          </div>

          <pre className="max-h-[260px] overflow-auto rounded-2xl bg-linear-to-br from-slate-950 via-slate-900 to-black p-4 text-[0.7rem] leading-relaxed text-zinc-200">
{`while True:
    frame = camera.read()
    detections, drivable_mask = yolopv2(frame)

    # count cars per lane inside drivable area
    lane_counts = aggregate_by_lane(detections, drivable_mask)

    # update short history window
    history.append(lane_counts)

    demand = predict_next_window(history)

    next_phase = choose_phase(demand, safety_state)
    schedule_signals(next_phase, hardware_io)

    log_state(frame_id, lane_counts, next_phase)`}
          </pre>
        </div>
      </motion.section>

      {/* What I learned */}
      <motion.section
        className="space-y-5 text-sm leading-relaxed text-zinc-300"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
          Takeaways
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          <SmallPill
            label="Tight hardware loops"
            body="Tuning timings when LEDs, keypads, and LCDs are all talking to the same Pi taught me to keep the control loop stupidly simple."
          />
          <SmallPill
            label="Bridging sim ↔ ML"
            body="Going from a hand-tuned timing model to a CV-driven one made it clear which pieces belong in math, and which belong in perception."
          />
          <SmallPill
            label="Explainable behavior"
            body="Every phase decision is logged with lane counts and predicted delay, so you can justify why a light changed when it did."
          />
        </div>
      </motion.section>
    </div>
  );
}

type InfoCardProps = {
  title: string;
  items: string[];
};

function InfoCard({ title, items }: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-black/80 p-4 shadow-[0_0_30px_rgba(15,23,42,0.75)]">
      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 mb-2">
        {title}
      </h3>
      <ul className="space-y-1.5 text-xs text-zinc-300/90">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

type SmallPillProps = {
  label: string;
  body: string;
};

function SmallPill({ label, body }: SmallPillProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-black/80 p-4 shadow-[0_0_30px_rgba(15,23,42,0.75)]">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-zinc-400 mb-2">
        {label}
      </p>
      <p className="text-xs text-zinc-300">{body}</p>
    </div>
  );
}
