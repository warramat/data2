import React from "react";
import { Bar } from "@reactchartjs/react-chart.js";
import { Col } from "antd";
import { ChangeToK } from "../../../../tools/util";

const Gender = ({ gender }) => {
  const data = {
    labels: gender.label,
    datasets: [
      {
        type: "bar",
        label: "ชาย",
        backgroundColor: "rgba(59, 136, 253, 1)",
        data: gender.dataMale,
      },
      {
        type: "bar",
        label: "หญิง",
        backgroundColor: "rgba(19, 238, 204, 1)",
        data: gender.dataFemale,
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
          ticks: {
            beginAtZero: true,
            // min: 0,
            // max: 15,
            // stepSize: 5,

            callback: function (value, index, values) {
              return ChangeToK(value);
            },
          },
        },
      ],
      xAxes: [{}],
    },
  };
  return (
    <Col>
      <b className="text-toppic">เพศและช่วงอายุ</b>
      <h6
        style={{
          fontSize: "16px",
          color: "#292766",
          paddingLeft: "10px",
          opacity: 0.5,
        }}
      >
        จำนวนคน
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
            อายุ
          </div>
        </Col>
      </div>
    </Col>
  );
};

export default Gender;
