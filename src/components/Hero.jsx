import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-3xl opacity-30 top-[-150px] left-[-150px]" />
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-pink-500 to-orange-400 rounded-full blur-3xl opacity-30 bottom-[-150px] right-[-150px]" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl"
      >
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400 leading-tight">
          Build Digital Experiences that Inspire
        </h1>
        <p className="mt-6 text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
          Empower your brand with stunning web design, seamless performance, and cutting-edge technology — crafted for the future.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="px-8 py-3 rounded-full text-lg font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg hover:shadow-purple-500/30 transition-all"
          >
           <Link to="/contact" className="...">Get Started</Link>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="px-8 py-3 rounded-full text-lg font-medium text-gray-300 border border-gray-700 hover:border-gray-500 hover:text-white transition-all"
          >
            <Link to="/learnmore" className="...">Learn More</Link>
            
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
