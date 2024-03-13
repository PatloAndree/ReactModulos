import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("usuario_sesion");
  };

  return (
    <div className="row vh-100 w-100 border align-items-center justify-content-center bg-warning">
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb7LQOtYRjJh_0v_rfXK8iNxH1ICUA_Gp8BA&usqp=CAU"
          alt=""
          className="w-50 h-50"
        />
      </div>
      <div className="row h-50 pt-5">
        <div>
          <Link
            to={"/Escritorio"}
            className="text-dark text-decoration-none btn"
          >
            Home
          </Link>
        </div>
        <div>
          <Link to={"/Listado"} className="text-dark text-decoration-none btn">
            Listado
          </Link>
        </div>
        <div>
          <Link to={"/Noticias"} className="text-dark text-decoration-none ">
            Noticias
          </Link>
        </div>
        <div>
          <Link
            to={"/"}
            className="text-white text-decoration-none btn btn-primary btn-sm"
            onClick={() => handleLogout()}
          >
            Salir
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
