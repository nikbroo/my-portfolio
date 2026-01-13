import { FaLaptopCode } from "react-icons/fa";
import Container from "../layout/Container";
import SectionTitle from "../layout/SectionTitle";
import ExperienceBox from "../layout/ExperienceBox";

const experienceData = [
  {
    company: "Graphketing Pvt. Ltd.",
    position: "React Developer",
    date: "Dec, 2023 - Present",
    location: "Noida, Uttar Pradesh, India",
    projects: [
      {
        title: "Jewellery Accounting App",
        description: [
          "Developed a <b style='color: white'>Jewellery Accounting App</b> for gold, silver, and diamond businesses to replace manual bookkeeping.",
          "Implemented jewellery-specific features such as <b style='color: white'>Girvi, Karigar, and stock management</b>, not supported effectively by generic accounting tools.",
          "Reduced daily accounting workload from a <b style='color: white'>full day to 1-2 hours</b> through a customized jewellery accounting solution.",
        ],
      },
      {
        title: "Worker Work Management App",
        description: [
          "Built a mobile application using React Native to manage daily worker assignments and performance tracking.",
          "Implemented analytics dashboards used by <b style='color: white'>20+ managers</b> to monitor productivity and training effectiveness.",
          "Improved task visibility and reporting, leading to better workforce management.",
        ],
      },
      {
        title: "Inventory Management Dashboard",
        description: [
          "Developed a dynamic frontend for an Inventory Management Dashboard using React Js and Bootstrap.",
          "Integrated comprehensive APIs to seamlessly manage complex functionalities such as adding raw materials, creating finished goods, and overseeing order dispatch, returns, and cancellations.",
          "Implemented advanced customer detail management and analytics to provide insightful tracking of inventory levels and order history, boosting operational efficiency.",
        ],
      },
    ],
  },
  {
    company: "Ear Solutions Pvt. Ltd.",
    position: "Frontend Developer",
    date: "Jan, 2023 - Dec, 2023",
    location: "Noida, Uttar Pradesh, India",
    projects: [
      {
        description: [
          "Gained in-depth knowledge in React Js, React Native, JavaScript, HTML, and CSS, laying a solid foundation for modern web development.",
          "Contributed to in-house projects, applying newly acquired skills to build and enhance web applications.",
          "Managed and maintained official websites, ensuring they were up-to-date, responsive, and user-friendly, thereby improving the online presence of the company.",
        ],
      },
    ],
  },
  {
    company: "QTC Infotech Pvt. Ltd.",
    position: "Web Designer",
    date: "Sep, 2021 - Aug,2022",
    location: " Jind, Haryana, India",
    projects: [
      {
        description: [
          "Developed a strong foundation in JavaScript, HTML, CSS, and WordPress, mastering the essentials of web development.",
          "Worked on live projects, gaining practical experience by creating and deploying fully responsive websites.",
          "Collaborated with teams to ensure websites were not only aesthetically pleasing but also optimized for performance and user experience.",
        ],
      },
    ],
  },
];

const Experience = () => {
  return (
    <Container className="mb-12 flex flex-col items-center" id="contact">
      <SectionTitle>Work Experience</SectionTitle>
      <h2 className="text-2xl font-bold mt-6">
        Hands-on experience building real-world production applications
      </h2>

      <div className="w-full mt-12 max-w-[1000px] mx-auto">
        {experienceData.map((item) => (
          <ExperienceBox
            key={item.company}
            company={item.company}
            position={item.position}
            date={item.date}
            location={item.location}
            projects={item.projects}
          />
        ))}
      </div>
    </Container>
  );
};

export default Experience;
