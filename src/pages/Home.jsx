import Hero from "../components/Hero";
import SectionTitle from "../components/ui/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import Testimonial from "../components/Testimonial";
import PortfolioGrid from "../components/PortfolioGrid";
import { motion } from "framer-motion";

export default function Home() {
  const services = [
    {
      icon: "⚙️",
      title: "Full-Stack Development",
      desc: "React, Node, Express, Mongo/Postgres, scalable APIs",
    },
    {
      icon: "🛒",
      title: "Shopify Stores",
      desc: "Custom themes, apps, and conversion optimization",
    },
    {
      icon: "📱",
      title: "Web Apps",
      desc: "User-focused UIs, PWAs, performance-first builds",
    },
    {
      icon: "🔍",
      title: "SEO & Maintenance",
      desc: "SEO audits, hosting, and real-time monitoring",
    },
  ];

  const testimonials = [
    {
      quote: "They launched our store in 2 weeks — clean UI and amazing UX!",
      author: "Aisha",
      role: "Founder, ShopCo",
    },
    {
      quote: "Top-notch engineering and frontend polish.",
      author: "Samir",
      role: "CTO, FinApp",
    },
  ];

  const portfolio = [
    { title: "E-Commerce UI", desc: "Shopify + custom checkout" },
    { title: "SaaS Dashboard", desc: "Realtime analytics platform" },
    { title: "Marketing Site", desc: "Conversion-optimized frontend" },
  ];

  return (
    <div className="bg-gradient-to-b from-black via-[#0a0a0f] to-black text-gray-200 overflow-x-hidden">
      
      <Hero />

      
     
<motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative max-w-7xl mx-auto px-6 py-24 text-center"
>
  
  <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent blur-3xl -z-10" />

  <SectionTitle
    title="Our Services"
    subtitle="From landing pages to full-stack platforms."
  />

  <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {services.map((s, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-500/30 hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.5)] transition-all"
      >
        <div className="text-4xl mb-4">{s.icon}</div>
        <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
      </motion.div>
    ))}
  </div>
</motion.section>

{/* ✨ Portfolio Section */}
<motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative max-w-7xl mx-auto px-6 py-24"
>
  <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent blur-3xl -z-10" />

  <SectionTitle
    title="Selected Work"
    subtitle="Showcasing our latest and most impactful projects."
  />

  <div className="mt-14 grid md:grid-cols-3 gap-8">
    {portfolio.map((p, i) => (
      <motion.div
        key={i}
        whileHover={{ y: -5 }}
        className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/30 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.5)] transition-all"
      >
        <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
        <p className="text-gray-400 text-sm">{p.desc}</p>
      </motion.div>
    ))}
  </div>
</motion.section>

{/* ✨ Testimonials Section */}
<motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative max-w-7xl mx-auto px-6 py-24 text-center"
>
  <div className="absolute inset-0 bg-gradient-to-b from-blue-800/10 to-transparent blur-3xl -z-10" />

  <SectionTitle
    title="Client Stories"
    subtitle="Real experiences from our partners."
  />

  <div className="mt-14 grid md:grid-cols-2 gap-10">
    {testimonials.map((t, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-400/30 shadow-lg hover:shadow-[0_0_35px_-10px_rgba(59,130,246,0.4)] transition-all"
      >
        <p className="text-gray-300 italic mb-6">“{t.quote}”</p>
        <h4 className="text-white font-semibold">{t.author}</h4>
        <p className="text-sm text-gray-500">{t.role}</p>
      </motion.div>
    ))}
  </div>

  {/* 👇 Add link here */}
  <a
    href="/showfeedback"
    className="inline-block mt-10 text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300"
  >
    See what our clients say →
  </a>
</motion.section>

    </div>
  );
}
