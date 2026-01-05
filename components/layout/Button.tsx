"use client";

import { useRouter } from "next/navigation";

const Button = ({
  children,
  className,
  type = "button",
  onClick,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  href?: string;
}) => {
  const router = useRouter();

  return (
    <button
      type={type}
      onClick={href ? () => router.push(href) : onClick}
      className={`flex items-center gap-2 bg-primary text-sm px-3 md:px-6 py-2 rounded-lg cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
