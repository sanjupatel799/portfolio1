"use client";

import { Mail, Phone, MapPin, Download, Send, MessageCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="relative py-36 md:py-44 bg-[var(--bg-secondary)] overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col items-center">
          {/* Header */}
          <div className="text-center mb-14 max-w-2xl">
            <div className="flex justify-center">
              <span className="section-label">Contact</span>
            </div>
            <h2 className="section-title">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-[var(--text-muted)] text-sm md:text-base leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision. Feel free to reach out through any channel below.
            </p>
          </div>

          {/* Centered cards grid */}
          <div className="w-full max-w-4xl">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Contact Info Card */}
              <div className="hover-card-glow glass rounded-2xl p-12 flex flex-col items-center gap-5">
                <h3 className="text-sm font-bold">Contact Information</h3>

                <a href="mailto:bandarisanjaykumar8@gmail.com"
                  className="w-full flex items-center gap-3 p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[var(--border-color)] transition-all duration-300 hover:border-[var(--accent-olive)] group">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(124,138,58,0.1)] flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-[var(--accent-olive)]" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <div className="text-[0.5rem] text-[var(--text-muted)] font-mono tracking-wide uppercase">Email</div>
                    <div className="text-xs font-medium truncate">bandarisanjaykumar8@gmail.com</div>
                  </div>
                </a>

                <div className="w-full flex items-center gap-3 p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[var(--border-color)]">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(124,138,58,0.1)] flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-[var(--accent-olive)]" />
                  </div>
                  <div>
                    <div className="text-[0.5rem] text-[var(--text-muted)] font-mono tracking-wide uppercase">Phone</div>
                    <div className="text-xs font-medium">+91 7993701618</div>
                  </div>
                </div>

                <div className="w-full flex items-center gap-3 p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[var(--border-color)]">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(124,138,58,0.1)] flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-[var(--accent-olive)]" />
                  </div>
                  <div>
                    <div className="text-[0.5rem] text-[var(--text-muted)] font-mono tracking-wide uppercase">Location</div>
                    <div className="text-xs font-medium">Karimnagar, Telangana, India</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="w-full flex flex-wrap justify-center gap-3">
                  <a href="mailto:bandarisanjaykumar8@gmail.com"
                    className="hover-icon-slide inline-flex items-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-[var(--accent-olive)] to-[var(--accent-lime)] text-white text-xs font-medium rounded-lg transition-all hover:shadow-[0_0_20px_rgba(124,138,58,0.3)]">
                    <Send size={14} className="icon-arrow" /> Email Me
                  </a>
                  <a href="https://wa.me/917993701618" target="_blank" rel="noopener noreferrer"
                    className="hover-icon-slide inline-flex items-center gap-1.5 px-5 py-2.5 glass text-xs font-medium rounded-lg transition-all hover:border-[var(--accent-olive)] hover:text-[var(--accent-olive)]">
                    <MessageCircle size={14} className="icon-arrow" /> WhatsApp
                  </a>
                  <a href="/resume.pdf" download
                    className="hover-icon-slide inline-flex items-center gap-1.5 px-5 py-2.5 glass text-xs font-medium rounded-lg transition-all hover:border-[var(--accent-olive)] hover:text-[var(--accent-olive)]">
                    <Download size={14} className="icon-arrow" /> Resume
                  </a>
                </div>
              </div>

              {/* Social & Quick Links Card */}
              <div className="hover-card-glow glass rounded-2xl p-12 flex flex-col items-center gap-5">
                <h3 className="text-sm font-bold">Quick Links</h3>

                <div className="w-full flex flex-col gap-4">
                  <a href="https://github.com/sanjupatel799" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[var(--border-color)] transition-all duration-300 hover:border-[var(--accent-olive)] group">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(124,138,58,0.1)] flex items-center justify-center flex-shrink-0">
                      <GithubIcon size={18} className="text-[var(--text-muted)] group-hover:text-[var(--accent-olive)] transition-colors" />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <div className="text-[0.5rem] text-[var(--text-muted)] font-mono tracking-wide uppercase">GitHub</div>
                      <div className="text-xs font-medium group-hover:text-[var(--accent-olive)] transition-colors">sanjupatel799</div>
                    </div>
                  </a>
                  <a href="https://linkedin.com/in/sanjaykumarbandari799" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[var(--border-color)] transition-all duration-300 hover:border-[var(--accent-lime)] group">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(124,138,58,0.1)] flex items-center justify-center flex-shrink-0">
                      <LinkedinIcon size={18} className="text-[var(--text-muted)] group-hover:text-[var(--accent-lime)] transition-colors" />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <div className="text-[0.5rem] text-[var(--text-muted)] font-mono tracking-wide uppercase">LinkedIn</div>
                      <div className="text-xs font-medium group-hover:text-[var(--accent-lime)] transition-colors">sanjaykumarbandari799</div>
                    </div>
                  </a>
                </div>

                {/* Decorative gradient */}
                <div className="w-full p-5 rounded-xl bg-gradient-to-br from-[rgba(124,138,58,0.05)] to-[rgba(163,184,108,0.05)] border border-[rgba(124,138,58,0.08)] text-center">
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    <strong className="text-[var(--accent-olive)]">BANDARI SANJAY KUMAR</strong>
                    <br />
                    Full Stack Developer · Angular · Node.js · AI & ML
                  </p>
                  <p className="text-[0.55rem] text-[var(--text-muted)] mt-2 font-mono">
                    Available for opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
