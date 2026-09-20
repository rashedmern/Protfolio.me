"use client";

import React from "react";
import Image from "next/image";
import { FiFileText, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import CoffeePopover from "./CoffeePopover";
import BdtStatusIndicator from "../common/BdtStatusIndicator";

interface HeroProps {
  name?: string;
  role?: string;
  companyName?: string;
  companyUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  email?: string;
  resumeUrl?: string;
}

export default function Hero({
  name = "Rashed Molla Antor",
  role = "Junior Software Engineer",
  companyName = "archiom.io",
  companyUrl = "https://archiom.io/",
  githubUrl = "https://github.com/rashedmern",
  linkedinUrl = "https://linkedin.com/",
  email = "[EMAIL_ADDRESS]",
  resumeUrl = "#resume",
}: HeroProps) {
  return (
    <section id="home" className="hero-section w-full">
      <div className="site-container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 text-center md:text-left">
          {/* Avatar with Concentric Rings */}
          <div className="hero-avatar w-52 h-52 sm:w-64 sm:h-64 md:w-[280px] md:h-[280px] flex-shrink-0">
            <Image
              src="/assets/images/rashed.jpg"
              alt={`${name} - ${role}`}
              fill
              priority
              sizes="(max-width: 768px) 256px, 280px"
              className="object-cover object-[50%_15%] scale-[1.18] transition-transform duration-300"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 max-w-[640px] flex flex-col items-center md:items-start">
            {/* Name */}
            <h1
              className="text-4xl sm:text-5xl md:text-[3.25rem] font-bold tracking-tight leading-[1.2] mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              {name}
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl sm:text-2xl md:text-[1.625rem] font-semibold tracking-tight mb-5"
              style={{ color: "var(--accent)" }}
            >
              {role}
            </p>

            {/* Tagline */}
            <p
              className="text-base sm:text-lg md:text-[1.1875rem] leading-[1.8]"
              style={{ color: "var(--text-secondary)" }}
            >
              Building scalable software systems and AI-powered solutions in cloud. Currently working at{" "}
              <a
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link font-medium"
              >
                {companyName}
              </a>
              .
            </p>

            {/* Primary Action Links with Generous Margin-Top */}
            <div 
              className="flex flex-wrap items-center justify-center md:justify-start gap-5 md:gap-7"
              style={{ marginTop: "2.75rem", marginBottom: "1.25rem" }}
            >
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-pill-link"
              >
                <FiFileText className="w-5 h-5" />
                <span>Resume</span>
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-pill-link"
              >
                <FiGithub className="w-5 h-5" />
                <span>GitHub</span>
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-pill-link"
              >
                <FiLinkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>

              <a
                href={email.startsWith("mailto:") ? email : `mailto:${email}`}
                className="hero-pill-link"
              >
                <FiMail className="w-5 h-5" />
                <span>Email</span>
              </a>
            </div>

            {/* Secondary Actions: Coffee & Live Working Status side by side */}
            <div 
              className="flex flex-wrap items-center justify-center md:justify-start gap-3"
              style={{ marginTop: "0.75rem" }}
            >
              <CoffeePopover />
              <BdtStatusIndicator />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
