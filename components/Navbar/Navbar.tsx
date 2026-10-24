"use client";

import React from "react";

const NAV_ITEMS = [
  { href: "#home", label: "Start", bg: "bg-primary-100", border: "border-primary-300", rotate: "rotate-2" },
  { href: "#services", label: "Services", bg: "bg-paper-alt", border: "border-primary-200", rotate: "rotate-1" },
  { href: "#testimonials", label: "Proof", bg: "bg-primary-200", border: "border-primary-400", rotate: "-rotate-1" },
  { href: "#projects", label: "Projects", bg: "bg-primary-50", border: "border-primary-200", rotate: "rotate-2" },
  { href: "#products", label: "Products", bg: "bg-paper-tint", border: "border-primary-300", rotate: "-rotate-1" },
  { href: "#skills", label: "Skills", bg: "bg-paper-alt", border: "border-primary-300", rotate: "-rotate-2" },
  { href: "#experience", label: "History", bg: "bg-primary-200", border: "border-primary-300", rotate: "rotate-1" },
  { href: "#blog", label: "Blogs", bg: "bg-primary-50", border: "border-primary-300", rotate: "-rotate-1" },
  { href: "#certifications", label: "Certs", bg: "bg-paper-tint", border: "border-primary-200", rotate: "rotate-2" },
  { href: "#faq", label: "FAQ", bg: "bg-primary-100", border: "border-primary-200", rotate: "-rotate-1" },
  { href: "#contact", label: "Contact", bg: "bg-primary-200", border: "border-primary-400", rotate: "rotate-1" },
];

export default function Navbar() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const globalLenis = (window as unknown as { __lenis?: { scrollTo: (target: HTMLElement, options?: object) => void } }).__lenis;
      if (globalLenis) {
        globalLenis.scrollTo(target as HTMLElement, { offset: -75, duration: 1.4 });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
      history.pushState(null, "", href);
    }
  };

  return (
    <>
      {/* Mobile / Tablet Horizontal Navigation */}
      <nav
        className="min-[1440px]:hidden fixed top-0 left-0 right-0 z-50 font-hand bg-canvas/95 backdrop-blur-sm border-b border-shell-edge-soft shadow-md"
        aria-label="Primary navigation"
      >
        <div className="flex flex-row items-center gap-2 overflow-x-auto scrollbar-none px-3 py-2.5 text-[11px] sm:text-sm md:text-base">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              className={`note-btn relative ${item.bg} ${item.border} ${item.rotate} min-h-[2.5rem] px-2.5 py-1.5 whitespace-nowrap`}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
            >
              <div className="w-2 h-2 md:w-4 md:h-4 rounded-full bg-primary-500 absolute -top-2 left-1/2 -translate-x-1/2 shadow-sm border border-primary-700 z-30" />
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Desktop Fixed Left Sidebar Navigation (>=1440px) */}
      <nav
        className="hidden min-[1440px]:flex fixed top-10 left-10 z-40 flex-col gap-4 font-hand text-xl px-3 py-2"
        aria-label="Primary navigation sidebar"
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            className={`note-btn relative ${item.bg} ${item.border} ${item.rotate}`}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
          >
            <div className="w-2 h-2 md:w-4 md:h-4 rounded-full bg-primary-500 absolute -top-2 left-1/2 -translate-x-1/2 shadow-sm border border-primary-700 z-30" />
            {item.label}
          </a>
        ))}
      </nav>
    </>
  );
}
