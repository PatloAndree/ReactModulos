import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from '@mui/material/TablePagination';
import listarUsuarios from "../../Auth/listarEmpleados_api";
import editarUsuario from "../../Auth/updateEmpleado_api";


export default function BasicTable({ onRowClick , llamarUsuarios ,setValorRespuesta }) {


  const [listar, setListar] = useState(llamarUsuarios)

  const [usuarios, setUsuarios] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [idUsuario, setIdUsuario] = useState(0);
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [dni, setDni] = useState("");
  const [telefono, setTelefono] = useState("");

  const [editarOpcion, setEditarOpcion] = useState(false);

  const listaUsuarios = async () => {
    const cargarDatos = await listarUsuarios();
  //   console.log(cargarDatos.data);
    if (cargarDatos) {
      setUsuarios(cargarDatos.data);
      setValorRespuesta(false);
    }
  };
  
  const ListaGeneral = () => {
    if (listar == true) {
        listaUsuarios();
    }
  }
  useEffect(() => {
    listaUsuarios();
    ListaGeneral()
  }, [llamarUsuarios]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const handleRowClick = (usuario) => {
    if (onRowClick) {
      onRowClick(usuario);
      console.log(usuario);
    }
  };


  return (
    <div className="table">
        <TableContainer  component={Paper}>
        <Table size="large" aria-label="simple table">
          <TableHead  style={{backgroundColor:'#4723D9'}}>
            <TableRow className="text-center">
              <TableCell className="text-white">Nombre</TableCell>
              <TableCell className="text-white" align="center">Email</TableCell>
              <TableCell className="text-white" align="center">DNI</TableCell>
              <TableCell className="text-white" align="center">Teléfono</TableCell>
              <TableCell className="text-white" align="center">Estado</TableCell>
              <TableCell className="text-white" align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usuarios
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((usuario) => (
                <TableRow key={usuario.id}>
                  <TableCell component="th" scope="row">
                    {usuario.name}
                  </TableCell>
                  <TableCell align="center">{usuario.email}</TableCell>
                  <TableCell align="center">{usuario.dni || '-'}</TableCell>
                  <TableCell align="center">{usuario.telefono || '-'}</TableCell>
                  <TableCell align="center">
                    {usuario.status === 1 ? 'Activo' : 'Inactivo'}
                  </TableCell>
                  <TableCell align="center">
                    <div>
                  <i
                          className="bx bx-edit-alt"
                          style={{ cursor: "pointer", color: "blue" }}
                          onClick={() => handleRowClick(usuario)}
                        > 
                        </i>
                     
                        <i
                          className="bx bx-trash-alt"
                          style={{ cursor: "pointer", color: "red  " }}
                        //   onClick={() => eliminarUsuario(valor.id)}
                        ></i>
                    </div>

                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={usuarios.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
}
