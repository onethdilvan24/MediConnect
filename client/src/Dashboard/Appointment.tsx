"use client";

import { Table } from "flowbite-react";
import NavDash from "../Components/NavDash";

export function Appointment() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar Navigation */}
      <NavDash />

      {/* Main Content Area */}
      <div className="flex-1 overflow-x-auto p-6 pt-16">
        <h1 className="mb-8 text-2xl font-bold text-[#06283D]">Appointments</h1>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg shadow-md">
          <Table hoverable className="">
            <Table.Head className="bg-[#DFF6FF] text-[#06283D] text-sm">
              <Table.HeadCell className="bg-[#DFF6FF]">#</Table.HeadCell>
              <Table.HeadCell className="bg-[#DFF6FF]">Patient</Table.HeadCell>
              <Table.HeadCell className="bg-[#DFF6FF]">Age</Table.HeadCell>
              <Table.HeadCell className="bg-[#DFF6FF]">Date & Time</Table.HeadCell>
              <Table.HeadCell className="bg-[#DFF6FF]">Doctor</Table.HeadCell>
              <Table.HeadCell className="bg-[#DFF6FF]">Fees</Table.HeadCell>
              <Table.HeadCell className="bg-[#DFF6FF]">Action</Table.HeadCell>
              
            </Table.Head>
            <Table.Body className="divide-y bg-[#DFF6FF]">
              <Table.Row className="bg-[#DFF6FF] dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>01</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Oneth Dikkumbura
                </Table.Cell>
                <Table.Cell>20</Table.Cell>
                <Table.Cell>5 Oct 2024, 12.00PM</Table.Cell>
                <Table.Cell>Dr. Manisha</Table.Cell>
                <Table.Cell>$50</Table.Cell>
                <Table.Cell>
                  <button className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Completed
                  </button>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-[#DFF6FF] dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>02</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Ramal Sasanka
                </Table.Cell>
                <Table.Cell>25</Table.Cell>
                <Table.Cell>5 Oct 2024, 01.00PM</Table.Cell>
                <Table.Cell>Dr. Manisha</Table.Cell>
                <Table.Cell>$19</Table.Cell>
                <Table.Cell>
                  <button className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Canceled
                  </button>
                </Table.Cell>
              </Table.Row>
              <Table.Row className="bg-[#DFF6FF] dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>02</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Dineth Imantha
                </Table.Cell>
                <Table.Cell>21</Table.Cell>
                <Table.Cell>5 Oct 2024, 12.00PM</Table.Cell>
                <Table.Cell>Dr. Manisha</Table.Cell>
                <Table.Cell>$20</Table.Cell>
                <Table.Cell>
                  <button className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Completed
                  </button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
}
