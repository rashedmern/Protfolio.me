"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[9999] pointer-events-none">
      <div className="pointer-events-auto">
        <Container>
          <motion.nav
            initial={false}
            animate={{
              height: scrolled ? 68 : 88,
              borderRadius: scrolled ? 999 : 0,
              backgroundColor: scrolled
                ? "rgba(0, 0, 0, 0.30)"
                : "rgba(0, 0, 0, 0)",
              borderColor: scrolled
                ? "rgba(255, 255, 255, 0.15)"
                : "rgba(255, 255, 255, 0)",
              boxShadow: scrolled
                ? "0 12px 40px rgba(0,0,0,0.22)"
                : "0 0 0 rgba(0,0,0,0)",
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              flex
              w-full
              items-center
              justify-between
              border
              px-8
              backdrop-blur-2xl
            "
          >
            {/* LOGO */}
            <a
              href="#home"
              className="
                relative
                z-20
                flex
                shrink-0
                items-center
              "
            >
              <Image
                src="/images/logo.png"
                alt="Rashed"
                width={140}
                height={40}
                priority
                className="h-auto w-[140px] object-contain"
              />
            </a>

            {/* CENTER NAV */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                z-20
                -translate-x-1/2
                -translate-y-1/2
              "
            >
              <motion.div
                initial={false}
                animate={{
                  paddingLeft: scrolled ? 5 : 0,
                  paddingRight: scrolled ? 5 : 0,
                  paddingTop: scrolled ? 4 : 0,
                  paddingBottom: scrolled ? 4 : 0,
                  borderRadius: scrolled ? 999 : 0,
                  backgroundColor: scrolled
                    ? "rgba(0,0,0,0.25)"
                    : "rgba(0,0,0,0)",
                  borderColor: scrolled
                    ? "rgba(255,255,255,0.08)"
                    : "rgba(255,255,255,0)",
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  flex
                  items-center
                  gap-1
                  border
                  backdrop-blur-xl
                  whitespace-nowrap
                "
              >
                <a
                  href="#projects"
                  className="
                    rounded-full
                    px-5
                    py-2.5
                    text-sm
                    font-medium
                    text-white/65
                    transition-all
                    duration-300
                    hover:bg-white/[0.06]
                    hover:text-white
                  "
                >
                  Projects
                </a>

                <a
                  href="/resume"
                  className="
                    rounded-full
                    px-5
                    py-2.5
                    text-sm
                    font-medium
                    text-white/65
                    transition-all
                    duration-300
                    hover:bg-white/[0.06]
                    hover:text-white
                  "
                >
                  Resume
                </a>

                <a
                  href="#contact"
                  className="
                    rounded-full
                    px-5
                    py-2.5
                    text-sm
                    font-medium
                    text-white/65
                    transition-all
                    duration-300
                    hover:bg-white/[0.06]
                    hover:text-white
                  "
                >
                  Hire Me
                </a>
              </motion.div>
            </div>

            {/* RIGHT SIDE */}
            <div
              className="
                relative
                z-30
                ml-auto
                flex
                items-center
                gap-4
              "
            >
              {/* HIRE ME */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="
                  rounded-full
                  bg-white
                  px-6
                  py-3
                  text-sm
                  font-medium
                  text-black
                  transition-colors
                  duration-300
                  hover:bg-white/90
                "
              >
                Hire Me
              </motion.a>
            </div>
          </motion.nav>
        </Container>
      </div>
    </header>
  );
}