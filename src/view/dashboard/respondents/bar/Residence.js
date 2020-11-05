import React from "react";
import { Bar } from "react-chartjs-2";
import { Col } from "antd";

const Residence = ({ residence }) => {
  console.log("read", residence);

  const data = {
    labels: residence.label,
    datasets: [
      {
        barThickness: 25,
        data: residence.data,
        backgroundColor: "#13eecc",
      },
    ],
  };
  const option = {
    scaleFontFamily : "'Sukhumvit Set'",
    legend: {
      display: false,
    },
    xAxes: [{
      stacked: true,
      beginAtZero: true,
      scaleLabel: {
          labelString: 'Month'
      },
      ticks: {
          autoSkip: true
      }
  }],
    layout: {
      padding: {
        left: -50,
        right: 10,
        top: 10,
        bottom: 10
    }
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
    <Col>
      <h1 style={{ fontSize: "25px", color: "#171717",marginLeft:"-10px" }}>ที่พักอาศัย</h1>
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
        <Col style={{marginLeft:"-25px"}}>
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
              marginLeft: "100%",
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
