import React from "react";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Event Tickets",
    },
  },
  responsive: true,
  interaction: {
    //mode: 'index' as const,
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

export default function BarChart({ event }) {
  const labels = event.EventTickets.map((ticket) => ticket.Category);
  // console.log("labels", labels);

  //Math.floor(Math.random() * 1000) + 1
  const data = {
    labels,
    datasets: [
      {
        label: "Booked Tickets",
        data: event.EventTickets.map(
          (ticket) => ticket.Quantity - ticket.Available
        ),
        // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        backgroundColor: "rgb(255, 99, 132)",
        stack: "Stack 0",
      },
      {
        label: "Available Tickets",
        data: labels.map(() => Math.floor(Math.random() * 1000) + 1),
        // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        backgroundColor: "rgb(75, 192, 192)",
        stack: "Stack 0",
      },
    ],
  };

  return (
    <div>
      {" "}
      <Bar options={options} data={data} />;
    </div>
  );
}
