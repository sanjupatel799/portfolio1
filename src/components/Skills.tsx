"use client";

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "C", level: 75 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "Angular", level: 85 },
      { name: "HTML5 & CSS3", level: 90 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "REST APIs", level: 80 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "Analytics",
    skills: [
      { name: "Power BI", level: 75 },
      { name: "Microsoft Excel", level: 80 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 80 },
    ],
  },
];

const techTags = [
  "Python", "JavaScript", "TypeScript", "C", "Angular", "Node.js",
  "Express.js", "MySQL", "REST API", "HTML5", "CSS3", "Bootstrap",
  "Git", "Power BI", "Data Analytics", "AI / ML",
];

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  return (
    <div style={{ animation: `fadeInUp 0.5s ease ${index * 0.08 + 0.2}s forwards`, opacity: 0 }}>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-[var(--text-primary)]">{name}</span>
        <span className="text-xs text-[var(--text-muted)] font-mono">{level}%</span>
      </div>
      <div className="w-full h-1.5 bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[var(--accent-orange)] to-[var(--accent-amber)]"
          style={{ width: `${level}%`, animation: `progressFill 1s ease ${index * 0.08 + 0.4}s forwards` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-44 md:py-52 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[var(--accent-orange)] opacity-[0.015] blur-[140px] rounded-full" />

      <div className="section-container">
        <div className="mt-4">
          <span className="section-label">My Skills</span>
        </div>
        <h2 className="section-title">
          Technical <span className="gradient-text">Expertise</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className="glass rounded-xl px-12 py-8 flex flex-col gap-5 transition-all duration-300 hover:border-[var(--accent-orange)] hover:glow-orange hover:-translate-y-1"
              style={{ animation: `fadeInUp 0.5s ease ${i * 0.08}s forwards`, opacity: 0 }}
            >
              <h3 className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-[var(--accent-orange)] font-medium pb-3 border-b border-[var(--border-color)] text-center">
                // {cat.title}
              </h3>
              {cat.skills.map((skill, j) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} index={j} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div>
          <h3 className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-[var(--text-muted)] mb-4 text-center">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techTags.map((tag) => (
              <span key={tag} className="hover-tag-pop px-3.5 py-1.5 glass text-xs font-mono text-[var(--text-secondary)] rounded-md hover:border-[var(--accent-orange)] hover:text-[var(--accent-orange)] hover:glow-orange transition-all duration-200">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`@keyframes progressFill { from { width: 0; } }`}</style>
    </section>
  );
}
