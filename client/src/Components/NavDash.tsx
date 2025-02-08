
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export default function NavDash({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#DFF6FF] p-6 flex flex-col shadow-md z-50 transition-all duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-64"} md:translate-x-0`}
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
          <Link to="/AddDoctor" className="text-[#06283D] font-medium hover:text-blue-700">
            Add Doctor
          </Link>
          <Link to="/Doctorlist" className="text-[#06283D] font-medium hover:text-blue-700">
            Doctors List
          </Link>
        </nav>

        <div className="py-2 px-4 mt-auto">
          <Link to="/">
            <Button className="bg-[#1363DF] text-[#CFF5E7] py-2 px-4 rounded-3xl w-36">
              Log Out
            </Button>
          </Link>
        </div>
      </aside>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 text-2xl z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>
    </>
  );
}
