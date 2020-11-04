import React from "react";
import { Bar } from "react-chartjs-2";
import { Col, Row } from "antd";



const BarResidence = ({ dataSource }) => {
  console.log("dataSource>>", dataSource)
  const data = {
    labels: "",
    datasets: [
      {
        barThickness: 25,
        data: "",
        backgroundColor: "#13eecc",
      },
    ],
  };
  const option = {
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            callback: function (value, index, values) {
              return value + "K";
            },
            min: 0,
            max: 10,
            stepSize: 2,
          },
        },
      ],
    },
  };

  return (
    <Col >
      <h1 style={{ fontSize: "25px", color: "#171717", }}>ที่พักอาศัย</h1>
      <h6 style={{
        fontSize: "16px",
        color: "#292766",
        opacity: 0.5,

      }}>คน</h6>
      <div style={{ marginRight: "50px" }}>
        <Bar data={data} options={option} />
      </div>

      <div style={{
        fontSize: "16px",
        color: "#292766",
        opacity: "50%",
        transform: "rotate(-90deg)",
        transformOrigin: "2% 90%",
        marginLeft: "350px",
      }}>สถานที่</div>
    </Col>
  );
};

export default BarResidence
