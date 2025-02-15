"use client";

import { Button, Label, TextInput } from "flowbite-react";
import { Card } from "flowbite-react";
import { Nav } from "../Components/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import adminImage from "../Images/01.png"; // Import the image

export function Admin() {
  return (
    <div>
      <Nav />

      
      <motion.div
        className="flex min-h-screen items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
      
        <Card
          imgSrc={adminImage}
          className="w-auto bg-[#06283D] object-cover"
          horizontal
        >
          {/* Add image above the form */}

          <form className="flex max-w-md flex-col gap-4">
            <div>
              <h1 className="pt-4 text-2xl font-bold text-[#DFF6FF]">Admin</h1>
            </div>
            <div>
              <div className="mb-2">
                <Label
                  htmlFor="email1"
                  value="Email"
                  className="text-[#DFF6FF]"
                />
              </div>
              
              <TextInput
                id="email1"
                type="email"
                placeholder="name@flowbite.com"
                required
                className="rounded-3xl"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="password1"
                  value="Password"
                  className="text-[#DFF6FF]"
                />
              </div>
              <TextInput id="password1" type="password" required />
            </div>
            <div className="flex justify-center pb-7 pt-8">
              <Link to="/Dashboard">
                <Button
                  type="submit"
                  className="w-80 rounded-3xl border-none bg-[#1363DF]"
                >
                  Login
                </Button>
              </Link>
            </div>
          </form>
        </Card>
      </motion.div>
    </div>
  );
}
