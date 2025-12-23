import { motion } from "framer-motion";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import ActionButton from "@/utils/ActionButton";
import Heading from "@/utils/Heading";
import { benefits } from "@/utils/benefitData";

const Benefits = () => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div className="md:my-5 md:3/5">
        <Heading>MORE THAN JUST GYM.</Heading>
        <p className="my-5 text-sm">
          We provide world class fitness equipment, trainers and class get you
          to your ultimate fitness goals with ease. We provide care into each
          and every member.
        </p>
      </motion.div>
      <motion.div className="mt-5 items-center justify-between gap-8 md:flex">
        {benefits.map((benefit) => (
          <Benefit key={benefit.title} {...benefit} />
        ))}
      </motion.div>
      <motion.div className="mt-16 md:mt-28 md:flex items-center justify-between gap-20">
        
      </motion.div>
    </section>
  );
};

export default Benefits;
