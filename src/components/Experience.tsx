"use client";

import { useEffect, useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
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

    const elements = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right, .stagger-children");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[var(--bg-secondary)] overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent-cyan)] opacity-[0.02] blur-[100px] rounded-full" />

      <div className="section-container">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4 reveal">
          <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-[var(--accent-cyan)]">
            02 — Experience
          </span>
          <span className="w-8 h-px bg-[var(--accent-cyan)] opacity-30" />
        </div>

        <h2 className="text-[clamp(1.5rem,3.5vw,2.8rem)] font-black tracking-[-0.02em] mb-12 md:mb-16 reveal">
          Where I&apos;ve <span className="gradient-text">Worked</span>
        </h2>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-0 reveal-left">
          {/* Timeline line */}
          <div className="absolute left-3 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent-cyan)] via-[var(--accent-purple)] to-transparent" />

          {/* Experience 1 */}
          <div className="relative mb-12 pl-6 md:pl-12 stagger-children">
            {/* Dot */}
            <div className="absolute left-[-1.35rem] md:left-[0.65rem] top-1 w-2.5 h-2.5 rounded-full bg-[var(--accent-cyan)] shadow-[0_0_12px_rgba(0,229,255,0.5)]" />

            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-6 md:p-8 transition-all duration-300 hover:border-[rgba(0,229,255,0.2)] hover:-translate-y-0.5">
              <div className="flex items-center gap-2 mb-1">
                <Briefcase size={14} className="text-[var(--accent-cyan)]" />
                <span className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-[var(--accent-cyan)]">
                  Internship
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-bold mb-1">
                Full Stack Developer Intern
              </h3>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4">
                <span className="text-sm text-[var(--text-secondary)] font-medium">
                  S2S Web Solutions · Karimnagar, Telangana
                </span>
                <span className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-mono">
                  <Calendar size={12} />
                  Full-time
                </span>
              </div>

              <ul className="space-y-3">
                {[
                  "Developed and deployed a production-ready, responsive multi-page web application for MSV Technologies using Angular and TypeScript — actively serving live end-users.",
                  "Architected a modular, reusable Angular UI component library using component-based architecture, reducing code redundancy by ~30% and improving application scalability.",
                  "Designed and integrated RESTful API endpoints using Node.js and Express.js for dynamic content delivery across 6+ pages.",
                  "Engineered cross-browser-compatible UI using Bootstrap 5 and CSS3; validated across Chrome, Firefox, Edge, and Safari.",
                  "Implemented mobile-first responsive design; managed version control via Git branching and GitHub pull-request workflows throughout the project SDLC.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] opacity-50 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="text-center mt-8 reveal">
          <span className="inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.15em] uppercase text-[var(--text-muted)] bg-[var(--bg-card)] border border-[var(--border-color)] px-4 py-2 rounded-full">
            Open for full-time opportunities
          </span>
        </div>
      </div>
    </section>
  );
}
