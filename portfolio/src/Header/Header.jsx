import "./Header.css";
import { useEffect } from "react";
import GradientText from "../TextAnimations/GradientText/GradientText.jsx";

export default function Header() {
  if (window.location.hash) {
    history.replaceState(null, null, " ");
  }

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <section data-aos="fade-down">
      <nav>
        <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        className="h3"
      >
        Ahmed's Portfolio
      </GradientText>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
      </nav>
      
    </section>
  );
}
