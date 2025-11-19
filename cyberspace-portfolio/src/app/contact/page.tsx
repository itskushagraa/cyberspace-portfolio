import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="px-6 pb-24 pt-20 md:px-10 lg:px-16">
      <SectionHeader eyebrow="Contact" title="Open to interesting problems" />
      <div className="mt-6 max-w-xl space-y-4 text-sm text-zinc-300">
        <p>
          The best way to reach me is by email. I&apos;m open to roles around
          software engineering, ML, and cloud systems.
        </p>

        <div className="mt-4 space-y-2">
          <p>
            <span className="font-semibold text-zinc-100">Email:</span>{" "}
            <a
              href="mailto:ksharm22@student.ubc.ca"
              className="text-cyan-300 hover:text-cyan-200"
            >
              ksharm22@student.ubc.ca
            </a>
          </p>
          <p>
            <span className="font-semibold text-zinc-100">GitHub:</span>{" "}
            <Link
              href="https://github.com/itskushagraa"
              className="text-cyan-300 hover:text-cyan-200"
            >
              github.com/itskushagraa
            </Link>
          </p>
          <p>
            <span className="font-semibold text-zinc-100">LinkedIn:</span>{" "}
            <Link
              href="https://linkedin.com/in/ksharma22"
              className="text-cyan-300 hover:text-cyan-200"
            >
              linkedin.com/in/ksharma22
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
