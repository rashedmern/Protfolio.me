export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center">
      {/* Home / Hero Placeholder */}
      <section id="home" className="min-h-[75vh] w-full flex flex-col items-center justify-center p-8 text-center site-container">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] text-sm font-medium text-[var(--accent)]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Section 1: Navbar &amp; Theme Active
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-primary)]">
            Rashed
          </h1>
          <p className="text-xl font-medium text-[var(--accent)]">
            Full-Stack Developer
          </p>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Navbar is built with the exact warm-editorial palette, sticky frosted-glass blur, smooth underline hover effects, and instant dark/light mode toggle.
          </p>
        </div>
      </section>

      {/* Anchor sections to test scrolling & active states */}
      <section id="experience" className="py-24 w-full border-t border-[var(--border-color)] bg-[var(--bg-secondary)]">
        <div className="site-container text-center">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Experience</h2>
          <p className="text-[var(--text-secondary)]">Upcoming Section</p>
        </div>
      </section>

      <section id="skills" className="py-24 w-full border-t border-[var(--border-color)]">
        <div className="site-container text-center">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Skills</h2>
          <p className="text-[var(--text-secondary)]">Upcoming Section</p>
        </div>
      </section>

      <section id="projects" className="py-24 w-full border-t border-[var(--border-color)] bg-[var(--bg-secondary)]">
        <div className="site-container text-center">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Projects</h2>
          <p className="text-[var(--text-secondary)]">Upcoming Section</p>
        </div>
      </section>

      <section id="education" className="py-24 w-full border-t border-[var(--border-color)]">
        <div className="site-container text-center">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Education</h2>
          <p className="text-[var(--text-secondary)]">Upcoming Section</p>
        </div>
      </section>

      <section id="contact" className="py-24 w-full border-t border-[var(--border-color)] bg-[var(--bg-secondary)]">
        <div className="site-container text-center">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Contact</h2>
          <p className="text-[var(--text-secondary)]">Upcoming Section</p>
        </div>
      </section>
    </main>
  );
}
