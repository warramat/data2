import React from 'react'
import { Row, Col } from "antd"


const Amount = ({ toppic, num, image }) => {
    return (
        <>
            <Row >
                <Col span={14} style={{ alignContent: "space-around" }}>
                    <Row>
                        <b className="f-13">{toppic}</b>
                    </Row>
                    <Row>
                        <div>
                            <span className="f-18 pt-5">{num} </span>
                            <span className="f-13" style={{ marginLeft: 5 }}>คน</span>
                        </div>
                    </Row>
                </Col>

                <Col span={10} className="d-flex align-items-center justify-content-end">
                    <img src={image} alt="aligment" className="rounded  pl-2 pr-2 " width={"60%"}></img>
                </Col>
            </Row >

        </>
    )
}

export default Amount