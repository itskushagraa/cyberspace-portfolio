// src/components/CosmicParticleField.tsx
"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function CosmicParticleField() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // initParticlesEngine runs once on the client and loads the slim bundle
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setReady(true);
    });
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="cyber-particles"
      className="fixed inset-0 z-0 pointer-events-none"
      options={{
        background: {
          color: {
            value: "#000000",
          },
        },
        fullScreen: {
          enable: false,
        },
        fpsLimit: 120,
        detectRetina: true,
        particles: {
          number: {
            value: 60,
          },
          color: {
            value: "#00eaff",
          },
          links: {
            enable: true,
            color: "#00eaff",
            distance: 140,
            opacity: 0.4,
            width: 1.2,
          },
          move: {
            enable: true,
            speed: 1,
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
      }}
    />
  );
}
