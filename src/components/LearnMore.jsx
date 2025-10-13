import {
  Code,
  ShoppingBag,
  Database,
  PenTool,
  Server,
  Workflow,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
} from "lucide-react";
import SalesChart from "./SalesChart";
import PerformanceChart from "./PerformanceChart";

export default function LearnMore() {
  const services = [
    {
      icon: <Code className="w-10 h-10 text-blue-500" />,
      title: "Web Development",
      description:
        "We build responsive, fast, and scalable websites using React, Next.js, and Node.js tailored to your business goals.",
    },
    {
      icon: <ShoppingBag className="w-10 h-10 text-green-500" />,
      title: "Shopify Store Setup",
      description:
        "From theme customization to full eCommerce deployment — we craft Shopify stores that convert visitors into buyers.",
    },
    {
      icon: <Database className="w-10 h-10 text-yellow-500" />,
      title: "Custom CMS Development",
      description:
        "Manage your website with ease using a flexible and secure content management system built just for your needs.",
    },
    {
      icon: <PenTool className="w-10 h-10 text-pink-500" />,
      title: "UI/UX Design",
      description:
        "We design intuitive interfaces that enhance user experience, keeping your audience engaged and inspired.",
    },
    {
      icon: <Server className="w-10 h-10 text-purple-500" />,
      title: "Hosting & Domain Management",
      description:
        "Fast, secure, and reliable hosting solutions designed to keep your site online 24/7 with zero downtime.",
    },
  ];

  const steps = [
    { title: "Discovery & Strategy", desc: "We understand your goals and define your vision." },
    { title: "Design & Prototype", desc: "We craft engaging UI/UX and gather feedback early." },
    { title: "Development", desc: "Our experts build your product with clean, scalable code." },
    { title: "Testing & QA", desc: "Thorough testing ensures stability, security, and performance." },
    { title: "Launch & Support", desc: "We deploy your project and provide ongoing maintenance." },
  ];

  const testimonials = [
    {
      name: "Sarah Malik",
      role: "Startup Founder",
      feedback:
        "They built our full web platform in record time — fantastic communication and quality. Highly recommended!",
    },
    {
      name: "Omar Khan",
      role: "E-Commerce Owner",
      feedback:
        "My Shopify store sales doubled after their redesign. The results speak for themselves!",
    },
    {
      name: "Emily Chen",
      role: "LegalTech CEO",
      feedback:
        "Atlas Legal AI wouldn’t be possible without their MERN expertise and deep understanding of AI integration.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white">
      {/* Hero Section */}
      <div className="text-center py-24 px-6 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-800/30 via-transparent to-transparent">
        <h1 className="text-5xl font-bold mb-4">
          Learn <span className="text-blue-500">More</span> About Us
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We craft high-performance digital solutions with creativity, precision, and modern technology — helping businesses grow online.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-5xl mx-auto text-center py-20 px-6">
        <h2 className="text-3xl font-semibold mb-4 text-blue-400">Our Mission</h2>
        <p className="text-gray-400 leading-relaxed">
          Our mission is to empower startups and enterprises with fast, scalable, and beautifully designed web solutions.
          We believe in combining design thinking with cutting-edge technology to deliver impactful results.
        </p>
      </div>

      

      {/* Process Section */}
      <div className="bg-gray-900/40 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Our <span className="text-blue-500">Process</span>
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <Workflow className="mx-auto text-blue-400 mb-4" size={30} />
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our <span className="text-blue-500">Performance</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="font-semibold mb-6 text-xl text-gray-200">Sales Growth</h3>
            <SalesChart />
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="font-semibold mb-6 text-xl text-gray-200">Project Performance</h3>
            <PerformanceChart />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-900/40 py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-12">
            What <span className="text-blue-500">Clients Say</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/40 transition-all duration-500"
              >
                <Star className="text-yellow-400 mx-auto mb-4" size={28} />
                <p className="text-gray-300 mb-4 italic">“{t.feedback}”</p>
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-24 px-6">
        <h2 className="text-4xl font-bold mb-4">
          Ready to <span className="text-blue-500">Start Your Project?</span>
        </h2>
        <p className="text-gray-400 mb-8">
          Let’s build something amazing together. From design to deployment, we’ve got you covered.
        </p>
        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 transition-all rounded-full inline-flex items-center gap-2">
          Get in Touch <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
