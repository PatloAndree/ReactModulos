import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { TableSortLabel } from "@mui/material";
import listarUsuarios from "../../Auth/listarEmpleados_api";
import Loader from "react-js-loader";

export default function BasicTable({
  onRowClick,
  llamarUsuarios,
  setValorRespuesta,
  setEliminarUsuario,
}) {
  const [usuarios, setUsuarios] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const listaUsuarios = async () => {
    const cargarDatos = await listarUsuarios();
    if (cargarDatos) {
      setUsuarios(cargarDatos.data);
      setValorRespuesta(false);
      setLoading(false);
    } else {
      setLoading(true);
    }
  };

  useEffect(() => {
    listaUsuarios();
  }, [llamarUsuarios]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    setSearchTerm("");
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleRowClick = (usuario) => {
    if (onRowClick) {
      onRowClick(usuario);
    }
  };

  const handleEliminar2 = (usuario1) => {
    setEliminarUsuario(usuario1);
  };

  return (
    <div className="table">
      <input
        label="Buscar"
        className="form-control"
        placeholder="Busca en la tabla"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: 10 }}
      />
      {loading === false && usuarios !== null ? (
        <TableContainer component={Paper}>
          <Table size="large" aria-label="simple table">
            <TableHead className="bg-general">
              <TableRow className="text-center text-white bg-general">
                <TableCell className="text-white">
                  Nombres
                  <TableSortLabel
                    active={orderBy === "name"}
                    direction={orderBy === "name" ? order : "asc"}
                    onClick={() => handleSort("name")}
                  ></TableSortLabel>
                </TableCell>
                <TableCell className="text-white">
                  Apellidos
                  <TableSortLabel
                    active={orderBy === "apellidos"}
                    direction={orderBy === "apellidos" ? order : "asc"}
                    onClick={() => handleSort("apellidos")}
                  ></TableSortLabel>
                </TableCell>

                <TableCell className="text-white">
                  Email
                  <TableSortLabel
                    active={orderBy === "email"}
                    direction={orderBy === "email" ? order : "asc"}
                    onClick={() => handleSort("email")}
                  ></TableSortLabel>
                </TableCell>
                <TableCell className="text-white">DNI</TableCell>
                <TableCell className="text-white">Teléfono</TableCell>
                <TableCell className="text-white">Estado</TableCell>
                <TableCell className="text-white">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usuarios
                .filter((usuario) => {
                  const fullName =
                    `${usuario.name} ${usuario.apellidos} `.toLowerCase();
                  const dni = usuario.dni ? usuario.dni.toString() : "";
                  const telefono = usuario.telefono
                    ? usuario.telefono.toString()
                    : "";
                  const searchTermLowerCase = searchTerm.toLowerCase();
                  return (
                    fullName.includes(searchTermLowerCase) ||
                    dni.includes(searchTermLowerCase) ||
                    telefono.includes(searchTermLowerCase)
                  );
                })
                .sort((a, b) => {
                  if (order === "asc") {
                    return a[orderBy] < b[orderBy] ? -1 : 1;
                  } else {
                    return a[orderBy] > b[orderBy] ? -1 : 1;
                  }
                })
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((usuario) => (
                  <TableRow key={usuario.id}>
                    <TableCell>{usuario.name}</TableCell>
                    <TableCell>{usuario.apellidos}</TableCell>
                    <TableCell>{usuario.email}</TableCell>
                    <TableCell>{usuario.dni || "-"}</TableCell>
                    <TableCell>{usuario.telefono || "-"}</TableCell>
                    <TableCell>
                      {usuario.status === 1 ? (
                        <span className="badge text-bg-success">Activo</span>
                      ) : (
                        <span className="badge text-bg-danger">Inactivo</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div>
                        <i
                          className="bx bx-edit-alt"
                          style={{ cursor: "pointer", color: "blue" }}
                          onClick={() => handleRowClick(usuario)}
                        ></i>

                        <i
                          className="bx bx-trash-alt"
                          style={{ cursor: "pointer", color: "red  " }}
                          onClick={() => handleEliminar2(usuario)}
                        ></i>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[10, 15, 25]}
            component="div"
            count={usuarios.length}
            rowsPerPage={rowsPerPage}
            labelRowsPerPage="Filas por página"
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      ) : (
        <Loader
          type="spinner-default"
          bgColor={"#4723D9"}
          color={"#4723D9"}
          size={60}
        />
      )}
    </div>
  );
}
