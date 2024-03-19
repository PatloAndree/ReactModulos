import React, { useState, useEffect, useCallback } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { TableSortLabel } from "@mui/material";
import { listarVentas } from "../../Auth/Ventas/ventas_api";
import Loader from "react-js-loader";


export default function TableVentas({
  onRowClick,
  llamarUsuarios,
  setValorRespuesta,
  setEliminarUsuario,
}) {
  const [ventas, setVentas] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const listarTodasVentas = useCallback(async () => {
    try {
      const cargarDatos = await listarVentas();
      if (cargarDatos) {
        setVentas(cargarDatos.data);
        // console.log(cargarDatos);
        setValorRespuesta(false);
        setLoading(true);
      }else{
        setLoading(false);

      }
    } catch (error) {
      console.error('Error al listar las ventas:', error);
    }
  }, []); 

  useEffect(() => {
    
    listarTodasVentas();
  }, [llamarUsuarios,setValorRespuesta]);

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

  const handleRowClick = (venta) => {
    if (onRowClick) {
      onRowClick(venta);
    }
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
      {
          loading !== false && ventas !== null

          ?
          <TableContainer component={Paper}>
            <Table sx={{ width: 1 }} aria-label="simple table">
              <TableHead className="bg-general">
                <TableRow className="text-center text-white bg-general">
                  <TableCell className="text-white">
                    Código  
                    <TableSortLabel
                      active={orderBy === "nombre"}
                      direction={orderBy === "nombre" ? order : "asc"}
                      onClick={() => handleSort("nombre")}
                    ></TableSortLabel>
                  </TableCell>
                  <TableCell className="text-white">
                    Tipo
                    <TableSortLabel
                      active={orderBy === "apellidos"}
                      direction={orderBy === "apellidos" ? order : "asc"}
                      onClick={() => handleSort("apellidos")}
                    ></TableSortLabel>
                  </TableCell>

                  <TableCell className="text-white">
                    Cliente
                    <TableSortLabel
                      active={orderBy === "email"}
                      direction={orderBy === "email" ? order : "asc"}
                      onClick={() => handleSort("email")}
                    ></TableSortLabel>
                  </TableCell>
                  <TableCell className="text-white">Fecha</TableCell>
                  <TableCell className="text-white">Monto total</TableCell>


                  <TableCell className="text-white">Estado</TableCell>
                  <TableCell className="text-white">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ventas
                  .filter((venta) => {
                    const fullName = venta.nombre.toLowerCase();
                    const searchTermLowerCase = searchTerm.toLowerCase();
                    return fullName.includes(searchTermLowerCase);
                  })
                  .sort((a, b) => {
                    if (order === "asc") {
                      return a[orderBy] < b[orderBy] ? -1 : 1;
                    } else {
                      return a[orderBy] > b[orderBy] ? -1 : 1;
                    }
                  })
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((venta) => (
                    <TableRow key={venta.id}>
                      <TableCell>{venta.codigo_venta}</TableCell>
                      <TableCell>
                        {venta.tipo_venta === 1 ? (
                          <span className="badge text-bg-success">Alto</span>
                        ) : venta.tipo_venta === 2 ? (
                          <span className="badge text-bg-warning">Medio</span>
                        ) : (
                          <span className="badge text-bg-danger">Bajo</span>
                        )}
                      </TableCell>
                      <TableCell>{venta.nombre}</TableCell>
                      <TableCell>{(venta.created_at).slice(0,10)}</TableCell>

                      <TableCell>S/.{venta.ganancia || "-"}</TableCell>
                      <TableCell>
                        {venta.status === 1 ? (
                          <span className="badge text-bg-success">Activo</span>
                        ) : (
                          <span className="badge text-bg-danger">Inactivo</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <div>
                          <i
                            className="bx bx-detail fs-6 pe-1 "
                            style={{ cursor: "pointer", color: "gray" }}
                            // onClick={() => handleRowClick(venta)}
                          ></i>
                          <i
                            className="bx bx-edit-alt fs-6 pe-1"
                            style={{ cursor: "pointer", color: "blue" }}
                            onClick={() => handleRowClick(venta)}
                          ></i>
                          <i
                            className="bx bx-trash-alt fs-6"
                            style={{ cursor: "pointer", color: "red  " }}
                            // onClick={() => handleEliminar2(venta)}
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
              count={ventas.length}
              rowsPerPage={rowsPerPage}
              labelRowsPerPage="Filas por página"
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>

          :
          <Loader type="spinner-default" bgColor={"#4723D9"} color={"#4723D9"} size={60} />

      }
    </div>
  );
}
