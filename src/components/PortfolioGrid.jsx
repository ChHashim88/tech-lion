import React from "react";
export default function PortfolioGrid({items}){
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((it, i) => (
        <div key={i} className="rounded-xl overflow-hidden transform hover:scale-105 transition">
          <div className="h-48 bg-gradient-to-br from-black/20 to-white/2 flex items-center justify-center text-gray-400">{it.title}</div>
          <div className="p-4 bg-[rgba(0,0,0,0.3)] border-t border-white/5">
            <h5 className="font-semibold text-white">{it.title}</h5>
            <p className="text-sm text-gray-300 mt-2">{it.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
