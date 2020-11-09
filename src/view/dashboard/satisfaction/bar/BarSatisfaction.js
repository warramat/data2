import React from "react";
import { Bar } from "react-chartjs-2";
import { float1Point } from "../../../../tools/util";

const BarSatisfaction = ({ satisfaction }) => {
  let change2Point = [];

  if (satisfaction.data) {
    change2Point = satisfaction.data.map((item) => {
      return float1Point(item);
    });
  }

  const data = {
    labels: [
      "โดยรวม",
      "การเดินทาง",
      "สถานที่การจัดการแข่งขัน",
      "การประชาสัมพันธ์",
    ],
    datasets: [
      {
        barThickness: 40,
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
    animation: {
      duration: 0,
      onComplete: function () {
        var chartInstance = this.chart,
          ctx = chartInstance.ctx;

        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";

        this.data.datasets.forEach(function (dataset, i) {
          var meta = chartInstance.controller.getDatasetMeta(i);
          meta.data.forEach(function (bar, index) {
            var data = dataset.data[index];
            ctx.fillText(data, bar._model.x, bar._model.y - 5);
          });
        });
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 5,
            stepSize: 1,
            fontSize: 15
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            fontSize: 15,
            fontFamily: "Sukhumvit Set"
          },
        },
      ],
    },
  };

  return (
    <>
      <h1 style={{ fontSize: "25px", color: "#171717" }}>แบบสอบถาม</h1>
      <h6
        style={
          {
            // fontSize: "16px",
            // color: "#292766",
            // paddingLeft: "20px",
            // // marginBottom: "-150px",
            // opacity: 0.5,
          }
        }
      >
        ระดับ
      </h6>
      <div>
        <Bar data={data} options={option} width={500} height={250} />

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
            bottom: "20%",

          }}
        >
          ความพึงพอใจ
        </div>
      </div>
    </>
  );
};

export default BarSatisfaction;
