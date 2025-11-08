// src/pages/ProductPage.jsx
import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import allProducts from "../data/allProducts";
import { motion } from "framer-motion";
import { Star, ArrowLeft } from "lucide-react";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = allProducts.find((p) => p.id === Number(id));

  // 🧭 Scroll to top when product changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

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
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  // 🎯 Find similar products (same brand or category)
  const similarProducts = allProducts
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.brand === product.brand || p.category === product.category)
    )
    .slice(0, 4); // limit to 4 items

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-100 via-white to-neutral-50 flex flex-col items-center justify-start px-4 sm:px-6 md:px-12 pt-28 pb-16 space-y-14">
      {/* 🌟 Product Card */}
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-200"
      >
        {/* 🖼️ Product Image */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-[250px] sm:h-[320px] md:h-[400px] object-cover"
            whileHover={{
              scale: 1.04,
              transition: { duration: 0.4 },
            }}
          />
        </motion.div>

        {/* 🧾 Product Details */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="p-5 sm:p-7 md:p-8 space-y-4"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 leading-snug">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 text-neutral-600 text-sm sm:text-base">
            <Star className="text-yellow-500 fill-yellow-400" size={16} />
            <span>{product.brand}</span>
          </div>

          <p className="text-neutral-700 text-sm sm:text-base leading-relaxed line-clamp-4">
            {product.description}
          </p>

          <p className="text-xl sm:text-2xl font-semibold text-green-700">
            {product.price}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 pt-3">
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2.5 rounded-full font-medium hover:bg-green-700 transition-all text-sm sm:text-base"
            >
              💬 WhatsApp
            </motion.a>
          </div>

          <div className="pt-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-neutral-600 hover:text-black transition-all text-sm font-medium"
            >
              <ArrowLeft size={14} />
              Back to Products
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* 🛍️ Similar Products */}
      {similarProducts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-6xl border-t border-neutral-200 pt-10"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-5">
            Similar Products
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {similarProducts.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.03 }}
                className="bg-white border border-neutral-200 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-all"
                onClick={() => navigate(`/products/${item.id}`)} // ✅ FIXED HERE
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 sm:h-48 object-cover rounded-t-xl"
                />
                <div className="p-3 sm:p-4">
                  <h3 className="text-sm sm:text-base font-semibold text-neutral-800 truncate">
                    {item.name}
                  </h3>
                  <p className="text-green-700 text-sm font-medium mt-1">
                    {item.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
