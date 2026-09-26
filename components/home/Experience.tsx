import Container from "../layout/Container";
import SectionTitle from "../layout/SectionTitle";
import ExperienceBox from "../layout/ExperienceBox";

const experienceData = [
  {
    company: "Graphketing Pvt. Ltd.",
    position: "React Developer",
    date: "Dec 2023 - Present",
    location: "Noida, Uttar Pradesh, India",
    projects: [
      {
        title: "Poker Club Management SaaS Platform",
        description: [
          "Developed a <b style='color: white'>Poker Club Management SaaS Platform</b> with <b style='color: white'>18+ modules</b> using React.js, TypeScript, Redux Toolkit, Socket.IO, and REST APIs.",
          "Implemented <b style='color: white'>role-based access control (RBAC)</b> and a library of reusable components shared across every module.",
          "Delivered <b style='color: white'>real-time features</b> over Socket.IO, keeping table state, balances, and activity in sync across connected clients.",
        ],
      },
      {
        title: "Jewellery Accounting Application",
        description: [
          "Built a <b style='color: white'>Jewellery Accounting Application</b> for gold, silver, and diamond businesses, digitizing manual accounting workflows end to end.",
          "Reduced daily accounting effort from <b style='color: white'>1 day to 1-2 hours</b> through a workflow tailored to jewellery-specific bookkeeping.",
        ],
      },
      {
        title: "Worker Work Management App",
        link: "https://play.google.com/store/apps/details?id=ccom.workerapp",
        description: [
          "Developed a <b style='color: white'>Worker Work Management App</b> using React Native, published on the Google Play Store.",
          "Implemented <b style='color: white'>real-time tracking and analytics</b> with REST API integration to improve day-to-day workforce management.",
        ],
      },
      {
        title: "Aquasheel - RO Management SaaS Platform (Backend)",
        description: [
          "Engineered the <b style='color: white'>backend</b> for Aquasheel using <b style='color: white'>Node.js, Express.js, TypeScript, MongoDB, and AWS</b>.",
          "Developed REST APIs with <b style='color: white'>JWT and OTP authentication</b>, scheduled jobs, and automated invoicing.",
          "Built wallet and reward management along with <b style='color: white'>Razorpay payment gateway integration</b>.",
        ],
      },
      {
        title: "Across Projects",
        description: [
          "Improved application performance through <b style='color: white'>lazy loading, code splitting, memoization, reusable architecture, and efficient state management</b>.",
          "Collaborated with cross-functional teams to deliver scalable, production-ready solutions.",
        ],
      },
    ],
  },
  {
    company: "Ear Solutions Pvt. Ltd.",
    position: "Frontend Developer",
    date: "Jan 2023 - Dec 2023",
    location: "Noida, Uttar Pradesh, India",
    projects: [
      {
        description: [
          "Achieved significant performance gains, improving <b style='color: white'>Core Web Vitals and component loading times by 15%</b> through comprehensive refactoring of legacy code.",
          "Established <b style='color: white'>reusable React component standards</b> adopted across the codebase.",
          "<b style='color: white'>Enhanced team efficiency</b> by maintaining comprehensive documentation for new modules and shared component libraries.",
        ],
      },
    ],
  },
  {
    company: "QTC Infotech Pvt. Ltd.",
    position: "Web Designer",
    date: "Sep 2021 - Aug 2022",
    location: "Jind, Haryana, India",
    projects: [
      {
        description: [
          "Successfully launched <b style='color: white'>8+ fully responsive client websites</b> on time, overseeing the process from initial design concept through final deployment.",
          "Achieved <b style='color: white'>high performance scores</b> by optimizing assets and user experience (UX) across all deliverables.",
          "Utilized JavaScript, HTML, CSS, and WordPress to <b style='color: white'>build foundational skills</b> in end-to-end web development and content management.",
        ],
      },
    ],
  },
];

const Experience = () => {
  return (
    <Container className="mb-12 flex flex-col items-center" id="experience">
      <SectionTitle>Work Experience</SectionTitle>
      <h2 className="text-2xl font-bold mt-6">
        Hands-on experience building real-world production applications
      </h2>

      <div className="w-full mt-12 max-w-[1000px] mx-auto">
        {experienceData.map((item) => (
          <ExperienceBox
            key={item.company}
            title={item.company}
            subtitle={item.position}
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
