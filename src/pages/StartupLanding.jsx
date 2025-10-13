import { Link } from "react-router-dom";
import SLPImg from "../assets/SLP.png";

export default function StartupLanding() {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <img
          src={SLPImg}
          alt="Startup Landing Page"
          className="rounded-2xl shadow-lg w-full mb-10"
        />
        <h1 className="text-4xl font-bold mb-4 text-yellow-400">
          Startup Landing Page
        </h1>
        <p className="text-gray-300 mb-8">
          A modern and conversion-focused landing page for startups, built using{" "}
          <strong>React + Vite</strong> and <strong>Tailwind CSS</strong>.
          Includes SEO optimization, CTA-driven layout, and fast loading times
          for better user engagement.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-400 mb-3">
          Key Features
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Fast performance with Vite build system</li>
          <li>SEO and metadata optimization</li>
          <li>Custom animations and scroll effects</li>
          <li>Integration-ready for analytics and CRMs</li>
        </ul>

        <h2 className="text-2xl font-semibold text-yellow-400 mb-3">
          Future Enhancements
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Add blog and testimonial section</li>
          <li>Support for A/B testing landing variants</li>
          <li>Dynamic content management via CMS</li>
        </ul>

        <Link
          to="/portfolio"
          className="inline-block mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-all"
        >
          ← Back to Portfolio
        </Link>
      </div>
    </section>
  );
}
