import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nikhil-portfolio-pi-ten.vercel.app"),
  title: "Nikhil Garg | React Developer | React.js, Next.js & React Native",
  description:
    "Nikhil Garg is a Software Engineer with 4+ years of experience building scalable SaaS, web, and mobile applications using React.js, Next.js, React Native, TypeScript, Node.js, and MongoDB. Skilled in reusable components, REST API integration, and performance optimization.",
  keywords: [
    "Nikhil Garg",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "Frontend Developer",
    "MERN Stack Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "SaaS Developer",
    "React Developer Noida",
  ],
  authors: [{ name: "Nikhil Garg" }],
  openGraph: {
    title: "Nikhil Garg | React Developer Portfolio",
    description:
      "Software Engineer with 4+ years of experience building scalable SaaS, web, and mobile applications with React.js, Next.js, React Native, TypeScript, Node.js, and MongoDB.",
    url: "https://nikhil-portfolio-pi-ten.vercel.app/",
    siteName: "Nikhil Garg Portfolio",
    images: [
      {
        url: "https://nikhil-portfolio-pi-ten.vercel.app/images/profilePic.jpg",
        width: 1200,
        height: 630,
        alt: "Nikhil Garg - React Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil Garg | React Developer Portfolio",
    description:
      "Software Engineer with 4+ years of experience building scalable SaaS, web, and mobile applications with React.js, Next.js, React Native, TypeScript, Node.js, and MongoDB.",
    images: ["https://nikhil-portfolio-pi-ten.vercel.app/images/profilePic.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased min-h-screen relative`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
