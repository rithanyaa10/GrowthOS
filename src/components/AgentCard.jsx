import { FaRobot } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function AgentCard({
  title,
  status,
  efficiency,
  insight,
  color,
  route,
  }){
  const navigate = useNavigate(); 
  
  return (
    <div
      className="
        glass-card
        rounded-3xl
        p-8
        border
        border-zinc-800
        hover:border-cyan-500
        transition-all
        duration-300
      "
    >
      <div className="flex justify-between mb-8">
        <div
          className={`h-16 w-16 rounded-2xl flex items-center justify-center ${color}`}
        >
          <FaRobot className="text-3xl text-white" />
        </div>

        <span
          className="
            bg-green-500/20
            text-green-400
            px-4
            py-2
            rounded-full
            text-sm
          "
        >
          {status}
        </span>
      </div>

      <h2 className="text-2xl font-bold mb-6">
        {title}
      </h2>

      <div className="mb-6">
        <p className="text-gray-400 text-sm">
          Efficiency Score
        </p>

        <h3 className="text-4xl font-bold text-cyan-400">
          {efficiency}
        </h3>
      </div>

      <div className="mb-8">
        <p className="text-gray-400 text-sm mb-2">
          Recent Insight
        </p>

        <p className="text-white">
          {insight}
        </p>
      </div>

      <button
        onClick={() => navigate(route)}
        className="
         w-full
         bg-cyan-500
         hover:bg-cyan-400
         text-black
         py-3
         rounded-xl
         font-bold
       "
      >
       Open Dashboard
     </button>
    </div>
  );
}

export default AgentCard;