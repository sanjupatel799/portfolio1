"use client";

import { Trophy, Sparkles, BarChart3, Mic } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Perfect SSC CGPA 10.0",
    desc: "Achieved a perfect 10.0/10 CGPA in SSC Board Examinations.",
    color: "text-[var(--accent-cyan)]",
  },
  {
    icon: Sparkles,
    title: "Live Client Website Delivered",
    desc: "Successfully deployed MSV Technologies website — still live and serving real visitors.",
    color: "text-[var(--accent-blue)]",
  },
  {
    icon: BarChart3,
    title: "85%+ AI Model Accuracy",
    desc: "Trained deep learning model achieving 85%+ validation accuracy on accident severity prediction.",
    color: "text-[var(--accent-teal)]",
  },
  {
    icon: Mic,
    title: "Institutional Research Presentation",
    desc: "AI literacy research formally shortlisted and presented at the institutional level (2025).",
    color: "text-[var(--accent-cyan)]",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-36 md:py-44 bg-[var(--bg-secondary)] overflow-hidden">
      <div className="section-container">
        <div>
          <span className="section-label">Achievements</span>
        </div>
        <h2 className="section-title">
          Honors & <span className="gradient-text">Awards</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="glass rounded-xl p-8 transition-all duration-300 hover:border-[var(--accent-cyan)] hover:glow-cyan hover:-translate-y-1"
                style={{ animation: `fadeInUp 0.5s ease ${i * 0.1}s forwards`, opacity: 0 }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(6,182,212,0.1)] flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className={item.color} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold mb-1">{item.title}</h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
