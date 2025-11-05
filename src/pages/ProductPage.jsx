import React from "react";
import { useParams, Link } from "react-router-dom";
import allProducts from "../data/allProducts";
import { motion } from "framer-motion";

export default function ProductPage() {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="text-center py-40 text-gray-700 text-xl">
        Product not found 😢
      </div>
    );
  }

  // ✅ WhatsApp setup (fixed formatting)
  const phoneNumber = "917356179857"; // no "+" here
  const message = `👋 Hello! I'm interested in this product:

🛍️ *Product:* ${product.name}
🏷️ *Brand:* ${product.brand}
💰 *Price:* ${product.price}

🖼️ Image: ${product.image}

Can you please share more details?`;

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-neutral-50 flex items-center justify-center px-6 md:px-16 py-24"
    >
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* ✅ Product Image */}
        <motion.img
          src={product.image}
          alt={product.name}
          className="rounded-3xl shadow-md w-full object-cover h-[450px]"
          whileHover={{ scale: 1.03 }}
        />

        {/* Product Info */}
        <div>
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {product.name}
          </motion.h1>

          <p className="text-gray-500 text-lg mb-2">{product.brand}</p>
          <p className="text-xl font-semibold text-gray-800 mb-6">
            {product.price}
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* ✅ WhatsApp Enquiry Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition"
          >
            💬 Enquire on WhatsApp
          </a>

          {/* Back link */}
          <Link
            to="/products"
            className="ml-6 text-gray-700 hover:underline font-medium"
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
