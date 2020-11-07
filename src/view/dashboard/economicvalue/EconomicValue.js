/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Row, Col, Card, Modal } from "antd";
import RadarChart from "./Chart2/RadarChart";
import StackedBar from "./Chart2/StackBar";
import Spending from "./Spending";
import { GET_ECONOMICVALUE, GET_ECONOMIC_TYPE } from "../../../service/api";
import ValueEco from "./value/ValueEco";
import { float1Point } from "../../../tools/util";
import { ChangeToK } from "../../../tools/util";

const EconomicValue = ({ setLoading }) => {
  const [economicEffect, setEconomicEffect] = useState({});
  const [economicImpact, setEconomicImpact] = useState({});
  const [economicIncreaseLabels, setEconomicIncreaseLabels] = useState([]);
  const [economicIncreaseData, setEconomicIncreaseData] = useState([]);
  const [questionnaireGroup, setQuestionnaireGroup] = useState([]);
  const [visible, setVisible] = useState(false);
  const [textHeader, setTextHeader] = useState("");
  const [economicModalValue, setEconomicModalValue] = useState({});

  useEffect(() => {
    GetEconomicValue();
  }, []);

  const GetEconomicValue = async () => {
    setLoading(true);
    try {
      const qrs = { evaluatortype: "all" };
      const res = await GET_ECONOMICVALUE(qrs);
      if (res.code === 200) {
        setEconomicEffect(res.result[0].economicEffect);
        setEconomicImpact(res.result[0].economicImpact);
        setEconomicIncreaseLabels(res.result[0].economicIncreaseInValue.label);
        setEconomicIncreaseData(res.result[0].economicIncreaseInValue.data);
        setQuestionnaireGroup(res.result[0].questionnaireGroup);
      } else {
        alert("ERROR");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setLoading(false);
  };

  const handleModal = async (valueModal) => {
    setLoading(true);
    setTextHeader(valueModal.choiceTh);
    try {
      const qrs = { evaluatortype: valueModal.evaluatortype };
      const res = await GET_ECONOMIC_TYPE(qrs);
      if (res.code === 200) {
        setEconomicModalValue(res.result[0].economicImpact);
        setVisible(true);
      } else {
        alert("ERROR");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <div>
      <Modal
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={false}
        width={850}
      >
        <StackedBar
          economicStackedBar={economicModalValue}
          title={textHeader}
        />
      </Modal>
      <Row justify={"center"} gutter={[15, 15]}>
        {questionnaireGroup.map((item, index) => {
          return (
            <Col lg={4} sm={24} md={8} xs={24} key={index}>
              <Card onClick={() => handleModal(item)} className="interactive">
                <ValueEco
                  toppic={item.choiceTh}
                  num={ChangeToK(item.count)}
                  persen={float1Point(item.percent)}
                  imageIndex={index}
                />
              </Card>
            </Col>
          );
        })}
      </Row>
      <Row justify={"center"} gutter={[15, 15]}>
        <Col lg={8} sm={24} md={24} xs={24}>
          <Card style={{ height: "100%" }}>
            <StackedBar
              economicStackedBar={economicImpact}
              title={"ข้อมูลทางเศรษฐกิจ"}
            />
          </Card>
        </Col>
        <Col lg={8} sm={24} md={24} xs={24}>
          <Card style={{ height: "100%" }}>
            <RadarChart
              economicLabels={economicIncreaseLabels}
              economicData={economicIncreaseData}
            />
          </Card>
        </Col>
        <Col lg={8} sm={24} md={24} xs={24}>
          <Card style={{ height: "100%" }}>
            <Spending economicEffect={economicEffect} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EconomicValue;
