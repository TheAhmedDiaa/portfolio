import "./Hero.css";
import GradientText from "../TextAnimations/GradientText/GradientText.jsx";
import Ahmed from "../assets/photo.png";
import { useState } from "react";
import DarkVeil from '../Backgrounds/DarkVeil/DarkVeil';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section
      className="hero flex flex-row flex-wrap items-center justify-center text-center p-8 md:text-left relative min-h-[100vh] max-h-full w-full mt-8"
      id="hero"
      data-aos="fade-up"
    >
      <DarkVeil speed={2} className="absolute -z-10 bottom-0 left-0" />
      <div className="hero-text m-0 mx-auto">
        <h1 className="text-8xl font-black uppercase">
          Hi i'm{" "}
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
          >
            Ahmed
          </GradientText>
        </h1>
        <p className="text-2xl leading-relaxed max-w-md text-(--secondary-text) sm:m-0 mx-auto group">
          React web developer
        </p>
      </div>
      <figure
        className="hero-image-container max-w-75 min-w-40 min-h-40 m-4 mx-auto rounded-lg transition-all! duration-300 ease-in-out hover:!-translate-y-1 hover:!-translate-x-1 group"
        data-aos="fade-left"
      >
        <img
          className="hero-image rounded-[inherit] shadow-[var(--shadow-lg)] transition-all duration-300 ease-in-out group-hover:shadow-[var(--shadow-accent-lg)]"
          src={Ahmed}
          alt="Ahmed"
          onLoad={() => setLoaded(true)}
          style={{ display: loaded ? "block" : "none" }}
        />
        {!loaded && <div className="loader"></div>}
        <figcaption className="image-caption text-sm mt-2 text-center text-(--secondary-text)">
          Ahmed Diaa - React Web Developer
        </figcaption>
      </figure>
    </section>
  );
}
