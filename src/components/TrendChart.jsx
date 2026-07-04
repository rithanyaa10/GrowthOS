import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", growth: 15 },
  { month: "Feb", growth: 18 },
  { month: "Mar", growth: 25 },
  { month: "Apr", growth: 21 },
  { month: "May", growth: 30 },
  { month: "Jun", growth: 36 },
];

function TrendChart() {
  return (
    <div className="glass-card p-8 rounded-3xl">
      <h2 className="text-2xl font-bold mb-8">
        Growth Trend Analysis
      </h2>

      <div style={{ width: "100%", height: 320 }}>
        <ResponsiveContainer>
          <AreaChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#27272a"
            />

            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="growth"
              stroke="#22d3ee"
              fill="#22d3ee33"
              strokeWidth={4}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default TrendChart;