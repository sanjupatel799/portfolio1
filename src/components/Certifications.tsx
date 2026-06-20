"use client";

import { ExternalLink, Award } from "lucide-react";

const certifications = [
  {
    title: "Full Stack Web Development Internship",
    issuer: "S2S Web Solutions Pvt. Ltd.",
    date: "Aug 2025 – May 2026",
    verifyUrl: "https://drive.google.com/file/d/1TuIGkUGl3ZJHMxRd8Kgs0lUW9fy2s-OJ/view",
  },
  {
    title: "B.Tech CSE (AI & ML)",
    issuer: "Vaageswari College of Engineering",
    date: "2022 – 2026",
  },
  {
    title: "Academic Excellence — SSC",
    issuer: "Board of Secondary Education, Telangana",
    date: "2019 – 2020",
    details: "Perfect GPA 10/10",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-36 md:py-44 overflow-hidden">
      <div className="section-container">
        <div>
          <span className="section-label">Certifications</span>
        </div>
        <h2 className="section-title">
          Credentials & <span className="gradient-text">Certifications</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <div
              key={cert.title}
              className="glass rounded-xl p-8 transition-all duration-300 hover:border-[var(--accent-cyan)] hover:glow-cyan hover:-translate-y-1 text-center"
              style={{ animation: `fadeInUp 0.5s ease ${i * 0.1}s forwards`, opacity: 0 }}
            >
              <div className="w-10 h-10 rounded-lg bg-[rgba(6,182,212,0.1)] flex items-center justify-center mb-4 mx-auto">
                <Award size={18} className="text-[var(--accent-cyan)]" />
              </div>
              <h3 className="text-sm font-bold mb-1 leading-snug">{cert.title}</h3>
              <p className="text-xs text-[var(--text-secondary)] mb-1">{cert.issuer}</p>
              <p className="font-mono text-[0.55rem] text-[var(--text-muted)] mb-3">{cert.date}</p>
              {"details" in cert && cert.details && (
                <p className="text-xs text-[var(--accent-cyan)] font-medium mb-3">{cert.details}</p>
              )}
              {"verifyUrl" in cert && cert.verifyUrl && (
                <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[var(--accent-cyan)] hover:underline">
                  <ExternalLink size={12} /> Verify Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
