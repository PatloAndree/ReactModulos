import React from "react";
import { API } from "../Axios/axiosApi";
import axios from "axios";

  const listarVentas = async () => {
    try {
      const response = await axios.get(`${API}ventas/listar`);
      return { success: true, data: response.data };
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      return { success: false, error: "Usuario o contraseña inválidos" };
    }
  };

  const listarVentasTipo = async (tipoVenta,fechaInicioFormateada,fechaFinFormateada) => {
    // console.log(fechaInicioFormateada,fechaFinFormateada);
    try {
      const response = await axios.post(`${API}ventas/listarTipo `,{ tipoVenta, fechaInicioFormateada, fechaFinFormateada });
      console.log("consultandooo" , response);
      return { success: true, data: response.data };
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      return { success: false, error: "Usuario o contraseña inválidos" };
    }
  };
  
const grabarVenta = async (venta) => {

  await axios({
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    url: "http://127.0.0.1:8000/api/ventas/agregarVenta",

    data: venta,
  })
    .then(async function (d) {
      console.log("Registro aceptado");

    })
    .catch(function (error) {
      console.log("Registro rechazadao");

    });

};

const editarVenta = async (venta) => {
  await axios({
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    url: `http://127.0.0.1:8000/api/ventas/editarVenta`,
    data: venta,
  })
    .then(async function (d) {
      console.log("Registro aceptado");
    })
    .catch(function (error) {
      console.log(error);
    });
};


export { listarVentas , listarVentasTipo, grabarVenta, editarVenta };
