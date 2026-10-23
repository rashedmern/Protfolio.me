import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  title: string;
  excerpt: string;
  imageUrl: string;
  link: string;
  tilt: string;
  tapeTilt: string;
}

const POSTS: BlogPost[] = [
  {
    title: "How to Get a Free AI Coding Assistant in VS Code",
    excerpt: "Because your wallet deserves some rest.",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*U8jkvKovJO279ZB9Yk0O2Q.png",
    link: "https://medium.com/@rashedxali/how-to-get-a-free-ai-coding-assistant-in-vs-code-like-copilot-but-free-7cab66422796",
    tilt: "rotate-1",
    tapeTilt: "-rotate-2",
  },
  {
    title: "How a Simple Project Structure Guide Reduced Chaos in Our Next.js Codebase",
    excerpt: "Folders stopped fighting. Developers too.",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*IhvlyY7ZSsgjo-HEEDOmlg.png",
    link: "https://medium.com/@rashedxali/how-a-simple-project-structure-guide-reduced-chaos-in-our-next-js-codebase-1c4dcba2d601",
    tilt: "-rotate-[1.5deg]",
    tapeTilt: "rotate-1",
  },
  {
    title: "How to Bypass Vercel Upload Limits in Next.js",
    excerpt: "When limits exist, developers find routes.",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*StslEdY_tZymlsnlLFVPnA.png",
    link: "https://medium.com/@rashedxali/how-to-bypass-vercel-upload-limits-in-next-js-using-use-client-for-client-side-file-uploads-b045ed3b65a5",
    tilt: "rotate-[1.5deg]",
    tapeTilt: "-rotate-1",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14 overflow-visible">
      {/* Header */}
      <header className="relative mb-8 md:mb-10 pt-2 md:pt-3 text-center">
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
                Random Thoughts
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
              brain dumps worth publishing (maybe)
            </p>
          </div>
        </div>
      </header>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
        {POSTS.map((post) => (
          <article
            key={post.title}
            className={`group relative flex flex-col ${post.tilt} hover:rotate-0 hover:scale-[1.02] transition-all duration-300`}
          >
            {/* Pushpin */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 drop-shadow-sm" aria-hidden="true">
              <div className="w-3.5 h-3.5 rounded-full bg-primary-600 border border-primary-800 shadow-inner relative">
                <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-paper-alt/40 rounded-full blur-[1px]" />
              </div>
              <div className="w-0.5 h-2 bg-neutral-400/60 mx-auto -mt-0.5" />
            </div>

            {/* Tape */}
            <div
              className={`absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-paper border border-primary-200 shadow-sm z-20 ${post.tapeTilt}`}
              aria-hidden="true"
            />

            {/* Card Content */}
            <div className="flex flex-col flex-1 bg-[var(--paper-bg)] pt-3 px-3 pb-4 shadow-paper">
              <div className="w-full aspect-3/2 mb-2.5 border border-primary-200 overflow-hidden relative bg-paper shrink-0">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={400}
                  height={250}
                  unoptimized
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-2 right-2 font-hand text-[10px] uppercase tracking-wide bg-paper-alt/90 border border-primary-200 text-primary-900 px-2 py-0.5 rotate-2 shadow-sm">
                  medium
                </span>
                <Link
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-primary-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20"
                >
                  <span className="bg-primary-600 text-on-dark font-display px-4 py-1.5 text-sm shadow-sketch-sm -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                    Read on Medium
                  </span>
                </Link>
              </div>

              <div className="flex flex-col flex-1 px-0.5">
                <h3 className="font-display font-bold text-base md:text-lg text-ink mb-1 leading-snug line-clamp-2 group-hover:text-primary-800 transition-colors">
                  {post.title}
                </h3>
                <p className="font-hand text-xs md:text-sm text-ink-muted italic leading-snug mb-3 line-clamp-2 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex justify-end pt-2 mt-auto border-t border-dashed border-primary-200">
                  <Link
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-xs md:text-sm bg-paper border border-primary-300/70 text-primary-900 px-3 py-1 shadow-sketch-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all rotate-1 hover:rotate-0 inline-flex items-center gap-1"
                  >
                    Read on Medium
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
