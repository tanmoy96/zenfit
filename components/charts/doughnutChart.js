import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughtnutChart = () => {
  let data = [
    {
      label: "Label 1",
      value: 55,
      color: "rgba(0, 43, 73, 1)",
      cutout: "50%",
    },
    {
      label: "Label 2",
      value: 15,
      color: "rgba(0, 103, 160, 1)",
      cutout: "50%",
    },
    {
      label: "Label 3",
      value: 80,
      color: "rgba(83, 217, 217, 1)",
      cutout: "50%",
    },
  ];

  const options = {
    plugins: {
      legend: {
        display: false,
        position: "right",
      },
      responsive: true,
      cutout: "50%",
    },
  };

  const finalData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => Math.round(item.value)),
        backgroundColor: data.map((item) => item.color),
        borderColor: data.map((item) => item.color),
        borderWidth: 1,
        dataVisibility: new Array(data.length).fill(true),
      },
    ],
  };

  return <Doughnut data={finalData} options={options} />;
};

export default DoughtnutChart;
