import React from "react";

import Mainpage from "./pages/mainpage/Loginsignup";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
   
   <div>
    <Router>
    <Routes>
      <Route path="/" element={<Mainpage/>} />
      <Route path="/dashboard" element={<Header/>} />
      </Routes>
    </Router>

 
    </div>
  );
}

export default App;
