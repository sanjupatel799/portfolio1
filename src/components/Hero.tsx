"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const TYPING_WORDS = [
  "Full Stack Developer",
  "Angular Developer",
  "Node.js Developer",
  "AI & ML Enthusiast",
];

const FLOATING_ICONS = [
  { label: "Angular", top: "15%", left: "8%", delay: 0 },
  { label: "Node.js", top: "25%", right: "10%", delay: 0.5 },
  { label: "Python", top: "60%", left: "5%", delay: 1 },
  { label: "React", top: "70%", right: "8%", delay: 1.5 },
  { label: "TypeScript", top: "40%", left: "12%", delay: 0.8 },
  { label: "MySQL", top: "50%", right: "12%", delay: 1.2 },
];

export default function Hero() {
  const [typingIndex, setTypingIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  // Typing animation
  useEffect(() => {
    const currentWord = TYPING_WORDS[typingIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!deleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setTypingIndex((i) => (i + 1) % TYPING_WORDS.length);
    }

    return () => clearTimeout(timeout);
  }, [typingIndex, charIndex, deleting]);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg animate-grid-drift" />

      {/* Glow orbs */}
      <div className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full bg-[var(--accent-olive)] opacity-[0.04] blur-[140px] animate-pulse-glow" />
      <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full bg-[var(--accent-lime)] opacity-[0.03] blur-[140px] animate-pulse-glow" style={{ animationDelay: "2.5s" }} />

      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
        {FLOATING_ICONS.map((icon) => (
          <div
            key={icon.label}
            className="absolute glass rounded-lg px-3 py-1.5 text-xs font-mono text-[var(--accent-olive)]"
            style={{
              top: icon.top,
              left: icon.left,
              right: icon.right,
              animation: `float ${5 + icon.delay}s ease-in-out infinite`,
              animationDelay: `${icon.delay}s`,
            }}
          >
            {icon.label}
          </div>
        ))}
      </div>

      <div className="section-container relative z-10 w-full pt-28 md:pt-0">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6" style={{ opacity: 0, animation: "fadeInUp 0.6s ease forwards" }}>
            <span className="w-2 h-2 rounded-full bg-[var(--accent-olive)] animate-pulse" />
            <span className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-[var(--accent-olive)]">
              Available for opportunities
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-sans text-[clamp(2rem,5.5vw,4.2rem)] font-black leading-[1.08] tracking-[-0.03em] mb-4">
            <span className="block text-[var(--text-primary)]">Building Modern Web</span>
            <span className="block">
              <span className="gradient-text">Applications &amp; Intelligent Solutions</span>
            </span>
          </h1>

          {/* Typing animation */}
          <div className="flex items-center gap-2 mb-4 h-8">
            <span className="font-mono text-sm text-[var(--text-muted)]">Bandari Sanjay Kumar —</span>
            <span className="font-mono text-sm text-[var(--accent-olive)]">
              {TYPING_WORDS[typingIndex].substring(0, charIndex)}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-xl leading-relaxed mb-8" style={{ opacity: 0, animation: "fadeInUp 0.6s ease 0.2s forwards" }}>
            Computer Science (AI & ML) graduate passionate about building scalable web applications,
            REST APIs, and AI-powered solutions. Experienced in Angular, Node.js, Express.js, MySQL,
            Power BI, and Python.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-3" style={{ opacity: 0, animation: "fadeInUp 0.6s ease 0.4s forwards" }}>
            <a href="#projects" onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-[var(--accent-olive)] to-[var(--accent-lime)] text-white font-semibold text-sm rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,138,58,0.3)] hover:-translate-y-0.5 active:translate-y-0">
              View Projects <ArrowDown size={16} />
            </a>
            <a href="/resume.pdf" download
              className="inline-flex items-center gap-2.5 px-7 py-3.5 glass text-[var(--text-primary)] font-medium text-sm rounded-xl transition-all duration-300 hover:border-[var(--accent-olive)] hover:text-[var(--accent-olive)] hover:-translate-y-0.5 active:translate-y-0">
              <Download size={16} /> Resume
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 glass text-[var(--text-primary)] font-medium text-sm rounded-xl transition-all duration-300 hover:border-[var(--accent-olive)] hover:text-[var(--accent-olive)] hover:-translate-y-0.5 active:translate-y-0">
              Contact Me <ExternalLink size={16} />
            </a>
          </div>

          {/* Social */}
          <div className="flex gap-5 mt-10" style={{ opacity: 0, animation: "fadeInUp 0.6s ease 0.6s forwards" }}>
            <a href="https://github.com/sanjupatel799" target="_blank" rel="noopener noreferrer"
              className="social-link-icon text-[var(--text-muted)] hover:text-[var(--accent-olive)] transition-colors duration-300">
              <GithubIcon size={20} />
            </a>
            <a href="https://linkedin.com/in/sanjaykumarbandari799" target="_blank" rel="noopener noreferrer"
              className="social-link-icon text-[var(--text-muted)] hover:text-[var(--accent-olive)] transition-colors duration-300">
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)]" style={{ opacity: 0, animation: "fadeInUp 0.6s ease 0.8s forwards" }}>
        <span className="font-mono text-[0.5rem] tracking-[0.25em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[var(--accent-olive)] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
