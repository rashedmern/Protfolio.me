import React from "react";

export default function Products() {
  return (
    <section id="products" className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14">
      {/* Header */}
      <header className="relative mb-6 md:mb-8 pt-2 md:pt-3">
        <div className="relative flex flex-col items-center -mt-1 z-10">
          <div className="flex justify-center gap-28 md:gap-40 mb-0.5" aria-hidden="true">
            <div className="w-px h-3 md:h-4 bg-primary-400/45" />
            <div className="w-px h-3 md:h-4 bg-primary-400/45" />
          </div>
          <div className="relative -rotate-[0.5deg] hover:rotate-0 transition-transform duration-500">
            <div
              className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-paper rotate-1 border border-primary-200 shadow-sm z-20"
              aria-hidden="true"
            />
            <div className="bg-[var(--paper-bg)] px-6 md:px-10 pt-3 pb-4 shadow-paper relative">
              <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-ink tracking-wide relative inline-block">
                Products I Own
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
                03
              </span>
            </div>
          </div>
          <div className="relative mt-2 md:mt-3 rotate-[-1.5deg] hover:rotate-0 transition-transform duration-300">
            <p className="font-hand text-ink-muted text-sm md:text-base bg-paper border border-primary-200 px-4 py-1.5 shadow-paper">
              from napkin sketch to deployment — my own bets
            </p>
          </div>
        </div>
      </header>

      {/* Coming Soon Showcase */}
      <div className="w-full max-w-3xl mx-auto mb-10 pt-8">
        <div className="relative -rotate-[0.5deg] hover:rotate-0 transition-transform duration-300">
          {/* Top Tape */}
          <div
            className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-7 bg-paper rotate-1 border border-primary-300 shadow-sm z-30"
            aria-hidden="true"
          />

          {/* Paperclip */}
          <svg
            className="absolute -top-8 left-8 w-7 h-16 text-ink-muted/60 z-30 drop-shadow-sm rotate-[-8deg]"
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

          {/* Card Body */}
          <div className="relative bg-[var(--paper-bg)] border-2 border-primary-300 shadow-paper pt-14 pb-12 px-6 sm:px-14 text-center rounded-sm">
            {/* Stamp Badge with plenty of margin */}
            <div className="mb-6 flex justify-center">
              <span className="font-display text-xs sm:text-sm tracking-wider uppercase text-primary-900 bg-paper border border-primary-300 px-4 py-1.5 -rotate-2 inline-block shadow-sm">
                UNDER CONSTRUCTION ✦
              </span>
            </div>

            {/* Main Coming Soon Heading with dedicated breathing room */}
            <h3 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-ink tracking-widest my-4">
              COMING SOON
            </h3>

            <p className="font-hand text-lg sm:text-xl text-ink-muted max-w-md mx-auto mt-4">
              Something exciting is brewing in the lab. Stay tuned!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
