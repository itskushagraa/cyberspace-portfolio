// src/app/projects/linkedout/page.tsx
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

export default function LinkedOutPage() {
  return (
    <div className="px-6 pb-24 pt-20 md:px-10 lg:px-16">
      <SectionHeader eyebrow="Project" title="LinkedOut" />

      <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        {/* Main writeup */}
        <div className="space-y-6 text-sm leading-relaxed text-zinc-300">
          <p className="text-zinc-100">
            LinkedOut is a small, stupidly fun project: you type a raw thought,
            and it comes back as an over-the-top, corporate LinkedIn post.
            Under the meme layer it&apos;s a clean serverless Bedrock pipeline I
            use as a playground for prompt + infra tuning.
          </p>

          <section className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
              Problem
            </h3>
            <p>
              I wanted something low-stakes but technically real: a system that
              hits Bedrock, runs fully on AWS, persists outputs, and can evolve
              into a more serious GenAI backend later. Most “toy” Bedrock demos
              stop at one Lambda; I wanted a slightly more structured design.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
              Architecture
            </h3>
            <p>The system uses a simple two-Lambda split:</p>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-zinc-300">
              <li>
                <span className="font-semibold text-zinc-100">
                  generate_post:
                </span>{" "}
                receives the raw user text, builds a structured prompt, calls
                Bedrock Nova / Claude via the Bedrock Runtime SDK, and writes a
                JSON record to S3 (<code>posts/...</code>).
              </li>
              <li>
                <span className="font-semibold text-zinc-100">
                  fetch_post:
                </span>{" "}
                loads the latest (or requested) post from S3 and returns it to
                the frontend (Streamlit / Next.js UI).
              </li>
              <li>
                API Gateway fronts both Lambdas with clean REST endpoints and
                CORS rules so I can swap out frontends without touching the
                backend.
              </li>
            </ul>

            <div className="mt-3 rounded-2xl border border-cyan-500/40 bg-cyan-500/5 p-4 text-xs text-cyan-100">
              <p className="font-mono text-[0.7rem]">
                [ diagram placeholder ] UI → API Gateway → Lambda (generate)
                → Bedrock → S3 (JSON) → Lambda (fetch) → UI
              </p>
            </div>
          </section>

          <section className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
              Implementation details
            </h3>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-zinc-300">
              <li>
                Lambda functions written in TypeScript with a thin,
                dependency-light handler to keep cold starts small.
              </li>
              <li>
                IAM roles scoped narrowly to Bedrock invoke + S3 access under
                a specific prefix, no wildcard buckets.
              </li>
              <li>
                Structured logs (JSON) to CloudWatch so I can replay prompts and
                compare different prompt templates over time.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
              Why it matters
            </h3>
            <p>
              The project looks like a joke, but the infra is representative of
              the kind of GenAI backend I&apos;d build for more serious use
              cases: small, observable, serverless, and easy to iterate on.
            </p>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-4 text-xs text-zinc-300">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-zinc-400">
              Role
            </p>
            <p className="mt-1 text-sm text-zinc-100">Solo project</p>
            <p className="mt-2 text-[0.75rem] text-zinc-400">
              I handled the AWS architecture, Lambda code, IAM, and UI
              integration.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-zinc-400">
              Stack
            </p>
            <p className="mt-2 text-[0.75rem] text-zinc-200">
              AWS Lambda · API Gateway · S3 · Bedrock (Nova / Claude) ·
              TypeScript · CloudWatch
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-zinc-400">
              Links
            </p>
            <ul className="mt-2 space-y-1">
              <li>
                <Link
                  href="https://github.com/itskushagraa"
                  className="text-cyan-300 hover:text-cyan-200"
                >
                  Repo (coming soon)
                </Link>
              </li>
              <li>
                <span className="text-zinc-500">
                  Screenshots and code snippets go here once you&apos;re ready
                  to paste them in.
                </span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
