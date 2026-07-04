function MarketingFunnel() {
  const stages = [
    {
      name: "Awareness",
      value: "1.2M",
      width: "100%",
    },
    {
      name: "Engaged",
      value: "220K",
      width: "80%",
    },
    {
      name: "Leads",
      value: "45K",
      width: "60%",
    },
    {
      name: "Customers",
      value: "14K",
      width: "40%",
    },
  ];

  return (
    <div className="glass-card p-8 rounded-3xl">
      <h2 className="text-2xl font-bold mb-8">
        Marketing Funnel
      </h2>

      <div className="space-y-5">
        {stages.map((stage) => (
          <div
            key={stage.name}
            className="bg-cyan-500/20 rounded-xl p-5"
            style={{ width: stage.width }}
          >
            <div className="flex justify-between">
              <span>{stage.name}</span>
              <span>{stage.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketingFunnel;