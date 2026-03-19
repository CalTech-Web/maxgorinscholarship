"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/images/sangga-rima-roman-selia-LWfFfA5U5z8-unsplash-scaled.jpg",
    heading: "Max Gorin",
    headingAccent: "Scholarship",
    description:
      "Founded in 2021, the Max Gorin Scholarship was designed to award one lucky applicant $1,000 for their educational expenses.",
    cta: { label: "Apply Now", href: "#application-form" },
    ctaSecondary: { label: "Learn More", href: "#about" },
  },
  {
    image: "/images/joshua-hoehne-iggWDxHTAUQ-unsplash.jpg",
    heading: "Scholarship",
    headingAccent: "Eligibility",
    description:
      "Open to high school seniors accepted into college and current undergraduate or graduate students pursuing their educational goals.",
    cta: { label: "View Details", href: "#application-details" },
    ctaSecondary: { label: "Learn More", href: "#about" },
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[100vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`absolute inset-0 ${
              i === current ? "animate-ken-burns" : ""
            }`}
          >
            <Image
              src={slide.image}
              alt={`${slide.heading} ${slide.headingAccent}`}
              fill
              className="object-cover object-center"
              priority={i === 0}
              sizes="100vw"
              quality={85}
            />
          </div>
        </div>
      ))}

      {/* Gradient overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      {/* Decorative color tints */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(15,39,68,0.5),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(245,158,11,0.08),transparent_50%)]" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ease-out ${
                i === current
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 absolute inset-0 flex items-center pointer-events-none"
              }`}
            >
              {i === current && (
                <div className="max-w-2xl">
                  <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-accent-light text-sm font-semibold px-5 py-2 rounded-full mb-8 border border-white/10">
                    <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    Est. 2021
                  </span>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight text-white">
                    {slide.heading}
                    <span className="block gradient-text-light">
                      {slide.headingAccent}
                    </span>
                  </h1>
                  <p className="text-lg sm:text-xl text-white/75 leading-relaxed mb-10 max-w-lg">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={slide.cta.href}
                      className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent-light px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/40 hover:scale-105 transition-all"
                    >
                      {slide.cta.label}
                      <svg
                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </a>
                    <a
                      href={slide.ctaSecondary.href}
                      className="inline-flex items-center justify-center rounded-full border-2 border-white/20 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white hover:bg-white/10 hover:border-white/40 transition-all"
                    >
                      {slide.ctaSecondary.label}
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Slide indicators */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === current
                    ? "w-10 bg-accent"
                    : "w-6 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-8 hidden lg:flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs font-medium tracking-widest uppercase rotate-90 origin-center translate-y-6">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent mt-10" />
      </div>
    </section>
  );
}
