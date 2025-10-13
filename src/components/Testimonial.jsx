import React from "react";
export default function Testimonial({quote, author, role}){
  return (
    <div className="bg-[rgba(255,255,255,0.02)] border border-white/5 p-6 rounded-xl">
      <p className="text-gray-200 italic">“{quote}”</p>
      <div className="mt-4 text-sm text-gray-400">{author} — {role}</div>
    </div>
  )
}
