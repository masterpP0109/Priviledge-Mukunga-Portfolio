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
  title: {
    default: "Priviledge Mukunga | Portfolio",
    template: "%s | Priviledge Mukunga",
  },
  description:
    "Priviledge Mukunga — Full‑stack developer building modern, responsive web applications.",
  keywords: [
    "Priviledge Mukunga",
    "Full‑stack Developer",
    "Portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Priviledge Mukunga" }],
  creator: "Priviledge Mukunga",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Priviledge Mukunga | Portfolio",
    description:
      "Showcasing projects and experience in full‑stack web development.",
    url: "/",
    siteName: "Priviledge Mukunga",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Priviledge Mukunga Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priviledge Mukunga | Portfolio",
    description:
      "Showcasing projects and experience in full‑stack web development.",
    images: ["/images/thumbnail.png"],
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}  ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
