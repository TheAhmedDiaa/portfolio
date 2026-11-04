import { lazy } from "react";
import SectionTitle from "../Components/SectionTitle";
import LazyMount from "../Components/LazyMount";
import useI18n from "../i18n/useI18n";
import useLowPower from "../Components/useLowPower";
import StaticBackdrop from "../Components/StaticBackdrop";
import Skill from "./Skill";

import js from "../assets/js.svg";
import ts from "../assets/typescript.svg";
import css from "../assets/css3.svg";
import html from "../assets/html5.svg";
import tailwind from "../assets/tailwind.svg";
import react from "../assets/react.svg";
import bootstrap from "../assets/bootstrap.svg";
import next from "../assets/nextjs.svg";
import node from "../assets/nodejs.svg";
import git from "../assets/git.svg";
import github from "../assets/github.svg";

const Threads = lazy(() => import("../Backgrounds/Threads/Threads"));
// stable reference so Threads doesn't rebuild its renderer on re-render
const THREADS_COLOR = [100 / 255, 39 / 255, 200 / 255];

const CARDS = [
  {
    id: "languages",
    skills: [
      { icon: js, name: "JavaScript (ES6+)" },
      { icon: ts, name: "TypeScript" },
    ],
  },
  {
    id: "frontend",
    skills: [
      { icon: html, name: "HTML5" },
      { icon: css, name: "CSS3" },
      { icon: tailwind, name: "Tailwind CSS" },
      { icon: react, name: "React" },
      { icon: next, name: "Next.js" },
      { icon: bootstrap, name: "Bootstrap" },
    ],
  },
  {
    id: "backend",
    skills: [{ icon: node, name: "Node.js / Express" }],
  },
  {
    id: "tools",
    skills: [
      { icon: git, name: "Git" },
      { icon: github, name: "GitHub" },
    ],
  },
];

export default function Skills() {
  const { c } = useI18n();
  const s = c.skills;
  const lowPower = useLowPower();
  return (
    <section id="skills" className="relative isolate w-full overflow-hidden px-6 py-24">
      {lowPower ? (
        <div className="absolute inset-0 -z-20">
          <StaticBackdrop variant="threads" />
        </div>
      ) : (
        <LazyMount className="absolute inset-0 -z-20">
          <Threads color={THREADS_COLOR} distance={0.3} amplitude={3} />
        </LazyMount>
      )}

      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow={s.eyebrow} title={s.title} />

        <div className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4" data-aos="fade-up">
          {CARDS.map((card) => (
            <Skill key={card.id} title={s.cards[card.id]} skills={card.skills} />
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3" data-aos="fade-up">
          {s.chips.map((group) => (
            <div key={group.title} className="glass rounded-2xl p-5">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-(--muted-text)">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
