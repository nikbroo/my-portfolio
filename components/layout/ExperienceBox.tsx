import { FaLaptopCode } from "react-icons/fa";

const ExperienceBox = ({
  company,
  position,
  date,
  location,
  projects,
}: {
  company: string;
  position: string;
  date: string;
  location: string;
  projects: {
    title?: string;
    description: string[];
  }[];
}) => {
  return (
    <div className="w-full pl-12 pb-6 relative">
      <FaLaptopCode className="absolute z-20 left-0 top-0 bg-secondary p-2 rounded-md text-[38px] text-black" />
      <div className="absolute z-10 left-4 top-0 w-1 h-full bg-tertiary"></div>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-bold text-[20px]">{company}</h4>
          <h3 className="italic text-[18px]">{position}</h3>
        </div>
        <div>
          <b>{date}</b>
          <p className="italic">{location}</p>
        </div>
      </div>
      <ul
        className={`${
          projects[0]?.title ? "list-disc pl-6" : ""
        } pb-6 border-b border-white/10`}
      >
        {projects.map((project, index) => (
          <li key={index}>
            {project.title && (
              <p className="underline text-[16px] font-bold">{project.title}</p>
            )}
            <ul className={`list-disc pl-6 text-gray-300 text-[14px]`}>
              {project.description.map((desc, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: desc }} />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceBox;
