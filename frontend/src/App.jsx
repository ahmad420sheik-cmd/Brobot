import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Topbar from "./layout/Topbar";

import Dashboard from "./pages/Dashboard";
import Equipment from "./pages/Equipment";
import Chat from "./pages/Chat";
import Knowledge from "./pages/Knowledge";
import Prompt from "./pages/Prompt";
import Leads from "./pages/Leads";
import AutoResponses from "./pages/AutoResponses";
import Messages from "./pages/Messages";


function App() {
  return (
    <Router>
      <div className="flex h-screen overflow-hidden bg-gray-100">

        {/* Sidebar */}
        <Sidebar />

        {/* Main */}
        <div className="flex flex-col flex-1">

          {/* Topbar */}
          <Topbar />

          {/* Content */}
          <div className="flex-1 overflow-auto p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/equipment" element={<Equipment />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/knowledge" element={<Knowledge />} />
              <Route path="/prompt" element={<Prompt />} />
              <Route path="/leads" element={<Leads />} />
              <Route path="/auto" element={<AutoResponses />} />
              <Route path="/messages" element={<Messages />} />

              
            </Routes>
          </div>

        </div>
      </div>
    </Router>
  );
}

export default App;