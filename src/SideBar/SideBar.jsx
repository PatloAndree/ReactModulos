// Sidebar.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Escritorio from "../Pages/EscritorioPage";
import SidebarStyle from "./SideBarStyle.css";

const Sidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("usuario_sesion");
  };

  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [usuarioSesion, setUsuarioSesion] = useState([null]);

  const toggleNavbar = () => {
    setIsNavbarVisible((prevState) => !prevState);
  };

  useEffect(() => {
    const storedUsuarioSesion = localStorage.getItem("usuario_sesion");
    // Analizar el JSON y almacenar el resultado en el estado
    setUsuarioSesion(JSON.parse(storedUsuarioSesion));
    console.log(JSON.parse(storedUsuarioSesion));
  }, []);

  return (
    <div id="body-pd">
      <header className="header1" id="header">
        <div className="header_toggle" onClick={toggleNavbar}>
          <i
            className={`bx ${isNavbarVisible ? "bx-x" : "bx-menu"}`}
            id="header-toggle"
          ></i>
        </div>
        <div className="d-flex justify-content-between m-2 align-items-center">
          <div className="me-3 mt-3">
            <p className="fw-bold text-primary">

            Usuario : {usuarioSesion.name}
            </p>
            
            </div>
          <div className="header_img">
            <img src="https://i.imgur.com/hczKIze.jpg" alt="" />{" "}
          </div>
        </div>
      </header>
      <div className={`l-navbar ${isNavbarVisible ? "show" : ""}`}>
        <nav className="nav">
          <div>
            <a href="#">
              <i
                className={`bx ${
                  isNavbarVisible ? "bx-x" : ""
                } ms-4 text-white fs-4 `}
                onClick={toggleNavbar}
                id="header-toggle"
              ></i>
            </a>
            <div className="nav_list">
              <Link
                to={"/Escritorio"}
                // className="text-dark text-decoration-none btn"
                className="nav_link mt-5"
              >
                <i className="bx bx-layer nav_logo-icon"></i>
                <span className="nav_name">Principal</span>{" "}
              </Link>

              <Link
                to={"/Listado"}
                // className="text-dark text-decoration-none btn"
                className="nav_link"
              >
                <i className="bx bx-user nav_logo-icon"></i>
                <span className="nav_name">Listado</span>{" "}
              </Link>

              <Link to={"/Reportes"} className="nav_link">
                <i className="bx bx-bar-chart-square nav_logo-icon"></i>
                <span className="nav_name">Reportes</span>
              </Link>

              <Link to={"/Graficos"} className="nav_link">
                <i className="bx bx-chart nav_logo-icon"></i>
                <span className="nav_name">Gráficos</span>{" "}
              </Link>

              <Link to={"/Graficos"} className="nav_link">
                <i className="bx bx-cog nav_logo-icon"></i>
                <span className="nav_name">Ajustes</span>{" "}
              </Link>
            </div>
          </div>
          <Link to="/" className="nav_link" onClick={() => handleLogout()}>
            {" "}
            <i className="bx bx-log-out nav_icon"></i>{" "}
            <span className="nav_name" onClick={handleLogout}>
              SignOut
            </span>{" "}
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
