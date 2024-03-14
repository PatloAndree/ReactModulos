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
    <div className="row w-100 p-3">
      <p style={{ fontWeight: "bolder" }}>Gráficos generales</p>

      <SelectOptions setVentasFiltradas={setVentasFiltradas} />

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
