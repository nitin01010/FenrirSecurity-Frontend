import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";


function MainLayout() {
  const [tab, setTab] = useState("Dashboard");

  const renderContent = () => {
    switch (tab) {
      case "Dashboard":
        return <Dashboard />;
      case "Projects":
        return <h1>Project</h1>;
      case "Scans":
        return <h1>Scan</h1>;
      case "Schedule":
        return <h1>Schedule</h1>;
      case "Notifications":
        return <h1>Notifications</h1>;
      case "Settings":
        return <h1>Settings</h1>;
      case "Support":
        return <h1>Support</h1>;
      default:
        return <Login />;
    }
  };

  return (
    <div className="flex">
      <Sidebar tab={tab} setTab={setTab} />
      <div className="flex-1 bg-gray-50 min-h-screen">
        {renderContent()}
      </div>
    </div>
  );
}

export default MainLayout;