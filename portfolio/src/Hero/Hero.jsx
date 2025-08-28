import "./Hero.css";
import GradientText from "../TextAnimations/GradientText/GradientText.jsx";
import Ahmed from "../assets/photo.jpg";
import { useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section
      className="hero flex flex-row flex-wrap items-center justify-center text-center p-8 md:text-left "
      id="hero"
      data-aos="fade-up"
    >
      <div className="hero-text m-0 mx-auto">
        <p className="text-8xl font-black uppercase">
          Hi i'm{" "}
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
          >
            Ahmed
          </GradientText>
        </p>
        <p className="text-2xl leading-relaxed max-w-md text-(--secondary-text) sm:m-0 mx-auto group">
          React web developer
          {/*I'm a React web developer with a passion for creating dynamic and
          engaging web applications. I focus on building responsive and accessible web
          applications that prioritize SEO, UI/UX, and performance.*/}
        </p>
      </div>
      <figure
        className=".hero-image-container max-w-60 min-w-40 min-h-40 m-4 mx-auto rounded-lg transition-all! duration-300 ease-in-out hover:!-translate-y-1 hover:!-translate-x-1 group"
        data-aos="fade-left"
      >
        <img
          className="hero-image rounded-[inherit] shadow-[var(--shadow-lg)] transition-all duration-300 ease-in-out group-hover:shadow-[var(--shadow-xl)]"
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
