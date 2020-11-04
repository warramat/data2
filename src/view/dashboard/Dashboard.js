/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import Respondents from "./respondents/Respondents"
import EconomicValue from "./economicvalue/EconomicValue"
import Satisfaction from "./satisfaction/Satisfaction"
import { Row, Col, Radio, } from 'antd'
import Doiintanon from '../../assets/image/logo/doiintanon.svg'
import iSat from '../../assets/image/logo/Sat.svg'

const Dashboard = () => {
  const [key, setKey] = useState("respon")

  return (
    <div className="BG-forms font-kanit">

      <Row className="w-100 nav p-15" justify={"center"} align={"middle"}>
        <Col lg={6}>
          <div className="pl-40">
            <img src={iSat} alt="iSat" width={"60%"} />
            <img src={Doiintanon} alt="doiintanonLogo" width={"20%"} />
          </div>
        </Col>
        <Col lg={12} className="d-flex justify-content-center">
          <Radio.Group onChange={(e) => setKey(e.target.value)} value={key} >
            <Radio.Button value="respon">ผู้ตอบแบบสอบถาม</Radio.Button>
            <Radio.Button value="economic">มูลค่าทางเศรษฐกิจ</Radio.Button>
            <Radio.Button value="satis">ระดับความพึงพอใจ</Radio.Button>
          </Radio.Group>
        </Col>
        <Col lg={6}></Col>
      </Row>
      <div className="p-layout">
        <Row >
          <h5 className="pt-3 pb-3">ผู้ตอบแบบสอบถาม</h5>
        </Row>
        {
          key === "respon" ? <Respondents />
            : key === "economic" ? <EconomicValue />
              : <Satisfaction />
        }
      </div>
    </div>
  )
}

export default Dashboard
