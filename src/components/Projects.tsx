"use client";

import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    type: "Production App",
    typeColor: "text-[var(--accent-cyan)]",
    name: "MSV Technologies Corporate Website",
    description:
      "Designed and developed a dynamic responsive corporate website with 6+ pages (Home, Services, Contact, Blogs, Career, Development) using Angular and component-based architecture. Implemented performance optimization techniques including lazy loading and efficient routing.",
    tags: ["Angular", "TypeScript", "HTML5", "CSS3", "Bootstrap 5"],
    link: "https://s2swebsolutions.in/msv",
    accent: "from-[var(--accent-cyan)] to-[var(--accent-purple)]",
  },
  {
    type: "Deep Learning — Mini Project",
    typeColor: "text-[var(--accent-gold)]",
    name: "Road Accident Severity Prediction & Hospital Recommendation",
    description:
      "Trained a deep learning multi-class classifier on 10,000+ records to predict accident severity (low/moderate/critical) achieving 85%+ validation accuracy via feature engineering and hyperparameter tuning. Built end-to-end preprocessing pipeline with geolocation-based hospital recommendation.",
    tags: ["Python", "Deep Learning", "Scikit-learn", "Pandas", "NumPy"],
    link: "#",
    accent: "from-[var(--accent-gold)] to-[var(--accent-rose)]",
  },
  {
    type: "Major Research Project",
    typeColor: "text-[var(--accent-purple)]",
    name: "AI Literacy & Student Readiness Analysis",
    description:
      "Surveyed 200+ engineering students to quantify AI literacy and identify 3 critical curriculum gaps; applied statistical correlation analysis and NLP-based text analysis. Delivered research report with evidence-based recommendations for AI education reform.",
    tags: ["Python", "Statistical Analysis", "NLP", "Data Viz", "Survey Design"],
    link: "#",
    accent: "from-[var(--accent-purple)] to-[var(--accent-cyan)]",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .stagger-children"
    );
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[var(--bg-secondary)] overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-rose)] opacity-[0.02] blur-[100px] rounded-full" />

      <div className="section-container">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4 reveal">
          <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-[var(--accent-cyan)]">
            04 — Projects
          </span>
          <span className="w-8 h-px bg-[var(--accent-cyan)] opacity-30" />
        </div>

        <h2 className="text-[clamp(1.5rem,3.5vw,2.8rem)] font-black tracking-[-0.02em] mb-12 md:mb-16 reveal">
          What I&apos;ve <span className="gradient-text">Built</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className="group relative bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                animation: `cardFadeIn 0.6s ease ${i * 0.12}s forwards`,
              }}
            >
              {/* Top gradient bar */}
              <div
                className={`h-1 bg-gradient-to-r ${project.accent}`}
              />

              <div className="p-6 md:p-7">
                {/* Type badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`font-mono text-[0.6rem] tracking-[0.15em] uppercase ${project.typeColor}`}
                  >
                    {project.type}
                  </span>
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-3 leading-snug group-hover:text-[var(--accent-cyan)] transition-colors duration-300">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5 line-clamp-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-[rgba(0,229,255,0.05)] border border-[rgba(0,229,255,0.1)] text-[0.65rem] font-mono text-[var(--text-muted)] rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-t from-[rgba(0,229,255,0.03)] to-transparent" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
