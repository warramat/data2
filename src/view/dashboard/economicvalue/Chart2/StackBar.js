import React from "react";
import { Bar } from "@reactchartjs/react-chart.js";
import { Col, Row } from "antd";
import { ChangeToK } from "../../../../tools/util";
const StackedBar = ({ economicStackedBar, title }) => {
  let totalCost = "";
  if (economicStackedBar) {
    totalCost =
      economicStackedBar.costsBefore +
      economicStackedBar.costsDuring +
      economicStackedBar.costsAfter;
  }
  const data = {
    labels: [title],
    datasets: [
      {
        barThickness: 50,
        label: "ก่อนการแข่งขัน",
        data: [economicStackedBar.costsBefore],
        backgroundColor: "rgba(242, 230, 53, 1)",
      },
      {
        barThickness: 50,
        label: "ระหว่างการแข่งขัน",
        data: [economicStackedBar.costsDuring],
        backgroundColor: "rgba(59, 136, 253, 1)",
      },
      {
        barThickness: 50,

        label: "หลังการแข่งขัน",
        data: [economicStackedBar.costsAfter],
        backgroundColor: "rgba(19, 238, 204, 1)",
      },
    ],
  };

  const options = {
    legend: {
      position: "top",
      align: "end",
      fullWidth: true,
      display: false,
    },

    scales: {
      yAxes: [
        {
          stacked: true,

          ticks: {
            // beginAtZero: true,

            callback: function (value) {
              return ChangeToK(value);
            },
            // min: 0,
            // max: 60000000,
            // stepSize: 20000000,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
          ticks: {
            fontSize: 18,
            fontFamily: "'Sukhumvit Set',sans-serif",
          },
        },
      ],
    },
  };

  return (
    <Col>
      <b className="text-toppic">{title}</b>
      <Row style={{ paddingTop: 14 }}>
        <Col>
          <div
            style={{
              letterSpacing: "0.68px",
              width: 13,
              height: 13,
              borderRadius: 10,
              backgroundColor: "rgba(242, 230, 53, 1)",
              border: "#13EECC",
              marginBottom: "-20px",
            }}
          ></div>
          <span className="fo2">ก่อนการแข่งขัน</span>
        </Col>
        <Col>
          <div
            style={{
              letterSpacing: "0.68px",
              width: 13,
              height: 13,
              borderRadius: 10,
              backgroundColor: "rgba(59, 136, 253, 1)",
              border: "#13EECC",
              marginBottom: "-20px",
            }}
          ></div>
          <span className="fo2">ระหว่างการแข่งขัน</span>
        </Col>
        <Col>
          <div
            style={{
              letterSpacing: "0.68px",
              width: 13,
              height: 13,
              borderRadius: 10,
              backgroundColor: "rgba(19, 238, 204, 1)",
              border: "#13EECC",
              marginBottom: "-20px",
            }}
          ></div>
          <span className="fo2">หลังการแข่งขัน</span>
        </Col>
      </Row>
      <Row
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Col className="center">
          <Row style={{ paddingTop: 20 }}>
            <b className="f-21">฿{ChangeToK(totalCost)}</b>
          </Row>
          <Row className="text-title">มูลค่าทั้งหมด</Row>
        </Col>
      </Row>
      <div
        style={{
          fontSize: 16,
          color: "#292766",
          paddingLeft: "10px",
          opacity: 0.5,
        }}
      >
        จำนวนเงิน
      </div>
      <div>
        <Col style={{ marginLeft: "-25px", paddingLeft: 10 }}>
          <Bar data={data} options={options} />
        </Col>

        <Col>
          <div
            style={{
              fontSize: 16,
              color: "#292766",
              opacity: "50%",
              transform: "rotate(-90deg)",
              transformOrigin: "2% 90%",
              marginLeft: "100%",
              width: "50px",
              marginTop: "-70px",
            }}
          >
            ข้อมูล
          </div>
        </Col>
      </div>
    </Col>
  );
};
export default StackedBar;
