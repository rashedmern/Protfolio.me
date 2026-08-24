"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  Mail,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        px-6
        pt-22
      "
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* MAIN GRID */}
        <div className="grid min-h-[calc(100vh-8rem)] items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">

          {/* ================= LEFT SIDE ================= */}
          <div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="h-2 w-2 rounded-full bg-orange-400" />

              <span className="text-xs uppercase tracking-[0.25em] text-white/45">
                Available for opportunities
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                max-w-5xl
                text-[clamp(4rem,7vw,8rem)]
                font-medium
                leading-[0.88]
                tracking-[-0.065em]
                text-white
              "
            >
              Hello
              <br />

              <span className="text-white/35">
                I'm
              </span>{" "}
              RASHED
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.55,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-10
                max-w-xl
                text-base
                leading-7
                text-white/50
                md:text-lg
              "
            >
              A full-stack developer focused on building
              modern, scalable web applications and exploring
              intelligent systems through technology and research.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.7,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              {/* Projects */}
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-full
                  bg-white
                  px-7
                  py-4
                  text-sm
                  font-medium
                  text-black
                  transition-colors
                  duration-300
                  hover:bg-white/90
                "
              >
                View Projects

                <ArrowDownRight
                  size={18}
                  strokeWidth={1.8}
                />
              </motion.a>

              {/* Contact */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="
                  rounded-full
                  border
                  border-white/15
                  px-7
                  py-4
                  text-sm
                  font-medium
                  text-white/80
                  transition-all
                  duration-300
                  hover:border-white/30
                  hover:bg-white/[0.04]
                  hover:text-white
                "
              >
                Let's Talk
              </motion.a>
            </motion.div>

            {/* ================= SOCIAL LINKS ================= */}
<motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    delay: 1,
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="mt-12 flex items-center gap-6"
>
  {/* GitHub */}
  <motion.a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    whileHover={{
      scale: 1.08,
      y: -2,
    }}
    whileTap={{
      scale: 0.96,
    }}
    transition={{
      type: "spring",
      stiffness: 450,
      damping: 22,
      mass: 0.35,
    }}
    className="
      group
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-xl
      border
      border-white/10
      bg-white/[0.02]
      text-white/40
      transition-[border-color,background-color,color,box-shadow]
      duration-300
      ease-out
      hover:border-orange-400/70
      hover:bg-orange-400/[0.06]
      hover:text-orange-400
      hover:shadow-[0_0_25px_rgba(251,146,60,0.25)]
    "
  >
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.49.5.092.682-.217.682-.483 0-.237-.009-1.026-.014-1.862-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.621.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.58 9.58 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.337-.012 2.415-.012 2.744 0 .268.18.579.688.481A10.001 10.001 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
    </svg>
  </motion.a>

  {/* LinkedIn */}
  <motion.a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    whileHover={{
      scale: 1.08,
      y: -2,
    }}
    whileTap={{
      scale: 0.96,
    }}
    transition={{
      type: "spring",
      stiffness: 450,
      damping: 22,
      mass: 0.35,
    }}
    className="
      group
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-xl
      border
      border-white/10
      bg-white/[0.02]
      text-white/40
      transition-[border-color,background-color,color,box-shadow]
      duration-300
      ease-out
      hover:border-orange-400/70
      hover:bg-orange-400/[0.06]
      hover:text-orange-400
      hover:shadow-[0_0_25px_rgba(251,146,60,0.25)]
    "
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.02 2.02 0 1 0 5.25 7.04 2.02 2.02 0 0 0 5.25 3ZM20.44 13.42c0-3.47-1.85-5.09-4.32-5.09-1.99 0-2.88 1.1-3.38 1.87V8.5H9.36V20h3.38v-6.4c0-1.69.32-3.33 2.42-3.33 2.07 0 2.1 1.94 2.1 3.44V20h3.18v-6.58Z" />
    </svg>
  </motion.a>

  {/* X */}
  <motion.a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="X"
    whileHover={{
      scale: 1.08,
      y: -2,
    }}
    whileTap={{
      scale: 0.96,
    }}
    transition={{
      type: "spring",
      stiffness: 450,
      damping: 22,
      mass: 0.35,
    }}
    className="
      group
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-xl
      border
      border-white/10
      bg-white/[0.02]
      text-white/40
      transition-[border-color,background-color,color,box-shadow]
      duration-300
      ease-out
      hover:border-orange-400/70
      hover:bg-orange-400/[0.06]
      hover:text-orange-400
      hover:shadow-[0_0_25px_rgba(251,146,60,0.25)]
    "
  >
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2H21.5l-7.11 8.13L22.75 22h-6.543l-5.127-7.236L4.75 22H1.492l7.608-8.7L1.08 2H7.79l4.635 6.665L18.244 2Zm-1.15 17.92h1.805L6.815 3.97H4.88l12.214 15.95Z" />
    </svg>
  </motion.a>

  {/* Email */}
  <motion.a
    href="mailto:your@email.com"
    aria-label="Email"
    whileHover={{
      scale: 1.08,
      y: -2,
    }}
    whileTap={{
      scale: 0.96,
    }}
    transition={{
      type: "spring",
      stiffness: 450,
      damping: 22,
      mass: 0.35,
    }}
    className="
      group
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-xl
      border
      border-white/10
      bg-white/[0.02]
      text-white/40
      transition-[border-color,background-color,color,box-shadow]
      duration-300
      ease-out
      hover:border-orange-400/70
      hover:bg-orange-400/[0.06]
      hover:text-orange-400
      hover:shadow-[0_0_25px_rgba(251,146,60,0.25)]
    "
  >
    <Mail
      size={19}
      strokeWidth={1.6}
    />
  </motion.a>
</motion.div>

          </div>

          {/* ================= RIGHT SIDE - PROFILE ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              flex
              items-center
              justify-center
              lg:justify-end
            "
          >
            <div className="relative flex h-[430px] w-[430px] items-center justify-center">

              {/* Outer Ring */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  border
                  border-orange-400/10
                "
              />

              {/* Second Ring */}
              <div
                className="
                  absolute
                  inset-[14px]
                  rounded-full
                  border
                  border-teal-400/10
                "
              />

              {/* Soft Orange Glow */}
              <div
                className="
                  absolute
                  h-[300px]
                  w-[300px]
                  rounded-full
                  bg-orange-500/10
                  blur-[100px]
                "
              />

              {/* Soft Teal Glow */}
              <div
                className="
                  absolute
                  right-10
                  h-[220px]
                  w-[220px]
                  rounded-full
                  bg-teal-500/[0.06]
                  blur-[90px]
                "
              />

              {/* Profile Image */}
              <div
                className="
                  relative
                  h-[320px]
                  w-[320px]
                  rounded-full
                  bg-gradient-to-br
                  from-orange-400
                  via-orange-300/60
                  to-teal-400
                  p-[3px]
                "
              >
                <div
                  className="
                    relative
                    h-full
                    w-full
                    overflow-hidden
                    rounded-full
                    bg-[#080808]
                  "
                >
                  <Image
                    src="/images/rashed.jpg"
                    alt="Rashed"
                    fill
                    priority
                    sizes="320px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Open To Work */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 1.2,
                }}
                className="
                  absolute
                  bottom-[48px]
                  right-[5px]
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-[#0b0b0b]/90
                  px-5
                  py-3
                  shadow-[0_10px_40px_rgba(0,0,0,0.45)]
                  backdrop-blur-xl
                "
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-emerald-400
                      opacity-60
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-emerald-400
                    "
                  />
                </span>

                <span className="text-xs font-semibold text-white/90">
                  Open to Work
                </span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.3,
          duration: 0.8,
        }}
        className="
          absolute
          bottom-8
          right-8
          hidden
          items-center
          gap-3
          md:flex
        "
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-8 w-px bg-white/20"
        />
      </motion.div>

    </section>
  );
}