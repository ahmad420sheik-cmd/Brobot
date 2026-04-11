import { useState } from "react";

export default function AutoResponses() {
  const [active, setActive] = useState(true);
  const [responses, setResponses] = useState([]);

  const addResponse = () => {
    setResponses([
      ...responses,
      { id: Date.now(), title: "New response" },
    ]);
  };

  return (
    <div className="p-6 space-y-6">

      {/* 🔹 HOME MENU */}
      <div className="bg-white rounded-2xl shadow border p-5 flex justify-between items-center">

        <div>
          <h2 className="font-semibold flex items-center gap-2">
            ☰ Home Menu
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Displays the initial menu right after the welcome message.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">Active</span>

          <button
            onClick={() => setActive(!active)}
            className={`w-10 h-5 flex items-center rounded-full p-1 transition ${
              active ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow transform transition ${
                active ? "translate-x-5" : ""
              }`}
            />
          </button>

          <span>▾</span>
        </div>
      </div>

      {/* 🔹 AUTOMATIC RESPONSES */}
      <div className="bg-white rounded-2xl shadow border">

        {/* HEADER */}
        <div className="flex justify-between items-center p-5 border-b">
          <div>
            <h2 className="font-semibold flex items-center gap-2">
              💬 Automatic responses
            </h2>
            <p className="text-sm text-gray-500 mt-1 max-w-xl">
              Organize quick answers to frequently asked questions. Create as many tabs as you need,
              customize their content, and preview how they'll look in the chat widget.
            </p>
          </div>

          <button
            onClick={addResponse}
            className="bg-black text-white px-4 py-2 rounded-lg text-sm"
          >
            + Add
          </button>
        </div>

        {/* CONTENT */}
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
                  <button className="text-sm text-red-500">Delete</button>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

    </div>
  );
}