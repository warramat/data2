import React from 'react'
import { Col, Row } from "antd"


const Total = ({toppic, num, image, persen}) => {
    

    return (
        <>
        <Row >    
            <Col span={24}>
                <div className="f-1">{toppic}</div>
            </Col>
        </Row>
        <Row >
        <Col span={12} style={{marginTop:10}}>
            <span className="f-18">{num}</span>
            <span className="f-1" style={{marginLeft:5}}>คน</span>
            <div className="f-07">{persen}%</div>
        </Col>

        <Col span={12}>
            <img src={image} className="rounded float-right"></img>
        </Col>
        </Row>
        </>
    )
}

export default Total