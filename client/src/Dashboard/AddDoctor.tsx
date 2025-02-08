"use client";
import { useState } from "react";
import NavDash from "../Components/NavDash";

const AddDoctor = () => {
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
    <div>
    <div className="flex   min-h-screen  ">
        <NavDash></NavDash>
      <div className="bg-[#DFF6FF] p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-[#06283D]">Add Doctor</h2>

        {/* Profile Picture Upload */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
            {doctorData.image ? (
              <img
                src={URL.createObjectURL(doctorData.image)}
                alt="Doctor"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <span className="text-gray-500 text-sm">Upload doctor picture</span>
            )}
          </div>

          {/* Custom File Upload Button */}
          <label className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Choose File
            <input type="file" onChange={handleFileChange} className="hidden" />
          </label>
        </div>

        {/* Form Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Doctor Name */}
          <div>
            <label className="block text-gray-600">Doctor Name</label>
            <input
              type="text"
              name="name"
              value={doctorData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Speciality */}
          <div>
            <label className="block text-gray-600">Speciality</label>
            <select
              name="speciality"
              value={doctorData.speciality}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full p-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full p-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block text-gray-600">Experience</label>
            <select
              name="experience"
              value={doctorData.experience}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full p-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full p-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full p-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full p-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex justify-center">
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Submit
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AddDoctor;
