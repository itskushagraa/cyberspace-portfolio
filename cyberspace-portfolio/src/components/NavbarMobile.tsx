"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-zinc-800 bg-black/80 backdrop-blur-md md:hidden">
      <div className="flex items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="font-semibold tracking-[0.25em] text-xs uppercase bg-linear-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent"
        >
          KUSH
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="text-zinc-300 focus:outline-none"
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-zinc-300"></span>
            <span className="block h-0.5 w-5 bg-zinc-300"></span>
            <span className="block h-0.5 w-5 bg-zinc-300"></span>
          </div>
        </button>
      </div>

      {/* MENU */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="flex flex-col gap-4 px-6 pb-6 text-sm text-zinc-300"
          >
            <MobileNavLink href="/" label="Home" />
            <MobileNavLink href="/projects" label="Projects" />
            <MobileNavLink href="/about" label="About" />
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function MobileNavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="rounded-md py-1 text-zinc-300 hover:text-cyan-300 hover:bg-zinc-900/60"
    >
      {label}
    </Link>
  );
}
