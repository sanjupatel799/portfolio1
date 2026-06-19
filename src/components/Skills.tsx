"use client";

import { useEffect, useRef } from "react";

const skillGroups = [
  {
    title: "Languages",
    accent: "accent-cyan",
    skills: ["Python", "C", "JavaScript (ES6+)", "TypeScript"],
  },
  {
    title: "Front-End",
    accent: "accent-purple",
    skills: [
      "HTML5 & CSS3",
      "Angular",
      "Bootstrap 5",
      "Responsive Design",
      "Cross-Browser Compat.",
    ],
  },
  {
    title: "Back-End & APIs",
    accent: "accent-gold",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "MVC Architecture",
      "Middleware",
    ],
  },
  {
    title: "Databases",
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
    accent: "accent-cyan",
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
    accent: "accent-purple",
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
  "accent-cyan":
    "border-[rgba(0,229,255,0.2)] bg-[rgba(0,229,255,0.06)] text-[var(--accent-cyan)] hover:bg-[rgba(0,229,255,0.12)]",
  "accent-purple":
    "border-[rgba(124,58,237,0.2)] bg-[rgba(124,58,237,0.06)] text-[var(--accent-purple)] hover:bg-[rgba(124,58,237,0.12)]",
  "accent-gold":
    "border-[rgba(245,158,11,0.2)] bg-[rgba(245,158,11,0.06)] text-[var(--accent-gold)] hover:bg-[rgba(245,158,11,0.12)]",
  "accent-rose":
    "border-[rgba(244,63,94,0.2)] bg-[rgba(244,63,94,0.06)] text-[var(--accent-rose)] hover:bg-[rgba(244,63,94,0.12)]",
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
      className={`inline-block px-3 py-1.5 rounded-md text-xs font-mono border transition-all duration-200 hover:scale-105 ${colorMap[accent] || colorMap["accent-cyan"]}`}
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
      id="skills"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--accent-purple)] opacity-[0.02] blur-[120px] rounded-full" />

      <div className="section-container">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4 reveal">
          <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-[var(--accent-cyan)]">
            03 — Skills
          </span>
          <span className="w-8 h-px bg-[var(--accent-cyan)] opacity-30" />
        </div>

        <h2 className="text-[clamp(1.5rem,3.5vw,2.8rem)] font-black tracking-[-0.02em] mb-12 reveal">
          Technical <span className="gradient-text">Arsenal</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className="group bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-6 transition-all duration-300 hover:border-[rgba(0,229,255,0.15)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                animation: `fadeInUp 0.6s ease ${i * 0.08}s forwards`,
              }}
            >
              <div
                className={`font-mono text-[0.65rem] tracking-[0.15em] uppercase mb-4 pb-3 border-b border-[var(--border-color)] ${
                  group.accent === "accent-cyan"
                    ? "text-[var(--accent-cyan)]"
                    : group.accent === "accent-purple"
                      ? "text-[var(--accent-purple)]"
                      : group.accent === "accent-gold"
                        ? "text-[var(--accent-gold)]"
                        : "text-[var(--accent-rose)]"
                }`}
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
          ))}
        </div>

      </div>
    </section>
  );
}
