import { useNavigate } from "react-router-dom";

function OnboardingPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-5xl font-bold mb-6">
        Business Onboarding
      </h1>

      <button
        onClick={() => navigate("/landing")}
        className="bg-cyan-500 text-black px-8 py-4 rounded-xl font-bold"
      >
        Enter Control Suite
      </button>
    </div>
  );
}

export default OnboardingPage;