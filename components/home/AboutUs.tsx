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
          Frontend developer focused on performance, scalability, and clean UI
        </h2>
        <p className="text-gray-300 mt-6">
          I am a Frontend Developer with 4 years of overall experience and 2+
          years of hands-on expertise in React.js, Next.js, and React Native. I
          specialize in building scalable, data-driven web and mobile
          applications with a strong focus on performance, reusable components,
          and clean UI/UX.
          <br />
          <br />
          I have worked extensively on dashboards, management systems, and
          API-integrated applications that help businesses streamline operations
          and improve productivity. I am proficient in JavaScript, TypeScript,
          Redux Toolkit, and modern styling frameworks like Tailwind CSS and
          SCSS.
          <br />
          <br />
          Alongside frontend development, I have a basic understanding of
          Node.js and REST APIs, which helps me collaborate effectively across
          full-stack workflows. I enjoy solving real-world problems and
          continuously improving user-centric digital products.
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
