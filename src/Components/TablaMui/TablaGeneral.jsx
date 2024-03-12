import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { TableSortLabel } from "@mui/material";

export default function TablaGeneral({ headers, data , verBuscador}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    setSearchTerm("");
  };

  console.log("soy la data");
  console.log(data);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (

    
    <div className="table">
        {
            verBuscador == true
            ?
            <input
              label="Buscar"
              className="form-control"
              placeholder="Búsqueda en la tabla"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ marginBottom: 10 }}
            />
            :
            ""
        }
        {
            data != ""

            ?   

                <TableContainer component={Paper} >
                    <Table size="large" aria-label="simple table" >
                    <TableHead className="bg-general">
                        <TableRow className="text-center text-white bg-general">
                        {headers.map((header) => (
                            <TableCell key={header.key} className="text-white">
                            {header.label}
                            <TableSortLabel
                                active={orderBy === header.key}
                                direction={orderBy === header.key ? order : "asc"}
                                onClick={() => handleSort(header.key)}
                            />
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data
                        .filter((item) => {
                            const searchTermLowerCase = searchTerm.toLowerCase();
                            return headers.some((header) => {
                            const value = item[header.key] || "";
                            return value.toString().toLowerCase().includes(searchTermLowerCase);
                            });
                        })
                        .sort((a, b) => {
                            if (order === "asc") {
                            return a[orderBy] < b[orderBy] ? -1 : 1;
                            } else {
                            return a[orderBy] > b[orderBy] ? -1 : 1;
                            }
                        })
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => (
                            <TableRow key={row.id}>
                            {headers.map((header) => (
                                <TableCell key={header.key}>{row[header.key]}</TableCell>
                            ))}
                            </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                    <TablePagination
                    rowsPerPageOptions={[10, 15, 25]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    labelRowsPerPage="Filas por página"
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </TableContainer>

            :
                <p>No hay datos según el tipo ni rango de fechas seleccionado</p>

        }
    </div>
  );
}
