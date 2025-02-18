import React from "react";
import { Link } from "react-router-dom";

// Images
import physician from "../Images/physician.jpg";
import Gynecologist from "../Images/Gynecologist.jpg";
import Dermatologist from "../Images/Dermatologist.webp";
import Pediatricians from "../Images/Pediatricians.avif";
import Neurologist from "../Images/Neurologist.jpg";
import Gastroenterologist from "../Images/Gastroenterologist.jpg";
import Cardiologist from "../Images/Cardiologist.jpg";

const specialities = [
  { name: "General physician", img: physician, link: "/alldoctors#general" },
  { name: "Gynecologist", img: Gynecologist, link: "/alldoctors#gynecologist" },
  { name: "Dermatologist", img: Dermatologist, link: "/dermatologist" },
  { name: "Pediatricians", img: Pediatricians, link: "/alldoctors#pediatricians" },
  { name: "Neurologist", img: Neurologist, link: "/alldoctors#neurologist" },
  { name: "Gastroenterologist", img: Gastroenterologist, link: "/gastroenterologist" },
  { name: "Cardiologist", img: Cardiologist, link: "/alldoctors#cardiologist" },
];

export default function SpecialitySection() {
  return (
    <section className="py-10 text-center">
      <h2 className="text-3xl font-bold text-gray-900">Find by Speciality</h2>
      <p className="text-gray-500 mt-2">
        Simply browse through our extensive list of trusted doctors,
        schedule your appointment hassle-free.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {specialities.map((speciality, index) => (
          <a href={speciality.link} key={index} className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden hover:scale-105 transition-transform">
              <img
                src={speciality.img}
                alt={speciality.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2 text-gray-700">{speciality.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
