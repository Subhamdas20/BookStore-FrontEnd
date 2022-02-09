import React from "react";

import Mainpage from "./pages/loginsignup/Loginsignup";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Dashboard from "./pages/displaybooks/Dashboard";


function App() {
  return (
   
   <div>
    <Router>
    <Routes>
      <Route path="/" element={<Mainpage/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
