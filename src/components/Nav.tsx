"use client";

import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    sectionsRef.current = NAV_ITEMS.map((item) =>
      document.querySelector(item.href)
    ).filter(Boolean) as HTMLElement[];
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = sectionsRef.current;
      if (!sections.length) return;
      const scrollPos = window.scrollY + 150;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollPos) {
          setActiveSection(NAV_ITEMS[i].href);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "glass-strong shadow-lg shadow-black/10" : "bg-transparent"
    }`}>
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <a href="#hero" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="font-bold text-lg md:text-xl tracking-tight">
          <span className="text-[var(--accent-purple)]">BSK</span><span className="text-[var(--text-muted)]">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <button onClick={() => handleClick(item.href)}
                className={`font-mono text-xs tracking-[0.12em] uppercase transition-colors duration-300 ${
                  activeSection === item.href ? "text-[var(--accent-purple)]" : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          <span className={`block w-6 h-[1.5px] bg-[var(--text-primary)] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
          <span className={`block w-6 h-[1.5px] bg-[var(--text-primary)] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[1.5px] bg-[var(--text-primary)] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
        </button>
      </div>

      <div className={`md:hidden transition-all duration-400 overflow-hidden ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="glass-strong border-b border-[var(--border-color)] px-4 py-4">
          <ul className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <button onClick={() => handleClick(item.href)}
                  className={`font-mono text-sm tracking-[0.12em] uppercase transition-colors w-full text-left py-2 ${
                    activeSection === item.href ? "text-[var(--accent-purple)]" : "text-[var(--text-muted)]"
                  }`}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
