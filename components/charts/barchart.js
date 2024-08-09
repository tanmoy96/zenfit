import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const BarChart = () => {
  const labels = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug"];
  const datasets = [12, 45, 67, 43, 89, 34, 67, 43];
  const data = {
    labels: labels,
    datasets: [
      {
        // Title of Graph
        label: "Calories lost",
        data: datasets,
        backgroundColor: ["rgba(255, 99, 132, 0.8)"],
        borderColor: ["rgb(255, 99, 132)"],
        borderWidth: 1,
        barPercentage: 1,
        borderRadius: {
          topLeft: 5,
          topRight: 5,
        },
      },
      // insert similar in dataset object for making multi bar chart
    ],
  };
  const options = {
    scales: {
      y: {
        title: {
          display: false,
          text: "Y-axis Lable",
        },
        display: false,
        beginAtZero: true,
        max: 100,
        grid: {
          display: false,
        },
      },
      x: {
        title: {
          display: false,
          text: "x-axis Lable",
        },
        display: true,
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <div style={{ width: "350px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
