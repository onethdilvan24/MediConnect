import { useState } from "react";
import NavDash from "../Components/NavDash";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar state lifted up

  return (
    <div className="flex min-h-screen ">
      {/* Sidebar Navigation */}
      <NavDash />

      {/* Main Content Area */}
      <div
        className={`flex-1 p-6 transition-all duration-300 mt-14 ${isOpen ? "ml-64" : ""}`}
      >
        {/* Top Summary Cards */}
        <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="rounded-lg bg-[#DFF6FF] p-6 shadow-md">
            <h2 className="text-lg font-semibold text-gray-500">Earnings</h2>
            <p className="text-2xl font-bold">$130</p>
          </div>
          <div className="rounded-lg bg-[#DFF6FF] p-6 shadow-md">
            <h2 className="text-lg font-semibold text-gray-500">
              Appointments
            </h2>
            <p className="text-2xl font-bold">04</p>
          </div>
          <div className="rounded-lg bg-[#DFF6FF] p-6 shadow-md">
            <h2 className="text-lg font-semibold text-gray-500">Patients</h2>
            <p className="text-2xl font-bold">03</p>
          </div>
        </div>

        {/* Latest Booking Section */}
        <div className="rounded-lg bg-[#DFF6FF] p-6 shadow-md mt-8">
          <h2 className="mb-4 text-xl font-semibold">Latest Booking</h2>
          <hr className="border-[#06283D]" />
          <div className="space-y-4 mt-3">
            {[
              {
                name: "Ramal Sasanka",
                date: "5 Oct 2025 at 06:00pm",
                status: "Completed",
                statusColor: "green",
              },
              {
                name: "Dineth Imantha",
                date: "5 Oct 2025 at 06:00pm",
                status: "Cancelled",
                statusColor: "red",
              },
              {
                name: "Oneth Dikkumbura",
                date: "5 Oct 2025 at 06:00pm",
                status: "Completed",
                statusColor: "green",
              },
            ].map((booking, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{booking.name}</p>
                  <p className="text-sm text-gray-500">
                    Booking on {booking.date}
                  </p>
                </div>
                <span
                  className={`bg-${booking.statusColor}-100 text-${booking.statusColor}-600 rounded-full px-3 py-1 text-sm`}
                >
                  {booking.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
