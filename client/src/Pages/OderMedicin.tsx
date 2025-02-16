import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Nav } from "../Components/Navbar";
import { Card } from "flowbite-react";

export default function OrderMedicine() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    area: "",
    pharmacy: "",
    number: "",
  });
  const [errors, setErrors] = useState({ area: false });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.area) {
      setErrors({ ...errors, area: true });
      return;
    }
    console.log("Form submitted", formData, selectedFile);
  };

  return (
    <div>
      <Nav />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex w-2/3 flex-col md:flex-row rounded-xl items-center justify-center bg-[#06283D] p-6 ">
          {/* Left Side */}
          <div className="md:w-1/3 text-[#DFF6FF] p-6">
            <h1 className="text-3xl font-bold">Upload your prescription</h1>
            <p className="mt-2 text-lg">
              e-Channeling is the most trustworthy & reliable online pharmacy in Sri Lanka.
              Simply upload your prescription to get your medication delivered to your doorstep.
            </p>
            <div className="mt-6 space-y-4">
              {["Enter patient details", "Select a pharmacy after selecting the living area", "Get an image of a prescription and upload"].map((text, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-green-500 text-[#DFF6FF] font-bold rounded-full">{index + 1}</div>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Modified Card */}
          <div className="md:w-2/4 min-h-[500px] bg-[#DFF6FF] p-10 rounded-3xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800">Upload your prescription</h2>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Enter patient name"
                  className="border p-3 rounded-lg w-full bg-[#DFF6FF] focus:ring-1 focus:ring-blue-500"
                  required
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <div>
                  <select
                    className="border p-3 rounded-lg w-full bg-[#DFF6FF] focus:ring-1 focus:ring-blue-500"
                    required
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  >
                    <option value="">Select your area</option>
                    <option value="Colombo">Colombo</option>
                    <option value="Kandy">Kandy</option>
                  </select>
                  {errors.area && <p className="text-red-500 text-sm">Area is required</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  className="border p-3 rounded-lg w-full bg-[#DFF6FF] focus:ring-1 focus:ring-blue-500"
                  required
                  onChange={(e) => setFormData({ ...formData, pharmacy: e.target.value })}
                >
                  <option value="">Select a pharmacy</option>
                  <option value="Pharmacy A">Pharmacy A</option>
                  <option value="Pharmacy B">Pharmacy B</option>
                </select>

                <input
                  type="text"
                  placeholder="+94 7XXXXXXXX"
                  className="border p-3 rounded-lg w-full bg-[#DFF6FF] focus:ring-1 focus:ring-blue-500"
                  required
                  onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                />
              </div>

              {/* File Upload */}
              <div className="border-dashed border-2 border-gray-300 p-6 rounded-lg text-center cursor-pointer">
                <label className="cursor-pointer">
                  <input type="file" className="hidden" onChange={handleFileUpload} />
                  <FaCloudUploadAlt className="text-4xl mx-auto text-gray-400" />
                  <p className="text-gray-500">Click to upload files or Drag and drop</p>
                  {selectedFile && <p className="text-blue-500 mt-2">{selectedFile.name}</p>}
                </label>
              </div>
              <p className="text-gray-500 text-sm">Supporting image types: png, gif, jpg. Max size: 4MB.</p>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
