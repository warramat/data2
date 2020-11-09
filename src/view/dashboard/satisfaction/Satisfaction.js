/* eslint-disable react-hooks/exhaustive-deps */
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
    const [filterItem, setFilterItem] = useState("all")


    useEffect(() => {
        GetSatisfaction()
    }, [])

    const GetSatisfaction = async (typeValue = "all") => {
        setLoading(true)
        try {

            const qrs = { type: typeValue }
            const res = await GET_SATISFACTION(qrs)
            if (res.code === 200) {

                setAthlete(res.result[0].athlete)
                setSatisfaction(res.result[0].satisfaction)

            } else {
                alert("ERROR")
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
        setLoading(false)

    }

    const handleClickCard = (evaluatortype) => {
        setFilterItem(evaluatortype)
        GetSatisfaction(evaluatortype)

    }




    return (
        <div>
            <Row justify={"center"} gutter={[15, 15]}>

                <Col lg={8} sm={24} xs={24} >
                    <Card onClick={() => handleClickCard("all")}
                        className={"all" === filterItem
                            ? `card-active` : `interactive`}>
                        <Amount toppic="จำนวนผู้ตอบแบบสอบถาม" num={athlete.total} image={Artboard11}></Amount>
                    </Card>
                </Col>
                <Col lg={8} sm={12} xs={24} >
                    <Card onClick={() => handleClickCard("athlete")}
                        className={"athlete" === filterItem
                            ? `interactive card-active` : `interactive`}>
                        <Amount toppic="นักกีฬา" num={athlete.athlete} image={Artboard12}></Amount>
                    </Card>
                </Col>
                <Col lg={8} sm={12} xs={24} >
                    <Card onClick={() => handleClickCard("notAthlete")}
                        className={"notAthlete" === filterItem
                            ? `interactive card-active` : `interactive`}>
                        <Amount toppic="ไม่ใช่นักกีฬา" num={athlete.notAthlete} image={Artboard3}></Amount>
                    </Card>
                </Col>
            </Row>
            <Row justify={"center"} gutter={[15, 15]}>
                <Col lg={24} md={24} sm={24} xs={24}>
                    <Card>
                        <BarSatisfaction satisfaction={satisfaction} />
                       <h5 className="pt-5">การสำรวจความพึงพอใจของผู้เข้ารวมงาน มีความพึงพอใจในการจัดงานโดยรวมอยู่ในระดับมาก (ค่าเฉลี่ย 4.13) 
                        และเมื่อจำแนกเป็นรายด้าน พบว่า ทุกด้านอยู่ในระดับมาก และเมื่อเรียงลำดับค่าเฉลี่ยจากมากไป
                        น้อย ได้แก่ ด้านการเดินทางเข้ามาในการแข่งขัน (ค่าเฉลี่ย 4.19) ด้านการประชาสัมพันธ์ก่อนการจัดการแข่งขัน และการให้ข้อมูลที่เป็นประโยชน์ระหว่างการแข่งขัน (ค่าเฉลี่ย 4.14)
                        และด้านสถานที่การจัดการแข่งขันและที่พัก  (ค่าเฉลี่ย4.12)  ตามลำดับ</h5>
                    </Card>
                    
                </Col>
            
            </Row>
        </div>
    )
}

export default Satisfaction
