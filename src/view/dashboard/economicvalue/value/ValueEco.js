import React from 'react'
import { Row, Col } from "antd"

const ValueEco = ({toppic, num, image}) => {
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
                <span className="f-1">คน</span>
                
            </Col>

            <Col span={12}>
                <img src={image} className="rounded float-right"></img>
            </Col>
        </Row>
        </>
    )
}

export default ValueEco
