import React from "react";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Performance",
    value: 78, // performance %
    fill: "url(#colorGradient)",
  },
];

export default function PerformanceChart() {
  return (
    <div className="w-full h-64 bg-gray-900 rounded-2xl shadow-lg p-4">
      <h3 className="text-white text-lg mb-2">Performance Overview</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="100%"
          barSize={20}
          data={data}
          startAngle={90}
          endAngle={450}
        >
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>

          <RadialBar
            minAngle={15}
            background
            clockWise
            dataKey="value"
            cornerRadius={10}
          />
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "white" }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
