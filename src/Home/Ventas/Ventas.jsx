// import React, { useState, useEffect, useCallback } from "react";
// import { listarVentas } from "../../Auth/Ventas/ventas_api";
// import SelectOptions from "./SelectOptions";

// const Ventas = () => {
//   const [ventasOriginales, setVentasOriginales] = useState([]);
//   const [ventasFiltradas, setVentasFiltradas] = useState([]);
//   const [tipoVentaSeleccionado, setTipoVentaSeleccionado] = useState("");

//   const fetchData = useCallback(async () => {
//     try {
//       const data = await listarVentas();
//       setVentasOriginales(data.data);
//       setVentasFiltradas(data.data); // Inicialmente, mostrar todas las ventas
//       console.log("Ventas originales:", data.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }, []);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   useEffect(() => {
//     const filtrarVentasPorTipo = () => {
//       if (tipoVentaSeleccionado === "") {
//         // Si no se ha seleccionado ningún tipo de venta, mostrar todas las ventas
//         return ventasOriginales;
//       } else {
//         // Filtrar las ventas según el tipo de venta seleccionado
//         return ventasOriginales.filter(
//           (venta) => venta.tipo_venta.toString() === tipoVentaSeleccionado
//         );
//       }
//     };

//     setVentasFiltradas(filtrarVentasPorTipo());
//     console.log("Ventas filtradas:", ventasFiltradas);
//   }, [tipoVentaSeleccionado, ventasOriginales]);

//   const handleTipoVentaChange = (tipoVenta) => {
//     setTipoVentaSeleccionado(tipoVenta);
//   };

//   return (
//     <div>
//       <SelectOptions handleTipoVentaChange={handleTipoVentaChange} />

//       <table className="table align-middle mb-0 bg-white table-hover">
//         <thead className="mb-2">
//           <tr>
//             <th>Código</th>
//             <th>Nombre</th>
//             <th>Tipo de Venta</th>
//             <th>Monto</th>
//             <th>Ganancia</th>
//             <th>Fecha de Creación</th>
//             <th>Fecha de Actualización</th>
//           </tr>
//         </thead>
//         <tbody>
//           {ventasFiltradas.map((venta) => (
//             <tr key={venta.id}>
//               <td>{venta.id}</td>
//               <td>{venta.nombre}</td>
//               <td>{venta.tipo_venta}</td>
//               <td>{venta.monto}</td>
//               <td>{venta.ganancia}</td>
//               <td>{venta.created_at}</td>
//               <td>{venta.updated_at}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Ventas;



// import React, { useState, useEffect, useCallback } from "react";
// import { listarVentas } from "../../Auth/Ventas/ventas_api";
// import SelectOptions from "./SelectOptions";

// const Ventas = () => {
//   const [ventasOriginales, setVentasOriginales] = useState([]);
//   const [ventasFiltradas, setVentasFiltradas] = useState([]);
//   const [tipoVentaSeleccionado, setTipoVentaSeleccionado] = useState("");

//   const fetchData = useCallback(async () => {
//     try {
//       const data = await listarVentas();
//       setVentasOriginales(data.data);
//       setVentasFiltradas(data.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }, []);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   useEffect(() => {
//     // const filtrarVentasPorTipo = () => {
//     //   if (tipoVentaSeleccionado === "") {
//     //     return ventasOriginales;
//     //   } else {
//     //     return ventasOriginales.filter(
//     //       (venta) => venta.tipo_venta.toString() === tipoVentaSeleccionado
//     //     );
//     //   }
//     // };
//     const obtenerVentasFiltradas = async () => {
//         if (tipoVentaSeleccionado !== "") {
//           try {
//             const response = await listarVentasTipo(tipoVentaSeleccionado);
//             setVentasFiltradas(response.data); // Establecer las ventas filtradas según la respuesta del endpoint
//           } catch (error) {
//             console.error("Error al obtener ventas filtradas:", error);
//           }
//         } else {
//           // Si no se ha seleccionado ningún tipo de venta, mostrar todas las ventas
//           setVentasFiltradas([]);
//         }
//         obtenerVentasFiltradas();
//     }
//     // setVentasFiltradas(filtrarVentasPorTipo());
//   }, [tipoVentaSeleccionado]);

//   const handleTipoVentaChange = (tipoVenta) => {
//     setTipoVentaSeleccionado(tipoVenta);
//   };

// //   const updateTableData = async () => {
// //     try {
// //       const data = await listarVentas();
// //       setVentasOriginales(data.data);
// //       setVentasFiltradas(data.data);
// //     } catch (error) {
// //       console.error("Error updating table data:", error);
// //     }
// //   };

//   return (
//     <div>
//       <SelectOptions
//         handleTipoVentaChange={handleTipoVentaChange}
//         // updateTableData={updateTableData}
//       />

//       <table className="table align-middle mb-0 bg-white table-hover">
//         <thead className="mb-2">
//           <tr>
//             <th>Código</th>
//             <th>Nombre</th>
//             <th>Tipo de Venta</th>
//             <th>Monto</th>
//             <th>Ganancia</th>
//             <th>Fecha de Creación</th>
//             <th>Fecha de Actualización</th>
//           </tr>
//         </thead>
//         <tbody>
//           {ventasFiltradas.map((venta) => (
//             <tr key={venta.id}>
//               <td>{venta.id}</td>
//               <td>{venta.nombre}</td>
//               <td>{venta.tipo_venta}</td>
//               <td>{venta.monto}</td>
//               <td>{venta.ganancia}</td>
//               <td>{venta.created_at}</td>
//               <td>{venta.updated_at}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Ventas;


import React , {useEffect} from "react";


const Ventas = ({ ventasFiltradas }) => {

  return (
    <div>
      <table className="table align-middle mb-0 bg-white table-hover">
        <thead className="mb-2">
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Tipo de Venta</th>
            <th>Monto</th>
            <th>Ganancia</th>
            <th>Fecha de Creación</th>
            <th>Fecha de Actualización</th>
          </tr>
        </thead>
        <tbody>
          {ventasFiltradas.map((venta) => (
            <tr key={venta.id}>
              <td>{venta.id}</td>
              <td>{venta.nombre}</td>
              <td>{venta.tipo_venta}</td>
              <td>{venta.monto}</td>
              <td>{venta.ganancia}</td>
              <td>{venta.created_at}</td>
              <td>{venta.updated_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ventas;
