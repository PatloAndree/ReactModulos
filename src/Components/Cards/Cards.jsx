import React, { useEffect, useState } from "react";
import { listarVentas } from "../../Auth/Ventas/ventas_api";
import { listarProductos } from "../../Auth/Productos/productos_api";
import listarUsuarios from "../../Auth/listarEmpleados_api";

export default function  Cards() {

  const [ventas,setVentas] = useState(0);
  const [productos,setProductos] = useState(0);
  const [usuarios,setUsuarios] = useState(0);


  const listadoVentas = async () => {
    try {
      const listaVentas = await listarVentas();
      if (listaVentas) {
        console.log("imprimiendo card contado");
        console.log(listaVentas.data.length);
        setVentas(listaVentas.data.length);
      }
    } catch (error) {
      console.log(error);
    }
  }
  const listadoProductos = async () => {
    try {
      const listaProductos = await listarProductos();
      if (listaProductos) {
        console.log("imprimiendo card contado");
        console.log(listaProductos.data.length);
        setProductos(listaProductos.data.length);
      }
    } catch (error) {
      console.log(error);
    }
  }
  const listadoUsuarios = async () => {
    try {
      const listaUsuarios = await listarUsuarios();
      if (listaUsuarios) {
        console.log(listaUsuarios.data.length);
        setUsuarios(listaUsuarios.data.length);
      }
    } catch (error) {
      console.log(error);
    }
  }


  
  useEffect(() => {
    listadoVentas();
    listadoProductos();
    listadoUsuarios();
    console.log("holaa");
  }, []);
  
  // const fetchData = async () => {
  //   try {
  //     const data = await listarUsuarios();
  //     setUsuarios(data.data);
  //     console.log(data);
  //     setLoading(false);
  //   } catch (error) {
  //     // Maneja el error aquí
  //     setLoading(false);
  //   }
  // };
  
  return (
      // <div className="col-12">
  
        <div className="row">
          <div className="col-12 col-md-6 col-xl-3 mt-2 ">
            <div
              className="card order-card p-3"
              style={{
                background: "linear-gradient(to right, #14279B, #3D56B2)",
              }}
            >
              <div className="card-block">
                <h6 className="mb-2 text-white">Ventas realizadas</h6>
                <div className="d-flex justify-content-between">
                  <i className="bx bx-cart text-white fs-1"></i>
                  <span className="text-white fs-2">{ventas ? ventas : "0"}</span>
                </div>
                <p className="m-b-0 text-white">
                  Correcto<span className="f-right"> </span>
                </p>
              </div>
            </div>
          </div>
  
          <div className="col-12 col-md-6  col-xl-3 mt-2">
            <div
              className="card order-card p-3"
              style={{
                background: "linear-gradient(to right, #FF6D24, #F9A828)",
              }}
            >
              <div className="card-block">
                <h6 className="m-b-20 text-white">Productos registrados</h6>
                <div className="d-flex justify-content-between">
                  <i className="bx bx-package text-white fs-2"></i>
  
                  <span className="text-white fs-2">{productos ? productos : "0"}</span>
                </div>
                <p className="m-b-0 text-white">
                Correcto<span className="f-right"></span>
                </p>
              </div>
            </div>
          </div>
  
          <div className="col-12 col-md-6 col-xl-3 mt-2">
            <div
              className="card order-card p-3"
              style={{
                background: "linear-gradient(to right, #34495E, #495664)",
              }}
            >
              <div className="card-block">
                <h6 className="m-b-20 text-white">Empleados registrados</h6>
                <div className="d-flex justify-content-between">
                  <i className="bx bx-user text-white fs-2"></i>
  
                  <span className="text-white fs-2">{usuarios ? usuarios : "0"}</span>
                </div>
  
                <p className="m-b-0 text-white">
                  Correcto<span className="f-right"> </span>
                </p>
              </div>
            </div>
          </div>
  
          <div className="col-12 col-md-6  col-xl-3 mt-2">
            <div
              className="card order-card p-3"
              style={{
                background: "linear-gradient(to right, #EE0E51, #FE4E6E)",
              }}
            >
              <div className="card-block">
                <h6 className="m-b-20 text-white">Alertas</h6>
                {/* <i className="fa fa-credit-card f-left"></i> */}
  
                <div className="d-flex justify-content-between">
                  <i className="bx bx-bell text-white fs-2"></i>
                  <span className="text-white fs-2"> --</span>
                </div>
  
                <p className="m-b-0 text-white">
                  Correcto<span className="f-right"> </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      // </div>
  );
}

// export default Cards;
