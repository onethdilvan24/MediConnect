"use client";

import { useState } from "react";
import { Button } from "flowbite-react";
import { Nav } from "../Components/Navbar";
import { Foot } from "../Components/Footer";

export default function Profile() {
  return (
    <div>
      <Nav></Nav>
      <div className="flex min-h-screen flex-col items-center bg-gray-100">
        {/* Profile Section */}
        <div className="mt-10 flex w-full max-w-5xl flex-col px-6 pt-20 md:flex-row">
          {/* Profile Picture Section */}
          <div className="flex flex-col items-center space-y-2">
            <div className="h-32 w-32 rounded-lg bg-gray-300"></div>{" "}
            {/* Placeholder Image */}
            <button className="text-sm text-gray-600">Change Photo</button>
          </div>

          {/* Information Card */}
          <div className="ml-0 mt-6 w-full rounded-lg bg-[#DFF6FF] p-6 shadow-md md:ml-10  md:mt-0">
            <h1 className="border-b pb-2 text-2xl font-bold text-[#06283D]">
              Ramal Sasanka
            </h1>

            {/* Contact Information */}
            <div className="mt-4 text-[#06283D]">
              <h2 className="text-lg font-semibold">Contact Information</h2>
              <p className="pt-3 text-sm">
                <b>Email:</b> ramalsasanka@gmail.com
              </p>
              <p className="pt-2 text-sm">
                <b>Phone:</b> 0000000000
              </p>
              <p className="pt-2 text-sm">
                <b>Address:</b> No 5 Ramal mawatha pinnawala waga
              </p>
            </div>

            {/* Basic Information */}
            <div className="mt-8 text-[#06283D]">
              <h2 className="text-lg font-semibold">Basic Information</h2>
              <p className="pt-3 text-sm">
                <b>Gender:</b> Male
              </p>
              <p className="pt-2 text-sm">
                <b>Birthday:</b> 1999.04.29
              </p>
            </div>

            {/* Edit Button */}
            <div className="mt-10">
              <Button className="w-28 rounded-3xl bg-[#1363DF] text-[#CFF5E7]">
                Edit
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Foot></Foot>
    </div>
  );
}
