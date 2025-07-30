import "./Skill.css";

export default function Skill({ title, skills }) {
  return (
    <div className="skill bg-(--color-card) shadow-lg rounded-lg p-4">
      <h3 className="text-xl font-semibold m-4 text-center">{title}</h3>
      <div className="skill-icons">
        {skills.map((skill, index) => (
          <div className="skill-icon flex items-center self-center" key={index}>
            <img className="w-9 m-2" src={skill.icon} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
