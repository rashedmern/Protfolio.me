import React from "react";

const SKILL_CATEGORIES = [
  {
    title: "Frontend Magic",
    skills: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux/Zustand",
      "GSAP (for the fancy stuff)",
    ],
    cardBg: "bg-paper border-primary-200",
    titleBox: "bg-primary-200 border-primary-400 text-primary-900",
    tagBg: "bg-primary-100/70 border-primary-300/80 text-primary-900",
  },
  {
    title: "Backend Muscle",
    skills: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "REST APIs",
    ],
    cardBg: "bg-paper-alt border-primary-200",
    titleBox: "bg-primary-100 border-primary-300 text-primary-900",
    tagBg: "bg-primary-50 border-primary-200 text-primary-800",
  },
  {
    title: "Architecture & DB",
    skills: [
      "Database Design",
      "System Architecture",
      "Schema Modeling",
      "API Optimization",
      "Scalability",
      "Clean Code",
    ],
    cardBg: "bg-paper-tint border-primary-300",
    titleBox: "bg-primary-300 border-primary-500 text-primary-950",
    tagBg: "bg-paper border-primary-300 text-primary-900",
  },
  {
    title: "Security",
    skills: [
      "JWT & OAuth",
      "Rate Limiting",
      "Helmet.js",
      "OWASP Basics",
      "SSL/TLS",
      "Env Secrets",
    ],
    cardBg: "bg-paper border-neutral-300",
    titleBox: "bg-neutral-200 border-neutral-400 text-neutral-900",
    tagBg: "bg-neutral-100 border-neutral-300 text-neutral-800",
  },
  {
    title: "Testing",
    skills: [
      "Playwright",
      "Jest",
      "React Testing Library",
      "Postman",
      "API Testing",
      "E2E Flows",
    ],
    cardBg: "bg-paper-alt border-primary-100",
    titleBox: "bg-primary-50 border-primary-300 text-primary-800",
    tagBg: "bg-primary-100/60 border-primary-200 text-primary-900",
  },
  {
    title: "Monitoring",
    skills: [
      "Sentry",
      "Vercel Analytics",
      "Log Monitoring",
      "Uptime Checks",
      "Error Tracking",
      "Performance Metrics",
    ],
    cardBg: "bg-paper border-primary-300",
    titleBox: "bg-primary-400 border-primary-600 text-primary-950",
    tagBg: "bg-paper-tint border-primary-300 text-primary-900",
  },
  {
    title: "AI & Automation",
    skills: [
      "Cursor & Copilot",
      "ChatGPT",
      "n8n",
      "Zapier",
      "Prompt Engineering",
      "Workflow Automation",
    ],
    cardBg: "bg-paper-alt border-neutral-200",
    titleBox: "bg-neutral-100 border-neutral-300 text-neutral-800",
    tagBg: "bg-paper border-neutral-300 text-neutral-900",
  },
  {
    title: "Tools & Survival",
    skills: [
      "Git & GitHub",
      "Jira & ClickUp",
      "npm & pnpm",
      "Figma",
      "Googling Errors",
      "Coffee",
    ],
    cardBg: "bg-paper-tint border-primary-200",
    titleBox: "bg-primary-200 border-primary-300 text-primary-900",
    tagBg: "bg-primary-50 border-primary-200 text-primary-900",
  },
];

const EMOTIONAL_SKILLS = [
  { prefix: "a.", text: "Translating founder ideas into shippable scope" },
  { prefix: "b.", text: "Staying calm when prod goes down at 11pm" },
  { prefix: "c.", text: "Patience with 'just one small change'" },
  { prefix: "d.", text: "Resisting the urge to rewrite legacy code" },
];

