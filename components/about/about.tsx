"use client";

import {
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Heart,
  MapPin,
  Trophy,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        w-full
        px-6
        py-24
        text-white
        md:px-10
        lg:px-16
      "
    >
 {/* HERO → ABOUT DIVIDER */}

<div className="pointer-events-none absolute left-0 top-0 z-20 w-full">
  <div className="relative h-[1px] w-full overflow-hidden bg-white/[0.10]">

    {/* Moving orange beam */}
    <span className="about-line-beam" />

  </div>
</div>

      <div className="mx-auto max-w-[1120px]">

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div className="mb-16 text-center">

          {/* About Me Badge */}

          <div
            className="
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/[0.10]
              bg-white/[0.02]
              px-4
              py-2
              text-sm
              font-medium
              text-white/70
            "
          >
            <Code2
              size={15}
              strokeWidth={1.8}
              className="text-orange-300"
            />

            <span>About Me</span>
          </div>

          {/* Main Heading */}

          <h2
            className="
              font-[family-name:var(--font-display)]
              text-5xl
              font-normal
              leading-[1]
              tracking-[-0.02em]
              text-white
              sm:text-6xl
              md:text-[72px]
            "
          >
            Get to{" "}
            <span
              className="
                bg-gradient-to-r
                from-[#ac722a]
                via-[#c7b5ed]
                to-[#82b5ff]
                bg-clip-text
                text-transparent
              "
            >
              Know Me
            </span>
          </h2>

          {/* Subtitle */}

          <p
            className="
              mt-6
              text-sm
              leading-6
              text-white/40
              sm:text-base
            "
          >
            A snapshot of who I am and what I do
          </p>
        </div>

        {/* ================================================= */}
        {/* CURRENTLY */}
        {/* ================================================= */}

        <AboutCard className="mb-5">
          <CardHeader
            icon={<BriefcaseBusiness size={18} strokeWidth={1.8} />}
            title="Currently"
            iconClass="bg-orange-400/[0.10] text-orange-300"
          />

          <p
            className="
              max-w-[1000px]
              text-sm
              leading-6
              text-white/45
            "
          >
            Computer Science and Engineering student focused on
            building modern web applications, improving my
            development skills, and turning ideas into practical
            digital products.
          </p>
        </AboutCard>

        {/* ================================================= */}
        {/* MIDDLE GRID */}
        {/* ================================================= */}

        <div
          className="
            mb-5
            grid
            grid-cols-1
            gap-5
            lg:grid-cols-[1.7fr_0.8fr]
          "
        >
          {/* BIO */}

          <AboutCard>
            <CardHeader
              icon={<Code2 size={18} strokeWidth={1.8} />}
              title="Bio"
              iconClass="bg-blue-400/[0.10] text-blue-300"
            />

            <p
              className="
                max-w-[680px]
                text-sm
                leading-6
                text-white/45
              "
            >
              I am a Computer Science and Engineering student
              passionate about software development, web
              technologies, and problem solving. I enjoy learning
              how systems work and building clean, useful
              applications from ideas.
            </p>

            <p
              className="
                mt-3
                max-w-[680px]
                text-sm
                leading-6
                text-white/45
              "
            >
              My current focus is on becoming a strong full-stack
              developer while exploring modern technologies,
              AI-assisted development, and SaaS products.
            </p>
          </AboutCard>

          {/* EDUCATION */}

          <AboutCard>
            <CardHeader
              icon={<GraduationCap size={19} strokeWidth={1.8} />}
              title="Education"
              iconClass="bg-emerald-400/[0.10] text-emerald-300"
            />

            <InfoList
              items={[
                "BSc in Computer Science and Engineering",
                "University of Asia Pacific",
                "Computer Science & Engineering",
              ]}
              dotClass="bg-emerald-300"
            />
          </AboutCard>
        </div>

        {/* ================================================= */}
        {/* BOTTOM GRID */}
        {/* ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            md:grid-cols-3
          "
        >
          {/* PROGRAMMING */}

          <AboutCard>
            <CardHeader
              icon={<Trophy size={18} strokeWidth={1.8} />}
              title="Programming"
              iconClass="bg-amber-300/[0.10] text-amber-200"
            />

            <InfoList
              items={[
                "Problem solving",
                "Competitive programming",
                "Data structures & algorithms",
                "Continuous learning",
              ]}
              dotClass="bg-amber-200"
            />
          </AboutCard>

          {/* LOCATION */}

          <AboutCard>
            <CardHeader
              icon={<MapPin size={18} strokeWidth={1.8} />}
              title="Location"
              iconClass="bg-pink-300/[0.10] text-pink-300"
            />

            <InfoList
              items={[
                "Dhaka, Bangladesh",
                "Open to opportunities",
                "Open to remote collaboration",
              ]}
              dotClass="bg-pink-300"
            />
          </AboutCard>

          {/* INTERESTS */}

          <AboutCard>
            <CardHeader
              icon={<Heart size={18} strokeWidth={1.8} />}
              title="Interests"
              iconClass="bg-rose-300/[0.10] text-rose-300"
            />

            <InfoList
              items={[
                "Web development",
                "AI & modern technology",
                "SaaS & product development",
                "Problem solving",
              ]}
              dotClass="bg-rose-300"
            />
          </AboutCard>
        </div>
      </div>
    </section>
  );
}

/* ========================================================= */
/* ABOUT CARD */
/* ========================================================= */

function AboutCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.07]
        bg-white/[0.025]
        p-5
        transition-all
        duration-500
        hover:border-orange-400/30
        ${className}
      `}
    >
      {/* Orange top light */}

      <div
        className="
          pointer-events-none
          absolute
          left-[8%]
          right-[8%]
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-orange-400
          to-transparent
          opacity-0
          blur-[1px]
          transition-all
          duration-500
          group-hover:opacity-100
          group-hover:shadow-[0_0_14px_2px_rgba(251,146,60,0.45)]
        "
      />

      {/* Soft orange glow */}

      <div
        className="
          pointer-events-none
          absolute
          -top-16
          left-1/2
          h-24
          w-48
          -translate-x-1/2
          rounded-full
          bg-orange-400/[0.07]
          blur-3xl
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

/* ========================================================= */
/* CARD HEADER */
/* ========================================================= */

function CardHeader({
  icon,
  title,
  iconClass,
}: {
  icon: React.ReactNode;
  title: string;
  iconClass: string;
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div
        className={`
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-xl
          ${iconClass}
        `}
      >
        {icon}
      </div>

      <h3 className="text-base font-semibold text-white/80">
        {title}
      </h3>
    </div>
  );
}

/* ========================================================= */
/* INFO LIST */
/* ========================================================= */

function InfoList({
  items,
  dotClass,
}: {
  items: string[];
  dotClass: string;
}) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="
            flex
            gap-2
            text-sm
            leading-5
            text-white/45
          "
        >
          <span
            className={`
              mt-2
              h-1.5
              w-1.5
              shrink-0
              rounded-full
              ${dotClass}
            `}
          />

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}