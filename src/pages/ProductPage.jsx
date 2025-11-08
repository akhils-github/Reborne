// src/pages/ProductPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import allProducts from "../data/allProducts";
import { motion } from "framer-motion";
import { ShoppingBag, Star, ArrowLeft } from "lucide-react";

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

  // ✅ WhatsApp setup
  const phoneNumber = "917356179857";
  const message = `👋 Hello! I'm interested in this product:\n\n🛍️ *${product.name}*\n🏷️ Brand: ${product.brand}\n💰 Price: ${product.price}\n\nCan you share more details?`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-neutral-100 via-white to-neutral-50 flex items-center justify-center px-6 md:px-20 py-24"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center bg-white rounded-3xl shadow-2xl overflow-hidden border border-neutral-200"
      >
        {/* 🖼️ Product Image with Animations */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover"
            whileHover={{
              scale: 1.05,
              rotate: 1,
              transition: { duration: 0.6 },
            }}
          />

          {/* Floating highlight glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl"
            animate={{ opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        {/* 🧾 Product Details */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="p-6 md:p-10 space-y-6"
        >
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight"
          >
            {product.name}
          </motion.h1>

          <motion.div
            className="flex items-center gap-3 text-neutral-600 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Star className="text-yellow-500 fill-yellow-400" size={20} />
            <span>Brand: {product.brand}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-neutral-700 leading-relaxed"
          >
            {product.description}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl font-semibold text-green-700"
          >
            {product.price}
          </motion.p>

          <div className="flex flex-wrap gap-4 pt-4">
            {/* 💬 WhatsApp Button */}
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-green-700 transition-all duration-300"
            >
              💬 Enquire on WhatsApp
            </motion.a>

            {/* 🛒 Add to Cart */}
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#111" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-full font-medium shadow-md transition-all duration-300"
            >
              <ShoppingBag size={20} />
              Add to Cart
            </motion.button>
          </div>

          {/* 🔙 Back Link */}
          <motion.div
            className="pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-neutral-600 hover:text-black transition-all font-medium"
            >
              <ArrowLeft size={18} />
              Back to Products
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
