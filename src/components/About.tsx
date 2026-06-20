"use client";

import { useRef, useEffect, useState } from "react";

const counters = [
  { value: 3, suffix: "+", label: "Projects Delivered", color: "text-[var(--accent-cyan)]" },
  { value: 1, suffix: "", label: "Internship Completed", color: "text-[var(--accent-blue)]" },
  { value: 85, suffix: "%+", label: "AI Model Accuracy", color: "text-[var(--accent-teal)]" },
  { value: 2026, suffix: "", label: "Graduate", color: "text-[var(--accent-cyan)]" },
];

function AnimatedCounter({ value, suffix, label, color }: { value: number; suffix: string; label: string; color: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const duration = 2000;
          const steps = 30;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.round(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center p-10 flex flex-col gap-3 glass rounded-xl transition-all duration-300 hover:border-[var(--accent-cyan)] hover:-translate-y-1">
      <div className={`text-2xl md:text-3xl font-black tracking-tight ${color}`}>
        {count}{suffix}
      </div>
      <div className="text-xs text-[var(--text-muted)] font-medium">{label}</div>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("revealed"); }); },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-44 md:py-52 bg-[var(--bg-secondary)] overflow-hidden">
      <div className="section-container">
        <div className="reveal">
          <span className="section-label">About Me</span>
        </div>
        <h2 className="section-title reveal">
          Who <span className="gradient-text">I Am</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
          <div className="reveal-left space-y-4">
            <p className="text-sm md:text-[0.95rem] text-[var(--text-secondary)] leading-[1.9]">
              Computer Science (AI & ML) graduate who enjoys building products end-to-end — from Angular
              frontends to Node.js APIs and MySQL databases. Delivered a live client website during
              internship and developed AI models achieving <strong className="text-[var(--accent-cyan)]">85%+ prediction accuracy</strong>.
            </p>
            <p className="text-sm md:text-[0.95rem] text-[var(--text-secondary)] leading-[1.9]">
              Experienced in the full Software Development Life Cycle, RESTful API development, and
              building AI-driven applications. Comfortable with <strong className="text-[var(--text-primary)]">Power BI</strong> and{" "}
              <strong className="text-[var(--text-primary)]">Excel</strong> for data analysis when needed.
            </p>
            <p className="text-sm md:text-[0.95rem] text-[var(--text-secondary)] leading-[1.9]">
              Looking for a <strong className="text-[var(--accent-cyan)]">Fresher Software Developer</strong> or{" "}
              <strong className="text-[var(--accent-cyan)]">Full Stack Developer</strong> role where I can contribute
              meaningfully from day one.
            </p>
          </div>

          {/* Info card */}
          <div className="reveal-right">
            <div className="hover-card-glow glass rounded-xl p-12 flex flex-col gap-4 text-center">
              <div className="border-b border-[var(--border-color)] pb-4">
                <div className="text-[0.5rem] text-[var(--text-muted)] font-mono tracking-wide uppercase">Name</div>
                <div className="text-sm font-medium text-[var(--text-primary)]">Bandari Sanjay Kumar</div>
              </div>
              <div className="border-b border-[var(--border-color)] pb-4">
                <div className="text-[0.5rem] text-[var(--text-muted)] font-mono tracking-wide uppercase">Location</div>
                <div className="text-sm font-medium text-[var(--text-primary)]">Karimnagar, Telangana</div>
              </div>
              <div className="border-b border-[var(--border-color)] pb-4">
                <div className="text-[0.5rem] text-[var(--text-muted)] font-mono tracking-wide uppercase">Degree</div>
                <div className="text-sm font-medium text-[var(--text-primary)]">B.Tech CSE (AI & ML)</div>
              </div>
              <div className="border-b border-[var(--border-color)] pb-4">
                <div className="text-[0.5rem] text-[var(--text-muted)] font-mono tracking-wide uppercase">Email</div>
                <div className="text-sm font-medium text-[var(--accent-cyan)] break-all">bandarisanjaykumar8@gmail.com</div>
              </div>
              <div>
                <div className="text-[0.5rem] text-[var(--text-muted)] font-mono tracking-wide uppercase">Phone</div>
                <div className="text-sm font-medium text-[var(--text-primary)]">+91 7993701618</div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
          {counters.map((c) => (
            <AnimatedCounter key={c.label} value={c.value} suffix={c.suffix} label={c.label} color={c.color} />
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mt-16 reveal">
          <h3 className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-[var(--text-muted)] mb-4 text-center">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            {["Problem Solving", "Communication", "Team Collaboration", "Adaptability", "Time Management", "Continuous Learning"].map((skill) => (
              <span key={skill} className="px-3.5 py-1.5 glass text-xs font-mono text-[var(--text-secondary)] rounded-md hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-all duration-200">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
