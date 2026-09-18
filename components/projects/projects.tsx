"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  GitBranch,
  Sparkles,
} from "lucide-react";

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    id: "arodev",
    title: "Arodev",
    description:
      "A modern agency portfolio built to showcase digital products, services, and development capabilities through a clean and premium interface.",
    category: "Web Development",
    status: "Live",
    featured: true,
    image: "/images/arodev.png",
    github: "https://github.com/rashedmern/Arodev_protfolio",
    live: "https://arodev-protfolio.vercel.app/",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },

  {
    id: "faiza",
    title: "FAIZA & CO",
    description:
      "A premium fashion e-commerce experience focused on elegant visual design, modern shopping interactions, and a luxury-inspired brand identity.",
    category: "Web Development",
    status: "Live",
    featured: true,
    image: "/images/faiza.png",
    github: "https://github.com/rashedmern/FAIZA-CO",
    live: "https://faiza-co.vercel.app/",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
    ],
  },

  {
    id: "bayraha",
    title: "Bayraha",
    description:
      "An e-commerce platform for discovering and shopping electronic components, modules, sensors, gadgets, and accessories.",
    category: "Web Development",
    status: "Live",
    featured: false,
    image: "/images/bayraha.png",
    github: "https://github.com/rashedmern/Bayraha",
    live: "https://bayraha-lcd3.vercel.app/",
    stack: ["React", "TypeScript"],
  },
];

/* =========================================================
   PROJECTS
========================================================= */

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        w-full
        overflow-hidden
        py-28
        text-white
      "
    >
      {/* =====================================================
          SUBTLE ORANGE LIGHT
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
          {/* =================================================
              PORTFOLIO LABEL
          ================================================= */}

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
            <Sparkles
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
              Portfolio
            </span>
          </div>

          {/* =================================================
              PREMIUM HEADING
          ================================================= */}

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
            Selected{" "}
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
              Projects
            </span>
          </h2>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-white/40
              md:text-[15px]
            "
          >
            A collection of digital products I’ve designed,
            engineered, and brought to life.
          </p>
        </motion.div>

        {/* =====================================================
            SECTION DIVIDER
        ===================================================== */}

        <div className="relative my-14 flex items-center">

          {/* Left line */}

          <div className="h-px flex-1 bg-white/[0.07]" />

          {/* Orange center lighting */}

          <div
            className="
              absolute
              left-1/2
              h-px
              w-32
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-orange-400/70
              to-transparent
              shadow-[0_0_14px_rgba(255,140,0,0.25)]
            "
          />

          {/* Center point */}

          <div
            className="
              absolute
              left-1/2
              h-1
              w-1
              -translate-x-1/2
              rounded-full
              bg-orange-400
              shadow-[0_0_12px_rgba(255,140,0,0.7)]
            "
          />

          {/* Right line */}

          <div className="h-px flex-1 bg-white/[0.07]" />
        </div>

        {/* =====================================================
            FEATURED PROJECTS
        ===================================================== */}

        <div className="grid gap-5 lg:grid-cols-2">
          {projects
            .filter((project) => project.featured)
            .map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                featured
              />
            ))}
        </div>

        {/* =====================================================
            OTHER PROJECTS
        ===================================================== */}

        <div className="mt-5">
          {projects
            .filter((project) => !project.featured)
            .map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: (typeof projects)[number];
  index: number;
  featured?: boolean;
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -5,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.08]
        bg-white/[0.025]
        transition-all
        duration-500
        hover:border-orange-400/[0.22]
        hover:shadow-[0_25px_80px_rgba(0,0,0,0.35)]
      "
    >
      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div
        className={`
          relative
          overflow-hidden
          bg-black/30
          ${featured ? "aspect-[16/9]" : "aspect-[16/8]"}
        `}
      >
        <img
          src={project.image}
          alt={`${project.title} project screenshot`}
          className="
            h-full
            w-full
            object-cover
            object-top
            transition-transform
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:scale-[1.035]
          "
        />

        {/* Dark overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            via-black/10
            to-transparent
            opacity-70
          "
        />

        {/* Top gradient */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-24
            bg-gradient-to-b
            from-black/30
            to-transparent
          "
        />

        {/* Featured Badge */}

        {project.featured && (
          <div
            className="
              absolute
              right-4
              top-4
              flex
              items-center
              gap-1.5
              rounded-full
              border
              border-orange-400/20
              bg-black/55
              px-3
              py-1.5
              text-[10px]
              font-medium
              text-orange-300
              backdrop-blur-xl
            "
          >
            <Sparkles size={10} />

            Featured
          </div>
        )}

        {/* Category */}

        <div
          className="
            absolute
            bottom-4
            left-4
            rounded-full
            border
            border-white/[0.12]
            bg-black/55
            px-3
            py-1.5
            text-[10px]
            text-white/60
            backdrop-blur-xl
          "
        >
          {project.category}
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="p-5 md:p-6">

        {/* Title row */}

        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h3
                className="
                  text-xl
                  font-semibold
                  tracking-[-0.025em]
                  text-white
                "
              >
                {project.title}
              </h3>

              {/* Status */}

              <span
                className="
                  flex
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-emerald-400/10
                  bg-emerald-400/[0.05]
                  px-2
                  py-1
                  text-[9px]
                  font-medium
                  text-emerald-300/70
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-emerald-400
                  "
                />

                {project.status}
              </span>
            </div>
          </div>

          {/* Arrow */}

          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/[0.08]
              bg-white/[0.025]
              text-white/35
              transition-all
              duration-300
              group-hover:border-orange-400/20
              group-hover:bg-orange-400/[0.07]
              group-hover:text-orange-300
            "
          >
            <ArrowUpRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </div>
        </div>

        {/* Description */}

        <p
          className="
            mt-3
            max-w-2xl
            text-xs
            leading-6
            text-white/40
            md:text-[13px]
          "
        >
          {project.description}
        </p>

        {/* =====================================================
            TECH STACK
        ===================================================== */}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-white/[0.07]
                bg-white/[0.025]
                px-2.5
                py-1
                text-[10px]
                text-white/40
                transition-all
                duration-300
                group-hover:border-orange-400/[0.10]
                group-hover:text-white/55
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* =====================================================
            ACTIONS
        ===================================================== */}

        <div
          className="
            mt-6
            grid
            grid-cols-2
            gap-2
          "
        >
          {/* GitHub */}

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              h-10
              items-center
              justify-center
              gap-2
              rounded-lg
              border
              border-white/[0.08]
              bg-white/[0.025]
              text-xs
              font-medium
              text-white/55
              transition-all
              duration-300
              hover:border-white/[0.15]
              hover:bg-white/[0.05]
              hover:text-white
            "
          >
            <GitBranch size={14} />

            GitHub
          </a>

          {/* Live */}

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              h-10
              items-center
              justify-center
              gap-2
              rounded-lg
              bg-white
              text-xs
              font-medium
              text-black
              transition-all
              duration-300
              hover:bg-orange-400
              hover:text-black
              hover:shadow-[0_0_30px_rgba(255,140,0,0.15)]
            "
          >
            <ExternalLink size={14} />

            Live Preview
          </a>
        </div>
      </div>

      {/* =====================================================
          HOVER LIGHT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          left-1/2
          h-40
          w-72
          -translate-x-1/2
          rounded-full
          bg-orange-500/[0.05]
          blur-[70px]
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />
    </motion.article>
  );
}