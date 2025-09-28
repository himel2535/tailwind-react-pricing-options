import React, { use } from "react";
import ResultsChart from "../ResultsChart/ResultsChart";

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
    <div>
        
    </div>
  )
};

export default ResultPromise;
