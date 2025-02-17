"use client";

import { Button } from "flowbite-react";
import { Nav } from "../Components/Navbar";
import { motion } from "framer-motion";

export default function MyAppointments() {
  return (
    <div>
      <Nav></Nav>
      <div className=" pt-10 sm:px-0 lg:px-10">
        <div className="min-h-screen px-20 sm:p-8">
          {/* Title */}
          <motion.h1
            className="text-2xl font-bold text-[#06283D]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            My Appointments
          </motion.h1>

          <motion.hr
            className="my-2 border-[#06283D]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {/* Appointment Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mt-6 flex flex-col items-center space-y-4 rounded-lg bg-[#E3F2FD] p-6 sm:flex-row sm:justify-between sm:space-x-6 sm:space-y-0">
              {/* Doctor Profile */}
              <div className="flex w-full flex-col items-center space-y-4 sm:flex-row sm:items-start sm:space-x-6 sm:space-y-0">
                {/* Profile Placeholder */}
                <div className="h-20 w-20 rounded-lg bg-gray-300 sm:h-24 sm:w-24"></div>

                {/* Doctor Info */}
                <div className="text-center sm:text-left">
                  <h2 className="text-lg font-bold text-[#06283D]">
                    Dr. Richard James
                  </h2>
                  <p className="text-gray-600">General Physician</p>
                  <p className="text-gray-600">Hospital: Lanka Hospital</p>
                  <p className="text-gray-600">
                    Date & Time: 6 Oct 2024, 12.00PM
                  </p>
                </div>
              </div>

              {/* Cancel Appointment Button */}
              <Button className="w-full rounded-full bg-blue-600  font-light text-[#E3F2FD] sm:w-auto">
                Cancel
              </Button>
              <Button className="w-full rounded-full bg-blue-600  font-light text-[#E3F2FD] sm:w-auto">
                Payment
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
