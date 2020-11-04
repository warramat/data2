import React from 'react'
import { Col, Row } from "antd"

const Total = ({toppic, num, image}) => {
    return (
        <>
        <Row >    
            <Col span={24}>
                <div className="text-sport">{toppic}</div>
            </Col>
        </Row>
        <Row >
        <Col span={12}>
            <span className="f-13">{num}</span>
            <span className="text-sport">คน</span>
        </Col>

        <Col span={12}>
            <img src={`./${image}`} className="rounded float-right"></img>
        </Col>
    </Row>
        </>
    )
}

export default Total