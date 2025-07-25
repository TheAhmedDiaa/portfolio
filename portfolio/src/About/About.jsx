import "./About.css";
import GradientText from "../TextAnimations/GradientText/GradientText.jsx";
import Ahmed from "../assets/photo.png";

export default function About() {
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
          engaging UI and UX. I specialize in building responsive and accessible
          web applications that prioritize user needs.
        </p>
      </div>
      <img src={Ahmed} alt="Ahmed" className="hero-image" />
    </section>
  );
}
