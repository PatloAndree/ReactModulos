import React, { useEffect, useState }  from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { listarVentas } from "../../Auth/Ventas/ventas_api";

const data = [
  {
    name: "Page A",
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: "Page B",
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "Page C",
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "Page D",
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: "Page E",
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: "Page F",
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];


const GraficoInicio = () => {
  
  
  
  const[dataVenta, setDatavVenta] = useState([])
  const consultarTipoVenta = async () => {
  
    const response = await listarVentas();
    setDatavVenta(response.data);
    console.log(response.data)
  }
  
  
  
  useEffect(() => {
    consultarTipoVenta();
  }, []);


  return (
    <div style={{ width: '100%', height: 500 }}>
      <ResponsiveContainer>
        <ComposedChart
          layout="horizontal"
          width={500}
          height={500}
          data={dataVenta}
          margin={{
            top:20,
            right: 20,
            bottom: 0,
            left: 20,
          }}
        >
      <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="nombre" type="category" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Area dataKey="ganancia" fill="#8884d8" stroke="#8884d8" />
          </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoInicio;
