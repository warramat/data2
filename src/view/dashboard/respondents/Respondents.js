/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Col, Row, Card } from 'antd'
import Residence from './bar/Residence'
import RadarC from './Chart1/RadarC'
import Region from './pie/Region'
import Gender from './bar/Gender'
import { GET_RESPONDENT } from "../../../service/api"
import Continent from './pie/Continent'
import Job from "./Progress/Career";

const Respondents = () => {
    const [dataSource, setDataSource] = useState({});

    useEffect(() => {
        GetRespondent()
    }, [])

    const GetRespondent = async () => {
        try {

            const qrs = { evaluatortype: "all" }
            const res = await GET_RESPONDENT(qrs)
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
        <div>
            <Row justify={"center"} gutter={[15, 15]}>
                <Col lg={4}>
                    <Card>1</Card>
                </Col>
                <Col lg={4}>
                    <Card>2</Card>
                </Col>
                <Col lg={4}>
                    <Card>3</Card>
                </Col>
                <Col lg={4}>
                    <Card>4</Card>
                </Col>
                <Col lg={4}>
                    <Card>5</Card>
                </Col>
                <Col lg={4}>
                    <Card>6</Card>
                </Col>
            </Row>
            <Row justify={"center"} gutter={[15, 15]}>
                <Col lg={8}>
                    <Card>
                        <Gender></Gender>
                    </Card>
                </Col>
                <Col lg={8}>
                    <Card>
                        <Residence dataSource={dataSource} />
                    </Card>
                </Col>
                <Col lg={8}>
                    <Card>
                        <Job></Job>
                    </Card>
                </Col>
            </Row>
            <Row justify={"center"} gutter={[15, 15]}>
                <Col lg={8}>
                    <Card>
                        <RadarC dataSource={dataSource} />
                    </Card>
                </Col>
                <Col lg={8}>
                    <Card><Region /></Card>
                </Col>
                <Col lg={8}>
                    <Card><Continent /></Card>
                </Col>
            </Row>
        </div>
    );
};

export default Respondents;
