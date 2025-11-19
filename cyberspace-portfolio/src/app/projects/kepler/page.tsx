// src/app/projects/kepler/page.tsx
import SectionHeader from "@/components/SectionHeader";
import KeplerNeuralViz from "@/components/KeplerNeuralViz";

export default function KeplerPage() {
  return (
    <div className="px-6 pb-24 pt-20 md:px-10 lg:px-16">
      <SectionHeader eyebrow="Project" title="Kepler Chess Engine" />

      <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
        {/* Main writeup */}
        <div className="space-y-6 text-sm leading-relaxed text-zinc-300">
          <p className="text-zinc-100">
            Kepler is a from-scratch C++ chess engine I&apos;m using to explore
            search algorithms, evaluation design, and engine architecture beyond
            basic minimax examples.
          </p>

          <section className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
              Goals
            </h3>
            <p>
              The point isn&apos;t beating top engines, it&apos;s having a codebase
              where every node, move, and score is transparent. The engine is
              structured so search, evaluation, and time management are all
              modular and swappable.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
              Architecture
            </h3>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-zinc-300">
              <li>Bitboard representation for fast move generation.</li>
              <li>
                Clean separation between move generation, search, and
                evaluation.
              </li>
              <li>
                Alpha–beta search with iterative deepening and a transposition
                table.
              </li>
              <li>
                Evaluation module where terms (material, mobility, king safety,
                pawn structure) are easy to iterate on.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
              Core search loop
            </h3>
            <p>
              The heart of the engine is a negamax-style alpha–beta search with
              iterative deepening:
            </p>

            <pre className="mt-2 overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-950/80 p-3 text-[0.7rem] leading-relaxed text-zinc-200">
{`int search(Position& pos, int depth, int alpha, int beta) {
    if (depth == 0 || pos.isTerminal())
        return evaluate(pos);

    int bestScore = -INF;

    for (Move m : generate_moves(pos)) {
        pos.make_move(m);
        int score = -search(pos, depth - 1, -beta, -alpha);
        pos.unmake_move(m);

        if (score > bestScore) bestScore = score;
        if (score > alpha) alpha = score;
        if (alpha >= beta) break; // cutoff
    }

    return bestScore;
}`}
            </pre>

            <p className="text-xs text-zinc-400">
              The real implementation adds a transposition table, quiescence
              search, and better move ordering, but this sketch shows the core
              idea.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
              Testing & tooling
            </h3>
            <ul className="mt-1 list-disc space-y-1 pl-5 text-zinc-300">
              <li>Perft tests on known positions to validate move generation.</li>
              <li>
                Engine-vs-engine matches at low depth to sanity-check strength.
              </li>
              <li>
                Bench command to measure nodes/sec when testing new optimisations.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
              Next steps
            </h3>
            <p>
              Planned work: richer evaluation terms, experimenting with NNUE-style
              evaluation, and stronger time management so Kepler can plug into
              GUIs over UCI cleanly.
            </p>
          </section>
        </div>

        {/* Right: neural / search visual */}
        <div className="space-y-4">
          <KeplerNeuralViz />

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 text-xs text-zinc-300">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-zinc-400">
              How to read this
            </p>
            <p className="mt-2">
              The orb isn&apos;t literal engine state — it&apos;s a visual nod to
              Kepler&apos;s search graph: nodes pulsing as candidate positions,
              rings hinting at deepening search, and the central tile as the
              evaluation core.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
