import Banner from "@/components/home/Banner";
import AboutUs from "@/components/home/AboutUs";
import Skill from "@/components/home/Skill";
import ContactUs from "@/components/home/ContactUs";
import Experience from "@/components/home/Experience";
import Education from "@/components/home/Education";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutUs />
      <Skill />
      <Experience />
      <Education />
      <ContactUs />
    </>
  );
}
