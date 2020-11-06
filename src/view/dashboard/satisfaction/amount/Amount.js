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
            {/* <Row >
                <Col span={12}>
                    <div>
                    <span className="f-18 pt-5">{num} </span>
                    <span className="f-13" style={{ marginLeft: 5 }}>คน</span></div>
                </Col>

                <Col span={12}>
<<<<<<< HEAD
                    <img src={image} className="rounded float-right" style={{ display: "flex" }} width={"30%"}></img>
=======
                    <img src={image} className="rounded float-right" style={{ display: "flex" }} width={"50%"} />
>>>>>>> 0caf461abd8602349068c2627448078b1aae4aa6
                </Col>
            </Row> */}
        </>
    )
}

export default Amount