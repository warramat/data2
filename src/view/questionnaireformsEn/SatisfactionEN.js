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
        qE: "wait",
    });

    const onFinish = async values => {
        console.log('Success:', values);
        const dataPost = {
            qA: values.qA,
            qB: values.qB,
            qC: values.qC,
            qD: values.qD,
            qE: values.qE,
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
            props.history.push("/satisfactionEN");
            // formRef.current.resetFields()
            window.scrollTo(0,0)
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
            id: 5,
            title: "5 Most satisfied"
        },
        {
            id: 4,
            title: "4 Satisfied"
        },
        {
            id: 3,
            title: "3 Normal"
        },
        {
            id: 2,
            title: "2 Dissatisfied"
        },
        {
            id: 1,
            title: "1 Extremely dissatisfied"
        },  
       
    ]

    const onFinishFailed = (errorInfo) =>{
        if(errorInfo.errorFields){
            Toast.fire({
                icon: 'error',
                title: 'You have not entered all information!',
                text:'Please enter all information.',
                background: '#214252',
                customClass: {
                    title: 'alert-custom-title',
                    icon: 'alert-img',
                    content: 'alert-custom',
                    actions: 'alert-custom',
                    }
              })
        }
    }

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

    return (
        <Skeleton loading={loading} active>
            <div className="BG-forms">
                <Row align="middle" justify="end" className="button-lange">
                    <Button className="button-lange-radius" onClick={() => handleChangePage("th")}> <img src={'thailand.png'} width={20} alt="thailand" />&nbsp;TH</Button>
                    <Button className="button-lange-radius" onClick={() => handleChangePage("en")}><img src={'united-kingdom.png'} width={20} alt="united-kingdom" />&nbsp;EN</Button>
                </Row>
                <Row align="middle" justify="center">
                    <img src={'Logo UTMB-01.png'} className="img-header" alt="thailand"/>
                    <img src={'SAT-LOGO.png'} className="img-header" alt="thailand"/>
                </Row>
                <Row align="middle" justify="center">
                <p className="font-header" >Welcome to the competition THAILAND Doi Inthanon&nbsp;</p>
                </Row>
                {/* <Row align="middle" justify="center"><span className="font-header" >Welcome to the THAILAND Doi Inthanon&nbsp;</span><img src={'Logo UTMB-01.png'} width={150} alt="thailand"/></Row> */}
                <Row justify="center" className="layout-row d-flex justify-content-center" >
                    <Col lg={12} md={24} className="mb-60">
                        <h2 className="title-font">Satisfaction level questionnaire</h2>
                        <Form
                            layout="vertical"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            ref={formRef}
                            onFinishFailed={onFinishFailed}
                        >   

                            <Form.Item
                                label="Are you a contestant ?"
                                name="qE"
                                rules={[{ required: true, message: 'โปรดเลือกคำตอบ!' }]}
                            >
                                <Radio.Group className="row-flex" onChange={() => onValuesChange("qE")}>
                                    <Radio value={true}>Yes</Radio>
                                    <Radio value={false}>No</Radio>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item
                                label="Satisfaction level for getting into the event distinatio"
                                name="qA"
                                rules={[{ required: true, message: 'โปรดเลือกประเภทการแข่งขัน!' }]}
                            >
                                <Radio.Group className="row-flex" onChange={() => onValuesChange("qA")}>
                                    {data.map((item, idx) =>
                                        <Radio key={idx} value={item.id}>{item.title}</Radio>)
                                    }
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item
                                label="Satisfaction level Getting into the competition"
                                name="qB"
                                rules={[{ required: true, message: 'โปรดเลือกประเภทการแข่งขัน!' }]}
                            >
                                <Radio.Group className="row-flex" onChange={() => onValuesChange("qB")}>
                                    {data.map((item, idx) =>
                                        <Radio key={idx} value={item.id}>{item.title}</Radio>)
                                    }
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item
                                label="Satisfaction level for venue and accomandation of the event"
                                name="qC"
                                rules={[{ required: true, message: 'โปรดเลือกประเภทการแข่งขัน!' }]}
                            >
                                <Radio.Group className="row-flex" onChange={() => onValuesChange("qC")}>
                                    {data.map((item, idx) =>
                                        <Radio key={idx} value={item.id}>{item.title}</Radio>)
                                    }
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item
                                label="Satisfaction level for public relations before the event And providing useful information during the event"
                                name="qD"
                                rules={[{ required: true, message: 'โปรดเลือกประเภทการแข่งขัน!' }]}
                            >
                                <Radio.Group className="row-flex" onChange={() => onValuesChange("qD")}>
                                    {data.map((item, idx) =>
                                        <Radio key={idx} value={item.id}>{item.title}</Radio>)
                                    }
                                </Radio.Group>
                            </Form.Item>

                            <Row justify="center">
                            <Col lg={4} md={5} xs={10}>
                            <Button className="button-submit" htmlType="submit" >
                                    Submit
                                </Button>
                                </Col>
                            </Row>
                        </Form>

                    </Col>
                    <Col >
                        <Card style={{ width: 400 }} className="stick card-stick ml-50">
                            <Steps progressDot direction="vertical" >
                                <Step title={`${current.qE==="wait" ? "(Wait)" : "(Finish)"} Are you a contestant ?`} status={current.qE} />
                                <Step title={`${current.qA==="wait" ? "(Wait)" : "(Finish)"} OverallSatisfaction`} status={current.qA} />
                                <Step title={`${current.qB==="wait" ? "(Wait)" : "(Finish)"} SatisfactionCompetition`} status={current.qB} />
                                <Step title={`${current.qC==="wait" ? "(Wait)" : "(Finish)"} SatisfactionAccommodation`} status={current.qC} />
                                <Step title={`${current.qD==="wait" ? "(Wait)" : "(Finish)"} SatisfactionRelations`} status={current.qD} />
                            </Steps>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Skeleton>
    )
}

export default Satisfaction
