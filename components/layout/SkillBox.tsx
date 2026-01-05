interface SkillBoxProps {
  icon: string;
  title: string;
  skills: string[];
}

const SkillBox = ({ icon, title, skills }: SkillBoxProps) => {
  return (
    <div className="border border-white/5 rounded-2xl bg-background-secondary p-6 hover:shadow-[0_0_10px_0] hover:shadow-tertiary transition-all duration-2000">
      <div className="flex items-center gap-3">
        <span className="text-2xl p-2 rounded-xl bg-secondary">{icon}</span>
        <span className="text-xl font-semibold">{title}</span>
      </div>
      <div className="flex items-center flex-wrap gap-2 text-sm text-gray-300 mt-4">
        {skills.map((skill, index) => (
          <p className="px-4 py-2 rounded-2xl bg-tertiary" key={index}>
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SkillBox;
