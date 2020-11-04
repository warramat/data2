import React from 'react'
import { Card, Row, Col } from "antd"
import Amount from './amount/Amount'

const Satisfaction = () => {
    return (
        <div>
            <Row justify={"center"} gutter={[15, 15]}>
                <Col lg={8}>
                    <Card>
                        <Amount toppic="จำนวนผู้ตอบแบบสอบถาม" num="1000" image={'Artboard1.png'}></Amount>
                    </Card>
                </Col>
                <Col lg={8}>
                    <Card>
                        <Amount toppic="นักกีฬา" num="500" ></Amount>
                    </Card>
                </Col>
                <Col lg={8}>
                    <Card>
                        <Amount toppic="ไม่ใช่นักกีฬา" num="500"></Amount>
                    </Card>
                </Col>
            </Row>
            <Row justify={"center"} gutter={[15, 15]}>
                <Col lg={24}>
                    <Card>
                        1
                </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Satisfaction
