"use client";

import { Button, Label, TextInput, Textarea } from "flowbite-react";

export function ContactUs() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-4xl rounded-2xl bg-[#06283D] p-6 md:p-10 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-[#DFF6FF]">Contact Us</h1>

            <TextInput type="text" placeholder="Name" required className="rounded-md  p-2" />
            <TextInput type="email" placeholder="Email" required className="rounded-md  p-2" />
            <TextInput type="text" placeholder="Subject" required className="rounded-md  p-2" />
            <Textarea placeholder="Message" rows={4} required className="rounded-md  p-2" />

            <Button type="submit" className="w-full rounded-md bg-[#1363DF] text-[#DFF6FF] text-lg">
              Send
            </Button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center text-[#DFF6FF]">
            <div className="border-l border-gray-500 pl-6">
              <h2 className="text-lg font-semibold">Call Us</h2>
              <p className="text-sm mt-1">+94 70 2 877 313</p>
              <p className="text-sm">+94 70 2 877 313</p>

              <h2 className="text-lg font-semibold mt-4">Address</h2>
              <p className="text-sm mt-1">Nsbm Green University Town,</p>
              <p className="text-sm">Pitipana - Thalagala Rd, Homagama</p>

              {/* Placeholder for Map or Image */}
              <div className="mt-4 h-28 w-full rounded-md bg-gray-400"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
