import React from "react";

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string;
  highlight: string;
  nda?: boolean;
  tilt: string;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Archiom",
    role: "Software Engineer Intern",
    duration: "Present",
    description:
      "Working on real-world web applications and internal tools. Collaborating with senior engineers to implement responsive UI features, integrate clean REST APIs, and optimize frontend performance.",
    highlight: "Learning fast, shipping consistently, and turning complex design requirements into solid code.",
    tilt: "rotate-0 md:-rotate-[1deg] md:translate-x-2",
  },
  {
    company: "Independent Projects & Freelance",
    role: "Full-Stack Developer",
    duration: "2024 - Present",
    description:
      "Engineering full-stack web products (like SkillMatch, MAX THERMAL, and FAIZA & CO) from zero to production. Building responsive frontends with Next.js & React and crafting clean server architectures.",
    highlight: "Delivering production-ready solutions with pixel precision and zero fluff.",
    tilt: "rotate-0 md:rotate-[1.5deg] md:-translate-x-1",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-16 overflow-visible">
      {/* Header */}
      <header className="relative z-10 text-center mb-10 md:mb-14">
        <div className="inline-block reveal-down">
          <div className="relative rotate-0 md:-rotate-[0.5deg] hover:rotate-0 transition-transform duration-500">
            {/* Paper clips */}
            <div className="absolute -top-1 right-4 md:right-8 z-20 opacity-70" aria-hidden="true">
              <div className="w-3 h-12 border-[3px] border-neutral-400 rounded-full rotate-12" />
              <div className="w-3 h-8 border-[3px] border-neutral-400 rounded-full rotate-12 -mt-4 ml-0.5" />
            </div>

            <div className="relative bg-paper border-2 border-primary-300/70 px-8 md:px-12 pt-4 pb-5 rounded-t-xl shadow-paper">
              <div
                className="absolute -top-0 left-6 w-20 h-3 bg-paper-tint border border-primary-300/60 rounded-t-md -translate-y-full"
                aria-hidden="true"
              />
              <h2 className="font-display text-3xl md:text-4xl text-ink tracking-wide relative inline-block">
                Where I&apos;ve Built
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
            official-ish records from the grind
          </p>
        </div>
      </header>

      {/* Timeline container */}
      <div className="relative z-10">
        {/* Dashed vertical line */}
        <div
          className="hidden sm:block absolute left-4 md:left-5 top-6 bottom-6 w-0 border-l-2 border-dashed border-primary-300/50 pointer-events-none -translate-x-1/2"
          aria-hidden="true"
        />

        <div className="space-y-8 md:space-y-10">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.company}
              className="relative flex items-start gap-3 md:gap-5 w-full reveal-up"
              style={{ animationDelay: `${250 + idx * 120}ms` }}
            >
              {/* Dot */}
              <div className="hidden sm:flex w-8 md:w-10 shrink-0 justify-center pt-6">
                <div
                  className="w-4 h-4 rounded-full bg-paper-alt border-2 border-primary-400 shadow-sm relative z-10"
                  aria-hidden="true"
                />
              </div>

              {/* Card */}
              <article
                className={`flex-1 min-w-0 relative md:max-w-[96%] ${exp.tilt} hover:rotate-0 hover:translate-x-0 transition-transform duration-300`}
              >
                {/* Tape */}
                <div
                  className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-paper border border-primary-200 shadow-sm -rotate-1 z-20"
                  aria-hidden="true"
                />

                <div className="bg-paper-alt/95 border-2 border-primary-200 rounded-lg shadow-paper overflow-hidden">
                  {/* Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 bg-paper border-b border-dashed border-primary-200 px-5 py-3">
                    <h3 className="font-display text-xl md:text-2xl text-ink leading-tight">
                      {exp.company}
                    </h3>
                    <span className="self-start sm:self-auto font-sans text-xs md:text-sm font-semibold text-primary-900 bg-paper border border-primary-300/60 px-3 py-1 rounded-full whitespace-nowrap rotate-[0.5deg]">
                      {exp.duration}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="px-5 py-4 md:px-6 md:py-5 space-y-3">
                    <p className="font-hand text-lg md:text-xl font-bold text-ink">
                      {exp.role}
                    </p>
                    <p className="font-sans text-[15px] md:text-base text-ink leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Highlight Note */}
                    <div className="relative mt-2 rotate-[-0.5deg]">
                      <div className="flex gap-3 items-start bg-paper border border-primary-200/50 rounded-sm px-4 py-3 shadow-paper">
                        <span className="font-display text-primary-500 text-lg leading-none mt-0.5 shrink-0" aria-hidden="true">
                          ★
                        </span>
                        <p className="font-hand text-sm md:text-base text-ink-muted leading-snug italic">
                          {exp.highlight}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* NDA Stamp if applicable */}
                {exp.nda && (
                  <span
                    className="absolute -top-3 -right-2 font-display text-[10px] text-primary-700/80 border-2 border-primary-500/50 px-2 py-0.5 rotate-12 bg-red-50/80 uppercase tracking-wide pointer-events-none"
                    aria-hidden="true"
                  >
                    nda
                  </span>
                )}
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
