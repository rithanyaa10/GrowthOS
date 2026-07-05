import PageLayout from "../components/PageLayout";
import { useState } from "react";

function CopilotPage() {
  const [messages, setMessages] = useState([
    {
      sender: "AI",
      text: "Hello! I'm your THRIVE AI Copilot. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");

  const suggestedPrompts = [
    "How can I increase revenue?",
    "Generate marketing strategy",
    "Show customer churn risks",
    "Summarize business performance",
  ];

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([
      ...messages,
      {
        sender: "You",
        text: input,
      },
      {
        sender: "AI",
        text: "This response will be powered by Gemini AI in the next phase.",
      },
    ]);

    setInput("");
  };

  return (
    <PageLayout>
      <h1 className="text-5xl font-bold mb-4">
        AI Copilot Assistant
      </h1>

      <p className="text-gray-400 mb-10">
        Conversational business intelligence and executive support.
      </p>

      {/* Suggested Prompts */}
      <div className="glass-card p-8 rounded-3xl mb-8">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6">
          Suggested Prompts
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {suggestedPrompts.map((prompt, index) => (
            <button
              key={index}
              onClick={() => setInput(prompt)}
              className="
                border border-zinc-800
                rounded-2xl
                p-4
                text-left
                hover:border-cyan-500
                transition-all
              "
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Panel */}
      <div className="glass-card p-8 rounded-3xl">
        <h2 className="text-2xl font-bold mb-8">
          Executive Chat
        </h2>

        <div className="h-[350px] overflow-y-auto space-y-4 mb-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`
                p-4 rounded-2xl max-w-[80%]
                ${
                  message.sender === "You"
                    ? "bg-cyan-500 text-black ml-auto"
                    : "bg-zinc-900"
                }
              `}
            >
              <p className="font-semibold mb-1">
                {message.sender}
              </p>

              <p>{message.text}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            placeholder="Ask your AI Copilot..."
            className="
              flex-1
              bg-zinc-900
              border border-zinc-700
              rounded-xl
              p-4
              text-white
            "
          />

          <button
            onClick={sendMessage}
            className="
              bg-cyan-500
              text-black
              px-8
              rounded-xl
              font-bold
            "
          >
            Send
          </button>
        </div>
      </div>

      {/* Business Insights */}
      <div className="glass-card p-8 rounded-3xl mt-8">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6">
          Business Insights
        </h2>

        <ul className="space-y-4 text-gray-300">
          <li>• Revenue expected to increase by 18%.</li>
          <li>• Marketing ROI improving in APAC region.</li>
          <li>• Customer churn reduced by 11%.</li>
          <li>• New expansion opportunity detected.</li>
        </ul>
      </div>
    </PageLayout>
  );
}

export default CopilotPage;