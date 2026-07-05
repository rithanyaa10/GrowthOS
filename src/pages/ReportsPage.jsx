import PageLayout from "../components/PageLayout";
import {
  FaFileAlt,
  FaChartBar,
  FaDownload,
  FaGlobe,
} from "react-icons/fa";

function ReportsPage() {
  const reports = [
    {
      icon: <FaFileAlt />,
      title: "Executive Report",
      description:
        "Monthly business performance summary.",
    },
    {
      icon: <FaChartBar />,
      title: "KPI Report",
      description:
        "Revenue, growth and customer metrics.",
    },
    {
      icon: <FaGlobe />,
      title: "Competitive Report",
      description:
        "Industry trends and competitor analysis.",
    },
    {
      icon: <FaDownload />,
      title: "Growth Report",
      description:
        "Growth opportunities and recommendations.",
    },
  ];

  return (
    <PageLayout>
      <h1 className="text-5xl font-bold mb-4">
        Reports & Insights
      </h1>

      <p className="text-gray-400 mb-10">
        Executive intelligence and downloadable reports.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {reports.map((report, index) => (
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
              {report.icon}
            </div>

            <h2 className="text-2xl font-bold mb-3">
              {report.title}
            </h2>

            <p className="text-gray-400 mb-6">
              {report.description}
            </p>

            <button
              className="
                bg-cyan-500
                text-black
                px-6
                py-3
                rounded-xl
                font-bold
              "
            >
              Generate Report
            </button>
          </div>
        ))}
      </div>

      <div className="glass-card p-8 rounded-3xl">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6">
          Business Intelligence Insights
        </h2>

        <ul className="space-y-4 text-gray-300">
          <li>
            • Revenue expected to grow by 18% this quarter.
          </li>

          <li>
            • Customer acquisition costs decreased by 11%.
          </li>

          <li>
            • Enterprise segment driving majority of growth.
          </li>

          <li>
            • Expansion opportunities identified in APAC.
          </li>
        </ul>
      </div>
    </PageLayout>
  );
}

export default ReportsPage;