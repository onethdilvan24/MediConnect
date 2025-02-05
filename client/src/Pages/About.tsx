import { Card } from "flowbite-react";
import { Nav } from "../Components/Navbar";
import CardCarousel from "../Components/CardCarousel";
import { ContactUs } from "./ContactUs";
import { Foot } from "../Components/Footer";

const About = () => {
  return (
    <div>
      <Nav></Nav>

      {/* about us  */}

      <div className="flex items-center justify-center pt-24">
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
      </div>

      {/* our vision */}

      <div className="flex items-center justify-center pt-20">
        <Card className="w-full bg-[#06283D]">
          <h5 className="flex justify-center py-6 text-3xl font-bold text-[#DFF6FF]">
            Our Vision
          </h5>
          <p className="flex justify-center px-14 pb-6 text-center font-normal text-[#DFF6FF]">
          Our vision is to develop a sophisticated and user-centric mobile application that transforms the patient-provider interaction paradigm. We are committed to empowering patients by facilitating seamless access to care, optimizing communication channels, and providing secure access to critical health information.
This application will transcend the functionality of a mere appointment scheduling tool, evolving into a comprehensive healthcare management platform that strengthens the patient-physician relationship and demonstrably improves health outcomes.
We envision an intuitive interface that enables patients to efficiently identify and select healthcare providers based on specialty, location, availability, and insurance coverage.  The platform will provide real-time appointment availability and facilitate instant, confirmed bookings, eliminating the inefficiencies associated with traditional scheduling methods.  Furthermore, secure, HIPAA-compliant messaging capabilities will enable streamlined communication between patients and providers for non-urgent inquiries, appointment reminders, and post-consultation follow-up.  Patients will have the option to consolidate and securely manage their medical history, lab results, prescriptions, and other pertinent health records within the application, facilitating efficient information sharing with their physicians and promoting informed clinical decision-making.  Future development will include integration with wearable health monitoring devices, enabling the seamless transmission of physiological data to providers for personalized and proactive healthcare management.  The application's design will prioritize accessibility and inclusivity, adhering to accessibility guidelines and supporting multiple languages to ensure usability for all demographics.  By streamlining the appointment process and enhancing communication, we believe this application will significantly improve access to quality healthcare, particularly for individuals in underserved communities.  We are dedicated to continuous improvement through iterative development, incorporating user feedback and adapting to the evolving healthcare landscape to ensure the application remains a valuable and indispensable resource for both patients and providers.
Ultimately, our objective is to create a robust and scalable platform that empowers patients to proactively manage their health, fosters a more collaborative and efficient healthcare ecosystem, and contributes to a healthier population.
          </p>
        </Card>
      </div>

      {/* Partnered with */}

      <h1 className="flex justify-center pt-14 text-2xl font-bold">
        Partnered with
      </h1>
      <hr className="mx-28 border-[#06283D] pb-8" />

      <CardCarousel></CardCarousel>

      <div className="py-7">
        <ContactUs></ContactUs>
      </div>

      <Foot></Foot>

    </div>
  );
};

export default About;
