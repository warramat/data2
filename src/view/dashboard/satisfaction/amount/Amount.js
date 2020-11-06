import React from 'react'
import { Row, Col } from "antd"


const Amount = ({ toppic, num, image }) => {
    return (
        <>
            <Row >
                <Col span={24}>
                    <div className="f-15">{toppic}</div>
                </Col>
            </Row>
            <Row >
                <Col span={12} style={{ marginTop: 30 }}>
                    <span className="f-21">{num}</span>
                    <span className="f-13" style={{ marginLeft: 5 }}>คน</span>
                </Col>

                <Col span={12}>
                    <img src={image} className="rounded float-right" style={{ display: "flex" }} width={"50%"} />
                </Col>
            </Row>
        </>
    )
}

export default Amount