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
    skills: ["Tailwind CSS", "SCSS", "Bootstrap", "Material UI"],
  },
  {
    icon: "🚀",
    title: "State Management & Forms",
    skills: ["Redux Toolkit", "Context API", "React Hook Form", "Formik"],
  },
  {
    icon: "🗄️",
    title: "Backend & Database",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST API Development",
      "REST API Integration",
    ],
  },
  {
    icon: "🏗️",
    title: "Frontend Architecture",
    skills: [
      "Component-Based Architecture",
      "Custom Hooks",
      "Responsive Design",
      "Performance Optimization",
      "Lazy Loading",
      "Code Splitting",
      "Memoization",
      "SaaS Application Development",
    ],
  },
  {
    icon: "⚡",
    title: "Real-Time Communication",
    skills: ["Socket.IO", "WebSocket Integration"],
  },
  {
    icon: "🧪",
    title: "Testing",
    skills: ["Jest", "React Testing Library", "Unit Testing"],
  },
  {
    icon: "🤖",
    title: "AI-Assisted Development",
    skills: ["ChatGPT", "Claude Code"],
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
