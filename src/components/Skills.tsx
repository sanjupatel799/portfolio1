"use client";

import { useEffect, useRef } from "react";

const skillGroups = [
  {
    title: "Languages",
    accent: "accent-emerald",
    skills: ["Python", "C", "JavaScript (ES6+)", "TypeScript"],
  },
  {
    title: "Front-End Engineering",
    accent: "accent-indigo",
    skills: [
      "HTML5 & CSS3",
      "Angular",
      "Bootstrap 5",
      "Responsive Design",
      "Cross-Browser Compat.",
    ],
  },
  {
    title: "Back-End & API Design",
    accent: "accent-amber",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "MVC Architecture",
      "Middleware",
    ],
  },
  {
    title: "Databases & Data",
    accent: "accent-rose",
    skills: [
      "MySQL",
      "SQL",
      "CRUD Operations",
      "Relational DB Design",
      "Query Optimization",
    ],
  },
  {
    title: "AI / Machine Learning",
    accent: "accent-emerald",
    skills: [
      "Deep Learning",
      "Neural Networks",
      "Scikit-learn",
      "Pandas & NumPy",
      "Data Preprocessing",
      "NLP",
    ],
  },
  {
    title: "Tools & Practices",
    accent: "accent-indigo",
    skills: [
      "Git & GitHub",
      "VS Code",
      "Postman",
      "Agile SDLC",
      "Debugging",
      "Performance Opt.",
    ],
  },
];

const colorMap: Record<string, string> = {
  "accent-emerald":
    "border-[rgba(16,185,129,0.2)] bg-[rgba(16,185,129,0.06)] text-[var(--accent-emerald)] hover:bg-[rgba(16,185,129,0.14)]",
  "accent-indigo":
    "border-[rgba(99,102,241,0.2)] bg-[rgba(99,102,241,0.06)] text-[var(--accent-indigo)] hover:bg-[rgba(99,102,241,0.14)]",
  "accent-amber":
    "border-[rgba(245,158,11,0.2)] bg-[rgba(245,158,11,0.06)] text-[var(--accent-amber)] hover:bg-[rgba(245,158,11,0.14)]",
  "accent-rose":
    "border-[rgba(244,63,94,0.2)] bg-[rgba(244,63,94,0.06)] text-[var(--accent-rose)] hover:bg-[rgba(244,63,94,0.14)]",
};

function SkillTag({
  name,
  accent,
  index,
}: {
  name: string;
  accent: string;
  index: number;
}) {
  return (
    <span
      className={`inline-block px-3 py-1.5 rounded-lg text-xs font-mono border transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 ${
        colorMap[accent] || colorMap["accent-emerald"]
      }`}
      style={{ transitionDelay: `${index * 30}ms` }}
    >
      {name}
    </span>
  );
}

export default function Skills() {
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
      id="skills"
      ref={sectionRef}
      className="relative py-28 md:py-36 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[var(--accent-indigo)] opacity-[0.015] blur-[140px] rounded-full" />

      <div className="section-container">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4 reveal">
          <span className="w-12 h-px bg-gradient-to-r from-transparent via-[var(--accent-emerald)] to-[var(--accent-emerald)] opacity-50" />
          <span className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-[var(--accent-emerald)] font-medium">
            03 — Skills
          </span>
        </div>

        <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-[-0.02em] mb-14 md:mb-20 reveal">
          Technical <span className="gradient-text">Expertise</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => {
            const accentColor =
              group.accent === "accent-emerald"
                ? "var(--accent-emerald)"
                : group.accent === "accent-indigo"
                  ? "var(--accent-indigo)"
                  : group.accent === "accent-amber"
                    ? "var(--accent-amber)"
                    : "var(--accent-rose)";

            return (
              <div
                key={group.title}
                className="group bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-6 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
                style={{
                  opacity: 0,
                  transform: "translateY(24px)",
                  animation: `fadeInUp 0.6s ease ${i * 0.08}s forwards`,
                  borderColor: `color-mix(in srgb, ${accentColor} 15%, var(--border-color))`,
                }}
              >
                <div
                  className="font-mono text-[0.6rem] tracking-[0.2em] uppercase mb-4 pb-3 border-b"
                  style={{
                    color: accentColor,
                    borderColor: `color-mix(in srgb, ${accentColor} 20%, var(--border-color))`,
                  }}
                >
                  // {group.title}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, j) => (
                    <SkillTag
                      key={skill}
                      name={skill}
                      accent={group.accent}
                      index={j}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
