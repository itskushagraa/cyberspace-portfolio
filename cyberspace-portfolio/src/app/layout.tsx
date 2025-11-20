// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import CosmicParticleField from "@/components/CosmicParticleField";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavbarMobile from "@/components/NavbarMobile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kush | Portfolio",
  description: "",
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

        {/* desktop */}
        <div className="hidden md:block">
        <Navbar />
        </div>

        {/* mobile */}
        <div className="block md:hidden">
        <NavbarMobile />
        </div>

        <main className="relative z-10">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}
