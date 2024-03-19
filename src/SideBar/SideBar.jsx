import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SidebarStyle from "./SideBarStyle.css";

const Sidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("usuario_sesion");
  };

  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [usuarioSesion, setUsuarioSesion] = useState(null);

  const toggleNavbar = () => {
    setIsNavbarVisible((prevState) => !prevState);
  };

  const closeNavbar = () => {
    setIsNavbarVisible(false);
  };

  useEffect(() => {
    const storedUsuarioSesion = localStorage.getItem("usuario_sesion");
    // Analizar el JSON y almacenar el resultado en el estado
    setUsuarioSesion(JSON.parse(storedUsuarioSesion));
    // console.log(JSON.parse(storedUsuarioSesion));
  }, []);

  return (
    <div className="body_all">
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
              <p className="fw-bold text-primary">{usuarioSesion ? usuarioSesion.name + usuarioSesion.apellidos : ""}</p>
            </div>
            <div className="header_img">
              <img src="https://th.bing.com/th/id/OIP.9PPdes_WSxaqUQJxWab16AHaHa?rs=1&pid=ImgDetMain" alt="" />{" "}
            </div>
          </div>
        </header>
        <div className={`l-navbar ${isNavbarVisible ? "show" : ""}`}>
          <nav className="nav">
            <div>
              <a>
                <i
                  className={`bx ${
                    isNavbarVisible ? "bx-x" : ""
                  } ms-4 text-white fs-4 `}
                  onClick={toggleNavbar}
                  id="header-toggle"
                ></i>
              </a>
              <div className="nav_list">
                <NavLink to={"/Escritorio"} activeClassName="active" className="nav_link mt-5" onClick={closeNavbar}  >
                  <i className="bx bx-layer nav_logo-icon "></i>
                  <span className="nav_name">Principal</span>{" "}
                </NavLink>

                <NavLink to={"/Listado"} activeClassName="active" className="nav_link" onClick={closeNavbar}  >
                  <i className="bx bx-user nav_logo-icon"></i>
                  <span className="nav_name">Listado</span>{" "}
                </NavLink>

                <NavLink to={"/Productos"} activeClassName="active" className="nav_link" onClick={closeNavbar}  >
                  <i className="bx bx-package nav_logo-icon"></i>
                  <span className="nav_name">Productos</span>{" "}
                </NavLink>

                <NavLink to={"/Reportes"} activeClassName="active" className="nav_link" onClick={closeNavbar} >
                  <i className="bx bx-bar-chart-square nav_logo-icon"></i>
                  <span className="nav_name">Reportes</span>
                </NavLink>

                <NavLink to={"/Graficos"} activeClassName="active" className="nav_link" onClick={closeNavbar} >
                  <i className="bx bx-chart nav_logo-icon"></i>
                  <span className="nav_name">Gráficos</span>{" "}
                </NavLink>

                <NavLink to={"/Ajustes"} activeClassName="active" className="nav_link" onClick={closeNavbar}  >
                  <i className="bx bx-cog nav_logo-icon"></i>
                  <span className="nav_name">Ajustes</span>{" "}
                </NavLink>

                <NavLink
                  to="/"
                  className="nav_link"
                  onClick={() => handleLogout()}
                >
                  {" "}
                  <i className="bx bx-log-out nav_icon"></i>{" "}
                  <span className="nav_name" onClick={handleLogout}>
                    SignOut
                  </span>{" "}
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
