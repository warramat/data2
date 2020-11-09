import React from "react";
import { Pie } from "react-chartjs-2";
import { Row, Col } from "antd";
import { ChangeToK } from '../../../../tools/util'

const Region = ({ liveRegion }) => {
  let sumDataLiveRegion = [];

  if (liveRegion.data) {
    sumDataLiveRegion = liveRegion.data.reduce((sum, Data) => {
      return sum + Data;
    }, 0);
  }

  const data = {
    labels: liveRegion.label,
    datasets: [
      {
        data: liveRegion.data,
        backgroundColor: [
          "#13EECC",
          "#3B88FD",
          "#0A5BB4",
          "#6204BF",
          "#F2E635",
          "#F205CB",
        ],
        borderWidth: 1,
        hoverBorderWidth: 5,
        hoverBorderColor: [
          "#13EECC",
          "#3B88FD",
          "#0A5BB4",
          "#6204BF",
          "#F2E635",
          "#F205CB",
        ],
        hoverBackgroundColor: [
          "#13EECC",
          "#3B88FD",
          "#0A5BB4",
          "#6204BF",
          "#F2E635",
          "#F205CB",
        ],
        display: false,
      },
    ],
  };
  const options = {
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    },
    legend: {
      display: false,
    },
  };

  return (
    <Row style={{ fontFamily: "Sukhumvit Set" }}>
      <Row style={{ paddingBottom: "20px" }}>
        <b
          className="text-toppic"
          style={{
            letterSpacing: "0.68px",
          }}
        >
          ไทย
        </b>
        <span className="ca-select" style={{ textAlign: "center", paddingTop: "8px" }}>
          {ChangeToK(sumDataLiveRegion)} คน
        </span>
      </Row>
      <Pie data={data} options={options} width={400} height={200} />
      <Row style={{ width: "100%" }}>
        <Row style={{
          paddingTop: "10px", width: "100%",
        }}
          className="d-flex justify-content-center">
          <Col className="btr">   <div
            style={{
              letterSpacing: "0.68px",
              width: 13,
              height: 13,
              borderRadius: 10,
              backgroundColor: "#13EECC",
              border: "#13EECC",

            }}
          ></div>
            <span className="fo">เหนือ</span></Col>

          <Col className="btr">
            <div
              style={{
                width: 13,
                height: 13,
                borderRadius: 10,
                backgroundColor: "#0a5bb4",
                border: "#0a5bb4",
              }}
            ></div>
            <span className="fo">อีสาน</span>
          </Col>
          <Col className="btr">
            <div
              style={{
                width: 13,
                height: 13,
                borderRadius: 10,
                backgroundColor: "#f2e635",
                border: "#f2e635",

              }}
            ></div>
            <span className="fo">ตะวันออก</span>
          </Col>
        </Row>
        <Row style={{
          width: "100%",
          paddingTop: "10px",

        }} className="d-flex justify-content-center">
          <Col className="btr"> <div
            style={{
              width: 13,
              height: 13,
              borderRadius: 10,
              backgroundColor: "#3b88fd",
              border: "#3b88fd",
            }}
          ></div>
            <span className="fo">กลาง</span></Col>

          <Col className="btr">
            <div
              style={{
                width: 13,
                height: 13,
                borderRadius: 10,
                backgroundColor: "#6204bf",
                border: "#6204bf",

              }}
            ></div>
            <span className="fo">ใต้</span>
          </Col>
          <Col className="btr"> <div
            style={{
              width: 13,
              height: 13,
              borderRadius: 10,
              backgroundColor: "#f205cb",
              border: "#f205cb",
            }}
          ></div>
            <span className="fo">ตะวันตก</span></Col>

        </Row>
      </Row>
    </Row>
  );
};
export default Region;
