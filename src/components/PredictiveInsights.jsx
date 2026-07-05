function PredictiveInsights() {
  const insights = [
    "Revenue expected to grow by 18% next quarter.",
    "Churn probability increasing in SMB customers.",
    "New market opportunity detected in APAC.",
    "Operational efficiency can improve by 11%.",
  ];

  return (
    <div className="glass-card p-8 rounded-3xl">
      <h2 className="text-2xl font-bold text-cyan-400 mb-8">
        Predictive Insights
      </h2>

      <div className="space-y-5">
        {insights.map((item, index) => (
          <div
            key={index}
            className="
              border border-zinc-800
              rounded-2xl
              p-5
            "
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PredictiveInsights;