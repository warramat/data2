import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "antd";
import RadarChart from "./Chart2/RadarChart";
import StackedBar from "./Chart2/StackBar";
import Spending from "./Spending";
import { GET_ECONOMICVALUE } from "../../../service/api";

const EconomicValue = () => {
  const [economicEffect, setEconomicEffect] = useState({});
  const [economicImpact, setEconomicImpact] = useState({});
  const [economicIncreaseInValue, setEconomicIncreaseInValue] = useState({});
  const [questionnaireGroup, setQuestionnaireGroup] = useState([]);

  useEffect(() => {
    GetEconomicValue();
  }, []);

  const GetEconomicValue = async () => {
    try {
      const qrs = { evaluatortype: "all" };
      const res = await GET_ECONOMICVALUE(qrs);
      if (res.code === 200) {
        setEconomicEffect(res.result[0].economicEffect);
        setEconomicImpact(res.result[0].economicImpact);
        setEconomicIncreaseInValue(res.result[0].economicIncreaseInValue);
        setQuestionnaireGroup(res.result[0].questionnaireGroup);
      } else {
        alert("ERROR");
      }
      console.log("RES>>>", res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Row justify={"center"} gutter={[15, 15]}>
        <Col lg={4}>
          <Card>1</Card>
        </Col>
        <Col lg={4}>
          <Card>2</Card>
        </Col>
        <Col lg={4}>
          <Card>3</Card>
        </Col>
        <Col lg={4}>
          <Card>4</Card>
        </Col>
        <Col lg={4}>
          <Card>5</Card>
        </Col>
        <Col lg={4}>
          <Card>6</Card>
        </Col>
      </Row>
      <Row justify={"center"} gutter={[15, 15]}>
        <Col lg={8}>
          <Card>
            <StackedBar economicStackedBar={economicImpact} />
          </Card>
        </Col>
        <Col lg={8}>
          <Card>
            <RadarChart economicRadar={economicIncreaseInValue} />
          </Card>
        </Col>
        <Col lg={8}>
          <Card>
            <Spending economicEffect={economicEffect} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EconomicValue;
