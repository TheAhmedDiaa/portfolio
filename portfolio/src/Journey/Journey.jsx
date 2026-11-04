import SectionTitle from "../Components/SectionTitle";
import BackgroundSection from "../Components/BackgroundSection";
import Tabs from "../Components/Tabs";
import useI18n from "../i18n/useI18n";

function Experience() {
  const { c } = useI18n();
  const e = c.journey.experience;
  return (
    <article className="glass mx-auto max-w-3xl rounded-2xl p-6 sm:p-8">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold">{e.role}</h3>
          <p className="text-(--secondary-text)">{e.org}</p>
        </div>
        <span className="chip">{e.date}</span>
      </header>
      <ul className="mt-5 list-disc space-y-2 ps-5 text-(--secondary-text) marker:text-(--accent)">
        {e.points.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function Education() {
  const { c } = useI18n();
  const ed = c.journey.education;
  return (
    <article className="glass mx-auto max-w-3xl rounded-2xl p-6 sm:p-8">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold">{ed.school}</h3>
          <p className="text-(--secondary-text)">{ed.degree}</p>
        </div>
        <span className="chip">{ed.date}</span>
      </header>
      <p className="mb-3 mt-5 text-sm font-semibold uppercase tracking-widest text-(--muted-text)">
        {ed.coursework}
      </p>
      <ul className="flex flex-wrap gap-2">
        {ed.courses.map((course) => (
          <li key={course} className="chip">
            {course}
          </li>
        ))}
      </ul>
    </article>
  );
}

function Certifications() {
  const { c } = useI18n();
  return (
    <ul className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
      {c.journey.certs.map((cert) => (
        <li key={cert.title} className="glass flex flex-col rounded-2xl p-5">
          <span className="chip mb-4 self-start">{cert.date}</span>
          <h3 className="font-semibold">{cert.title}</h3>
          <p className="mt-1 text-sm text-(--secondary-text)">{cert.org}</p>
        </li>
      ))}
    </ul>
  );
}

export default function Journey() {
  const { c } = useI18n();
  const j = c.journey;
  const tabs = [
    { id: "experience", label: j.tabs.experience, content: <Experience /> },
    { id: "education", label: j.tabs.education, content: <Education /> },
    { id: "certifications", label: j.tabs.certifications, content: <Certifications /> },
  ];
  return (
    <BackgroundSection id="journey" placement="full">
      <SectionTitle eyebrow={j.eyebrow} title={j.title} />
      <div data-aos="fade-up">
        <Tabs tabs={tabs} label={j.tabsLabel} />
      </div>
    </BackgroundSection>
  );
}
