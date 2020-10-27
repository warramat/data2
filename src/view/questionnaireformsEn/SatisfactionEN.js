/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef } from 'react'
import { Form, Button, Card, Row, Col, Radio, Steps, Skeleton } from 'antd';
import {
    POST_SATISFACTION,
} from '../../service/api'
import Swal from "sweetalert2";
const { Step } = Steps;

const Satisfaction = (props) => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [current, setCurrent] = useState({
        qA: "wait",
        qB: "wait",
        qC: "wait",
        qD: "wait",
    });

    const onFinish = async values => {
        console.log('Success:', values);
        const dataPost = {
            qA: values.qA,
            qB: values.qB,
            qC: values.qC,
            qD: values.qD,
            language: "en"
        }
        const res = await POST_SATISFACTION(dataPost)
        if (res.code === 200) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Data have been saved",
                showConfirmButton: false,
                timer: 1500
            });
            setLoading(false)
            // props.history.push("/satisfactionEN");
            formRef.current.resetFields()
        } else {
            setLoading(true)
        }
        console.log('Success: res', res);
    };

    const onValuesChange = (changedVal) => {
        console.log("key", changedVal)
        setCurrent((prev) => ({ ...prev, [changedVal]: "finish" }))
    }

    const handleChangePage = (value) => {
        if (value === "th") {
            props.history.push("/satisfactionTh")
        } else {
            props.history.push("/satisfactionEN")
        }
    }

    const data = [
        {
            id: 1,
            title: "1 Extremely dissatisfied"
        },
        {
            id: 2,
            title: "2 Dissatisfied"
        },
        {
            id: 3,
            title: "3 Normal"
        },
        {
            id: 4,
            title: "4 Satisfied"
        },
        {
            id: 5,
            title: "5 Most satisfied"
        },
    ]

    return (
        <Skeleton loading={loading} active>
            <div className="BG-forms">
                <Row align="middle" justify="end" className="button-lange">
                    <Button onClick={() => handleChangePage("th")}> <img src={'thailand.png'} width={20} alt="thailand" />&nbsp;TH</Button>
                    <Button onClick={() => handleChangePage("en")}><img src={'united-kingdom.png'} width={20} alt="united-kingdom" />&nbsp;EN</Button>
                </Row>
                <Row align="middle" justify="center"><span className="font-header" >ยินดีต้อนรับสู่การเเข่งขันวิ่ง&nbsp;</span><img src={'Logo UTMB-01.png'} width={150} alt="thailand"/></Row>
                <Row align="middle" justify="center" className="layout-row d-flex justify-content-center" >
                    <Col lg={12} md={24} className="mb-60">
                        <h2 className="title-font">Questionnaire form for satisfaction level (After the race) at the finish line</h2>
                        <Form
                            layout="vertical"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            ref={formRef}
                        >
                            <Form.Item
                                label={<span className="font-overflow">Overall satisfaction level of the tournament organizer</span>}
                                name="qA"
                                rules={[{ required: false, message: 'โปรดเลือกประเภทการแข่งขัน!' }]}
                            >
                                <Radio.Group className="row-flex" onChange={() => onValuesChange("qA")}>
                                    {data.map((item, idx) =>
                                        <Radio key={idx} value={item.id}>{item.title}</Radio>)
                                    }
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item
                                label={<span className="font-overflow">Satisfaction level Getting into the competition</span>}
                                name="qB"
                                rules={[{ required: false, message: 'โปรดเลือกประเภทการแข่งขัน!' }]}
                            >
                                <Radio.Group className="row-flex" onChange={() => onValuesChange("qB")}>
                                    {data.map((item, idx) =>
                                        <Radio key={idx} value={item.id}>{item.title}</Radio>)
                                    }
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item
                                label={<span className="font-overflow">Satisfaction level Venue and accommodation</span>}
                                name="qC"
                                rules={[{ required: false, message: 'โปรดเลือกประเภทการแข่งขัน!' }]}
                            >
                                <Radio.Group className="row-flex" onChange={() => onValuesChange("qC")}>
                                    {data.map((item, idx) =>
                                        <Radio key={idx} value={item.id}>{item.title}</Radio>)
                                    }
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item
                                label={<span className="font-overflow"> Satisfaction level Public relations before the competition And providing useful information during the competition</span>}
                                name="qD"
                                rules={[{ required: false, message: 'โปรดเลือกประเภทการแข่งขัน!' }]}
                            >
                                <Radio.Group className="row-flex" onChange={() => onValuesChange("qD")}>
                                    {data.map((item, idx) =>
                                        <Radio key={idx} value={item.id}>{item.title}</Radio>)
                                    }
                                </Radio.Group>
                            </Form.Item>

                            <Row justify="center">
                                <Button type="primary" htmlType="submit">
                                    Submit
                            </Button>
                            </Row>
                        </Form>

                    </Col>
                    <Col lg={4} className="stick">
                        <Card style={{ top: 0, width: 400 }} className="card-stick ml-50">
                            <Steps progressDot direction="vertical" >
                                <Step className="item" title={`${current.qA} OverallSatisfaction`} status={current.qA} />
                                <Step title={`${current.qB} SatisfactionCompetition`} status={current.qB} />
                                <Step title={`${current.qC} SatisfactionAccommodation`} status={current.qC} />
                                <Step title={`${current.qD} SatisfactionRelations`} status={current.qD} />
                            </Steps>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Skeleton>
    )
}

export default Satisfaction
