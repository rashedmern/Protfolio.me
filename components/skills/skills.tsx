"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Globe2,
  Wrench,
  BookOpen,
} from "lucide-react";

import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiPython,

  SiNextdotjs,
  SiReact,
  SiDjango,
} from "react-icons/si";

export default function Skills() {
  const technologies = [
    {
      name: "C",
      icon: SiC,
      color: "#A8B9CC",
    },
    {
      name: "C++",
      icon: SiCplusplus,
      color: "#00599C",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "#F7DF1E",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#3178C6",
    },
    {
      name: "Python",
      icon: SiPython,
      color: "#3776AB",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "#FFFFFF",
    },
    {
      name: "React",
      icon: SiReact,
      color: "#61DAFB",
    },
    {
      name: "Django",
      icon: SiDjango,
      color: "#44B78B",
    },
  ];

  const skillCards = [
    {
      icon: Code2,
      title: "Languages",
      count: "7",
      items: [
        "C",
        "C++",
        "Python",
        "JavaScript",
        "TypeScript",
        "C#",
        "Java",
      ],
      iconColor: "text-blue-400",
    },

    {
      icon: Globe2,
      title: "Frameworks",
      count: "7",
      items: [
        "Next.js",
        "React",
        "Django",
        ".NET",
        "Angular",
        "Tailwind CSS",
        "Bootstrap",
      ],
      iconColor: "text-purple-400",
    },

    {
      icon: Wrench,
      title: "Tools & Databases",
      count: "8",
      items: [
        "SQLite",
        "MySQL",
        "PostgreSQL",
        "Convex",
        "Supabase",
        "Git",
        "Linux",
        "Markdown",
      ],
      iconColor: "text-emerald-400",
    },

    {
      icon: BookOpen,
      title: "Fundamentals",
      count: "4",
      items: [
        "OOP",
        "Data Structures",
        "Algorithms",
        "System Design",
      ],
      iconColor: "text-orange-300",
    },
  ];

  return (
    <section
      id="skills"
      className="
        relative
        w-full
        overflow-hidden
        px-6
        py-32
        text-white
        md:px-10
        lg:px-16
      "
    >
<div className="pointer-events-none absolute left-0 top-0 z-20 w-full">
  <div className="relative h-[1px] w-full overflow-hidden bg-white/[0.10]">

    {/* Moving orange beam */}
    <span className="about-line-beam" />

  </div>
</div>
      <div className="relative mx-auto max-w-5xl">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >
          {/* Badge */}

          <div
            className="
              mx-auto
              mb-6
              flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.025]
              px-4
              py-2
              backdrop-blur-xl
            "
          >
            <span className="text-xs text-orange-400">
              ✣
            </span>

            <span
              className="
                text-[11px]
                font-medium
                uppercase
                tracking-[0.12em]
                text-white/60
              "
            >
              Tech Stack
            </span>
          </div>

          {/* Heading */}

          <h2
            className="
              text-4xl
              font-semibold
              tracking-[-0.04em]
              text-white
              md:text-5xl
            "
          >
            Skills{" "}
            <span
              className="
                bg-gradient-to-r
                from-orange-300
                via-orange-400
                to-orange-200
                bg-clip-text
                text-transparent
              "
            >
              & Technologies
            </span>
          </h2>

          <p
            className="
              mt-5
              text-sm
              text-white/40
              md:text-base
            "
          >
            The stack I use to ship clean, reliable products
          </p>
        </motion.div>

        {/* =====================================================
            TECHNOLOGY SLIDER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="
            relative
            mt-16
            overflow-hidden
            py-5
          "
        >
          {/* Left Fade */}

          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-10
              h-full
              w-24
              bg-gradient-to-r
              from-[#080808]/500
              to-transparent
            "
          />

          {/* Right Fade */}

          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              z-10
              h-full
              w-24
              bg-transparent
            
              
            "
          />

          {/* Slider */}

          <motion.div
            className="
              flex
              w-max
              items-center
              gap-14
            "
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...technologies, ...technologies].map(
              (tech, index) => {
                const Icon = tech.icon;

                return (
                  <motion.div
                    key={`${tech.name}-${index}`}
                    whileHover={{
                      scale: 1.15,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      cursor-pointer
                      items-center
                      justify-center
                    "
                    title={tech.name}
                  >
                    <Icon
                      size={42}
                      color={tech.color}
                    />
                  </motion.div>
                );
              }
            )}
          </motion.div>
        </motion.div>

{/* =====================================================
    SKILL CARDS
===================================================== */}

<div
  className="
    mt-14
    grid
    grid-cols-1
    gap-5
    md:grid-cols-2
  "
>
  {skillCards.map((card, index) => {
    const Icon = card.icon;

    return (
      <motion.div
        key={card.title}
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
          amount: 0.2,
        }}
        transition={{
          duration: 0.6,
          delay: index * 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          y: -4,
          borderColor: "rgba(255,140,0,0.28)",
          boxShadow:
            "0 12px 50px rgba(255,120,0,0.06)",
        }}
        className="
          group
          rounded-2xl
          border
          border-white/[0.08]
          bg-white/[0.025]
          p-6
          transition-colors
          duration-500
        "
      >
        {/* Card Header */}

        <div
          className="
            flex
            items-center
            justify-between
          "
        >
          <div className="flex items-center gap-4">

            {/* Icon */}

            <div
              className={`
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-white/[0.05]
                ${card.iconColor}
              `}
            >
              <Icon size={19} strokeWidth={1.8} />
            </div>

            {/* Title */}

            <h3
              className="
                text-sm
                font-semibold
                tracking-[-0.01em]
                text-white/85
              "
            >
              {card.title}
            </h3>
          </div>

          {/* Count */}

          <span
            className="
              text-[11px]
              font-medium
              text-white/25
            "
          >
            {card.count}
          </span>
        </div>

        {/* Divider */}

        <div
          className="
            my-5
            h-px
            w-full
            bg-gradient-to-r
            from-white/[0.08]
            via-white/[0.04]
            to-transparent
          "
        />

        {/* Tags */}

        <div
          className="
            flex
            flex-wrap
            gap-2.5
          "
        >
          {card.items.map((item) => (
            <span
              key={item}
              className="
                rounded-full
                border
                border-white/[0.07]
                bg-white/[0.035]
                px-3
                py-1.5
                text-[11px]
                font-medium
                text-white/50
                transition-all
                duration-300
                group-hover:border-orange-400/10
                group-hover:text-white/65
              "
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    );
  })}
</div>
      </div>
    </section>
  );
}