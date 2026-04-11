import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Topbar from "./layout/Topbar";

import Dashboard from "./pages/Dashboard";
import Team from "./pages/Team";
import Chat from "./pages/Chat";
import Knowledge from "./pages/Knowledge";
import Prompt from "./pages/Prompt";
import Leads from "./pages/Leads";
import AutoResponses from "./pages/AutoResponses";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />

        <div className="main">
          <Topbar />

          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/knowledge" element={<Knowledge />} />
              <Route path="/prompt" element={<Prompt />} />
              <Route path="/leads" element={<Leads />} />
              <Route path="/auto" element={<AutoResponses />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;