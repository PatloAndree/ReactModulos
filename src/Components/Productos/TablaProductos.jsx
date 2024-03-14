
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
import { listarProductos } from "../../Auth/Productos/productos_api";
import Loader from "react-js-loader";

export default function TablaProductos({
  onRowClick,
  llamarProductos,
  setValorRespuesta,
  setEliminarUsuario
}) {
  const [productos, setProductos] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);


  const listarProductosGeneral = async () => {
    const cargarDatos = await listarProductos();
    console.log("soy los datos de productos")
    if (cargarDatos) {
      setProductos(cargarDatos.data);
      setValorRespuesta(false);
      setLoading(true);
    }else{
        setLoading(false  );
    }
  };

  useEffect(() => {
    listarProductosGeneral();
  }, [llamarProductos]);

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

  const handleRowClick = (producto) => {
    if (onRowClick) {
      onRowClick(producto);
    }
  };

  const handleEliminar2 = (usuario1) => {
    setEliminarUsuario(usuario1)
  }

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
        loading !== false  && productos !== null ? 
            <TableContainer component={Paper}>
                <Table size="large" aria-label="simple table">
                <TableHead className="bg-general">
                    <TableRow className="text-center text-white bg-general">
                    <TableCell className="text-white">
                        Nombre
                        <TableSortLabel
                        active={orderBy === "nombre"}
                        direction={orderBy === "nombre" ? order : "asc"}
                        onClick={() => handleSort("nombre")}
                        ></TableSortLabel>
                    </TableCell>
                    <TableCell className="text-white">
                        Abreviación
                        <TableSortLabel
                        active={orderBy === "abreviacion"}
                        direction={orderBy === "abreviacion" ? order : "asc"}
                        onClick={() => handleSort("abreviacion")}
                        ></TableSortLabel>
                    </TableCell>
                    <TableCell  className="text-white">
                        Precio compra
                        <TableSortLabel
                        active={orderBy === "apellidos"}
                        direction={orderBy === "apellidos" ? order : "asc"}
                        onClick={() => handleSort("apellidos")}
                        ></TableSortLabel>
                    </TableCell>

                    <TableCell className="text-white">
                        Precio venta
                        <TableSortLabel
                        active={orderBy === "email"}
                        direction={orderBy === "email" ? order : "asc"}
                        onClick={() => handleSort("email")}
                        ></TableSortLabel>
                    </TableCell>
                    <TableCell className="text-white">Stock</TableCell>
                    <TableCell className="text-white">Estado</TableCell>
                    <TableCell className="text-white">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {productos
                    .filter((producto) => {
                        const fullName = `${producto.nombre}`.toLowerCase();
                        const preciocompra = producto.precio_compra ? producto.precio_compra.toString() : "";
                        const searchTermLowerCase = searchTerm.toLowerCase();
                        return (
                            fullName.includes(searchTermLowerCase) ||
                            preciocompra.includes(searchTermLowerCase)
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
                    .map((producto) => (
                        <TableRow key={producto.id}>
                        <TableCell>{producto.nombre}</TableCell>
                        <TableCell>{producto.abreviacion}</TableCell>
                        <TableCell>S/.{producto.precio_compra}</TableCell>
                        <TableCell>S/.{producto.precio_venta}</TableCell>
                        <TableCell>{producto.stock || "-"} u</TableCell>
                        <TableCell>
                            {producto.status === 1 ? (
                            <span className="badge text-bg-success">Activo</span>
                            ) : (
                            <span className="badge text-bg-danger">Inactivo</span>
                            )}
                        </TableCell>
                        <TableCell>
                            <div>
                            <i
                                className="bx bx-edit-alt fs-6"
                                style={{ cursor: "pointer", color: "blue" }}
                                onClick={() => handleRowClick(producto)}
                            ></i>

                            <i
                                className="bx bx-trash-alt fs-6"
                                style={{ cursor: "pointer", color: "red  " }}
                                onClick={() => handleEliminar2(producto)}
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
                count={productos.length}
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
