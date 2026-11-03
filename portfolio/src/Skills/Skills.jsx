import Threads from "../Backgrounds/Threads/Threads";
import SectionTitle from "../Components/SectionTitle";
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

const CARDS = [
  {
    title: "Languages",
    skills: [
      { icon: js, name: "JavaScript (ES6+)" },
      { icon: ts, name: "TypeScript" },
    ],
  },
  {
    title: "Frontend",
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
    title: "Backend basics",
    skills: [{ icon: node, name: "Node.js / Express" }],
  },
  {
    title: "Tools",
    skills: [
      { icon: git, name: "Git" },
      { icon: github, name: "GitHub" },
    ],
  },
];

const CHIPS = [
  {
    title: "API & Data",
    items: ["REST APIs", "Axios", "JWT Auth", "Firebase Auth", "Realtime Database", "MongoDB", "SQL"],
  },
  {
    title: "Libraries & workflow",
    items: ["React Router", "Context API", "Vite", "Vercel", "Cloudinary", "Postman", "npm", "Agile / Scrum"],
  },
  {
    title: "Also",
    items: ["Python", "Responsive design", "UI/UX design", "Remote collaboration"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative isolate w-full overflow-hidden px-6 py-24">
      <Threads color={[100 / 255, 39 / 255, 200 / 255]} distance={0.3} amplitude={3} />

      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Skills" title="Tools I work with" />

        <div className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4" data-aos="fade-up">
          {CARDS.map((card) => (
            <Skill key={card.title} title={card.title} skills={card.skills} />
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3" data-aos="fade-up">
          {CHIPS.map((group) => (
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
