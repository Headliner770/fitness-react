import { Link } from "react-scroll";
import type { SectionId } from "@/types/type";

type Props = {
  section: SectionId;
  children: React.ReactNode;
  onClick: (sectionId: SectionId) => void;
  activeSection: SectionId | null;
};

const CustomLink = ({ section, children, onClick, activeSection }: Props) => {
  const isActive = activeSection === section;
  return (
    <Link
      to={section}
      onClick={() => onClick(section)}
      className={`animate hover:text-red-300 cursor-pointer capitalize ${
        isActive ? "text-white" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
