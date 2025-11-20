// src/app/page.tsx
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import StackGrid from "@/components/StackGrid";
import ModeLifeSection from "@/components/ModeLifeSection";
import HeroMobile from "@/components/HeroMobile";

const FEATURED_SLUGS = ["smitsartstudio", "traffic-control", "hivemind"];

const featuredProjects = projects.filter((p) =>
  FEATURED_SLUGS.includes(p.slug)
);

export default function Home() {
  return (
    <div className="flex flex-col gap-32">
      {/* Desktop hero */}
    <div className="hidden md:block">
    <   Hero />
    </div>

    {/* Mobile hero */}
    <div className="block md:hidden">
        <HeroMobile />
    </div>

      {/* Featured projects */}
      <section className="px-6">
        <div className="mx-auto max-w-5xl space-y-6">
          <SectionHeader title="Featured projects" />
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Stack & tools */}
      <section className="px-6">
        <div className="mx-auto max-w-5xl space-y-6">
          <SectionHeader title="Stack & tools" />
          <StackGrid />
          <ModeLifeSection/>
        </div>
      </section>
    </div>
  );
}
