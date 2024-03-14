import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Login from "./Home/Login";
import WithSidebar from "./SideBar/withSideBar";
import "./Styles.css";


const App = () => {


  const [activo, setActivo] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true",
  );

  const handleLogin = () => {
    setIsAuthenticated(true);
    setActivo(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  return (
    <Router>

      <Routes>
    
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          
          <Route
            path="/*"
            element={
              <WithSidebar
                isAuthenticated={isAuthenticated} setActivo={setActivo}
              />
            }
          />
        
      </Routes>
    </Router>
  );
};

export default App;
