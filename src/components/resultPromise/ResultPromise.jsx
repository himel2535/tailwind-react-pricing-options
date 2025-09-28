import React, { use } from "react";
import ResultsChart from "../ResultsChart/ResultsChart";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

const ResultPromise = ({ resultData }) => {
  const resultsPromise = use(resultData);
  const results = resultsPromise.data;

  const marksChartData = results.map((studentData) => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      phy: studentData.marks.physics,
      che: studentData.marks.chemistry,
      math: studentData.marks.math,
      bio: studentData.marks.biology,
    };

    const avg = (student.phy + student.che + student.bio + student.math) / 4;
    student.avg = avg;

    return student;
  });
  console.log(marksChartData);

  return(
    <div className="flex justify-center items-center min-h-screen">
        <BarChart width={1000} height={300} data={marksChartData}>


            <Tooltip></Tooltip>
            <Legend></Legend>
            <XAxis dataKey={"name"}></XAxis>
            <YAxis></YAxis>
            <Bar dataKey={"avg"} fill="blue"></Bar>            
            <Bar dataKey={"phy"} fill="green"></Bar>            
            <Bar dataKey={"che"} fill="yellow"></Bar>            
            <Bar dataKey={"bio"} fill="pink"></Bar>
            <Bar dataKey={"math"} fill="red"></Bar>

        </BarChart>
    </div>
  )
};

export default ResultPromise;
