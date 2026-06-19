"use client";

import { useEffect, useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    year: "2022 — 2026",
    degree: "B.Tech — Computer Science & Engineering (AI & ML)",
    school: "Vaageswari College of Engineering, Karimnagar, Telangana",
    score: "CGPA: 7.0 / 10.0",
    details: [
      "Specialization in AI & ML: Deep Learning, Neural Networks, NLP, Data Mining, Computer Vision",
      "Completed multiple software projects applying academic knowledge to real-world development",
    ],
  },
  {
    year: "2020 — 2022",
    degree: "Intermediate — MPC",
    school: "Vidwan Junior College, Hanamkonda, Telangana",
    score: "CGPA: 7.1 / 10.0",
    details: ["Mathematics, Physics & Chemistry stream"],
  },
  {
    year: "2019 — 2020",
    degree: "Secondary School Certificate (SSC)",
    school: "Vidyodaya High School, Jammikunta, Karimnagar",
    score: "CGPA: 10.0 / 10.0",
    details: ["Perfect Score — Board of Secondary Education, Telangana"],
    highlight: true,
  },
];

const achievements = [
  "Achieved perfect CGPA of 10.0 / 10.0 in SSC Board Examinations — the highest possible academic score",
  "Production-deployed MSV Technologies website during internship — actively serving real end-user traffic with zero downtime",
  "Major research project on AI literacy shortlisted for formal institutional presentation and departmental review (2025)",
  "Delivered three end-to-end software projects independently, covering the full SDLC from requirements analysis through deployment",
];

export default function Education() {
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
      id="education"
      ref={sectionRef}
      className="relative py-28 md:py-36 overflow-hidden"
    >
      <div className="absolute -top-40 left-0 w-[400px] h-[400px] bg-[var(--accent-amber)] opacity-[0.02] blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[var(--accent-emerald)] opacity-[0.015] blur-[100px] rounded-full" />

      <div className="section-container">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4 reveal">
          <span className="w-12 h-px bg-gradient-to-r from-transparent via-[var(--accent-emerald)] to-[var(--accent-emerald)] opacity-50" />
          <span className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-[var(--accent-emerald)] font-medium">
            05 — Education
          </span>
        </div>

        <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-[-0.02em] mb-14 md:mb-20 reveal">
          Academic <span className="gradient-text">Foundation</span>
        </h2>

        {/* Timeline */}
        <div className="relative pl-10 md:pl-0 max-w-2xl reveal-left">
          <div className="absolute left-4 md:left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent-emerald)] via-[var(--accent-indigo)] to-[var(--accent-amber)]" />

          {education.map((edu, i) => (
            <div
              key={edu.year}
              className="relative mb-12 pl-8 md:pl-10 last:mb-0"
              style={{
                opacity: 0,
                transform: "translateY(24px)",
                animation: `eduFadeIn 0.5s ease ${i * 0.15}s forwards`,
              }}
            >
              {/* Dot */}
              <div
                className={`absolute -left-[1.1rem] md:left-[-0.65rem] top-1.5 w-3 h-3 rounded-full ring-[3px] ring-[var(--bg-primary)] shadow-[0_0_16px_rgba(16,185,129,0.3)] ${
                  edu.highlight
                    ? "bg-[var(--accent-amber)]"
                    : "bg-[var(--accent-emerald)]"
                }`}
              />

              <div
                className={`bg-[var(--bg-card)] border rounded-xl p-6 md:p-7 transition-all duration-400 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] ${
                  edu.highlight
                    ? "border-[rgba(245,158,11,0.2)] hover:border-[rgba(245,158,11,0.35)]"
                    : "border-[var(--border-color)] hover:border-[rgba(16,185,129,0.15)]"
                }`}
              >
                <span className="font-mono text-[0.6rem] tracking-[0.15em] text-[var(--accent-emerald)] mb-1.5 block font-medium">
                  {edu.year}
                </span>

                <h3 className="text-base md:text-lg font-bold mb-1">
                  {edu.degree}
                  {edu.highlight && (
                    <Award
                      size={16}
                      className="inline-block ml-2 text-[var(--accent-amber)] -mt-1"
                    />
                  )}
                </h3>

                <p className="text-sm text-[var(--text-secondary)] mb-1">
                  {edu.school}
                </p>

                <span
                  className={`font-mono text-xs ${
                    edu.highlight
                      ? "text-[var(--accent-amber)]"
                      : "text-[var(--text-muted)]"
                  }`}
                >
                  {edu.score}
                </span>

                {edu.details.length > 0 && (
                  <ul className="mt-3.5 space-y-1.5">
                    {edu.details.map((detail, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-xs text-[var(--text-muted)] leading-relaxed"
                      >
                        <span className="mt-1 w-1 h-1 rounded-full bg-[var(--accent-emerald)] opacity-40 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mt-20 reveal">
          <div className="flex items-center gap-3 mb-7">
            <GraduationCap size={18} className="text-[var(--accent-amber)]" />
            <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-[var(--accent-amber)] font-medium">
              Key Achievements
            </span>
          </div>
          <div className="grid sm:grid-cols-2 gap-3.5">
            {achievements.map((achievement, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg transition-all duration-300 hover:border-[rgba(245,158,11,0.2)] hover:-translate-y-0.5"
                style={{
                  opacity: 0,
                  transform: "translateY(15px)",
                  animation: `eduFadeIn 0.5s ease ${(i + 3) * 0.1}s forwards`,
                }}
              >
                <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-[var(--accent-amber)] flex-shrink-0" />
                <span className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {achievement}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
