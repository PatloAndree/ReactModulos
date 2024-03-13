import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./Home/Login";
import WithSidebar from "./SideBar/withSideBar";
import Noticias from "./Home/Noticias";
import "./Styles.css";


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/Noticias" element={<Noticias />} />
        <Route
          path="/*"
          element={<WithSidebar isAuthenticated={isAuthenticated} />}
        />
        
      </Routes>
    </Router>
  );
};

export default App;
