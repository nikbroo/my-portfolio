import Link from "next/link";

interface ContactBoxProps {
  icon: string;
  title: string;
  description: string;
  link?: string;
}

const ContactBox = ({ icon, title, description, link }: ContactBoxProps) => {
  return (
    <div className="border border-white/5 rounded-2xl bg-background-secondary p-6 hover:shadow-[0_0_10px_0] hover:shadow-tertiary transition-all duration-2000">
      <div className="flex items-center gap-3">
        <span className="text-2xl p-2 rounded-xl bg-secondary min-w-[50px] text-center">
          {icon}
        </span>
        <div>
          <p className="text-xl font-semibold">{title}</p>
          <Link href={link || "#"} className="text-sm text-gray-300 mt-4">
            {description}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactBox;
