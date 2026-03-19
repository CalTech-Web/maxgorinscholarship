"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "More About", href: "/#more-about" },
  { label: "Application Details", href: "/#application-details" },
  { label: "Essay Topic", href: "/#essay-topic" },
  { label: "Winner", href: "/#winner" },
];

function LogoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M2 6C2 4.895 2.895 4 4 4h24c1.105 0 2 .895 2 2v14c0 5.523-6.268 10-13 12C10.268 30 2 25.523 2 20V6z" fill="url(#nav-shield)"/>
      <path d="M16 10L6 15l10 5 10-5-10-5z" fill="#f59e0b" opacity="0.9"/>
      <path d="M10 16.5v4c0 1.5 2.686 3 6 3s6-1.5 6-3v-4" stroke="#fbbf24" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <line x1="26" y1="15" x2="26" y2="22" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="26" cy="22.5" r="1" fill="#fbbf24"/>
      <defs>
        <linearGradient id="nav-shield" x1="2" y1="4" x2="30" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0f2744"/>
          <stop offset="100%" stopColor="#1e3a5f"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function LogoIconLight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M2 6C2 4.895 2.895 4 4 4h24c1.105 0 2 .895 2 2v14c0 5.523-6.268 10-13 12C10.268 30 2 25.523 2 20V6z" fill="url(#nav-shield-light)"/>
      <path d="M16 10L6 15l10 5 10-5-10-5z" fill="#f59e0b" opacity="0.9"/>
      <path d="M10 16.5v4c0 1.5 2.686 3 6 3s6-1.5 6-3v-4" stroke="#fbbf24" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <line x1="26" y1="15" x2="26" y2="22" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="26" cy="22.5" r="1" fill="#fbbf24"/>
      <defs>
        <linearGradient id="nav-shield-light" x1="2" y1="4" x2="30" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,255,255,0.9)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0.7)"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl shadow-lg shadow-black/5"
          : "bg-white/10 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <Link href="/" className="flex items-center gap-2.5 group">
            {scrolled ? (
              <LogoIcon className="w-8 h-8 group-hover:scale-105 transition-transform" />
            ) : (
              <LogoIconLight className="w-8 h-8 group-hover:scale-105 transition-transform" />
            )}
            <span
              className={`text-lg font-bold transition-colors duration-500 ${
                scrolled ? "gradient-text" : "text-white"
              }`}
            >
              Max Gorin Scholarship
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative text-sm font-medium px-3 py-2 rounded-lg transition-all duration-500 ${
                  scrolled
                    ? "text-foreground/65 hover:text-primary hover:bg-primary/5"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
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
            className={`md:hidden p-2 rounded-lg transition-all ${
              scrolled
                ? "text-foreground/65 hover:text-primary hover:bg-primary/5"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
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
        <div className="bg-white/95 backdrop-blur-xl shadow-xl">
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
