import React from "react";
import { Bar } from "@reactchartjs/react-chart.js";
import { Col, Row } from "antd";
import { ChangeToK } from "../../../../tools/util";

const Gender = ({ gender }) => {
  const data = {
    labels: gender.label,
    datasets: [
      {
        type: "bar",
        label: "ชาย",
        backgroundColor: "rgba(59, 136, 253, 1)",
        data: gender.dataMale,
      },
      {
        type: "bar",
        label: "หญิง",
        backgroundColor: "rgba(19, 238, 204, 1)",
        data: gender.dataFemale,
      },
    ],
  };
  const options = {
    plugins: {
      datalabels: {
          color: 'black',
          align:'top',
          anchor:'end',
      }
    },
    legend: {
      position: "top",
      align: "end",
      fullWidth: true,
      display: false,
    },

    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,

            callback: function (value, index, values) {
              return ChangeToK(value);
            },
            stepSize: 200,
          },
        },
      ],
      xAxes: [{}],
    },
  };
  return (
    <Col>
      <b className="text-toppic">ช่วงอายุ</b>
      <div>
        <Col>
          <div className="pad2">
            <Row >
              <Col lg={12} className="col-job">
                <div
                  style={{
                    fontSize: "16px",
                    color: "#292766",
                    paddingLeft: "25px",
                    opacity: 0.5,
                    paddingTop: "4px"
                  }}
                >
                  จำนวนคน
          </div>
              </Col>
              <Col
                lg={12}
                className="col-job2 d-flex  justify-content-end"
              >
                <Row style={{ paddingTop: 10 }}>
                  <Col  >
                    <div
                      style={{
                        letterSpacing: "0.68px",
                        width: 13,
                        height: 13,
                        borderRadius: 10,
                        backgroundColor: "rgba(59, 136, 253, 1)",
                        border: "#13EECC",
                        marginBottom: "-19px",
                      }}
                    ></div>
                    <span className="fo3">ชาย</span>
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
                        marginBottom: "-19px",
                      }}
                    ></div>
                    <span className="fo3">หญิง</span>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Bar data={data} options={options} width={300} height={200} />
          </div>
        </Col>

        <Col>
          <div
            style={{
              fontSize: "16px",
              color: "#292766",
              opacity: "50%",
              transform: "rotate(-90deg)",
              transformOrigin: "40% 90%",
              marginLeft: "100%",
              width: "50px",
              marginTop: "-100px",
            }}
          >
            อายุ
          </div>
        </Col>
      </div>
    </Col>
  );
};

export default Gender;
