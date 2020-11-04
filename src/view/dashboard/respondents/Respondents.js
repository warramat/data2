/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Col, Row, Card } from 'antd'
import { GET_BARDATA } from '../../../service/api'
import BarResidence from './bar/Bar'



const Respondents = () => {

    const [labelBarChart, setlabelBarChart] = useState([]);
    const [dataBar, setDataBar] = useState([]);

    useEffect(() => {
        GetDataBarResource();
    }, []);

    const GetDataBarResource =async()=>{
        await GetBarData()
    };

    const GetBarData = async () => {
        try {
            const res = await GET_BARDATA();
                if (res.code === 200) {
                    setlabelBarChart(res.result[0].residence.label);
                    setDataBar(res.result[0].residence.data);
                } else {
                    alert("ERROR");
                }
                console.log("RES>>>", res);
                } catch (error) {
            console.log(error);
        }
    };

    return (
        <div >
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
                        1
                    </Card>
                </Col>
                <Col lg={8}>
                    <Card><BarResidence labelBarChart={labelBarChart} dataBar={dataBar} /></Card>
                </Col>
                <Col lg={8}>
                    <Card>3</Card>
                </Col>
            </Row>
            <Row justify={"center"} gutter={[15, 15]}>
                <Col lg={8}>
                    <Card>1</Card>
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
