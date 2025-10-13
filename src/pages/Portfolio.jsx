import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import fashionImg from "../assets/Ecomerce.png";
import Dashboard from "../assets/Dashboard.png";
import SLP from "../assets/SLP.png";
import Host from "../assets/Hosting.png";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

// 🧩 Portfolio Projects Data
const projects = [
  {
    title: "E-Commerce Fashion",
    description:
      "A stunning fashion brand store built using Next.js, Tailwind, and Stripe integration.",
    image: fashionImg,
    link: "/ecommerce-fashion", // ✅ Fixed route
    tags: ["Next.js", "Stripe", "Tailwind"],
  },
  {
    title: "Finance Dashboard",
    description:
      "Interactive dashboard for expense tracking and analytics using React & Supabase.",
    image: Dashboard,
    link: "/finance-dashboard", // ✅ Fixed route
    tags: ["React", "Supabase", "Charts"],
  },
  {
    title: "Startup Landing Page",
    description:
      "Modern landing page for SaaS startups with responsive design and SEO optimization.",
    image: SLP,
    link: "/startup-landing", // ✅ Fixed route
    tags: ["Vite", "React", "SEO"],
  },
  {
    title: "Hosting & Domain Management",
    description:
      "Providing high-quality, fast, and secure hosting specifically tailored for the websites you build.",
    image: Host,
    link: "/hosting-domain", // ✅ Fixed route
    tags: ["Hosting", "Domain", "Performance"],
  },
];

// 📊 Circular Performance Data
const performanceData = [
  { name: "Fashion", value: 85, fill: "#3b82f6" },
  { name: "Finance", value: 70, fill: "#22c55e" },
  { name: "Startup", value: 60, fill: "#eab308" },
  { name: "Hosting", value: 90, fill: "#ef4444" },
];

// 📈 Monthly Sales Growth Data
const salesData = [
  { month: "Jan", sales: 1200 },
  { month: "Feb", sales: 1800 },
  { month: "Mar", sales: 1600 },
  { month: "Apr", sales: 2200 },
  { month: "May", sales: 2700 },
  { month: "Jun", sales: 3100 },
  { month: "Jul", sales: 3500 },
  { month: "Aug", sales: 4200 },
  { month: "Sep", sales: 4800 },
];

export default function Portfolio() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-700/20 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-blue-500">Portfolio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore some of our latest projects crafted with precision,
            creativity, and modern web technologies.
          </p>
        </div>

        {/* Portfolio Project Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-blue-500/40 backdrop-blur-md hover:bg-white/10 transition-all duration-500 shadow-lg"
            >
              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={project.link}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-all"
                >
                  View Project <ExternalLink size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Project Performance Chart */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-semibold mb-8">
            Project <span className="text-blue-500">Performance Overview</span>
          </h3>

          <div className="flex justify-center">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-lg w-full max-w-lg">
              <ResponsiveContainer width="100%" height={300}>
                <RadialBarChart
                  cx="50%"
                  cy="50%"
                  innerRadius="30%"
                  outerRadius="100%"
                  barSize={15}
                  data={performanceData}
                >
                  <RadialBar
                    minAngle={15}
                    background
                    clockWise
                    dataKey="value"
                  />
                  <Legend
                    iconSize={10}
                    layout="vertical"
                    verticalAlign="middle"
                    align="right"
                  />
                </RadialBarChart>
              </ResponsiveContainer>
              <p className="text-gray-400 mt-4 text-sm">
                Circular graph representing performance across different
                projects.
              </p>
            </div>
          </div>
        </div>

        {/* Sales Growth Chart */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-semibold mb-8">
            Monthly <span className="text-blue-500">Sales Growth</span>
          </h3>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-lg w-full max-w-3xl mx-auto">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#111827",
                    border: "1px solid #1f2937",
                    color: "#fff",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-gray-400 mt-4 text-sm">
              Line chart showing monthly sales performance growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
