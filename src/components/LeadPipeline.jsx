function LeadPipeline() {
  const stages = [
    {
      stage: "Prospects",
      value: "4,200",
    },
    {
      stage: "Qualified",
      value: "1,250",
    },
    {
      stage: "Proposal",
      value: "480",
    },
    {
      stage: "Converted",
      value: "160",
    },
  ];

  return (
    <div className="glass-card p-8 rounded-3xl">
      <h2 className="text-2xl font-bold mb-8">
        Lead Pipeline
      </h2>

      <div className="space-y-5">
        {stages.map((item) => (
          <div
            key={item.stage}
            className="flex justify-between border border-zinc-800 p-4 rounded-xl"
          >
            <span>{item.stage}</span>
            <span className="font-bold text-cyan-400">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeadPipeline;