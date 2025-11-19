// src/app/page.tsx
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";

export default function Home() {
  return (
    <div className="flex flex-col gap-32">
      <Hero />

      <div className="px-6 max-w-5xl mx-auto">
        <SectionHeader title="Featured Projects" />
        {/* We'll add a fancy grid here later */}
      </div>
    </div>
  );
}
