import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, contactFormType } from "@/utils/contactScema";
import ContactUsPageGraphic from "@assets/ContactUsPageGraphic.png";

const ContactUs = () => {
  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
      <h1>Contact Us</h1>
    </section>
  );
};

export default ContactUs;
