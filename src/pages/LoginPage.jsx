import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-4">
      <div className="glass-card w-full max-w-md p-10 rounded-2xl">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-cyan-400 neon-text-cyan">
            THRIVE
          </h1>

          <p className="text-gray-400 uppercase tracking-[5px] mt-3 text-sm">
            AI Operating System
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="text-gray-400 text-sm block mb-2">
              Executive Email
            </label>

            <input
              type="email"
              placeholder="name@organization.com"
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-4 text-white outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="text-gray-400 text-sm block mb-2">
              Access Key
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-4 text-white outline-none focus:border-cyan-400"
            />
          </div>

          <button
            onClick={() => navigate("/onboarding")}
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-xl transition-all"
          >
            INITIALIZE SESSION
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;