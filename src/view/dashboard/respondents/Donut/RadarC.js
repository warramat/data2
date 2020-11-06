/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { showTextInside } from '../Donut/pluginDN';
import { Row } from "antd";

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
        text: liveInChiangmai.all +  " ทั้งหมด",
      },
    },

    layout: {
      padding: {
        left: 5,
        right: 5,
        top: 5,
        bottom: 5,
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
    <Row style={{ fontFamily: "Sukhumvit Set" }}>
      <Row>

         <b className="text-toppic">คนในพื้นที่เชียงใหม่</b>
      </Row>
       
     
    <Row className="pt-1" style={{paddingLeft: 50}} >

        <Doughnut data={data} options={options} plugins={[showTextInside]} />
  

    </Row>
      
    </Row>
  );
};

export default RadarC;
