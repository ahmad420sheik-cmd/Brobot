import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "Equipment", path: "/equipment" },
    { name: "Chat", path: "/chat" },
    { name: "Messages", path: "/messages" },
    { name: "Prompt", path: "/prompt" },
    { name: "Knowledge", path: "/knowledge" },
    { name: "Auto Responses", path: "/auto" },
    { name: "Leads", path: "/leads" }
  ];

  return (
    <div className="w-64 h-screen bg-gray-900 border-r border-gray-800 flex flex-col">

      {/* Logo */}
      <div className="h-14 flex items-center px-6 border-b border-gray-800">
        <h1 className="text-lg font-bold">🤖 BroBot</h1>
      </div>

      {/* New Chat */}
      <div className="p-4">
        <button className="w-full bg-blue-600 hover:bg-blue-700 transition p-2 rounded-lg text-sm">
          + New Chat
        </button>
      </div>

      {/* Menu */}
      <div className="flex-1 px-2 space-y-1 overflow-y-auto">
        {menu.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-4 py-2 rounded-lg text-sm transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800 text-xs text-gray-500">
        SaaS v1.0
      </div>

    </div>
  );
};

export default Sidebar;