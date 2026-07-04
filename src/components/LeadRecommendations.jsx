function LeadRecommendations() {
  const recommendations = [
    "Launch WhatsApp campaign for SMB customers",
    "Run LinkedIn outreach for enterprise leads",
    "Create AI-powered email sequences",
    "Start referral campaign in Tier-2 cities",
  ];

  return (
    <div className="glass-card p-8 rounded-3xl">
      <h2 className="text-2xl font-bold text-cyan-400 mb-8">
        AI Lead Recommendations
      </h2>

      <div className="space-y-5">
        {recommendations.map((item, index) => (
          <div
            key={index}
            className="border border-zinc-800 rounded-2xl p-5"
          >
            <p>{item}</p>

            <p className="text-gray-400 text-sm mt-2">
              Predicted conversion: High
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeadRecommendations;