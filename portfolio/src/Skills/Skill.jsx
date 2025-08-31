export default function Skill({ title, skills }) {
  return (
    <div className="skill bg-(--card-background) backdrop-blur-sm max-w-64 w-full h-full shadow-[var(--shadow-sm)] rounded-lg transition-all duration-300 hover:shadow-[var(--shadow-accent-lg)] hover:scale-105">
      <h3 className="text-xl font-semibold m-4 text-center">{title}</h3>
      <div className="skill-icons p-4">
        {skills.map((skill, index) => (
          <div className="skill-icon flex items-center self-center" key={index}>
            <img
              className="w-8 mt-2 mb-2 mr-2"
              src={skill.icon}
              alt={skill.name}
            />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
