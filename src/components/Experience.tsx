"use client";

import { useEffect, useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
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
      id="experience"
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-[var(--bg-secondary)] overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--accent-emerald)] opacity-[0.015] blur-[120px] rounded-full" />
      <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-[var(--accent-indigo)] opacity-[0.015] blur-[100px] rounded-full" />

      <div className="section-container">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4 reveal">
          <span className="w-12 h-px bg-gradient-to-r from-transparent via-[var(--accent-emerald)] to-[var(--accent-emerald)] opacity-50" />
          <span className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-[var(--accent-emerald)] font-medium">
            02 — Experience
          </span>
        </div>

        <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-[-0.02em] mb-14 md:mb-20 reveal">
          Where I&apos;ve <span className="gradient-text">Contributed</span>
        </h2>

        {/* Timeline */}
        <div className="relative pl-10 md:pl-0 reveal-left">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent-emerald)] via-[var(--accent-indigo)] to-transparent" />

          <div className="relative mb-14 pl-8 md:pl-14 stagger-children">
            <div className="absolute left-[-1.1rem] md:left-[0.65rem] top-1.5 w-3 h-3 rounded-full bg-[var(--accent-emerald)] shadow-[0_0_16px_rgba(16,185,129,0.5)] ring-[3px] ring-[var(--bg-secondary)]" />

            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-7 md:p-9 transition-all duration-400 hover:border-[rgba(16,185,129,0.2)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
              <div className="flex items-center gap-2.5 mb-2">
                <Briefcase size={15} className="text-[var(--accent-emerald)]" />
                <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-[var(--accent-emerald)] font-medium">
                  Internship
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-bold mb-1.5">
                Full Stack Developer Intern
              </h3>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-1 mb-5">
                <span className="text-sm text-[var(--text-secondary)] font-medium">
                  S2S Web Solutions · Karimnagar, Telangana
                </span>
                <span className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-mono">
                  <Calendar size={12} />
                  Aug 2025 – May 2026
                </span>
              </div>

              <ul className="space-y-3.5">
                {[
                  "Developed and deployed a production-ready, responsive multi-page corporate web application for MSV Technologies using Angular and TypeScript — actively serving live end-users in real-time.",
                  "Architected a modular, reusable Angular UI component library based on component-driven architecture, reducing code redundancy by approximately 30% and substantially improving application scalability.",
                  "Designed and integrated RESTful API endpoints using Node.js and Express.js to power dynamic content delivery across six pages, ensuring efficient client-server communication.",
                  "Engineered cross-browser-compatible interfaces using Bootstrap 5 and CSS3; validated across Chrome, Firefox, Edge, and Safari for a consistent user experience on all platforms.",
                  "Implemented mobile-first responsive design and managed version control through Git branching and GitHub pull-request workflows throughout the complete project SDLC.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-[var(--text-secondary)] leading-relaxed"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent-emerald)] opacity-50 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="text-center mt-10 reveal">
          <span className="inline-flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.2em] uppercase text-[var(--text-muted)] bg-[var(--bg-card)] border border-[var(--border-color)] px-5 py-2.5 rounded-full">
            Currently seeking full-time opportunities
          </span>
        </div>
      </div>
    </section>
  );
}
