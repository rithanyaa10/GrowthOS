function AIChatPanel() {
  return (
    <div className="glass-card p-8 rounded-3xl">
      <h2 className="text-2xl font-bold text-cyan-400 mb-6">
        AI Customer Assistant
      </h2>

      <div className="space-y-4 mb-6">
        <div className="bg-zinc-900 p-4 rounded-xl">
          Customer churn risk increased by 12%.
        </div>

        <div className="bg-cyan-500/20 p-4 rounded-xl">
          Recommended action:
          Contact high-value customers this week.
        </div>
      </div>

      <input
        type="text"
        placeholder="Ask the AI assistant..."
        className="
          w-full
          bg-zinc-900
          border
          border-zinc-700
          rounded-xl
          p-4
          text-white
        "
      />
    </div>
  );
}

export default AIChatPanel;