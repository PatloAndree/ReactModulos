import { API } from "../Axios/axios_api";
import axios from "axios";

const listarProductos = async () => {
  try {
    const response = await axios.get(`${API}productos/listar`);
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return { success: false, error: "Error al listar productos" };
  }
};

const grabarProductos = async (venta) => {
  await axios({
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    url: `${API}productos/agregarProducto`,

    data: venta,
  })
    .then(async function (d) {
      console.log("Registro aceptado");
    })
    .catch(function (error) {
      console.log("Registro rechazadao");
    });
};

const editarProductos = async (producto) => {
  await axios({
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    url: `${API}productos/editarProducto`,
    data: producto,
  })
    .then(async function (d) {
      console.log("Registro aceptado");
    })
    .catch(function (error) {
      console.log(error);
    });
};

const eliminarProductos = async (id) => {

  await axios({
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
    url: `${API}productos/eliminarProducto/${id}`,
    // data: producto,
  })
    .then(async function (d) {
      console.log("Registro aceptado");
    })
    .catch(function (error) {
      console.log(error);
    });

};


export { listarProductos, grabarProductos, editarProductos, eliminarProductos};
