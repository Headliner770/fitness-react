import type { SectionId } from "@/types/type";
import { Link } from "react-scroll";

type Props = {
  children: React.ReactNode;
  to?: SectionId;
  variant?: "link" | "button";
  className?: string;
};

const ActionButton = ({ children, to, variant, className }: Props) => {
  const baseStyle =
    "animate rounded-md cursor-pointer px-6 py-2.5 sm:px-10 text-sm sm:text-base whitespace-nowrap";
  const linkStyle =
    className ||
    `${baseStyle} bg-yellow-500 hover:bg-primary-500 hover:text-white`;

  const buttonStyle =
    className ||
    `${baseStyle} bg-yellow-500 hover:bg-primary-500 hover:text-white`;

  return variant === "link" && to ? (
    <Link to={to} className={linkStyle}>
      {children}
    </Link>
  ) : (
    <button className={buttonStyle}>{children}</button>
  );
};

export default ActionButton;
