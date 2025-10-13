import { motion } from "framer-motion";
import { Code2, Rocket, Users } from "lucide-react";

export default function About() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white overflow-hidden">
      {/* Subtle gradient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700/20 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            About <span className="text-blue-500">Us</span>
          </h2>
          <p className="text-gray-400 mb-6 text-lg leading-relaxed">
            We are a passionate team of developers, designers, and creators
            dedicated to building modern, high-performance web applications that
            push innovation and deliver results.  
            <br />
            <br />
            Our mission is to transform ideas into digital products that scale,
            inspire, and empower businesses worldwide.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-md"
            >
              <Code2 className="mx-auto mb-3 text-blue-500" size={30} />
              <h4 className="text-2xl font-bold">5+</h4>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-md"
            >
              <Rocket className="mx-auto mb-3 text-blue-500" size={30} />
              <h4 className="text-2xl font-bold">60+</h4>
              <p className="text-gray-400 text-sm">Projects Delivered</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-md"
            >
              <Users className="mx-auto mb-3 text-blue-500" size={30} />
              <h4 className="text-2xl font-bold">30+</h4>
              <p className="text-gray-400 text-sm">Happy Clients</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-3xl group-hover:blur-[80px] transition-all duration-500"></div>
          <img
            src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=800"
            alt="Team working"
            className="rounded-3xl shadow-2xl relative z-10 transform group-hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      </div>
    </section>
  );
}
