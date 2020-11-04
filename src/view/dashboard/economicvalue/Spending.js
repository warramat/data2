import { Card, Row, Col } from "antd";
import React, { useState } from "react";

function Spending() {
  const [infoSource, setInfoSource] = useState([
    {
      toppic: "รัฐบาล/รัฐวิสาหกิจ",
      amount: 45,
      info: "ก่อให้เกิดผลกระทบทางเศรษฐกิจ",
    },
    {
      toppic: "เจ้าของธุรกิจ/ธุรกิจส่วนตัว",
      amount: 54,
      info: "ก่อให้เกิดผลกระทบทางเศรษฐกิจ",
    },
    {
      toppic: "นักเรียน/นักศึกษา",
      amount: 45,
      info: "ก่อให้เกิดผลกระทบทางเศรษฐกิจ",
    },
  ]);
  return (
    <div>
      <div className="text-toppic">
        <b>ผลกระทบทางเศรษฐกิจ</b>
      </div>
      <div className="text-title" style={{ marginBottom: 37 }}>
        การลงทุนของการกีฬาแห่งประเทศไทย 1 บาท
        ก่อให้เกิดผลกระทบทางเศรษฐกิจต่อไปนี้
      </div>
      {infoSource.map((item, index) => {
        return (
          <Card
            style={{
              marginTop: 18,
              borderRadius: 9,
              background: "rgba(253, 253, 253, 1)",
            }}
          >
            <Row style={{ marginBottom: 20 }}>
              <Col className="col-job">
                <div className="text-toppic">
                  <b>{item.toppic}</b>
                </div>
                <div className="text-title">{item.info}</div>
              </Col>
              <Col className="col-job2">
                <Card>
                  <b className="text-percent">{item.amount}</b>
                </Card>
              </Col>
            </Row>
          </Card>
        );
      })}
    </div>
  );
}

export default Spending;
