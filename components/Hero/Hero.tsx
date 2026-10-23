"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  const letters = [
    { char: "R", rotate: "-6deg", delay: "80ms" },
    { char: "A", rotate: "4deg", delay: "105ms" },
    { char: "S", rotate: "-3deg", delay: "130ms" },
    { char: "H", rotate: "8deg", delay: "155ms" },
    { char: "E", rotate: "-5deg", delay: "180ms" },
    { char: "D", rotate: "3deg", delay: "205ms" },
  ];

  const techBadges = [
    { name: "Full-Stack & SaaS", delay: "600ms" },
    { name: "Frontend & Backend", delay: "670ms" },
    { name: "REST APIs & Databases", delay: "740ms" },
    { name: "AI Automation & MVPs", delay: "810ms" },
  ];

  return (
    <section
      id="home"
      className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-8 md:pt-14 pb-16 sm:pb-20 min-[1440px]:pl-32 overflow-visible min-h-0 sm:min-h-[85vh] flex items-start sm:items-center"
    >
      {/* Background doodles & blurs */}
      <div className="absolute inset-0 pointer-events-none overflow-visible" aria-hidden="true">
        <div className="absolute top-[8%] right-[18%] w-40 h-40 rounded-full bg-primary-500/15 blur-3xl" />
        <div className="absolute bottom-[20%] left-[10%] w-48 h-48 rounded-full bg-primary-300/10 blur-3xl" />

        {/* Drawn Curve line */}
        <svg
          className="absolute bottom-[15%] left-[2%] w-36 h-24 text-primary-300/30"
          viewBox="0 0 128 80"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M8 60 Q40 20 80 50 T120 30" pathLength="1" className="hero-draw-line" />
        </svg>

        {/* Arrow doodle */}
        <svg
          className="hidden lg:block absolute top-[48%] left-[46%] w-28 h-16 text-on-canvas-muted/25"
          viewBox="0 0 112 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M4 32 Q56 4 108 32" strokeDasharray="5 4" />
          <path d="M100 28 L108 32 L100 36" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-14 items-center">
        {/* Left Column: Intro & Info */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          {/* Struck-through text */}
          <p
            className="hero-reveal-fade font-hand text-sm sm:text-base text-on-canvas-muted mb-3 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            style={{ animationDelay: "100ms" }}
          >
            <span className="line-through decoration-primary-500 decoration-2">
              Writing code for a living
            </span>
            <span className="text-primary-800 ml-2 font-bold">
              ✦ Engineering real impact
            </span>
          </p>

          {/* Headline Name */}
          <div className="mb-3">
            <h1 className="leading-[0.95] mb-2" aria-label="Rashed Molla Antor">
              <span className="flex flex-wrap justify-center lg:justify-start gap-1 md:gap-1.5">
                {letters.map((item, idx) => (
                  <span
                    key={idx}
                    className="hero-letter inline-block font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] transition-all duration-500 hover:scale-110 hover:-rotate-1 cursor-default"
                    style={{
                      ["--letter-rotate" as string]: item.rotate,
                      animationDelay: item.delay,
                      color: "var(--color-primary-500)",
                      textShadow: "2px 2px 0 rgba(46, 139, 52, 0.2)",
                    }}
                  >
                    {item.char}
                  </span>
                ))}
                <span
                  className="hero-reveal-fade inline-block font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-on-canvas"
                  style={{ animationDelay: "230ms" }}
                >
                  .
                </span>
              </span>
            </h1>
            <div className="hero-reveal-fade flex justify-center lg:justify-start mb-1" style={{ animationDelay: "260ms" }}>
              <span className="font-hand text-base sm:text-lg text-primary-900 bg-paper-tint border border-primary-300 px-3 py-0.5 rounded shadow-sm -rotate-1 inline-block">
                Rashed Molla Antor
              </span>
            </div>
          </div>

          {/* Sticky Note Bio */}
          <div
            className="hero-reveal-up relative max-w-lg mx-auto lg:mx-0 mb-6"
            style={{ animationDelay: "300ms" }}
          >
            <div
              className="absolute -left-3 -top-3 w-14 h-5 bg-paper-tint border border-primary-200 shadow-sm rotate-[-8deg] z-10"
              aria-hidden="true"
            />
            <div
              className="absolute -right-2 top-6 w-12 h-4 bg-paper-tint border border-primary-200 shadow-sm rotate-[6deg] z-10"
              aria-hidden="true"
            />
            <div className="hero-sticky-note bg-primary-100 px-5 py-5 shadow-paper border border-primary-300 relative">
              <div
                className="absolute -top-1 right-10 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-primary-50 rotate-180"
                aria-hidden="true"
              />
              <p className="font-hand text-base md:text-lg text-ink leading-relaxed text-left whitespace-pre-line">
                {`I do not write code for a living — I engineer it to solve real problems, scale exponentially, and deliver impact.\n\nSoftware Engineer with a proven track record of crafting high-performance, maintainable web applications from intuitive frontends to robust, scalable backends.\n\nSeeking opportunities to build and grow great products. Let's create something special together.`}
              </p>
              <svg
                className="absolute -bottom-3 -right-2 w-10 h-10 text-primary-500/60"
                viewBox="0 0 40 40"
                aria-hidden="true"
              >
                <path d="M5 35 L35 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Tech Badges */}
          <div
            className="hero-reveal-up relative max-w-lg mx-auto lg:mx-0 mb-8"
            style={{ animationDelay: "550ms" }}
          >
            <div className="overflow-x-auto pb-1 sm:overflow-visible scrollbar-none">
              <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
                {techBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="hero-tech-badge inline-flex shrink-0 items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary-200 bg-paper-alt shadow-sketch-sm font-hand text-xs sm:text-sm text-ink whitespace-nowrap transition-all duration-500 hover:-translate-y-0.5 hover:shadow-md"
                    style={{ animationDelay: badge.delay }}
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0 bg-primary-500"
                      aria-hidden="true"
                    />
                    {badge.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="hero-reveal-up flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-5 mb-10 sm:mb-12"
            style={{ animationDelay: "700ms" }}
          >
            <a href="#projects" className="group relative w-full sm:w-auto">
              <div className="hero-sketch-btn bg-paper-alt text-ink px-4 py-2.5 sm:px-6 sm:py-3 font-display text-base sm:text-lg shadow-md flex items-center justify-center gap-2 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-lg">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500 group-hover:translate-x-1 transition-transform shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
                </svg>
                See Proof
              </div>
            </a>
            <a href="#contact" className="group w-full sm:w-auto">
              <div className="hero-stamp animate-hero-slam bg-primary-600 text-on-dark px-5 py-2.5 sm:px-7 sm:py-3 font-display text-base sm:text-lg border-4 border-primary-800 rounded-sm shadow-sketch group-hover:shadow-sketch-sm group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all duration-200 uppercase tracking-wide whitespace-nowrap text-center">
                Let&apos;s Ship It
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: ID Card */}
        <div
          className="hero-reveal-scale order-1 lg:order-2 flex justify-center lg:justify-end"
          style={{ animationDelay: "300ms" }}
        >
          <div className="relative animate-float-paper">
            {/* Hanging Paper Clip */}
            <svg
              className="absolute -top-10 left-1/2 -translate-x-1/2 w-8 h-16 text-on-canvas-muted z-20 drop-shadow-sm"
              viewBox="0 0 32 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                d="M16 4 C8 4 6 16 6 28 L6 48 C6 56 22 56 22 40 L22 20 C22 14 18 12 16 12 C14 12 12 14 12 18 L12 44"
                strokeLinecap="round"
              />
            </svg>

            {/* Availability Badge */}
            <div className="absolute -top-2 -right-4 sm:-right-8 z-30 bg-primary-200 px-2.5 py-1 font-hand text-xs text-ink shadow-md border border-primary-400 rotate-[6deg]">
              taking new projects ✦
            </div>

            {/* Card Body */}
            <div className="hero-id-badge relative bg-paper-alt rounded-xl shadow-paper border-2 border-primary-200 overflow-hidden w-56 sm:w-64 rotate-[2deg] hover:rotate-0 hover:shadow-paper transition-all duration-500">
              <div
                className="px-4 py-2.5 flex items-center justify-between"
                style={{ background: "linear-gradient(to right, var(--color-primary-700), var(--color-primary-500))" }}
              >
                <span className="font-display text-on-dark text-sm tracking-wide">
                  DEV ID
                </span>
                <span className="font-mono text-[10px] text-on-dark/80 bg-paper-alt/15 px-1.5 py-0.5 rounded">
                  #RAS-2026
                </span>
              </div>

              <div className="p-4 flex flex-col items-center">
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-lg overflow-hidden border-4 border-paper-alt shadow-paper mb-3 group">
                  <Image
                    alt="Rashed Molla Antor"
                    src="/profile.jpg"
                    fill
                    priority
                    sizes="(max-width: 640px) 144px, 160px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/25 via-transparent to-transparent pointer-events-none" />
                  <div
                    className="absolute top-1 left-1 w-5 h-3 bg-primary-100 border border-primary-200 rotate-[-12deg]"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute top-1 right-1 w-5 h-3 bg-primary-100 border border-primary-200 rotate-[10deg]"
                    aria-hidden="true"
                  />
                </div>
                <p className="font-display text-lg sm:text-xl text-ink text-center leading-tight">
                  Rashed Molla Antor
                </p>
                <p className="font-hand text-sm text-ink-muted mt-1 text-center">
                  Full-Stack Software Engineer
                </p>
              </div>

              {/* Barcode Lines */}
              <div className="px-4 pb-3 flex justify-center gap-[3px]" aria-hidden="true">
                <div className="bg-ink" style={{ width: "3px", height: "20px", opacity: 0.6 }} />
                <div className="bg-ink" style={{ width: "1px", height: "20px", opacity: 0.7 }} />
                <div className="bg-ink" style={{ width: "1px", height: "20px", opacity: 0.8 }} />
                <div className="bg-ink" style={{ width: "3px", height: "20px", opacity: 0.9 }} />
                <div className="bg-ink" style={{ width: "1px", height: "20px", opacity: 0.6 }} />
                <div className="bg-ink" style={{ width: "1px", height: "20px", opacity: 0.7 }} />
                <div className="bg-ink" style={{ width: "3px", height: "20px", opacity: 0.8 }} />
                <div className="bg-ink" style={{ width: "1px", height: "20px", opacity: 0.9 }} />
                <div className="bg-ink" style={{ width: "1px", height: "20px", opacity: 0.6 }} />
                <div className="bg-ink" style={{ width: "3px", height: "20px", opacity: 0.7 }} />
                <div className="bg-ink" style={{ width: "1px", height: "20px", opacity: 0.8 }} />
                <div className="bg-ink" style={{ width: "1px", height: "20px", opacity: 0.9 }} />
                <div className="bg-ink" style={{ width: "3px", height: "20px", opacity: 0.6 }} />
                <div className="bg-ink" style={{ width: "1px", height: "20px", opacity: 0.7 }} />
                <div className="bg-ink" style={{ width: "1px", height: "20px", opacity: 0.8 }} />
                <div className="bg-ink" style={{ width: "3px", height: "20px", opacity: 0.9 }} />
                <div className="bg-ink" style={{ width: "1px", height: "20px", opacity: 0.6 }} />
                <div className="bg-ink" style={{ width: "1px", height: "20px", opacity: 0.7 }} />
                <div className="bg-ink" style={{ width: "3px", height: "20px", opacity: 0.8 }} />
                <div className="bg-ink" style={{ width: "1px", height: "20px", opacity: 0.9 }} />
                <div className="bg-ink" style={{ width: "1px", height: "20px", opacity: 0.6 }} />
                <div className="bg-ink" style={{ width: "3px", height: "20px", opacity: 0.7 }} />
                <div className="bg-ink" style={{ width: "1px", height: "20px", opacity: 0.8 }} />
                <div className="bg-ink" style={{ width: "1px", height: "20px", opacity: 0.9 }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keep scrolling */}
      <div
        className="hero-reveal-fade absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ animationDelay: "1000ms" }}
        aria-hidden="true"
      >
        <span className="font-hand text-sm text-on-canvas-muted">keep scrolling</span>
        <svg
          className="w-5 h-5 text-on-canvas-muted hero-bounce"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
