import { Link } from "react-router-dom";
import DashboardImg from "../assets/Dashboard.png";

export default function FinanceDashboard() {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <img
          src={DashboardImg}
          alt="Finance Dashboard"
          className="rounded-2xl shadow-lg w-full mb-10"
        />
        <h1 className="text-4xl font-bold mb-4 text-green-400">
          Finance Dashboard
        </h1>
        <p className="text-gray-300 mb-8">
          A dynamic financial tracking dashboard built using{" "}
          <strong>React</strong> and <strong>Supabase</strong>. Provides users
          with real-time expense tracking, budgeting analytics, and beautiful
          data visualization charts.
        </p>

        <h2 className="text-2xl font-semibold text-green-400 mb-3">
          Key Features
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Interactive charts with Recharts</li>
          <li>Real-time Supabase data sync</li>
          <li>Monthly and yearly expense comparison</li>
          <li>Multi-user data tracking with authentication</li>
        </ul>

        <h2 className="text-2xl font-semibold text-green-400 mb-3">
          Future Improvements
        </h2>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>AI-powered financial insights</li>
          <li>Predictive budgeting model</li>
          <li>Export reports as PDF or Excel</li>
        </ul>

        <Link
          to="/portfolio"
          className="inline-block mt-6 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
        >
          ← Back to Portfolio
        </Link>
      </div>
    </section>
  );
}
