export default function Card({ children, className="" }){
  return (
    <div className={`bg-[rgba(255,255,255,0.03)] border border-white/5 rounded-2xl p-6 shadow-neon ${className}`}>
      {children}
    </div>
  )
}
