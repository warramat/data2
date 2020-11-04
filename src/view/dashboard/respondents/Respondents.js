import React from 'react'
import { Col, Row, Card } from 'antd'
import RadarC from './Chart1/RadarC'


const Respondents = () => {

    return (
        <div >
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
                        1
                    </Card>
                </Col>
                <Col lg={8}>
                    <Card>1</Card>
                </Col>
                <Col lg={8}>
                    <Card>3</Card>
                </Col>
            </Row>
            <Row justify={"center"} gutter={[15, 15]}>
                <Col lg={8}>
                    <Card><RadarC /></Card>
                </Col>
                <Col lg={8}>
                    <Card>2</Card>
                </Col>
                <Col lg={8}>
                    <Card>3</Card>
                </Col>
            </Row>
        </div >
    )
}


export default Respondents
