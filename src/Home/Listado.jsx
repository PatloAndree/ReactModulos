import React, { useState, useEffect, useCallback } from "react";
import listarUsuarios from "../Auth/listarEmpleados_api";
import Loader from "react-js-loader";

const Listado = () => {
  const [loading, setLoading] = useState(false);
  const [usuarios, setUsuarios] = useState([]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const data = await listarUsuarios();
      setUsuarios(data.data);
      console.log("entroooo ");
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (usuarios.length === 0) {
      fetchData();
    }
  }, [usuarios, fetchData]);

  return (
    <div className="row w-100 pt-5">
      <div className="border rounded p-4">
        <table className="table align-middle mb-0 bg-white table-hover">
          <thead className=" mb-2">
            <tr>
              <th><p>Código</p></th>
              <th><p>Nombres</p></th>
              <th><p>Apellidos</p></th>
              <th className="text-center"><p>Status</p></th>
              <th><p>Dni</p></th>
              <th><p>Telefono</p></th>
              <th className="center"></th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="7" className="text-center">
                  <Loader
                    type="hourglass"
                    bgColor="gray"
                    color="gray"
                    title={"Cargando"}
                    size={40}
                  />
                </td>
              </tr>
            ) : (
              usuarios.map((valor, index) => (
                <tr key={index}>
                  <td>{valor.id}</td>
                  <td>{valor.name}</td>
                  <td>{valor.email}</td>
                  <td className="text-center">
                    {valor.status === 1 ? (
                      <span className="badge bg-success rounded-pill d-inline ">
                        Activo
                      </span>
                    ) : (
                      <span className="badge bg-danger rounded-pill d-inline ">
                        Inactivo
                      </span>
                    )}
                  </td>
                  <td>{valor.dni}</td>
                  <td>{valor.telefono}</td>
                  <td>
                    <i
                      className="bx bx-edit-alt"
                      style={{ cursor: "pointer", color: "blue" }}
                    ></i>
                  </td>
                  <td>
                    <i
                      className="bx bx-trash-alt"
                      style={{ cursor: "pointer", color: "red" }}
                      // onClick={() => eliminarUsuario(valor.id)}
                    ></i>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Listado;
