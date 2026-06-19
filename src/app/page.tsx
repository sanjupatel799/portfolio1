"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />

      {/* Footer */}
      <footer className="py-8 border-t border-[var(--border-color)]">
        <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-bold tracking-tight">
            <span className="text-[var(--accent-cyan)]">BSK</span>
            <span className="text-[var(--text-muted)]">.</span>
          </div>
          <p className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-[var(--text-muted)]">
            Designed &amp; built with{" "}
            <span className="text-[var(--accent-rose)]">passion</span> &nbsp;·&nbsp; 2026
          </p>
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors"
          >
            ↑ Back to top
          </a>
        </div>
      </footer>
    </>
  );
}
