import { Link } from "react-router-dom";
import fashionImg from "../assets/Ecomerce.png";

export default function ECommerceFashion() {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <img
          src={fashionImg}
          alt="E-Commerce Fashion"
          className="rounded-2xl shadow-lg w-full mb-10"
        />
        <h1 className="text-4xl font-bold mb-4 text-blue-400">
          E-Commerce Fashion Store
        </h1>
        <p className="text-gray-300 mb-8">
          A fully functional online fashion marketplace built using{" "}
          <strong>Next.js</strong> and <strong>Tailwind CSS</strong> with{" "}
          <strong>Stripe integration</strong> for secure payments. Designed for
          both style and performance, offering smooth navigation, product
          filtering, and real-time cart updates.
        </p>

        <h2 className="text-2xl font-semibold text-blue-400 mb-3">
          Key Features
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Responsive design optimized for mobile and desktop</li>
          <li>Stripe integration for payments</li>
          <li>Product search, filters, and wishlist system</li>
          <li>Dynamic categories and product pages</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-400 mb-3">
          What We Can Improve
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Add AI-based recommendation system</li>
          <li>Customer review and rating system</li>
          <li>Inventory management for sellers</li>
        </ul>

        <Link
          to="/portfolio"
          className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
        >
          ← Back to Portfolio
        </Link>
      </div>
    </section>
  );
}
