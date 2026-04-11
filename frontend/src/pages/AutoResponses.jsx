import { useState } from "react";

export default function AutoResponses() {

  const [active, setActive] = useState(true);
  const [open, setOpen] = useState(true);

  const [botMessage, setBotMessage] = useState("");
  const [buttons, setButtons] = useState([]);

  const [responses, setResponses] = useState([]);

  // 🔥 MODAL STATE
  const [showModal, setShowModal] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

  const addResponse = () => {
    setResponses([
      ...responses,
      {
        id: Date.now(),
        title: selectedType || "New response",
      },
    ]);
  };

  const addButton = () => {
    if (buttons.length >= 5) return;
    setButtons([...buttons, `Button ${buttons.length + 1}`]);
  };

  return (
    <div className="p-6 space-y-6">

      {/* 🔹 INITIAL MENU */}
      <div className="bg-white rounded-2xl shadow border overflow-hidden">

        {/* HEADER */}
        <div
          onClick={() => setOpen(!open)}
          className="flex justify-between items-center px-5 py-4 border-b cursor-pointer"
        >
          <div>
            <h2 className="font-semibold flex items-center gap-2">
              ☰ Initial menu
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Show the first menu right after the welcome message.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">Active</span>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setActive(!active);
              }}
              className={`w-10 h-5 flex items-center rounded-full p-1 transition ${
                active ? "bg-black" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow transform transition ${
                  active ? "translate-x-5" : ""
                }`}
              />
            </button>

            <span>{open ? "▴" : "▾"}</span>
          </div>
        </div>

        {/* CONTENT */}
        {open && (
          <div className="p-5 space-y-5">

            <div>
              <label className="text-xs text-gray-400 block mb-2">
                BOT MESSAGE
              </label>

              <input
                value={botMessage}
                onChange={(e) => setBotMessage(e.target.value)}
                placeholder="e.g. How can I help you today?"
                className="w-full border rounded-lg px-3 py-2 text-sm"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">
                  Quick reply buttons
                </span>

                <button
                  onClick={addButton}
                  className="text-sm bg-gray-100 px-3 py-1 rounded"
                >
                  + Add button
                </button>
              </div>

              <p className="text-xs text-gray-400 mb-3">
                Maximum 5 buttons.
              </p>

              <div className="space-y-2">
                {buttons.map((btn, i) => (
                  <input
                    key={i}
                    value={btn}
                    onChange={(e) => {
                      const updated = [...buttons];
                      updated[i] = e.target.value;
                      setButtons(updated);
                    }}
                    className="w-full border rounded-lg px-3 py-2 text-sm"
                  />
                ))}
              </div>
            </div>

            {/* PREVIEW */}
            <div>
              <p className="text-sm font-medium mb-2">Chat preview</p>

              <div className="bg-gray-50 rounded-xl p-4 text-sm">
                <div className="flex items-start gap-2">

                  <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs">
                    B
                  </div>

                  <div className="bg-white px-3 py-2 rounded-lg border">
                    {botMessage || "Bot message will appear here..."}
                  </div>

                </div>

                <p className="text-xs text-gray-400 mt-2">
                  ← User taps a button to reply
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <button className="bg-black text-white px-5 py-2 rounded-lg text-sm">
                💾 Save changes
              </button>
            </div>

          </div>
        )}
      </div>

      {/* 🔹 AUTOMATIC RESPONSES */}
      <div className="bg-white rounded-2xl shadow border">

        <div className="flex justify-between items-center p-5 border-b">
          <div>
            <h2 className="font-semibold flex items-center gap-2">
              💬 Automatic responses
            </h2>
            <p className="text-sm text-gray-500 mt-1 max-w-xl">
              Organize quick answers to frequently asked questions.
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="bg-black text-white px-4 py-2 rounded-lg text-sm"
          >
            + Add
          </button>
        </div>

        <div className="p-6">
          {responses.length === 0 ? (
            <div className="border-2 border-dashed rounded-xl p-10 text-center text-gray-500 text-sm">
              Start by creating your first tab to design an automated response.
            </div>
          ) : (
            <div className="space-y-3">
              {responses.map((r) => (
                <div
                  key={r.id}
                  className="p-4 border rounded-lg flex justify-between items-center"
                >
                  <span>{r.title}</span>
                  <button className="text-sm text-red-500">
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 🔥 MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">

          <div className="bg-white rounded-2xl w-[500px] p-6 shadow-xl">

            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-lg font-semibold">
                  Select auto response type
                </h2>
                <p className="text-sm text-gray-500">
                  Choose the best format for your automatic reply.
                </p>
              </div>

              <button onClick={() => setShowModal(false)}>
                ✕ Cancel
              </button>
            </div>

            <div className="space-y-3">

              {[
                { key: "Text", desc: "Plain text reply with optional buttons." },
                { key: "Tarjetas", desc: "Card carousel with images and calls to action." },
                { key: "Menú", desc: "Menu of quick options for the user to choose." },
                { key: "Video", desc: "Add a YouTube video to your quick reply." },
              ].map((item) => (
                <div
                  key={item.key}
                  onClick={() => setSelectedType(item.key)}
                  className={`p-4 border rounded-xl cursor-pointer ${
                    selectedType === item.key
                      ? "border-black bg-gray-50"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <p className="font-medium">{item.key}</p>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}

            </div>

            <div className="flex justify-end gap-3 mt-6">

              <button onClick={() => setShowModal(false)}>
                Cancel
              </button>

              <button
                disabled={!selectedType}
                onClick={() => {
                  addResponse();
                  setShowModal(false);
                  setSelectedType(null);
                }}
                className={`px-5 py-2 rounded-lg ${
                  selectedType
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-400"
                }`}
              >
                Create →
              </button>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}