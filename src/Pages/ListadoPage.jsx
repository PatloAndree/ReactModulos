import React, { useState } from "react";
import FormVentas from "../Components/Ventas/FormVentas";
import TableVentas from "../Components/Ventas/TableVentas";

const ListadoPage = () => {
  const [selectedVenta, setSelectedVenta] = useState(null);
  const [valorRespuesta, setValorRespuesta] = useState(false);
  const [eliminaelUsuario, setEliminarUsuario] = useState(null);

  const handleRowClick = (venta) => {
    setSelectedVenta(venta);
  };

  const llamarUsuarios = (valorRespuesta) => {
    setValorRespuesta(valorRespuesta);
  };

  const handleEliminar = (usuario) => {
    setEliminarUsuario(usuario);
  };

  return (
    <div className="row w-100 p-3 ">
      <p style={{ fontWeight: "bolder" }}>Ventas generales</p>

      <div className="col-12 col-md-12 col-xl-4 h-50 border rounded p-4 mt-5">
        <FormVentas
          venta={selectedVenta}
          setValorRespuesta={setValorRespuesta}
          objetoEliminar={eliminaelUsuario}
        />
      </div>

      <div className=' className="col-12 col-md-12 col-xl-8 p-4 mt-4 "'>
        <TableVentas
          onRowClick={handleRowClick}
          llamarUsuarios={valorRespuesta}
          setValorRespuesta={setValorRespuesta}
          setEliminarUsuario={handleEliminar}
        />
      </div>
    </div>
  );
};

export default ListadoPage;
