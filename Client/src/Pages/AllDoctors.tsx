"use client";

import { Card } from "flowbite-react";
import { Button, Label } from "flowbite-react";
import { Datepicker } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { Nav } from "../Components/Navbar";

export function AllDoctors() {
  return (
    <div>
      <Nav></Nav>
      <div className="items-center justify-center px-24 py-4">
        <Card className="rounded-xl bg-[#06283D]">
          <div className="grid grid-cols-5 content-start">
            <div className="flex-col ">
              <div className="mb-2 ">
                <Label
                  htmlFor="name"
                  value="Doctor name"
                  className="text-[#DFF6FF]"
                />
              </div>
              <Dropdown label="Select Doctor name" dismissOnClick={false}>
                <Dropdown.Item>Ramal Sasanka</Dropdown.Item>
                <Dropdown.Item>Oneth Dikkumbura</Dropdown.Item>
                <Dropdown.Item>Hirusha Nuwanpriya</Dropdown.Item>
                <Dropdown.Item>Nimsara Pathirana</Dropdown.Item>
              </Dropdown>
            </div>

            <div className="flex-col ">
              <div className="mb-2 ">
                <Label
                  htmlFor="specialization"
                  value="Specialization"
                  className="text-[#DFF6FF]"
                />
              </div>
              <Dropdown label="Select specialization" dismissOnClick={false}>
                <Dropdown.Item>General Physician</Dropdown.Item>
                <Dropdown.Item>Cardiologist</Dropdown.Item>
                <Dropdown.Item>Gynecoloist</Dropdown.Item>
                <Dropdown.Item>Pediatrician</Dropdown.Item>
                <Dropdown.Item>Neurologist</Dropdown.Item>
              </Dropdown>
            </div>

            <div>
              <div className="mb-2 ">
                <Label
                  htmlFor="hospital"
                  value="Hospital"
                  className="text-[#DFF6FF]"
                />
              </div>
              <Dropdown label="Select Hospital" dismissOnClick={false}>
                <Dropdown.Item>Lanka Hospital</Dropdown.Item>
                <Dropdown.Item>Nawaloka Medical Center</Dropdown.Item>
                <Dropdown.Item>Durdans Hospital</Dropdown.Item>
                <Dropdown.Item>Asiri Hospital</Dropdown.Item>
              </Dropdown>
            </div>

            <div>
              <div className="mb-2 ">
                <Label htmlFor="date" value="Date" className="text-[#DFF6FF]" />
              </div>
              <Datepicker />;
            </div>
            <div>
              <Button
                type="submit"
                className="w-24 rounded-3xl border-none bg-[#1363DF]"
              >
                Search
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
