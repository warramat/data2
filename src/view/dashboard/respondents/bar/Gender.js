import { Row } from "antd";
import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const Gender = () => {
  const data = {
    labels: ["มากกว่า 60 ปี", "41-60", "31-40", "21-30", "ต่ำกว่า 20 ปี"],
    datasets: [
      {
        barPercentage: 0.5,

        label: "ชาย",
        data: [5, 10, 15, 13, 10],
        backgroundColor: "#3B88FD",
      },
      {
        barPercentage: 0.5,

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
            stepSize: 5,

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
      <h4 style={{ fontSize: "25px", color: "#171717" }}>เพศและช่วงอายุ</h4>
      <p
        style={{
          fontSize: "16px",
          color: "#292766",
          paddingLeft: "1000px",
          opacity: 0.5,
        }}
      >
        อายุ
      </p>
      <div>
        <HorizontalBar data={data} options={options} />

        <Row
          className="col-jod2"
          style={{
            fontSize: "16px",
            color: "#292766",
            opacity: "50%",
            // transform: "rotate(-90deg)",
            // transformOrigin: "2% 90%",
            // width: "70px",
            // marginTop: "-40px",
            position: "relative",
            justifyContent: "end",
          }}
        >
          จำนวนคน
        </Row>
      </div>
    </>
  );
};

export default Gender;
