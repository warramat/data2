/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Doughnut, Chart } from 'react-chartjs-2';
import {  Col } from 'react-bootstrap';

const RadarC = ({ dataSource }) => {
  console.log("dataSource>>", dataSource)
  
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
    }
  });

  const data = {
    labels: "",
    datasets: [
      {
        data: "",
        backgroundColor: ['#13EECC'],
        borderColor: ['#13EECC',],
        borderWidth: 0,
        hoverBorderWidth: 5,
        borderAlign: 'inner'
      },


    ],

  }

  const options = {
    legend: {
      display: false,
      borderAlign: 'inner'
    },
    cutoutPercentage: 75,
    rotation: 50,
    borderAlign: 'inner'

  }


  return (
    <div style={{ height: 245 }}>
      <div style={{ fontSize: 20 }}>
        <b>คนในพื้นที่เชียงใหม่</b>
      </div >
              <Col style={{left: 70}}>
                   <Doughnut  data={data}  options={options} />
              </Col>
            </div>
    )
}

export default RadarC