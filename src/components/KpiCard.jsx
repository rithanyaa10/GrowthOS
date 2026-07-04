function KpiCard({ title, value, growth }) {
  return (
    <div className="glass-card p-8 rounded-3xl border border-zinc-800 hover:border-cyan-500 transition-all">
      <p className="text-gray-400 uppercase text-sm mb-6">
        {title}
      </p>

      <h2 className="text-5xl font-bold mb-6">
        {value}
      </h2>

      <p className="text-green-400 font-semibold">
        ↑ {growth} vs last month
      </p>
    </div>
  );
}

export default KpiCard;