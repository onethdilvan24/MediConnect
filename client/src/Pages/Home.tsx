"use client";

import { Card } from "flowbite-react";
import { Nav } from "../Components/Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AnimatedTestimonialsDemo } from "../Components/AnimatedTestimonialsDemo";
import { Foot } from "../Components/Footer";

// Image
import license from "../Images/driven license.jpg";
import medicin from "../Images/medicin.avif";
import shop from "../Images/shop.webp";
import home_1 from "../Images/home-1.png";
import home_2 from "../Images/home-2.png";
import left from "../Images/home-3.png";
import { BotCard } from "../Components/BotCard";
import SpecialitySection from "../Components/SpecialitySection";

export function Home() {
  return (
    <div>
      <Nav></Nav>

      <motion.div
        className="flex items-center justify-center px-6 py-4 pt-8"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >

      <section className="flex w-full items-center bg-[] justify-center pb-8">
        <div className="mx-auto w-full max-w-6xl py-24 text-[#06283D]">
          <div className="container mx-auto my-12 flex flex-col items-center md:my-24 md:flex-row">
            {/* Left Section */}
            <div className="flex w-full flex-col items-start justify-center p-8 lg:w-1/3">
              <h1 className="tracking-loose text-3xl font-black text-[#1363DF] md:text-4xl">
                MEDI<span className="text-[#58bcd0]">CONNECT</span>
              </h1>

              <p className="mb-4 text-xs text-[#06283D] italic font-medium md:text-base">
                The Best Health Solution...
              </p>

              <h2 className="flex flex-col items-center pb-2 pt-1 text-center text-3xl font-bold">
                <span className="whitespace-nowrap">
                  Optimal <span className="text-blue-600">Health</span>,
                </span>
                <span className="whitespace-nowrap">One Click Away</span>
              </h2>

              <a
                href="/alldoctors"
                className="rounded border border-[#06283D] bg-transparent px-4 py-2 text-[#06283D] shadow hover:border-transparent hover:bg-[#DFF6FF] hover:text-black hover:shadow-lg"
              >
                Booking Appointment
              </a>
            </div>

            {/* Right Section */}
            <div className="mb-6 ml-0 mt-12 flex justify-center p-8 md:mb-0 md:ml-12 md:mt-0 lg:w-2/3">
              <div className="flex h-48 flex-wrap content-center justify-center">
                <div>
                  <img
                    className="mt-28 inline-block hidden w-56 xl:block"
                    src={left}
                    alt="TechFest Image 1"
                  />
                </div>
                <div>
                  <img
                    className="mt-24 inline-block w-80 p-8 md:mt-0 md:p-0"
                    src={home_1}
                    alt="TechFest Image 2"
                  />
                </div>
                <div>
                  <img
                    className="inline-block hidden w-52 lg:block"
                    src={home_2}
                    alt="TechFest Image 3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</motion.div>
      

      

      {/* bot card */}
      <motion.div
      className="bg-[#06283D]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="py-10 bg-[#06283D]">
        <BotCard></BotCard>
        </div>
      </motion.div>



      {/* SpecialitySection */}
      <motion.div
      className="flex justify-center items-center py-24"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
      
  <div className="">
    <Card className="bg-[#DFF6FF]">
      <SpecialitySection />
    </Card>
  </div>
</motion.div>


      {/* Get appointment for */}

      <div className="bg-[#06283D] py-12">
        <h1 className="pb-12 text-center text-3xl font-bold text-[#DFF6FF]">
          Get Appointment For
        </h1>

        <div className="flex items-center justify-center ">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 ">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Card className="h-96 w-72 max-w-sm bg-[#DFF6FF]">
                <div className="flex justify-end px-4 pt-4"></div>
                <div className="flex flex-col items-center pb-10">
                  <img
                    src={license}
                    alt="Doctor"
                    className="h-auto w-28 rounded-full shadow-lg"
                  />

                  <h5 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                    Driving License Medical
                  </h5>
                  <span className="text-center text-sm text-[#1363DF]">
                    Book your driving license medical assessment easily with
                    Convenient, secure, and accessible nationwide.
                  </span>

                  <div className="mt-4 flex space-x-3 lg:mt-6">
                    <a
                      href="https://dmtappointments.dmt.gov.lk/"
                      className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                    >
                      Book
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Card className="h-96 w-72 max-w-sm bg-[#DFF6FF]">
                <div className="flex justify-end px-4 pt-4"></div>
                <div className="flex flex-col items-center pb-10">
                  <img
                    src={medicin}
                    alt="Doctor"
                    className="h-auto w-28 rounded-full shadow-lg"
                  />

                  <h5 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                    Order Medicine
                  </h5>
                  <span className="text-center text-sm text-[#1363DF]">
                    Select your preferred pharmacy, order your prescription
                    medicine online and have it delivered straight to your home.
                  </span>
                  <Link to="/OrderMedicin">
                    <div className="mt-4 flex space-x-3 lg:mt-6">
                      <a
                        href="#"
                        className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                      >
                        Book
                      </a>
                    </div>
                  </Link>
                </div>
              </Card>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Card className="h-96 w-72 max-w-sm bg-[#DFF6FF]">
                <div className="flex justify-end px-4 pt-4"></div>
                <div className="flex flex-col items-center pb-10">
                  <img
                    src={shop}
                    alt="Doctor"
                    className="h-auto w-28 rounded-full shadow-lg"
                  />

                  <h5 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                    Medical Equipment
                  </h5>
                  <span className="text-center text-sm text-[#1363DF]">
                    Select your preferred pharmacy, order your prescription
                    medicine online and have it delivered straight to your home.
                  </span>
                  <div className="mt-4 flex space-x-3 lg:mt-6">
                    <a
                      href="#"
                      className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                    >
                      Book
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.h1
        className="flex justify-center pt-20 text-3xl font-bold"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Blogs
      </motion.h1>

      <motion.hr
        className="mx-24 border-[#06283D]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <div>
        <AnimatedTestimonialsDemo></AnimatedTestimonialsDemo>
      </div>
      <Foot></Foot>
    </div>
  );
}
