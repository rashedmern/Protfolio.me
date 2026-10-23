import type { Metadata, Viewport } from "next";
import { Patrick_Hand, Kalam, Geist_Mono } from "next/font/google";
import "./globals.css";

const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-patrick-hand",
  display: "swap",
});

const kalam = Kalam({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-kalam",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rashed.live"),
  title: "Rashed Molla Antor | Full Stack Software Engineer",
  description:
    "Software Engineer engineering high-performance web applications, scalable REST APIs, and intelligent backends to solve real problems and deliver exponential impact.",
  authors: [{ name: "Rashed Molla Antor", url: "https://rashed.live" }],
  creator: "Rashed Molla Antor",
  publisher: "Rashed Molla Antor",
  keywords: [
    "MVP developer",
    "startup developer",
    "AI automation engineer",
    "Next.js developer",
    "founder tech partner",
    "full-stack engineer Bangladesh",
    "agentic AI workflows",
    "freelance full-stack developer",
    "Rashed Molla Antor",
    "Rashed",
    "Rashed Software Engineer",
    "Full Stack Engineer",
  ],
  category: "technology",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Rashed Molla Antor | Full Stack Software Engineer",
    description:
      "Full-stack engineer helping startups and solo founders ship MVPs in ~7 days, automate workflows, and scale without chaos. Based in Dhaka, Bangladesh — works remotely worldwide.",
    url: "https://rashed.live",
    siteName: "rashed.live",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Rashed Molla Antor — Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rashed Molla Antor | Full Stack Software Engineer",
    description:
      "Full-stack engineer helping startups and solo founders ship MVPs in ~7 days, automate workflows, and scale without chaos. Based in Dhaka, Bangladesh — works remotely worldwide.",
    creator: "@rashedxali",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${patrickHand.variable} ${kalam.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen text-ink antialiased selection:bg-primary-200 selection:text-ink">
        {children}
      </body>
    </html>
  );
}
