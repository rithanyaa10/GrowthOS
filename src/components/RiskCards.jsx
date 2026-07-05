function RiskCards() {
  const risks = [
    {
      title: "Revenue Risk",
      value: "12%",
      color: "text-red-400",
    },
    {
      title: "Customer Churn",
      value: "8%",
      color: "text-orange-400",
    },
    {
      title: "Operational Risk",
      value: "5%",
      color: "text-yellow-400",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {risks.map((risk, index) => (
        <div
          key={index}
          className="glass-card p-8 rounded-3xl"
        >
          <p className="text-gray-400 mb-4">
            {risk.title}
          </p>

          <h2
            className={`text-5xl font-bold ${risk.color}`}
          >
            {risk.value}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default RiskCards;