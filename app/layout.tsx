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
  title: "Nikhil Garg | React Developer | React.js & Next.js",
  description:
    "Nikhil Garg is a React Developer with 4 years of experience building scalable web and mobile applications using React.js, Next.js, and React Native. Specialized in dashboards, management systems, and performance-driven UI.",
  keywords: [
    "Nikhil Garg",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "Frontend Developer",
  ],
  authors: [{ name: "Nikhil Garg" }],
  openGraph: {
    title: "Nikhil Garg | React Developer Portfolio",
    description:
      "Frontend Developer specializing in React.js, Next.js, and React Native.",
    url: "https://nikhil-portfolio-pi-ten.vercel.app/",
    siteName: "Nikhil Garg Portfolio",
    images: [
      {
        url: "https://nikhil-portfolio-pi-ten.vercel.app/images/profilePic.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
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
