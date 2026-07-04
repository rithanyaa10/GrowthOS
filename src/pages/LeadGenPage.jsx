import PageLayout from "../components/PageLayout";
import LeadKpiCard from "../components/LeadKpiCard";
import LeadSourcesChart from "../components/LeadSourcesChart";
import LeadPipeline from "../components/LeadPipeline";
import LeadRecommendations from "../components/LeadRecommendations";

function LeadGenPage() {
  return (
    <PageLayout>
      <h1 className="text-5xl font-bold mb-4">
        Lead Generation Engine
      </h1>

      <p className="text-gray-400 mb-10">
        AI-powered lead acquisition and conversion intelligence.
      </p>

      <div className="grid md:grid-cols-4 gap-6 mb-10">
        <LeadKpiCard
          title="Total Leads"
          value="4.2K"
          growth="+16%"
        />

        <LeadKpiCard
          title="Qualified Leads"
          value="1.2K"
          growth="+12%"
        />

        <LeadKpiCard
          title="Conversion Rate"
          value="18%"
          growth="+5%"
        />

        <LeadKpiCard
          title="Pipeline Value"
          value="₹1.8Cr"
          growth="+14%"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <LeadSourcesChart />
        <LeadPipeline />
      </div>

      <div className="mt-8">
        <LeadRecommendations />
      </div>
    </PageLayout>
  );
}

export default LeadGenPage;