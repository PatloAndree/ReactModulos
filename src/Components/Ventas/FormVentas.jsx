import React, { useState, useEffect } from "react";
import { grabarVenta, editarVenta } from "../../Auth/Ventas/ventas_api";

function FormVentas({ venta, setValorRespuesta, objetoEliminar }) {
  const [ventaId, setVentaId] = useState(0);
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [monto, setMonto] = useState("");
  const [ganancia, setGanancia] = useState("");
  const [editarOpcion, setEditarOpcion] = useState(false);

  function limpiarData() {
    setNombre("");
    setTipo("");
    setMonto("");
    setGanancia("");
    setVentaId("");
    // setEditarOpcion(false);
  }

  useEffect(() => {
    // console.log(llamarUsuarios);
    if (venta !== "" && venta !== null) {
      console.log("soy vacio");
      setNombre(venta.nombre);
      setTipo(venta.tipo_venta);
      setMonto(venta.monto);
      setGanancia(venta.ganancia);
      setVentaId(venta.id);
      console.log(venta);
      setEditarOpcion(true);
    }
  }, [venta]);

  const grabarVentas = async (event) => {
    event.preventDefault();
    try {
      if (nombre !== "" && tipo !== "") {
        const nuevaVenta = {
          nombre: nombre,
          tipo: tipo,
          monto: monto,
          ganancia: ganancia,
        };
        const data = await grabarVenta(nuevaVenta);
        console.log("Registro aceptado");
        limpiarData();
        // fetchData();
        setValorRespuesta(true);
        console.log(data);
      } else {
        alert("Completa los campos");
      }
    } catch (error) {
      console.error("Error al grabar usuario:", error);
    }
  };

  const editarVentas = async (event) => {
    event.preventDefault();
    try {
      if (nombre !== "" && tipo !== "") {
        const objetoVenta = {
          nombre: nombre,
          tipo: tipo,
          monto: monto,
          ganancia: ganancia,
          id:ventaId
        };
        const data = await editarVenta(objetoVenta);
        console.log("Registro editado");
        setValorRespuesta(true);
        limpiarData();
        // fetchData();
        console.log(data);
      } else {
        alert("Completa los campos");
      }
    } catch (error) {
      console.error("Error al grabar usuario:", error);
    }
  };

  return (
    <div className=" row ms-1 border rounded p-2">
      {/* <div className="">   */}
      <div className="d-flex justify-content-between">
        <p>
          Agregar ventas <i className="bx bx-user text-primary"></i>
        </p>

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
            </div>
            <div className=" col-12 col-md-6 mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Tipo de venta
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Monto
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                value={monto}
                onChange={(e) => setMonto(e.target.value)}
              />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Ganancia
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPassword1"
                value={ganancia}
                onChange={(e) => setGanancia(e.target.value)}
              />
            </div>

            {/*              
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
                </select>
              </div>

              } */}
          </div>

          {editarOpcion == false ? (
            <button className="btn btn-primary" onClick={grabarVentas}>
              Registrar
            </button>
          ) : (
            <button className="btn btn-primary" onClick={editarVentas}>
              Editar
            </button>
          )}
        </form>
      </div>
      {/* </div>   */}
    </div>
  );
}

export default FormVentas;
