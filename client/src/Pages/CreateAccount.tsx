"use client";

import { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { Card } from "flowbite-react";
import { Nav } from "../Components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const handleSubmit = (e:React.FormEvent) => {
  e.preventDefault();
  axios.post('http://localhost:3001/register',{name, email, id, password})
  .then(result => console.log(result))
  .catch(err => console.log(err))
};

export function CreateAccount() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");


  return (
    <div>
      <Nav></Nav>


      <motion.div
        className="flex min-h-screen items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
      
        <Card className="w-full max-w-sm rounded-2xl bg-[#06283D] p-5">
          <form
            className="flex max-w-md flex-col gap-4 "
            onSubmit={handleSubmit}
          >
            <div>
              <h1 className="text-2xl font-bold text-[#DFF6FF]">
                Create Account
              </h1>
              <p className="text-xs text-[#DFF6FF]">
                Please sign up to book appointment
              </p>
            </div>
            <div>
              <div className="mb-2 ">
                <Label
                  htmlFor="Full Name"
                  value="Full Name"
                  className="text-[#DFF6FF]"
                />
              </div>
              <TextInput
                id="Name"
                type="text"
                placeholder="Name"
                required
                className="rounded-3xl"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 ">
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
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 ">
                <Label
                  htmlFor="id"
                  value="National ID"
                  className="text-[#DFF6FF]"
                />
              </div>
              <TextInput
                id="id"
                type="text"
                placeholder="National ID"
                required
                className="rounded-3xl"
                onChange={(e) => setId(e.target.value)}
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
              <TextInput
                id="password1"
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="password1"
                  value="Confirm Password"
                  className="text-[#DFF6FF]"
                />
              </div>
              <TextInput id="password1" type="password" required />
            </div>
            <Button
              type="submit"
              className="rounded-3xl border-none bg-[#1363DF] hover:bg-[#DFF6FF]"
            >
              Create Account
            </Button>
            <div>
              <p className="text-xs text-[#DFF6FF]">
                Your have alredy an account:{" "}
                <a href="#Login" className="text-[#47B5FF]">
                  <Link to="/login">Click here</Link>
                </a>{" "}
              </p>
            </div>
          </form>
        </Card>
      </motion.div>
    </div>
  );
}
