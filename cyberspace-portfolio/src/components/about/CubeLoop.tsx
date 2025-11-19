"use client";

import { useEffect, useRef } from "react";
import { TwistyPlayer, TwistyPlayerConfig } from "cubing/twisty";

const CUBE_ALG =
  "R2 U R' U R' U' R U' R2 U' D R' U R D' R' U' R U D' R2 U R' U R U' R U' R2 D x2 y"; // R U R' U' repeated

export function CubeLoop() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const player = new TwistyPlayer({
      puzzle: "3x3x3",
      alg: CUBE_ALG,
      background: "none",
      controlPanel: "none",
      hintFacelets: "none",
      experimentalSetupAnchor: "end",
      cameraLatitude: 25,
      cameraLongitude: -35,
    } as TwistyPlayerConfig);

    // size + feel
    player.style.width = "260px";
    player.style.height = "260px";

    // mount into our div
    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(player);

    // kick off the animation (experimental API, so cast to any)
    (player as any).play?.();

    return () => {
      if (containerRef.current?.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[260px] rounded-4xl bg-[#020617]/80 border border-cyan-500/10 shadow-[0_0_80px_rgba(56,189,248,0.22)] flex items-center justify-center overflow-hidden">
      {/* soft inner glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_65%)]" />
      {/* cube mount point */}
      <div ref={containerRef} className="relative z-10 pointer-events-none" />
    </div>
  );
}