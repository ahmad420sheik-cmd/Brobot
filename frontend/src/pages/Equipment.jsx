import { useState } from "react";

export default function Team() {
  const [members, setMembers] = useState([]);
  const [filter, setFilter] = useState("Editor");
  const [search, setSearch] = useState("");

  return (
    <div className="p-6 space-y-6">

      {/* 🔹 HEADER */}
      <div className="bg-white rounded-2xl shadow border px-6 py-4 flex justify-between items-center">

        <div>
          <h2 className="font-semibold text-lg flex items-center gap-2">
            👥 Equipment
          </h2>
          <p className="text-sm text-gray-500">
            Manage members, roles, and bot access
          </p>
        </div>

        <span className="text-sm text-gray-400">
          {members.length} member{members.length !== 1 && "s"}
        </span>
      </div>

      {/* 🔹 FILTER + SEARCH */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">

          {["Mandary", "All", "Admin", "Editor"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-3 py-1 rounded-full text-sm border ${
                filter === item
                  ? "bg-black text-white"
                  : "bg-white text-gray-500"
              }`}
            >
              {item}
            </button>
          ))}

          {/* SEARCH */}
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="ml-4 px-3 py-2 border rounded-lg text-sm"
          />

        </div>

        {/* ADD BUTTON */}
        <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-lg">
          +
        </button>

      </div>

      {/* 🔹 MEMBERS LIST */}
      <div className="bg-white rounded-2xl shadow border p-10 text-center">

        {members.length === 0 ? (
          <div className="text-gray-400 space-y-2">
            <div className="text-3xl">👤</div>
            <p>No members were found</p>
          </div>
        ) : (
          <div className="space-y-3">
            {members.map((m, i) => (
              <div
                key={i}
                className="flex justify-between items-center p-4 border rounded-lg"
              >
                <span>{m.name}</span>
                <span className="text-gray-500">{m.role}</span>
              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  );
}