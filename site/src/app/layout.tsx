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
  },
  twitter: {
    card: "summary_large_image",
    title: "Max Gorin Scholarship | $1,000 Educational Award",
    description:
      "Founded in 2021, the Max Gorin Scholarship awards one applicant $1,000 for their educational expenses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Max Gorin Scholarship",
  description:
    "Founded in 2021, the Max Gorin Scholarship awards one applicant $1,000 for their educational expenses.",
  url: "https://maxgorinscholarship.com",
  foundingDate: "2021",
  founder: {
    "@type": "Person",
    name: "Maxim Gorin",
  },
  areaServed: "United States",
  email: "scholarship@maxgorinscholarship.com",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-white focus:text-primary focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
