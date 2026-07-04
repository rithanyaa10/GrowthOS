function AIRecommendations() {
  const recommendations = [
    "Increase SEM spend by 15%",
    "Expand into APAC market",
    "Launch WhatsApp campaign",
    "Reduce churn in Tier-1 accounts",
  ];

  return (
    <div className="glass-card p-8 rounded-3xl h-full">
      <h2 className="text-3xl font-bold mb-8 text-cyan-400">
        AI Recommendations
      </h2>

      <div className="space-y-5">
        {recommendations.map((item, index) => (
          <div
            key={index}
            className="border border-zinc-800 rounded-2xl p-5 hover:border-cyan-500 transition-all"
          >
            <h3 className="font-semibold">
              {item}
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              High ROI potential identified
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AIRecommendations;