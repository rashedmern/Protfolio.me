import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import BackgroundDecorations from "@/components/Decorations/BackgroundDecorations";
import Hero from "@/components/Hero/Hero";
import SectionDivider from "@/components/Dividers/SectionDivider";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import Projects from "@/components/Projects/Projects";
import Products from "@/components/Products/Products";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";
import Blog from "@/components/Blog/Blog";
import Certifications from "@/components/Certifications/Certifications";
import FAQ from "@/components/FAQ/FAQ";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://rashed.live/#person",
        name: "Rashed Molla Antor",
        alternateName: "Rashed",
        jobTitle: "Full-Stack Software Engineer",
        url: "https://rashed.live",
        image: "https://rashed.live/profile.jpg",
        sameAs: [
          "https://github.com/rashedxali",
          "https://linkedin.com/in/rashedxali",
          "https://leetcode.com/u/rashedxali",
          "https://codeforces.com/profile/rashedxali",
          "https://medium.com/@rashedxali",
          "https://www.youtube.com/@rashedxali",
        ],
        worksFor: {
          "@type": "Organization",
          name: "Archiom",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://rashed.live/#website",
        url: "https://rashed.live",
        name: "Rashed Molla Antor | Full Stack Software Engineer",
        publisher: {
          "@id": "https://rashed.live/#person",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative min-h-screen overflow-hidden z-10 pt-14 min-[1440px]:pt-10 pb-20 lg:pb-10 canvas-surface">
        {/* Background Coffee Mug, Phone Graphic, and Recent Searches */}
        <BackgroundDecorations />

        {/* Pinned Sticky Navigation Bar */}
        <Navbar />

        {/* Sections */}
        <Hero />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Products />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Blog />
        <SectionDivider />
        <Certifications />
        <SectionDivider />
        <FAQ />
        <SectionDivider />
        <Contact />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
