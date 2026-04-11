import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "Team", path: "/team" },
    { name: "Chat", path: "/chat" },
    { name: "Messages", path: "/messages" },
    { name: "Prompt", path: "/prompt" },
    { name: "Knowledge", path: "/knowledge" },
    { name: "Auto Responses", path: "/auto" },
    { name: "Leads", path: "/leads" }
  ];

  return (
    <div className="sidebar">
      <div className="logo">Bot</div>

      <div className="menu">
        {menu.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`menu-item ${
              location.pathname === item.path ? "active" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;