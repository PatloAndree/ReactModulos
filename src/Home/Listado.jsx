import React, { useState, useEffect } from "react";
import axios from "axios";
import listarUsuarios from "../Auth/listarEmpleados_api";
import grabarUsuario from "../Auth/grabarEmpleado_api";
import editarUsuario from "../Auth/updateEmpleado_api";

function Listado({usuario, setValorRespuesta, objetoEliminar}) {

  const [idUsuario, setIdUsuario] = useState(0);
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [dni, setDni] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [editarOpcion, setEditarOpcion] = useState(false);
  const [loading, setLoading] = useState(false);
  const [usuarios, setUsuarios] = useState([]);

  function limpiarData() {
    setNombre("");
    setApellidos("");
    setDni("");
    setTelefono("");
    setIdUsuario("");
    setCorreo("");
    setEditarOpcion(false);

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
    fetchData();
    if (usuario !== "" && usuario !== null ) {
      setNombre(usuario.name);
      setApellidos(usuario.apellidos);
      setDni(usuario.dni);
      setTelefono(usuario.telefono);
      setCorreo(usuario.email);
      setIdUsuario(usuario.id);
      setEditarOpcion(true);
    }

    if (objetoEliminar !== "" && objetoEliminar !== null) {
      console.log(objetoEliminar.id);
        const idUsuario = objetoEliminar.id;
        eliminarUsuario(idUsuario);
    }
  }, [usuario, objetoEliminar]);


  const grabarNuevoUsuario = async (event) => {
    event.preventDefault();
    try {
      if (nombre !== "" && dni !== "") {
        const nuevoUsuario = {
          nombres: nombre,
          apellidos: apellidos,
          correo:correo,
          dni: dni,
          telefono: telefono,
          contrasena:contrasena
        };
        const data = await grabarUsuario(nuevoUsuario);
        console.log("Registro aceptado");
        setValorRespuesta(true);
        limpiarData();
        fetchData();
        console.log(data);
      } else {
        alert("Completa los campos");
      }
    } catch (error) {
      console.error("Error al grabar usuario:", error);
    }
  };

  const editarEmpleado = async (event) => {
    event.preventDefault();
    try {
      const usuarioActualizado = {
        id: idUsuario,
        nombres: nombre,
        apellidos: apellidos,
        correo:correo,
        dni: dni,
        telefono: telefono,
        contrasena:contrasena
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
        `http://127.0.0.1:8000/api/usuarios/eliminarUsuario/${id}`
      );
      console.log(response.data.message);
      setValorRespuesta(true);
      limpiarData();

    } catch (error) {
      console.error("Error al eliminar usuario Api:", error);
    }
  };

  return (
    <div className=" row ">

      {/* <div className="">   */}
      <div className="d-flex justify-content-between">

        <p>Agregar empleados <i className="bx bx-user text-primary"></i></p>

        <i className="bx bx-revision text-primary" onClick={limpiarData}></i>
      </div>
        <div className="">
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
              <div className="col-12 col-md-12 mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Correo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                />
              </div>
              <div className="col-12 col-md-12 mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  {
                    editarOpcion == false ? "Crear Contraseña" : "Cambiar contraseña"
                  }
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={contrasena}
                  onChange={(e) => setContrasena(e.target.value)}
                />
              </div>
              {
                editarOpcion == false 
                ?
                ""
                :
              <div className="col-12 mb-3 ">
                <label for="exampleInputPassword1" className="form-label">
                  Estado usuario
                </label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Selecciona</option>
                  <option value="1">Activo</option>
                  <option value="2">Inactivo</option>
                  {/* <option value="3">Three</option> */}
                </select>
              </div>

              }
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
      {/* </div>   */}

    </div>
  );
}

export default Listado;
