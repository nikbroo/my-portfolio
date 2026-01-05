import Container from "../layout/Container";
import SectionTitle from "../layout/SectionTitle";
import SkillBox from "../layout/SkillBox";

const skillData = [
  {
    icon: "🎨",
    title: "Frontend Frameworks & Libraries",
    skills: ["React.js", "Next.js", "React Native", "Vite", "Electron.js"],
  },
  {
    icon: "</>",
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    icon: "✨",
    title: "Styling & UI",
    skills: ["Tailwind CSS", "SCSS", "Bootstrap"],
  },
  {
    icon: "🚀",
    title: "State Management & Forms",
    skills: ["Redux Toolkit", "Formik", "React Hook Form"],
  },
  {
    icon: "🛠️",
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitLab",
      "VS Code",
      "Postman",
      "Figma",
      "AWS Amplify",
      "Chrome DevTools",
      "Redux DevTools",
    ],
  },
  {
    icon: "💻",
    title: "Backend (Basic)",
    skills: ["Node.js", "REST API Integration"],
  },
];

const Skill = () => {
  return (
    <Container className="mb-12 flex flex-col items-center">
      <SectionTitle>Technical Skills</SectionTitle>
      <h2 className="text-2xl font-bold mt-6">
        Technologies and tools I use to build modern applications
      </h2>
      <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 mt-12">
        {skillData.map((skill, index) => (
          <SkillBox
            key={index}
            icon={skill.icon}
            title={skill.title}
            skills={skill.skills}
          />
        ))}
      </div>
    </Container>
  );
};

export default Skill;
