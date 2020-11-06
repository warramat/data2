import React from "react";
import { Col, Row } from "antd";
import { Progress } from "antd";
import { float1Point } from "../../../../tools/util";
const Job = ({ carrier }) => {
  console.log("data", carrier);
  const dataSource = [
    {
      job: "รัฐบาล/รัฐวิสาหกิจ",
      percent: carrier.government,
      color: "#13EECC",
    },
    {
      job: "เจ้าของธุรกิจ/ธุรกิจส่วนตัว",
      percent: carrier.businessOwners,
      color: "#3B88FD",
    },
    {
      job: "นักเรียน/นักศึกษา",
      percent: carrier.student,
      color: "rgba(11, 80, 150, 1)",
    },
    {
      job: "พนักงานบริษัท",
      percent: carrier.companyEmployee,
      color: "#F205CB",
    },
    {
      job: "นักกีฬาอาชีพ",
      percent: carrier.professionalAthlete,
      color: "#F2E635",
    },
    { job: "อื่นๆ ระบุ", percent: carrier.others, color: "#3B88FD" },
  ];
  return (
    <>
      <b className="text-toppic">อาชีพ</b>
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
