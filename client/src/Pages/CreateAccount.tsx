import { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios, { AxiosError } from "axios";



const RegisterForm = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    national_id: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/register", formData);
      alert("User registered successfully");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.error || "Something went wrong");
      } else {
        alert("An unexpected error occurred");
      }
    }
  };

  return (
    <motion.div
      className="flex min-h-screen items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Card className="w-full max-w-sm rounded-2xl bg-[#06283D] p-5">
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <h1 className="text-2xl font-bold text-[#DFF6FF]">
              Create Account
            </h1>
            <p className="text-xs text-[#DFF6FF]">
              Please sign up to book appointment
            </p>
          </div>
          <div>
            <div className="mb-2">
              <Label
                htmlFor="full_name"
                value="Full Name"
                className="text-[#DFF6FF]"
              />
            </div>
            <TextInput
              id="full_name"
              name="full_name"
              type="text"
              placeholder="Name"
              required
              className="rounded-3xl"
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="mb-2">
              <Label htmlFor="email" value="Email" className="text-[#DFF6FF]" />
            </div>
            <TextInput
              id="email"
              name="email"
              type="email"
              placeholder="name@flowbite.com"
              required
              className="rounded-3xl"
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="mb-2">
              <Label
                htmlFor="national_id"
                value="National ID"
                className="text-[#DFF6FF]"
              />
            </div>
            <TextInput
              id="national_id"
              name="national_id"
              type="text"
              placeholder="National ID"
              required
              className="rounded-3xl"
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="password"
                value="Password"
                className="text-[#DFF6FF]"
              />
            </div>
            <TextInput
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
              required
            />
          </div>
          <Button
            type="submit"
            className="rounded-3xl border-none bg-[#1363DF] hover:bg-[#DFF6FF]"
          >
            Create Account
          </Button>
          <div>
            <p className="text-xs text-[#DFF6FF]">
              Already have an account?{" "}
              <Link to="/login" className="text-[#47B5FF]">
                Click here
              </Link>
            </p>
          </div>
        </form>
      </Card>
    </motion.div>
  );
};

export default RegisterForm;
