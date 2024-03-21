import React, { useState, useEffect, useCallback } from "react";
import { listarVentas } from "../Auth/Ventas/ventas_api";
import TablaGeneral from "../Components/TablaMui/TablaGeneral";
import SelectOptions from "../Components/Select/SelectOptions";
import Loader from "react-js-loader";
import { CSVLink } from "react-csv"; 

const ReportesPage = () => {
  const [ventasFiltradas, setVentasFiltradas] = useState([]);
  const [loading, setLoading] = useState(false);

  const headers = [
    { key: "codigo_venta", label: "Código venta" },
    { key: "nombre", label: "Cliente" },
    { key: "tipo_venta", label: "Tipo" },
    { key: "ganancia", label: "Total" },
    { key: "created_at", label: "Fecha" },
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


  return (
    <div className="row w-100 cuerpo_general ">

      <p style={{ fontWeight: "bolder" }} className="mt-2">Reportes generales</p>

      <div className="d-flex row justify-content-end align-items-center ms-1 mb-4">
        <div className="col-12 col-md-12 col-xl-10">
            <SelectOptions setVentasFiltradas={setVentasFiltradas} />
        </div>
        <div className="col-12 col-md-12 col-xl-2 d-flex flex-column mt-4">
            <CSVLink data={ventasFiltradas != null ? ventasFiltradas : []} separator=";" className="btn btn-success btn-sm " > 
            
          <i className="bx bx-file me-2"></i>
          Exportar
            </CSVLink>

        </div>
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
