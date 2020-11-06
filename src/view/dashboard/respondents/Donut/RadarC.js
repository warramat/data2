/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Doughnut, Chart } from "react-chartjs-2";
import { Col } from "react-bootstrap";
import { showTextInside } from '../Donut/pluginDN';

const RadarC = ({ liveInChiangmai }) => {
  console.log("liveInChiangmai", liveInChiangmai);

  let rest = liveInChiangmai.all - liveInChiangmai.count


  const data = {
    labels: ["เชียงใหม่", "ทั้งหมด"],
    datasets: [
      {
        data: [rest, liveInChiangmai.count],
        backgroundColor: ["#13EECC"],
        borderColor: ["#13EECC"],
        borderWidth: 0,
        hoverBorderWidth: 5,
        borderAlign: "inner",
      },
    ],
  };

  const options = {
    elements: {
      center: {
        text: liveInChiangmai.all +  "ทั้งหมด",
      },
    },
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
      <Col style={{ fontSize: 20, right: 50, bottom: 40 }}>
        <b>คนในพื้นที่เชียงใหม่</b>
      </Col>

      <Col style={{ bottom: 25 }}>
        <Doughnut data={data} options={options} plugins={[showTextInside]} />
      </Col>
    </div>
  );
};

export default RadarC;
