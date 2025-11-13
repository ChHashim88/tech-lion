// PricingPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const packages = [
  {
    name: "Portfolio / Personal",
    priceUSD: 70,
    pricePKR: 20000,
    features: [
      "1–3 Pages",
      "Responsive Design",
      "SEO-Friendly",
      "Contact Form",
    ],
  },
  {
    name: "Small Business",
    priceUSD: 139,
    pricePKR: 39000,
    features: [
      "3–5 Pages",
      "CMS Integration",
      "SEO Optimization",
      "Contact Form",
    ],
  },
  {
    name: "Full-Stack Web App",
    priceUSD: 250,
    pricePKR: 70000,
    features: [
      "Frontend + Backend",
      "Database Integration",
      "Authentication & Authorization",
      "API Integration",
    ],
  },
  {
    name: "E-Commerce / Shopify",
    priceUSD: 400,
    pricePKR: 112300,
    features: [
      "Store Setup",
      "Payment Integration",
      "Product Pages",
      "Inventory Management",
    ],
  },
  {
    name: "Custom Solutions",
    priceUSD: 0,
    pricePKR: 0,
    features: [
      "Tailored Features",
      "Dedicated Support",
      "Advanced Functionality",
    ],
    custom: true,
  },
];

const PricingPage = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-gray-100 py-16 px-6 lg:px-24">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-white mb-4">Premium Web Solutions Pricing</h1>
        <p className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto">
          Transparent, high-quality web solutions tailored for your business. Choose the package that suits your needs.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className="bg-[#222] rounded-2xl shadow-xl p-8 flex flex-col justify-between transform hover:scale-105 hover:shadow-blue-600 transition-all duration-300 border border-gray-700"
          >
            <h2 className="text-2xl font-bold text-white mb-4">{pkg.name}</h2>
            <div className="text-white text-2xl mb-4">
              {pkg.custom ? (
                <span className="text-[#2f80ed] font-bold">Custom Pricing</span>
              ) : (
                <>
                  <span className="font-bold text-[#2f80ed]">${pkg.priceUSD}</span> / USD <br />
                  <span className="font-bold text-[#2f80ed]">₨{pkg.pricePKR.toLocaleString()}</span> / PKR
                </>
              )}
            </div>
            <ul className="mb-6 space-y-2">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-300">
                  <span className="text-green-400 mr-2">&#10003;</span> {feature}
                </li>
              ))}
            </ul>
            <button
              className={`mt-auto font-semibold py-3 px-6 rounded-xl transition-all duration-200 text-lg ${
                pkg.custom
                  ? "bg-[#ff7a00] hover:bg-[#ff9500] text-white"
                  : "bg-[#2f80ed] hover:bg-[#1c5bbf] text-white"
              }`}
              onClick={() => navigate("/contact")}
            >
              {pkg.custom ? "Contact Us" : "Get Started"}
            </button>
          </div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-20 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-6">Why Choose Tech Lion?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-[#222] p-6 rounded-xl shadow-lg hover:shadow-blue-600 transition-shadow duration-300">
            <h3 className="font-semibold text-lg mb-2 text-white">Full-Stack Expertise</h3>
            <p className="text-gray-400">We deliver complete front-end and back-end solutions.</p>
          </div>
          <div className="bg-[#222] p-6 rounded-xl shadow-lg hover:shadow-blue-600 transition-shadow duration-300">
            <h3 className="font-semibold text-lg mb-2 text-white">Tailored Solutions</h3>
            <p className="text-gray-400">Custom packages designed for your business needs.</p>
          </div>
          <div className="bg-[#222] p-6 rounded-xl shadow-lg hover:shadow-blue-600 transition-shadow duration-300">
            <h3 className="font-semibold text-lg mb-2 text-white">Transparent Pricing</h3>
            <p className="text-gray-400">No hidden costs, everything clear upfront.</p>
          </div>
          <div className="bg-[#222] p-6 rounded-xl shadow-lg hover:shadow-blue-600 transition-shadow duration-300">
            <h3 className="font-semibold text-lg mb-2 text-white">Modern Design</h3>
            <p className="text-gray-400">UI/UX focused design to engage your users.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-6">Ready to start your project?</h2>
        <button
          className="bg-[#2f80ed] hover:bg-[#1c5bbf] text-white font-semibold py-3 px-8 rounded-2xl transition-all duration-200 text-lg"
         onClick={() => navigate("/contact")}
        >
          Book a Consultation
        </button>
      </div>
    </div>
  );
};

export default PricingPage;
