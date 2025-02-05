"use client";

import { Button, Label, TextInput, Textarea } from "flowbite-react";

export function ContactUs() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-4xl rounded-2xl bg-[#06283D] p-6 shadow-lg md:p-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <form className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-[#DFF6FF]">Contact Us</h1>

            <TextInput
              type="text"
              placeholder="Name"
              required
              className="rounded-md  p-2"
            />
            <TextInput
              type="email"
              placeholder="Email"
              required
              className="rounded-md  p-2"
            />
            <TextInput
              type="text"
              placeholder="Subject"
              required
              className="rounded-md  p-2"
            />
            <Textarea
              placeholder="Message"
              rows={4}
              required
              className="rounded-md  p-2"
            />

            <Button
              type="submit"
              className="w-full rounded-md bg-[#1363DF] text-lg text-[#DFF6FF]"
            >
              Send
            </Button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center text-[#DFF6FF]">
            <div className="border-l border-gray-500 pl-6">
              <h2 className="text-lg font-semibold">Call Us</h2>
              <p className="mt-1 text-sm">+94 70 2 877 313</p>
              <p className="text-sm">+94 70 2 877 313</p>

              <h2 className="mt-4 text-lg font-semibold">Address</h2>
              <p className="mt-1 text-sm">Nsbm Green University Town,</p>
              <p className="text-sm">Pitipana - Thalagala Rd, Homagama</p>

              {/* Placeholder for Map or Image */}
              {/* Google Map Embed */}
              <iframe
                className="mt-4 h-40 w-full rounded-md"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12674.309030315074!2d80.04545!3d6.8213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2466b63e1e34b%3A0xd2d5d5ef8b33d6df!2sNSBM%20Green%20University!5e0!3m2!1sen!2slk!4v1707089302932!5m2!1sen!2slk"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
