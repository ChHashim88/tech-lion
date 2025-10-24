import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Star } from "lucide-react";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function Feedback() {
  const [formData, setFormData] = useState({
    client_name: "",
    company_name: "",
    position: "",
    email: "",
    rating: 0,
    feedback: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const { error } = await supabase.from("feedback").insert([
        {
          name: formData.client_name,
          company_name: formData.company_name,
          position: formData.position,
          email: formData.email,
          rating: formData.rating,
          feedback: formData.feedback,
        },
      ]);

      if (error) throw error;

      setSuccess(true);
      setFormData({
        client_name: "",
        company_name: "",
        position: "",
        email: "",
        rating: 0,
        feedback: "",
      });
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 flex flex-col items-center">
      <div className="max-w-2xl w-full text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white tracking-wide">
          We Value Your Feedback
        </h1>
        <p className="text-gray-400 mt-3">
          Thank you for working with{" "}
          <span className="text-blue-500 font-semibold">Tech Lion</span>.  
          Your feedback helps us grow and serve you better.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-neutral-900 shadow-lg rounded-2xl p-8 w-full max-w-2xl border border-neutral-700"
      >
        {/* Full Name */}
        <div className="mb-6">
          <label className="block text-left text-gray-300 font-medium mb-2">
            Full Name <span className="text-blue-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.client_name}
            onChange={(e) =>
              setFormData({ ...formData, client_name: e.target.value })
            }
            placeholder="Enter your full name"
            className="w-full px-4 py-3 bg-black text-white border border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-500"
          />
        </div>

        {/* Company Name */}
        <div className="mb-6">
          <label className="block text-left text-gray-300 font-medium mb-2">
            Company Name
          </label>
          <input
            type="text"
            value={formData.company_name}
            onChange={(e) =>
              setFormData({ ...formData, company_name: e.target.value })
            }
            placeholder="Enter your company name"
            className="w-full px-4 py-3 bg-black text-white border border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-500"
          />
        </div>

        {/* Position */}
        <div className="mb-6">
          <label className="block text-left text-gray-300 font-medium mb-2">
            Position / Role
          </label>
          <input
            type="text"
            value={formData.position}
            onChange={(e) =>
              setFormData({ ...formData, position: e.target.value })
            }
            placeholder="Enter your position (e.g. CEO, Manager)"
            className="w-full px-4 py-3 bg-black text-white border border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-500"
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-left text-gray-300 font-medium mb-2">
            Email <span className="text-blue-500">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Enter your email address"
            className="w-full px-4 py-3 bg-black text-white border border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-500"
          />
        </div>

        {/* Rating */}
        <div className="mb-6">
          <label className="block text-left text-gray-300 font-medium mb-3">
            Rate Your Experience <span className="text-blue-500">*</span>
          </label>
          <div className="flex justify-center space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={36}
                className={`cursor-pointer transition ${
                  formData.rating >= star
                    ? "fill-blue-500 text-blue-500"
                    : "text-gray-500"
                }`}
                onClick={() => setFormData({ ...formData, rating: star })}
              />
            ))}
          </div>
        </div>

        {/* Feedback */}
        <div className="mb-6">
          <label className="block text-left text-gray-300 font-medium mb-2">
            Your Feedback <span className="text-blue-500">*</span>
          </label>
          <textarea
            required
            value={formData.feedback}
            onChange={(e) =>
              setFormData({ ...formData, feedback: e.target.value })
            }
            placeholder="Share your experience with Tech Lion..."
            className="w-full h-36 px-4 py-3 bg-black text-white border border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none placeholder-gray-500"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
        >
          {loading ? "Submitting..." : "Submit Feedback"}
        </button>

        {/* Notifications */}
        {success && (
          <p className="mt-4 text-green-500 font-medium">
            🎉 Thank you! Your feedback has been submitted successfully.
          </p>
        )}
        {error && <p className="mt-4 text-red-500 font-medium">{error}</p>}
      </form>

      <div className="text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()}{" "}
        <span className="text-blue-500 font-semibold">Tech Lion</span> — Empowering Digital Growth
      </div>
    </section>
  );
}
