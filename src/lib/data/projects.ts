import type { Project } from "@/types";

/** Placeholder projects — swap in your real work, screenshots, and links. */
export const projects: Project[] = [
  {
    slug: "orbit-platform",
    title: "Orbit",
    description:
      "A multi-tenant billing and subscription platform handling millions in monthly recurring revenue.",
    longDescription:
      "Orbit is a billing infrastructure layer built for SaaS companies — usage metering, invoicing, dunning, and revenue analytics behind a single API.",
    stack: ["TypeScript", "Node.js", "PostgreSQL", "AWS", "Redis"],
    image: "/projects/orbit.svg",
    github: "https://github.com/suhail/orbit",
    demo: "https://orbit.example.com",
    featured: true,
    year: "2025",
  },
  {
    slug: "nimbus-ai",
    title: "Nimbus AI",
    description:
      "A retrieval-augmented assistant that lets teams query internal docs, tickets, and codebases in natural language.",
    longDescription:
      "Nimbus indexes internal knowledge sources into a vector store and serves grounded, cited answers through a chat interface and CLI.",
    stack: ["Python", "FastAPI", "LangChain", "PostgreSQL / pgvector", "Next.js"],
    image: "/projects/nimbus.svg",
    github: "https://github.com/suhail/nimbus-ai",
    demo: "https://nimbus.example.com",
    featured: true,
    year: "2025",
  },
  {
    slug: "streamline",
    title: "Streamline",
    description:
      "An event-driven data pipeline processing real-time analytics for high-throughput e-commerce workloads.",
    longDescription:
      "Streamline ingests millions of events per day through Kafka, transforms them via stream processors, and serves rollups to a dashboard in near real time.",
    stack: ["Go", "Kafka", "Kubernetes", "ClickHouse"],
    image: "/projects/streamline.svg",
    github: "https://github.com/suhail/streamline",
    featured: true,
    year: "2024",
  },
  {
    slug: "linear-clone",
    title: "Flowboard",
    description:
      "A keyboard-first project management tool inspired by best-in-class issue trackers.",
    longDescription:
      "Flowboard focuses on speed: optimistic UI, a full command palette, and sub-100ms interactions across the board view.",
    stack: ["Next.js", "TypeScript", "tRPC", "PostgreSQL"],
    image: "/projects/flowboard.svg",
    github: "https://github.com/suhail/flowboard",
    demo: "https://flowboard.example.com",
    featured: false,
    year: "2024",
  },
];
