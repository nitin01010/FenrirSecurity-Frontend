import React from "react"
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Scan from "./pages/Scan";
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from "./pages/Header";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
         <Route path="/" element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/scan" element={<Scan />} />
      </Routes>
    </div>
  )
}

export default App