"use client";

import { Card,} from "flowbite-react";
import { Button, Label } from "flowbite-react";
import { Datepicker } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { Nav } from "../Components/Navbar";
import { Foot } from "../Components/Footer";

export function AllDoctors() {
  return (
    <div>
      <Nav />

      {/* Search details Doctors */}

      <div className="flex items-center justify-center px-6 py-4 pt-16">
        <Card className="w-full max-w-7xl rounded-xl bg-[#06283D]">
          <div className="grid grid-cols-1 gap-4 pb-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {/* Doctor Name Dropdown */}
            <div className="flex flex-col">
              <Label
                htmlFor="name"
                value="Doctor name"
                className="mb-2 text-[#DFF6FF]"
              />
              <Dropdown value={""}
                label="Select Doctor name"
                dismissOnClick={false}
                className=""
              >
                <Dropdown.Item value={"Ramal Sasanka"}>Ramal Sasanka</Dropdown.Item>
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
      </div>

      {/* specialization name:General Physician */}

      <h1 className="flex justify-center pt-10 text-2xl font-bold">
        General Physician
      </h1>
      <hr className="mx-24 border-[#06283D]" />

      {/* Doctors Cards */}
      <div className="flex justify-center items-center pt-10">
        <div className="grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          {/* Crad 01 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 02 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 03 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 04 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 05 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 06 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 07 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 08 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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
        </div>
      </div>


      {/* Specialization:Cardiologist */}


      <h1 className="flex justify-center pt-20 text-2xl font-bold">
      Cardiologist
      </h1>
      <hr className="mx-24 border-[#06283D]" />

      {/* Doctors Cards */}
      <div className="flex justify-center items-center pt-10">
        <div className="grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          {/* Crad 01 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 02 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 03 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 04 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 05 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 06 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 07 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 08 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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
        </div>
      </div>




{/* Specialization: Gynecoloist */}

      <h1 className="flex justify-center pt-20 text-2xl font-bold">
      Gynecoloist
      </h1>
      <hr className="mx-24 border-[#06283D]" />

      {/* Doctors Cards */}
      <div className="flex justify-center items-center pt-10">
        <div className="grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          {/* Crad 01 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 02 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 03 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 04 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 05 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 06 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 07 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 08 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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
        </div>
      </div>



{/* Specialization:Pediatrician */}

      <h1 className="flex justify-center pt-20 text-2xl font-bold">
      Pediatrician
      </h1>
      <hr className="mx-24 border-[#06283D]" />

      {/* Doctors Cards */}
      <div className="flex justify-center items-center pt-10">
        <div className="grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          {/* Crad 01 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 02 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 03 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 04 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 05 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 06 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 07 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 08 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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
        </div>
      </div>




{/* Specialozation:Neurologist */}

      <h1 className="flex justify-center pt-20 text-2xl font-bold">
      Neurologist
      </h1>
      <hr className="mx-24 border-[#06283D]" />

      {/* Doctors Cards */}
      <div className="flex justify-center items-center pt-10 pb-24">
        <div className="grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          {/* Crad 01 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 02 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 03 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 04 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 05 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 06 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 07 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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

          {/* Crad 08 */}

          <Card className="max-w-sm w-72 motion-scale-in-[0.5] motion-opacity-in-[0%]">
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
        </div>
      </div>



       <Foot></Foot> 

    </div>
  );
}
