import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Bandari Sanjay Kumar | Full Stack Developer & AI Engineer",
  description:
    "Computer Science (AI & ML) graduate passionate about building scalable web applications, REST APIs, and AI-powered solutions. Experienced in Angular, Node.js, Express.js, MySQL, Power BI, and Python.",
  keywords: [
    "Bandari Sanjay Kumar",
    "Full Stack Developer",
    "Angular Developer",
    "Node.js Developer",
    "AI/ML Engineer",
    "Portfolio",
    "Karimnagar",
  ],
  openGraph: {
    title: "Bandari Sanjay Kumar | Full Stack Developer & AI Engineer",
    description:
      "Building modern web applications & intelligent solutions. Full Stack Developer specializing in Angular, Node.js, and AI/ML.",
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
