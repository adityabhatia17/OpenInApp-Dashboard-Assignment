import React from "react";
import { Pie } from "react-chartjs-2";

function MonthlyPieChart({ data }) {
 
  const monthlyData = {};
  data.forEach((entry) => {
    const timestamp = entry[0];
    const value = entry[1];
    const date = new Date(timestamp);
    const monthYear = `${date.getFullYear()}-${date.getMonth() + 1}`;
    if (!monthlyData[monthYear]) {
      monthlyData[monthYear] = 0;
    }
    monthlyData[monthYear] += value;
  });

  
  const chartData = {
    labels: Object.keys(monthlyData),
    datasets: [
      {
        data: Object.values(monthlyData),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#33FF66"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#33FF66"],
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: true,
  };

  return <Pie data={chartData} options={options} />;
}

export default MonthlyPieChart;
