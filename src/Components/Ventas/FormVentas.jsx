import React, { useState, useEffect } from "react";
import { grabarVenta, editarVenta , eliminarVenta} from "../../Auth/Ventas/ventas_api";
import BarraBusqueda from "../BarraBusqueda/BarraBusquedaProductos";

function FormVentas({ venta, setValorRespuesta, objetoEliminar, props }) {
  const [ventaId, setVentaId] = useState(0);
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("1");
  const [monto, setMonto] = useState("");
  const [codigo, setCodigo] = useState("");

  const [ganancia, setGanancia] = useState("");
  const [editarOpcion, setEditarOpcion] = useState(false);

  const [usuarioSesion, setUsuarioSesion] = useState(null);
  const [dataDetalle, setDataDetalle] = useState(null);

  const [limpiarForm, setLimpiarForm] = useState(false);
  
  const generarCodigo = () => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let nuevoCodigo = '';
    for (let i = 0; i < 6; i++) {
      nuevoCodigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    setCodigo(nuevoCodigo);
  };

  function limpiarData() {
    setNombre("");
    setTipo("");
    setCodigo("");
    setMonto("");
    setGanancia("");
    setVentaId("");
    generarCodigo();
    // setEditarOpcion(false);
  }

  useEffect(() => {
    const storedUsuarioSesion = localStorage.getItem("usuario_sesion");
    setUsuarioSesion(JSON.parse(storedUsuarioSesion));
    generarCodigo();
    if (venta !== "" && venta !== null) {
      console.log("soy vacio");
      setNombre(venta.nombre);
      setTipo(venta.tipo_venta);
      setMonto(venta.monto);
      setGanancia(venta.ganancia);
      setVentaId(venta.id);
      // console.log(venta);
      setEditarOpcion(true);
    }
  }, [venta ,]);

  const handleAgregarFila = (fila) => {
    console.log("Fila agregada:", fila);  
    console.log(fila.length)
    setDataDetalle(fila);
    setLimpiarForm(false);
    
  };

  const handleLimpiarForm = () => {
    setLimpiarForm(true)
  };

  const grabarVentas = async (event) => {
    event.preventDefault();
    try {
      if (nombre !== "" && tipo !== "") {
        const nuevaVenta = {
          nombre: nombre,
          usuario:usuarioSesion.id,
          tipo: tipo,
          ganancia: dataDetalle[0].montoTotalVenta,
          codigo: codigo,
          data:dataDetalle
        };
        console.log(nuevaVenta);
        const data = await grabarVenta(nuevaVenta);
        setValorRespuesta(true);
        limpiarData();
        console.log("ENTRO 1");
        setLimpiarForm(true);
        console.log("SALGO 1");

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

  const eliminarVentas = async () => {
    try {
      if (objetoEliminar !== "") {
        const data = await eliminarVentas(objetoEliminar.id);
        console.log("Registro eliminado");
        limpiarData();
        setValorRespuesta(true);
        console.log(data);
      } else {
        alert("Completa los campos");
      }
    } catch (error) {
      console.error("Error al eliminar producto:", error);
    }
  };


  return (
    <div className=" row ms-1 border rounded p-2">
      <div className="d-flex justify-content-between">
        <p>
          Agregar ventas <i className="bx bx-user text-primary"></i>
        </p>

        <i className="bx bx-revision text-primary" onClick={limpiarData}></i>
      </div>
      <div className="">
        <form>
          <div className="row">
            <div className="col-12 col-md-12 mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Nombre cliente
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
           
          </div>
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Código venta
              </label>
              <input
                type="Text"
                className="form-control"
                id="exampleInputEmail1"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
                disabled
              />
            </div>
            <div className=" col-12 col-md-6 mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Tipo de venta
              </label>
              <select className="form-select" id="" onChange={(e) => setTipo(e.target.value)}>
                <option value="3">Bajo (menor a S/.50)</option>
                <option value="2">Medio (mayor a S/.50)</option>
                <option value="1">Alto (mayor a S/.100) </option>
              </select>
            </div>
           
          </div>
          <div className="row">
            <div className="col-12 col-md-12 col-xl-12 mb-3 ">
              <label for="exampleInputPassword1" className="form-label">
                Agregar productos
              </label>
              <BarraBusqueda onAgregarFila={handleAgregarFila} setLimpiarForm={limpiarForm} 
              
              />
            </div>

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
