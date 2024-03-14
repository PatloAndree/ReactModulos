import React, { useState } from "react";
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
    <div className="row w-100 p-1">
      <p style={{ fontWeight: "bolder" }} className="pt-3 ms-2">Productos general</p>

      <div className="col-12 col-md-12 col-xl-4 mt-4">
        <FormProductos
          producto={selectedProducto}
          setValorRespuesta={setValorRespuesta}
          objetoEliminar={eliminaelUsuario}
        />
      </div>

      <div className=' className="col-12 col-md-12 col-xl-8 p-4 mt-1"'>
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
