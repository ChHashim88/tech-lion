import { Code, Palette, Rocket, Shield, ShoppingBag, Search, Cpu, LayoutDashboard} from "lucide-react";

const services = [
  {
    icon: <Code className="w-10 h-10 text-blue-500" />,
    title: "Web Development",
    description:
      "High-performance, responsive websites built with React, Next.js, and Node.js.",
  },
  {
  icon: <Cpu className="w-10 h-10 text-purple-500" />,
  title: "AI Integration",
  description: "Enhance your platform with AI-powered features using OpenAI APIs.",
},
  {
  icon: <ShoppingBag className="w-10 h-10 text-green-600" />,
  title: "Shopify E-commerce",
  description:
    "Design, development, and optimization of high-converting, secure Shopify online stores.",
},
  
  {
    icon: <Palette className="w-10 h-10 text-pink-500" />,
    title: "UI/UX Design",
    description:
      "Beautiful, user-centric interfaces designed to maximize engagement and clarity.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-green-500" />,
    title: "Startup Launch",
    description:
      "End-to-end launch solutions for modern startups — from MVP to production.",
  },
  {
    icon: <Shield className="w-10 h-10 text-purple-500" />,
    title: "Security & Maintenance",
    description:
      "We keep your apps fast, secure, and scalable with ongoing support and audits.",
  },
  {
  icon: <Search className="w-10 h-10 text-yellow-500" />,
  title: "SEO & Digital Marketing",
  description: "Boost your online visibility with modern SEO and targeted campaigns.",
},
{
  icon: <LayoutDashboard className="w-10 h-10 text-purple-500" />,
  title: "Custom CMS Development",
  description:
    "Tailor-made Content Management Systems designed for scalability, security, and seamless content editing. Built with modern stacks like MERN, Next.js, and Strapi.",
},
];

export default function Services() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700/20 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Our <span className="text-blue-500">Services</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          We deliver top-tier digital solutions — combining design, technology,
          and strategy to help your business thrive.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-500/50 hover:scale-[1.05] hover:bg-white/10 transition-all duration-300 ease-out"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
