import React from "react";
import { Bar } from "react-chartjs-2";
import { Col } from "antd";

const Residence = ({ residence }) => {
  console.log("read", residence);

  const data = {
    labels: ["บ้านตัวเอง(ไม่เสียค่าใช้จ่าย)","บ้านตัวเอง","บ้านตัวเอง","บ้านตัวเอง","บ้านตัวเอง"],
    datasets: [
      {
        barThickness: 25,
        data: ["1","1","1","1","1"],
        backgroundColor: "#13eecc",
      },
    ],
  };
  const option = {
    labels: {
      textAlign: "center",
    },
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          ticks:{
            
              fornColor:"#171717",
              fornFamily:"Sukhumvit Set",
              fornSize: 12,
  
           
          }
        },
      ],
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
    <Col>
      <h1 style={{ fontSize: "25px", color: "#171717" }}>ที่พักอาศัย</h1>
      <h6
        style={{
          fontSize: "16px",
          color: "#292766",
          paddingLeft: "10px",
          opacity: 0.5,
        }}
      >
        คน
      </h6>
      <div >
        <Col >
          <Bar data={data} options={option} />
        </Col>
        <Col>
          <div
            style={{
              fontSize: "16px",
              color: "#292766",
              opacity: "50%",
              transform: "rotate(-90deg)",
              transformOrigin: "2% 90%",
              marginLeft: "360px",
              width: "50px",
              marginTop: "-70px",
            }}
          >
            สถานที่
          </div>
        </Col>
      </div>
    </Col>
  );
};

export default Residence;
