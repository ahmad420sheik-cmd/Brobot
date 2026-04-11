import { useState, useRef, useEffect } from "react";
import { HexColorPicker } from "react-colorful";

// to display color bubbles
function ColorRow({ label, value, onClick }) {
  return (
    <div className="flex items-center justify-between mb-4 relative">

      <div className="flex items-center gap-3">
        <div
          onClick={onClick}
          className="w-8 h-8 rounded-full border cursor-pointer"
          style={{ background: value }}
        ></div>
        <span className="text-sm">{label}</span>
      </div>

      <span className="text-xs bg-gray-100 px-2 py-1 rounded">
        {value}
      </span>

    </div>
  );
}

export default function Chat() {
  const [openChatSection, setOpenChatSection] = useState("header");
  const [headerEnabled, setHeaderEnabled] = useState(true);
  const [bubbleEnabled, setBubbleEnabled] = useState(false);
  const [welcomeEnabled, setWelcomeEnabled] = useState(false);
  
  const [activeTab, setActiveTab] = useState("chat");
  const [openSection, setOpenSection] = useState("script");
  const [activeColor, setActiveColor] = useState(null);
  const [colors, setColors] = useState({
    headerBg: "#FFFFFF",
    headerText: "#1F2937",
    chatBg: "#FFFFFF",
    chatText: "#000000",
    customerBg: "#111111",
    customerText: "#FFFFFF",
  });

  const toggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

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
// likitsorma
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

  const Section = ({ id, title, description, enabled, setEnabled, icon, children }) => (
    <div className="border rounded-2xl overflow-hidden">

      <div
        onClick={() =>
          setOpenChatSection(openChatSection === id ? null : id)
        }
        className="flex justify-between items-center px-4 py-4 cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
            {icon}
          </div>

          <div>
            <p className="font-medium text-sm">{title}</p>
            <p className="text-xs text-gray-400">{description}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">

          <span
            className={`text-xs px-2 py-1 rounded-full ${
              enabled
                ? "bg-green-100 text-green-600"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {enabled ? "Enabled" : "Disabled"}
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setEnabled(!enabled);
            }}
            className={`w-10 h-5 flex items-center rounded-full p-1 ${
              enabled ? "bg-black" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full transition ${
                enabled ? "translate-x-5" : ""
              }`}
            />
          </button>

          <span>{openChatSection === id ? "▴" : "▾"}</span>
        </div>
      </div>

      {openChatSection === id && (
        <div className="px-4 pb-4 border-t bg-white space-y-4">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow border p-4 w-[420px] space-y-4">

      <Section
        id="header"
        title="Header"
        description="Header image and style"
        enabled={headerEnabled}
        setEnabled={setHeaderEnabled}
        icon="🧩"
      >
        <button className="bg-black text-white px-4 py-2 rounded-lg text-sm">
          Select image
        </button>
      </Section>

      <Section
        id="bubble"
        title="Chat Bubble"
        description="Add a short text to invite users to open the chat."
        enabled={bubbleEnabled}
        setEnabled={setBubbleEnabled}
        icon="💬"
      >
        <input
          placeholder="Write a short text..."
          className="w-full border rounded-lg px-3 py-2 text-sm"
        />
      </Section>

      <Section
        id="welcome"
        title="Welcome message"
        description="Add a welcome message to greet your visitors."
        enabled={welcomeEnabled}
        setEnabled={setWelcomeEnabled}
        icon="✨"
      >
        <textarea
          placeholder="Welcome message..."
          className="w-full border rounded-lg px-3 py-2 text-sm"
        />
      </Section>

    </div>
  );
  


      case "colors":
        return (
          <div className="bg-white rounded-2xl shadow border p-6 w-[400px] relative">

            <h2 className="font-semibold text-lg mb-6">🎨 Colors</h2>

            {/* HEADER */}
            <div className="mb-6">
              <p className="text-xs text-gray-400 mb-3">HEADER</p>

              <ColorRow
                label="Background"
                value={colors.headerBg}
                onClick={() => setActiveColor("headerBg")}
              />
              <ColorRow
                label="Text"
                value={colors.headerText}
                onClick={() => setActiveColor("headerText")}
              />
            </div>

            {/* CHAT */}
            <div className="mb-6 border-t pt-6">
              <p className="text-xs text-gray-400 mb-3">CHAT</p>

              <ColorRow
                label="Background"
                value={colors.chatBg}
                onClick={() => setActiveColor("chatBg")}
              />
              <ColorRow
                label="Text"
                value={colors.chatText}
                onClick={() => setActiveColor("chatText")}
              />
            </div>

            {/* CUSTOMER */}
            <div className="border-t pt-6">
              <p className="text-xs text-gray-400 mb-3">CUSTOMER</p>

              <ColorRow
                label="Background"
                value={colors.customerBg}
                onClick={() => setActiveColor("customerBg")}
              />
              <ColorRow
                label="Text"
                value={colors.customerText}
                onClick={() => setActiveColor("customerText")}
              />
            </div>

            {/* COLOR PICKER */}
            {activeColor && (
              <div className="absolute top-20 left-10 bg-white p-4 rounded-xl shadow-lg border z-50">

                <HexColorPicker
                  color={colors[activeColor]}
                  onChange={(color) =>
                    setColors({ ...colors, [activeColor]: color })
                  }
                />

                <button
                  onClick={() => setActiveColor(null)}
                  className="mt-3 text-sm text-gray-500"
                >
                  Close
                </button>

              </div>
            )}

          </div>
        );

      case "widget":
        return (
          <div className="bg-white rounded-2xl shadow border p-6 w-[420px] space-y-6">

            {/* HEADER */}
            <h2 className="font-semibold text-lg flex items-center gap-2">
              🖱️ Widget
            </h2>

            {/* ICON */}
            <div>
              <p className="text-xs text-gray-400 mb-3">ICON</p>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white text-2xl">
                  💬
                </div>

                <button className="text-sm text-gray-500 hover:underline">
                  Tap to change →
                </button>
              </div>
            </div>

            {/* COLORS */}
            <div className="border-t pt-6">
              <p className="text-xs text-gray-400 mb-4">COLORS</p>

              <ColorRow label="Widget icon color" color="#FFFFFF" />
              <ColorRow label="Background" color="#111111" />
            </div>

            {/* SHAPE */}
            <div className="border-t pt-6">
              <p className="text-xs text-gray-400 mb-4">SHAPE</p>

              <div className="flex items-center gap-4">
                <input type="checkbox" />
                <span className="text-sm">Corners</span>

                <input
                  type="range"
                  min="0"
                  max="40"
                  defaultValue="20"
                  className="flex-1"
                />

                <span className="text-sm text-gray-500">20</span>
              </div>
            </div>

            {/* POSITION */}
            <div className="border-t pt-6">
              <p className="text-xs text-gray-400 mb-4">POSITION</p>

              <div className="flex gap-3">

                {/* LEFT */}
                <button className="flex-1 border rounded-xl p-4 text-sm text-gray-500 hover:bg-gray-100">
                  <div className="h-10 border rounded mb-2"></div>
                  Left
                </button>

                {/* CENTER */}
                <button className="flex-1 border rounded-xl p-4 text-sm text-gray-500 hover:bg-gray-100">
                  <div className="h-10 border rounded mb-2"></div>
                  Center
                </button>

                {/* RIGHT (ACTIVE) */}
                <button className="flex-1 bg-black text-white rounded-xl p-4 text-sm">
                  <div className="h-10 border border-white rounded mb-2"></div>
                  Right
                </button>

              </div>
            </div>

          </div>
        );
    case "integration":

    return (
      <div className="bg-white rounded-2xl shadow border w-[420px] divide-y">

        {/* 🔹 INTEGRATION SCRIPT */}
        <div className="p-5">
          <div
            onClick={() => toggle("script")}
            className="flex justify-between items-center cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">{`</>`}</span>
              <div>
                <p className="font-medium">Integration script</p>
                <p className="text-xs text-gray-400">
                  Copy the code and insert it into your website
                </p>
              </div>
            </div>
            <span>{openSection === "script" ? "▴" : "▾"}</span>
          </div>

          {openSection === "script" && (
            <div className="mt-4 space-y-4">

              <p className="text-sm text-gray-600">
                Copy and paste this code into your website just before the {"</body>"} tag.
              </p>

              <div className="relative bg-gray-100 rounded-lg p-4 text-sm font-mono">
                {`<script src="https://tomos.bot/embed.js" data-empresa="ahmad420sheik" data-bot="mandary"></script>`}

                <button className="absolute top-3 right-3 bg-black text-white text-xs px-3 py-1 rounded">
                  Copy
                </button>
              </div>

            </div>
          )}
        </div>

        {/* 🔹 PERMITTED SITES */}
        <div className="p-5">
          <div
            onClick={() => toggle("sites")}
            className="flex justify-between items-center cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span>🛡️</span>
              <div>
                <p className="font-medium">Permitted sites</p>
                <p className="text-xs text-gray-400">
                  Domains where the bot can be displayed
                </p>
              </div>
            </div>
            <span>{openSection === "sites" ? "▴" : "▾"}</span>
          </div>

          {openSection === "sites" && (
            <div className="mt-4 space-y-4">

              <p className="text-sm text-gray-600">
                Define the authorized domains where the bot can be displayed.
              </p>

              <div className="flex gap-2">
                <input
                  placeholder="https://www.example.com"
                  className="flex-1 border rounded-lg px-3 py-2 text-sm"
                />
                <button className="bg-black text-white px-4 rounded-lg text-sm">
                  Add site
                </button>
              </div>

            </div>
          )}
        </div>

        {/* 🔹 RESERVATIONS */}
        <div className="p-5">
          <div
            onClick={() => toggle("calendar")}
            className="flex justify-between items-center cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span>📅</span>
              <div>
                <p className="font-medium">Reservations (Cal.com)</p>
                <p className="text-xs text-gray-400">
                  Connect your booking calendar
                </p>
              </div>
            </div>
            <span>{openSection === "calendar" ? "▴" : "▾"}</span>
          </div>

          {openSection === "calendar" && (
            <div className="mt-4 space-y-4">

              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" />
                Activate reservations
              </label>

              <input
                placeholder="user/event (ex: hotelmarbella/demo)"
                className="w-full border rounded-lg px-3 py-2 text-sm"
              />

              <p className="text-xs text-gray-400">
                Paste the Cal.com event link or username/event.
              </p>

              <button className="border px-4 py-2 rounded-lg text-sm">
                Prove
              </button>

            </div>
          )}
        </div>

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