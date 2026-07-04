import PageLayout from "../components/PageLayout";
import MarketingKpiCard from "../components/MarketingKpiCard";
import CampaignChart from "../components/CampaignChart";
import MarketingFunnel from "../components/MarketingFunnel";
import AudienceSegments from "../components/AudienceSegments";
import CampaignRecommendations from "../components/CampaignRecommendations";

function MarketingPage() {
return (
  <PageLayout>
    <h1 className="text-5xl font-bold mb-4">
      Marketing Engine
    </h1>

    <p className="text-gray-400 mb-10">
      AI-powered campaign intelligence and growth insights.
    </p>

    <div className="grid md:grid-cols-4 gap-6 mb-10">
      <MarketingKpiCard
        title="Marketing ROI"
        value="428%"
        growth="+18%"
      />

      <MarketingKpiCard
        title="Active Leads"
        value="12.4K"
        growth="+9%"
      />

      <MarketingKpiCard
        title="Pipeline Value"
        value="₹3.2Cr"
        growth="+14%"
      />

      <MarketingKpiCard
        title="Cost Per Lead"
        value="₹214"
        growth="-8%"
      />
    </div>

    <div className="grid lg:grid-cols-2 gap-8">
      <MarketingFunnel />
      <CampaignChart />
    </div>

    <div className="grid lg:grid-cols-2 gap-8 mt-8">
      <AudienceSegments />
      <CampaignRecommendations />
    </div>
  </PageLayout>
);
}

export default MarketingPage;