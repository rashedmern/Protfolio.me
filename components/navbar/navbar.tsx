import Image from "next/image";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <a href="/" aria-label="Rashed">
          <Image
            src="/images/logo.png"
            alt="Rashed"
            width={110}
            height={120}
            priority
            className="h-auto w-[140px] object-contain"
          />
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="
                group
                relative
                text-[13px]
                font-medium
                tracking-wide
                text-white/55
                transition-colors
                duration-300
                hover:text-white
              "
            >
              {item.name}

              <span
                className="
                  absolute
                  -bottom-2
                  left-1/2
                  h-px
                  w-0
                  -translate-x-1/2
                  bg-orange-400
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </a>
          ))}
        </div>

        {/* Resume */}
        <a
          href="/resume/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            hidden
            rounded-full
            border
            border-white/10
            bg-white/[0.02]
            px-5
            py-2.5
            text-[13px]
            font-medium
            text-white/80
            transition-all
            duration-300
            hover:border-orange-400/40
            hover:bg-orange-500/10
            hover:text-orange-300
            md:block
          "
        >
          Resume
        </a>

        {/* Mobile menu */}
        <button
          type="button"
          aria-label="Open menu"
          className="
            flex
            h-10
            w-10
            flex-col
            items-center
            justify-center
            gap-1.5
            rounded-full
            border
            border-white/10
            bg-white/[0.02]
            md:hidden
          "
        >
          <span className="h-px w-4 bg-white/70" />
          <span className="h-px w-4 bg-white/70" />
        </button>

      </nav>
    </header>
  );
}