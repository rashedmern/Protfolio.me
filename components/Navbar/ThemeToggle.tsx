"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "../common/ThemeProvider";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div 
        className="w-10 h-10 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)]" 
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] hover:border-[var(--accent)] transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <FiMoon className="w-5 h-5 text-[var(--text-primary)] transition-transform duration-200 hover:rotate-12" />
      ) : (
        <FiSun className="w-5 h-5 text-[var(--accent)] transition-transform duration-200 hover:rotate-45" />
      )}
    </button>
  );
}
