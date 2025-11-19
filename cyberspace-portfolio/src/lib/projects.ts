// src/lib/projects.ts
export type Project = {
  slug: string;
  name: string;
  tagline: string;
  tech: string[];
  href?: string;
  caseStudy?: string;
  role?: string;
  timeline?: string;
  problem?: string;
  impact?: string;
};

export const projects: Project[] = [
  {
    slug: "hivemind",
    name: "Hivemind",
    tagline:
      "AWS multi-agent GenAI system that analyses campus events in real time.",
    tech: ["AWS", "Lambda", "API Gateway", "Bedrock", "S3", "Python"],
    timeline: "Fall 2025 · UBC GenAI Hackathon (Runner-up)",
    role: "End-to-end design & implementation",
    problem:
      "Make sense of noisy campus event data and surface insights using coordinated LLM agents.",
    impact:
      "Delivered a fully serverless pipeline with near real-time inference and clean IAM-scoped roles.",
    href: "https://github.com/itskushagraa",
    caseStudy: "/projects/hivemind",
  },
  {
    slug: "linkedout",
    name: "LinkedOut",
    tagline:
      "Serverless satire engine that rewrites thoughts into cursed LinkedIn posts.",
    tech: ["AWS", "Lambda", "Bedrock Nova", "S3", "TypeScript"],
    timeline: "2025",
    role: "Solo project",
    problem:
      "Turn throwaway thoughts into exaggerated, corporate-speak posts as a playground for Bedrock.",
    impact:
      "Built a 2-Lambda architecture (generate + fetch) with S3 persistence and observability via CloudWatch.",
    caseStudy: "/projects/linkedout",
  },
  {
    slug: "kepler",
    name: "Kepler Chess Engine",
    tagline:
      "C++ chess engine focused on search quality, evaluation, and clean engine architecture.",
    tech: ["C++", "Search", "Evaluation", "Algorithms"],
    timeline: "2025",
    role: "Solo project",
    problem:
      "Explore engine design, move generation, and evaluation heuristics beyond basic minimax.",
    impact:
      "Structured the engine around modular search / eval components, making it easy to plug in new heuristics.",
    caseStudy: "/projects/kepler",
  },
  {
    slug: "straycare",
    name: "StrayCare",
    tagline:
      "Backend + DB + UI for tracking stray animal feeding, vaccination, and community care.",
    tech: ["Node.js", "Express", "PostgreSQL", "SQL", "HTML", "CSS", "JS"],
    timeline: "Summer 2025",
    role: "Backend & schema design",
    problem:
      "Model and manage real-world animal/vaccination data with clean constraints and queries.",
    impact:
      "Designed a BCNF schema and REST API that keeps data consistent while staying simple to query.",
  },
  {
    slug: "smitsartstudio",
    name: "SmitsArtStudio",
    tagline:
      "Production art gallery with secure email pipeline and tuned performance.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Supabase", "AWS SES"],
    timeline: "Summer 2025 · Freelance",
    role: "Full-stack dev",
    problem:
      "Give an artist a site that loads fast globally and handles inquiries safely.",
    impact:
      "Hit a 100/100 real-user experience score and hardened email auth (SPF/DKIM/DMARC) + bot protection.",
    href: "https://smitsartstudio.com",
    caseStudy: "/projects/smitsartstudio",
  },
  {
    slug: "traffic-control",
    name: "Autonomous Traffic Control",
    tagline:
      "ML + CV powered traffic light controller running on embedded hardware.",
    tech: ["Python", "YOLO", "Raspberry Pi", "Computer Vision"],
    timeline: "2019 → ongoing redesign",
    role: "Embedded + logic",
    problem:
      "Reduce wasted idle time at intersections using real-time traffic density instead of fixed timers.",
    impact:
      "Deployed a working prototype and later iterated with better detection and timing logic.",
    caseStudy: "/projects/traffic-control",
  },
    {
    slug: "fithub",
    name: "FitHub",
    tagline:
      "Multi-module fitness application with workout tracking and diet planning and weekly statistics charts",
    tech: ["Java", "Swing", "JSON", "jUnit Testing", "Event Logging", "Object Oriented Design"],
    timeline: "Fall 2024",
    role: "SWE + OOP",
    caseStudy: "/projects/fithub",
  },
];
