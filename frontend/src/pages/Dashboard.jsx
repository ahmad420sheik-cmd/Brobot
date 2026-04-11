export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">

      {/* 🔹 TOP FILTER */}
      <div className="flex items-center gap-4">

        <div className="flex bg-gray-100 rounded-lg p-1 text-sm">
          <button className="px-3 py-1 rounded-md text-gray-500">
            Month
          </button>
          <button className="px-3 py-1 rounded-md bg-white shadow">
            Year
          </button>
        </div>

        <span className="text-gray-500 text-sm">
          02/04/2025 – 02/04/2026
        </span>
      </div>

      {/* 🔹 STATS */}
      <div className="grid grid-cols-4 gap-4">

        {/* BOTS */}
        <div className="bg-white rounded-2xl shadow border p-5">
          <p className="text-xs text-gray-400 mb-2">BOTS</p>
          <h2 className="text-2xl font-semibold">1</h2>
          <p className="text-xs text-gray-400">of 1</p>
        </div>

        {/* ANSWERS */}
        <div className="bg-white rounded-2xl shadow border p-5 flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-400 mb-2">ANSWERS</p>
            <h2 className="text-2xl font-semibold">1</h2>
            <p className="text-xs text-gray-400">out of 100</p>
          </div>

          <div className="w-12 h-12 rounded-full border flex items-center justify-center text-xs">
            1%
          </div>
        </div>

        {/* KNOWLEDGE */}
        <div className="bg-white rounded-2xl shadow border p-5 flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-400 mb-2">KNOWLEDGE</p>
            <h2 className="text-2xl font-semibold">0</h2>
            <p className="text-xs text-gray-400">of 500,000</p>
          </div>

          <div className="w-12 h-12 rounded-full border flex items-center justify-center text-xs">
            0%
          </div>
        </div>

        {/* EQUIPMENT */}
        <div className="bg-white rounded-2xl shadow border p-5">
          <p className="text-xs text-gray-400 mb-2">EQUIPMENT</p>
          <h2 className="text-2xl font-semibold">1</h2>
          <p className="text-xs text-gray-400">of 1</p>
        </div>

      </div>

      {/* 🔹 BOT ROW */}
      <div className="bg-white rounded-2xl shadow border p-5 flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-4">

          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
            💬
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                Current
              </span>
              <h3 className="font-semibold">Mandary</h3>
            </div>
            <p className="text-xs text-gray-400">
              Personalized
            </p>
          </div>

        </div>

        {/* MIDDLE */}
        <div className="flex gap-10 text-sm">

          <div>
            <p className="text-gray-400 text-xs">ANSWERS</p>
            <p>1</p>
          </div>

          <div>
            <p className="text-gray-400 text-xs">KNOWLEDGE</p>
            <p>0</p>
          </div>

          <div>
            <p className="text-gray-400 text-xs">STATE</p>
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
              Asset
            </span>
          </div>

        </div>

        {/* RIGHT */}
        <div className="flex gap-2">
          <button className="border px-3 py-1 rounded-lg text-sm">
            Edit
          </button>
          <button className="border px-3 py-1 rounded-lg text-sm">
            ⋯
          </button>
        </div>

      </div>

    </div>
  );
}