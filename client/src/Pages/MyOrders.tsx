"use client";

import { Button } from "flowbite-react";
import { Nav } from "../Components/Navbar";

export default function Myoder() {
  return (
    <div>
      <Nav></Nav>
      <div className=" pt-10 sm:px-0 lg:px-10">
        <div className="min-h-screen px-20 sm:p-8">
          {/* Title */}
          <h1 className="text-2xl font-bold text-[#06283D]">My Orders</h1>
          <hr className="my-2 border-[#06283D]" />

          {/* Appointment Card */}
          <div className="mt-6 flex flex-col items-center space-y-4 rounded-lg bg-[#E3F2FD] p-6 sm:flex-row sm:justify-between sm:space-x-6 sm:space-y-0">
            {/* Doctor Profile */}
            <div className="flex w-full flex-col items-center space-y-4 sm:flex-row sm:items-start sm:space-x-6 sm:space-y-0">
              {/* Profile Placeholder */}
              <div className="h-20 w-20 rounded-lg bg-gray-300 sm:h-24 sm:w-24"></div>

              {/* Doctor Info */}
              <div className="text-center sm:text-left">
                <h2 className="text-lg font-bold text-[#06283D] pt-3">
                Nature’s Way Evening Primrose Oil 200 Soft Capsules
                </h2>
                <p className="text-gray-600 pt-4">Rs. 1000.00</p>
            
              </div>
            </div>

            {/* Cancel Appointment Button */}
            <Button className="w-full rounded-full bg-blue-600  font-light text-[#E3F2FD] sm:w-auto">
              Cancel Oder
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
