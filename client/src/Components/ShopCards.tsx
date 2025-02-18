"use client";

import { Card } from "flowbite-react";
import { motion } from "framer-motion";

// image
import penadol from "../Images/penadol.avif";

export function Shopcards() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Card className="max-h-sm w-80">
        <div className="flex justify-center">
          <img src={penadol} className="w-40" alt="Doctor" />
        </div>
        <a href="#">
          <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
            Penadol
          </h5>
        </a>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            RS 50.00
          </span>
          <a
            href="#"
            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Buy
          </a>
        </div>
      </Card>
    </motion.div>
  );
}
