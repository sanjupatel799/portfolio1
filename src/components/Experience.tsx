"use client";

const tags = ["Angular", "Node.js", "Express.js", "MySQL", "REST APIs", "Git"];

export default function Experience() {
  return (
    <section id="experience" className="relative py-36 md:py-44 bg-[var(--bg-secondary)] overflow-hidden">
      <div className="section-container">
        <div>
          <span className="section-label">Experience</span>
        </div>
        <h2 className="section-title">
          Internship <span className="gradient-text">Journey</span>
        </h2>

        <div className="relative pl-8 md:pl-0 max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-3 md:left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent-cyan)] via-[var(--accent-blue)] to-transparent" />

          <div className="relative pl-6 md:pl-10" style={{ animation: "fadeInUp 0.6s ease forwards" }}>
            {/* Dot */}
            <div className="absolute left-[-1.1rem] md:left-[0.15rem] top-2 w-3 h-3 rounded-full bg-[var(--accent-cyan)] shadow-[0_0_12px_rgba(6,182,212,0.5)] ring-[3px] ring-[var(--bg-secondary)]" />

            <div className="glass rounded-xl p-9 transition-all duration-300 hover:border-[var(--accent-cyan)] hover:glow-cyan hover:-translate-y-0.5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold">Full Stack Developer Intern</h3>
                <span className="font-mono text-[0.5rem] tracking-[0.15em] uppercase text-[var(--accent-cyan)] font-medium px-3 py-1 glass rounded-full">
                  S2S Web Solutions
                </span>
              </div>

              <p className="font-mono text-[0.65rem] text-[var(--text-muted)] mb-6">
                Karimnagar · Aug 2025 – May 2026
              </p>

              <ul className="space-y-4 mb-8">
                {["Built the MSV Technologies website from scratch using Angular and TypeScript.",
                  "Developed backend APIs using Node.js and Express.js.",
                  "Worked with Git branching workflows and GitHub collaboration.",
                  "Participated in deployment and production testing.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] opacity-50 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 glass text-[0.55rem] font-mono text-[var(--text-muted)] rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
