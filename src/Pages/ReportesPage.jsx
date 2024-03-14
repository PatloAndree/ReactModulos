import React, { useState, useEffect, useCallback } from "react";
import { listarVentas } from "../Auth/Ventas/ventas_api";
import TablaGeneral from "../Components/TablaMui/TablaGeneral";
import SelectOptions from "../Components/Select/SelectOptions";
import Loader from "react-js-loader";


const ReportesPage = () => {
  const [ventasFiltradas, setVentasFiltradas] = useState([]);
  const [loading, setLoading] = useState(false);

  const headers = [
    { key: "nombre", label: "Nombre" },
    { key: "tipo_venta", label: "Valor" },
    { key: "monto", label: "Monto" },
    { key: "ganancia", label: "Ganancia" },
    { key: "created_at", label: "Fecha de venta" },
  ];

  const fetchData = useCallback(async () => {
    try {
      const data = await listarVentas();
      if (data) {
        console.log("entroo")
        setVentasFiltradas(data.data);
        setLoading(true);
      }else{
      setLoading(false);
      console.log("eno ntroo")

      }
    } catch (error) {
      console.error("Error fetching data:", error);

    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const exportToCSV = () => {
    const header = headers.map((header) => header.label).join(",");
    const rows = ventasFiltradas.map((row) =>
      headers
        .map((header) => row[header.key].toString().replace(/,/g, ""))
        .join(",")
    );
    const csvData = [header, ...rows].join("\n");
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "Reporte.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="row w-100 p-5">
      <p style={{ fontWeight: "bolder" }}>Reportes generales</p>

      <SelectOptions setVentasFiltradas={setVentasFiltradas} />

      <div className="d-flex justify-content-end align-items-center ">
        <button className="btn btn-success  mb-2" onClick={exportToCSV}>
           <i className="bx bx-file-blank"></i> CSV
        </button>
      </div>

      <div>
      {
        loading !== false && ventasFiltradas !== null
        ?
        <TablaGeneral
          headers={headers}
          data={ventasFiltradas}
          verBuscador={true}
        />
        :
        <Loader type="spinner-default" bgColor={"#4723D9"} color={"#4723D9"} size={60} />
      }
      </div>
    </div>
  );
};

export default ReportesPage;
