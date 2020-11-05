/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Col, Row, Card } from 'antd'
import Residence from './bar/Residence'
import Total from './question/Total'
import Artboard1 from "../../../assets/image/Artboard1.png"
import Artboard4 from "../../../assets/image/Artboard4.png"
import Artboard3 from "../../../assets/image/Artboard3.png"
import Artboard5 from "../../../assets/image/Artboard5.png"
import Artboard6 from "../../../assets/image/Artboard6.png"
import Artboard7 from "../../../assets/image/Artboard7.png"
import { GET_RESPONDENT } from "../../../service/api"

import RadarC from './Donut/RadarC'
import Region from './pie/Region'
import Gender from './bar/Gender'
import Continent from './pie/Continent'
import Job from "./Progress/Career";

const Respondents = () => {
  const [quesionNairGroup, setQuesionNairGroup] = useState([]);
  const [residence, setResident] = useState({});
  const [liveCountinent, setLiveContinent] = useState({});
  const [liveInChiangmai, setLiveInChiangmai] = useState({});
  const [liveRegion, setLiveRegion] = useState({});
  const [carrier, setCarrier] = useState({});
  const [gender, setGender] = useState({});

  
    useEffect(() => {
        GetRespondent()
    }, [])

  const GetRespondent = async () => {
    try {
      const qrs = { evaluatortype: "all" };
      const res = await GET_RESPONDENT(qrs);
      if (res.code === 200) {
        console.log("resssssss",res)
        setCarrier(res.result[0].career);
        setLiveInChiangmai(res.result[0].live.liveInChiangMai);
        setLiveContinent(res.result[0].live.continent);
        setQuesionNairGroup(res.result[0].questionnaireGroup);
        setLiveRegion(res.result[0].live.region);
        setResident(res.result[0].residence);
        setGender(res.result[0].age);
      } else {
        alert("ERROR");
      }
      console.log("RES>>>", res);
    } catch (error) {
      console.log(error);
    }
  };

    
    return (
        <div>
            <Row justify={"center"} gutter={[15, 15]}>
                {
                    quesionNairGroup.map((item)=>{
                    return <>
                        <Col lg={4}>
                            <Card>
                                <Total toppic={item.choiceTh} num={item.count} persen={item.percent} image={Artboard1}/>
                            </Card>
                        </Col>
                    </>
                    })
                }
            </Row>
            <Row justify={"center"} gutter={[15, 15]}>
                <Col lg={8}>
                    <Card>
                        <Gender gender ={gender}/>
                    </Card>
                </Col>
                <Col lg={8}>
                    <Card>
                        <Residence residence={residence} />
                    </Card>
                </Col>
                <Col lg={8}>
                    <Card>
                        <Job carrier={carrier} />
                    </Card>
                </Col>
            </Row>
            <Row justify={"center"} gutter={[15, 15]}>
                <Col lg={8}>
                    <Card>
                        <RadarC liveInChiangmai={liveInChiangmai} />
                    </Card>
                </Col>
                <Col lg={8}>
                    <Card><Region liveRegion={liveRegion} /></Card>
                </Col>
                <Col lg={8}>
                    <Card><Continent liveCountinent={liveCountinent} /></Card>
                </Col>
            </Row>
        </div>
    );
};

export default Respondents;
