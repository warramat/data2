import React from 'react'
import { Row, Col } from "antd"

const ValueEco = ({toppic, num, image, persen}) => {
    return (
        <>
        <Row >    
                <Col span={24}>
                    <div className="f-11">{toppic}</div>
                </Col>
            </Row>
            <Row >
            <Col span={12} style={{marginTop:15}}>
                <span className="f-18">{num}</span>
                <div className="f-07">{persen}%</div>
                
            </Col>

            <Col span={12}>
                <img src={image} className="rounded float-right"></img>
            </Col>
        </Row>
        </>
    )
}

export default ValueEco
