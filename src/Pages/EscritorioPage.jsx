import React from "react";
import Inicio from "../Home/Inicio";
import Cards from "../Components/Cards/Cards";
import GraficoInicio from "../Components/GraficoInicio/GraficoInicio";
import GraficoInicioBarras from "../Components/GraficoInicio/GraficoInicioBarras";

const Escritorio = () => {
  return (
    <div className="container-fluid">
      <div className="card-block p-2">
        <Cards />
      </div>
      <div className="row mt-5">
        <div className="col-12 col-md-12 col-xl-6 ">
        <GraficoInicio />
        </div>
        <div className="col-12 col-md-12 col-xl-6">
        <GraficoInicioBarras/>
        </div>
      </div>
    </div>
  );
};

export default Escritorio;
