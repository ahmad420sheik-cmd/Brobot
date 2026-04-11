import { useState } from "react";

export default function Prompt() {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="flex justify-center pt-10">

      <div className="w-[800px] bg-white rounded-2xl shadow border">

        {/* HEADER */}
        <div className="px-6 py-4 border-b flex items-center gap-2">
          <span className="text-lg">📄</span>
          <h2 className="font-semibold text-lg">System Prompt</h2>
        </div>

        {/* TOOLBAR */}
        <div className="px-6 py-3 border-b flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-4 text-sm">

            <span className="text-gray-400 text-xs">TEMPLATE</span>

            <select className="border rounded-lg px-3 py-1 text-sm">
              <option>Custom prompt</option>
              <option>Customer support</option>
              <option>Sales assistant</option>
            </select>

          </div>

          {/* RIGHT */}
          <div className="text-xs text-gray-400">
            {prompt.length} chars
          </div>

        </div>

        {/* FORMAT BAR */}
        <div className="px-6 py-2 border-b flex items-center gap-4 text-sm text-gray-500">

          <button className="hover:text-black font-bold">B</button>
          <button className="hover:text-black italic">I</button>
          <button className="hover:text-black underline">U</button>

          <div className="h-4 w-px bg-gray-300"></div>

          <button className="hover:text-black">• List</button>
          <button className="hover:text-black">H2</button>

          <div className="h-4 w-px bg-gray-300"></div>

          <button className="hover:text-black text-xs">
            Remove formatting
          </button>

        </div>

        {/* TEXT AREA */}
        <div className="p-6">

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Escribe aquí el prompt del sistema..."
            className="w-full h-[300px] resize-none outline-none text-sm text-gray-700"
          />

        </div>

      </div>

    </div>
  );
}