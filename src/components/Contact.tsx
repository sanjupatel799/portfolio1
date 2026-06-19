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
          if (entry.isIntersecting) entry.target.classList.add("revealed");
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
      className="relative py-28 md:py-36 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(16,185,129,0.015)] to-transparent" />

      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4 justify-center reveal">
          <span className="w-12 h-px bg-gradient-to-r from-transparent via-[var(--accent-emerald)] to-[var(--accent-emerald)] opacity-50" />
          <span className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-[var(--accent-emerald)] font-medium">
            07 — Contact
          </span>
          <span className="w-12 h-px bg-gradient-to-r from-[var(--accent-emerald)] via-[var(--accent-emerald)] to-transparent opacity-50" />
        </div>

        <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-[-0.02em] mb-4 text-center reveal">
          Let&apos;s <span className="gradient-text">Connect</span>
        </h2>

        <p className="text-center text-[var(--text-muted)] text-sm md:text-base max-w-lg mx-auto mb-14 reveal leading-relaxed">
          I am actively seeking opportunities where I can contribute meaningfully
          from day one. Whether you have a role in mind or just want to start a
          conversation — I&apos;d love to hear from you.
        </p>

        {/* Contact card */}
        <div className="max-w-lg mx-auto reveal-scale">
          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-8 md:p-10 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(16,185,129,0.03)] to-transparent pointer-events-none" />

            {/* Grid decoration */}
            <div
              className="absolute inset-0 opacity-[0.025] pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(16,185,129,0.5) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(16,185,129,0.5) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10 space-y-5">
              {/* Email */}
              <a
                href="mailto:bandarisanjaykumar8@gmail.com"
                className="group flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] transition-all duration-300 hover:border-[var(--accent-emerald)] hover:-translate-y-0.5"
              >
                <div className="w-11 h-11 rounded-xl bg-[rgba(16,185,129,0.1)] flex items-center justify-center group-hover:bg-[rgba(16,185,129,0.15)] transition-colors">
                  <Mail size={18} className="text-[var(--accent-emerald)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[0.6rem] text-[var(--text-muted)] font-mono tracking-wide uppercase mb-0.5">
                    Email
                  </div>
                  <div className="text-sm font-medium truncate">
                    bandarisanjaykumar8@gmail.com
                  </div>
                </div>
                <ExternalLink
                  size={16}
                  className="text-[var(--text-muted)] group-hover:text-[var(--accent-emerald)] transition-colors flex-shrink-0"
                />
              </a>

              {/* Phone */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                <div className="w-11 h-11 rounded-xl bg-[rgba(16,185,129,0.1)] flex items-center justify-center">
                  <Phone size={18} className="text-[var(--accent-emerald)]" />
                </div>
                <div>
                  <div className="text-[0.6rem] text-[var(--text-muted)] font-mono tracking-wide uppercase mb-0.5">
                    Phone
                  </div>
                  <div className="text-sm font-medium">+91 7993701618</div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                <div className="w-11 h-11 rounded-xl bg-[rgba(16,185,129,0.1)] flex items-center justify-center">
                  <MapPin size={18} className="text-[var(--accent-emerald)]" />
                </div>
                <div>
                  <div className="text-[0.6rem] text-[var(--text-muted)] font-mono tracking-wide uppercase mb-0.5">
                    Location
                  </div>
                  <div className="text-sm font-medium">
                    Karimnagar, Telangana, India
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-3 pt-3">
                <a
                  href="https://github.com/sanjupatel799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent-emerald)] hover:border-[var(--accent-emerald)] transition-all duration-300"
                >
                  <GithubIcon size={16} />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/sanjaykumarbandari799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent-emerald)] hover:border-[var(--accent-emerald)] transition-all duration-300"
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
