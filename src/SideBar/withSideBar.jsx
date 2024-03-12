import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./SideBar";
import Escritorio from "../Pages/EscritorioPage";
import ListadoPage from "../Pages/ListadoPage";
import ReportesPage from "../Pages/ReportesPage";
import GraficosPage from "../Pages/GraficosPage";
import AjustesPage from "../Pages/AjustesPage";

const WithSidebar = ({isAuthenticated }) => {
    if (!isAuthenticated) {
        return <Navigate to="/" />;
      }

  return (
    <div className="d-flex">
        <div className="">

        <Sidebar />
        </div>
        <Routes>
            <Route path="/Escritorio" element={<Escritorio />} />
            <Route path="/Listado" element={<ListadoPage />} />
            <Route path="/Reportes" element={<ReportesPage />} />
            <Route path="/Graficos" element={<GraficosPage />} />
            <Route path="/Ajustes" element={<AjustesPage />} />


        </Routes>

    </div>
    // <div className="container-fluid vh-100">
    // <div className="container-fluid">
    //   <div className="row">
    //     <div className="col-md-1 border">
    //       <Sidebar />
    //     </div>
    //     <div className="col-md-10">
    //       <Routes>
    //         <Route path="/Escritorio" element={<Inicio />} />
    //         <Route path="/Listado" element={<Listado />} />
    //       </Routes>
    //     </div>
    //   </div>
    // </div>
//   </div> 

  );
};

export default WithSidebar;
