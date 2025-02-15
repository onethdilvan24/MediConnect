"use client";
import { useState } from "react";
import NavDash from "../Components/NavDash";
import { motion } from "framer-motion";

const AddDoctor = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [doctorData, setDoctorData] = useState({
    name: "",
    email: "",
    experience: "",
    fees: "",
    speciality: "",
    degree: "",
    address: "",
    phone: "",
    about: "",
    image: null,
  });

  const handleChange = (e) => {
    setDoctorData({ ...doctorData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setDoctorData({ ...doctorData, image: e.target.files[0] });
  };

  return (
    <div className="flex min-h-screen flex-col pt-10 sm:flex-row">
      {/* Sidebar Navigation */}
      <NavDash isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content Area */}
      <motion.div
        className={`flex-1 p-6 transition-all duration-300 ease-in-out ${isOpen ? "ml-64" : "ml-0 md:ml-64"}`}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="mx-auto w-full max-w-4xl rounded-lg bg-[#DFF6FF] p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-[#06283D]">Add Doctor</h2>

          {/* Profile Picture Upload */}
          <div className="mb-6 flex items-center space-x-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-300">
              {doctorData.image ? (
                <img
                  src={URL.createObjectURL(doctorData.image)}
                  alt="Doctor"
                  className="h-full w-full rounded-full object-cover"
                />
              ) : (
                <span className="pl-4 text-sm text-gray-500">
                  Upload picture
                </span>
              )}
            </div>

            {/* Custom File Upload Button */}
            <label className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
              Choose File
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Form Grid Layout */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Doctor Name */}
            <div>
              <label className="block text-gray-600">Doctor Name</label>
              <input
                type="text"
                name="name"
                value={doctorData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full rounded border-none bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Speciality */}
            <div>
              <label className="block text-gray-600">Speciality</label>
              <select
                name="speciality"
                value={doctorData.speciality}
                onChange={handleChange}
                className="w-full rounded border-none bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Speciality</option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Neurologist">Neurologist</option>
              </select>
            </div>

            {/* Doctor Email */}
            <div>
              <label className="block text-gray-600">Doctor Email</label>
              <input
                type="email"
                name="email"
                value={doctorData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full rounded border-none bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Degree */}
            <div>
              <label className="block text-gray-600">Degree</label>
              <input
                type="text"
                name="degree"
                value={doctorData.degree}
                onChange={handleChange}
                placeholder="Degree"
                className="w-full rounded border-none bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Experience */}
            <div>
              <label className="block text-gray-600">Experience</label>
              <select
                name="experience"
                value={doctorData.experience}
                onChange={handleChange}
                className="w-full rounded border-none bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Year</option>
                <option value="1">1 Year</option>
                <option value="5">5 Years</option>
                <option value="10">10+ Years</option>
              </select>
            </div>

            {/* Address */}
            <div>
              <label className="block text-gray-600">Address</label>
              <textarea
                name="address"
                value={doctorData.address}
                onChange={handleChange}
                placeholder="Address"
                className="w-full rounded border-none bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Fees */}
            <div>
              <label className="block text-gray-600">Fees</label>
              <input
                type="number"
                name="fees"
                value={doctorData.fees}
                onChange={handleChange}
                placeholder="Doctor Fee"
                className="w-full rounded border-none bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Telephone Number */}
            <div>
              <label className="block text-gray-600">Telephone Number</label>
              <input
                type="tel"
                name="phone"
                value={doctorData.phone}
                onChange={handleChange}
                placeholder="Number"
                className="w-full rounded border-none bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* About Doctor */}
            <div className="md:col-span-2">
              <label className="block text-gray-600">About Doctor</label>
              <textarea
                name="about"
                value={doctorData.about}
                onChange={handleChange}
                placeholder="Write about doctor"
                className="w-full rounded border-none bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-center">
            <button className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition hover:bg-blue-700">
              Submit
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AddDoctor;
