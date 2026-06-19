"use client";

import { useRef, useEffect } from "react";
import { Code2, Brain, Sparkles, Trophy } from "lucide-react";

const stats = [
  {
    icon: Code2,
    value: "3+",
    label: "Production Projects",
    color: "text-[var(--accent-emerald)]",
    desc: "End-to-end solutions delivered",
  },
  {
    icon: Brain,
    value: "Angular",
    label: "Primary Framework",
    color: "text-[var(--accent-indigo)]",
    desc: "Component-driven architecture",
  },
  {
    icon: Sparkles,
    value: "AI/ML",
    label: "Core Specialization",
    color: "text-[var(--accent-amber)]",
    desc: "Deep learning & predictive models",
  },
  {
    icon: Trophy,
    value: "10.0",
    label: "Perfect CGPA",
    color: "text-[var(--accent-rose)]",
    desc: "SSC Board of Education",
  },
];

export default function About() {
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
      ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 md:py-36 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent-indigo)] opacity-[0.02] blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[var(--accent-emerald)] opacity-[0.015] blur-[100px] rounded-full" />

      <div className="section-container">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4 reveal">
          <span className="w-12 h-px bg-gradient-to-r from-transparent via-[var(--accent-emerald)] to-[var(--accent-emerald)] opacity-50" />
          <span className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-[var(--accent-emerald)] font-medium">
            01 — About
          </span>
        </div>

        <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-[-0.02em] mb-14 md:mb-20 reveal">
          Beyond the <span className="gradient-text">Code</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-start">
          {/* Bio */}
          <div className="space-y-5 reveal-left">
            <p className="text-sm md:text-[0.95rem] text-[var(--text-secondary)] leading-[1.85]">
              I am <strong className="text-[var(--text-primary)]">Bandari Sanjay Kumar</strong>, a Computer Science & Engineering
              graduate specializing in <strong className="text-[var(--accent-emerald)]">Artificial Intelligence & Machine Learning</strong>{" "}
              at Vaageswari College of Engineering, Karimnagar. My work sits at the confluence of
              production-grade full-stack development and applied AI research.
            </p>
            <p className="text-sm md:text-[0.95rem] text-[var(--text-secondary)] leading-[1.85]">
              Across the front-end, I architect modular Angular applications with TypeScript, Bootstrap 5,
              and responsive, mobile-first design principles. On the back end, I design RESTful APIs with
              Node.js, Express.js, and MySQL — delivering clean, maintainable systems built to scale.
            </p>
            <p className="text-sm md:text-[0.95rem] text-[var(--text-secondary)] leading-[1.85]">
              During my internship at <strong className="text-[var(--text-primary)]">S2S Web Solutions</strong>, I owned the full SDLC
              of a client-facing production application — from wireframe to live deployment. In parallel,
              I engineered a deep learning model for road-accident severity prediction, achieving{" "}
              <strong className="text-[var(--accent-amber)]">85%+ validation accuracy</strong> across 10,000+ records.
            </p>
            <p className="text-sm md:text-[0.95rem] text-[var(--text-secondary)] leading-[1.85]">
              I write code that respects both the machine and the human who reads it. I collaborate
              naturally within Agile teams, communicate technical decisions with clarity, and take
              uncompromising ownership of every deliverable.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-5 reveal-right">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="group relative p-6 md:p-7 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl transition-all duration-400 hover:border-[var(--accent-emerald)] hover:-translate-y-1.5 hover:shadow-[0_0_40px_rgba(16,185,129,0.06)]"
                >
                  <Icon
                    size={22}
                    className={`${stat.color} mb-4 transition-transform duration-300 group-hover:scale-110`}
                  />
                  <div
                    className={`text-2xl md:text-3xl font-black tracking-tight ${stat.color} mb-1`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-[var(--text-muted)] font-semibold uppercase tracking-wider mb-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[0.65rem] text-[var(--text-muted)] opacity-60">
                    {stat.desc}
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
