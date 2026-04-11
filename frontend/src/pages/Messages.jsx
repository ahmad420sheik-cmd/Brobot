import { useState } from "react";

export default function Messages() {
  const [conversations, setConversations] = useState([
    {
      id: 1,
      date: "01/04/2026",
      preview: "It seems your message isn't clear...",
      messages: [
        { text: "Hello", type: "user" },
        { text: "It seems your message isn't clear...", type: "bot" },
      ],
      time: "01:12",
    },
  ]);

  const [active, setActive] = useState(null);

  return (
    <div className="p-6 space-y-6">

      {/* 🔹 HEADER */}
      <div className="flex justify-between items-center">

        <div className="flex items-center gap-3">
          <h2 className="font-semibold text-lg flex items-center gap-2">
            💬 Messages
          </h2>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
            {conversations.length} conversations
          </span>
        </div>

        <button className="text-red-500 border border-red-200 px-4 py-2 rounded-lg text-sm">
          🗑 Delete old
        </button>

      </div>

      {/* 🔹 MAIN */}
      <div className="flex gap-6">

        {/* LEFT PANEL */}
        <div className="w-[300px] bg-white rounded-2xl shadow border p-4">

          {/* SEARCH */}
          <input
            placeholder="Buscar conversaciones..."
            className="w-full px-3 py-2 border rounded-lg text-sm mb-4"
          />

          {/* LIST */}
          <div className="space-y-3">
            {conversations.map((c) => (
              <div
                key={c.id}
                onClick={() => setActive(c)}
                className={`p-3 border rounded-lg cursor-pointer ${
                  active?.id === c.id ? "bg-gray-100" : "hover:bg-gray-50"
                }`}
              >
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>{c.date} 🇲🇺</span>
                  <span>{c.time}</span>
                </div>

                <p className="text-sm text-gray-700 truncate">
                  {c.preview}
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  {c.messages.length} msgs
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className="flex-1 bg-white rounded-2xl shadow border flex items-center justify-center">

          {!active ? (
            <div className="text-center text-gray-400 space-y-2">
              <div className="text-3xl">💬</div>
              <p className="font-medium text-gray-500">
                Select a conversation
              </p>
              <p className="text-sm">
                Choose a conversation from the list to view the messages.
              </p>
            </div>
          ) : (
            <div className="w-full p-6 space-y-4">

              {active.messages.map((msg, i) => (
                <div
                  key={i}
                  className={`max-w-md px-4 py-2 rounded-xl text-sm ${
                    msg.type === "user"
                      ? "bg-blue-600 text-white ml-auto"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {msg.text}
                </div>
              ))}

            </div>
          )}

        </div>

      </div>

    </div>
  );
}