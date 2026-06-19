"use client";

import { useEffect, useRef } from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";

const certifications = [
  {
    title: "Internship Completion Certificate — Full Stack Web Development",
    issuer: "S2S Web Solutions Pvt. Ltd.",
    date: "Aug 2025 – May 2026",
    description:
      "Successfully completed a full-stack web development internship encompassing Angular, Node.js, Express.js, and MySQL. Independently designed, built, and deployed a production-grade corporate website serving live end-users in a real-world environment.",
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
      id="certifications"
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-[var(--bg-secondary)] overflow-hidden"
    >
      <div className="absolute -top-40 right-0 w-[400px] h-[400px] bg-[var(--accent-emerald)] opacity-[0.015] blur-[120px] rounded-full" />

      <div className="section-container">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4 reveal">
          <span className="w-12 h-px bg-gradient-to-r from-transparent via-[var(--accent-emerald)] to-[var(--accent-emerald)] opacity-50" />
          <span className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-[var(--accent-emerald)] font-medium">
            06 — Certifications
          </span>
        </div>

        <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-[-0.02em] mb-14 md:mb-20 reveal">
          Verified <span className="gradient-text">Credentials</span>
        </h2>

        <div className="max-w-2xl reveal-left">
          {certifications.map((cert, i) => (
            <div
              key={cert.title}
              className="group relative bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-7 md:p-9 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
              style={{
                opacity: 0,
                transform: "translateY(24px)",
                animation: `cardFadeIn 0.5s ease ${i * 0.12}s forwards`,
              }}
            >
              {/* Top gradient border */}
              <div className="h-1.5 bg-gradient-to-r from-[var(--accent-emerald)] to-[var(--accent-indigo)] absolute top-0 left-0 right-0 rounded-t-xl" />

              <div className="flex items-start gap-4 mb-4 mt-3">
                <div className="w-12 h-12 rounded-xl bg-[rgba(16,185,129,0.1)] flex items-center justify-center flex-shrink-0">
                  <Award size={22} className="text-[var(--accent-emerald)]" />
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

              <div className="flex items-center gap-2 mb-4 ml-16">
                <Calendar size={14} className="text-[var(--text-muted)]" />
                <span className="font-mono text-xs text-[var(--text-muted)]">
                  {cert.date}
                </span>
              </div>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 ml-16">
                {cert.description}
              </p>

              <div className="ml-16">
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[rgba(16,185,129,0.08)] border border-[rgba(16,185,129,0.2)] text-xs font-medium text-[var(--accent-emerald)] transition-all duration-300 hover:bg-[rgba(16,185,129,0.15)] hover:border-[var(--accent-emerald)] hover:-translate-y-0.5"
                >
                  <ExternalLink size={14} />
                  Verify Credential
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
