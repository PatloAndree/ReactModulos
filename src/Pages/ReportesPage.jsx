// import React , {useState,useEffect,useCallback} from 'react';
// import Ventas from '../Components/Ventas/Ventas';
// import SelectOptions from '../Components/Ventas/SelectOptions';
// import { listarVentas } from '../Auth/Ventas/ventas_api';
// import TablaVentas from '../Components/Ventas/Table';
// import TablaGeneral from '../Components/TablaMui/TablaGeneral';

// const ReportesPage = () => {

//     const [ventasFiltradas, setVentasFiltradas] = useState([]);

//     const headers = [
//       { key: "nombre", label: "Nombre" },
//       { key: "tipo_venta", label: "Valor" },
//       { key: "monto", label: "Monto" },
//       { key: "ganancia", label: "Ganancia" },
//       { key: "status", label: "Status" },
//     ];

//     const fetchData = useCallback(async () => {
//         try {
//           const data = await listarVentas();
//           setVentasFiltradas(data.data);
//         } catch (error) {
//           console.error("Error fetching data:", error);
//         }
//       }, []);

//       useEffect(() => {
//         fetchData();
//       }, [fetchData]);

//     return (
//         <div className='row w-100 p-5'>
//             <p style={{fontWeight:'bolder'}}>Reportes generales</p>

//             <SelectOptions setVentasFiltradas={setVentasFiltradas} />
//             {/* <Ventas ventasFiltradas={ventasFiltradas} /> */}
//             {/* <TablaVentas ventasFiltradas={ventasFiltradas} /> */}

//             {/* {Array.isArray(ventasFiltradas) && ventasFiltradas.map((venta) => (
//             // Código para renderizar cada venta aquí
//             ))} */}
//             <div className='d-flex justify-content-between align-items-center'>
//                 {/* <button onClick={exportToExcel}>Exportar a Excel</button> */}
//             </div>

//           <TablaGeneral  headers={headers} data={ventasFiltradas} verBuscador={false} />

//         </div>
//     );
// }

// export default ReportesPage;
import React, { useState, useEffect, useCallback } from "react";
import { listarVentas } from "../Auth/Ventas/ventas_api";
import TablaGeneral from "../Components/TablaMui/TablaGeneral";
import SelectOptions from "../Components/Ventas/SelectOptions";

const ReportesPage = () => {
  const [ventasFiltradas, setVentasFiltradas] = useState([]);

  const headers = [
    { key: "nombre", label: "Nombre" },
    { key: "tipo_venta", label: "Valor" },
    { key: "monto", label: "Monto" },
    { key: "ganancia", label: "Ganancia" },
    { key: "status", label: "Status" },
  ];

  const fetchData = useCallback(async () => {
    try {
      const data = await listarVentas();
      setVentasFiltradas(data.data);
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
        {/* <p style={{fontWeight:'bolder'}}>Reportes generales</p> */}
        <button className="btn btn-success  mb-2" onClick={exportToCSV}>
          Eporta a CSV
        </button>
      </div>

      <TablaGeneral
        headers={headers}
        data={ventasFiltradas}
        verBuscador={false}
      />
    </div>
  );
};

export default ReportesPage;
