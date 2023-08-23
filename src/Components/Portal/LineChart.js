import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ chartData }) {
  const options = {
    plugins: {
      legend: {
        display: true,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
        grid: {
          display: true,
        },
      },
      y2: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;
