import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="border-t border-white/10 backdrop-blur-xl bg-black/30 text-gray-400"
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        {/* Company Info */}
        <div className="text-sm text-gray-500 text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">TechLion</span> — Modern Web & Shopify
        </div>

        {/* Links */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link
            to="/privacy"
            className="text-sm text-white hover:text-blue-400 transition-colors duration-300"
          >
            Privacy
          </Link>
          <Link
            to="/terms"
            className="text-sm text-white hover:text-blue-400 transition-colors duration-300"
          >
            Terms
          </Link>
        </div>
      </div>
    </motion.footer>
  );
}
