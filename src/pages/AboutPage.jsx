import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-neutral-50 flex flex-col items-center px-6 md:px-20 py-20 mt-24"
    >
      {/* Brand Header */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 text-center"
      >
        About <span className="text-green-700">Reborne</span>
      </motion.h1>

      {/* About Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-600 max-w-3xl text-center text-lg leading-relaxed mb-16"
      >
        Reborne is a modern clothing brand born with the vision of redefining
        street and casual wear. Our designs bring together comfort, creativity,
        and confidence — allowing you to express who you are effortlessly.
        <br />
        <br />
        With outlets across Kerala, we’re proud to bring high-quality styles
        that blend minimalism with attitude. Reborne isn’t just a brand — it’s a
        lifestyle.
      </motion.p>

      {/* Store Locations */}
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* Kozhikode */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white rounded-3xl p-8 shadow-md border border-gray-100"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <MapPin className="text-green-600" /> Kozhikode Outlet
          </h2>
          <p className="text-gray-600 mb-3">
            Reborne Store, SM Street, Kozhikode, Kerala – 673001
          </p>
          <p className="text-gray-600 flex items-center gap-2">
            <Phone className="w-5 h-5 text-green-600" /> +91 7356179857
          </p>
          <p className="text-gray-600 flex items-center gap-2 mt-2">
            <Mail className="w-5 h-5 text-green-600" /> support@reborne.in
          </p>
        </motion.div>

        {/* Feroke */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white rounded-3xl p-8 shadow-md border border-gray-100"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <MapPin className="text-green-600" /> Feroke Outlet
          </h2>
          <p className="text-gray-600 mb-3">
            Reborne Store, Near Feroke College, Kozhikode, Kerala – 673631
          </p>
          <p className="text-gray-600 flex items-center gap-2">
            <Phone className="w-5 h-5 text-green-600" /> +91 7356179857
          </p>
          <p className="text-gray-600 flex items-center gap-2 mt-2">
            <Mail className="w-5 h-5 text-green-600" /> support@reborne.in
          </p>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-gray-500 mt-16 text-center text-sm"
      >
        © {new Date().getFullYear()} Reborne Clothing. All rights reserved.
      </motion.p>
    </motion.div>
  );
}
