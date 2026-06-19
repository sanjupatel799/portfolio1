"use client";

const education = [
  {
    year: "2022 – 2026",
    degree: "B.Tech CSE (AI & ML)",
    school: "Vaageswari College of Engineering, Karimnagar",
    score: "CGPA: 7.0",
    tag: "AI & ML",
  },
  {
    year: "2020 – 2022",
    degree: "Intermediate (MPC)",
    school: "Vidwan Junior College, Hanamkonda",
    score: "CGPA: 7.1",
    tag: "MPC",
  },
  {
    year: "2019 – 2020",
    degree: "SSC",
    school: "Vidyodaya High School, Jammikunta, Karimnagar",
    score: "CGPA: 10.0",
    tag: "Perfect GPA",
    highlight: true,
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-36 md:py-44 bg-[var(--bg-secondary)] overflow-hidden">
      <div className="section-container">
        <div>
          <span className="section-label">Education</span>
        </div>
        <h2 className="section-title">
          Academic <span className="gradient-text">Journey</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <div
              key={edu.year}
              className="glass rounded-xl p-8 md:p-9 transition-all duration-300 hover:border-[var(--accent-cyan)] hover:glow-cyan hover:-translate-y-1"
              style={{ animation: `fadeInUp 0.5s ease ${i * 0.12}s forwards`, opacity: 0 }}
            >
              <span className="font-mono text-[0.55rem] tracking-[0.1em] text-[var(--accent-cyan)] mb-2 block font-medium">
                {edu.year}
              </span>
              <h3 className="text-base font-bold mb-2 leading-snug">
                {edu.degree}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                {edu.school}
              </p>
              <div className="flex items-center justify-between">
                <span className={`font-mono text-xs ${edu.highlight ? "text-[var(--accent-cyan)] font-bold" : "text-[var(--text-muted)]"}`}>
                  {edu.score}
                </span>
                <span className={`px-2.5 py-1 text-[0.5rem] font-mono rounded ${edu.highlight ? "bg-[rgba(6,182,212,0.1)] border border-[rgba(6,182,212,0.2)] text-[var(--accent-cyan)]" : "bg-[rgba(255,255,255,0.03)] border border-[var(--border-color)] text-[var(--text-muted)]"}`}>
                  {edu.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
