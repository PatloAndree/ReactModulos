import React, { useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  LineChart,
  Line,
  ResponsiveContainer
} from "recharts";
import { listarVentas } from "../../Auth/Ventas/ventas_api";
import { useState } from "react";

const BarChartExample = ({ ventasFiltradas }) => {
  const [dataVenta, setDataVenta] = useState([]);

  const consultarTipoVenta = async () => {
    console.log(ventasFiltradas);
    if (ventasFiltradas.length === 0) {
      try {
        const response = await listarVentas();
        setDataVenta(response.data);
        console.log("entrooo");
      } catch (error) {
        console.error("Error al consultar:", error);
      }
    } else {
      setDataVenta(ventasFiltradas);
      console.log("salgo");
    }
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        const { id, nombre, created_at, tipo_venta } = payload[0].payload;
        const fechaCortada = created_at.slice(0, 10);
      return (
        <div style={{ backgroundColor: '#EEEDEB', padding: '10px' }}>
          <p style={{fontSize:12}}>{`Nombre: ${nombre}`}</p>
          <p style={{fontSize:12}}>{`Fecha: ${fechaCortada}`}</p>
          <p style={{fontSize:12}}>{`Valor: ${tipo_venta}`}</p>

          <p style={{fontSize:12}}>{`${payload[0].value}`}</p>
          <p style={{fontSize:12}}>{`${payload[1].value}`}</p>
        </div>
      );
    }
  
    return null;
  };

  useEffect(() => {
    consultarTipoVenta();
  }, []);

  return (
    <div className="d-flex row ">
      <div className="col-12 col-md-6 col-xl-6  d-flex justify-content-center align-items-center" >
        <ResponsiveContainer>

        <BarChart
          width={700}
          height={500}
          data={ventasFiltradas}
        //   data={ventasFiltradas == "" ? dataVenta : ventasFiltradas}

        >
          <CartesianGrid strokeDasharray="1 5" />
          <XAxis dataKey="nombre" />
          <YAxis />
          <Tooltip content={<CustomTooltip/>} />
          <Legend />
          {/* <Bar dataKey="created_at" fill="#8884d8" /> */}
          <Bar dataKey="monto" fill="#0C2D57" />
          <Bar dataKey="ganancia" fill="#77D970" />
        </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="col-12 col-md-6 col-xl-6 d-flex justify-content-center align-items-center" style={{  height: 400 }}>
        <ResponsiveContainer>
        <LineChart width={800} height={400} data={ventasFiltradas}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nombre" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="monto" stroke="#8884d8" />
          <Line type="monotone" dataKey="ganancia" stroke="#82ca9d" />
        </LineChart>

        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartExample;
