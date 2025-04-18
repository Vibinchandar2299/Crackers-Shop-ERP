import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
  } from "recharts";
  
  const data = [
    { name: "Jan", amt: 130000 },
    { name: "Feb", amt: 25000 },
    { name: "Mar", amt: 20000 },
    { name: "Apr", amt: 21000 },
    { name: "May", amt: 22000 },
    { name: "Jun", amt: 23000 },
    { name: "Jul", amt: 25000 },
    { name: "Aug", amt: 27000 },
    { name: "Sep", amt: 29000 },
    { name: "Oct", amt: 31000 },
    { name: "Nov", amt: 33000 },
    { name: "Dec", amt: 34000 }
  ];
  
  const MonthlyLineChart = () => {
    return (
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="amt" stroke="#10B981" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    );
  };
  
  export default MonthlyLineChart;
  