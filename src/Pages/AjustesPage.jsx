import React, { useState } from "react";
import Listado from "../Home/Listado";
import BasicTable from "../Components/Usuarios/TablaUsuarios";

const AjustesPage = () => {

  const [selectedUsuario, setSelectedUsuario] = useState(null);
  const [valorRespuesta, setValorRespuesta] = useState(false);

  const [eliminaelUsuario, setEliminarUsuario] = useState(null);

  const handleRowClick = (usuario) => {
    setSelectedUsuario(usuario);
  };

  const llamarUsuarios = (valorRespuesta) => {
    setValorRespuesta(valorRespuesta);
  };

  const handleEliminar = (usuario) => {
    setEliminarUsuario(usuario);
  };

  return (
    <div className="row p-3">
      <p style={{ fontWeight: "bolder" }} className="mt-2">Listado general</p>

      <div className="col-12 col-md-12 col-xl-4 mt-4">
        <Listado
          usuario={selectedUsuario}
          setValorRespuesta={setValorRespuesta}
          objetoEliminar={eliminaelUsuario}
        />
      </div>

      <div className=' className="col-12 col-md-12 col-xl-8 p-3 mt-2 "'>
        <BasicTable
          onRowClick={handleRowClick}
          llamarUsuarios={valorRespuesta}
          setValorRespuesta={setValorRespuesta}
          setEliminarUsuario={handleEliminar}
        />
      </div>
    </div>
  );
};

export default AjustesPage;
