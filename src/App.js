// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./Home/Login";
// import Inicio from "./Home/Inicio";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/Login" element={<Login />} />
//         <Route path="/Inicio" element={<Inicio />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// import React, { useState, useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";
// import Login from "./Home/Login";
// import Inicio from "./Home/Inicio";
// import Listado from "./Home/Listado";
// import Navigation from "./TopBar/TopBar";

// // Componente de protección de ruta
// const ProtectedRoute = ({ element, isAuthenticated }) => {
//   return isAuthenticated ? element : <Navigate to="/" />;
// };

// const App = () => {
//   // Utiliza el localStorage para obtener el estado de autenticación inicial
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     localStorage.getItem("isAuthenticated") === "true"
//   );

//   // Función para manejar el inicio de sesión
//   const handleLogin = () => {
//     // Establece el estado de autenticación y guarda en localStorage
//     setIsAuthenticated(true);
//     localStorage.setItem("isAuthenticated", "true");
//   };

//   // Función para manejar el cierre de sesión
//   const handleLogout = () => {
//     // Establece el estado de autenticación y limpia localStorage
//     setIsAuthenticated(false);
//     localStorage.removeItem("isAuthenticated");
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login onLogin={handleLogin} />} />
//         <Route
//           path="/Inicio"
//           element={
//             <ProtectedRoute
//               element={<Inicio />}
//               isAuthenticated={isAuthenticated}
//             />
//           }
//         />
//         <Route
//           path="/Listado"
//           element={
//             <ProtectedRoute
//               element={<Listado />}
//               isAuthenticated={isAuthenticated}
//             />
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Home/Login";
import Inicio from "./Home/Inicio";
import Sidebar from "./SideBar/SideBar";
import Listado from "./Home/Listado";
import Navigation from "./TopBar/TopBar";
import WithSidebar from "./SideBar/withSideBar";
import Noticias from "./Home/Noticias";
import "./Styles.css";
// Componente de protección de ruta
const ProtectedRoute = ({ element, isAuthenticated }) => {
  return isAuthenticated ? element : <Navigate to="/" />;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <Router>
      <Routes>
        {/* <Route path="*" element={<WithoutSidebar />} /> */}
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/Noticias" element={<Noticias />} />
        {/* <Route path="/*" element={<WithSidebar />} /> */}
        <Route
          path="/*"
          element={<WithSidebar isAuthenticated={isAuthenticated} />}
        />
        
      </Routes>
    </Router>
    // <Router>
    //   <div className="wrapper">
    //     {/* <Navigation /> */}
    //     <div id="content">
    //       <Routes>
    //         <Route path="/" element={<Login onLogin={handleLogin} />} />
    //         <Route
    //           path="/Inicio"
    //           element={
    //             <ProtectedRoute
    //               element={<Inicio />}
    //               isAuthenticated={isAuthenticated}
    //             />
    //           }
    //         />
    //         <Route
    //           path="/Listado"
    //           element={
    //             <ProtectedRoute
    //               element={<Listado />}
    //               isAuthenticated={isAuthenticated}
    //             />
    //           }
    //         />
    //       </Routes>
    //     </div>
    //   </div>
    // </Router>
  );
};

export default App;
