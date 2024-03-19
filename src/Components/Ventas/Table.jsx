import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import listarUsuarios from "../../Auth/listarEmpleados_api";
import editarUsuario from "../../Auth/updateEmpleado_api";

export default function TablaVentas({ ventasFiltradas }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
        {
            ventasFiltradas != "" 
            ?
            <div className="table">
              <TableContainer component={Paper}>
                <Table size="large" aria-label="simple table">
                  <TableHead style={{ backgroundColor: "#4723D9" }}>
                    <TableRow className="text-center">
                      <TableCell className="text-white">Nombre</TableCell>
                      <TableCell className="text-white" align="center">
                        Tipo 1
                      </TableCell>
                      <TableCell className="text-white" align="center">
                        Monto
                      </TableCell>
                      <TableCell className="text-white" align="center">
                        Ganancia
                      </TableCell>
                      <TableCell className="text-white" align="center">
                        Estado
                      </TableCell>
        
                      <TableCell className="text-white" align="center">
                        Actions
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {ventasFiltradas
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((usuario) => (
                        <TableRow key={usuario.id}>
                          <TableCell component="th" scope="row">
                            {usuario.nombre}
                          </TableCell>
                          <TableCell align="center">{usuario.tipo_venta}</TableCell>
                          <TableCell align="center">{usuario.codigo || "-"}</TableCell>
                          <TableCell align="center">
                            {usuario.ganancia || "-"}
                          </TableCell>
                          <TableCell align="center">
                            {usuario.status === 1 ? "Activo" : "Inactivo"}
                          </TableCell>
                          <TableCell align="center"></TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
                <TablePagination
                  rowsPerPageOptions={[10, 15, 25]}
                  component="div"
                  count={ventasFiltradas.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableContainer>
            </div>
            
            :
            <p>No hay datos en las fechas o tipo seleccionado</p>
    
        }
    </div>
  );
}
