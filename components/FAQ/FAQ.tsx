"use client";

import React, { useState } from "react";

interface FAQItem {
  id: string;
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    q: "Who should hire Rashed Molla Antor?",
    a: "Founders and solo builders who move fast and need a technical partner — not just a coder. Ideal if you're launching an MVP, fixing a slow or unstable app, or drowning in manual workflows you want automated.",
  },
  {
    id: "faq-2",
    q: "How fast can you ship an MVP?",
    a: "Most MVPs ship in about 7 days when scoped tight. Web, mobile, and AI-powered apps — built right, not hacked together. You get something production-ready you can put in front of real users.",
  },
  {
    id: "faq-3",
    q: "What is AI automation for startups?",
    a: "I replace repetitive manual workflows with custom automations and AI agents — cutting up to 50% of the time and cost your team spends on tasks that shouldn't need a human. Onboarding, support, data entry, reporting — the boring stuff.",
  },
  {
    id: "faq-4",
    q: "What are agentic workflows?",
    a: "Custom AI agents that run in the background and handle work for you — processing tickets, generating reports, routing data, or managing multi-step tasks without you babysitting every step.",
  },
  {
    id: "faq-5",
    q: "Do you work remotely with international clients?",
    a: "Yes. Based in Dhaka, Bangladesh, I work remotely with founders worldwide. Time zones are handled — async updates, clear communication, and shipping on schedule.",
  },
  {
    id: "faq-6",
    q: "How do I fix a slow Next.js app after launch?",
    a: "Common fixes: optimize images and fonts, audit bundle size, add caching layers, fix N+1 API calls, and profile server components vs client components. I've cut load times by 20%+ on production apps — happy to audit yours.",
  },
  {
    id: "faq-7",
    q: "What tech stack do you use?",
    a: "React, Next.js, TypeScript, Node.js, PostgreSQL, Tailwind CSS, and modern AI tooling (LLMs, agent frameworks, automation pipelines). Stack is chosen per project — whatever ships fastest and scales cleanest.",
  },
  {
    id: "faq-8",
    q: "How do I get started?",
    a: "Reach out via the contact form, email rashedmolla541@gmail.com, or DM on LinkedIn. Tell me what you're building or what's broken — I'll tell you honestly if I'm the right fit and what the first week looks like.",
  },
];

const CARD_TILTS = [
  "-rotate-[0.3deg]",
  "rotate-[0.4deg]",
  "-rotate-[0.5deg]",
  "rotate-[0.3deg]",
  "-rotate-[0.4deg]",
  "rotate-[0.5deg]",
  "-rotate-[0.3deg]",
  "rotate-[0.4deg]",
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-14">
      {/* Header */}
      <header className="relative z-10 flex flex-col items-center mb-10 md:mb-12 text-center">
        <div className="relative -rotate-[0.5deg] hover:rotate-0 transition-transform duration-500">
          <div
            className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-paper rotate-1 border border-primary-200 shadow-sm z-20"
            aria-hidden="true"
          />
          <div className="bg-[var(--paper-bg)] px-6 md:px-10 pt-3 pb-4 shadow-paper relative">
            <h2 id="faq-heading" className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-ink tracking-wide relative inline-block">
              Questions Founders Ask
              <svg
                className="absolute -bottom-1 left-0 w-full h-3 text-primary-400/70"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.5" />
              </svg>
            </h2>
            <p className="font-hand text-base md:text-lg text-ink-muted mt-3">
              straight answers — no fluff
            </p>
          </div>
        </div>
      </header>

      {/* Accordion list */}
      <div className="space-y-3">
        {FAQS.map((item, idx) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`relative ${CARD_TILTS[idx % CARD_TILTS.length]} hover:rotate-0 transition-transform duration-300`}
            >
              {/* Tape */}
              <div
                className="absolute -top-1 left-8 w-10 h-4 bg-paper border border-primary-200 shadow-sm rotate-[-4deg] z-10"
                aria-hidden="true"
              />

              <article className="bg-paper-alt border border-neutral-200/80 shadow-paper overflow-hidden">
                <button
                  type="button"
                  id={`faq-question-${item.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center justify-between gap-4 p-4 md:p-5 text-left cursor-pointer focus:outline-none focus-visible:bg-paper"
                >
                  <h3 className="font-display font-bold text-base md:text-lg text-ink pr-2">
                    {item.q}
                  </h3>
                  <span
                    className={`w-6 h-6 md:w-7 md:h-7 rounded-full bg-paper border border-primary-300/80 flex items-center justify-center font-display text-primary-800 text-lg shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    className="px-4 pb-4 md:px-5 md:pb-5 pt-0 font-hand text-base md:text-lg text-ink-muted leading-relaxed border-t border-dashed border-primary-200/60"
                  >
                    <p className="pt-3">{item.a}</p>
                  </div>
                )}
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
