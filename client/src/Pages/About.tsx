import { Card } from "flowbite-react";
import { Nav } from "../Components/Navbar";
import CardCarousel from "../Components/CardCarousel";
import { ContactUs } from "./ContactUs";
import { Foot } from "../Components/Footer";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <Nav></Nav>

      {/* about us  */}

      <motion.div
        className="flex items-center justify-center pt-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Card className="max-w-sm" imgSrc="." horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-[#06283D]">
            About Us
          </h5>
          <p className="font-normal text-[#06283D]">
            Welcome to Prescripto, your reliable resource for effectively and
            conveniently handling your healthcare requirements. At Prescripto,
            we are aware of the difficulties people have while trying to manage
            their medical information and make doctor's appointments. <br />
            <br />
            Prescripto is dedicated to providing top-notch medical technologies.
            We always work to improve our platform by incorporating the newest
            developments to increase user experience and provide top-notch
            support. Prescripto is here to help you at every stage, from
            scheduling your initial consultation to overseeing continuing
            treatment. <br />
            <br />
            This initiative is a project developed by Software Engineering
            students from the Faculty of Computing at NSBM Green University,
            demonstrating their commitment to delivering innovative solutions
            that simplify healthcare management for everyone.
          </p>
        </Card>
      </motion.div>

      {/* our vision */}

      <motion.div
        className="flex items-center justify-center pt-20"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Card className="w-full bg-[#06283D]">
          <h5 className="flex justify-center py-6 text-3xl font-bold text-[#DFF6FF]">
            Our Vision
          </h5>
          <p className="flex justify-center px-14 pb-6 text-center font-normal text-[#DFF6FF]">
            Our vision is to create a user-friendly web application that
            revolutionizes patient-provider interaction by simplifying
            appointment scheduling, improving communication, and providing
            secure access to health information. This comprehensive platform
            will empower patients to manage their healthcare proactively,
            strengthen patient-doctor relationships, and ultimately improve
            health outcomes through features like streamlined appointment
            booking, secure messaging, centralized health records, and future
            integration with wearables. We are committed to accessibility,
            continuous improvement, and creating a more connected and efficient
            healthcare ecosystem.
          </p>
        </Card>
      </motion.div>

      {/* Partnered with */}

      <motion.h1
        className="flex justify-center pt-14 text-2xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Partnered with
      </motion.h1>
      <motion.hr
        className="mx-28 border-[#06283D] pb-8"
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <CardCarousel></CardCarousel>
      </motion.div>

      <motion.div
        className="py-7"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <ContactUs></ContactUs>
      </motion.div>

      <Foot></Foot>
    </div>
  );
};

export default About;
