// src/components/Footer.tsx
import Link from "next/link";
import { Github, Linkedin, Instagram, Youtube, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const iconClasses =
    "h-4 w-4 text-zinc-300 group-hover:text-cyan-200 transition-colors";

  return (
    <footer className="fixed inset-x-0 bottom-0 z-20 border-t border-zinc-900 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-3 text-[0.75rem] text-zinc-500 md:flex-row md:items-center md:justify-between md:px-10">
        {/* Left: copyright */}
        <div className="flex items-center gap-2">
          <span>© {year} Kushagra Sharma.</span>
          <span className="hidden md:inline">All rights reserved.</span>
        </div>

        {/* Middle: contact (icon only) */}
        <div className="flex items-center gap-2">
        </div>

        {/* Right: social icons */}
        <div className="flex items-center gap-3">
          <SocialIcon
            href="mailto:ksharm22@student.ubc.ca"
            label="Email Kushagra"
          >
            <Mail className={iconClasses} />
          </SocialIcon>
          <SocialIcon href="https://github.com/itskushagraa" label="GitHub">
            <Github className={iconClasses} />
          </SocialIcon>
          <SocialIcon href="https://linkedin.com/in/ksharma22" label="LinkedIn">
            <Linkedin className={iconClasses} />
          </SocialIcon>
          <SocialIcon
            href="https://instagram.com/itskushagraa"
            label="Instagram"
          >
            <Instagram className={iconClasses} />
          </SocialIcon>
          <SocialIcon
            href="https://youtube.com/fatalmashup"
            label="YouTube"
          >
            <Youtube className={iconClasses} />
          </SocialIcon>
        </div>
      </div>
    </footer>
  );
}

type SocialIconProps = {
  href: string;
  label: string;
  children: React.ReactNode;
};

function SocialIcon({ href, label, children }: SocialIconProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="group inline-flex h-7 w-7 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950/80 shadow-[0_0_18px_rgba(15,23,42,0.9)] hover:border-cyan-400 hover:shadow-[0_0_24px_rgba(34,211,238,0.6)] transition-all"
    >
      {children}
      <span className="sr-only">{label}</span>
    </Link>
  );
}
