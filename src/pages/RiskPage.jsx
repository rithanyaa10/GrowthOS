import PageLayout from "../components/PageLayout";
import RiskCards from "../components/RiskCards";
import ForecastChart from "../components/ForecastChart";
import PredictiveInsights from "../components/PredictiveInsights";

function RiskPage() {
  return (
    <PageLayout>
      <h1 className="text-5xl font-bold mb-4">
        Risk & Forecast Dashboard
      </h1>

      <p className="text-gray-400 mb-10">
        Predictive intelligence and business risk monitoring.
      </p>

      <RiskCards />

      <div className="grid lg:grid-cols-2 gap-8 mt-10">
        <ForecastChart />
        <PredictiveInsights />
      </div>

      <div className="glass-card p-8 rounded-3xl mt-8">
        <h2 className="text-2xl font-bold text-red-400 mb-8">
          AI Alerts
        </h2>

        <ul className="space-y-4 text-gray-300">
          <li>
            • Customer churn probability increased by 4%.
          </li>

          <li>
            • Revenue target likely to be exceeded next quarter.
          </li>

          <li>
            • Competitor activity detected in enterprise market.
          </li>

          <li>
            • Marketing ROI expected to improve by 12%.
          </li>
        </ul>
      </div>
    </PageLayout>
  );
}

export default RiskPage;