// import React from 'react';

// const SelectOptions = () => {
//     return (
//         <div className='row mb-5 align-items-center justify-content-between border rounded p-2'>

//             <div className='col-3'>
//                 <span>Tipo de venta</span>
//             <select
//                       class="form-select"
//                       aria-label="Default select example"
//                     >
//                       <option selected>Selecciona</option>
//                       <option value="1">1</option>
//                       <option value="2">2</option>
//                       <option value="3">3</option>
//                     </select>
//             </div>
//             <div className='col-3 text-end'>
//             <button
//                     className="btn btn-primary"

//                   >
//                     Consultar
//             </button>
//             </div>
//         </div>
//     );
// }

// export default SelectOptions;

// import React, { useState } from "react";
// import axios from "axios";
// import { listarVentasTipo } from "../../Auth/Ventas/ventas_api";

// const SelectOptions = () => {
//   const [tipoVenta, setTipoVenta] = useState("");

//   const handleConsultarClick = async () => {
//     console.log(tipoVenta);
//     try {
//       const response = await listarVentasTipo(tipoVenta);
//       console.log(response.data);
//       // Aquí puedes manejar la respuesta según tus necesidades
//     } catch (error) {
//       console.error("Error al consultar:", error);
//       // Aquí puedes manejar el error según tus necesidades
//     }
//   };

//   const handleTipoVentaChange = (e) => {
//     setTipoVenta(e.target.value);
//   };

//   return (
//     <div className="row mb-5 align-items-center justify-content-between border rounded p-2">
//       <div className="col-3">
//         <span>Tipo de venta</span>
//         <select
//           className="form-select"
//           aria-label="Default select example"
//           value={tipoVenta} // Establecer el valor seleccionado del tipo de venta
//           onChange={handleTipoVentaChange} // Manejar el cambio en el tipo de venta
//         >
//           <option value="">Selecciona</option>
//           <option value="1">1</option>
//           <option value="2">2</option>
//           <option value="3">3</option>
//         </select>
//       </div>
//       <div className="col-3 text-end">
//         <button
//           className="btn btn-primary"
//           onClick={handleConsultarClick} // Manejar el clic en el botón "Consultar"
//         >
//           Consultar
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SelectOptions;

// import React, { useState } from "react";
// import axios from "axios";
// import { listarVentasTipo } from "../../Auth/Ventas/ventas_api";

// const SelectOptions = ({ handleTipoVentaChange }) => {

//     // console.log(handleTipoVentaChange);

//   const [tipoVenta, setTipoVenta] = useState("");

//   const consultarTipoVenta = async () => {
//     console.log(tipoVenta);
//     try {
//       const response = await listarVentasTipo(tipoVenta);
//       console.log(response.data);
//       // Aquí puedes manejar la respuesta según tus necesidades
//     } catch (error) {
//       console.error("Error al consultar:", error);
//       // Aquí puedes manejar el error según tus necesidades
//     }
//     handleTipoVentaChange(tipoVenta); 

//   };

//   const handleTipoVentaChangeLocal = (e) => {
//     setTipoVenta(e.target.value);
//     // handleTipoVentaChange(e.target.value); 
//   };

//   return (
//     <div className="row mb-5 align-items-center justify-content-between border rounded p-2">
//       <div className="col-3">
//         <span>Tipo de venta</span>
//         <select
//           className="form-select"
//           aria-label="Default select example"
//           value={tipoVenta} // Establecer el valor seleccionado del tipo de venta
//           onChange={handleTipoVentaChangeLocal} // Manejar el cambio en el tipo de venta
//         >
//           <option value="">Todos</option>
//           <option value="1">1</option>
//           <option value="2">2</option>
//           <option value="3">3</option>
//         </select>
//       </div>
//       <div className="col-3 text-end">
//         <button
//           className="btn btn-primary"
//           onClick={consultarTipoVenta} // Manejar el clic en el botón "Consultar"
//         >
//           Consultar
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SelectOptions;


// import React, { useState } from "react";
// import { listarVentasTipo } from "../../Auth/Ventas/ventas_api";

// const SelectOptions = ({ handleTipoVentaChange }) => {
//   const [tipoVenta, setTipoVenta] = useState("");

//   const consultarTipoVenta = async () => {
//     try {
//       const response = await listarVentasTipo(tipoVenta);
//       console.log(response.data);
//       handleTipoVentaChange(tipoVenta);
//       return response
//     //   updateTableData();
//     //   console.log(updateTableData);
//     } catch (error) {
//       console.error("Error al consultar:", error);
//     }
//   };

