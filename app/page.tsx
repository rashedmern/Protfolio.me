import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center">
      {/* Section 2: Hero Section */}
      <Hero
        name="Rashed Molla Antor"
        role="Junior Software Engineer"
        companyName="archiom.io"
        companyUrl="https://archiom.io/"
        githubUrl="https://github.com/rashedmern"
        linkedinUrl="https://linkedin.com/"
        email="[EMAIL_ADDRESS]"
        resumeUrl="#resume"
      />

      {/* Anchor sections for upcoming phases */}
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
