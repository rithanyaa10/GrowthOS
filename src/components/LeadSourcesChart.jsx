import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "LinkedIn", value: 35 },
  { name: "Website", value: 25 },
  { name: "Email", value: 20 },
  { name: "Referrals", value: 20 },
];

const COLORS = [
  "#22d3ee",
  "#8b5cf6",
  "#10b981",
  "#f59e0b",
];

function LeadSourcesChart() {
  return (
    <div className="glass-card p-8 rounded-3xl">
      <h2 className="text-2xl font-bold mb-8">
        Lead Sources
      </h2>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={100}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default LeadSourcesChart;