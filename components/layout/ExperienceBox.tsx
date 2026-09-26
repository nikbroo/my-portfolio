import { ReactNode } from "react";
import { FaLaptopCode } from "react-icons/fa";

// Shared timeline card: used by both Experience and Education.
// `projects` is optional so Education can render a bare title/date row.
const ExperienceBox = ({
  title,
  subtitle,
  date,
  location,
  projects = [],
  icon,
}: {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  projects?: {
    title?: string;
    link?: string;
    description: string[];
  }[];
  icon?: ReactNode;
}) => {
  return (
    <div className="w-full pl-12 pb-6 relative">
      {icon ?? (
        <FaLaptopCode className="absolute z-20 left-0 top-0 bg-secondary p-2 rounded-md text-[38px] text-black" />
      )}
      <div className="absolute z-10 left-4 top-0 w-1 h-full bg-tertiary"></div>
      {/* Stacks on mobile: side-by-side leaves the wrapped title touching the date. */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div>
          <h4 className="font-bold text-[20px]">{title}</h4>
          <h3 className="italic text-[18px]">{subtitle}</h3>
        </div>
        <div className="sm:text-right sm:shrink-0">
          <b className="whitespace-nowrap">{date}</b>
          <p className="italic">{location}</p>
        </div>
      </div>
      <div className="mt-2 pb-6 border-b border-white/10">
        {/* Outer marker/indent only from sm up: on mobile the double nesting
            pushes bullet text ~110px in and the title is already emphasised. */}
        {projects.length > 0 && (
          <ul
            className={`space-y-3 ${
              projects[0]?.title ? "sm:list-disc sm:pl-6" : ""
            }`}
          >
            {projects.map((project, index) => (
              <li key={index}>
                {project.title &&
                  (project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-[16px] font-bold hover:text-secondary transition-colors"
                    >
                      {project.title}
                    </a>
                  ) : (
                    <p className="underline text-[16px] font-bold">
                      {project.title}
                    </p>
                  ))}
                <ul className="list-disc pl-5 sm:pl-6 text-gray-300 text-[14px] space-y-1">
                  {project.description.map((desc, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: desc }} />
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExperienceBox;
