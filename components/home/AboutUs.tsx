import Image from "next/image";
import Container from "../layout/Container";
import SectionTitle from "../layout/SectionTitle";
import Statistic from "../layout/Statistic";

const AboutUs = () => {
  return (
    <Container className="relative grid md:grid-cols-2 items-center gap-8 mb-12">
      <div className="border border-white/5 rounded-3xl p-2 relative">
        <div className="absolute -top-3 -left-3 border-tertiary border-2 rounded-2xl h-[100px] w-[100px]" />
        <Image
          src={"/images/profilePic.jpg"}
          alt="Hero"
          width={650}
          height={650}
          className="rounded-3xl w-full h-[400px] md:h-[650px] object-cover relative z-10 shadow-[0_0_100px_0] shadow-tertiary"
        />
      </div>
      <div>
        <SectionTitle>About Me</SectionTitle>
        <h2 className="text-2xl font-bold mt-6">
          Software Engineer building scalable SaaS applications with React.js
        </h2>
        <p className="text-gray-300 mt-6">
          I'm a Software Engineer with 4+ years of overall experience, including 2+ years specializing in React.js. 
          I build scalable SaaS, web, and mobile applications using React.js, Next.js, React Native, and TypeScript, 
          with a strong focus on performance, reusable architecture, and exceptional user experience.
          <br />
          <br />
          Throughout my career, I've developed business management platforms, real-time dashboards, 
          and API-driven applications that solve real-world business challenges. 
          My recent work includes a Poker Club Management SaaS Platform, a Jewellery Accounting Application, 
          and a Worker Work Management App, helping businesses improve operational efficiency through modern software solutions.
          <br />
          <br />
          Along with frontend development, I have practical experience with Node.js, Express.js, MongoDB, and 
          REST API development, allowing me to collaborate effectively across frontend and backend teams. 
          I also leverage AI-assisted development tools such as ChatGPT and Claude Code to accelerate development, 
          improve code quality, and enhance productivity.
        </p>

        <div className="flex gap-6 mt-6">
          <Statistic count={"4+"} title="Years of Experience" />
          <Statistic count={"5+"} title="React Projects" />
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
