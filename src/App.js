import React from "react";
import Login from "./components/login/Login";
import Mainpage from "./pages/mainpage/Mainpage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
   
   <div>
    <Router>
    <Routes>
      <Route path="/" element={<Mainpage/>} />

      </Routes>
    </Router>

 
    </div>
  );
}

export default App;
