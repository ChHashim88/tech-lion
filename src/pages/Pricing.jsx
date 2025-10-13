import React from "react";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-16">
      <h1 className="text-5xl font-bold mb-6 text-center">Pricing Plans</h1>
      <p className="text-gray-400 text-center mb-12 max-w-2xl">
        Choose the perfect plan for your business. Our packages are flexible and designed to meet your needs — whether you’re starting small or scaling big.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Basic Plan */}
        <div className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold mb-4 text-center">Starter</h2>
          <p className="text-4xl font-bold mb-4 text-center">$299</p>
          <ul className="text-gray-400 space-y-2 mb-6 text-center">
            <li>1 Full-stack Website</li>
            <li>Basic SEO Setup</li>
            <li>Responsive Design</li>
            <li>Email Support</li>
          </ul>
          <button className="bg-blue-600 hover:bg-blue-700 w-full py-3 rounded-lg font-semibold transition">
            Get Started
          </button>
        </div>

        {/* Professional Plan */}
        <div className="bg-gradient-to-b from-blue-700 to-blue-900 rounded-2xl p-8 shadow-lg transform scale-105">
          <h2 className="text-2xl font-semibold mb-4 text-center">Professional</h2>
          <p className="text-4xl font-bold mb-4 text-center">$599</p>
          <ul className="text-gray-200 space-y-2 mb-6 text-center">
            <li>3 Full-stack Websites</li>
            <li>Advanced SEO Optimization</li>
            <li>1 Year Hosting Included</li>
            <li>Priority Support</li>
          </ul>
          <button className="bg-white text-blue-700 hover:bg-gray-200 w-full py-3 rounded-lg font-semibold transition">
            Choose Plan
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold mb-4 text-center">Enterprise</h2>
          <p className="text-4xl font-bold mb-4 text-center">Custom</p>
          <ul className="text-gray-400 space-y-2 mb-6 text-center">
            <li>Unlimited Projects</li>
            <li>Dedicated Support Team</li>
            <li>Full Maintenance</li>
            <li>Custom Integrations</li>
          </ul>
          <button className="bg-blue-600 hover:bg-blue-700 w-full py-3 rounded-lg font-semibold transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
