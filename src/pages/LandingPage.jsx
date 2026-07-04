import PageLayout from "../components/PageLayout";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <h1 className="text-6xl font-bold mb-8">
          THRIVE AI Operating System
        </h1>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-cyan-500 text-black px-8 py-4 rounded-xl font-bold"
        >
          Initiate Protocol
        </button>
      </div>
    </PageLayout>
  );
}

export default LandingPage;