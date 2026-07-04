import PageLayout from "../components/PageLayout";
import KpiCard from "../components/KpiCard";
import RevenueChart from "../components/RevenueChart";
import DashboardHeader from "../components/DashboardHeader";
import AIRecommendations from "../components/AIRecommendations";
import RiskAlerts from "../components/RiskAlerts";

function DashboardPage() {
  return (
    <PageLayout>
      <DashboardHeader />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <KpiCard
          title="Business Health"
          value="82%"
          growth="+5.4%"
        />

        <KpiCard
          title="Revenue"
          value="₹2.4Cr"
          growth="+12%"
        />

        <KpiCard
          title="Growth"
          value="24%"
          growth="+8%"
        />

        <KpiCard
          title="Customers"
          value="14.2K"
          growth="+15%"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
       <div className="lg:col-span-2">
        <RevenueChart />
       </div>

       <div>
        <AIRecommendations />
       </div>
     </div>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <div className="glass-card p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">
            AI Recommendations
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li>• Increase SEM spend by 15%</li>
            <li>• Expand into APAC market</li>
            <li>• Launch WhatsApp campaign</li>
            <li>• Reduce churn in Tier-1 accounts</li>
          </ul>
        </div>

        <div className="glass-card p-6 rounded-2xl border border-red-500">
          <h2 className="text-2xl font-bold text-red-400 mb-4">
            Risk Alerts
          </h2>

          <ul className="space-y-3 text-gray-300">
            <li>• Churn risk in 14 accounts</li>
            <li>• Revenue dip predicted next quarter</li>
            <li>• Marketing ROI declining in EMEA</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}

export default DashboardPage;