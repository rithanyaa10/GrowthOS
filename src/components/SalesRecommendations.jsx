function SalesRecommendations() {
  const recommendations = [
    "Prioritize enterprise opportunities above ₹10L",
    "Follow up with 28 inactive prospects",
    "Upsell premium plans to existing customers",
    "Create pricing offers for SMB segment",
  ];

  return (
    <div className="glass-card p-8 rounded-3xl">
      <h2 className="text-2xl font-bold text-cyan-400 mb-8">
        AI Sales Recommendations
      </h2>

      <div className="space-y-5">
        {recommendations.map((item, index) => (
          <div
            key={index}
            className="border border-zinc-800 rounded-2xl p-5"
          >
            <p>{item}</p>

            <p className="text-gray-400 text-sm mt-2">
              Expected revenue impact: High
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SalesRecommendations;