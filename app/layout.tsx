import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";
import LightRays from "./components/LightsRays";
import Navbar from "./components/Navbar";
import PostHogProvider from "./components/PostHogProvider";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibset-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevEvent",
  description: "The Hub fro every dev Event you need to know",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased`}
      >
      <PostHogProvider />
      
      <Navbar />

      <div className="absolute inset-0 top-0 z-50 min-h-screen w-screen">
        <LightRays
          raysOrigin="top-center-offset"    //add -offset
          raysColor="#00ffff"
          raysSpeed={0.5}
          lightSpread={0.9}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.02}
          noiseAmount={0.0}
          distortion={0.01}
        />
      </div>
        {children}
      </body>
    </html>
  );
}