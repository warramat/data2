/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Doughnut, Chart } from "react-chartjs-2";
import { Col } from "react-bootstrap";

const RadarC = ({ liveInChiangmai }) => {
  console.log("liveInChiangmai", liveInChiangmai);

  // let rest = liveInChiangmai.all - liveInChiangmai.count

  var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
  Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
    draw: function () {
      originalDoughnutDraw.apply(this, arguments);

      var chart = this.chart;
      var width = chart.chart.width,
        height = chart.chart.height,
        ctx = chart.chart.ctx;

      var fontSize = (height / 120).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "middle";

      var sum = 0;
      for (var i = 0; i < chart.config.data.datasets[0].data.length; i++) {
        sum += chart.config.data.datasets[0].data[i];
      }

      var text = sum,
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;

      ctx.fillText(text, textX, textY);
    },
  });

  const data = {
    labels: ["เชียงใหม่" , "ทั้งหมด"],
    datasets: [
      {
        // data: [ rest, liveInChiangmai.count],
        backgroundColor: ["#13EECC"],
        borderColor: ["#13EECC"],
        borderWidth: 0,
        hoverBorderWidth: 5,
        borderAlign: "inner",
      },
    ],
  };

  const options = {
    legend: {
      display: false,
      borderAlign: "inner",
    },
    cutoutPercentage: 75,
    rotation: 50,
    borderAlign: "inner",
  };

  return (
    <div style={{ height: 200, padding: 35 }}>
      <Col style={{ fontSize: 20 , right: 50 , bottom: 40 }}>
        <b>คนในพื้นที่เชียงใหม่</b>
      </Col>

      <Col style={{ bottom: 25 }}>
        <Doughnut data={data} options={options} />
      </Col>
    </div>
  );
};

export default RadarC;
