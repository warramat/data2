import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const Gender = () => {
  const data = {
    labels: ["มากกว่า 60 ปี", "41-60", "31-40", "21-30", "ต่ำกว่า 20 ปี"],
    datasets: [
      {
        barPercentage: 0.5,
        barThickness: 20,
        label: "ชาย",
        data: [5, 10, 15, 13, 10],
        backgroundColor: "#3B88FD",
      },
      {
        barPercentage: 0.5,
        barThickness: 20,
        label: "หญิง",
        data: [-5, -10, -15, -13, -10],
        backgroundColor: "#13EECC",
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
    layout: {
      padding: {
        left: 50,
        right: 50,
        top: 50,
        bottom: 50,
      },
    },
    scales: {
      yAxes: [
        {
          stacked: true,
        },
      ],
      xAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
            min: -15,
            max: 15,

            callback: function (value, index, values) {
              return value + "K";
            },
          },
        },
      ],
    },
  };
  return (
    <>
      <HorizontalBar data={data} options={options} />
    </>
  );
};

export default Gender;
