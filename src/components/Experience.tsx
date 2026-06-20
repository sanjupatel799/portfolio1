"use client";

const tags = ["Angular", "Node.js", "Express.js", "MySQL", "REST APIs", "Git"];

export default function Experience() {
  return (
    <section id="experience" className="relative py-36 md:py-44 bg-[var(--bg-secondary)] overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col items-center">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="flex justify-center">
              <span className="section-label">Experience</span>
            </div>
            <h2 className="section-title">
              Internship <span className="gradient-text">Journey</span>
            </h2>
          </div>

          {/* Centered card */}
          <div className="w-full max-w-2xl">
            <div
              className="hover-card-glow glass rounded-xl p-12 flex flex-col items-center gap-6 transition-all duration-300 hover:-translate-y-0.5 text-center"
              style={{ animation: "fadeInUp 0.6s ease forwards" }}
            >
              {/* Header */}
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-lg font-bold">Full Stack Developer Intern</h3>
                <span className="inline-block font-mono text-[0.5rem] tracking-[0.15em] uppercase text-[var(--accent-orange)] font-medium px-3 py-1 glass rounded-full">
                  S2S Web Solutions
                </span>
              </div>

              <p className="font-mono text-[0.65rem] text-[var(--text-muted)]">
                Karimnagar · Aug 2025 – May 2026
              </p>

              <ul className="w-full space-y-4 text-left">
                {["Built the MSV Technologies website from scratch using Angular and TypeScript.",
                  "Developed backend APIs using Node.js and Express.js.",
                  "Worked with Git branching workflows and GitHub collaboration.",
                  "Participated in deployment and production testing.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent-orange)] opacity-50 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap justify-center gap-3">
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
