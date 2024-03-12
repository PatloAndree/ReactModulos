import React, { useState, useEffect } from "react";
import imagenAvatar from "../assets/avatar.png";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "react-js-loader";
import listarUsuarios from "../Auth/listarEmpleados_api";
import grabarUsuario from "../Auth/grabarEmpleado_api";
import editarUsuario from "../Auth/updateEmpleado_api";

function Inicio() {
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
    fetchData();
  }, []);

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

    const editarData = (id, nombreE, apellidosE, dniE, telefonoE) => {
      if (nombreE != "") {
        setNombre(nombreE);
        setApellidos(apellidosE);
        setDni(dniE);
        setTelefono(telefonoE);
        setIdUsuario(id);
        setEditarOpcion(true);
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
    <div className="d-flex flex-column w-100  ">
      {/* <div className="d-flex  w-100 mt-5 mb-5"> */}
      <div className="row h-100 mt-5 justify-content-around align-items-center">

        <div
          className="col-12 col-md-4 col-sm-4 border rounded p-4"
          style={{ height: 600 }}
        >
          <p>
            Agregar empleados <i className="bx bx-user text-primary"></i>{" "}
          </p>
          <div className="card">
            <div className="m-4">
              <form>
                <div className="row">
                  <div className=" col-6 mb-3">
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
                  <div className=" col-6 mb-3">
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
                  <div className="col-6 mb-3">
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
                  <div className="col-6 mb-3">
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
                  <div className="col-6 mb-3">
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
                  <div className="col-6 mb-3">
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
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Selecciona</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                {editarOpcion == false ? (
                  <button
                    className="btn btn-primary"
                    onClick={grabarNuevoUsuario}
                  >
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
        </div>

        <div className="col-12 col-md-7 col-sm-6 " style={{ height: 600 }}>
          <h5>Lista de usuarios</h5>
          <div className="border rounded p-4">
            <table className="table align-middle mb-0 bg-white table-hover">
              <thead className=" mb-2">
                <th><p>Código</p></th>
                <th><p>Nombres</p></th>
                <th><p>Apellidos</p></th>
                <th className="text-center"><p>Status</p></th>
                <th><p>Dni</p></th>
                <th><p>Telefono</p></th>
                <th className="center"></th>
              </thead>
              <tbody>
                {loading ? (
                  <Loader
                    type="hourglass"
                    bgColor="gray"
                    color="gray"
                    title={"Cargando"}
                    size={40}
                  />
                ) : (
                  usuarios.map((valor, index) => (
                    <tr key={index}>
                      <td>{valor.id}</td>
                      <td>{valor.name}</td>
                      <td>{valor.email}</td>
                      <td className="text-center">
                        {valor.status == 1 ? (
                          <span className="badge bg-success rounded-pill d-inline ">
                            Activo
                          </span>
                        ) : (
                          <span className="badge bg-danger rounded-pill d-inline ">
                            Inactivo
                          </span>
                        )}
                      </td>

                      <td>{valor.dni}</td>
                      <td>{valor.telefono}</td>
                      <td>
                        <i
                          className="bx bx-edit-alt"
                          style={{ cursor: "pointer", color: "blue" }}
                          onClick={() =>
                            editarData(
                              valor.id,
                              valor.name,
                              valor.email,
                              valor.dni,
                              valor.telefono
                            )
                          }
                        ></i>
                      </td>
                      <td>
                        <i
                          className="bx bx-trash-alt"
                          style={{ cursor: "pointer", color: "red  " }}
                          onClick={() => eliminarUsuario(valor.id)}
                        ></i>

                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
