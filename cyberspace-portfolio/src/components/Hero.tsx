"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const baseText = "Hi, I'm Kush...";
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(baseText.slice(0, i));
      i++;
      if (i > baseText.length) {
        clearInterval(interval);
        setTimeout(() => setShowCursor(true), 150); // slight delay before cursor
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-10 pt-10">
      
      {/* Eyebrow */}
      <motion.p
        className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-300"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        SOFTWARE • ML • SYSTEMS
      </motion.p>

      {/* Two columns */}
      <div className="grid gap-10 md:grid-cols-2 md:items-center">

        {/* LEFT side */}
        <div className="space-y-5">
          <motion.h1
            className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl bg-linear-to-r from-cyan-400 via-sky-300 to-fuchsia-500 bg-clip-text text-transparent flex items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {typed}
            {showCursor && (
              <span className="ml-1 h-7 w-0.5 bg-cyan-300 animate-pulse" />
            )}
          </motion.h1>

          {/* School info */}
          <motion.div
            className="text-sm text-zinc-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: typed.length === baseText.length ? 1 : 0 }}
            transition={{ duration: 0.6 }}
          >
            <p>Computer Science Major</p>
            <p>University of British Columbia</p>
            <p>3rd Year</p>
          </motion.div>
        </div>

        {/* RIGHT side — tagline */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight bg-linear-to-r from-cyan-400 via-sky-300 to-fuchsia-500 bg-clip-text text-transparent">
            Building systems.<br/>Training models.<br/>Trying to make lives better.
          </h2>
        </motion.div>
      </div>

      {/* Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 pt-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link
          href="/projects"
          className="rounded-full bg-linear-to-r from-cyan-500 to-fuchsia-500 px-5 py-2 text-xs font-medium text-black shadow-[0_0_25px_rgba(14,165,233,0.7)] hover:brightness-110"
        >
          View Projects
        </Link>

        <Link
          href="/about"
          className="rounded-full bg-linear-to-r from-cyan-500 to-fuchsia-500 px-5 py-2 text-xs font-medium text-black shadow-[0_0_25px_rgba(14,165,233,0.7)] hover:brightness-110"
        >
          About Me
        </Link>

        <a
          href="/Kushagra_Sharma_Resume.pdf"
          className="rounded-full border border-zinc-700 bg-zinc-900/70 px-5 py-2 text-xs font-medium text-zinc-200 hover:border-cyan-400 hover:text-cyan-200"
        >
          Download Resume
        </a>

        <a
          href="/Kushagra_Sharma_CV.pdf"
          className="rounded-full border border-zinc-700 bg-zinc-900/70 px-5 py-2 text-xs font-medium text-zinc-200 hover:border-cyan-400 hover:text-cyan-200"
        >
          Download CV
        </a>
      </motion.div>
    </section>
  );
}
