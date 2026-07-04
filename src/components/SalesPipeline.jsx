function SalesPipeline() {
  const deals = [
    {
      stage: "Qualified",
      value: "₹25L",
    },
    {
      stage: "Proposal",
      value: "₹42L",
    },
    {
      stage: "Negotiation",
      value: "₹18L",
    },
    {
      stage: "Closed Won",
      value: "₹12L",
    },
  ];

  return (
    <div className="glass-card p-8 rounded-3xl">
      <h2 className="text-2xl font-bold mb-8">
        Opportunities Pipeline
      </h2>

      <div className="space-y-5">
        {deals.map((deal) => (
          <div
            key={deal.stage}
            className="flex justify-between border border-zinc-800 rounded-xl p-4"
          >
            <span>{deal.stage}</span>

            <span className="text-cyan-400 font-bold">
              {deal.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SalesPipeline;