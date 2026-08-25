import Intro from "@/components/Intro/temp";
import Navbar from "@/components/navbar/navbar";
import Cursor from "@/components/cursor/cursor";
import Hero from "@/components/Hero/hero";
import About from "@/components/about/about";

export default function Home() {
  return (
    <main>
      <Cursor />
      <Navbar />
      <Intro />
      <Hero />
      <About />
    </main>
  );
}