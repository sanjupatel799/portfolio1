"use client";

import { GithubIcon, LinkedinIcon } from "./Icons";
import { ExternalLink } from "lucide-react";

const profiles = [
  {
    name: "GitHub",
    username: "@sanjupatel799",
    url: "https://github.com/sanjupatel799",
    icon: GithubIcon,
    stats: "Code repositories & contributions",
  },
  {
    name: "LinkedIn",
    username: "in/sanjaykumarbandari799",
    url: "https://linkedin.com/in/sanjaykumarbandari799",
    icon: LinkedinIcon,
    stats: "Professional network & experience",
  },
];

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="relative py-36 md:py-44 bg-[var(--bg-secondary)] overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex justify-center">
            <span className="section-label">Coding Profiles</span>
          </div>
          <h2 className="section-title">
            Find Me <span className="gradient-text">Online</span>
          </h2>
        </div>

        {/* Centered cards wrapper */}
        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <div className="grid md:grid-cols-2 gap-6">
              {profiles.map((profile, i) => {
                const Icon = profile.icon;
                return (
                  <a
                    key={profile.name}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group hover-card-glow glass rounded-xl p-10 transition-all duration-300 hover:-translate-y-1 text-center"
                    style={{ animation: `fadeInUp 0.5s ease ${i * 0.1}s forwards`, opacity: 0 }}
                  >
                    <div className="flex flex-col items-center gap-4">
                      <div className="card-icon-wrapper w-14 h-14 rounded-xl bg-[rgba(124,138,58,0.1)] flex items-center justify-center group-hover:bg-[rgba(124,138,58,0.15)] transition-colors">
                        <Icon size={28} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold group-hover:text-[var(--accent-olive)] transition-colors">
                          {profile.name}
                        </h3>
                        <p className="text-xs text-[var(--text-muted)] mt-1">{profile.username}</p>
                        <p className="text-[0.65rem] text-[var(--text-secondary)] mt-1.5">{profile.stats}</p>
                      </div>
                      <div className="mt-1 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[rgba(124,138,58,0.06)] border border-[rgba(124,138,58,0.1)] group-hover:border-[rgba(124,138,58,0.3)] transition-all">
                        <span className="text-[0.55rem] font-mono text-[var(--accent-olive)] font-medium tracking-wide uppercase">Visit</span>
                        <ExternalLink size={12} className="text-[var(--accent-olive)] icon-arrow" />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
