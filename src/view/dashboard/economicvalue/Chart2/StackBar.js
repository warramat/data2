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
      backgroundColor: "rgba(242, 230, 53, 1)",
    },
    {
      barPercentage: 0.5,
      barThickness: 20,
      label: "ระหว่างการแข่งขัน",
      data: [15],
      backgroundColor: "rgba(59, 136, 253, 1)",
    },
    {
      barPercentage: 0.5,
      barThickness: 20,
      label: "หลังการแข่งขัน",
      data: [30],
      backgroundColor: "rgba(19, 238, 204, 1)",
    },
  ],
};

const options = {
  legend: {
    position: "top",
    align: "end",
    fullWidth: true,
    display: false,
  },
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
  <Card>
    <Bar data={data} options={options} />
  </Card>
);

export default StackedBar;
