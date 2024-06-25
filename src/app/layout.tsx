import type { Metadata, Viewport } from "next";
import "atropos/css";
import "./globals.css";

export const viewport: Viewport = {
  minimumScale: 1,
  initialScale: 1,
  viewportFit: "cover",
  width: "device-width",
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "RYN BSD",
  description:
    "Passionate computer scientist and web developer with a journey that began in childhood. Proficient in Python, C, C++, JavaScript, HTML, CSS, SASS, and JQuery. Experienced in frontend and backend development using ReactJS, Redux, TypeScript, NodeJS, ExpressJS, and PostgreSQL. Dedicated to creating scalable, high-quality web applications.",
  applicationName: "Portfolio",
  creator: "Boussayed Rayen",
  publisher: "Vercel",
  authors: [{ name: "Boussayed Rayen", url: "https://github.com/RYNBSD" }],
  keywords: [
    "RB",
    "RYN",
    "BSD",
    "RYN BSD",
    "Boussayed",
    "Rayen",
    "Boussayed Rayen",
    "Software engineer",
    "Content creator",
    "Algeria",
    "computer science",
    "computer",
    "science",
    "web",
    "web development",
    "server",
    "server development",
    "backend",
    "backend development",
    "mobile",
    "mobile development",
    "frontend",
    "frontend development",
    "JS",
    "JavaScript",
    "TS",
    "TypeScript",
    "ReactJS",
    "skills",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
