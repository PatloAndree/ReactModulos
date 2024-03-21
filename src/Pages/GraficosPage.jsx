import React, { useState, useEffect } from "react";
import BarChartExample from "../Components/Ventas/GraficoVentas";
import SelectOptions from "../Components/Select/SelectOptions";
import Loader from "react-js-loader";

const GraficosPage = () => {
  const [ventasFiltradas, setVentasFiltradas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (ventasFiltradas !== "" || ventasFiltradas !== null) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [ventasFiltradas]);

  return (
    <div className="row w-100 cuerpo_general">
      <p style={{ fontWeight: "bolder" }} className="mt-2">Gráficos generales</p>

      <div className="mb-5">
      <SelectOptions setVentasFiltradas={setVentasFiltradas} />

      </div>

      {loading !== false && ventasFiltradas != null ? (

        <BarChartExample ventasFiltradas={ventasFiltradas} />
        
      ) : (
        <Loader
          type="spinner-default"
          bgColor={"#4723D9"}
          color={"#4723D9"}
          size={60}
        />
      )}
    </div>
  );
};

export default GraficosPage;
