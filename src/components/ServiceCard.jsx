import React from "react";
import Card from "./ui/Card";

export default function ServiceCard({icon, title, desc}){
  return (
    <Card className="hover:scale-105 transform transition">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-violet flex items-center justify-center text-black font-bold">{icon}</div>
        <div>
          <h3 className="font-semibold text-white">{title}</h3>
          <p className="text-sm text-gray-300 mt-2">{desc}</p>
        </div>
      </div>
    </Card>
  )
}
