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
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        ".hero-tag",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8 }
      );

      if (textRef.current) {
        const chars = textRef.current.querySelectorAll(".char");
        tl.fromTo(
          chars,
          { opacity: 0, y: 80, rotateX: -90, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 0.7,
            stagger: 0.025,
            ease: "back.out(1.7)",
          },
          "-=0.2"
        );
      }

      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9 },
        "-=0.3"
      );

      tl.fromTo(
        ".hero-desc",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.5"
      );

      tl.fromTo(
        ctaRef.current?.children || [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 },
        "-=0.3"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const renderName = (text: string) =>
    text.split("").map((char, i) => (
      <span key={i} className="char inline-block" style={{ opacity: 0 }}>
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
        className="absolute inset-0 animate-grid-drift opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(16,185,129,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16,185,129,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full bg-[var(--accent-indigo)] opacity-[0.06] blur-[140px] animate-pulse-glow" />
      <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full bg-[var(--accent-emerald)] opacity-[0.05] blur-[140px] animate-pulse-glow" style={{ animationDelay: "2.5s" }} />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-[var(--accent-amber)] opacity-[0.02] blur-[100px] animate-breathe" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[var(--accent-emerald)] opacity-25"
            style={{
              top: `${12 + i * 15}%`,
              left: `${8 + i * 18}%`,
              animation: `float ${5 + i * 1.2}s ease-in-out infinite`,
              animationDelay: `${i * 0.6}s`,
            }}
          />
        ))}
        {[...Array(5)].map((_, i) => (
          <div
            key={i + 6}
            className="absolute w-[2px] h-[2px] rounded-full bg-[var(--accent-indigo)] opacity-25"
            style={{
              top: `${18 + i * 20}%`,
              right: `${6 + i * 20}%`,
              animation: `float-delayed ${6 + i * 1.2}s ease-in-out infinite`,
              animationDelay: `${i * 0.7 + 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10 w-full pt-28 md:pt-0">
        <div className="max-w-4xl">
          {/* Tag line */}
          <div className="hero-tag flex items-center gap-3 mb-6 md:mb-8">
            <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-[var(--accent-emerald)] font-medium">
              Full-Stack Developer & AI/ML Engineer
            </span>
            <span className="w-12 h-px bg-gradient-to-r from-[var(--accent-emerald)] to-transparent" />
          </div>

          {/* Name */}
          <h1
            ref={textRef}
            className="font-sans text-[clamp(2.8rem,7vw,5.5rem)] font-black leading-[1.05] tracking-[-0.03em] mb-5"
          >
            <span className="block text-[var(--text-primary)]">
              {renderName("Bandari")}
            </span>
            <span className="block mt-2">
              <span className="gradient-text">{renderName("Sanjay Kumar")}</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-[var(--text-secondary)] font-light max-w-2xl mb-5 leading-relaxed"
          >
            Architecting intelligent web solutions at the intersection of modern
            full-stack engineering and applied artificial intelligence.
          </p>

          {/* Description */}
          <p className="hero-desc text-sm md:text-base text-[var(--text-muted)] max-w-xl leading-relaxed mb-10">
            Computer Science & Engineering graduate specializing in AI & ML with
            production-grade experience delivering Angular + Node.js applications
            and deep learning systems achieving 85%+ accuracy.
          </p>

          {/* CTA */}
          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-[var(--accent-emerald)] text-[var(--bg-primary)] font-semibold text-sm rounded-xl transition-all duration-300 hover:shadow-[0_0_35px_rgba(16,185,129,0.35)] hover:-translate-y-1 active:translate-y-0"
            >
              Explore My Work
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2.5 px-8 py-4 border border-[var(--border-color)] text-[var(--text-primary)] font-medium text-sm rounded-xl transition-all duration-300 hover:border-[var(--accent-emerald)] hover:text-[var(--accent-emerald)] hover:-translate-y-1 active:translate-y-0"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Social links */}
          <div className="flex gap-5 mt-12">
            <a
              href="https://github.com/sanjupatel799"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--accent-emerald)] transition-colors duration-300 hover:-translate-y-0.5 inline-block"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://linkedin.com/in/sanjaykumarbandari799"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--accent-emerald)] transition-colors duration-300 hover:-translate-y-0.5 inline-block"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="mailto:bandarisanjaykumar8@gmail.com"
              className="text-[var(--text-muted)] hover:text-[var(--accent-emerald)] transition-colors duration-300 hover:-translate-y-0.5 inline-block"
              aria-label="Email"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[var(--text-muted)]">
        <span className="font-mono text-[0.55rem] tracking-[0.25em] uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[var(--accent-emerald)] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
