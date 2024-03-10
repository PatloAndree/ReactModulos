import React, { useState, useEffect } from "react";
import imagenAvatar from "../assets/avatar.png";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "react-js-loader";
import listarUsuarios from "../Auth/listarEmpleados_api";
import grabarUsuario from "../Auth/grabarEmpleado_api";
import editarUsuario from "../Auth/updateEmpleado_api";
import BasicTable from "../Components/Usuarios/TablaUsuarios";

function Listado({usuario, setValorRespuesta}) {

  const [idUsuario, setIdUsuario] = useState(0);
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [dni, setDni] = useState("");
  const [telefono, setTelefono] = useState("");

  const [editarOpcion, setEditarOpcion] = useState(false);

  const [loading, setLoading] = useState(false);

  const [usuarios, setUsuarios] = useState([]);

  function limpiarData() {
    setNombre("");
    setApellidos("");
    setDni("");
    setTelefono("");
    setIdUsuario("");
  }

  const [selectedUsuario, setSelectedUsuario] = useState(null);

  const fetchData = async () => {
    try {
      const data = await listarUsuarios();
      setUsuarios(data.data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      // Maneja el error aquí
      setLoading(false);
    }
  };

  useEffect(() => {
    // console.log(llamarUsuarios);
    fetchData();
    if (usuario != "" && usuario != null ) {
    console.log("soy vacio");
      console.log(usuario);
      setNombre(usuario.name);
      setApellidos(usuario.email);
      setDni(usuario.dni);
      setTelefono(usuario.telefono);
      setIdUsuario(usuario.id);
      setEditarOpcion(true);
    }
  }, [usuario]);


  const grabarNuevoUsuario = async (event) => {
    event.preventDefault();
    try {
      if (nombre !== "" && dni !== "") {
        const nuevoUsuario = {
          nombres: nombre,
          apellidos: apellidos,
          dni: dni,
          telefono: telefono,
        };
        const data = await grabarUsuario(nuevoUsuario);
        console.log("Registro aceptado");
        fetchData();
        console.log(data);
        // Aquí puedes manejar la respuesta del servidor, como mostrar un mensaje de éxito
      } else {
        alert("Completa los campos");
      }
    } catch (error) {
      console.error("Error al grabar usuario:", error);
      // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario
    }
  };

  const editarEmpleado = async (event) => {
    event.preventDefault();
    try {
      const usuarioActualizado = {
        id: idUsuario,
        nombres: nombre,
        apellidos: apellidos,
        dni: dni,
        telefono: telefono,
      };
      const data = await editarUsuario(usuarioActualizado);
      console.log("Usuario editado correctamente");
      console.log(data);
      // ListadeUsuarios();
      setValorRespuesta(true);
      fetchData();
      limpiarData();
      
      // Aquí puedes manejar la respuesta del servidor, como mostrar un mensaje de éxito
    } catch (error) {
      console.error("Error al editar usuario:", error);
      // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario
    }
  };

  const eliminarUsuario = async (id) => {
    try {
      const response = await axios.delete(
        // `http://localhost/newVersion/public/eliminarUsuario?id=${id}`
        `http://127.0.0.1:8000/api/usuarios/eliminarUsuario/${id}`
      );
      console.log(response.data.message);
      listarUsuarios();

      // Manejar la respuesta si es necesario
    } catch (error) {
      console.error("Error al eliminar usuario Api:", error);
      // Manejar el error si es necesario
    }
  };

  return (
    <div className=" row ">

      <div className="">
        <p>
          Agregar empleados <i className="bx bx-user text-primary"></i>
        </p>
        <div className="m-2">
          <form>
            <div className="row">
              <div className="col-12 col-md-6 mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
                <div id="emailHelp" className="form-text">
                  Poner su nombre por favor
                </div>
              </div>
              <div className=" col-12 col-md-6 mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Apellidos
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={apellidos}
                  onChange={(e) => setApellidos(e.target.value)}
                />
                <div id="emailHelp" className="form-text">
                  Poner su correo por favor
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Dni
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={dni}
                  onChange={(e) => setDni(e.target.value)}
                />
                <div id="emailHelp" className="form-text">
                  Poner su correo por favor
                </div>
              </div>
              <div className="col-12 col-md-6 mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Telefono
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </div>
              <div className="col-12 col-md-6 mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Telefono
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </div>
              <div className="col-12 col-md-6 mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Telefono
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </div>

              <div className="col-12 mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Cargo
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Selecciona</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            {editarOpcion == false ? (
              <button className="btn btn-primary" onClick={grabarNuevoUsuario}>
                Registrar
              </button>
            ) : (
              <button className="btn btn-primary" onClick={editarEmpleado}>
                Editar
              </button>
            )}
          </form>
        </div>
      </div>

      <div className="col-12 col-md-12 col-xl-8 p-3 mt-5 ">
        {/* <h5>Lista de usuarios</h5>
            <BasicTable/> */}

      </div>
    </div>
  );
}

export default Listado;
