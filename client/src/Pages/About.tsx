import { Card } from "flowbite-react";
import { Carousel } from "flowbite-react";
import { Nav } from "../Components/Navbar";

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
            At Prescripto, our goal is to give each consumer a flawless
            healthcare experience. By bridging the gap between patients and
            healthcare professionals, we hope to make it simpler for you to get
            the treatment you require at the appropriate time.
          </p>
        </Card>
      </div>

      {/* Partnered with */}

      <h1 className="flex justify-center pt-14 text-2xl font-bold">
        Partnered with
      </h1>
      <hr className="mx-28 border-[#06283D] pb-8" />

      <div>
        <Carousel>
          
            <Card
              className="max-w-sm"
              imgSrc="/images/blog/image-4.jpg"
              horizontal
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
         
        </Carousel>
      </div>
    </div>
  );
};

export default About;
