function AudienceSegments() {
  const segments = [
    {
      name: "Enterprise",
      value: "42%",
      color: "bg-cyan-500",
    },
    {
      name: "SMB",
      value: "35%",
      color: "bg-purple-500",
    },
    {
      name: "Startups",
      value: "23%",
      color: "bg-green-500",
    },
  ];

  return (
    <div className="glass-card p-8 rounded-3xl">
      <h2 className="text-2xl font-bold mb-8">
        Audience Segments
      </h2>

      <div className="space-y-6">
        {segments.map((segment) => (
          <div key={segment.name}>
            <div className="flex justify-between mb-2">
              <span>{segment.name}</span>
              <span>{segment.value}</span>
            </div>

            <div className="w-full bg-zinc-800 rounded-full h-3">
              <div
                className={`${segment.color} h-3 rounded-full`}
                style={{ width: segment.value }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AudienceSegments;