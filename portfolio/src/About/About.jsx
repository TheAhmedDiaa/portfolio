import "./About.css";
import GradientText from "../TextAnimations/GradientText/GradientText.jsx";
import Ahmed from "../assets/photo.png";
import { useState } from "react";

export default function About() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="hero" id="about" data-aos="fade-up">
      <div className="hero-text">
        <p className="text-4xl font-black">
          Hi i'm{" "}
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
          >
            Ahmed
          </GradientText>
        </p>
        <p className="about-text">
          I'm a React web developer with a passion for creating dynamic and
          engaging UI and UX. I focus on building responsive and accessible web
          applications that prioritize SEO, UI, UX, and performance.
        </p>
      </div>
      <figure className="hero-image-container">
        <img
          className="hero-image"
          src={Ahmed}
          alt="Ahmed"
          onLoad={() => setLoaded(true)}
          style={{ display: loaded ? 'block' : 'none' }}
        />
        {!loaded && <div className="loader"></div>}
        <figcaption className="hero-image-caption">
          Ahmed Diaa - React Web Developer
        </figcaption>
      </figure>
    </section>
  );
}
