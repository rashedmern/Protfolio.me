"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section on scroll
      const sections = navItems.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace("#", "");
    setActiveSection(id);
  };

  return (
    <header
      className="sticky top-0 z-50 w-full transition-all duration-200 backdrop-blur-md border-b"
      style={{
        height: "var(--header-height)",
        backgroundColor: "var(--header-bg)",
        borderColor: "var(--header-border)",
        boxShadow: scrolled ? "var(--header-shadow)" : "none",
      }}
    >
      <div className="site-container h-full flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="#home"
          onClick={() => handleLinkClick("#home")}
          className="text-xl md:text-2xl font-bold tracking-tight transition-colors duration-150"
          style={{ color: "var(--text-primary)" }}
        >
          Rashed
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 list-none">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => handleLinkClick(item.href)}
                    className={`nav-link ${isActive ? "active" : ""}`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Side Actions: Theme Toggle + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg border transition-colors p-2.5 cursor-pointer"
            style={{
              borderColor: "var(--border-color)",
              backgroundColor: "var(--bg-secondary)",
              color: "var(--text-primary)",
            }}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`block w-5 h-0.5 rounded transition-all duration-200 ${
                mobileMenuOpen ? "rotate-45 translate-y-1.5" : "mb-1"
              }`}
              style={{ backgroundColor: "var(--text-primary)" }}
            />
            <span
              className={`block w-5 h-0.5 rounded transition-all duration-200 ${
                mobileMenuOpen ? "opacity-0" : "mb-1"
              }`}
              style={{ backgroundColor: "var(--text-primary)" }}
            />
            <span
              className={`block w-5 h-0.5 rounded transition-all duration-200 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
              style={{ backgroundColor: "var(--text-primary)" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b`}
        style={{
          maxHeight: mobileMenuOpen ? "22rem" : "0",
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? "auto" : "none",
          backgroundColor: "var(--bg-primary)",
          borderColor: "var(--border-color)",
        }}
      >
        <div className="site-container py-4 flex flex-col gap-2">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleLinkClick(item.href)}
                className="py-2.5 px-3 rounded-lg font-semibold text-base transition-colors"
                style={{
                  backgroundColor: isActive ? "var(--accent-light)" : "transparent",
                  color: isActive ? "var(--accent)" : "var(--text-secondary)",
                }}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}
