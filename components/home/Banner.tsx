import { PiHandWavingFill } from "react-icons/pi";
import Container from "../layout/Container";
import Button from "../layout/Button";
import { IoCodeDownload } from "react-icons/io5";
import SectionTitle from "../layout/SectionTitle";

const Banner = () => {
  return (
    <Container className="min-h-[calc(100vh-4rem)] max-w-[700px] mx-auto relative flex flex-col items-center justify-center">
      <SectionTitle>
        <PiHandWavingFill className="inline text-amber-400" />
        Hello, World!
      </SectionTitle>

      <h1 className="text-4xl md:text-6xl font-bold mt-6">I&apos;m Nikhil Garg</h1>
      <span>
        <h2 className="text-2xl md:text-3xl font-bold mt-6 text-typing">
          Software Engineer
        </h2>
      </span>
      <p className="text-gray-300 text-center mt-6">
        Software Engineer with 4+ years of experience building scalable SaaS,
        web, and mobile applications using React.js, Next.js, React Native,
        TypeScript, Node.js, and MongoDB. Skilled in developing reusable
        components, integrating REST APIs, optimizing performance, and
        delivering production-ready applications.
      </p>
      <Button
        className="mt-6 text-xl"
        href="https://drive.google.com/file/d/13H4MrC1zQMxAAb5OAW0OKdFxjyMqxMCf/view?usp=drive_link"
      >
        Download CV <IoCodeDownload className="text-3xl" />
      </Button>
    </Container>
  );
};

export default Banner;
