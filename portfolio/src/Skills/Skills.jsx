import Skill from './Skill';

import js from '../assets/js.svg';
import ts from '../assets/typescript.svg';

import css from '../assets/css3.svg';
import html from '../assets/html5.svg';
import tailwind from '../assets/tailwind.svg';
import react from '../assets/react.svg';
import bootstrap from '../assets/bootstrap.svg';

import next from '../assets/nextjs.svg';
import node from '../assets/nodejs.svg';


export default function Skills() {

  const langs = [
    { icon: js, name: 'JavaScript' },
    { icon: ts, name: 'TypeScript' }
  ]

  const frontend = [
    { icon: html, name: 'HTML5' },
    { icon: css, name: 'CSS3' },
    { icon: tailwind, name: 'Tailwind CSS' },
    { icon: react, name: 'React' },
    { icon: bootstrap, name: 'Bootstrap' }
  ];

  const backend = [
    { icon: next, name: 'Next.js' },
    { icon: node, name: 'Node.js' }
  ];

  return (
    <section className="skills bg-(--color-background)" id="skills">
      <h2 className="text-3xl font-bold text-center m-3">My Skills</h2>
      <div className="skills-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
        <Skill title="Languages" skills={langs} />
        <Skill title="Frontend" skills={frontend} />
        <Skill title="Backend" skills={backend} />
        <Skill title="Tools" skills={[]} />
      </div>
    </section>
  );
}
