import { FaGraduationCap } from "react-icons/fa";
import Container from "../layout/Container";
import SectionTitle from "../layout/SectionTitle";
import ExperienceBox from "../layout/ExperienceBox";

const educationData = [
  {
    degree: "MCA (Master of Computer Applications)",
    institute: "Guru Jambheshwar University of Science & Technology",
    date: "Aug 2021 - May 2023",
    location: "Hisar, Haryana, India",
  },
  {
    degree: "BCA (Bachelor of Computer Applications)",
    institute: "Kurukshetra University",
    date: "Aug 2015 - May 2018",
    location: "Kurukshetra, Haryana, India",
  },
];

const Education = () => {
  return (
    <Container className="mb-12 flex flex-col items-center" id="education">
      <SectionTitle>Education</SectionTitle>
      <h2 className="text-2xl font-bold mt-6">
        Academic foundation in computer applications and software development
      </h2>

      <div className="w-full mt-12 max-w-[1000px] mx-auto">
        {educationData.map((item) => (
          <ExperienceBox
            key={item.degree}
            title={item.degree}
            subtitle={item.institute}
            date={item.date}
            location={item.location}
            icon={
              <FaGraduationCap className="absolute z-20 left-0 top-0 bg-secondary p-2 rounded-md text-[38px] text-black" />
            }
          />
        ))}
      </div>
    </Container>
  );
};

export default Education;
