import { Table } from "flowbite-react";
import { Datepicker } from "flowbite-react";
import NavDash from "../Components/NavDash";

const Appointment = ({ isOpen, setIsOpen }) => {
  return (
    <div className="flex min-h-screen flex-col sm:flex-row">
      {/* Sidebar Navigation */}
      <NavDash isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content Area */}
      <div
        className={`flex-1 p-6 transition-all duration-300 ease-in-out md:ml-64 ${isOpen ? "ml-64" : "ml-0 md:ml-64"}`}
      >
        <h1 className="mb-6 text-xl sm:text-2xl font-bold text-[#06283D]">Appointments</h1>

        {/* Search & Filter Section */}
        <div className="pb-6 flex flex-wrap items-center gap-4 justify-between md:justify-start">
          {/* Datepicker Input */}
          <Datepicker className="w-full sm:w-64 bg-[#DFF6FF] rounded-2xl" />

          {/* Search Input Field */}
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-[#DFF6FF] p-2 pl-10 rounded-2xl border border-gray-300 focus:ring focus:ring-blue-300"
            />
            <span className="absolute left-3 top-2 text-gray-500">
              🔍 {/* Replace with an icon if needed */}
            </span>
          </div>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="w-full overflow-x-auto rounded-lg shadow-md">
          <Table hoverable className="w-full min-w-max">
            <Table.Head className="bg-[#DFF6FF] text-[#06283D] text-xs sm:text-sm">
              <Table.HeadCell className="bg-[#DFF6FF]">#</Table.HeadCell>
              <Table.HeadCell className="bg-[#DFF6FF]">Patient</Table.HeadCell>
              <Table.HeadCell className="bg-[#DFF6FF]">Age</Table.HeadCell>
              <Table.HeadCell className="bg-[#DFF6FF]">Date & Time</Table.HeadCell>
              <Table.HeadCell className="bg-[#DFF6FF]">Doctor</Table.HeadCell>
              <Table.HeadCell className="bg-[#DFF6FF]">Fees</Table.HeadCell>
              <Table.HeadCell className="bg-[#DFF6FF]">Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y bg-[#DFF6FF]">
              {[
                { id: "01", name: "Oneth Dikkumbura", age: 20, datetime: "5 Oct 2024, 12.00PM", doctor: "Dr. Manisha", fees: "$50", status: "Completed" },
                { id: "02", name: "Ramal Sasanka", age: 25, datetime: "5 Oct 2024, 01.00PM", doctor: "Dr. Manisha", fees: "$19", status: "Canceled" },
                { id: "03", name: "Dineth Imantha", age: 21, datetime: "5 Oct 2024, 12.00PM", doctor: "Dr. Manisha", fees: "$20", status: "Completed" },
              ].map((appointment, index) => (
                <Table.Row key={index} className="bg-[#DFF6FF] dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="text-xs sm:text-sm">{appointment.id}</Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-xs sm:text-sm">
                    {appointment.name}
                  </Table.Cell>
                  <Table.Cell className="text-xs sm:text-sm">{appointment.age}</Table.Cell>
                  <Table.Cell className="text-xs sm:text-sm">{appointment.datetime}</Table.Cell>
                  <Table.Cell className="text-xs sm:text-sm">{appointment.doctor}</Table.Cell>
                  <Table.Cell className="text-xs sm:text-sm">{appointment.fees}</Table.Cell>
                  <Table.Cell>
                    <button className="text-xs sm:text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                      {appointment.status}
                    </button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
