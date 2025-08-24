interface Skill {
  name: string;
  emoji: string;
}

interface SkillItemProps {
  skill: Skill;
}

export default function SkillItem({ skill }: SkillItemProps) {
  return (
    <div 
      className="skill-item glass-effect rounded-xl p-6 text-center cursor-pointer"
      data-testid={`skill-${skill.name.toLowerCase().replace(/[\s.]/g, '-')}`}
    >
      <div className="text-4xl mb-3">{skill.emoji}</div>
      <p className="font-semibold">{skill.name}</p>
    </div>
  );
}
