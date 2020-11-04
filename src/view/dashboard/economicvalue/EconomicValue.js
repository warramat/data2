import React  from 'react'
import { Row, Col, Card } from "antd"
import RadarChart from './Chart2/RadarChart'
import ValueEco from './value/ValueEco'
import Artboard1 from "../../../assets/image/Artboard1.png"
import Artboard4 from "../../../assets/image/Artboard4.png"
import Artboard3 from "../../../assets/image/Artboard3.png"
import Artboard5 from "../../../assets/image/Artboard5.png"
import Artboard6 from "../../../assets/image/Artboard6.png"
import Artboard7 from "../../../assets/image/Artboard7.png"

const EconomicValue = () => {
    return (
        <div >
            <Row justify={"center"} gutter={[15, 15]}>
                <Col lg={4}>
                    <Card>
                        <ValueEco toppic="ทั้งหมดแบบสอบถาม" num="12461" image={Artboard1}></ValueEco>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card>
                        <ValueEco toppic="นักกีฬาไทย" num="12461" image={Artboard4}></ValueEco>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card>
                        <ValueEco toppic="นักกีฬาต่างชาติ" num="12461" image={Artboard3}></ValueEco>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card>
                        <ValueEco toppic="ผู้จัดการแข่งขัน" num="12461" image={Artboard5}></ValueEco>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card>
                        <ValueEco toppic="อาสาสมัคร" num="12461" image={Artboard6}></ValueEco></Card>
                    </Col>
                <Col lg={4}>
                    <Card>
                        <ValueEco toppic="ผู้ติดตาม/ผู้ชม/ร้านอาหาร" num="12461" image={Artboard7}></ValueEco>
                    </Card>
                </Col>

            </Row>
            <Row justify={"center"} gutter={[15, 15]}>
                <Col lg={8}>
                    <Card>
                        1
                </Card>
                </Col>
                <Col lg={8}>
                    <Card><RadarChart  /></Card>
                </Col>
                <Col lg={8}>
                    <Card>3</Card>
                </Col>
            </Row>

        </div >
    )
}

export default EconomicValue
