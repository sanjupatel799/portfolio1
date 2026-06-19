"use client";

import { useEffect, useRef } from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";

const certifications = [
  {
    title: "Internship Completion Certificate — Full Stack Web Development",
    issuer: "S2S Web Solutions Pvt. Ltd.",
    date: "Aug 2025 — May 2026",
    description:
      "Completed full-stack web development internship encompassing Angular, Node.js, Express.js, and MySQL. Independently designed, built, and deployed a production-grade corporate website serving live end-users.",
    verifyUrl:
      "https://drive.google.com/file/d/1TuIGkUGl3ZJHMxRd8Kgs0lUW9fy2s-OJ/view",
  },
];

export default function Certifications() {
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
      id="certifications"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute -top-40 right-0 w-[400px] h-[400px] bg-[var(--accent-cyan)] opacity-[0.02] blur-[100px] rounded-full" />

      <div className="section-container">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4 reveal">
          <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-[var(--accent-cyan)]">
            06 — Certifications
          </span>
          <span className="w-8 h-px bg-[var(--accent-cyan)] opacity-30" />
        </div>

        <h2 className="text-[clamp(1.5rem,3.5vw,2.8rem)] font-black tracking-[-0.02em] mb-12 md:mb-16 reveal">
          Verified <span className="gradient-text">Credentials</span>
        </h2>

        <div className="max-w-2xl reveal-left">
          {certifications.map((cert, i) => (
            <div
              key={cert.title}
              className="group relative bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-6 md:p-8 transition-all duration-300 hover:border-[rgba(0,229,255,0.2)] hover:-translate-y-0.5"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                animation: `cardFadeIn 0.5s ease ${i * 0.12}s forwards`,
              }}
            >
              {/* Top gradient border */}
              <div className="h-1 bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] absolute top-0 left-0 right-0 rounded-t-xl" />

              <div className="flex items-start gap-3 mb-4 mt-2">
                <div className="w-10 h-10 rounded-lg bg-[rgba(0,229,255,0.1)] flex items-center justify-center flex-shrink-0">
                  <Award size={20} className="text-[var(--accent-cyan)]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Calendar size={14} className="text-[var(--text-muted)]" />
                <span className="font-mono text-xs text-[var(--text-muted)]">
                  {cert.date}
                </span>
              </div>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                {cert.description}
              </p>

              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.15)] text-xs font-medium text-[var(--accent-cyan)] transition-all duration-300 hover:bg-[rgba(0,229,255,0.15)] hover:border-[var(--accent-cyan)] group"
              >
                <ExternalLink size={14} />
                Verify Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
