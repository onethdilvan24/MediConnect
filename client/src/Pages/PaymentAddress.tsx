import { useState } from "react";
import { Nav } from "../Components/Navbar";
import { Card } from "flowbite-react";
import { motion } from "framer-motion";

export function PaymentAddress() {
  const [formData, setFormData] = useState({});

  return (
    <div>
      <Nav></Nav>


      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
      <div className="min-h-screen p-8 text-[#DFF6FF]">
        <Card className="w-full max-w-2xl bg-[#06283D] rounded-3xl mx-auto">
          <div className="mx-auto">
            {/* Delivery Details Section */}
            <h2 className="mb-6 text-2xl font-semibold">Delivery Details</h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium">Your name</label>
                <input
                  type="text"
                  value={formData.name}
                  className="mt-1 w-full rounded-lg border border-gray-700 bg-[#DFF6FF] p-2 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Your email</label>
                <input
                  type="email"
                  value={formData.email}
                  className="mt-1 w-full rounded-lg border border-gray-700 bg-[#DFF6FF] p-2 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Phone Number</label>
                <input
                  type="text"
                  value={formData.number}
                  className="mt-1 w-full rounded-lg border border-gray-700 bg-[#DFF6FF] p-2 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Address</label>
                <input
                  type="text"
                  value={formData.address}
                  className="mt-1 w-full rounded-lg border border-gray-700 bg-[#DFF6FF] p-2 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Province
                </label>
                <input
                  type="text"
                  value={formData.province}
                  className="mt-1 w-full rounded-lg border border-gray-700 bg-[#DFF6FF] p-2 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">City</label>
                <input
                  type="email"
                  value={formData.city}
                  className="mt-1 w-full rounded-lg border border-gray-700 bg-[#DFF6FF] p-2 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Zip Code
                </label>
                <input
                  type="text"
                  value={formData.code}
                  className="mt-1 w-full rounded-lg border border-gray-700 bg-[#DFF6FF] p-2 text-white"
                />
              </div>
            </div>

            {/* Order Summary */}
            <div className="mt-6 rounded-lg bg-[#DFF6FF] text-[#06283D] p-4">
              <h3 className="mb-3 text-lg font-semibold">Order Summary</h3>
              <div className="flex justify-between text-[#06283D]">
                <span>Subtotal</span>
                <span>$8,094.00</span>
              </div>
              <div className="flex justify-between text-[#06283D]">
                <span>Savings</span>
                <span className="text-green-400">0</span>
              </div>
              <div className="flex justify-between text-[#06283D]">
                <span>Store Pickup</span>
                <span>$99</span>
              </div>
              <div className="flex justify-between text-[#06283D]">
                <span>Tax</span>
                <span>$199</span>
              </div>
              <div className="mt-2 flex justify-between text-lg font-semibold text-[#1363DF]">
                <span>Total</span>
                <span>$8,392.00</span>
              </div>
            </div>

            {/* Proceed to Payment */}
            <button className="mt-6 w-full rounded-lg bg-blue-600 p-3 text-lg font-medium text-white hover:bg-blue-700">
              Proceed to Payment
            </button>

            {/* Sign in or Create Account */}
            <p className="mt-3 text-center text-sm text-gray-400">
              One or more items in your cart require an account.{" "}
              <a
                href="/createaccount"
                className="text-blue-400 hover:underline"
              >
                Sign in or create an account now.
              </a>
            </p>
          </div>
        </Card>
      </div>
      </motion.div>
    </div>
  );
}

export default PaymentAddress;
