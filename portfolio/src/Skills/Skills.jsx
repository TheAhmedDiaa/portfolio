import Threads from "../Backgrounds/Threads/Threads";

import Skill from "./Skill";

import code from "../assets/code.svg";

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
import docker from "../assets/docker.svg";

export default function Skills() {
  const langs = [
    { icon: js, name: "JavaScript" },
    { icon: ts, name: "TypeScript" },
  ];

  const frontend = [
    { icon: html, name: "HTML5" },
    { icon: css, name: "CSS3" },
    { icon: tailwind, name: "Tailwind CSS" },
    { icon: react, name: "React" },
    { icon: bootstrap, name: "Bootstrap" },
  ];

  const backend = [
    { icon: next, name: "Next.js" },
    { icon: node, name: "Node.js" },
  ];

  const tools = [
    { icon: git, name: "Git" },
    { icon: github, name: "GitHub" },
    { icon: docker, name: "Docker" },
  ];

  return (
    <section
      className="skills bg-(--background) backdrop-blur-md min-h-[100vh] max-h-full relative w-full flex flex-col justify-center items-center"
      id="skills"
    >
      <Threads
        color={[(100, 39, 200)]}
        distance={0.3}
        amplitude={3}
      />
      <h2 className="text-3xl font-bold text-center m-3">
        My Skills{" "}
        <span>
          <img src={code} alt="Code" className="inline-block w-20" />
        </span>
      </h2>
      <div className="skills-grid grid place-items-center mx-auto w-full sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
        <Skill title="Languages" skills={langs} />
        <Skill title="Frontend" skills={frontend} />
        <Skill title="Backend" skills={backend} />
        <Skill title="Tools" skills={tools} />
      </div>
    </section>
  );
}
