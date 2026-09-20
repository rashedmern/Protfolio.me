"use client";

import React, { useState, useEffect, useRef } from "react";
import { FiClock, FiMoon, FiZap, FiMapPin } from "react-icons/fi";

export default function BdtStatusIndicator() {
  const [mounted, setMounted] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [currentTimeStr, setCurrentTimeStr] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const updateStatus = () => {
      const now = new Date();

      // Get hour in Asia/Dhaka (BDT, UTC+6)
      const bdtHour = parseInt(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Dhaka",
          hour: "numeric",
          hour12: false,
        }).format(now),
        10
      );

      // 12-hour formatted time with AM/PM
      const timeFormatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Dhaka",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTimeStr(timeFormatter.format(now));

      // Active between 9:00 PM (21:00) and 2:00 AM (02:00) BDT
      const active = bdtHour >= 21 || bdtHour < 2;
      setIsOnline(active);
    };

    updateStatus();
    const interval = setInterval(updateStatus, 15000);

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!mounted) {
    return (
      <div className="hero-pill-link opacity-60" aria-hidden="true">
        <span className="w-2 h-2 rounded-full bg-neutral-400"></span>
        <span>Working</span>
      </div>
    );
  }

  return (
    <div className="relative inline-block" ref={containerRef}>
      {/* Button styled exactly like Coffee button */}
      <button
        onClick={() => setOpen(!open)}
        className="hero-pill-link"
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="Current working status"
      >
        {isOnline ? (
          <>
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">Working</span>
          </>
        ) : (
          <>
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
            </span>
            <span>Sleeping 💤</span>
          </>
        )}
      </button>

      {/* Popover Modal (matching Coffee Popover styling) */}
      {open && (
        <div
          role="dialog"
          aria-label="Bangladesh Time Status"
          className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-80 p-5 rounded-2xl border shadow-xl z-30 transition-all animate-in fade-in zoom-in-95 duration-200 text-left"
          style={{
            backgroundColor: "var(--bg-primary)",
            borderColor: "var(--border-color)",
            boxShadow:
              "0 12px 32px rgba(42, 36, 32, 0.14), 0 2px 6px rgba(42, 36, 32, 0.08)",
          }}
        >
          {/* Header */}
          <div 
            className="flex items-center justify-between border-b pb-3 mb-3.5"
            style={{ borderColor: "var(--border-color)" }}
          >
            <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: "var(--text-secondary)" }}>
              <FiMapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Dhaka, BD (GMT+6)</span>
            </div>

            <div 
              className="flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono font-bold"
              style={{
                backgroundColor: "var(--bg-secondary)",
                color: "var(--text-primary)",
                border: "1px solid var(--border-color)",
              }}
            >
              <FiClock className="w-3 h-3 text-[var(--accent)]" />
              <span>{currentTimeStr}</span>
            </div>
          </div>

          {/* Body */}
          <div className="flex items-start gap-3.5 mb-4">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm ${
                isOnline
                  ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800"
                  : "bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800"
              }`}
            >
              {isOnline ? (
                <FiZap className="w-5 h-5 animate-pulse" />
              ) : (
                <FiMoon className="w-5 h-5" />
              )}
            </div>

            <div className="flex-1">
              <h4 
                className="text-sm font-bold tracking-tight mb-1" 
                style={{ color: "var(--text-primary)" }}
              >
                {isOnline ? "Active & In Working Mode" : "Currently Sleeping / Away"}
              </h4>
              <p 
                className="text-xs leading-relaxed" 
                style={{ color: "var(--text-secondary)" }}
              >
                {isOnline
                  ? "Working hours right now (9:00 PM – 2:00 AM BDT). Coding & available for communication!"
                  : "I'm currently sleeping or away from my desk. Leave a message, and I'll get back to you during my active shift!"}
              </p>
            </div>
          </div>

          {/* Footer Schedule */}
          <div 
            className="pt-3 border-t flex items-center justify-between text-xs"
            style={{ borderColor: "var(--border-color)" }}
          >
            <span style={{ color: "var(--text-tertiary)" }} className="font-medium">
              Daily Schedule:
            </span>
            <span 
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                isOnline
                  ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300"
                  : "bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300"
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isOnline ? "bg-emerald-500" : "bg-rose-500"}`} />
              9:00 PM – 2:00 AM BDT
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
