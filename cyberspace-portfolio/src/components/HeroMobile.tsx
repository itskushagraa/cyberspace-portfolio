"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroMobile() {
  const baseText = "Hi, I'm Kush.";
  const [typed, setTyped] = useState("");
  const [cursor, setCursor] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(baseText.slice(0, i));
      i++;
      if (i > baseText.length) {
        clearInterval(interval);
        setTimeout(() => setCursor(true), 120);
      }
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mx-auto flex max-w-lg flex-col gap-6 pt-20 md:hidden px-6">
      {/* Eyebrow */}
      <motion.p
        className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-300 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        SOFTWARE • ML • SYSTEMS
      </motion.p>

      {/* Typed */}
      <motion.h1
        className="text-center text-3xl font-semibold bg-linear-to-r from-cyan-400 via-sky-300 to-fuchsia-500 bg-clip-text text-transparent flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {typed}
        {cursor && <span className="ml-1 h-7 w-0.5 bg-cyan-300 animate-pulse" />}
      </motion.h1>

      {/* School */}
      <motion.div
        className="text-center text-sm text-zinc-300 space-y-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: cursor ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <p>Computer Science Major</p>
        <p>University of British Columbia</p>
        <p>4th Year</p>
      </motion.div>

      {/* Tagline */}
      <motion.h2
        className="text-center text-xl font-semibold leading-snug bg-linear-to-r from-cyan-400 via-sky-300 to-fuchsia-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Building systems.<br/>Training models.<br/>Trying to make lives better.
      </motion.h2>

      {/* Buttons */}
      <div className="flex flex-col gap-3 pt-4">
        <Link
          href="/projects"
          className="rounded-full bg-linear-to-r from-cyan-500 to-fuchsia-500 px-5 py-2 text-xs font-medium text-black text-center shadow-[0_0_25px_rgba(14,165,233,0.7)] hover:brightness-110"
        >
          View Projects
        </Link>

        <Link
          href="/about"
          className="rounded-full bg-linear-to-r from-cyan-500 to-fuchsia-500 px-5 py-2 text-xs font-medium text-black text-center shadow-[0_0_25px_rgba(14,165,233,0.7)] hover:brightness-110"
        >
          About Me
        </Link>

        <a
          href="/Kushagra_Sharma_Resume.pdf"
          className="rounded-full border border-zinc-700 bg-zinc-900/70 px-5 py-2 text-xs text-center font-medium text-zinc-200 hover:border-cyan-400 hover:text-cyan-200"
        >
          Download Resume
        </a>

        <a
          href="/Kushagra_Sharma_CV.pdf"
          className="rounded-full border border-zinc-700 bg-zinc-900/70 px-5 py-2 text-xs text-center font-medium text-zinc-200 hover:border-cyan-400 hover:text-cyan-200"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
