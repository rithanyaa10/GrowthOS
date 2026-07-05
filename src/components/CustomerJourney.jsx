function CustomerJourney() {
  const stages = [
    "Lead",
    "Onboarding",
    "Active",
    "Power User",
    "Advocate",
  ];

  return (
    <div className="glass-card p-8 rounded-3xl">
      <h2 className="text-2xl font-bold mb-8">
        Customer Journey
      </h2>

      <div className="space-y-5">
        {stages.map((stage, index) => (
          <div
            key={index}
            className="
              border border-zinc-800
              rounded-xl
              p-4
              flex
              justify-between
            "
          >
            <span>{stage}</span>
            <span className="text-cyan-400">
              Stage {index + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerJourney;