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
        <div>
          <span className="section-label">Coding Profiles</span>
        </div>
        <h2 className="section-title">
          Find Me <span className="gradient-text">Online</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {profiles.map((profile, i) => {
            const Icon = profile.icon;
            return (
              <a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass rounded-xl p-8 transition-all duration-300 hover:border-[var(--accent-cyan)] hover:glow-cyan hover:-translate-y-1"
                style={{ animation: `fadeInUp 0.5s ease ${i * 0.1}s forwards`, opacity: 0 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(6,182,212,0.1)] flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold group-hover:text-[var(--accent-cyan)] transition-colors">
                      {profile.name}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">{profile.username}</p>
                    <p className="text-[0.65rem] text-[var(--text-secondary)] mt-1">{profile.stats}</p>
                  </div>
                  <ExternalLink size={16} className="text-[var(--text-muted)] group-hover:text-[var(--accent-cyan)] transition-colors flex-shrink-0" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
