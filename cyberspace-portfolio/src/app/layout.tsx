// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import CosmicParticleField from "@/components/CosmicParticleField";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kushagra | CyberSpace Portfolio",
  description: "ML • Cloud • C++ • Distributed Systems • Cyber Themed Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-black overflow-x-hidden"}>
        
        <CosmicParticleField />  {/* neon cyberspace background */}
        
        <Navbar />

        <main className="relative z-10">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}
