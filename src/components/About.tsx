"use client";

import { useRef, useEffect } from "react";
import { Code2, Brain, Sparkles, Trophy } from "lucide-react";

const stats = [
  {
    icon: Code2,
    value: "3+",
    label: "Projects Delivered",
    color: "text-[var(--accent-cyan)]",
  },
  {
    icon: Brain,
    value: "Angular",
    label: "Primary Framework",
    color: "text-[var(--accent-purple)]",
  },
  {
    icon: Sparkles,
    value: "AI/ML",
    label: "Specialization",
    color: "text-[var(--accent-gold)]",
  },
  {
    icon: Trophy,
    value: "10.0",
    label: "SSC CGPA",
    color: "text-[var(--accent-rose)]",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-purple)] opacity-[0.03] blur-[100px] rounded-full" />

      <div className="section-container">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4 reveal">
          <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-[var(--accent-cyan)]">
            01 — About
          </span>
          <span className="w-8 h-px bg-[var(--accent-cyan)] opacity-30" />
        </div>

        <h2 className="text-[clamp(1.5rem,3.5vw,2.8rem)] font-black tracking-[-0.02em] mb-12 md:mb-16 reveal">
          Who <span className="gradient-text">I Am</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Bio text */}
          <div ref={textRef} className="space-y-4 reveal-left">
            <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
              I&apos;m <strong className="text-[var(--text-primary)]">Bandari Sanjay Kumar</strong>, a Computer Science & Engineering
              graduate specializing in <strong className="text-[var(--accent-cyan)]">AI & Machine Learning</strong> from Vaageswari
              College of Engineering, Karimnagar.
            </p>
            <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
              My technical expertise spans <strong className="text-[var(--text-primary)]">full-stack web development</strong> and
              applied AI/ML — combining front-end proficiency in Angular, HTML5, CSS3, and TypeScript with
              solid back-end capability in Node.js, Express.js, and MySQL.
            </p>
            <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
              At S2S Web Solutions, I independently designed, built, and deployed a production-grade web
              application for a real client — demonstrating complete SDLC ownership from wireframe through
              live deployment. In parallel, I applied Python and deep learning to engineer an accident severity
              prediction system achieving <strong className="text-[var(--accent-gold)]">85%+ model accuracy</strong>.
            </p>
            <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
              I write clean, maintainable code, collaborate naturally within Agile teams, and take full
              ownership of every deliverable.
            </p>
          </div>

          {/* Stats grid */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 gap-4 reveal-right"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="group relative p-5 md:p-6 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl transition-all duration-300 hover:border-[var(--accent-cyan)] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,229,255,0.05)]"
                >
                  <Icon
                    size={20}
                    className={`${stat.color} mb-3 transition-transform group-hover:scale-110`}
                  />
                  <div className={`text-2xl md:text-3xl font-black tracking-tight ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-[var(--text-muted)] font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
