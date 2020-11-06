import React, { useState, useEffect } from 'react'
import { Card, Row, Col } from "antd"
import Amount from './amount/Amount'
import BarSatisfaction from './bar/BarSatisfaction'
import Artboard11 from "../../../assets/image/Artboard11.png"
import Artboard12 from "../../../assets/image/Artboard12.png"
import Artboard3 from "../../../assets/image/Artboard3.png"
import { GET_SATISFACTION } from "../../../service/api"




const Satisfaction = ({ setLoading }) => {

    const [athlete, setAthlete] = useState({});
    const [satisfaction, setSatisfaction] = useState({})

    useEffect(() => {
        GetSatisfaction()
    }, [])

    const GetSatisfaction = async () => {
        setLoading(true)
        try {

            const qrs = { type: "all" }
            const res = await GET_SATISFACTION(qrs)
            if (res.code === 200) {

                setAthlete(res.result[0].athlete)
                setSatisfaction(res.result[0].satisfaction)

            } else {
                alert("ERROR")
            }
            console.log("RES>>>", res)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
        setLoading(false)

    }




    return (
        <div>
            <Row justify={"center"} gutter={[15, 15]}>

                <Col lg={8}>
                    <Card>
                        <Amount toppic="จำนวนผู้ตอบแบบสอบถาม" num={athlete.total} image={Artboard11}></Amount>
                    </Card>
                </Col>
                <Col lg={8}>
                    <Card>
                        <Amount toppic="นักกีฬา" num={athlete.athlete} image={Artboard12}></Amount>
                    </Card>
                </Col>
                <Col lg={8}>
                    <Card>
                        <Amount toppic="ไม่ใช่นักกีฬา" num={athlete.notAthlete} image={Artboard3}></Amount>
                    </Card>
                </Col>
            </Row>
            <Row justify={"center"} gutter={[15, 15]}>
                <Col lg={24}>
                    <Card>
                        <BarSatisfaction satisfaction={satisfaction} />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Satisfaction
