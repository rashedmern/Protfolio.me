"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <motion.div
        animate={{
          marginTop: scrolled ? 16 : 0,
          marginLeft: scrolled ? 18 : 0,
          marginRight: scrolled ? 18 : 0,
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Container>
          <motion.nav
            animate={{
              height: scrolled ? 68 : 88,
              borderRadius: scrolled ? 999 : 0,

              backgroundColor: scrolled
                ? "rgba(7, 7, 12, 0.68)"
                : "rgba(7, 7, 12, 0)",

              borderColor: scrolled
                ? "rgba(255,255,255,0.12)"
                : "rgba(255,255,255,0)",

              backdropFilter: scrolled
                ? "blur(22px)"
                : "blur(0px)",

              boxShadow: scrolled
                ? "0 10px 35px rgba(0,0,0,0.22)"
                : "0 0 0 rgba(0,0,0,0)",
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              flex
              w-full
              items-center
              justify-between
              border
            "
          >
            {/* LOGO */}
            <a
              href="#home"
              className="relative z-10 flex items-center"
            >
              <Image
                src="/images/logo.png"
                alt="Rashed"
                width={120}
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
                -translate-x-1/2
                -translate-y-1/2
              "
            >
              {/* Glow behind nav */}
              <motion.div
                animate={{
                  opacity: scrolled ? 1 : 0,
                  scale: scrolled ? 1 : 0.8,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  pointer-events-none
                  absolute
                  inset-[-18px]
                  rounded-full
                  bg-purple-500/20
                  blur-2xl
                "
              />

              <motion.div
                animate={{
                  paddingLeft: scrolled ? 6 : 0,
                  paddingRight: scrolled ? 6 : 0,
                  paddingTop: scrolled ? 4 : 0,
                  paddingBottom: scrolled ? 4 : 0,
                  borderRadius: scrolled ? 999 : 0,
                  backgroundColor: scrolled
                    ? "rgba(8, 8, 18, 0.75)"
                    : "rgba(8, 8, 18, 0)",
                  borderColor: scrolled
                    ? "rgba(140, 70, 255, 0.14)"
                    : "rgba(140, 70, 255, 0)",
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  flex
                  items-center
                  gap-1
                  border
                  backdrop-blur-xl
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

            {/* RIGHT */}
            <div className="relative z-10 flex items-center">
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  type: "spring",
                  stiffness: 450,
                  damping: 24,
                  mass: 0.4,
                }}
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
      </motion.div>
    </motion.header>
  );
}