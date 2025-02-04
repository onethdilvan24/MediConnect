import { Card } from "flowbite-react";
import { Nav } from "../Components/Navbar";

const About = () => {
  return (
    <div>
      <Nav></Nav>

      <div className="flex items-center justify-center pt-10">
        <Card className="max-w-sm" imgSrc="/images/blog/image-4.jpg" horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-[#06283D]">
            About Us
          </h5>
          <p className="font-normal text-[#06283D]">
            Welcome to Prescripto, your reliable resource for effectively and
            conveniently handling your healthcare requirements. At Prescripto,
            we are aware of the difficulties people have while trying to manage
            their medical information and make doctor's appointments. <br /><br />
            Prescripto
            is dedicated to providing top-notch medical technologies. We always
            work to improve our platform by incorporating the newest
            developments to increase user experience and provide top-notch
            support. Prescripto is here to help you at every stage, from
            scheduling your initial consultation to overseeing continuing
            treatment. <br /><br />
            This initiative is a project developed by Software
            Engineering students from the Faculty of Computing at NSBM Green
            University, demonstrating their commitment to delivering innovative
            solutions that simplify healthcare management for everyone.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default About;
