"use client";

import { useState } from "react";
import { Button } from "flowbite-react";
import { Nav } from "../Components/Navbar";
import { Foot } from "../Components/Footer";

export default function Booking() {
  return (
    <div>
      <Nav></Nav>
      <div className="flex min-h-screen flex-col items-center pb-20">
        {/* Profile Section */}
        <div className="mt-10 flex w-full max-w-5xl flex-col px-6 pt-12 md:flex-row">
          {/* Profile Picture Section */}
          <div className="flex flex-col items-center space-y-2">
            <div className="h-32 w-32 rounded-lg bg-gray-300"></div>{" "}
            {/* Placeholder Image */}
            <button className="text-sm text-gray-600">Change Photo</button>
          </div>

          {/* Information Card */}
          <div className="ml-0 mt-6 w-full rounded-xl bg-[#DFF6FF] p-6 shadow-md md:ml-10  md:mt-0">
            <h1 className="text-2xl font-bold text-[#06283D]">
              DR. Oneth Dikkumbura
            </h1>
            <p className="text-sm"> MBBS - General Physician </p>
            <span className="rounded-full bg-gray-200 px-2 py-1 text-xs">
              4 Years
            </span>

            {/* Contact Information */}
            <div className="mt-7 text-[#06283D]">
              <h2 className="text-lg font-medium">About</h2>
              <p className="pt-3 text-justify text-sm">
                Our vision is to create a user-friendly mobile app that
                revolutionizes patient-provider interaction by simplifying
                appointment scheduling, improving communication, and providing
                secure access to health information. This comprehensive platform
                will empower patients to manage their healthcare proactively,
                strengthen patient-doctor relationships, and ultimately improve
                health outcomes through features like streamlined appointment
                booking, secure messaging, centralized health records, and
                future integration with wearables. We are committed to
                accessibility, continuous improvement, and creating a more
                connected and efficient healthcare ecosystem.
              </p>
            </div>

            {/* Basic Information */}
            <div className="mt-8 text-[#06283D]">
              <p className="text-sm"> Hospital - Lanka Hospital</p>
              <p className="text-sm"> Appointment fee: $50 </p>
              <p className="text-sm"> Time: 09.00PM </p>
              <p className="text-sm font-semibold text-[#1363DF]"> Online </p>
            </div>
            <div className="mt-7 text-[#06283D]">
              <h2 className="text-lg font-medium">Select Date</h2>
              <div className="flex space-x-4 mt-2">
                {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
                  <div
                    key={day}
                    className="flex flex-col place-content-center bg-[#06283D] rounded-full px-4 py-2 text-[#DFF6FF] h-20"
                  >
                    <span className="text-sm font-semibold">{day}</span>
                    <span className="text-xl font-bold">05</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
            <Button className="rounded-3xl bg-[#1363DF] text-[#CFF5E7]">
            Booking Appointment
            </Button>
          </div>
            </div>


          </div>
          
        </div>
      </div>

      <Foot></Foot>
      
    </div>
  );
}
