function RetentionRecommendations() {
  const recommendations = [
    "Offer loyalty discount to at-risk customers",
    "Schedule success calls with enterprise accounts",
    "Launch onboarding email campaign",
    "Provide premium support for top customers",
  ];

  return (
    <div className="glass-card p-8 rounded-3xl">
      <h2 className="text-2xl font-bold text-cyan-400 mb-8">
        Retention Recommendations
      </h2>

      <div className="space-y-5">
        {recommendations.map((item, index) => (
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

export default RetentionRecommendations;