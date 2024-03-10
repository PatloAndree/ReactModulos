import React, { useState } from "react";
import { listarVentasTipo } from "../../Auth/Ventas/ventas_api";
import DatePicker from "react-datepicker";
import { es } from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const SelectOptions = ({ setVentasFiltradas }) => {
  const [tipoVenta, setTipoVenta] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date()); // Nuevo estado para la fecha de fin

  const consultarTipoVenta = async () => {
    try {
      const fechaInicioFormateada = format(startDate, "yyyy-MM-dd"); // Formatear la fecha de inicio
      const fechaFinFormateada = format(endDate, "yyyy-MM-dd"); // Formatear la fecha de fin
      const response = await listarVentasTipo(
        tipoVenta,
        fechaInicioFormateada,
        fechaFinFormateada
      );
      // console.log(response.data.Data);
      setVentasFiltradas(response.data.Data);
    } catch (error) {
      console.error("Error al consultar:", error);
    }
  };

  const handleTipoVentaChangeLocal = (e) => {
    setTipoVenta(e.target.value);
  };

  return (
    <div className="row mb-5 align-items-center border rounded m-2 justify-content-between pb-3">
      
      <div className="col-12 col-md-6 col-xl-3 mt-3 ">
        <span>Tipo de venta</span>
        <select
          className="form-select pickers"
          // style={{backgroundColor:'#EEEDEB'}}
          aria-label="Default select example"
          value={tipoVenta}
          onChange={handleTipoVentaChangeLocal}
        >
          <option value="0">Todos</option>
          <option value="1">Alto</option>
          <option value="2">Medio</option>
          <option value="3">Bajo</option>
        </select>
      </div>
      <div className="col-12 col-md-6 col-xl-3 mt-3 d-flex flex-column">
        <span>Fecha inicio  (m-d-y)</span>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          locale={es}
          className="form-control  pickers"
        />
      </div>
      <div className="col-12 col-md-6 col-xl-3 mt-3 d-flex flex-column">
        <span>Fecha fin (m-d-y) </span>

        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          locale={es}
          className="form-control pickers w-100"
        />
      </div>
      <div className="col-12 col-md-6 col-xl-3 mt-4 text-end d-flex justify-content-center">
        <button className="btn btn-primary d-flex justify-contet-center align-items-center" onClick={consultarTipoVenta}>
          <i className="bx bx-search me-2"></i>
          Consultar
        </button>
      </div>

    </div>
  );
};

export default SelectOptions;
