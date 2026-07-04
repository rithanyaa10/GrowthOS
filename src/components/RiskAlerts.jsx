import {
  FaUsers,
  FaChartLine,
  FaBullhorn,
  FaExclamationTriangle,
} from "react-icons/fa";

function RiskAlerts() {
  const alerts = [
    {
      icon: <FaUsers />,
      title: "Churn risk in 14 accounts",
      description: "Immediate attention required",
      level: "High",
      color: "red",
    },
    {
      icon: <FaChartLine />,
      title: "Revenue dip predicted",
      description: "Next quarter projection",
      level: "High",
      color: "red",
    },
    {
      icon: <FaBullhorn />,
      title: "Marketing ROI declining in EMEA",
      description: "-18% vs last month",
      level: "Medium",
      color: "orange",
    },
  ];

  return (
    <div className="glass-card rounded-3xl border border-red-500/30 p-8 mt-10">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <FaExclamationTriangle className="text-red-400 text-3xl" />

        <h2 className="text-3xl font-bold text-red-400">
          Risk Alerts
        </h2>
      </div>

      {/* Cards */}
      <div className="grid lg:grid-cols-3 gap-6">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className="
              bg-zinc-950/60
              border border-zinc-800
              rounded-2xl
              p-6
              hover:border-red-500/50
              transition-all
              duration-300
            "
          >
            <div className="flex justify-between items-start">
              <div>
                <div
                  className="
                    h-14
                    w-14
                    rounded-2xl
                    bg-red-500/10
                    flex
                    items-center
                    justify-center
                    text-red-400
                    text-2xl
                    mb-5
                  "
                >
                  {alert.icon}
                </div>

                <h3 className="font-semibold text-lg text-white">
                  {alert.title}
                </h3>

                <p className="text-gray-400 mt-3">
                  {alert.description}
                </p>
              </div>

              <span
                className={`px-3 py-2 rounded-full text-xs font-semibold ${
                  alert.color === "red"
                    ? "bg-red-500/20 text-red-400"
                    : "bg-orange-500/20 text-orange-400"
                }`}
              >
                {alert.level}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Button */}
      <div className="flex justify-center mt-10">
        <button
          className="
            text-red-400
            hover:text-red-300
            font-semibold
            text-lg
            transition-all
          "
        >
          View Risk Forecast →
        </button>
      </div>
    </div>
  );
}

export default RiskAlerts;