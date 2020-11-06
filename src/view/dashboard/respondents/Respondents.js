/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Col, Row, Card } from "antd";
import Residence from "./bar/Residence";
import Total from "./question/Total";
import { GET_RESPONDENT } from "../../../service/api";
import { float1Point } from "../../../tools/util"
import { ChangeToK } from "../../../tools/util"
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
    const [carrier, setCarrier] = useState({});
    const [gender, setGender] = useState({});

    useEffect(() => {
        GetRespondent();
    }, []);

    const GetRespondent = async () => {
        setLoading(true)
        try {
            const qrs = { evaluatortype: "all" };
            const res = await GET_RESPONDENT(qrs);
            if (res.code === 200) {
                console.log("resssssss", res);
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
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
        setLoading(false)
    };

    return (
        <div>
            <Row justify={"center"} gutter={[15, 15]}>
                {quesionNairGroup.map((item, index) => {
                    return (
                        <Col lg={4} key={index}>
                            <Card>
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
                <Col lg={8}>
                    <Card style={{ minHeight: "33em" }} >
                        <Gender gender={gender} />
                    </Card>
                </Col>
                <Col lg={8}>
                    <Card style={{ minHeight: "33em" }}>
                        <Residence residence={residence} />
                    </Card>
                </Col>
                <Col lg={8}>
                    <Card style={{ minHeight: "33em" }}>
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
                    <Card>
                        <Region liveRegion={liveRegion} />
                    </Card>
                </Col>
                <Col lg={8}>
                    <Card>
                        <Continent liveCountinent={liveCountinent} />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Respondents;
