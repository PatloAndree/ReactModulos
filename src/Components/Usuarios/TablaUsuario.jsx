import React from 'react';
import TablaGeneral from '../TablaMui/TablaGeneral';

const headers = [
    { key: "name", label: "Nombre" },
    { key: "age", label: "Edad" },
    { key: "email", label: "Correo electrónico" },
  ];
  
  // Ejemplo de datos
  const data = [
    { id: 1, name: "Juan", age: 30, email: "juan@example.com" },
    { id: 2, name: "María", age: 25, email: "maria@example.com" },
    { id: 3, name: "Pedro", age: 35, email: "pedro@example.com" },
  ];


const TablaUsuario = () => {
    return (
        <div>
            <TablaGeneral  headers={headers} data={data}/>
            
        </div>
    );
}

export default TablaUsuario;
