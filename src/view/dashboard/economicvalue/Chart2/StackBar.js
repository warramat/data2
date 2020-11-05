import React from "react";
import { Bar } from "@reactchartjs/react-chart.js";
import { Col } from "antd";
const StackedBar = ({ economicStackedBar }) => {
  const data = {
    labels: ["ข้อมูลทางเศรษฐกิจ"],
    datasets: [
      {
        barPercentage: 0.5,

        label: "ก่อนการแข่งขัน",
        data: [economicStackedBar.costsBefore],
        backgroundColor: "rgba(242, 230, 53, 1)",
      },
      {
        barPercentage: 0.5,

        label: "ระหว่างการแข่งขัน",
        data: [economicStackedBar.costsDuring],
        backgroundColor: "rgba(59, 136, 253, 1)",
      },
      {
        barPercentage: 0.5,

        label: "หลังการแข่งขัน",
        data: [economicStackedBar.costsAfter],
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

            callback: function (value, index, values) {
              return value + "M";
            },
            min: 0,
            max: 20000,
            stepSize: 2000,
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

  return (
    <Col>
      <h1 style={{ fontSize: "25px", color: "#171717", marginLeft: "-10px" }}>
        ผลกระทบทางเศรษฐกิจ
      </h1>
      <h6
        style={{
          fontSize: "16px",
          color: "#292766",
          paddingLeft: "10px",
          opacity: 0.5,
        }}
      >
        จำนวนเงิน
      </h6>
      <div>
        <Col style={{ marginLeft: "-25px" }}>
          <Bar data={data} options={options} />
        </Col>

        <Col>
          <div
            style={{
              fontSize: "16px",
              color: "#292766",
              opacity: "50%",
              transform: "rotate(-90deg)",
              transformOrigin: "2% 90%",
              marginLeft: "100%",
              width: "50px",
              marginTop: "-70px",
            }}
          >
            ข้อมูล
          </div>
        </Col>
      </div>
    </Col>
  );
};
export default StackedBar;
