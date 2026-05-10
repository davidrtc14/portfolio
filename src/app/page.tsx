import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FadeIn delay={0}>
        <About />
      </FadeIn>
      <FadeIn delay={50}>
        <Skills />
      </FadeIn>
      <FadeIn delay={50}>
        <Projects />
      </FadeIn>
      <FadeIn delay={50}>
        <Experience />
      </FadeIn>
      <FadeIn delay={50}>
        <Contact />
      </FadeIn>
      <Footer />
    </main>
  );
}