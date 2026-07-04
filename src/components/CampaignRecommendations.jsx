function CampaignRecommendations() {
  const recommendations = [
    "Launch WhatsApp campaign in South India",
    "Increase LinkedIn Ads budget by 15%",
    "Start AI-powered email nurture campaign",
    "Retarget website visitors with Meta Ads",
  ];

  return (
    <div className="glass-card p-8 rounded-3xl">
      <h2 className="text-2xl font-bold text-cyan-400 mb-8">
        AI Campaign Recommendations
      </h2>

      <div className="space-y-5">
        {recommendations.map((item, index) => (
          <div
            key={index}
            className="
              border
              border-zinc-800
              rounded-2xl
              p-5
              hover:border-cyan-500
              transition-all
            "
          >
            <p>{item}</p>

            <p className="text-gray-400 text-sm mt-2">
              Predicted ROI: High
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CampaignRecommendations;