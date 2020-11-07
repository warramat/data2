import React from 'react'
import { Row, Col } from "antd"


const Amount = ({ toppic, num, image }) => {
    return (
        <>
            <Row >
                <Col span={14}>
                    <b className="f-13">{toppic}</b>
                    <div>
                        <span className="f-18 pt-5">{num} </span>
                        <span className="f-13" style={{ marginLeft: 5 }}>คน</span>
                    </div>
                </Col>

                {/* <Col span={12}>
                    <img src={require(`../../../../assets/image/Artboard${imageIndex}.png`)}
                        alt="icon" className="rounded float-right" width={"60%"}></img>
                </Col> */}
                <Col span={10} className="d-flex justify-content-end">
                    <img src={image} alt="aligment" className="rounded float-right" width={"50%"}></img>
                </Col>
            </Row >

        </>
    )
}

export default Amount