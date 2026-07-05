import PageLayout from "../components/PageLayout";

function CustomerProfilePage() {
  const customers = [
    {
      name: "Enterprise Customers",
      value: "42%",
    },
    {
      name: "SMB Customers",
      value: "35%",
    },
    {
      name: "Startup Customers",
      value: "23%",
    },
  ];

  const timeline = [
    "Purchased Premium Plan",
    "Attended Webinar",
    "Opened Marketing Email",
    "Raised Support Ticket",
  ];

  return (
    <PageLayout>
      <h1 className="text-5xl font-bold mb-4">
        Customer 360 Dashboard
      </h1>

      <p className="text-gray-400 mb-10">
        Unified customer intelligence and engagement analytics.
      </p>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="glass-card p-8 rounded-3xl">
          <p className="text-gray-400 mb-3">
            Customer Lifetime Value
          </p>

          <h2 className="text-5xl font-bold text-cyan-400">
            ₹42K
          </h2>
        </div>

        <div className="glass-card p-8 rounded-3xl">
          <p className="text-gray-400 mb-3">
            Engagement Score
          </p>

          <h2 className="text-5xl font-bold text-green-400">
            89%
          </h2>
        </div>

        <div className="glass-card p-8 rounded-3xl">
          <p className="text-gray-400 mb-3">
            Retention Rate
          </p>

          <h2 className="text-5xl font-bold text-purple-400">
            93%
          </h2>
        </div>
      </div>

      {/* Segments + Timeline */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="glass-card p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-8">
            Customer Segments
          </h2>

          <div className="space-y-6">
            {customers.map((customer) => (
              <div key={customer.name}>
                <div className="flex justify-between mb-2">
                  <span>{customer.name}</span>
                  <span>{customer.value}</span>
                </div>

                <div className="w-full bg-zinc-800 h-3 rounded-full">
                  <div
                    className="bg-cyan-500 h-3 rounded-full"
                    style={{
                      width: customer.value,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-8">
            Interaction Timeline
          </h2>

          <div className="space-y-5">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="
                  border
                  border-zinc-800
                  rounded-2xl
                  p-5
                "
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Intelligence */}
      <div className="glass-card p-8 rounded-3xl mt-8">
        <h2 className="text-2xl font-bold text-cyan-400 mb-8">
          Customer Intelligence Insights
        </h2>

        <ul className="space-y-4 text-gray-300">
          <li>
            • Enterprise customers have 2.8x higher LTV.
          </li>

          <li>
            • Customers attending webinars show 32% better retention.
          </li>

          <li>
            • Email engagement predicts upsell potential.
          </li>

          <li>
            • Churn risk reduced by 11% this quarter.
          </li>
        </ul>
      </div>
    </PageLayout>
  );
}

export default CustomerProfilePage;