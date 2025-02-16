"use client";

import { Card } from "flowbite-react";
import { Button, Label } from "flowbite-react";
import { Datepicker } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { Nav } from "../Components/Navbar";
import { Foot } from "../Components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function AllDoctors() {
  return (
    <div>
      <Nav />

      {/* Search details Doctors */}

      <motion.div
        className="flex items-center justify-center px-6 py-4 pt-16"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Card className="w-full max-w-7xl rounded-xl bg-[#06283D]">
          <div className="grid grid-cols-1 gap-4 pb-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {/* Doctor Name Dropdown */}
            <div className="flex flex-col">
              <Label
                htmlFor="name"
                value="Doctor name"
                className="mb-2 text-[#DFF6FF]"
              />
              <Dropdown
                value={""}
                label="Select Doctor name"
                dismissOnClick={false}
                className=""
              >
                <Dropdown.Item value={"Ramal Sasanka"}>
                  Ramal Sasanka
                </Dropdown.Item>
                <Dropdown.Item>Oneth Dikkumbura</Dropdown.Item>
                <Dropdown.Item>Hirusha Nuwanpriya</Dropdown.Item>
                <Dropdown.Item>Nimsara Pathirana</Dropdown.Item>
              </Dropdown>
            </div>

            {/* Specialization Dropdown */}
            <div className="flex flex-col">
              <Label
                htmlFor="specialization"
                value="Specialization"
                className="mb-2 text-[#DFF6FF]"
              />
              <Dropdown
                label="Select specialization"
                dismissOnClick={false}
                className=""
              >
                <Dropdown.Item>General Physician</Dropdown.Item>
                <Dropdown.Item>Cardiologist</Dropdown.Item>
                <Dropdown.Item>Gynecologist</Dropdown.Item>
                <Dropdown.Item>Pediatrician</Dropdown.Item>
                <Dropdown.Item>Neurologist</Dropdown.Item>
              </Dropdown>
            </div>

            {/* Hospital Dropdown */}
            <div className="flex flex-col">
              <Label
                htmlFor="hospital"
                value="Hospital"
                className="mb-2 text-[#DFF6FF]"
              />
              <Dropdown
                label="Select Hospital"
                dismissOnClick={false}
                className=""
              >
                <Dropdown.Item>Lanka Hospital</Dropdown.Item>
                <Dropdown.Item>Nawaloka Medical Center</Dropdown.Item>
                <Dropdown.Item>Durdans Hospital</Dropdown.Item>
                <Dropdown.Item>Asiri Hospital</Dropdown.Item>
              </Dropdown>
            </div>

            {/* Date Picker */}
            <div className="flex flex-col">
              <Label
                htmlFor="date"
                value="Date"
                className="mb-2 text-[#DFF6FF]"
              />
              <Datepicker className="w-full" />
            </div>

            {/* Search Button */}
            <div className="flex items-end justify-center">
              <Button
                type="submit"
                className="w-full rounded-3xl border-none bg-[#1363DF] sm:w-32"
              >
                Search
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* specialization name:General Physician */}

      <motion.h1
        className="flex justify-center pt-10 text-2xl font-bold"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        General Physician
      </motion.h1>


      <motion.hr
        className="mx-24 border-[#06283D]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Doctors Cards */}

      <div className="flex items-center justify-center pt-10">
        <div className="grid w-full max-w-7xl grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Crad 01 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  General Physician
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 02 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  General Physician
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 03 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  General Physician
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 04 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  General Physician
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 05 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  General Physician
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 06 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  General Physician
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 07 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  General Physician
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 08 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  General Physician
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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
        </div>
      </div>

      {/* Specialization:Cardiologist */}

      <motion.h1
        className="flex justify-center pt-10 text-2xl font-bold"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Cardiologist
      </motion.h1>


      <motion.hr
        className="mx-24 border-[#06283D]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Doctors Cards */}
      <div className="flex items-center justify-center pt-10">
        <div className="grid w-full max-w-7xl grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Crad 01 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Cardiologist
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 02 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Cardiologist
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 03 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Cardiologist
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 04 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Cardiologist
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 05 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Cardiologist
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 06 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Cardiologist
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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


          {/* Crad 07 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Cardiologist
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 08 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Cardiologist
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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
        </div>
      </div>

      {/* Specialization: Gynecoloist */}

      <motion.h1
        className="flex justify-center pt-10 text-2xl font-bold"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Gynecoloist
      </motion.h1>


      <motion.hr
        className="mx-24 border-[#06283D]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Doctors Cards */}
      <div className="flex items-center justify-center pt-10">
        <div className="grid w-full max-w-7xl grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Crad 01 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Gynecoloist
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 02 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Gynecoloist
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 03 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Gynecoloist
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 04 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Gynecoloist
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 05 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Gynecoloist
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 06 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Gynecoloist
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 07 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Gynecoloist
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 08 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Gynecoloist
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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
        </div>
      </div>

      {/* Specialization:Pediatrician */}

      <motion.h1
        className="flex justify-center pt-10 text-2xl font-bold"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Pediatrician
      </motion.h1>

      <motion.hr
        className="mx-24 border-[#06283D]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Doctors Cards */}
      <div className="flex items-center justify-center pt-10">
        <div className="grid w-full max-w-7xl grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Crad 01 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Pediatrician
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 02 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Pediatrician
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 03 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Pediatrician
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 04 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Pediatrician
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 05 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Pediatrician
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 06 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Pediatrician
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 07 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Pediatrician
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 08 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Pediatrician
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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
        </div>
      </div>

      {/* Specialozation:Neurologist */}

      <motion.h1
        className="flex justify-center pt-10 text-2xl font-bold"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Neurologist
      </motion.h1>

      <motion.hr
        className="mx-24 border-[#06283D]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Doctors Cards */}
      <div className="flex items-center justify-center pb-24 pt-10">
        <div className="grid w-full max-w-7xl grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Crad 01 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Neurologist
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 02 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Neurologist
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 03 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Neurologist
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 04 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Neurologist
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 05 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Neurologist
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 06 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Neurologist
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 07 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Neurologist
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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

          {/* Crad 08 */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="w-72 max-w-sm">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Neurologist
                </span>
                <span className="text-[#1363DF]">Available</span>
                <Link to="/Booking">
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
        </div>
      </div>

      <Foot></Foot>
    </div>
  );
}
