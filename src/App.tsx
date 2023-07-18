import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Passcode from "./Pages/Passcode";
import EmpLogin from "./Pages/EmpLogin";
import Location from "./Pages/Location";
import Dashboard from "./Pages/Dashboard"

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Login />}/>
          <Route path="passcode" element={<Passcode />} />
          <Route path="emplogin" element={<EmpLogin />} />
          <Route path="location" element={<Location />} />
          <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
