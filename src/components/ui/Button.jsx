import React from "react";

export default function Button({ children, variant="primary", className="", ...props }){
  const base = "font-semibold py-2 px-4 rounded-lg transition-transform duration-200 inline-flex items-center gap-2";
  const map = {
    primary: "bg-gradient-to-r from-accent-cyan to-accent-violet text-white shadow-neon hover:scale-105",
    ghost: "bg-transparent border border-white/10 text-white hover:bg-white/5",
    outline: "border border-white/20 text-white hover:bg-white/3"
  };

  return (
    <button className={`${base} ${map[variant] || map.primary} ${className}`} {...props}>
      {children}
    </button>
  )
}
