import React from 'react'
import { Card, Row, Col } from "antd"

const Satisfaction = () => {
    return (
        <div>
            <Row justify={"center"} gutter={[15, 15]}>
                <Col lg={8}>
                    <Card>
                        1
                </Card>
                </Col>
                <Col lg={8}>
                    <Card>2</Card>
                </Col>
                <Col lg={8}>
                    <Card>3</Card>
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
