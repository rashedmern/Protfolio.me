"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface Testimonial {
  id: string;
  type: "video" | "text";
  name: string;
  role: string;
  company: string;
  date?: string;
  feedback: string;
  imageUrl?: string;
  youtubeUrl?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-client-1",
    type: "text",
    name: "Alex Morgan",
    role: "Co-Founder & CTO",
    company: "SaaSify Studio",
    date: "",
    feedback:
      "Working with Rashed was an absolute game changer for our product roadmap. He took our ambiguous requirements and transformed them into a blazing fast, robust full-stack application. Highly dependable and meticulous with details.",
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "testimonial-client-2",
    type: "text",
    name: "David Chen",
    role: "Head of Product",
    company: "Nova Labs",
    date: "",
    feedback:
      "Rashed brings rare clarity to software engineering. His focus on clean architecture, scalable APIs, and pixel-perfect UI execution helped us ship our MVP two weeks ahead of schedule. Truly an engineering partner you can trust.",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "testimonial-client-3",
    type: "text",
    name: "Sarah Jenkins",
    role: "Founder & CEO",
    company: "Apex Digital",
    date: "",
    feedback:
      "Exceptional technical talent with great communication. Rashed made the entire development process transparent and smooth. He didn't just write code; he suggested architectural improvements that saved us thousands in server costs.",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
];

const CARD_ROTATES = ["-rotate-1", "rotate-[1.5deg]", "-rotate-[0.5deg]", "rotate-1"];
const TAPE_ROTATES = ["-rotate-1", "rotate-1", "-rotate-[0.5deg]", "rotate-[0.5deg]"];

