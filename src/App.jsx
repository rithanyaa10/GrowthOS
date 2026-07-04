import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import OnboardingPage from "./pages/OnboardingPage";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import CommandCenterPage from "./pages/CommandCenterPage";
import MarketingPage from "./pages/MarketingPage";
import LeadGenPage from "./pages/LeadGenPage";
import SalesPage from "./pages/SalesPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import CustomerSuccessPage from "./pages/CustomerSuccessPage";
import CustomerProfilePage from "./pages/CustomerProfilePage";
import CopilotPage from "./pages/CopilotPage";
import RiskPage from "./pages/RiskPage";
import ReportsPage from "./pages/ReportsPage";
import IntegrationsPage from "./pages/IntegrationsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/command-center" element={<CommandCenterPage />} />
        <Route path="/marketing" element={<MarketingPage />} />
        <Route path="/lead-gen" element={<LeadGenPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/customer-success" element={<CustomerSuccessPage />} />
        <Route path="/customer-profile" element={<CustomerProfilePage />} />
        <Route path="/copilot" element={<CopilotPage />} />
        <Route path="/risk" element={<RiskPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;