import React from "react"
import { Pie } from "react-chartjs-2"
import { Row, Col } from "antd"
import { ChangeToK } from '../../../../tools/util'

const Continent = ({ liveCountinent }) => {
  let sumDataLiveCountinent = []

  if (liveCountinent.data) {
    sumDataLiveCountinent = liveCountinent.data.reduce((sum, data) => {
      return sum + data
    }, 0)
  }



  const data = {
    labels: liveCountinent.label,
    datasets: [
      {
        data: liveCountinent.data,
        backgroundColor: [
          "#13EECC",
          "#3B88FD",
          "#F2E635",
          "#0A5BB4",
          "#6204BF",
          "#F205CB",
        ],
        borderWidth: 1,
        hoverBorderWidth: 5,
        hoverBorderColor: [
          "#13EECC",
          "#3B88FD",
          "#F2E635",
          "#0A5BB4",
          "#6204BF",
          "#F205CB",
        ],
        hoverBackgroundColor: [
          "#13EECC",
          "#3B88FD",
          "#F2E635",
          "#0A5BB4",
          "#6204BF",
          "#F205CB",
        ],
      },
    ],
  };
  const options = {
    plugins: {
      datalabels: {
        display: false,
      }
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10
      }
    },
    legend: {
      display: false,
    },
  };

  return (
    <Row style={{ fontFamily: "Sukhumvit Set", minHeight: "200px" }}>
      <Row style={{ paddingBottom: "20px" }}>
        <b
          className="text-toppic"
          style={{
            letterSpacing: "0.68px",
          }}
        >
          ต่างชาติ
        </b>
        <span className="ca-select" style={{ textAlign: "center", paddingTop: "8px" }}>
          {ChangeToK(sumDataLiveCountinent)} คน
        </span>

      </Row>
      <Pie data={data} options={options} width={400} height={200} />
      <Row style={{ width: "100%" }}>
        <Row
          className="display-flex justify-content-center"
          style={{
            width: "100%",
            paddingTop: "10px",
          }}>
          <Col className="btr"><div
            style={{
              width: 13,
              height: 13,
              borderRadius: 10,
              backgroundColor: "#13EECC",
              border: "#f205cb",
            }}
          ></div>
            <span className="fo">เอเชีย</span></Col>

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
            <span className="fo">ออสเตรเลีย</span></Col>
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
            <span className="fo">อเมริกาเหนือ</span></Col>
        </Row>
        <Row
          style={{
            width: "100%",
            paddingTop: "10px",
          }}
          className="display-flex justify-content-center"
        >
          <Col className="btr"><div
            style={{
              width: 13,
              height: 13,
              borderRadius: 10,
              backgroundColor: "#3b88fd",
              border: "#3b88fd",

            }}
          ></div>
            <span className="fo">ยุโรป</span></Col>

          <Col className="btr">  <div
            style={{
              width: 13,
              height: 13,
              borderRadius: 10,
              backgroundColor: "#6204bf",
              border: "#6204bf",
            }}
          ></div>
            <span className="fo">แอฟริกา</span></Col>
          <Col className="btr">  <div
            style={{
              width: 13,
              height: 13,
              borderRadius: 10,
              backgroundColor: "#f205cb",
              border: "#f205cb",
            }}
          ></div>
            <span className="fo">อเมริกาใต้</span></Col>


        </Row>
      </Row>
    </Row>
  );
};
export default Continent;
