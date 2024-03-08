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

  const listarVentasTipo = async (tipoVenta) => {
    try {
      const response = await axios.post(`${API}ventas/listarTipo `,{ tipoVenta });
      return { success: true, data: response.data };
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      return { success: false, error: "Usuario o contraseña inválidos" };
    }
  };


// export default VentasApi;

export { listarVentas , listarVentasTipo };
