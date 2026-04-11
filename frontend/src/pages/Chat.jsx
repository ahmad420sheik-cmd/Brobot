import { useState, useRef, useEffect } from "react";

// to display color bubbles
function ColorRow({ label, color }) {
  return (
    <div className="flex items-center justify-between mb-4">

      <div className="flex items-center gap-3">
        <div
          className="w-8 h-8 rounded-full border"
          style={{ background: color }}
        ></div>
        <span className="text-sm">{label}</span>
      </div>

      <span className="text-xs bg-gray-100 px-2 py-1 rounded">
        {color}
      </span>

    </div>
  );
}

export default function Chat() {
  const [activeTab, setActiveTab] = useState("chat");

  const [bot, setBot] = useState({
    name: "Mandary",
    language: "IS",
  });

  const [messages, setMessages] = useState([
    { text: "Hello 👋", type: "bot" },
  ]);

  const [input, setInput] = useState("");
  const endRef = useRef(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { text: input, type: "user" },
      { text: `Hi, I am ${bot.name}.`, type: "bot" },
    ]);

    setInput("");
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 🔹 TAB CONTENT SWITCHER
  const renderPanel = () => {
    switch (activeTab) {
        case "bot":
        return (
            <div className="bg-white rounded-2xl shadow p-6 w-[400px]">

            <h2 className="text-lg font-semibold mb-4">Your bot</h2>

            {/* PROFILE */}
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>

                <input
                className="border px-3 py-2 rounded-lg w-full"
                value={bot.name}
                onChange={(e) =>
                    setBot({ ...bot, name: e.target.value })
                }
                />
            </div>

            {/* CONFIG */}
            <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center">
                <span>Activate</span>
                <input type="checkbox" />
                </div>

                <div className="flex justify-between items-center">
                <span>Lead capture</span>
                <input type="checkbox" defaultChecked />
                </div>
            </div>

            {/* LOCATION */}
            <div className="mt-6 space-y-3 text-sm">

                <div>
                <label className="block text-gray-500 mb-1">
                    Bot's base language
                </label>
                <select
                    className="w-full border rounded-lg px-3 py-2"
                    value={bot.language}
                    onChange={(e) =>
                    setBot({ ...bot, language: e.target.value })
                    }
                >
                    <option value="IS">IS</option>
                    <option value="EN">EN</option>
                </select>
                </div>

                <div>
                <label className="block text-gray-500 mb-1">
                    Time zone
                </label>
                <select className="w-full border rounded-lg px-3 py-2">
                    <option>Indian/Mauritius</option>
                </select>
                </div>

            </div>

            </div>
        );

      case "chat":
        return (
          <div className="bg-white rounded-2xl shadow p-6 w-[400px] space-y-4">
            <h2 className="text-lg font-semibold">Chat settings</h2>

            <div className="flex justify-between">
              <span>Header</span>
              <input type="checkbox" defaultChecked />
            </div>

            <div className="flex justify-between">
              <span>Chat bubble</span>
              <input type="checkbox" />
            </div>

            <div className="flex justify-between">
              <span>Welcome message</span>
              <input type="checkbox" />
            </div>
          </div>
        );

      // case "colors":
        return (
          <div className="flex gap-10 items-start">

            {/* RIGHT → COLORS PANEL */}
            <div className="bg-white rounded-2xl shadow border p-6 w-[400px]">

              <h2 className="font-semibold text-lg flex items-center gap-2 mb-6">
                🎨 Colors
              </h2>

              {/* HEADER */}
              <div className="mb-6">
                <p className="text-xs text-gray-400 mb-3">HEADER</p>

                <ColorRow label="Background" color="#FFFFFF" />
                <ColorRow label="Text" color="#1F2937" />
              </div>

              {/* CHAT */}
              <div className="mb-6 border-t pt-6">
                <p className="text-xs text-gray-400 mb-3">CHAT</p>

                <ColorRow label="Background" color="#FFFFFF" />
                <ColorRow label="Text" color="#000000" />
              </div>

              {/* CUSTOMER */}
              <div className="border-t pt-6">
                <p className="text-xs text-gray-400 mb-3">CUSTOMER</p>

                <ColorRow label="Background" color="#111111" />
                <ColorRow label="Text" color="#FFFFFF" />
              </div>

            </div>

          </div>
        );

      case "colors":
        return (
          <div className="bg-white rounded-2xl shadow border p-6 w-[400px]">

            <h2 className="font-semibold text-lg flex items-center gap-2 mb-6">
              🎨 Colors
            </h2>

            {/* HEADER */}
            <div className="mb-6">
              <p className="text-xs text-gray-400 mb-3">HEADER</p>

              <ColorRow label="Background" color="#FFFFFF" />
              <ColorRow label="Text" color="#1F2937" />
            </div>

            {/* CHAT */}
            <div className="mb-6 border-t pt-6">
              <p className="text-xs text-gray-400 mb-3">CHAT</p>

              <ColorRow label="Background" color="#FFFFFF" />
              <ColorRow label="Text" color="#000000" />
            </div>

            {/* CUSTOMER */}
            <div className="border-t pt-6">
              <p className="text-xs text-gray-400 mb-3">CUSTOMER</p>

              <ColorRow label="Background" color="#111111" />
              <ColorRow label="Text" color="#FFFFFF" />
            </div>

          </div>
        );
      case "widget":
        return (
          <div className="bg-white rounded-2xl shadow p-6 w-[400px]">
            <h2 className="text-lg font-semibold">Widget</h2>
            <p className="text-sm text-gray-500 mt-2">
              Widget settings
            </p>
          </div>
        );

      case "integration":
        return (
          <div className="bg-white rounded-2xl shadow p-6 w-[400px]">
            <h2 className="text-lg font-semibold">Integration</h2>
            <p className="text-sm text-gray-500 mt-2">
              API / embed options
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col w-full">

      {/* 🔥 TOP TABS */}
<div className="flex items-center gap-6 px-8 py-4 border-b bg-white">

  {[
    { key: "bot", label: "Bot", icon: "🤖" },
    { key: "chat", label: "Chat", icon: "💬" },
    { key: "colors", label: "Colors", icon: "🎨" },
    { key: "widget", label: "Widget", icon: "⚪" },
    { key: "integration", label: "Integration", icon: "💻" },
  ].map((tab) => (
    <button
      key={tab.key}
      onClick={() => setActiveTab(tab.key)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all ${
        activeTab === tab.key
          ? "bg-blue-50 text-blue-600 border border-blue-200 shadow-sm"
          : "text-gray-500 hover:bg-gray-100"
      }`}
    >
      <span className="text-base">{tab.icon}</span>
      {tab.label}
    </button>
  ))}

</div>

      {/* 🔥 MAIN CONTENT */}
      <div className="flex justify-center items-start gap-10 pt-10">

        {/* CHAT PREVIEW */}
        <div className="w-[320px] h-[520px] bg-white rounded-2xl shadow flex flex-col overflow-hidden">

          <div className="flex justify-between items-center px-4 py-3 border-b">
            <span className="font-semibold text-sm">{bot.name}</span>
            <div className="flex gap-2 text-xs text-gray-500">
              <span>{bot.language}</span>
              <span>⋯</span>
              <span>✕</span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`px-3 py-2 rounded-xl text-xs max-w-[75%] ${
                  msg.type === "user"
                    ? "bg-black text-white ml-auto"
                    : "bg-gray-200 text-black"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <div className="p-3 border-t bg-white">
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="flex-1 bg-transparent outline-none text-sm"
                placeholder="Escribe tu mensaje..."
              />
              <button
                onClick={sendMessage}
                className="w-8 h-8 bg-black text-white rounded-full"
              >
                ↑
              </button>
            </div>
          </div>
        </div>

        {/* 🔥 RIGHT PANEL (DYNAMIC) */}
        {renderPanel()}

      </div>
    </div>
  );
}