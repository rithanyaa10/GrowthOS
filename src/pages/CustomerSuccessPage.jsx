import PageLayout from "../components/PageLayout";
import CustomerKpiCard from "../components/CustomerKpiCard";
import CustomerJourney from "../components/CustomerJourney";
import RetentionRecommendations from "../components/RetentionRecommendations";
import AIChatPanel from "../components/AIChatPanel";

function CustomerSuccessPage() {
  return (
    <PageLayout>
      <h1 className="text-5xl font-bold mb-4">
        Customer Success Engine
      </h1>

      <p className="text-gray-400 mb-10">
        Customer intelligence and retention optimization.
      </p>

      <div className="grid md:grid-cols-4 gap-6 mb-10">
        <CustomerKpiCard
          title="Health Score"
          value="89%"
          growth="+6%"
        />

        <CustomerKpiCard
          title="Active Customers"
          value="14.2K"
          growth="+12%"
        />

        <CustomerKpiCard
          title="Churn Risk"
          value="8%"
          growth="-4%"
        />

        <CustomerKpiCard
          title="Open Tickets"
          value="42"
          growth="-12%"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <CustomerJourney />
        <RetentionRecommendations />
      </div>

      <div className="mt-8">
        <AIChatPanel />
      </div>
    </PageLayout>
  );
}

export default CustomerSuccessPage;