/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Doughnut, } from "react-chartjs-2";
import { showTextInside } from '../Donut/pluginDN';
import { Row, Col } from "antd";
import { ChangeToK } from "../../../../tools/util"

const RadarC = ({ liveInChiangmai }) => {
  let rest = ""
  if (liveInChiangmai.all) {
    rest = liveInChiangmai.all - liveInChiangmai.count
  }

  const data = {
    labels: ["เชียงใหม่", "พื้นที่อื่นๆ"],
    datasets: [
      {
        data: [liveInChiangmai.count, rest],
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
        text: ChangeToK(liveInChiangmai.count) + " คน",
        fontStyle: "Sukhumvit Set"
      },
    },


    responsive: {
      display: false
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
    <>
      <b className="text-toppic">ผู้เข้าร่วมการแข่งขันจากจังหวัดเชียงใหม่</b>
      <Row style={{ fontFamily: "Sukhumvit Set", height: "288px" }} align={"middle"}>
        <Col span={24}><div className="d-flex align-items-center">
          <Doughnut data={data} options={options} plugins={[showTextInside]}
            width={300} height={140}
          /></div></Col>
      </Row >
    </>
  );
};

export default RadarC;
