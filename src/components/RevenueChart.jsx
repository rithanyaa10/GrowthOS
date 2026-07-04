import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";

const data = [
  { month: "Jan", revenue: 1.0 },
  { month: "Feb", revenue: 1.6 },
  { month: "Mar", revenue: 2.3 },
  { month: "Apr", revenue: 1.8 },
  { month: "May", revenue: 2.3 },
  { month: "Jun", revenue: 2.9 },
];

function RevenueChart() {
  return (
    <div className="glass-card p-8 rounded-3xl h-full">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold">
            Revenue Forecast
          </h2>

          <p className="text-gray-400">
            Projected revenue over the next 6 months
          </p>
        </div>

        <button className="border border-zinc-700 px-4 py-2 rounded-xl">
          6 Months
        </button>
      </div>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id="colorRevenue"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#22d3ee"
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor="#22d3ee"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#27272a"
            />

            <XAxis dataKey="month" stroke="#a1a1aa" />

            <YAxis stroke="#a1a1aa" />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#22d3ee"
              fillOpacity={1}
              fill="url(#colorRevenue)"
              strokeWidth={4}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 mt-8 pt-8 border-t border-zinc-800">
        <div>
          <p className="text-gray-400 text-sm">
            Current Month
          </p>

          <h3 className="text-3xl font-bold text-cyan-400">
            ₹2.4Cr
          </h3>
        </div>

        <div>
          <p className="text-gray-400 text-sm">
            Projected
          </p>

          <h3 className="text-3xl font-bold">
            ₹2.7Cr
          </h3>
        </div>

        <div>
          <p className="text-gray-400 text-sm">
            Growth Projection
          </p>

          <h3 className="text-3xl font-bold text-green-400">
            +12.8%
          </h3>
        </div>
      </div>
    </div>
  );
}

export default RevenueChart;