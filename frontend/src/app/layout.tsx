import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BlurryBackground from "@/components/BackgroundTest";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lucas Portfolio",
  description: "Le portfolio de Lucas dev full stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <BlurryBackground>
          <NavBar />
          <main>
            {children}
          </main>
        </BlurryBackground>
      </body>
    </html>
  );
}
