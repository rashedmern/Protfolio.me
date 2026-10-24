import React from "react";

export default function Services() {
  const services = [
    {
      id: "6aa044e142544ec0ba63eeec",
      number: "01",
      title: "Full-Stack Web Applications",
      description: "End-to-end scalable web apps with React, Next.js & Node.js. Engineered for high performance, reliability, and smooth user experiences.",
      cardRotate: "rotate-0 md:-rotate-[1deg]",
      pinBg: "bg-primary-500",
      tapeBg: "bg-primary-100 border-primary-200",
      cardBg: "bg-paper border-primary-200",
      titleBox: "bg-primary-200 border-primary-400 text-primary-900",
      numberColor: "text-primary-400/35",
      favorite: false,
    },
    {
      id: "6aa044e142544ec0ba63eeee",
      number: "02",
      title: "Modern Frontend Engineering",
      description: "Pixel-perfect, ultra-responsive UIs crafted with modern frameworks. Fast render cycles, fluid micro-interactions, and accessible designs.",
      cardRotate: "rotate-0 md:rotate-[1.5deg]",
      pinBg: "bg-primary-400",
      tapeBg: "bg-primary-50 border-primary-200",
      cardBg: "bg-paper-alt border-primary-200",
      titleBox: "bg-primary-100 border-primary-300 text-primary-800",
      numberColor: "text-primary-300/35",
      favorite: false,
    },
    {
      id: "6aa044e242544ec0ba63eef0",
      number: "03",
      title: "Backend Systems & REST APIs",
      description: "High-throughput server architectures, RESTful APIs, and optimized databases (SQL/NoSQL) built to handle real traffic without bottlenecks.",
      cardRotate: "rotate-0 md:-rotate-[0.5deg]",
      pinBg: "bg-neutral-500",
      tapeBg: "bg-neutral-100 border-neutral-200",
      cardBg: "bg-paper border-neutral-300",
      titleBox: "bg-neutral-200 border-neutral-400 text-neutral-900",
      numberColor: "text-neutral-400/35",
      favorite: false,
    },
    {
      id: "6aa044e342544ec0ba63eef2",
      number: "04",
      title: "SaaS & MVP Development",
      description: "Taking your product idea from napkin sketch to live production fast. Clean architecture that is maintainable and ready to scale.",
      cardRotate: "rotate-0 md:rotate-[1deg]",
      pinBg: "bg-primary-600",
      tapeBg: "bg-primary-100 border-primary-300",
      cardBg: "bg-paper-tint border-primary-300",
      titleBox: "bg-primary-300 border-primary-500 text-primary-950",
      numberColor: "text-primary-500/35",
      favorite: false,
    },
    {
      id: "6aa044e342544ec0ba63eef4",
      number: "05",
      title: "AI Automation & Workflows",
      description: "Integrating intelligent LLM APIs, webhooks, and automation pipelines to streamline workflows and eliminate repetitive manual tasks.",
      cardRotate: "rotate-0 md:-rotate-[1.5deg]",
      pinBg: "bg-primary-300",
      tapeBg: "bg-primary-100 border-primary-200",
      cardBg: "bg-paper-alt border-primary-100",
      titleBox: "bg-primary-50 border-primary-300 text-primary-800",
      numberColor: "text-primary-300/35",
      favorite: true,
    },
    {
      id: "6aa044e442544ec0ba63eef6",
      number: "06",
      title: "Architecture & Code Audits",
      description: "Deep codebase refactoring, bottleneck elimination, database indexing, and scaling guidance to turn legacy chaos into clean maintainable software.",
      cardRotate: "rotate-0 md:rotate-[0.5deg]",
      pinBg: "bg-neutral-400",
      tapeBg: "bg-neutral-100 border-neutral-200",
      cardBg: "bg-paper border-neutral-200",
      titleBox: "bg-neutral-100 border-neutral-300 text-neutral-800",
      numberColor: "text-neutral-400/35",
      favorite: true,
    },
  ];

  return (
    <section id="services" className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14">
      {/* Header with folder tab */}
      <header className="relative z-10 flex flex-col items-center mb-10 md:mb-12 text-center">
        <div className="relative rotate-0 md:-rotate-[0.5deg] hover:rotate-0 transition-transform duration-500">
          <div
            className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-paper rotate-1 border border-primary-200 shadow-sm z-20"
            aria-hidden="true"
          />
          <div className="bg-[var(--paper-bg)] px-6 md:px-10 pt-3 pb-4 shadow-paper relative">
            <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-ink tracking-wide relative inline-block">
              What I Help You Build &amp; Ship
              <svg
                className="absolute -bottom-1 left-0 w-full h-3 text-primary-400/70"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.5" />
              </svg>
            </h2>
            <span className="absolute -top-1 -right-3 md:-right-4 font-display text-[10px] md:text-xs text-primary-700/80 border-2 border-primary-400/60 rounded-full w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rotate-12 bg-paper shadow-sm">
              06
            </span>
          </div>
        </div>

        <p className="max-w-xl mx-auto font-hand text-ink-muted text-sm md:text-base bg-paper border border-primary-200 px-4 py-1.5 shadow-paper mt-3 rotate-0 md:rotate-[-1.5deg] hover:rotate-0 transition-transform duration-300">
          Engineering robust software solutions for founders, startups, and growing teams. From crafting intuitive frontend interfaces to architecting high-performance backends and smart automations — here is how I deliver impact.
        </p>
      </header>

      {/* Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {services.map((svc) => (
          <article
            key={svc.id}
            id={svc.id}
            className={`group relative flex flex-col ${svc.cardRotate} hover:rotate-0 hover:scale-[1.02] transition-all duration-300`}
          >
            {/* Pushpin */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30" aria-hidden="true">
              <div className={`w-3 h-3 rounded-full ${svc.pinBg} border border-primary-800/30 shadow-sm`} />
              <div className="w-px h-1.5 bg-neutral-400/50 mx-auto" />
            </div>

            {/* Tape */}
            <div
              className={`absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 border shadow-sm z-20 ${svc.tapeBg}`}
              aria-hidden="true"
            />

            {/* Card Content */}
            <div className={`flex flex-col flex-1 border-2 p-5 shadow-paper relative min-h-[180px] ${svc.cardBg}`}>
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3
                  className={`font-display text-sm md:text-[15px] leading-tight border-2 px-2.5 py-1 -rotate-1 group-hover:rotate-0 transition-transform max-w-[75%] ${svc.titleBox}`}
                >
                  {svc.title}
                </h3>
                <span className={`font-display text-2xl md:text-3xl leading-none shrink-0 ${svc.numberColor}`} aria-hidden="true">
                  {svc.number}
                </span>
              </div>

              <p className="font-hand text-ink-muted text-sm leading-relaxed flex-1">
                {svc.description}
              </p>

              {svc.favorite && (
                <span className="mt-3 self-start font-hand text-[11px] md:text-xs bg-paper border border-primary-300/70 text-primary-800 px-2 py-0.5 -rotate-2 shadow-sm">
                  ★ Founder&apos;s favorite
                </span>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Tell Me What You're Building CTA */}
      <div className="mt-10 md:mt-12 text-center relative z-10">
        <a className="group inline-block" href="#contact">
          <span className="inline-flex items-center gap-2 bg-gradient-to-br from-[var(--paper-bg)] to-primary-50 text-primary-900 border-2 border-primary-300/70 px-8 py-3.5 font-display text-lg md:text-xl shadow-paper hover:shadow-paper hover:translate-y-0.5 transition-all -rotate-1 group-hover:rotate-0">
            Tell Me What You&apos;re Building
            <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </a>
      </div>

      <span
        className="absolute bottom-6 right-4 md:right-8 font-hand text-sm text-on-canvas-muted/40 rotate-[-10deg] select-none pointer-events-none hidden sm:block"
        aria-hidden="true"
      >
        ship &gt; perfect
      </span>
    </section>
  );
}
