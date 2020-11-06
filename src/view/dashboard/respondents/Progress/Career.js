import React from "react";
import { Col, Row } from "antd";
import { Progress } from "antd";
import { float1Point } from "../../../../tools/util";
const Job = ({ carrier }) => {
  const dataSource = [
    {
      job: "อินทนนท์ 10 km",
      percent: carrier.inthanon10,
      color: "#13EECC",
    },
    {
      job: "อินทนนท์ 1 (25 km)",
      percent: carrier.inthanon25,
      color: "#3B88FD",
    },
    {
      job: "อินทนนท์ 4 (80 km)",
      percent: carrier.inthanon80,
      color: "rgba(11, 80, 150, 1)",
    },
    {
      job: "อินทนนท์ 5 (120 km)",
      percent: carrier.inthanon120,
      color: "#F205CB",
    },
    {
      job: "อินทนนท์ 6 (175 km)",
      percent: carrier.inthanon175,
      color: "#F2E635",
    },
  ];
  return (
    <>
      <b className="text-toppic">การแข่งขัน</b>
      {dataSource.map((item, index) => {
        return (
          <Row style={{ marginBottom: 12 }} key={index}>
            <Col className="col-job">
              <div className="text-title">{item.job}</div>
            </Col>
            <Col className="col-job2">
              <b className="text-percent">{float1Point(item.percent)}%</b>
            </Col>
            <Progress
              percent={item.percent}
              showInfo={false}
              strokeColor={item.color}
              strokeLinecap="round"
            />
          </Row>
        );
      })}
    </>
  );
};

export default Job;
