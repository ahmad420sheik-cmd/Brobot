export default function BotSettings() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 w-[400px]">

      <h2 className="text-lg font-semibold mb-4">Your bot</h2>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
        <input
          className="border px-3 py-2 rounded-lg w-full"
          defaultValue="Mandary"
        />
      </div>

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

      <div className="mt-6 space-y-3 text-sm">
        <div>
          <label className="block text-gray-500 mb-1">
            Bot's base language
          </label>
          <select className="w-full border rounded-lg px-3 py-2">
            <option>IS</option>
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
}