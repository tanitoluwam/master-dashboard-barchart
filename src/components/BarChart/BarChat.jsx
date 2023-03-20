import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  // Title,
  // Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  // Title,
  // Tooltip,
  Legend
);

// ChartJS.register(ChartDataLabels);

export const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      beginAtZero: true,
      max: 3000,
    },
  },
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,

  plugins: {
    legend: {
      display: false,
    },
  },
};
const labels = [
  "Russia",
  "Uganda",
  "South Africa",
  "Nigeria",
  "Ghana",
  "Croatia",
  "Argentina",
  "China",
];

export const state = {
  labels,
  datasets: [
    {
      data: [1156, 1770, 800, 2100, 1156, 850, 850, 420],
      backgroundColor: "rgb(8,172,172)",
      // barPercentage: 0.7,
      // categoryPercentage: 1,
    },
  ],
};

export const BarChart = () => {
  return <Bar options={options} data={state} />;
};
// datalabels: {
//       anchor: "end",
//       align: "center",
//       formatter: Math.round,
//       font: {
//         weight: 500,
//         size: 12,
//       },
//     },
