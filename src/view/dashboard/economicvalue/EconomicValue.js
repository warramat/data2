import React, {useState , useEffect} from "react";
import { Row, Col, Card } from "antd";
import RadarChart from "./Chart2/RadarChart";
import StackedBar from "./Chart2/StackBar";
import Spending from "./Spending";
import { GET_ECONOMICVALUE } from "../../../service/api"
import ValueEco from "./value/ValueEco";


const EconomicValue = () => {
  const [economicEffect, setEconomicEffect] = useState({})
    const [economicImpact, setEconomicImpact] = useState({})
    const [economicIncreaseLabels, setEconomicIncreaseLabels] = useState([])
    const [economicIncreaseData, setEconomicIncreaseData] = useState([])
    const [questionnaireGroup, setQuestionnaireGroup] = useState([])

  useEffect(() => {
    GetEconomicValue()
}, [])

const GetEconomicValue = async () => {

  try {

      const qrs = { evaluatortype: "all" }
      const res = await GET_ECONOMICVALUE(qrs)
      // console.log("economic>>>",res.result[0])

      if (res.code === 200) {
        setEconomicEffect (res.result[0].economicEffect)
        setEconomicImpact (res.result[0].economicImpact)
        setEconomicIncreaseLabels (res.result[0].economicIncreaseInValue.label)
        setEconomicIncreaseData (res.result[0].economicIncreaseInValue.data)
        setQuestionnaireGroup (res.result[0].questionnaireGroup)
         
      } else {
          alert("ERROR")
      }
      console.log("RES>>>", res)
  } catch (error) {
      console.log(error)
  }
}


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
            <RadarChart  economicLabels = {economicIncreaseLabels}  economicData = {economicIncreaseData}/>
          </Card>
        </Col>
        <Col lg={8}>
          <Card>
            <Spending economicSpending={economicEffect}/>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EconomicValue;
