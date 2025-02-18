"use client";

import { Nav } from "../Components/Navbar";
import { Shopcards } from "../Components/ShopCards";
import { motion } from "framer-motion";
import { ShopHeader } from "../Components/ShopHeader";



export function Shop() {
  return (
    <div>
      <Nav></Nav>


      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
      <ShopHeader></ShopHeader>
      </motion.div>

      <motion.h1
        className="flex justify-center pt-14 text-3xl font-bold"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Medicine
      </motion.h1>

      <div className="flex items-center justify-center pt-10">
        <div className="grid w-full max-w-7xl grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Shopcards></Shopcards>
          <Shopcards></Shopcards>
          <Shopcards></Shopcards>
          <Shopcards></Shopcards>
          <Shopcards></Shopcards>
          <Shopcards></Shopcards>
          <Shopcards></Shopcards>
          <Shopcards></Shopcards>
        </div>

        
      </div>
    </div>
  );
}
