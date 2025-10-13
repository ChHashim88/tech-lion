import { Link } from "react-router-dom";
import HostImg from "../assets/Hosting.png";

export default function HostingDomain() {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <img
          src={HostImg}
          alt="Hosting & Domain Management"
          className="rounded-2xl shadow-lg w-full mb-10"
        />
        <h1 className="text-4xl font-bold mb-4 text-red-400">
          Hosting & Domain Management
        </h1>
        <p className="text-gray-300 mb-8">
          A robust hosting and domain management platform offering reliable,
          fast, and secure services. Built with performance-first architecture
          for developers and businesses looking for smooth deployment and
          uptime.
        </p>

        <h2 className="text-2xl font-semibold text-red-400 mb-3">
          Key Features
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Fast deployment and SSL automation</li>
          <li>DNS & domain management dashboard</li>
          <li>Performance and uptime monitoring tools</li>
          <li>Server resource usage visualization</li>
        </ul>

        <h2 className="text-2xl font-semibold text-red-400 mb-3">
          Future Possibilities
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Cloud scaling & CDN integration</li>
          <li>One-click app deployments (WordPress, Node.js)</li>
          <li>Integrated billing and subscription tracking</li>
        </ul>

        <Link
          to="/portfolio"
          className="inline-block mt-6 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
        >
          ← Back to Portfolio
        </Link>
      </div>
    </section>
  );
}
