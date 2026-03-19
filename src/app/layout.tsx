import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = "https://abhishek-kothe.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Abhishek Kothe | Full Stack Developer & AI Engineer",
    template: "%s | Abhishek Kothe",
  },
  description:
    "Portfolio of Abhishek Kothe — Full Stack Developer, AI Enthusiast & DSA Learner from Nagpur, India. Building production-grade AI systems and scalable web applications. Creator of RapidAlert and NEO AI Assistant.",
  keywords: [
    "Abhishek Kothe",
    "Full Stack Developer",
    "AI Engineer",
    "Portfolio",
    "Next.js Developer",
    "React Developer",
    "Python",
    "Firebase",
    "RapidAlert",
    "NEO AI Assistant",
    "Nagpur Developer",
    "YCCE",
    "DSA LeetCode",
  ],
  authors: [{ name: "Abhishek Kothe", url: BASE_URL }],
  creator: "Abhishek Kothe",
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    title: "Abhishek Kothe | Full Stack Developer & AI Engineer",
    description:
      "Building Scalable Systems with AI + Full Stack Engineering. Creator of RapidAlert (AI disaster management) & NEO (multi-LLM desktop assistant).",
    siteName: "Abhishek Kothe Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abhishek Kothe – Full Stack Developer & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Kothe | Full Stack Developer & AI Engineer",
    description:
      "Building Scalable Systems with AI + Full Stack Engineering. Creator of RapidAlert & NEO AI Assistant.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  verification: {
    // Add Google Search Console verification token here when you get it
    // google: "your-verification-token",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
