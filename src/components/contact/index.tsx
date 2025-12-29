import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type ContactFormType, contactSchema } from "@/utils/contactScema";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import Heading from "@/utils/Heading";
import TextInput from "../formElements/TextInput";
import { motion } from "framer-motion";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
  });

  const onSubmit = (data: ContactFormType) => {
    console.log("Form submitted with data:", data);

    setTimeout(() => {
      alert("Thank you for your message!");
      reset();
    }, 1000);
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
      <div className="md:w-3/5">
        <Heading>
          <span className="text-primary-500">JOIN NOW</span>
          TO GET IN SHAPE
        </Heading>
        <p className="my-5">
          Congue adipiscing risus commodo placerat. Tellus et in feugiat sapien
          bel rhoncus. Placerat at in enim pelletesque. Nulla adipiscing leo
          egestas nisi elit risus sit. Nunc cursus sagitti
        </p>
      </div>
      <div className="mt-10 justify-between gap-8 md:flex">
        <div className="mt-10 basis-3/5 md:mt-0">
          <form className="relative z-[2]" onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              placeholder="NAME"
              register={register("name")}
              error={errors.name}
            />
            <TextInput
              placeholder="email"
              register={register("email")}
              error={errors.email}
            />
            <TextInput
              className="resize-none"
              type="textarea"
              placeholder="MESSAGE"
              register={register("message")}
              error={errors.message}
            />
            <button
              className="cursor-pointer mt-5 rounded-lg bg-secondary-500 px-20 py-3 animate transition duration-500 hover:text-white"
              type="submit"
            >
              submit
            </button>
            {isSubmitSuccessful && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-green-600 text-center font-semibold"
              >
                ✅ Your message has been sent successfully!
              </motion.p>
            )}
          </form>
        </div>
        <div className="mt-10 basis-2/5 md:mt-0">
          <div className="w-full relative before:absolute before:-bottom-20 before:-right-10 before:z-[1] md:before:content-(--content-evolvetextconact"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
