import React from "react";
import { Row, Col, Card } from "antd";
import RadarChart from "./Chart2/RadarChart";
import StackedBar from "./Chart2/StackBar";
import Spending from "./Spending";
import ValueEco from "./value/ValueEco";


const EconomicValue = () => {
  return (
    <div>
      <Row justify={"center"} gutter={[15, 15]}>
        {
          
        }
        <Col lg={4}>
          <Card>
            <ValueEco toppic="sdgjf" num="133"/>
          </Card>
        </Col>
        {/* <Col lg={4}>
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
        </Col> */}
      </Row>
      <Row justify={"center"} gutter={[15, 15]}>
        <Col lg={8}>
          <Card>
            <StackedBar></StackedBar>
          </Card>
        </Col>
        <Col lg={8}>
          <Card>
            <RadarChart />
          </Card>
        </Col>
        <Col lg={8}>
          <Card>
            <Spending></Spending>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EconomicValue;
