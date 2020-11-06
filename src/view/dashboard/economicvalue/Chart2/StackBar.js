import React from "react";
import { Bar } from "@reactchartjs/react-chart.js";
import { Col } from "antd";
import { ChangeToK } from "../../../../tools/util";
const StackedBar = ({ economicStackedBar, title }) => {
  const data = {
    labels: [title],
    datasets: [
      {
        barThickness: 50,
        label: "ก่อนการแข่งขัน",
        data: [economicStackedBar.costsBefore],
        backgroundColor: "rgba(242, 230, 53, 1)",
      },
      {
        barThickness: 50,
        label: "ระหว่างการแข่งขัน",
        data: [economicStackedBar.costsDuring],
        backgroundColor: "rgba(59, 136, 253, 1)",
      },
      {
        barThickness: 50,

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
            // beginAtZero: true,

            callback: function (value, index, values) {
              return ChangeToK(value);
            },
            // min: 0,
            // max: 60000000,
            // stepSize: 20000000,
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
      <b className="text-toppic">{title}</b>
      <div
        style={{
          fontSize: 16,
          color: "#292766",
          paddingLeft: "10px",
          opacity: 0.5,
        }}
      >
        จำนวนเงิน
      </div>
      <div>
        <Col style={{ marginLeft: "-25px" }}>
          <Bar data={data} options={options} />
        </Col>

        <Col>
          <div
            style={{
              fontSize: 16,
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
