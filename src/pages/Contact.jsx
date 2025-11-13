import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { insertContactApi } from "../services/contactSrvices"; 

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { success, error } = await insertContactApi(formData);

    if (success) {
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSuccess(false), 2000);
    } else {
      console.error("Error sending message:", error?.message);
    }

    setLoading(false);
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-950 to-gray-900 text-white overflow-hidden">
      {/* Ambient Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Let’s <span className="text-blue-500">Connect</span>
          </h2>
          <p className="text-gray-400 mb-10 text-lg leading-relaxed">
            Have a project in mind, a question, or just want to say hello?  
            We’d love to hear from you. Fill out the form or reach us directly —
            our team will get back to you within 24 hours.
          </p>

          {/* Contact Info */}
          <div className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md transition-all duration-300"
            >
              <Mail className="text-blue-500" size={26} />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-400">techlion0001@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md transition-all duration-300"
            >
              <Phone className="text-blue-500" size={26} />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-400">+92 308 6886361</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md transition-all duration-300"
            >
              <MapPin className="text-blue-500" size={26} />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-400">Pakistan, USA</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl space-y-6"
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">
            Send us a message
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="bg-black/30 border border-white/10 rounded-xl p-4 text-white placeholder-gray-400 focus:border-blue-500 outline-none transition-all"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="bg-black/30 border border-white/10 rounded-xl p-4 text-white placeholder-gray-400 focus:border-blue-500 outline-none transition-all"
            />
          </div>

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full bg-black/30 border border-white/10 rounded-xl p-4 text-white placeholder-gray-400 focus:border-blue-500 outline-none transition-all"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
            className="w-full bg-black/30 border border-white/10 rounded-xl p-4 text-white placeholder-gray-400 focus:border-blue-500 outline-none transition-all"
          ></textarea>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {success && (
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-green-400 text-center font-medium"
            >
              ✅ Message sent successfully!
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
