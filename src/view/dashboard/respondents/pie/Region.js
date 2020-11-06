import React from "react";
import { Pie } from "react-chartjs-2";
import { Row, Col, Card } from "antd";

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
      <Row>
        <b
          className="text-toppic"
          style={{
            letterSpacing: "0.68px",
          }}
        >
          ไทย
        </b>
        <span className="ca-select" style={{ textAlign: "center", paddingTop: "8px" }}>
          {sumDataLiveRegion} คน
        </span>
      </Row>
      <Row style={{ height: "155px" }}>
        <Col style={{ paddingTop: "40px" }}>
          <div
            style={{
              letterSpacing: "0.68px",
              width: 13,
              height: 13,
              borderRadius: 10,
              backgroundColor: "#13EECC",
              border: "#13EECC",
              marginBottom: "-19px",
            }}
          ></div>
          <span className="fo">เหนือ</span>

          <div
            style={{
              width: 13,
              height: 13,
              borderRadius: 10,
              backgroundColor: "#0a5bb4",
              border: "#0a5bb4",
              marginTop: "20px",
              marginBottom: "-19px",
            }}
          ></div>
          <span className="fo">อีสาน</span>

          <div
            style={{
              width: 13,
              height: 13,
              borderRadius: 10,
              backgroundColor: "#f2e635",
              border: "#f2e635",
              marginTop: "20px",
              marginBottom: "-19px",
            }}
          ></div>
          <span className="fo">ตะวันออก</span>
        </Col>
        <Col style={{ paddingLeft: "20px", paddingTop: "40px" }}>
          <div
            style={{
              width: 13,
              height: 13,
              borderRadius: 10,
              backgroundColor: "#3b88fd",
              border: "#3b88fd",
              marginBottom: "-19px",
            }}
          ></div>
          <span className="fo">กลาง</span>

          <div
            style={{
              width: 13,
              height: 13,
              borderRadius: 10,
              backgroundColor: "#6204bf",
              border: "#6204bf",
              marginTop: "20px",
              marginBottom: "-19px",
            }}
          ></div>
          <span className="fo">ใต้</span>

          <div
            style={{
              width: 13,
              height: 13,
              borderRadius: 10,
              backgroundColor: "#f205cb",
              border: "#f205cb",
              marginTop: "20px",
              marginBottom: "-19px",
            }}
          ></div>
          <span className="fo">ตะวันตก</span>
        </Col>

        <Col style={{ top: "-150px", left: "35%" }}>
          <Pie data={data} options={options} />
        </Col>
      </Row>
    </Row>
  );
};
export default Region;
