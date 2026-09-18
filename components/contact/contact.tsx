"use client";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="
        relative
        w-full
        overflow-hidden
        py-28
        text-white
      "
    >
      {/* =====================================================
          ORANGE AMBIENT LIGHT
      ===================================================== */}

<div className="pointer-events-none absolute left-0 top-0 z-20 w-full">
  <div className="relative h-[1px] w-full overflow-hidden bg-white/[0.10]">

    {/* Moving orange beam */}
    <span className="about-line-beam" />

  </div>
</div>

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Label */}

          <div
            className="
              mx-auto
              flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-white/[0.09]
              bg-white/[0.025]
              px-4
              py-1.5
              backdrop-blur-md
            "
          >
            <Mail
              size={12}
              className="text-orange-400"
            />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-white/50
              "
            >
              Get In Touch
            </span>
          </div>

          {/* Heading */}

          <h2
            className="
              mt-6
              text-4xl
              font-semibold
              leading-[1.05]
              tracking-[-0.045em]
              text-white
              sm:text-5xl
              md:text-[58px]
            "
          >
            Let’s build something{" "}
            <span
              className="
                bg-gradient-to-r
                from-orange-300
                via-orange-400
                to-orange-500
                bg-clip-text
                text-transparent
              "
            >
              meaningful.
            </span>
          </h2>

          <p
            className="
              mx-auto
              m-15
              max-w-xl
              text-sm
              leading-7
              text-white/40
              md:text-[15px]
            "
          >
            Have an idea, a project, or just want to say hello?
            I’d love to hear from you.
          </p>
        </motion.div>


       

          


        {/* =====================================================
            CONTACT CONTENT
        ===================================================== */}

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

          {/* ===================================================
              LEFT
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              rounded-2xl
              border
              border-white/[0.08]
              bg-white/[0.025]
              p-6
              md:p-8
            "
          >
            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.16em]
                text-orange-400
              "
            >
              Let’s talk
            </span>

            <h3
              className="
                mt-4
                max-w-sm
                text-2xl
                font-semibold
                tracking-[-0.03em]
                text-white
                md:text-3xl
              "
            >
              Have a project in mind?
            </h3>

            <p
              className="
                mt-4
                max-w-md
                text-sm
                leading-7
                text-white/40
              "
            >
              Whether you’re building a product from scratch
              or improving an existing idea, I’m always open
              to discussing interesting projects.
            </p>

            {/* =================================================
                CONTACT INFO
            ================================================= */}

            <div className="mt-8 space-y-4">

              {/* Email */}

              <a
                href="mailto:your-email@example.com"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-xl
                  border
                  border-white/[0.06]
                  bg-white/[0.02]
                  p-4
                  transition-all
                  duration-300
                  hover:border-orange-400/[0.18]
                  hover:bg-orange-400/[0.025]
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-white/[0.05]
                    text-orange-400
                    transition-all
                    duration-300
                    group-hover:bg-orange-400/[0.08]
                  "
                >
                  <Mail size={16} />
                </div>

                <div>
                  <p className="text-[10px] text-white/25">
                    Email
                  </p>

                  <p className="mt-1 text-xs text-white/60">
                    your-email@example.com
                  </p>
                </div>

                <ArrowUpRight
                  size={14}
                  className="
                    ml-auto
                    text-white/20
                    transition-all
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-orange-400
                  "
                />
              </a>

              {/* Location */}

              <div
                className="
                  flex
                  items-center
                  gap-4
                  rounded-xl
                  border
                  border-white/[0.06]
                  bg-white/[0.02]
                  p-4
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-white/[0.05]
                    text-orange-400
                  "
                >
                  <MapPin size={16} />
                </div>

                <div>
                  <p className="text-[10px] text-white/25">
                    Location
                  </p>

                  <p className="mt-1 text-xs text-white/60">
                    Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                AVAILABILITY
            ================================================= */}

            <div
              className="
                mt-6
                flex
                items-center
                gap-2
                text-[11px]
                text-white/35
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-emerald-400
                  shadow-[0_0_10px_rgba(52,211,153,0.5)]
                "
              />

              Available for new opportunities
            </div>
          </motion.div>

          {/* ===================================================
              RIGHT — FORM
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              rounded-2xl
              border
              border-white/[0.08]
              bg-white/[0.025]
              p-6
              md:p-8
            "
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Name + Email */}

              <div className="grid gap-5 md:grid-cols-2">

                {/* Name */}

                <div>
                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      block
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.12em]
                      text-white/35
                    "
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-white/[0.025]
                      px-4
                      text-xs
                      text-white
                      outline-none
                      placeholder:text-white/20
                      transition-all
                      duration-300
                      focus:border-orange-400/30
                      focus:bg-orange-400/[0.025]
                      focus:shadow-[0_0_25px_rgba(255,140,0,0.04)]
                    "
                  />
                </div>

                {/* Email */}

                <div>
                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.12em]
                      text-white/35
                    "
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-white/[0.025]
                      px-4
                      text-xs
                      text-white
                      outline-none
                      placeholder:text-white/20
                      transition-all
                      duration-300
                      focus:border-orange-400/30
                      focus:bg-orange-400/[0.025]
                      focus:shadow-[0_0_25px_rgba(255,140,0,0.04)]
                    "
                  />
                </div>
              </div>

              {/* Subject */}

              <div>
                <label
                  htmlFor="subject"
                  className="
                    mb-2
                    block
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.12em]
                    text-white/35
                  "
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to build?"
                  required
                  className="
                    h-12
                    w-full
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    px-4
                    text-xs
                    text-white
                    outline-none
                    placeholder:text-white/20
                    transition-all
                    duration-300
                    focus:border-orange-400/30
                    focus:bg-orange-400/[0.025]
                    focus:shadow-[0_0_25px_rgba(255,140,0,0.04)]
                  "
                />
              </div>

              {/* Message */}

              <div>
                <label
                  htmlFor="message"
                  className="
                    mb-2
                    block
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.12em]
                    text-white/35
                  "
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me a little about your project..."
                  required
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white/[0.025]
                    p-4
                    text-xs
                    leading-6
                    text-white
                    outline-none
                    placeholder:text-white/20
                    transition-all
                    duration-300
                    focus:border-orange-400/30
                    focus:bg-orange-400/[0.025]
                    focus:shadow-[0_0_25px_rgba(255,140,0,0.04)]
                  "
                />
              </div>

              {/* Submit */}

              <button
                type="submit"
                disabled={submitted}
                className="
                  group
                  flex
                  h-12
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-white
                  text-xs
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:bg-orange-400
                  hover:shadow-[0_0_35px_rgba(255,140,0,0.15)]
                  disabled:cursor-default
                "
              >
                {submitted ? (
                  <>
                    <CheckCircle2 size={15} />
                    Message Sent
                  </>
                ) : (
                  <>
                    Send Message

                    <Send
                      size={14}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* =====================================================
            SOCIALS
        ===================================================== */}

        <div
          className="
            mt-12
            flex
            flex-col
            items-center
            justify-between
            gap-5
            border-t
            border-white/[0.07]
            pt-7
            sm:flex-row
          "
        >
          <p className="text-[10px] text-white/25">
            © 2026 All rights reserved.
          </p>

          <div className="flex items-center gap-2">

            {/* GitHub */}

            <a
              href="https://github.com/rashedmern"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/[0.07]
                bg-white/[0.02]
                text-white/35
                transition-all
                duration-300
                hover:border-orange-400/20
                hover:bg-orange-400/[0.05]
                hover:text-orange-400
              "
            >
              <FaGithub size={14} />
            </a>

            {/* LinkedIn */}

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/[0.07]
                bg-white/[0.02]
                text-white/35
                transition-all
                duration-300
                hover:border-orange-400/20
                hover:bg-orange-400/[0.05]
                hover:text-orange-400
              "
            >
              <FaLinkedinIn size={14} />
            </a>

            {/* Email */}

            <a
              href="mailto:your-email@example.com"
              aria-label="Email"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/[0.07]
                bg-white/[0.02]
                text-white/35
                transition-all
                duration-300
                hover:border-orange-400/20
                hover:bg-orange-400/[0.05]
                hover:text-orange-400
              "
            >
              <Mail size={14} />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}