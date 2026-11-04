import { lazy } from "react";
import LazyMount from "../Components/LazyMount";
import GradientText from "../TextAnimations/GradientText/GradientText.jsx";
import { GRADIENT } from "../Components/spotlight";
import photo from "../assets/photo.png";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import gmail from "../assets/gmail.svg";

const Topography = lazy(() => import("../Backgrounds/Topography/Topography"));

const SOCIALS = [
  { href: "https://github.com/theAhmedDiaa", icon: github, label: "GitHub" },
  { href: "https://linkedin.com/in/ahmed-diaa-front-end", icon: linkedin, label: "LinkedIn" },
  { href: "mailto:theahmeddiaa@gmail.com", icon: gmail, label: "Email" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen w-full items-center overflow-hidden px-6 pb-16 pt-24"
    >
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <LazyMount>
        <Topography
          dpr={1.5}
          color="#4f7cff"
          lineCount={24}
          tilt={34}
          speed={0.2}
          glow={0.7}
          markers="plus"
          hoverEffect="lift"
          clickEffect="pulse"
        />
        </LazyMount>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 28% 50%, rgba(0,0,0,0.72), transparent 62%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-48"
          style={{ background: "linear-gradient(to top, #000, transparent)" }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="text-center lg:text-left">
          <p
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-(--secondary-text)"
            data-aos="fade-down"
          >
            <span className="pulse-dot size-2 rounded-full bg-[#40ffaa]" aria-hidden="true" />
            Open to remote frontend internships
          </p>

          <h1
            className="text-5xl font-black uppercase leading-[1.05] sm:text-7xl xl:text-8xl"
            data-aos="fade-up"
          >
            Hi, I&apos;m
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
            >
              Ahmed Diaa
            </GradientText>
          </h1>

          <p className="mt-4 text-xl font-semibold text-(--primary-text) sm:text-2xl" data-aos="fade-up" data-aos-delay="100">
            Frontend Developer · React.js
          </p>
          <p
            className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-(--secondary-text) lg:mx-0"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            I build fast, accessible and responsive web apps with React, Next.js and
            Tailwind CSS, from e-commerce storefronts to booking platforms.
          </p>

          <div
            className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-black transition hover:-translate-y-0.5"
              style={{ background: GRADIENT }}
            >
              View projects <span aria-hidden="true">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-(--border-hover) bg-white/5 px-6 py-3 font-semibold backdrop-blur transition hover:bg-white/10"
            >
              Get in touch
            </a>
            <ul className="flex items-center gap-2">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="glass grid size-11 place-items-center rounded-full transition hover:-translate-y-0.5"
                  >
                    <img src={social.icon} alt="" className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <figure className="mx-auto" data-aos="fade-left" data-aos-delay="150">
          <div
            className="rounded-3xl p-1 shadow-[var(--shadow-accent-lg)]"
            style={{ background: "linear-gradient(135deg, #40ffaa, #4079ff, #b86bff)" }}
          >
            <img
              src={photo}
              alt="Portrait of Ahmed Diaa"
              className="block w-56 rounded-[1.35rem] bg-black sm:w-64"
              width="256"
              height="256"
              fetchPriority="high"
            />
          </div>
          <figcaption className="mt-3 text-center text-sm text-(--muted-text)">
            Ahmed Diaa El-Deen · Mansoura, Egypt
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
