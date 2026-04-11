import { useState } from "react";

export default function Leads() {
  const [leads, setLeads] = useState([]);

  const exportCSV = () => {
    if (leads.length === 0) return;

    const csv = [
      ["Name", "Email"],
      ...leads.map((l) => [l.name, l.email]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "leads.csv";
    a.click();
  };

  return (
    <div className="p-6 space-y-6">

      {/* 🔹 HEADER */}
      <div className="bg-white rounded-2xl shadow border px-6 py-4 flex justify-between items-center">

        <div>
          <h2 className="font-semibold text-lg flex items-center gap-2">
            🚀 Leads
          </h2>
          <p className="text-sm text-gray-500">
            Contacts captured from chat
          </p>
        </div>

        <div className="flex items-center gap-4">

          {/* COUNT */}
          <div className="bg-black text-white text-xs px-3 py-1 rounded-full">
            {leads.length}
          </div>

          {/* EXPORT */}
          <button
            onClick={exportCSV}
            className="border px-4 py-2 rounded-lg text-sm hover:bg-gray-100"
          >
            ⬇ Export CSV
          </button>

        </div>
      </div>

      {/* 🔹 CONTENT */}
      <div className="bg-white rounded-2xl shadow border p-10 text-center">

        {leads.length === 0 ? (
          <div className="text-gray-400 space-y-2">
            <div className="text-4xl">🚀</div>
            <p className="font-medium text-gray-500">
              No leads yet
            </p>
            <p className="text-sm">
              Contacts captured from the chat will appear here automatically.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {leads.map((lead, i) => (
              <div
                key={i}
                className="flex justify-between p-4 border rounded-lg"
              >
                <span>{lead.name}</span>
                <span className="text-gray-500">{lead.email}</span>
              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  );
}