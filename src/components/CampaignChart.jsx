import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    month: "Jan",
    roi: 20,
  },
  {
    month: "Feb",
    roi: 35,
  },
  {
    month: "Mar",
    roi: 50,
  },
  {
    month: "Apr",
    roi: 45,
  },
  {
    month: "May",
    roi: 70,
  },
];

function CampaignChart() {
  return (
    <div className="glass-card p-8 rounded-3xl">
      <h2 className="text-2xl font-bold mb-8">
        Campaign Performance
      </h2>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />

            <Bar
              dataKey="roi"
              fill="#22d3ee"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default CampaignChart;