/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Col, Row, Card } from "antd";
import Residence from "./bar/Residence";
import Total from "./question/Total";
import { GET_RESPONDENT } from "../../../service/api";
import { float1Point } from "../../../tools/util";
import { ChangeToK } from "../../../tools/util";
import RadarC from "./Donut/RadarC";

import Region from "./pie/Region";
import Gender from "./bar/Gender";
import Continent from "./pie/Continent";
import Job from "./Progress/Career";

const Respondents = ({ setLoading }) => {
    const [quesionNairGroup, setQuesionNairGroup] = useState([]);
    const [residence, setResident] = useState({});
    const [liveCountinent, setLiveContinent] = useState({});
    const [liveInChiangmai, setLiveInChiangmai] = useState({});
    const [liveRegion, setLiveRegion] = useState({});
    const [competitionType, setCompetitionType] = useState({});
    const [gender, setGender] = useState({});
    const [filterItem, setFilterItem] = useState("all");

    useEffect(() => {
        GetRespondent();
    }, []);

    const GetRespondent = async (params = "all") => {
        setLoading(true);
        try {
            const qrs = { evaluatortype: params };
            const res = await GET_RESPONDENT(qrs);
            const labels = ["ทั้งหมดแบบสอบถาม", "นักกีฬาไทย", "นักกีฬาต่างชาติ",
                "เจ้าหน้าที่ผู้จัดการแข่งขัน", "อาสาสมัคร", "ผู้ติดตามนักกีฬา / ผู้ชม "]
            if (res.code === 200) {
                res.result[0].questionnaireGroup.map((item, index) => {
                    return item.choiceTh = labels[index]
                })
                setCompetitionType(res.result[0].competitionType);
                setLiveInChiangmai(res.result[0].live.liveInChiangMai);
                setLiveContinent(res.result[0].live.continent);
                setQuesionNairGroup(res.result[0].questionnaireGroup);
                setLiveRegion(res.result[0].live.region);
                setResident(res.result[0].residence);
                setGender(res.result[0].age);
            } else {
                alert("ERROR");
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
        setLoading(false);
    };

    const handleClickCard = (item) => {
        setFilterItem(item.evaluatortype);
        GetRespondent(item.evaluatortype);
    };

    return (
        <div>
            <Row justify={"center"} gutter={[15, 15]}>
                {quesionNairGroup.map((item, index) => {
                    return (
                        <Col xs={24} sm={12} md={8} lg={4} key={index}>
                            <Card onClick={() => handleClickCard(item)}
                                className={item.evaluatortype === filterItem
                                    ? `card-active` : `interactive`}>
                                <Total
                                    key={index}
                                    toppic={item.choiceTh}
                                    num={ChangeToK(item.count)}
                                    persen={float1Point(item.percent)}
                                    imageIndex={index}
                                />
                            </Card>
                        </Col>
                    );
                })}
            </Row>
            <Row justify={"center"} gutter={[15, 15]}>
                <Col lg={8} md={12} sm={12} xs={24}>
                    <Card style={{ height: "100%" }}>
                        <Gender gender={gender} />
                    </Card>
                </Col>
                <Col lg={8} md={12} sm={12} xs={24}>
                    <Card style={{ height: "100%" }}>
                        <Residence residence={residence} />
                    </Card>
                </Col>
                <Col lg={8} md={24} sm={24} xs={24}>
                    <Card style={{ height: "100%" }}>
                        <Job carrier={competitionType} />
                    </Card>
                </Col>
            </Row>
            <Row justify={"center"} gutter={[15, 15]}>
                <Col lg={8} md={24} sm={12} xs={24}>
                    <Card style={{ height: "100%" }} >
                        <RadarC liveInChiangmai={liveInChiangmai} />
                    </Card>
                </Col>
                <Col lg={8} md={12} sm={12} xs={24}>
                    <Card style={{ height: "100%" }} >
                        <Region liveRegion={liveRegion} />
                    </Card>
                </Col>
                <Col lg={8} md={24} sm={24} xs={24}>
                    <Card style={{ height: "100%" }} >
                        <Continent liveCountinent={liveCountinent} />
                    </Card>
                </Col>
            </Row>
        </div >
    );
};

export default Respondents;
