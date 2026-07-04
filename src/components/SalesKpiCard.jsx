function SalesKpiCard({ title, value, growth }) {
  return (
    <div className="glass-card p-6 rounded-3xl border border-zinc-800">
      <p className="text-gray-400 text-sm uppercase mb-4">
        {title}
      </p>

      <h2 className="text-4xl font-bold text-white">
        {value}
      </h2>

      <p className="text-green-400 mt-4">
        ↑ {growth}
      </p>
    </div>
  );
}

export default SalesKpiCard;