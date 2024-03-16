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
    <div className="row w-100  cuerpo_general">
      <p style={{ fontWeight: "bolder" }} className="mt-2">Ventas generales</p>

      <div className="col-12 col-md-12 col-xl-4 p-3 ">
        <FormVentas
          venta={selectedVenta}
          setValorRespuesta={setValorRespuesta}
          objetoEliminar={eliminaelUsuario}
        />
      </div>

      <div className=' className="col-12 col-md-12 col-xl-8 p-3 "'>
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
