"use client";

import {
  BriefcaseBusiness,
  CalendarDays,
  GraduationCap,
  BookOpen,
} from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
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
      {/* ================================================= */}
      {/* SECTION DIVIDER */}
      {/* ================================================= */}

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
          {/* Experience Badge */}

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
            <BriefcaseBusiness
              size={15}
              strokeWidth={1.8}
              className="text-orange-300"
            />

            <span>Experience</span>
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
            Work &{" "}
            <span
              className="
                bg-gradient-to-r
                from-orange-300
                via-white
                to-orange-400
                bg-clip-text
                text-transparent
              "
            >
              Education
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
            A journey through learning, building, and teaching
          </p>
        </div>

        {/* ================================================= */}
        {/* CURRENT WORK */}
        {/* ================================================= */}

        <ExperienceCard className="mb-5">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <IconBox className="bg-blue-400/[0.10] text-blue-300">
                <BriefcaseBusiness size={18} strokeWidth={1.8} />
              </IconBox>

              <div>
                <h3 className="text-base font-semibold text-white/85">
                  Trainee Software Engineer (Intern)
                </h3>

                <p className="mt-1 text-xs text-white/40">
                  Bangladesh Software Solution · Dhaka, Bangladesh
                </p>
              </div>
            </div>

            <span
              className="
                shrink-0
                rounded-full
                bg-blue-400/[0.10]
                px-3
                py-1
                text-[10px]
                font-medium
                text-blue-300
              "
            >
              Current Work
            </span>
          </div>

          {/* Date */}

          <DateBadge>
            <CalendarDays size={12} strokeWidth={1.8} />
            February 2026 – Present
          </DateBadge>

          {/* Responsibilities */}

          <ul className="mt-4 space-y-2">
            <ExperiencePoint>
              Working on full-stack web development projects with an
              experienced team
            </ExperiencePoint>

            <ExperiencePoint>
              Learning industry-standard software engineering practices from
              experienced mentors
            </ExperiencePoint>

            <ExperiencePoint>
              Collaborating with cross-functional teams on international
              client projects
            </ExperiencePoint>
          </ul>
        </ExperienceCard>

        {/* ================================================= */}
        {/* TIMELINE */}
        {/* ================================================= */}

        <div className="mb-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/[0.10]" />

          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-white/30
            "
          >
            Timeline
          </span>

          <div className="h-px flex-1 bg-white/[0.10]" />
        </div>

        {/* ================================================= */}
        {/* TRAINER */}
        {/* ================================================= */}

        <ExperienceCard className="mb-5 ml-0 md:ml-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <IconBox className="bg-emerald-400/[0.10] text-emerald-300">
                <BookOpen size={18} strokeWidth={1.8} />
              </IconBox>

              <div>
                <h3 className="text-base font-semibold text-white/85">
                  Competitive Programming Trainer & Mentor
                </h3>

                <p className="mt-1 text-xs text-white/40">
                  University of Asia Pacific · Dhaka, Bangladesh
                </p>
              </div>
            </div>

            <span
              className="
                shrink-0
                rounded-full
                bg-emerald-400/[0.10]
                px-3
                py-1
                text-[10px]
                font-medium
                text-emerald-300
              "
            >
              Teaching
            </span>
          </div>

          <DateBadge>
            <CalendarDays size={12} strokeWidth={1.8} />
            July 2024 – Present
          </DateBadge>

          <ul className="mt-4 space-y-2">
            <ExperiencePoint>
              Training and mentoring students in competitive programming and
              problem-solving
            </ExperiencePoint>

            <ExperiencePoint>
              Conducting multiple weekly training and practice sessions
            </ExperiencePoint>

            <ExperiencePoint>
              Helping students prepare for national and international
              programming contests
            </ExperiencePoint>

            <ExperiencePoint>
              Building a strong competitive programming community at UAP
            </ExperiencePoint>
          </ul>
        </ExperienceCard>

        {/* ================================================= */}
        {/* EDUCATION */}
        {/* ================================================= */}

        <ExperienceCard className="ml-0 md:ml-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <IconBox className="bg-purple-400/[0.10] text-purple-300">
                <GraduationCap size={19} strokeWidth={1.8} />
              </IconBox>

              <div>
                <h3 className="text-base font-semibold text-white/85">
                  BSc (Eng.) in Computer Science and Engineering
                </h3>

                <p className="mt-1 text-xs text-white/40">
                  University of Asia Pacific · Dhaka, Bangladesh
                </p>
              </div>
            </div>

            <span
              className="
                shrink-0
                rounded-full
                bg-purple-400/[0.10]
                px-3
                py-1
                text-[10px]
                font-medium
                text-purple-300
              "
            >
              Education
            </span>
          </div>

          <DateBadge>
            <CalendarDays size={12} strokeWidth={1.8} />
            July 2022 – July 2026
          </DateBadge>

          <ul className="mt-4 space-y-2">
            <ExperiencePoint>
              CGPA: 3.81 / 4.00
            </ExperiencePoint>

            <ExperiencePoint>
              Received 2 Vice Chancellor Awards and 4 Dean&apos;s Awards
            </ExperiencePoint>

            <ExperiencePoint>
              Focus areas: Software Engineering, Web Development, AI/ML, Data
              Structures & Algorithms
            </ExperiencePoint>
          </ul>
        </ExperienceCard>
      </div>
    </section>
  );
}

/* ========================================================= */
/* EXPERIENCE CARD */
/* ========================================================= */

function ExperienceCard({
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
/* ICON BOX */
/* ========================================================= */

function IconBox({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
        flex
        h-9
        w-9
        shrink-0
        items-center
        justify-center
        rounded-xl
        ${className}
      `}
    >
      {children}
    </div>
  );
}

/* ========================================================= */
/* DATE BADGE */
/* ========================================================= */

function DateBadge({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        mt-3
        inline-flex
        items-center
        gap-1.5
        rounded-md
        border
        border-white/[0.08]
        bg-white/[0.02]
        px-2.5
        py-1
        text-[10px]
        text-white/40
      "
    >
      {children}
    </div>
  );
}

/* ========================================================= */
/* EXPERIENCE POINT */
/* ========================================================= */

function ExperiencePoint({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <li
      className="
        flex
        gap-2
        text-sm
        leading-5
        text-white/45
      "
    >
      <span
        className="
          mt-2
          h-1.5
          w-1.5
          shrink-0
          rounded-full
          bg-orange-300
        "
      />

      <span>{children}</span>
    </li>
  );
}