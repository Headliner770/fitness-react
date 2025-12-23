import type { BenefitType } from "@/types/type";
import { HiHomeModern, HiMiniUserGroup, HiAcademicCap } from "react-icons/hi2";

export const benefits: Array<BenefitType> = [
  {
    icon: <HiHomeModern className="h-10 w-10" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <HiMiniUserGroup className="h-10 w-10" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <HiAcademicCap className="h-10 w-10" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];
