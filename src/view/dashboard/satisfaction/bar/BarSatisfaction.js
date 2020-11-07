import React from "react";
import { Bar } from "react-chartjs-2";
import { float1Point } from '../../../../tools/util'


const BarSatisfaction = ({ satisfaction }) => {
  let change2Point = []

  if (satisfaction.data) {
    change2Point = satisfaction.data.map((item) => {
      return float1Point(item)
    })
  }

  const data = {
    labels: satisfaction.label,
    datasets: [
      {
        barThickness: 75,
        data: change2Point,
        backgroundColor: "#13eecc",
      },
    ],
  };
  const option = {
    layout: {
      // padding: {
      //   left: 10,
      //   right: 40,
      //   top: 160,

      // }
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 5,
            stepSize: 1,
          },
        },
      ],
    },
  };

  return (
    < >
      <h1 style={{ fontSize: "25px", color: "#171717", }}>แบบสอบถาม</h1>
      <h6 style={{
        // fontSize: "16px",
        // color: "#292766",
        // paddingLeft: "20px",
        // // marginBottom: "-150px",
        // opacity: 0.5,
      }}>ระดับ</h6>
      <div >
        <Bar data={data} options={option} width={500} height={150} />

        <div
          className="f-satisfaction"
          style={{
            // fontSize: "16px",
            color: "#292766",
            opacity: "50%",
            transform: "rotate(-90deg)",
            transformOrigin: "2% 90%",
            // marginLeft: "100%",
            // width: "300px",
            position: "absolute",
            right: "-59px",
            bottom: "34px",
            marginTop: "-70px"
          }}>ความพึงพอใจ</div>
      </div>
    </>
  );
};

export default BarSatisfaction;