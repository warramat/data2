import React from 'react'
import { Row, Col } from "antd"


const Amount = ({ toppic, num, image }) => {
    return (
        <>
            <Row >
                <Col span={18}>
                    <div className="f-13">{toppic}</div>
                    <div>
                        <span className="f-18 pt-5">{num} </span>
                        <span className="f-13" style={{ marginLeft: 5 }}>คน</span>
                    </div>
                </Col>
                <Col span={6} className="d-flex align-items-center">
                    <img src={image} alt="aligment" className="rounded mx-auto d-block"  width={"60%"}></img>
                </Col>
            </Row>

        </>
    )
}

export default Amount