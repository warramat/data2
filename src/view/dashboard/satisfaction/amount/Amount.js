import React from 'react'
import { Row, Col } from "antd"


const Amount = ({toppic, num, image}) => {
    console.log(image)
    return (
        <>
            <Row >    
                <Col span={24}>
                    <div>{toppic}</div>
                </Col>
                </Row>
                <Row >
                <Col span={12} style={{marginTop:"10%"}}>
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

export default Amount