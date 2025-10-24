import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function ClientTestimonials() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedback = async () => {
      const { data, error } = await supabase
        .from("feedback")
        .select("id, name, company_name, position, rating, feedback")
        .order("id", { ascending: false });

      if (error) console.error("Error fetching feedback:", error);
      else setFeedbacks(data);
      setLoading(false);
    };

    fetchFeedback();
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen bg-black flex justify-center items-center">
        <p className="text-gray-400 text-lg">Loading testimonials...</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 flex flex-col items-center">
      {/* Section Heading */}
      <div className="max-w-4xl text-center mb-16">
        <h1 className="text-5xl font-extrabold tracking-wide mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          What Our Clients Say
        </h1>
        <p className="text-gray-400 text-lg">
          Real stories from those who trusted{" "}
          <span className="text-blue-500 font-semibold">Tech Lion</span> to
          elevate their online presence.
        </p>
      </div>

      {/* Feedback Cards */}
      {feedbacks.length === 0 ? (
        <p className="text-gray-500 text-center text-lg">
          No feedback yet. Be the first to share your experience!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
          {feedbacks.map((fb, index) => (
            <motion.div
              key={fb.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="relative bg-neutral-900/80 border border-neutral-800 rounded-2xl p-7 shadow-md transition-transform duration-500"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-3 bg-blue-600 p-2 rounded-full shadow-md">
                <Quote size={18} className="text-white" />
              </div>

              {/* Rating Stars */}
              <div className="flex items-center mb-4 space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={20}
                    className={`${
                      star <= fb.rating
                        ? "fill-blue-500 text-blue-400"
                        : "text-gray-700"
                    }`}
                  />
                ))}
              </div>

              {/* Feedback Text */}
              <p className="text-gray-300 italic mb-6 leading-relaxed text-sm sm:text-base">
                “{fb.feedback}”
              </p>

              {/* Client Info */}
              <div>
                <h3 className="text-lg font-semibold text-white tracking-wide">
                  {fb.name}
                </h3>
                <p className="text-gray-500 text-sm flex flex-wrap gap-1">
                  {fb.position && (
                    <span className="text-gray-400">{fb.position}</span>
                  )}
                  {fb.company_name && (
                    <>
                      {fb.position && <span>·</span>}
                      <span className="text-blue-400 font-medium">
                        {fb.company_name}
                      </span>
                    </>
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="text-gray-600 text-sm mt-16">
        © {new Date().getFullYear()}{" "}
        <span className="text-blue-500 font-semibold">Tech Lion</span> — Empowering Digital Growth
      </div>
    </section>
  );
}