const CARD_TILT = [
  "-rotate-[0.5deg]",
  "rotate-[0.5deg]",
  "-rotate-[1deg]",
  "rotate-[1deg]",
  "-rotate-[0.7deg]",
  "rotate-[0.8deg]",
  "-rotate-[0.5deg]",
  "rotate-[0.6deg]",
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16 overflow-visible">
      {/* Background doodles */}
      <div className="absolute inset-0 pointer-events-none overflow-visible" aria-hidden="true">
        <svg className="absolute top-[8%] left-[2%] w-14 h-14 text-primary-400/25 -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" d="M14.7 6.3a4 4 0 0 0-5.66 5.66l-5.1 5.1a1 1 0 0 0 1.42 1.42l5.1-5.1a4 4 0 0 0 5.66-5.66l-2.12 2.12-3.54-3.54 2.12-2.12z" />
        </svg>
        <svg className="absolute top-[15%] right-[4%] w-20 h-20 text-primary-400/20 rotate-6" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="8" y="20" width="48" height="36" rx="4" strokeDasharray="4 3" />
          <path d="M20 20 V12 C20 8 44 8 44 12 V20" />
          <circle cx="32" cy="38" r="6" />
        </svg>
        <div className="absolute bottom-[12%] left-[6%] w-24 h-24 rounded-full border-[12px] border-primary-800/5 blur-[1px]" />
        <span className="absolute bottom-[20%] right-[8%] font-hand text-lg text-on-canvas-muted/40 rotate-[-8deg] select-none">
          tools &gt; talent
        </span>
        <svg className="absolute bottom-[8%] right-[3%] w-16 h-10 text-on-canvas-muted/25 rotate-[-15deg]" viewBox="0 0 64 40" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 36 L60 4" strokeLinecap="round" />
        </svg>
      </div>

      {/* Header with 4 metal bolts */}
      <header className="relative z-10 text-center mb-10 md:mb-14">
        <div className="inline-block relative reveal-down">
          <div className="relative -rotate-[0.5deg] hover:rotate-0 transition-transform duration-500">
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-paper rotate-1 border border-primary-200 shadow-sm z-20"
              aria-hidden="true"
            />
            <div className="relative bg-gradient-to-b from-neutral-100 to-neutral-200/80 border-2 border-neutral-400/50 px-8 md:px-12 py-4 shadow-paper">
              {/* 4 Bolts */}
              <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-neutral-400/60 shadow-inner" aria-hidden="true" />
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-neutral-400/60 shadow-inner" aria-hidden="true" />
              <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-neutral-400/60 shadow-inner" aria-hidden="true" />
              <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-neutral-400/60 shadow-inner" aria-hidden="true" />

              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink tracking-wide relative inline-block">
                The Stack Behind It
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
          <p className="font-hand text-ink-muted text-sm md:text-base mt-4 inline-block bg-paper border border-primary-200 px-4 py-1.5 shadow-sm rotate-[1.5deg] hover:rotate-0">
            everything i keep within arm&apos;s reach
          </p>
        </div>
      </header>

      {/* Grid of Skill Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-8">
        {SKILL_CATEGORIES.map((cat, idx) => (
          <article
            key={cat.title}
            className={`relative border-2 border-dashed rounded-lg p-4 pt-5 min-h-[170px] shadow-paper ${
              cat.cardBg
            } ${CARD_TILT[idx % CARD_TILT.length]} hover:rotate-0 hover:scale-[1.02] transition-all duration-300`}
          >
            {/* Top Tape */}
            <div
              className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-paper-tint border border-primary-200/80 shadow-sm rotate-[-2deg]"
              aria-hidden="true"
            />

            {/* Title Badge */}
            <h3
              className={`inline-block font-hand font-bold text-sm md:text-base px-3 py-1 rounded-sm border mb-3 -rotate-1 ${cat.titleBox}`}
            >
              {cat.title}
            </h3>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className={`font-hand text-xs md:text-sm px-2.5 py-0.5 rounded-full border shadow-sketch-sm hover:scale-105 transition-transform ${cat.tagBg}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Emotional Skills bonus sticky note */}
      <div className="relative z-10 max-w-xl mx-auto rotate-1 hover:rotate-0 transition-transform duration-300">
        <div className="bg-[var(--paper-bg)] text-ink border-2 border-primary-300/90 rounded-lg p-6 sm:p-7 shadow-paper relative overflow-hidden">
          <div
            className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-paper border border-primary-300 rotate-1 shadow-sm"
            aria-hidden="true"
          />
          <h3 className="font-display font-bold text-lg sm:text-xl text-ink flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-red-500 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            Emotional Skills
            <span className="font-hand text-sm sm:text-base text-red-600 font-bold bg-red-100/90 px-2.5 py-0.5 rounded-md border border-red-300 ml-1.5 shadow-sm inline-block">
              (bonus)
            </span>
          </h3>
          <ul className="space-y-2.5">
            {EMOTIONAL_SKILLS.map((item) => (
              <li key={item.prefix} className="font-hand text-base sm:text-lg text-ink font-semibold flex items-start gap-2.5 leading-snug">
                <span className="text-primary-700 font-mono text-sm mt-0.5 shrink-0 font-bold">{item.prefix}</span>
                <span className="text-neutral-900 tracking-wide">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
