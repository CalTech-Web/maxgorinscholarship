"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "More About", href: "/#more-about" },
  { label: "Application Details", href: "/#application-details" },
  { label: "Essay Topic", href: "/#essay-topic" },
  { label: "Winner", href: "/#winner" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity">
            Max Gorin Scholarship
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-foreground/65 hover:text-primary px-3 py-2 rounded-lg hover:bg-primary/5 transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#application-form"
              className="ml-3 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent-light px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-accent/30 hover:scale-105 transition-all"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-foreground/65 hover:text-primary hover:bg-primary/5 transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute left-0 block w-6 h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? "top-3 rotate-45" : "top-1"
                }`}
              />
              <span
                className={`absolute left-0 top-3 block w-6 h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? "opacity-0 scale-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block w-6 h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? "top-3 -rotate-45" : "top-5"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-out overflow-hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl">
          <div className="px-4 py-5 space-y-1">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 py-3 px-4 rounded-xl transition-all"
                onClick={() => setMobileOpen(false)}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="/#application-form"
                className="block text-center rounded-full bg-gradient-to-r from-accent to-accent-light px-5 py-3 text-sm font-semibold text-white shadow-md shadow-accent/20 hover:shadow-lg transition-all"
                onClick={() => setMobileOpen(false)}
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
