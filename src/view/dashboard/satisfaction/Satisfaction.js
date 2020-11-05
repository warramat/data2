import React, {useState , useEffect} from 'react'
import { Card, Row, Col } from "antd"
import Amount from './amount/Amount'
import BarSatisfaction from './bar/BarSatisfaction'
import Artboard7 from "../../../assets/image/Artboard7.png"
import Artboard6 from "../../../assets/image/Artboard6.png"
import Artboard5 from "../../../assets/image/Artboard5.png"
import { GET_SATISFACTION } from "../../../service/api"


const Satisfaction = () => {

    const [athlete, setAthlete] = useState({});
    const [satisfaction, setSatisfaction] = useState({})

    useEffect(() => {
        GetSatisfaction()
    }, [])

    const GetSatisfaction = async () => {

        try {
    
            const qrs = { type: "all" }
            const res = await GET_SATISFACTION(qrs)
            if (res.code === 200) {
                 
              setAthlete (res.result[0].athlete)
              setSatisfaction (res.result[0].satisfaction)

            } else {
                alert("ERROR")
            }
            console.log("RES>>>", res)
        } catch (error) {
            console.log(error)
        }
    }




    return (
        <div>
            <Row justify={"center"} gutter={[15, 15]}>
                <Col lg={8}>
                    <Card>
                        <Amount toppic="จำนวนผู้ตอบแบบสอบถาม" num="1000" image={Artboard7}></Amount>
                    </Card>
                </Col>
                <Col lg={8}>
                    <Card>
                        <Amount toppic="นักกีฬา" num="500" image={Artboard6}></Amount>
                    </Card>
                </Col>
                <Col lg={8}>
                    <Card>
                        <Amount toppic="ไม่ใช่นักกีฬา" num="500" image={Artboard5}></Amount>
                    </Card>
                </Col>
            </Row>
            <Row justify={"center"} gutter={[15, 15]}>
                <Col lg={24}>
                    <Card>
                      <BarSatisfaction satisfaction={satisfaction}/>
                </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Satisfaction
