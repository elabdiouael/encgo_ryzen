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

// 🔥 THE BRANDING OVERRIDE
export const metadata: Metadata = {
  title: "Oriental Hack 2.0 | System Online",
  description: "Oriental Hack 2.0 - La plus grande compétition de hackathon dans l'Oriental .",
  icons: {
    icon: "/ORIENTAL HACK.png", // 👈 Path direct f 'public'
    shortcut: "/ORIENTAL HACK.png",
    apple: "/ORIENTAL HACK.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}