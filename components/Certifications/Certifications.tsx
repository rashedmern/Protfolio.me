import React from "react";

export default function Certifications() {
  return (
    <div id="official-papers">
      <section
        id="certifications"
        className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-16 overflow-visible"
      >
        {/* Background badges */}
        <div className="absolute inset-0 pointer-events-none overflow-visible" aria-hidden="true">
          <svg className="absolute top-[8%] right-[5%] w-14 h-14 text-primary-400/25 rotate-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 0 0 1.946-.806 3.42 3.42 0 0 1 4.438 0 3.42 3.42 0 0 0 1.946.806 3.42 3.42 0 0 1 3.138 3.138 3.42 3.42 0 0 0 .806 1.946 3.42 3.42 0 0 1 0 4.438 3.42 3.42 0 0 0-.806 1.946 3.42 3.42 0 0 1-3.138 3.138 3.42 3.42 0 0 0-1.946.806 3.42 3.42 0 0 1-4.438 0 3.42 3.42 0 0 0-1.946-.806 3.42 3.42 0 0 1-3.138-3.138 3.42 3.42 0 0 0-.806-1.946 3.42 3.42 0 0 1 0-4.438 3.42 3.42 0 0 0 .806-1.946 3.42 3.42 0 0 1 3.138-3.138z" />
          </svg>
          <svg className="absolute bottom-[15%] left-[6%] w-10 h-10 text-on-canvas-muted/25 -rotate-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" d="M12 14l6.16-3.422a12.083 12.083 0 0 1 .665 6.479A11.952 11.952 0 0 0 12 20.055a11.952 11.952 0 0 0-6.824-2.998 12.078 12.078 0 0 1 .665-6.479L12 14z" />
          </svg>
          <span className="absolute bottom-[22%] right-[6%] font-hand text-sm text-on-canvas-muted/40 rotate-[6deg]">
            frame later
          </span>
        </div>

        {/* Section Header */}
        <header className="relative z-10 text-center mb-10 md:mb-12">
          <div className="inline-block reveal-down">
            <div className="relative rotate-0 md:-rotate-[0.5deg] hover:rotate-0 transition-transform duration-500">
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-paper rotate-1 border border-primary-200 shadow-sm z-20"
                aria-hidden="true"
              />
              <div className="absolute -top-1 right-2 md:right-6 z-20 opacity-70" aria-hidden="true">
                <div className="w-3 h-12 border-[3px] border-neutral-400 rounded-full rotate-12" />
                <div className="w-3 h-8 border-[3px] border-neutral-400 rounded-full rotate-12 -mt-4 ml-0.5" />
              </div>
              <div className="relative bg-paper border-2 border-primary-300/70 px-8 md:px-12 pt-4 pb-5 rounded-t-xl shadow-paper">
                <div
                  className="absolute -top-0 left-6 w-20 h-3 bg-paper-tint border border-primary-300/60 rounded-t-md -translate-y-full"
                  aria-hidden="true"
                />
                <h2 className="font-display text-3xl md:text-4xl text-ink tracking-wide relative inline-block">
                  Useless Papers
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-3 text-primary-500/60"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.5" />
                  </svg>
                </h2>
              </div>
            </div>
            <p
              className="font-hand text-ink-muted text-sm md:text-base mt-4 inline-block bg-paper border border-primary-200 px-4 py-1.5 shadow-sm rotate-0 md:rotate-[1.5deg] hover:rotate-0 reveal-fade"
              style={{ animationDelay: "200ms" }}
            >
              proof i sat through things (and survived)
            </p>
          </div>
        </header>

        {/* Education Sub-section */}
        <div className="flex items-center gap-3 mb-5 reveal-fade" style={{ animationDelay: "150ms" }}>
          <h3 className="font-display text-lg md:text-xl text-ink bg-paper-alt/80 border border-primary-200 px-3 py-1 shadow-sm -rotate-1">
            Education
          </h3>
          <div className="flex-1 border-b border-dashed border-primary-300/50" aria-hidden="true" />
          <span className="font-display text-[10px] text-green-700/70 border border-green-400/40 px-2 py-0.5 rotate-6 bg-green-50/80 uppercase tracking-wide">
            CURRENT
          </span>
        </div>

        <div className="max-w-xl mx-auto mb-8">
          {/* Degree - University of Asia Pacific */}
          <article
            className="relative bg-paper-alt/95 border-2 border-primary-200 rounded-md shadow-paper rotate-0 md:-rotate-[1deg] hover:rotate-0 transition-all duration-300 reveal-up"
            style={{ animationDelay: "300ms" }}
          >
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-paper border border-primary-200 shadow-sm z-10 -rotate-1" aria-hidden="true" />
            <div className="px-5 pt-6 pb-5 space-y-2">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <h4 className="font-hand text-lg md:text-xl font-bold text-ink leading-snug">
                  B.Sc. in Computer Science & Engineering (CSE)
                </h4>
                <span className="shrink-0 font-sans text-xs font-semibold text-primary-900 bg-paper border border-primary-300/60 px-3 py-0.5 rounded-full whitespace-nowrap">
                  Undergrad (In Progress)
                </span>
              </div>
              <p className="font-sans text-base text-ink font-medium">University of Asia Pacific (UAP)</p>
              <p className="font-hand text-sm text-primary-800 bg-paper inline-block px-2 py-0.5 rounded border border-primary-200 rotate-[0.5deg]">
                ✦ Still undergrad — balancing core engineering fundamentals & real product development.
              </p>
            </div>
          </article>
        </div>

        {/* Tear Here Divider */}
        <div className="relative flex items-center gap-3 py-3 reveal-fade mb-10" style={{ animationDelay: "300ms" }} aria-hidden="true">
          <div className="flex-1 border-t-2 border-dashed border-primary-400" />
          <span className="font-hand text-sm font-bold text-primary-900 bg-paper px-4 py-1.5 border-2 border-dashed border-primary-400 rounded-md rotate-[-1.5deg] shadow-sm tracking-wide">
            ✂ tear here
          </span>
          <div className="flex-1 border-t-2 border-dashed border-primary-400" />
        </div>

        {/* Certifications Sub-section */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 reveal-fade" style={{ animationDelay: "350ms" }}>
            <h3 className="font-display text-lg md:text-xl text-ink bg-paper-alt/80 border border-primary-200 px-3 py-1 shadow-sm rotate-[0.5deg]">
              Certification
            </h3>
            <div className="flex items-center gap-2">
              <span className="font-display text-sm text-primary-800 bg-paper border-2 border-primary-400/60 rounded-full w-9 h-9 flex items-center justify-center rotate-6 shadow-sm">
                09
              </span>
              <span className="font-hand text-xs text-ink-muted">collected</span>
            </div>
          </div>

          {/* Funny Reality Check Card */}
          <div className="max-w-2xl mx-auto rotate-0 md:rotate-[-0.5deg] hover:rotate-0 transition-transform duration-300">
            <div className="relative bg-[var(--paper-bg)] border-2 border-primary-300 rounded-lg p-6 sm:p-8 shadow-paper text-center">
              {/* Tape */}
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-paper border border-primary-300 shadow-sm rotate-1"
                aria-hidden="true"
              />
              <p className="font-display font-bold text-xl sm:text-2xl text-ink mb-3 leading-snug">
                📜 Papers make recruiters happy, but clean code pays the server bill.
              </p>
              <p className="font-hand text-base sm:text-lg text-primary-800 italic font-semibold leading-relaxed">
                &ldquo;Certificates expire, bugs don&apos;t care about your GPA, and prod crashes at 2 AM regardless.&rdquo;
              </p>
              <div className="mt-3 inline-block">
                <span className="font-hand text-base sm:text-lg text-primary-950 font-bold bg-primary-200/80 border border-primary-400 px-3 py-1 rounded shadow-sm rotate-[-1deg] inline-block whitespace-nowrap">
                  Skills &gt; Paper, always. ✦
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
