import React from "react";
import Button from "./ui/Button";

export default function PricingCard({title, price, features, highlighted}){
  return (
    <div className={`rounded-2xl p-6 ${highlighted ? "bg-gradient-to-br from-accent-cyan to-accent-violet text-black" : "bg-[rgba(255,255,255,0.02)] text-white"} border border-white/5`}>
      <h4 className="text-xl font-bold">{title}</h4>
      <div className="text-3xl font-extrabold my-4">{price}</div>
      <ul className="space-y-2 text-sm mb-6">
        {features.map((f,i)=><li key={i} className="flex items-center gap-2">✔ {f}</li>)}
      </ul>
      <Button variant={highlighted ? "ghost" : "primary"}>{highlighted ? "Start Now" : "Choose Plan"}</Button>
    </div>
  )
}
