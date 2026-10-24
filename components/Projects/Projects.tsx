import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  status: "Shipped it!" | "Working on it" | "In the graveyard" | "Upcoming";
  category: string;
  imageUrl?: string;
  link?: string;
  caseStudyUrl?: string;
}

const PROJECTS: Project[] = [
  {
    id: "project-skillmatch",
    title: "SkillMatch",
    description:
      "Connecting computer science students directly with engineering teams ready to hire verified interns. Features role benchmarks, track-based matching, and direct hiring pipelines.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    status: "Shipped it!",
    category: "EdTech & Hiring Platform",
    imageUrl: "/skillmatch-real.png",
    link: "https://skillmatchapp-ten.vercel.app/",
  },
  {
    id: "project-max-thermal",
    title: "MAX THERMAL",
    description:
      "Engineered high-performance web platform for EPS & cork sheet industrial solutions. Features factory-direct product specifications, dynamic density calculators, and bilingual quotation workflows.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    status: "Shipped it!",
    category: "Industrial & Manufacturing SaaS",
    imageUrl: "/max-thermal.png",
    link: "https://max-thermal.vercel.app/#home",
  },
  {
    id: "project-faiza",
    title: "FAIZA & CO",
    description:
      "A luxury fashion and modern apparel e-commerce experience. Crafted with high-fashion aesthetics, fluid micro-interactions, responsive collections showcase, and seamless cart checkout.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    status: "Shipped it!",
    category: "Luxury E-Commerce",
    imageUrl: "/faiza.png",
    link: "https://faiza-co.vercel.app/",
  },
];

const STATUS_STYLES: Record<string, string> = {
  "Shipped it!": "border-emerald-700/60 text-emerald-800 bg-emerald-50",
  "Working on it": "border-primary-500/70 text-primary-700 bg-primary-50",
  "In the graveyard": "border-neutral-500/70 text-neutral-700 bg-neutral-100",
  Upcoming: "border-sky-700/50 text-sky-800 bg-sky-50",
};

const CARD_ROTATES = ["rotate-0 md:-rotate-1", "rotate-0 md:rotate-1", "rotate-0 md:-rotate-[0.5deg]", "rotate-0 md:rotate-[0.5deg]"];
const TECH_ROTATES = ["rotate-0", "rotate-1", "-rotate-1", "rotate-[0.5deg]"];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14">
      {/* Header */}
      <header className="relative mb-6 md:mb-8 pt-2 md:pt-3">
        <div className="relative flex flex-col items-center -mt-1 z-10">
          <div className="flex justify-center gap-28 md:gap-40 mb-0.5" aria-hidden="true">
            <div className="w-px h-3 md:h-4 bg-primary-400/45" />
            <div className="w-px h-3 md:h-4 bg-primary-400/45" />
          </div>
          <div className="relative rotate-0 md:-rotate-[0.5deg] hover:rotate-0 transition-transform duration-500">
            <div
              className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-paper rotate-1 border border-primary-200 shadow-sm z-20"
              aria-hidden="true"
            />
            <div className="bg-[var(--paper-bg)] px-6 md:px-10 pt-3 pb-4 shadow-paper relative">
              <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-ink tracking-wide relative inline-block">
                Shipped Work
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
          <div className="relative mt-2 md:mt-3 rotate-0 md:rotate-[-1.5deg] hover:rotate-0 transition-transform duration-300">
            <p className="font-hand text-ink-muted text-sm md:text-base bg-paper border border-primary-200 px-4 py-1.5 shadow-paper">
              real products, live links, real users
            </p>
          </div>
        </div>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch mb-10">
        {PROJECTS.map((project, idx) => (
          <article
            key={project.id}
            className={`group relative ${CARD_ROTATES[idx % CARD_ROTATES.length]} hover:rotate-0 hover:-translate-y-1 transition-all duration-300 reveal-up`}
            style={{ animationDelay: `${60 * Math.min(idx, 8)}ms` }}
          >
            {/* Category Tag sticking up */}
            <div className="relative z-10 ml-5 w-fit -mb-px">
              <span className="inline-block font-hand text-xs md:text-sm text-primary-900 bg-paper border border-b-0 border-primary-300/70 px-4 pt-1 pb-1.5 rounded-t-md shadow-paper">
                {project.category}
              </span>
            </div>

            {/* Main Card */}
            <div className="relative bg-[var(--paper-bg)] border border-primary-200 shadow-paper px-5 pt-5 pb-5 h-full flex flex-col">
              {/* Paperclip */}
              <svg
                className="absolute -top-6 left-1/2 -translate-x-1/2 w-6 h-12 text-ink-muted/70 z-20 drop-shadow-sm rotate-[-6deg]"
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

              {/* Status Stamp */}
              <span
                className={`absolute top-4 right-4 z-20 font-display text-[10px] md:text-xs uppercase tracking-wider border-2 border-dashed px-2 py-0.5 -rotate-6 ${
                  STATUS_STYLES[project.status]
                }`}
              >
                {project.status}
              </span>

              {/* Image or Camera illustration */}
              {project.imageUrl ? (
                <div className="relative mb-4 mt-1">
                  <div className="aspect-3/2 overflow-hidden border border-primary-200 bg-paper">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={480}
                      height={320}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                  </div>
                </div>
              ) : (
                <div className="relative mb-4 mt-1 aspect-3/2 border border-dashed border-primary-300/60 bg-paper flex flex-col items-center justify-center gap-2">
                  <svg
                    className="w-10 h-10 text-primary-400/40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <circle cx="12" cy="13" r="3" />
                  </svg>
                  <span className="font-hand text-xs text-primary-700/50 -rotate-2">
                    no screenshot on file
                  </span>
                </div>
              )}

              {/* Title & Description */}
              <h3 className="font-display text-lg md:text-xl text-ink leading-tight mb-2 pr-20 group-hover:text-primary-800 transition-colors">
                {project.title}
              </h3>
              <p className="font-hand text-sm md:text-base text-ink-muted leading-snug mb-4 grow">
                {project.description}
              </p>

              {/* Tech Stack */}
              {project.techStack.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tech}
                      className={`font-hand text-xs md:text-sm text-primary-900 bg-paper-alt border border-primary-300/70 px-2 py-0.5 shadow-sketch-sm ${
                        TECH_ROTATES[tIdx % TECH_ROTATES.length]
                      } hover:rotate-0 hover:scale-105 transition-transform`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              {(project.link || project.caseStudyUrl) && (
                <div className="flex flex-wrap items-center gap-2.5 pt-3 border-t border-dashed border-primary-200">
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-xs md:text-sm text-on-dark bg-primary-600 px-3 py-1 -rotate-1 hover:rotate-0 shadow-sketch-sm transition-transform"
                    >
                      LIVE LINK
                    </Link>
                  )}
                  {project.caseStudyUrl && (
                    <Link
                      href={project.caseStudyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-xs md:text-sm text-ink-muted bg-paper border border-primary-300 px-3 py-1 rotate-1 hover:rotate-0 shadow-sketch-sm transition-transform"
                    >
                      CASE FILE
                    </Link>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center">
        <Link
          href="https://www.notion.so/swerashed/224dcf97562481658568e0000a98b10a?v=224dcf97562481d79a66000c44f7aeb7&source=copy_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block group"
        >
          <span className="inline-flex items-center gap-2 bg-paper text-ink font-display text-base md:text-lg border-2 border-primary-300 px-6 py-2.5 shadow-paper -rotate-1 group-hover:rotate-0 transition-transform">
            View More
            <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
