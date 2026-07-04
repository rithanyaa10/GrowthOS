import PageLayout from "../components/PageLayout";
import AgentCard from "../components/AgentCard";

function CommandCenterPage() {
  const agents = [
    {
      title: "Strategy Engine",
      status: "Active",
      efficiency: "94%",
      insight: "Pricing opportunity detected",
      color: "bg-purple-600",
      route: "/dashboard",
    },
    {
      title: "Marketing Engine",
      status: "Active",
      efficiency: "88%",
      insight: "Campaign ROI increased 12%",
      color: "bg-cyan-600",
      route: "/marketing",
    },
    {
      title: "Lead Generation Engine",
      status: "Active",
      efficiency: "91%",
      insight: "200 new high-value leads found",
      color: "bg-green-600",
      route: "/lead-gen",
    },
    {
      title: "Sales Engine",
      status: "Active",
      efficiency: "89%",
      insight: "Revenue projection increased",
      color: "bg-blue-600",
      route: "/sales",
    },
    {
      title: "Analytics Engine",
      status: "Active",
      efficiency: "96%",
      insight: "Market trend shift predicted",
      color: "bg-pink-600",
      route: "/analytics",
    },
    {
      title: "Customer Success Engine",
      status: "Active",
      efficiency: "92%",
      insight: "Churn probability reduced",
      color: "bg-orange-600",
      route: "/customer-success",
    },
  ];

  return (
    <PageLayout>
      <h1 className="text-5xl font-bold mb-4">
        Multi-Agent Command Center
      </h1>

      <p className="text-gray-400 mb-12">
        Monitor and orchestrate all AI business agents.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {agents.map((agent, index) => (
          <AgentCard
            key={index}
            title={agent.title}
            status={agent.status}
            efficiency={agent.efficiency}
            insight={agent.insight}
            color={agent.color}
            route={agent.route}
          />
        ))}
      </div>
    </PageLayout>
  );
}

export default CommandCenterPage;