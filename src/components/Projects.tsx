"use client";

import { ExternalLink, GitBranch } from "lucide-react";

const projects = [
  {
    type: "Deep Learning — Mini Project",
    name: "Road Accident Severity & Hospital Recommendation System",
    description:
      "Trained on 10,000+ accident records. Achieved 85%+ validation accuracy. Recommended nearest hospitals based on accident severity.",
    tags: ["Python", "Deep Learning", "Machine Learning"],
    accent: "from-[var(--accent-cyan)] to-[var(--accent-blue)]",
    metrics: ["10K+ Records", "85%+ Accuracy", "Real-time Rec."],
    demo: "#",
    github: "#",
  },
  {
    type: "Production Application",
    name: "MSV Technologies Website",
    description:
      "Live production website built with Angular and TypeScript. Component-based architecture with responsive design across all devices.",
    tags: ["Angular", "TypeScript", "Bootstrap", "Node.js"],
    accent: "from-[var(--accent-blue)] to-[var(--accent-teal)]",
    metrics: ["6+ Pages", "Live Production", "Responsive"],
    demo: "https://s2swebsolutions.in/msv",
    github: "#",
  },
  {
    type: "Major Research Project",
    name: "AI Literacy & Student Readiness Analysis",
    description:
      "Analyzed 200+ student responses to identify AI literacy gaps. Presented research at institutional level.",
    tags: ["Python", "Statistical Analysis"],
    accent: "from-[var(--accent-teal)] to-[var(--accent-cyan)]",
    metrics: ["200+ Students", "Institutional Pres.", "Data-Driven"],
    demo: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-36 md:py-44 overflow-hidden">
      <div className="section-container">
        <div>
          <span className="section-label">Projects</span>
        </div>
        <h2 className="section-title">
          Featured <span className="gradient-text">Work</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className="group relative glass rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(6,182,212,0.1)]"
              style={{ animation: `fadeInUp 0.6s ease ${i * 0.1}s forwards`, opacity: 0 }}
            >
              {/* Gradient top bar */}
              <div className={`h-1 bg-gradient-to-r ${project.accent}`} />

              <div className="p-12 flex flex-col gap-4 text-center">
                <span className="font-mono text-[0.5rem] tracking-[0.15em] uppercase text-[var(--accent-cyan)] font-medium block">
                  {project.type}
                </span>

                <h3 className="text-base font-bold leading-snug group-hover:text-[var(--accent-cyan)] transition-colors">
                  {project.name}
                </h3>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed text-left">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap justify-center gap-2">
                  {project.metrics.map((m) => (
                    <span key={m} className="metric-badge px-2 py-1 bg-[rgba(6,182,212,0.06)] border border-[rgba(6,182,212,0.1)] text-[0.55rem] font-mono text-[var(--accent-cyan)] rounded">
                      {m}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-[rgba(255,255,255,0.03)] border border-[var(--border-color)] text-[0.55rem] font-mono text-[var(--text-muted)] rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-3">
                  {project.demo !== "#" && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="hover-icon-slide flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-blue)] text-white text-[0.6rem] font-medium rounded-lg transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                      <ExternalLink size={12} className="icon-arrow" /> Live Demo
                    </a>
                  )}
                  <a href={project.github || "#"} target="_blank" rel="noopener noreferrer"
                    className="hover-icon-slide flex items-center gap-1.5 px-3 py-1.5 glass text-[var(--text-muted)] text-[0.6rem] font-medium rounded-lg transition-all hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)]">
                    <GitBranch size={12} className="icon-arrow" /> GitHub
                  </a>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-t from-[rgba(6,182,212,0.03)] to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
