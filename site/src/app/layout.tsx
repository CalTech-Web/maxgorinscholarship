import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
    default: "Max Gorin Scholarship | $1,000 Educational Award",
    template: "%s | Max Gorin Scholarship",
  },
  description:
    "Founded in 2021, the Max Gorin Scholarship awards one applicant $1,000 for their educational expenses. Apply today to combat the rising cost of education.",
  keywords: [
    "Max Gorin Scholarship",
    "scholarship",
    "education",
    "$1000 scholarship",
    "college scholarship",
    "Maxim Gorin",
    "student financial aid",
    "healthcare education",
  ],
  metadataBase: new URL("https://maxgorinscholarship.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Max Gorin Scholarship | $1,000 Educational Award",
    description:
      "Founded in 2021, the Max Gorin Scholarship awards one applicant $1,000 for their educational expenses.",
    url: "https://maxgorinscholarship.com",
    siteName: "Max Gorin Scholarship",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/girl-3718537_640.jpg",
        width: 640,
        height: 426,
        alt: "Max Gorin Scholarship",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Max Gorin Scholarship | $1,000 Educational Award",
    description:
      "Founded in 2021, the Max Gorin Scholarship awards one applicant $1,000 for their educational expenses.",
    images: ["/images/girl-3718537_640.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
