// import React, { use } from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const ResultsChart = ({ result }) => {
    // const resultRes=use(resultData);
    // const result=resultRes.data

  
  return (
    <div>
        
      <LineChart width={800} height={500} data={result}>
        <XAxis dataKey="name"></XAxis>
        <YAxis ></YAxis>
        <Line dataKey="math" stroke="green"></Line>
        <Line dataKey={"chemistry"} stroke='red'></Line>
        <Line dataKey={'biology'} stroke="blue"></Line>
        <Line dataKey={'physics'} stroke="yellow"></Line>
        <Tooltip></Tooltip>
      </LineChart>
    </div>
  );
};

export default ResultsChart;
