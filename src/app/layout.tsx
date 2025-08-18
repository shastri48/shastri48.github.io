import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhishek Shastri - Frontend Lead & Full Stack Engineer",
  description: "Passionate Frontend Lead with 6+ years of experience in building scalable web applications, enhancing user experiences, and leading teams to drive innovation.",
  keywords: "Frontend Lead, Full Stack Engineer, React, Next.js, TypeScript, JavaScript, Web Development",
  authors: [{ name: "Abhishek Shastri" }],
  openGraph: {
    title: "Abhishek Shastri - Frontend Lead & Full Stack Engineer",
    description: "Passionate Frontend Lead with 6+ years of experience in building scalable web applications.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
