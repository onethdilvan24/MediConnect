import { useState } from "react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // Import icons for the toggle button

export default function NavDash() {
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed md:relative top-0 left-0 h-full w-64 bg-[#DFF6FF] p-6 flex flex-col shadow-md transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <h1 className="text-2xl font-bold mb-8 mt-3">Dashboard</h1>

        {/* Close button for mobile */}
        <button
          className="md:hidden absolute top-4 right-4 text-xl"
          onClick={() => setIsOpen(false)}
        >
          <HiX />
        </button>

        <nav className="flex flex-col gap-4 pt-9">
          <Link to="/Dashboard" className="text-[#06283D] font-medium hover:text-blue-700">
            Dashboard
          </Link>
          <Link to="/Appointment" className="text-[#06283D] font-medium hover:text-blue-700">
            Appointment
          </Link>
          <Link to="/add-doctor" className="text-[#06283D] font-medium hover:text-blue-700">
            Add Doctor
          </Link>
          <Link to="/doctors-list" className="text-[#06283D] font-medium hover:text-blue-700">
            Doctors List
          </Link>
        </nav>

        <Button className="mt-auto bg-[#1363DF] text-[#CFF5E7] py-2 px-4 rounded-3xl w-36">
          Log Out
        </Button>
      </aside>

      {/* Menu button for mobile */}
      <button
        className="md:hidden absolute top-4 left-4 text-2xl z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HiMenu />
      </button>

    </div>
  );
}
