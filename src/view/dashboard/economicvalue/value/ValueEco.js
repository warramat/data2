import React from 'react'
import { Row, Col } from "antd"

const ValueEco = ({toppic, num, image, persen}) => {
    return (
        <>
        <Row >    
                <Col span={24}>
                    <div>{toppic}</div>
                </Col>
            </Row>
            <Row >
            <Col span={12} style={{marginTop:50}}>
                <span className="f-13">{num}</span>
                <span className="f-1" style={{marginLeft:5}}>คน</span>
                <div className="f-1">{persen}%</div>
                
            </Col>

            <Col span={12}>
                <img src={image} className="rounded float-right"></img>
            </Col>
        </Row>
        </>
    )
}

export default ValueEco
