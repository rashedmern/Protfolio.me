"use client";

import React, { useState, useRef, useEffect } from "react";
import { FiCoffee, FiCopy, FiExternalLink, FiCheck } from "react-icons/fi";

interface CoffeePopoverProps {
  coffeeUrl?: string;
}

export default function CoffeePopover({
  coffeeUrl = "https://buymeacoffee.com/rashed",
}: CoffeePopoverProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(coffeeUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <div className="relative inline-block" ref={containerRef}>
      <button
        onClick={() => setOpen(!open)}
        className="hero-pill-link"
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="Buy me a coffee"
      >
        <FiCoffee className="w-5 h-5 text-[var(--accent)]" />
        <span>Buy me a coffee</span>
      </button>

      {/* Popover Card */}
      {open && (
        <div
          role="dialog"
          aria-label="Buy me a coffee modal"
          className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-72 sm:w-80 p-5 rounded-2xl border shadow-xl z-30 transition-all animate-in fade-in zoom-in-95 duration-200"
          style={{
            backgroundColor: "var(--bg-primary)",
            borderColor: "var(--border-color)",
            boxShadow:
              "0 12px 32px rgba(42, 36, 32, 0.12), 0 2px 6px rgba(42, 36, 32, 0.08)",
          }}
        >
          <div className="flex flex-col items-center text-center">
            {/* Friendly Coffee Graphic */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-3"
              style={{ backgroundColor: "var(--accent-light)" }}
            >
              <FiCoffee className="w-8 h-8 text-[var(--accent)]" />
            </div>

            <h4
              className="text-base font-bold mb-1"
              style={{ color: "var(--text-primary)" }}
            >
              Support My Work ☕
            </h4>
            <p
              className="text-xs leading-relaxed mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              If you enjoy my open-source projects or want to chat, buying a coffee is always appreciated!
            </p>

            {/* Actions */}
            <div className="flex items-center gap-2 w-full">
              <button
                onClick={handleCopy}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer"
                style={{
                  borderColor: copied ? "#10b981" : "var(--border-color)",
                  backgroundColor: "var(--bg-secondary)",
                  color: copied ? "#10b981" : "var(--text-primary)",
                }}
              >
                {copied ? (
                  <>
                    <FiCheck className="w-4 h-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <FiCopy className="w-4 h-4" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>

              <a
                href={coffeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold text-white transition-all"
                style={{
                  backgroundColor: "var(--accent)",
                }}
              >
                <FiExternalLink className="w-4 h-4" />
                <span>Open Link</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
