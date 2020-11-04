import React from 'react'
import { Row, Col } from "antd"
import  Artboard1  from "../../../../assets/image/Artboard1.png"

const Amount = ({toppic, num, image}) => {
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
                    <img src="../../../../assets/image/Artboard1.png" className="rounded float-right"></img>
                </Col>
            </Row>
        </>
    )
}

export default Amount