import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    month: "2015.1",
    a: 4000,
    b: 2400,
    c: 2400,
  },
  {
    month: "2015.2",
    a: 3000,
    b: 1398,
    c: 2210,
  },
  {
    month: "2015.3",
    a: 2000,
    b: 9800,
    c: 2290,
  },
  {
    month: "2015.4",
    a: 2780,
    b: 3908,
    c: 2000,
  },
  {
    month: "2015.5",
    a: 1890,
    b: 4800,
    c: 2181,
  },
  {
    month: "2015.6",
    a: 2390,
    b: 3800,
    c: 2500,
  },
  {
    month: "2015.7",
    a: 3490,
    b: 4300,
    c: 2100,
  },
];

const GraficoInicioBarras = () => {
  const toPercent = (decimal, fixed = 0) =>
    `${(decimal * 100).toFixed(fixed)}%`;

  const getPercent = (value, total) => {
    const ratio = total > 0 ? value / total : 0;

    return toPercent(ratio);
  };

  const renderTooltipContent = (o) => {
    const { payload, label } = o;
    const total = payload.reduce((result, entry) => result + entry.value, 0);

    return (
      <div className="customized-tooltip-content">
        <p className="total">{`${label} (Total: ${total})`}</p>
        <ul className="list">
          {payload.map((entry, index) => (
            <li key={`item-${index}`} style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value}(${getPercent(
                entry.value,
                total
              )})`}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div style={{ width: '100%', height: 500 }}>
        <ResponsiveContainer>
        <AreaChart
            // width={400}
            // height={400}
            data={data}
            stackOffset="expand"
            margin={{
            top: 20,
            right: 0,
            left: 20,
            bottom: 20,
            }}
        >
            <CartesianGrid strokeDasharray="2 4" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={toPercent} />
            <Tooltip content={renderTooltipContent} />
            <Area
            type="monotone"
            dataKey="a"
            stackId="1"
            stroke="#8884d8"
            fill="#176B87"
            />
            <Area
            type="monotone"
            dataKey="b"
            stackId="1"
            stroke="#82ca9d"
            fill="#D2DE32"
            />
            <Area
            type="monotone"
            dataKey="c"
            stackId="1"
            stroke="#ffc658"
            fill="#FF6969"
            />
        </AreaChart>
        </ResponsiveContainer>
    </div>
  );
};

export default GraficoInicioBarras;
