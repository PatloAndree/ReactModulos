import React, { useState, useEffect } from "react";
import { grabarProductos, editarProductos, eliminarProductos} from "../../Auth/Productos/productos_api";

function FormProductos({ producto, setValorRespuesta, objetoEliminar }) {
  
  const [productoId, setProductoId] = useState(0);
  const [nombre, setNombre] = useState("");
  const [abrev, setAbrev] = useState("");
  const [precio_compra, setPrecioCompra] = useState("");
  const [precio_venta, setPrecioVenta] = useState("");
  const [stock, setStock] = useState("");

  const [editarOpcion, setEditarOpcion] = useState(false);

  function limpiarData() {
    setNombre("");
    setAbrev("");
    setPrecioCompra("");
    setPrecioVenta("");
    setStock("");
    setEditarOpcion(false);
  }

  const grabarProducto = async (event) => {
    event.preventDefault();
    try {
      if (nombre !== "" && abrev !== "") {
        const nuevoProducto = {
          nombre: nombre,
          abreviacion:abrev,
          precio_compra:precio_compra,
          precio_venta:precio_venta,
          stock:stock
        };
        const data = await grabarProductos(nuevoProducto);
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

  const editarProducto = async (event) => {
    event.preventDefault();
    try {
      if (nombre !== "" && abrev !== "") {
        const nuevoProducto = {
          nombre: nombre,
          abreviacion:abrev,
          precio_compra:precio_compra,
          precio_venta:precio_venta,
          stock:stock,
          id:productoId
        };
        const data = await editarProductos(nuevoProducto);
        console.log("Registro aceptado");
        limpiarData();
        setValorRespuesta(true);
        console.log(data);
      } else {
        alert("Completa los campos");
      }
    } catch (error) {
      console.error("Error al grabar producto:", error);
    }
  };

  useEffect(() => {
    // console.log(llamarUsuarios);
    // fetchData();
    if (producto !== "" && producto !== null) {
      console.log("soy vacio");
      setNombre(producto.nombre);
      setAbrev(producto.abreviacion);
      setPrecioCompra(producto.precio_compra);
      setPrecioVenta(producto.precio_venta);
      setStock(producto.stock);
      setProductoId(producto.id)
      console.log(producto);
      setEditarOpcion(true);
    }

    if (objetoEliminar !== "" && objetoEliminar !== null) {
        eliminarProducto();
    }
  }, [producto, objetoEliminar]);

  const eliminarProducto = async () => {
    try {
      if (objetoEliminar !== "") {
        const data = await eliminarProductos(objetoEliminar.id);
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
    <div className=" row ">
      {/* <div className="">   */}
      <div className="d-flex justify-content-between">
        <p>
          Agregar productos <i className="bx bx-package text-primary"></i>
        </p>

        <i className="bx bx-revision text-primary" onClick={limpiarData}></i>
      </div>
      <div className="">
        <form>
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Nombre producto
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Producto"
                id="exampleInputEmail1"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className=" col-12 col-md-6 mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Abreviación
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Abrev"
                id="exampleInputEmail1"
                value={abrev}
                onChange={(e) => setAbrev(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Precio compra
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="S/."
                id="exampleInputEmail1"
                value={precio_compra}
                onChange={(e) => setPrecioCompra(e.target.value)}
              />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Precio venta
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="S/."
                id="exampleInputPassword1"
                value={precio_venta}
                onChange={(e) => setPrecioVenta(e.target.value)}
              />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Stock
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPassword1"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>

          </div>

          {editarOpcion == false ? (
            <button className="btn btn-primary" onClick={grabarProducto}>
              Registrar
            </button>
          ) : (
            <button className="btn btn-primary" onClick={editarProducto}>
              Editar
            </button>
          )}
        </form>
      </div>
      {/* </div>   */}
    </div>
  );
}

export default FormProductos;
