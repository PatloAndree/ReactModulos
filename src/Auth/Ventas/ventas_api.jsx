import React from "react";
import { API } from "../Axios/axios_api";
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
    url: `${API}ventas/agregarVenta`,

    data: venta,
  })
    .then(async function (d) {
      console.log("Registro aceptado");

    })
    .catch(function (error) {
      console.log("Registro rechazadao no inserto");

    });

};

const editarVenta = async (venta) => {
  await axios({
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    url: `${API}ventas/editarVenta`,
    data: venta,
  })
    .then(async function (d) {
      console.log("Registro aceptado");
    })
    .catch(function (error) {
      console.log(error);
    });
};

const eliminarVenta = async (id) => {

  await axios({
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
    url: `${API}ventas/eliminarVenta/${id}`,
    // data: producto,
  })
    .then(async function (d) {
      console.log("Registro eliminado");
    })
    .catch(function (error) {
      console.log(error);
    });

};


export { listarVentas , listarVentasTipo, grabarVenta, editarVenta , eliminarVenta };