//   const handleTipoVentaChangeLocal = (e) => {
//     setTipoVenta(e.target.value);
//   };

//   return (
//     <div className="row mb-5 align-items-center justify-content-between border rounded p-2">
//       <div className="col-3">
//         <span>Tipo de venta</span>
//         <select
//           className="form-select"
//           aria-label="Default select example"
//           value={tipoVenta}
//           onChange={handleTipoVentaChangeLocal}
//         >
//           <option value="">Todos</option>
//           <option value="1">1</option>
//           <option value="2">2</option>
//           <option value="3">3</option>
//         </select>
//       </div>
//       <div className="col-3 text-end">
//         <button
//           className="btn btn-primary"
//           onClick={consultarTipoVenta}
//         >
//           Consultar
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SelectOptions;

// NUEVO ACTUAL

// import React, { useEffect, useState } from "react";
// import { listarVentasTipo } from "../../Auth/Ventas/ventas_api";
// import { registerLocale, setDefaultLocale } from  "react-datepicker";
// import DatePicker from "react-datepicker";
// import { es } from 'date-fns/locale/es';
// import "react-datepicker/dist/react-datepicker.css";

// const SelectOptions = ({ setVentasFiltradas }) => {
  
//   const [tipoVenta, setTipoVenta] = useState("");
//   const [startDate, setStartDate] = useState(new Date());

//   registerLocale('es', es)

//   const consultarTipoVenta = async () => {
//     try {
//       const response = await listarVentasTipo(tipoVenta);
//       console.log(response.data.Data);
//       setVentasFiltradas(response.data.Data); // Establecer las ventas filtradas en el 
//     } catch (error) {
//       console.error("Error al consultar:", error);
//     }
//   };

//   const handleTipoVentaChangeLocal = (e) => {
//     setTipoVenta(e.target.value);
//   };

//   useEffect(() => {
//    console.log(startDate);
//   }, []);

//   return (
//     <div className="row mb-5 align-items-center justify-content-between border rounded p-2">
//       <div className="col-3">
//         <span>Tipo de venta</span>
//         <select
//           className="form-select"
//           aria-label="Default select example"
//           value={tipoVenta}
//           onChange={handleTipoVentaChangeLocal}
//         >
//           <option value="">Todos</option>
//           <option value="1">Alto</option>
//           <option value="2">Medio</option>
//           <option value="3">Bajo</option>
//         </select>
//       </div>
//       <div className="col-3 d-flex flex-column ">
//       <span>Fecha inicio</span>

//       <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="form-control"  locale="es" />
//       </div>
//       <div className="col-3 d-flex flex-column ">
//       <span>Fecha fin</span>

//       <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="form-control"  locale="es" />
//       </div>
//       <div className="col-2 d-flex justify-content-center mt-3 text-end">
//         <button className="btn btn-primary" onClick={consultarTipoVenta}>
//           Consultar
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SelectOptions;

import React, { useState } from "react";
import { listarVentasTipo } from "../../Auth/Ventas/ventas_api";
import DatePicker from "react-datepicker";
import { es } from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';

const SelectOptions = ({ setVentasFiltradas }) => {
  
  const [tipoVenta, setTipoVenta] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date()); // Nuevo estado para la fecha de fin

  const consultarTipoVenta = async () => {
    try {
      const fechaInicioFormateada = format(startDate, 'yyyy-MM-dd'); // Formatear la fecha de inicio
      const fechaFinFormateada = format(endDate, 'yyyy-MM-dd'); // Formatear la fecha de fin
      const response = await listarVentasTipo(tipoVenta, fechaInicioFormateada, fechaFinFormateada);
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
    <div className="row mb-5 align-items-center justify-content-between border rounded p-2">
      <div className="col-3 ">
        <span>Tipo de venta</span>
        <select
          className="form-select"
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
      <div className="col-3 d-flex flex-column">

      <span>Fecha inicio | mes-dia-año</span>
          <DatePicker 
            selected={startDate} 
            onChange={(date) => setStartDate(date)} 
            locale={es}
            className="form-control" 
          />
      </div>
      <div className="col-3 d-flex flex-column">
      <span>Fecha fin |  mes-dia-año </span>

          <DatePicker 
            selected={endDate} 
            onChange={(date) => setEndDate(date)} 
            locale={es}
            className="form-control" 
          />
      </div>
      <div className="col-3 text-end d-flex justify-content-center">
        <button className="btn btn-primary" onClick={consultarTipoVenta}>
          Consultar
        </button>
      </div>
    </div>
  );
};

export default SelectOptions;
