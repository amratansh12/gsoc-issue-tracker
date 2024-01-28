"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

interface ChartProps {
  years: {
    [key: string]: {
      projects_url: string;
      num_projects: number;
      projects: {[key: string]: string}[];
    }
  }
}

export const Chart = ({
  years,
}: ChartProps) => {
  const data = {
    labels: Object.keys(years),
    datasets: [
      {
        data: Object.values(years).map((year) => year.num_projects),
      },
    ],
  }

  const options = {
    plugins: {
      legend: {
        display: false
      }
    },
    elements: {
      line: {
        tension: 0,
        borderWidth: 1,
        borderColor: "#9395d3",
        backgroundColor: "#9395d330",
        fill: "start",
      },
      point: {
        radius: 0,
        hitRadius: 0,
      }
    },
  }

  return(
    <Line data={data} width={250} height={200} options={options}/>
  )
}
