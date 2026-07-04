import { FaBell } from "react-icons/fa";

function DashboardHeader() {
  return (
    <div className="flex justify-between items-center mb-10">
      <div>
        <h1 className="text-5xl font-bold">
          Executive Command Center
        </h1>

        <p className="text-gray-400 mt-2">
          Real-time overview of your business performance
        </p>
      </div>

      <div className="flex items-center gap-6">
        <button className="border border-zinc-700 px-4 py-3 rounded-xl">
          This Month
        </button>

        <FaBell className="text-2xl text-cyan-400" />

        <div className="bg-cyan-500 h-12 w-12 rounded-full flex items-center justify-center font-bold text-black">
          AM
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;