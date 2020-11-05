import React from 'react'
import { Col, Row } from "antd"


const Total = ({toppic, num, image, persen}) => {
    

    return (
        <>
        <Row >    
            <Col span={24}>
                <div>{toppic}</div>
            </Col>
        </Row>
        <Row >
        <Col span={12} style={{marginTop:20}}>
            <span className="f-13">{num}</span>
            <span className="f-1">คน</span>
            <div className="f-1">{persen}%</div>
        </Col>

        <Col span={12}>
            <img src={image} className="rounded float-right"></img>
        </Col>
        </Row>
        </>
    )
}

export default Total