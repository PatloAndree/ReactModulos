import React, { useState } from "react";
import Listado from "../Home/Listado";
import BasicTable from "../Components/Usuarios/TablaUsuarios";
import TableVentas from "../Components/Ventas/TableVentas";
import TablaProductos from "../Components/Productos/TablaProductos";
import FormProductos from "../Components/Productos/FormProductos";

const ProductosPage = () => {

  const [selectedProducto, setSelectedProducto] = useState(null);
  const [valorRespuesta, setValorRespuesta] = useState(false);

  const [eliminaelUsuario, setEliminarUsuario] = useState(null);

  const handleRowClick = (producto) => {
    setSelectedProducto(producto);
  };

  const llamarProductos = (valorRespuesta) => {
    setValorRespuesta(valorRespuesta);
  };

  const handleEliminar = (usuario) => {
    setEliminarUsuario(usuario);
  };

  return (
    <div className="row w-100 p-3 ">
      <p style={{ fontWeight: "bolder" }}>Productos general</p>

      <div className="col-12 col-md-12 col-xl-4 h-75 border rounded p-4 mt-5">
        <FormProductos
          producto={selectedProducto}
          setValorRespuesta={setValorRespuesta}
          objetoEliminar={eliminaelUsuario}
        />
      </div>

      <div className=' className="col-12 col-md-12 col-xl-8 p-4 mt-4 "'>
        <TablaProductos 
          onRowClick={handleRowClick}
          llamarProductos={valorRespuesta}
          setValorRespuesta={setValorRespuesta}
          setEliminarUsuario={handleEliminar}
        />
      </div>
    </div>
  );
};

export default ProductosPage;
