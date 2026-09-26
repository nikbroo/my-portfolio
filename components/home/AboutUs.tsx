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
          alt="Nikhil Garg"
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
          I&apos;m a Software Engineer with 4+ years of experience building
          scalable SaaS, web, and mobile applications using React.js, Next.js,
          React Native, TypeScript, Node.js, and MongoDB. I focus on reusable
          components, clean architecture, and delivering production-ready
          applications.
          <br />
          <br />
          My recent work includes a Poker Club Management SaaS Platform with 18+
          modules, a Jewellery Accounting Application that cut daily bookkeeping
          from a full day to 1-2 hours, a React Native Worker Work Management
          App, and the backend for Aquasheel, an RO Management SaaS Platform.
          Together these solve real operational problems for the businesses that
          run on them.
          <br />
          <br />
          Alongside frontend development, I build backends with Node.js,
          Express.js, TypeScript, and MongoDB, covering REST API design, JWT and
          OTP authentication, scheduled jobs, payment gateway integration, and
          real-time features over Socket.IO. I also leverage AI-assisted
          development tools such as ChatGPT and Claude Code to accelerate
          development, improve code quality, and enhance productivity.
        </p>

        <div className="flex gap-6 mt-6">
          <Statistic count={"4+"} title="Years of Experience" />
          <Statistic count={"4"} title="Flagship Projects" />
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
