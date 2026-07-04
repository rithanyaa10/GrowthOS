function ExecutiveSummary() {
  const insights = [
    "Revenue growth projected to increase by 18%.",
    "Customer acquisition cost reduced by 11%.",
    "Enterprise segment showing highest ROI.",
    "Market expansion opportunity identified in APAC.",
  ];

  return (
    <div className="glass-card p-8 rounded-3xl">
      <h2 className="text-2xl font-bold text-cyan-400 mb-8">
        Executive Summary
      </h2>

      <div className="space-y-5">
        {insights.map((item, index) => (
          <div
            key={index}
            className="border border-zinc-800 rounded-2xl p-5"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExecutiveSummary;