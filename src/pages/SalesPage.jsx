import PageLayout from "../components/PageLayout";
import SalesKpiCard from "../components/SalesKpiCard";
import RevenueChart from "../components/RevenueChart";
import SalesPipeline from "../components/SalesPipeline";
import SalesRecommendations from "../components/SalesRecommendations";

function SalesPage() {
  return (
    <PageLayout>
      <h1 className="text-5xl font-bold mb-4">
        Sales Engine
      </h1>

      <p className="text-gray-400 mb-10">
        AI-powered revenue optimization and sales intelligence.
      </p>

      <div className="grid md:grid-cols-4 gap-6 mb-10">
        <SalesKpiCard
          title="Revenue"
          value="₹3.8Cr"
          growth="+22%"
        />

        <SalesKpiCard
          title="Active Deals"
          value="248"
          growth="+12%"
        />

        <SalesKpiCard
          title="Win Rate"
          value="34%"
          growth="+6%"
        />

        <SalesKpiCard
          title="Forecast"
          value="₹5.1Cr"
          growth="+18%"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <RevenueChart />
        <SalesPipeline />
      </div>

      <div className="mt-8">
        <SalesRecommendations />
      </div>
    </PageLayout>
  );
}

export default SalesPage;