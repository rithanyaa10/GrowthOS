import PageLayout from "../components/PageLayout";
import {
  FaGoogle,
  FaChartBar,
  FaFacebook,
  FaDatabase,
  FaFileExcel,
  FaPlug,
} from "react-icons/fa";

function IntegrationsPage() {
  const integrations = [
    {
      icon: <FaGoogle />,
      name: "Google Analytics",
      status: "Connected",
    },
    {
      icon: <FaFacebook />,
      name: "Social Media",
      status: "Connected",
    },
    {
      icon: <FaDatabase />,
      name: "CRM System",
      status: "Connected",
    },
    {
      icon: <FaChartBar />,
      name: "Business Intelligence",
      status: "Pending",
    },
    {
      icon: <FaFileExcel />,
      name: "CSV / Excel Upload",
      status: "Available",
    },
    {
      icon: <FaPlug />,
      name: "API Integrations",
      status: "Ready",
    },
  ];

  return (
    <PageLayout>
      <h1 className="text-5xl font-bold mb-4">
        Integrations & Data Hub
      </h1>

      <p className="text-gray-400 mb-10">
        Connect all your business systems and data sources.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {integrations.map((item, index) => (
          <div
            key={index}
            className="
              glass-card
              p-8
              rounded-3xl
              border
              border-zinc-800
              hover:border-cyan-500
              transition-all
            "
          >
            <div className="text-cyan-400 text-4xl mb-6">
              {item.icon}
            </div>

            <h2 className="text-2xl font-bold mb-4">
              {item.name}
            </h2>

            <span
              className={`
                px-4 py-2 rounded-full text-sm
                ${
                  item.status === "Connected"
                    ? "bg-green-500/20 text-green-400"
                    : item.status === "Pending"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-cyan-500/20 text-cyan-400"
                }
              `}
            >
              {item.status}
            </span>

            <button
              className="
                mt-8
                w-full
                bg-cyan-500
                text-black
                py-3
                rounded-xl
                font-bold
              "
            >
              Manage Integration
            </button>
          </div>
        ))}
      </div>

      <div className="glass-card p-8 rounded-3xl mt-10">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6">
          Connected Data Sources
        </h2>

        <ul className="space-y-4 text-gray-300">
          <li>• Google Analytics</li>
          <li>• CRM Database</li>
          <li>• Customer Transactions</li>
          <li>• Marketing Campaign Data</li>
          <li>• Sales Pipeline Data</li>
        </ul>
      </div>
    </PageLayout>
  );
}

export default IntegrationsPage;