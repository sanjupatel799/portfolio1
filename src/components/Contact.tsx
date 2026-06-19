"use client";

import { useEffect, useRef } from "react";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .stagger-children"
    );
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[var(--bg-secondary)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,229,255,0.02)] to-transparent" />

      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4 justify-center reveal">
          <span className="w-8 h-px bg-[var(--accent-cyan)] opacity-30" />
          <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-[var(--accent-cyan)]">
            07 — Contact
          </span>
          <span className="w-8 h-px bg-[var(--accent-cyan)] opacity-30" />
        </div>

        <h2 className="text-[clamp(1.5rem,3.5vw,2.8rem)] font-black tracking-[-0.02em] mb-4 text-center reveal">
          Let&apos;s <span className="gradient-text">Connect</span>
        </h2>

        <p className="text-center text-[var(--text-muted)] text-sm md:text-base max-w-md mx-auto mb-12 reveal">
          Open to exciting opportunities, collaborations, and interesting projects.
          Let&apos;s build something great together.
        </p>

        {/* Contact card */}
        <div className="max-w-lg mx-auto reveal-scale">
          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-8 md:p-10 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,229,255,0.03)] to-transparent pointer-events-none" />

            {/* Grid decoration */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0,229,255,0.5) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,229,255,0.5) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10 space-y-6">
              {/* Email */}
              <a
                href="mailto:bandarisanjaykumar8@gmail.com"
                className="group flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] transition-all duration-300 hover:border-[var(--accent-cyan)] hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-lg bg-[rgba(0,229,255,0.1)] flex items-center justify-center group-hover:bg-[rgba(0,229,255,0.15)] transition-colors">
                  <Mail size={18} className="text-[var(--accent-cyan)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-[var(--text-muted)] font-mono mb-0.5">
                    Email
                  </div>
                  <div className="text-sm font-medium truncate">
                    bandarisanjaykumar8@gmail.com
                  </div>
                </div>
                <ExternalLink
                  size={16}
                  className="text-[var(--text-muted)] group-hover:text-[var(--accent-cyan)] transition-colors flex-shrink-0"
                />
              </a>

              {/* Phone */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                <div className="w-10 h-10 rounded-lg bg-[rgba(0,229,255,0.1)] flex items-center justify-center">
                  <Phone size={18} className="text-[var(--accent-cyan)]" />
                </div>
                <div>
                  <div className="text-xs text-[var(--text-muted)] font-mono mb-0.5">
                    Phone
                  </div>
                  <div className="text-sm font-medium">+91 7993701618</div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                <div className="w-10 h-10 rounded-lg bg-[rgba(0,229,255,0.1)] flex items-center justify-center">
                  <MapPin size={18} className="text-[var(--accent-cyan)]" />
                </div>
                <div>
                  <div className="text-xs text-[var(--text-muted)] font-mono mb-0.5">
                    Location
                  </div>
                  <div className="text-sm font-medium">
                    Karimnagar, Telangana, India
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-3 pt-2">
                <a
                  href="https://github.com/sanjupatel799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)] transition-all duration-300"
                >
                  <GithubIcon size={16} />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/sanjaykumarbandari799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)] transition-all duration-300"
                >
                  <LinkedinIcon size={16} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
