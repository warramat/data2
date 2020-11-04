/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Col, Row, Card } from 'antd'
import BarResidence from './bar/Bar'
import Total from './question/Total'
import Artboard1 from "../../../assets/image/Artboard1.png"
import Artboard4 from "../../../assets/image/Artboard4.png"
import Artboard3 from "../../../assets/image/Artboard3.png"
import Artboard5 from "../../../assets/image/Artboard5.png"
import Artboard6 from "../../../assets/image/Artboard6.png"
import Artboard7 from "../../../assets/image/Artboard7.png"

import RadarC from './Chart1/RadarC'
import { GET_RESPONDENT } from "../../../service/api"


const Respondents = () => {

    const [dataSource, setDataSource] = useState({})


    useEffect(() => {
        GetRespondent()
    }, [])

    const GetRespondent = async () => {
        try {
            const res = await GET_RESPONDENT()
            if (res.code === 200) {
                setDataSource(res.result[0])
            } else {
                alert("ERROR")
            }
            console.log("RES>>>", res)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div >
            <Row justify={"center"} gutter={[15, 15]}>
                <Col lg={4}>
                    <Card>
                        <Total toppic="ทั้งหมดแบบสอบถาม" num="12461" image={Artboard1}></Total>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card>
                        <Total toppic="นักกีฬาไทย" num="12461" image={Artboard4}></Total>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card>
                        <Total toppic="นักกีฬาต่างชาติ" num="12461" image={Artboard3}></Total>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card>
                        <Total toppic="ผู้จัดการแข่งขัน" num="12461" image={Artboard5}></Total>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card>
                        <Total toppic="อาสาสมัคร" num="12461" image={Artboard6}></Total>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card>
                        <Total toppic="ผู้ติดตาม/ผู้ชม/ร้านอาหาร" num="12461" image={Artboard7}></Total>
                    </Card>
                </Col>
            </Row>
            <Row justify={"center"} gutter={[15, 15]}>
                <Col lg={8}>
                    <Card>
                        1
                    </Card>
                </Col>
                <Col lg={8}>
                    <Card><BarResidence dataSource={dataSource} /></Card>
                </Col>
                <Col lg={8}>
                    <Card>3</Card>
                </Col>
            </Row>
            <Row justify={"center"} gutter={[15, 15]}>
                <Col lg={8}>
                    <Card><RadarC dataSource={dataSource} /></Card>
                </Col>
                <Col lg={8}>
                    <Card>2</Card>
                </Col>
                <Col lg={8}>
                    <Card>3</Card>
                </Col>
            </Row>
        </div >
    )
}


export default Respondents
