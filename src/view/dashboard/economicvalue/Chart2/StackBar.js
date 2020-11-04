import React from "react";
import { Bar } from "@reactchartjs/react-chart.js";
import { Card } from "antd";

const data = {
  labels: ["ข้อมูลทางเศรษฐกิจ"],
  datasets: [
    {
      barPercentage: 0.5,
      barThickness: 20,
      label: "ก่อนการแข่งขัน",
      data: [50],
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      barPercentage: 0.5,
      barThickness: 20,
      label: "ระหว่างการแข่งขัน",
      data: [15],
      backgroundColor: "rgb(54, 162, 235)",
    },
    {
      barPercentage: 0.5,
      barThickness: 20,
      label: "หลังการแข่งขัน",
      data: [30],
      backgroundColor: "rgb(75, 192, 192)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 140,
          callback: function (value, index, values) {
            return value + "M";
          },
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
      },
    ],
  },
};

const StackedBar = () => (
  <Card
    style={{
      borderBlockColor: "black",
      borderRadius: 10,
      background: "#FFFFFF",
      margin: 20,
      fontFamily: "Sukhumvit Set",
    }}
  >
    <Bar data={data} options={options} />
  </Card>
);

export default StackedBar;
