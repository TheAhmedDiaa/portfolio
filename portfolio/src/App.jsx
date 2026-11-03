import { useEffect } from "react";
import AOS from "aos";
import "./App.css";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Journey from "./Journey/Journey";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 40,
      disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
    const id = requestAnimationFrame(() => AOS.refreshHard());
    const safety = setTimeout(() => AOS.refreshHard(), 600);
    return () => {
      cancelAnimationFrame(id);
      clearTimeout(safety);
    };
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
