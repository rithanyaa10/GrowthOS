import PageLayout from "../components/PageLayout";
import AnalyticsKpiCard from "../components/AnalyticsKpiCard";
import TrendChart from "../components/TrendChart";
import ExecutiveSummary from "../components/ExecutiveSummary";

function AnalyticsPage() {
  return (
    <PageLayout>
      <h1 className="text-5xl font-bold mb-4">
        Analytics Engine
      </h1>

      <p className="text-gray-400 mb-10">
        Business intelligence and predictive analytics.
      </p>

      <div className="grid md:grid-cols-4 gap-6 mb-10">
        <AnalyticsKpiCard
          title="Business Health"
          value="82%"
          growth="+5%"
        />

        <AnalyticsKpiCard
          title="Growth Score"
          value="91%"
          growth="+12%"
        />

        <AnalyticsKpiCard
          title="Revenue Opportunity"
          value="₹4.8Cr"
          growth="+18%"
        />

        <AnalyticsKpiCard
          title="Market Readiness"
          value="88%"
          growth="+9%"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <TrendChart />
        <ExecutiveSummary />
      </div>
    </PageLayout>
  );
}

export default AnalyticsPage;