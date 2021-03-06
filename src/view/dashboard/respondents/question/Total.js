import React from 'react'
import { Col, Row } from "antd"


const Total = ({ toppic, num, imageIndex, persen }) => {


    return (
        <>
            <Row >
                <Col span={24}>
                    <b className="f-10">{toppic}</b>
                </Col>
            </Row>
            <Row >
                <Col span={12} style={{ marginTop: 10 }}>
                    <span className="f-18">{num}</span>
                    <span className="f-1" style={{ marginLeft: 5 }}>คน</span>
                    <div className="f-1 t-percent" >{persen}%</div>
                </Col>

                <Col span={12}>
                    <img src={require(`../../../../assets/image/Artboard${imageIndex}.png`)}
                        alt="icon" className="rounded float-right " width={"60%"}></img>
                </Col>
            </Row>
        </>
    )
}

export default Total