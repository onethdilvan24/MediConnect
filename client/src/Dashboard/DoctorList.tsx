import { Table } from "flowbite-react";
import NavDash from "../Components/NavDash";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Doctorlist = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [doctorStatus, setDoctorStatus] = useState({}); // State to track toggle status per doctor

  const toggleDoctorStatus = (id) => {
    setDoctorStatus((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle status per doctor
    }));
  };

  const doctors = [
    { id: "01", name: "Oneth Dikkumbura", hospital: "Lanka Hospital", speciality: "General Physician", fees: "$50" },
    { id: "02", name: "Ramal Sasanka", hospital: "Nawaloka Hospital", speciality: "Cardiologist", fees: "$19" },
  ];

  return (
    <div className="flex min-h-screen flex-col sm:flex-row pt-10">
      {/* Sidebar Navigation */}
      <NavDash isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content Area */}
      <motion.div
        className={`flex-1 p-6 transition-all duration-300 ease-in-out md:ml-64 ${isOpen ? "ml-64" : "ml-0 md:ml-64"}`}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
      
        <h1 className="mb-6 text-xl sm:text-2xl font-bold text-[#06283D]">Doctors List</h1>

        {/* Search & Filter Section */}
        
        <div className="pb-6 flex flex-wrap items-center gap-4 justify-between md:justify-start">
          {/* Search Input Field */}
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-[#DFF6FF] p-2 pl-10 rounded-2xl border border-gray-300 focus:ring focus:ring-blue-300"
            />
            <span className="absolute left-3 top-2 text-gray-500">🔍</span>
          </div>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="w-full overflow-x-auto rounded-lg shadow-md">
          <Table hoverable className="w-full min-w-max">
            <Table.Head className="bg-[#DFF6FF] text-[#06283D] text-xs sm:text-sm">
              <Table.HeadCell className="bg-[#DFF6FF]">#</Table.HeadCell>
              <Table.HeadCell className="bg-[#DFF6FF]">Doctor Name</Table.HeadCell>
              <Table.HeadCell className="bg-[#DFF6FF]">Hospital</Table.HeadCell>
              <Table.HeadCell className="bg-[#DFF6FF]">Speciality</Table.HeadCell>
              <Table.HeadCell className="bg-[#DFF6FF]">Fees</Table.HeadCell>
              <Table.HeadCell className="bg-[#DFF6FF]">Available</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y bg-[#DFF6FF]">
              {doctors.map((doctor) => (
                <Table.Row key={doctor.id} className="bg-[#DFF6FF] dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="text-xs sm:text-sm">{doctor.id}</Table.Cell>
                  
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs sm:text-sm">
                    {doctor.name}
                  </Table.Cell>
                  
                  <Table.Cell className="text-xs sm:text-sm">{doctor.hospital}</Table.Cell>
                  <Table.Cell className="text-xs sm:text-sm">{doctor.speciality}</Table.Cell>
                  <Table.Cell className="text-xs sm:text-sm">{doctor.fees}</Table.Cell>
                  <Table.Cell>
                    {/* Toggle Switch with Color Change */}
                    <div className="flex items-center space-x-4">
                      
                      <button
                        onClick={() => toggleDoctorStatus(doctor.id)}
                        className={`relative w-14 h-7 flex items-center rounded-full p-1 transition duration-300 ${
                          doctorStatus[doctor.id] ? "bg-[#1363DF]" : "bg-red-500"
                        }`}
                      >
                        <div
                          className={`w-6 h-6 bg-white rounded-full shadow-md transform transition ${
                            doctorStatus[doctor.id] ? "translate-x-7" : "translate-x-0"
                          }`}
                        ></div>
                      </button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
        </motion.div>
    </div>
  );
};

export default Doctorlist;
