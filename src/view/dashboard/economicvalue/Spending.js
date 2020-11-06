import { Card, Row, Col } from "antd";
import React from "react";
import { float1Point } from "../../../tools/util";
function Spending({ economicEffect }) {
  const infoSource = [
    {
      toppic: "รวม",
      amount: [economicEffect.all],
    },
    {
      toppic: "นักกีฬา",
      amount: [economicEffect.athlete],
    },
    {
      toppic: "ไม่ใช่นักกีฬา",
      amount: [economicEffect.notAthlete],
    },
  ];
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
                <div className="text-title">ก่อให้เกิดผลกระทบทางเศรษฐกิจ</div>
              </Col>
              <Col className="col-job2" style={{ justifyContent: "center" }}>
                <Row className="card-impact">
                  <b
                    className="text-percent"
                    style={{
                      background: "rgba(255, 255, 255, 1)",
                      border: "1px solid rgba(235, 242, 247, 1)",
                      borderRadius: 16,
                      padding: 25,
                    }}
                  >
                    {float1Point(item.amount)}
                    บาท
                  </b>
                </Row>
              </Col>
            </Row>
          </Card>
        );
      })}
    </div>
  );
}

export default Spending;
