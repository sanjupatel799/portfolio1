"use client";

import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    type: "Production Application",
    typeColor: "text-[var(--accent-emerald)]",
    name: "MSV Technologies Corporate Website",
    description:
      "Engineered a dynamic, responsive corporate web presence featuring six pages — Home, Services, Contact, Blogs, Career, and Development — built with Angular&apos;s component-based architecture. Implemented lazy loading, efficient routing, and mobile-first responsive design for a seamless experience across all devices and browsers.",
    tags: ["Angular", "TypeScript", "HTML5", "CSS3", "Bootstrap 5"],
    link: "https://s2swebsolutions.in/msv",
    accent: "from-[var(--accent-emerald)] to-[var(--accent-indigo)]",
  },
  {
    type: "Deep Learning — Applied Research",
    typeColor: "text-[var(--accent-amber)]",
    name: "Road Accident Severity Prediction & Hospital Recommendation",
    description:
      "Developed a deep learning multi-class classifier trained on over 10,000 records to predict accident severity across three levels — low, moderate, and critical — achieving 85%+ validation accuracy through rigorous feature engineering and hyperparameter optimization. Built a complete preprocessing pipeline with an integrated geolocation-based hospital recommendation module.",
    tags: ["Python", "Deep Learning", "Scikit-learn", "Pandas", "NumPy"],
    link: "#",
    accent: "from-[var(--accent-amber)] to-[var(--accent-rose)]",
  },
  {
    type: "Major Research Initiative",
    typeColor: "text-[var(--accent-indigo)]",
    name: "AI Literacy & Student Readiness Analysis",
    description:
      "Conducted a survey of 200+ engineering students to quantify artificial intelligence literacy and identify three critical curriculum gaps. Applied statistical correlation analysis and NLP-based text analysis to extract meaningful patterns from qualitative data. Delivered an evidence-based research report with actionable recommendations for AI education reform.",
    tags: ["Python", "Statistical Analysis", "NLP", "Data Viz", "Survey Design"],
    link: "#",
    accent: "from-[var(--accent-indigo)] to-[var(--accent-emerald)]",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
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
      className="relative py-28 md:py-36 bg-[var(--bg-secondary)] overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent-amber)] opacity-[0.015] blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[var(--accent-emerald)] opacity-[0.015] blur-[100px] rounded-full" />

      <div className="section-container">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4 reveal">
          <span className="w-12 h-px bg-gradient-to-r from-transparent via-[var(--accent-emerald)] to-[var(--accent-emerald)] opacity-50" />
          <span className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-[var(--accent-emerald)] font-medium">
            04 — Projects
          </span>
        </div>

        <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-[-0.02em] mb-14 md:mb-20 reveal">
          What I&apos;ve <span className="gradient-text">Delivered</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className="group relative bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                animation: `cardFadeIn 0.7s ease ${i * 0.12}s forwards`,
              }}
            >
              {/* Top gradient bar */}
              <div
                className={`h-1.5 bg-gradient-to-r ${project.accent}`}
              />

              <div className="p-7 md:p-8">
                {/* Type badge */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`font-mono text-[0.55rem] tracking-[0.2em] uppercase ${project.typeColor} font-medium`}
                  >
                    {project.type}
                  </span>
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-muted)] hover:text-[var(--accent-emerald)] transition-colors duration-300 hover:-translate-y-0.5 inline-block"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-3 leading-snug transition-colors duration-300 group-hover:text-[var(--accent-emerald)]">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 line-clamp-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-[rgba(16,185,129,0.05)] border border-[rgba(16,185,129,0.1)] text-[0.6rem] font-mono text-[var(--text-muted)] rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-t from-[rgba(16,185,129,0.03)] to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
