import { lazy } from "react";
import SectionTitle from "../Components/SectionTitle";
import BackgroundSection from "../Components/BackgroundSection";
import LazyMount from "../Components/LazyMount";

const CrystalizedBall = lazy(() => import("../Backgrounds/CrystalizedBall/CrystalizedBall"));

const STATS = [
  { value: "2027", label: "Expected graduation, Mansoura University" },
  { value: "DEPI", label: "Certified React frontend developer" },
  { value: "2", label: "Full projects built end to end" },
  { value: "AR · EN", label: "Native Arabic, fluent English" },
];

const linkClass = "text-(--accent) underline-offset-4 hover:text-(--accent-hover) hover:underline";

export default function About() {
  return (
    <BackgroundSection id="about" placement="left">
      <SectionTitle eyebrow="About me" title="Building the web, one component at a time" />

      <div className="grid items-center gap-12 md:grid-cols-2">
        <div data-aos="fade-right">
          <p className="text-lg leading-relaxed text-(--secondary-text)">
            I&apos;m Ahmed Diaa, a{" "}
            <a className={linkClass} href="https://react.dev/" target="_blank" rel="noopener noreferrer">
              React
            </a>{" "}
            frontend developer and Computer Science undergraduate at{" "}
            <a className={linkClass} href="https://www.mans.edu.eg/" target="_blank" rel="noopener noreferrer">
              Mansoura University
            </a>{" "}
            (
            <a className={linkClass} href="https://csifac.mans.edu.eg/" target="_blank" rel="noopener noreferrer">
              FCIS
            </a>
            ). I build responsive, user-friendly web apps with React.js, Next.js, Tailwind CSS
            and REST API integration, including an e-commerce platform and a hotel booking
            platform.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-(--secondary-text)">
            I care about clean UI, accessibility and performance, and I&apos;m looking for a
            full-time frontend internship on a remote team.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-4">
            {STATS.map((stat) => (
              <div key={stat.value} className="glass rounded-2xl p-4">
                <dt className="text-2xl font-extrabold text-(--primary-text)">{stat.value}</dt>
                <dd className="mt-1 text-sm text-(--muted-text)">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto w-full max-w-md" data-aos="fade-left">
          <div className="relative aspect-square w-full">
            <div className="absolute inset-0" aria-hidden="true">
              <LazyMount>
              <CrystalizedBall
                preset="plasma"
                color="#B86BFF"
                size={0.86}
                crackle={0.85}
                fill={0.5}
                interactive
                hoverStrength={0.7}
              />
              </LazyMount>
            </div>
          </div>
          <p className="mt-2 text-center text-sm text-(--muted-text)">
            Move your cursor over it, or click to shake it.
          </p>
        </div>
      </div>
    </BackgroundSection>
  );
}