export default function Testimonials() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const activeTestimonial = modalIndex !== null ? TESTIMONIALS[modalIndex] : null;

  const handlePrev = useCallback(() => {
    if (modalIndex === null) return;
    setModalIndex((modalIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, [modalIndex]);

  const handleNext = useCallback(() => {
    if (modalIndex === null) return;
    setModalIndex((modalIndex + 1) % TESTIMONIALS.length);
  }, [modalIndex]);

  const handleClose = useCallback(() => {
    setModalIndex(null);
  }, []);

  useEffect(() => {
    if (modalIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [modalIndex, handleClose, handlePrev, handleNext]);

  return (
    <section id="testimonials" className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14">
      {/* Header */}
      <header className="relative mb-6 md:mb-8 text-center">
        <div className="inline-block relative -rotate-[0.5deg] hover:rotate-0 transition-transform duration-500">
          <div className="bg-gradient-to-br from-[var(--paper-bg)] to-primary-50 border-2 border-primary-300/60 px-8 md:px-12 pt-4 pb-5 shadow-paper relative">
            <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-ink tracking-wide relative inline-block">
              What Clients Say
              <svg
                className="absolute -bottom-1 left-0 w-full h-3 text-primary-400/70"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.5" />
              </svg>
            </h2>
            <span className="absolute -top-2 -right-4 font-display text-[10px] md:text-xs text-primary-800 border-2 border-primary-400/60 rounded-full w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rotate-12 bg-paper shadow-sm">
              03
            </span>
          </div>
        </div>
        <p className="font-hand text-on-canvas-muted text-sm md:text-base mt-3">
          from people who actually shipped with me
        </p>
      </header>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
        {TESTIMONIALS.map((t, idx) => {
          const isVideo = t.type === "video";
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setModalIndex(idx)}
              className={`group w-full h-full text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded-sm overflow-visible ${
                CARD_ROTATES[idx % CARD_ROTATES.length]
              } hover:rotate-0 hover:scale-[1.02] hover:z-10 transition-all duration-300`}
            >
              <article className="bg-[var(--paper-bg)] border border-primary-200 shadow-paper group-hover:shadow-paper relative h-full flex flex-col overflow-visible">
                {/* Tape */}
                <div
                  className={`absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-paper border border-primary-200 shadow-sm z-10 ${
                    TAPE_ROTATES[idx % TAPE_ROTATES.length]
                  }`}
                  aria-hidden="true"
                />

                {/* Content */}
                <div className={`px-4 pt-7 shrink-0 ${isVideo ? "pb-2" : "pb-3 flex-1 min-h-0 flex flex-col"}`}>
                  <blockquote
                    className={`font-sans text-sm text-ink-muted leading-relaxed ${
                      isVideo ? "line-clamp-2" : "line-clamp-6 flex-1"
                    }`}
                  >
                    “{t.feedback}”
                  </blockquote>
                  {!isVideo && (
                    <p className="font-sans text-[10px] text-primary-600/70 mt-2 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                      Tap to open →
                    </p>
                  )}
                </div>

                {/* Video Thumbnail */}
                {isVideo && (
                  <div className="relative mx-4 mb-2 flex-1 min-h-[140px] rounded-sm overflow-hidden bg-paper border border-primary-200">
                    <Image
                      src="https://img.youtube.com/vi/BUdg0UiNTUk/hqdefault.jpg"
                      alt={`Video testimonial from ${t.name}`}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-paper-alt/90 border-2 border-primary-200 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        <svg className="w-4 h-4 text-primary-700 ml-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer User Info */}
                <div className="px-4 py-3 border-t border-dashed border-primary-200 flex items-center gap-3 shrink-0 bg-paper">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-primary-200 shrink-0 bg-paper">
                    {t.imageUrl ? (
                      <Image
                        src={t.imageUrl}
                        alt={t.name}
                        fill
                        loading="lazy"
                        className="object-cover"
                        sizes="40px"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center font-sans text-primary-400 text-xs">
                        ?
                      </div>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-sm text-ink leading-tight line-clamp-1 group-hover:text-primary-800 transition-colors">
                      {t.name}
                    </h3>
                    <p className="font-sans text-xs text-ink-muted line-clamp-1">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </article>
            </button>
          );
        })}
      </div>

      {/* Modal Dialog */}
      {modalIndex !== null && activeTestimonial && (
        <div
          className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-sm flex flex-col overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-label={`Testimonial from ${activeTestimonial.name}`}
          onClick={(e) => {
            // Close when clicking directly on the backdrop
            if (e.target === e.currentTarget) handleClose();
          }}
        >
          {/* Top Bar */}
          <div className="relative flex items-center justify-between px-4 sm:px-8 py-4 shrink-0 border-b border-white/10 z-20 bg-black/40">
            <span className="font-display text-lg md:text-xl text-primary-200 tracking-widest">
              {String(modalIndex + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={handleClose}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/25 hover:border-white/40 transition-all cursor-pointer shadow-lg active:scale-95"
              aria-label="Close"
            >
              <span className="font-sans text-xs tracking-wide uppercase font-medium">Close</span>
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Modal Content */}
          <div
            className="flex-1 flex items-center justify-center min-h-0 overflow-auto px-4 md:px-8 py-6 cursor-pointer"
            onClick={(e) => {
              if (e.target === e.currentTarget) handleClose();
            }}
          >
            <div
              className="relative w-full md:max-w-4xl md:mx-auto cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full hover:scale-105 transition-all left-2 md:-left-6 bg-white/10 border border-white/25 text-white hover:bg-white/25 shadow-lg cursor-pointer"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                className="absolute top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full hover:scale-105 transition-all right-2 md:-right-6 bg-white/10 border border-white/25 text-white hover:bg-white/25 shadow-lg cursor-pointer"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {activeTestimonial.type === "video" ? (
                <div className="w-full px-0 md:px-14">
                  <div className="aspect-video w-full rounded-md overflow-hidden bg-black shadow-2xl">
                    <iframe
                      src="https://www.youtube.com/embed/BUdg0UiNTUk?autoplay=1"
                      title={`Video testimonial from ${activeTestimonial.name}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  </div>
                  <div className="mt-4 text-center px-4 md:px-0">
                    <p className="font-display text-xl md:text-2xl text-white">
                      {activeTestimonial.name}
                    </p>
                    <p className="font-sans text-primary-200/80 text-sm md:text-base mt-1">
                      {activeTestimonial.role} · {activeTestimonial.company}
                    </p>
                    {activeTestimonial.feedback && (
                      <p className="font-sans text-white/70 text-sm mt-2 leading-relaxed">
                        {activeTestimonial.feedback}
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <div className="relative w-full md:max-w-2xl md:mx-auto max-h-[calc(100vh-8rem)] overflow-y-auto overscroll-contain bg-[var(--paper-bg)] border-2 border-primary-300 shadow-2xl rounded-md px-6 py-8 md:px-10 md:py-10">
                  {/* Close button inside the card for convenience */}
                  <button
                    type="button"
                    onClick={handleClose}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full border border-primary-300 bg-paper hover:bg-paper-alt flex items-center justify-center text-ink transition-colors cursor-pointer shadow-sm"
                    aria-label="Close card"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {activeTestimonial.imageUrl && (
                    <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary-300/60 shadow-md shrink-0">
                      <Image
                        src={activeTestimonial.imageUrl}
                        alt={activeTestimonial.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 80px, 96px"
                      />
                    </div>
                  )}
                  <div className="text-center mb-4 shrink-0">
                    <p className="font-display text-xl md:text-2xl text-ink">
                      {activeTestimonial.name}
                    </p>
                    <p className="font-sans text-primary-800 text-sm md:text-base mt-1">
                      {activeTestimonial.role}
                    </p>
                    <p className="font-sans text-xs text-ink-muted mt-0.5">
                      {activeTestimonial.company}
                    </p>
                  </div>
                  <blockquote className="font-sans text-base md:text-lg text-ink leading-relaxed text-center border-t border-dashed border-primary-200 pt-4">
                    “{activeTestimonial.feedback}”
                  </blockquote>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
