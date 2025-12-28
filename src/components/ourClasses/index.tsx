import Heading from "@/utils/Heading";
import { section } from "framer-motion/client";
import ClassesSlider from "./ClassesSlider";

const OurClasses = () => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <div className="mx-auto w-5/6">
        <div className="md:w-3/5">
          <Heading>OUR CLASSES</Heading>
          <p className="py-5 text-gray-700">
            Fringilla a sed at suspendisse ut enim voutpat. Rhoncus vel est
            tellus quam porttitor. Mauris velit euismod elementum arcu neque
            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
            mattis odio in risus nunc.
          </p>
        </div>
      </div>
      <div>
        <ClassesSlider />
      </div>
    </section>
  );
};

export default OurClasses;
