import React from "react";
import { 
  CategoryScale,
  Chart as ChartJS,
  Tooltip,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend,

} from "chart.js";

import { Line, Doughnut } from "react-chartjs-2";
import { orange, orangeLight, purple, purpleLight } from "../../constants/color";
import { getLastSevenDays } from "../../lib/features";


ChartJS.register(
  CategoryScale,
  Tooltip,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend,
);

const labels = getLastSevenDays();

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },

  scales:{
    x: {
      grid:{
        display: false,
      },
    },
    y:{
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },


};


const LineChart = ({ value = [] }) => {

    const data = {
      labels,
      datasets: [
        {
          data: value,
          label: "Revenue",
          fill: true,
          backgroundColor: purpleLight ,
          borderColor: purple,
        },
      ],
  };


  return ( <Line data = {data} options={lineChartOptions} /> );
};

const doughnutChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },

  },
  cutout: 120,
};

const DoughnutChart = ({value = [], labels = []}) => {

  const data = {
    labels,
    datasets: [
      {
        data: value,

        backgroundColor:[ purpleLight, orangeLight ] ,
        hoverBackgroundColor: [ purple, orange],
        borderColor: [purple , orange],
        offset: 30,
      },
    ],
};

  return <Doughnut style={{ zIndex: 10}} data={data} options={doughnutChartOptions}/> ; 
};


export {LineChart, DoughnutChart};