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
  "Perfect CGPA of 10.0 / 10.0 in SSC Board Examinations — highest possible academic score",
  "Production-deployed MSV Technologies website during internship — actively serving real end-user traffic",
  "Major research project shortlisted for departmental review and formal institutional academic presentation (2025)",
  "Delivered three end-to-end software projects independently, covering the full SDLC from requirement analysis to deployment",
];

export default function Education() {
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
      id="education"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute -top-40 left-0 w-[400px] h-[400px] bg-[var(--accent-gold)] opacity-[0.02] blur-[100px] rounded-full" />

      <div className="section-container">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4 reveal">
          <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-[var(--accent-cyan)]">
            05 — Education
          </span>
          <span className="w-8 h-px bg-[var(--accent-cyan)] opacity-30" />
        </div>

        <h2 className="text-[clamp(1.5rem,3.5vw,2.8rem)] font-black tracking-[-0.02em] mb-12 md:mb-16 reveal">
          Academic <span className="gradient-text">Journey</span>
        </h2>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-0 max-w-2xl reveal-left">
          <div className="absolute left-3 md:left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent-cyan)] via-[var(--accent-purple)] to-[var(--accent-gold)]" />

          {education.map((edu, i) => (
            <div
              key={edu.year}
              className="relative mb-10 pl-6 md:pl-10 last:mb-0"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                animation: `eduFadeIn 0.5s ease ${i * 0.15}s forwards`,
              }}
            >
              {/* Dot */}
              <div
                className={`absolute -left-[1.35rem] md:left-[-0.65rem] top-1 w-2.5 h-2.5 rounded-full shadow-[0_0_12px_rgba(0,229,255,0.3)] ${
                  edu.highlight
                    ? "bg-[var(--accent-gold)]"
                    : "bg-[var(--accent-cyan)]"
                }`}
              />

              <div
                className={`bg-[var(--bg-card)] border rounded-xl p-5 md:p-6 transition-all duration-300 hover:-translate-y-0.5 ${
                  edu.highlight
                    ? "border-[rgba(245,158,11,0.2)] hover:border-[rgba(245,158,11,0.4)]"
                    : "border-[var(--border-color)] hover:border-[rgba(0,229,255,0.15)]"
                }`}
              >
                {/* Year */}
                <span className="font-mono text-[0.65rem] tracking-[0.1em] text-[var(--accent-cyan)] mb-1 block">
                  {edu.year}
                </span>

                {/* Degree */}
                <h3 className="text-base md:text-lg font-bold mb-1">
                  {edu.degree}
                  {edu.highlight && (
                    <Award
                      size={16}
                      className="inline-block ml-2 text-[var(--accent-gold)] -mt-1"
                    />
                  )}
                </h3>

                {/* School */}
                <p className="text-sm text-[var(--text-secondary)] mb-1">
                  {edu.school}
                </p>

                {/* Score */}
                <span
                  className={`font-mono text-xs ${
                    edu.highlight
                      ? "text-[var(--accent-gold)]"
                      : "text-[var(--text-muted)]"
                  }`}
                >
                  {edu.score}
                </span>

                {/* Details */}
                {edu.details.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {edu.details.map((detail, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-xs text-[var(--text-muted)]"
                      >
                        <span className="mt-1 w-1 h-1 rounded-full bg-[var(--accent-cyan)] opacity-40 flex-shrink-0" />
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
        <div className="mt-16 reveal">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap size={18} className="text-[var(--accent-gold)]" />
            <span className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-[var(--accent-gold)]">
              Key Achievements
            </span>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {achievements.map((achievement, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg transition-all duration-300 hover:border-[rgba(245,158,11,0.2)]"
                style={{
                  opacity: 0,
                  transform: "translateY(15px)",
                  animation: `eduFadeIn 0.5s ease ${(i + 3) * 0.1}s forwards`,
                }}
              >
                <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] flex-shrink-0" />
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
