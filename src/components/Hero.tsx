"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animate the tag line
      tl.fromTo(
        ".hero-tag",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8 }
      );

      // Animate the name with character reveal
      if (textRef.current) {
        const chars = textRef.current.querySelectorAll(".char");
        tl.fromTo(
          chars,
          { opacity: 0, y: 80, rotateX: -90 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.6,
            stagger: 0.03,
            ease: "back.out(1.7)",
          },
          "-=0.2"
        );
      }

      // Subtitle
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.3"
      );

      // Description
      tl.fromTo(
        ".hero-desc",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      );

      // CTA buttons
      tl.fromTo(
        ctaRef.current?.children || [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        "-=0.3"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Split text into characters for animation
  const renderName = (text: string) =>
    text.split("").map((char, i) => (
      <span
        key={i}
        className="char inline-block"
        style={{ opacity: 0 }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 animate-grid-drift opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,229,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,229,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[var(--accent-purple)] opacity-[0.08] blur-[120px] animate-pulse-glow" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[var(--accent-cyan)] opacity-[0.06] blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[var(--accent-cyan)] opacity-20"
            style={{
              top: `${15 + i * 18}%`,
              left: `${10 + i * 20}%`,
              animation: `float ${4 + i * 1.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
        {[...Array(4)].map((_, i) => (
          <div
            key={i + 5}
            className="absolute w-[2px] h-[2px] rounded-full bg-[var(--accent-purple)] opacity-20"
            style={{
              top: `${20 + i * 22}%`,
              right: `${8 + i * 22}%`,
              animation: `float ${5 + i * 1.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.8 + 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10 w-full pt-24 md:pt-0">
        <div className="max-w-4xl">
          {/* Tag line */}
          <div className="hero-tag flex items-center gap-3 mb-5 md:mb-6">
            <span className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-[var(--accent-cyan)]">
              Full-Stack Developer & AI/ML Engineer
            </span>
            <span className="w-8 h-px bg-[var(--accent-cyan)] opacity-50" />
          </div>

          {/* Name */}
          <h1
            ref={textRef}
            className="font-sans text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[1.05] tracking-[-0.03em] mb-4"
          >
            <span className="block text-[var(--text-primary)]">
              {renderName("Bandari")}
            </span>
            <span className="block mt-1">
              <span className="gradient-text">{renderName("Sanjay Kumar")}</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-[var(--text-secondary)] font-light max-w-xl mb-4"
          >
            Building intelligent web solutions with clean code & AI
          </p>

          {/* Description */}
          <p className="hero-desc text-sm md:text-base text-[var(--text-muted)] max-w-lg leading-relaxed mb-8">
            Computer Science & Engineering graduate specializing in AI & ML.
            Full-stack developer with production experience in Angular, Node.js,
            and deep learning applications.
          </p>

          {/* CTA */}
          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--accent-cyan)] text-[var(--bg-primary)] font-semibold text-sm rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:-translate-y-0.5"
            >
              View Projects
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-[var(--border-color)] text-[var(--text-primary)] font-medium text-sm rounded-lg transition-all duration-300 hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)]"
            >
              Get In Touch
            </a>
          </div>

          {/* Social links */}
          <div className="flex gap-4 mt-10">
            <a
              href="https://github.com/sanjupatel799"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors duration-300"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://linkedin.com/in/sanjaykumarbandari799"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="mailto:bandarisanjaykumar8@gmail.com"
              className="text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors duration-300"
              aria-label="Email"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)]">
        <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-[var(--accent-cyan)] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
