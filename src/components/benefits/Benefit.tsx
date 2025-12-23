import type { BenefitType } from "@/types/type";
import { motion } from "framer-motion";
import ActionButton from "@/utils/ActionButton";

type BenefitProps = BenefitType;

const Benefit = ({ icon, title, description }: BenefitProps) => {
  return (
    <motion.div className="mt-5 rounded-md border-2 border-gray-300 px-5 py-16 text-center">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-300 bg-red-200 p4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <ActionButton
        className="animate text-sm font-bold text-red-300 underline cursor-pointer hover:text-yellow-300"
        variant="link"
        to="contactus"
      >
        Learn More
      </ActionButton>
    </motion.div>
  );
};

export default Benefit;
