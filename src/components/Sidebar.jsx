import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-zinc-950 border-r border-zinc-800 min-h-screen p-6 text-white fixed">
      <h1 className="text-3xl font-bold text-cyan-400 mb-10">
        THRIVE
      </h1>

      <div className="space-y-4">
        <Link to="/dashboard" className="block hover:text-cyan-400">
          Dashboard
        </Link>

        <Link to="/command-center" className="block hover:text-cyan-400">
          Command Center
        </Link>

        <Link to="/marketing" className="block hover:text-cyan-400">
          Marketing
        </Link>

        <Link to="/lead-gen" className="block hover:text-cyan-400">
          Lead Generation
        </Link>

        <Link to="/sales" className="block hover:text-cyan-400">
          Sales
        </Link>

        <Link to="/analytics" className="block hover:text-cyan-400">
          Analytics
        </Link>

        <Link to="/customer-success" className="block hover:text-cyan-400">
          Customer Success
        </Link>

        <Link to="/customer-profile" className="block hover:text-cyan-400">
          Customer 360
        </Link>

        <Link to="/copilot" className="block hover:text-cyan-400">
          AI Copilot
        </Link>

        <Link to="/risk" className="block hover:text-cyan-400">
          Risk Forecast
        </Link>

        <Link to="/reports" className="block hover:text-cyan-400">
          Reports
        </Link>

        <Link to="/integrations" className="block hover:text-cyan-400">
          Integrations
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;