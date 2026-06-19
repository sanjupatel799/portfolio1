import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Bandari Sanjay Kumar | Full-Stack Developer & AI/ML Engineer",
  description:
    "Computer Science & Engineering graduate specializing in AI & ML. Full-stack developer with production experience in Angular, Node.js, and deep learning applications. Bandari Sanjay Kumar portfolio.",
  keywords: [
    "Bandari Sanjay Kumar",
    "Sanjay Kumar",
    "Full Stack Developer",
    "Angular Developer",
    "AI/ML Engineer",
    "Portfolio",
    "Vaageswari College of Engineering",
    "Karimnagar",
    "Web Developer",
  ],
  openGraph: {
    title: "Bandari Sanjay Kumar | Full-Stack Developer & AI/ML Engineer",
    description:
      "Full-stack developer with production experience in Angular, Node.js, and deep learning applications.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased">
        <CustomCursor />
        <Nav />
        <div className="grain-overlay" />
        <main>{children}</main>
      </body>
    </html>
  );
}
