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

      <h1 className="text-4xl md:text-6xl font-bold mt-6">I'm Nikhil Garg</h1>
      <span>
        <h2 className="text-2xl md:text-3xl font-bold mt-6 text-typing">
          Frontend Developer
        </h2>
      </span>
      <p className="text-gray-300 text-center mt-6">
        4 years of overall experience with 2+ years specializing in React.js,
        Next.js, and React Native. I build high-performance, user-centric
        applications that solve real business problems.
      </p>
      <Button
        className="mt-6 text-xl"
        href="https://drive.google.com/file/d/10L-25XsZpQz92y4VAzPA13y0KfG2sJ8N/view?usp=drive_link"
      >
        Download CV <IoCodeDownload className="text-3xl" />
      </Button>
    </Container>
  );
};

export default Banner;
