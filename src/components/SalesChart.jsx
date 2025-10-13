import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", sales: 3200 },
  { month: "Feb", sales: 4500 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 6100 },
  { month: "May", sales: 7400 },
  { month: "Jun", sales: 6800 },
  { month: "Jul", sales: 8900 },
  { month: "Aug", sales: 9100 },
  { month: "Sep", sales: 10200 },
  { month: "Oct", sales: 11300 },
];

export default function SalesChart() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl p-6 shadow-xl border border-white/10">
      <h2 className="text-white text-2xl font-semibold mb-4">
        Monthly Sales Overview
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="month" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#111",
              border: "1px solid #333",
              color: "#fff",
            }}
          />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ fill: "#3b82f6", r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
