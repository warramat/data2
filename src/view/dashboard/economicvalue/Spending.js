import { Card, Row, Col } from "antd";
import React, { useState } from "react";

function Spending() {
  const [infoSource, setInfoSource] = useState([
    {
      toppic: "รวม",
      amount: 2.3,
      info: "ก่อให้เกิดผลกระทบทางเศรษฐกิจ",
    },
    {
      toppic: "นักกีฬา",
      amount: 1.2,
      info: "ก่อให้เกิดผลกระทบทางเศรษฐกิจ",
    },
    {
      toppic: "ไม่ใช่นักกีฬา",
      amount: 1.1,
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
            key={index}
            style={{
              marginTop: 18,
              borderRadius: 9,
              background: "rgba(253, 253, 253, 1)",
              border: "1px solid rgba(235, 242, 247, 1)",
            }}
          >
            <Row>
              <Col className="col-job">
                <div className="text-toppic">
                  <b>{item.toppic}</b>
                </div>
                <div className="text-title">{item.info}</div>
              </Col>
              <Col className="col-job2" style={{ justifyContent: "center" }}>
                <Card
                  className="card-impact"
                  style={{
                    background: "rgba(255, 255, 255, 1)",
                    border: "1px solid rgba(235, 242, 247, 1)",
                    borderRadius: 16,
                  }}
                >
                  <b className="text-percent">
                    {item.amount}
                    บาท
                  </b>
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
