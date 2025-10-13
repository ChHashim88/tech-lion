import React from "react";
import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center"
    >
      {/* Subtitle */}
      <h3 className="text-sm md:text-base font-semibold text-indigo-400 uppercase tracking-wider mb-2">
        {subtitle}
      </h3>

      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent drop-shadow-sm">
        {title}
      </h2>

      {/* Accent line */}
      <div className="w-20 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
    </motion.div>
  );
}
