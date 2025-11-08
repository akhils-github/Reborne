import React from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-neutral-900 text-neutral-200 pt-16 pb-10 px-8 md:px-20"
    >
      <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">Reborne</h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Redefining streetwear & casual fashion with minimal designs,
            timeless comfort, and bold attitude. Be confident. Be Reborne.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-green-400 transition">Home</Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-green-400 transition">Products</Link>
            </li>
            <li>
              <Link to="/" className="hover:text-green-400 transition">About</Link>
            </li>
           
          </ul>
        </div>

        {/* Outlets */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Outlets</h3>
          <p className="text-neutral-400 flex items-start gap-2 mb-3">
            <MapPin className="text-green-500 w-5 h-5 mt-1" />
            Kozhikode – Near Beach, Kerala 673001
          </p>
          <p className="text-neutral-400 flex items-start gap-2">
            <MapPin className="text-green-500 w-5 h-5 mt-1" />
            Feroke – Near Feroke Stand, Kerala 673631
          </p>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
          <div className="flex gap-4 mb-4">
            <a
              href="https://www.instagram.com/reborne_fashion_cafe/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/917356179857"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
          <p className="text-neutral-400 text-sm">support@reborne.in</p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-neutral-800 mt-12 pt-6 text-center text-neutral-500 text-sm">
        © {new Date().getFullYear()} Reborne Clothing — All Rights Reserved.
      </div>
    </motion.footer>
  );
}
