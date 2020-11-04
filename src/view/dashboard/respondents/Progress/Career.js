import React, { useState } from "react";
import { Col, Card, Row } from "antd";
import { Progress } from "antd";

const Job = () => {
  const [dataSource, setDataSource] = useState([
    { job: "รัฐบาล/รัฐวิสาหกิจ", percent: 45, color: "#13EECC" },
    { job: "เจ้าของธุรกิจ/ธุรกิจส่วนตัว", percent: 54, color: "#3B88FD" },
    { job: "นักเรียน/นักศึกษา", percent: 45, color: "#13EECC" },
    { job: "พนักงานบริษัท", percent: 30, color: "#F205CB" },
    { job: "นักกีฬาอาชีพ", percent: 20, color: "#F2E635" },
    { job: "อื่นๆ ระบุ", percent: 10, color: "#3B88FD" },
  ]);
  return (
    <>
      <b className="text-toppic">อาชีพ</b>
      {dataSource.map((item, index) => {
        return (
          <Row style={{ marginBottom: 10 }} key={index}>
            <Col className="col-job">
              <div className="text-title">{item.job}</div>
            </Col>
            <Col className="col-job2">
              <b className="text-percent">{item.percent}%</b>
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
