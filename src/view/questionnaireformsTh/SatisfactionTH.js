/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState,useRef } from 'react'
import { Form, Button, Card, Row, Col, Radio, Steps,Skeleton } from 'antd';
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

    const data = [
        {
            id: 1,
            title: "1 ไม่พอใจอย่างยิ่ง"
        },
        {
            id: 2,
            title: "2 ไม่พอใจ"
        },
        {
            id: 3,
            title: "3 ปกติ"
        },
        {
            id: 4,
            title: "4 พอใจ"
        },
        {
            id: 5,
            title: "5 พอใจมากที่สุด"
        },
    ]
    const onFinish = async values => {
        console.log('Success:', values);
        const dataPost = {
            qA: values.qA,
            qB: values.qB,
            qC: values.qC,
            qD: values.qD,
            language: "th"
        }
        setLoading(true)
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
            // props.history.push("/satisfactionTh");
            formRef.current.resetFields()
        }else{
            setLoading(true)
        }
        console.log('Success: res', res);
    };

    const onValuesChange = (changedVal) => {
        setCurrent((prev) => ({ ...prev, [changedVal]: "finish" }))
    }

    const handleChangePage = (value) =>{
        if(value === "th"){
            props.history.push("/satisfactionTh")
        }else{
            props.history.push("/satisfactionEN")
        }
    }

    return (
        <Skeleton loading={loading} active>
        <div className="BG-forms">
        <Row align="middle" justify="end" className="button-lange">
        <Button onClick={()=>handleChangePage("th")}> <img src={'thailand.png'} width={20} alt="thailand"/>&nbsp;TH</Button>
                <Button onClick={()=>handleChangePage("en")}><img src={'united-kingdom.png'} width={20} alt="united-kingdom"/>&nbsp;EN</Button>
            </Row>
            <Row align="middle" justify="center" className="layout-row d-flex justify-content-center" >
                <Col lg={12} md={24} className="mb-60">
                    <h2 className="title-font">แบบตอบสอบถามระดับความพึงพอใจ (หลังจากจบการแข่งขัน) ที่เส้นชัย</h2>
                    <Form
                        layout="vertical"
                        ref={formRef}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >  
                        <Form.Item
                            label={<span>ระดับความพึงพอใจโดยรวมของผู้จัดการแข่งขัน :</span>}
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
                            label={<span>ระดับความพึงพอใจ การเดินทางเข้ามาในการแข่งขัน :</span>}
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
                            label={ <span>ระดับความพึงพอใจ สถานที่การจัดการแข่งขันและที่พัก :</span>}
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
                            label={<span>ระดับความพึงพอใจ ด้านการประชาสัมพันธ์ก่อนการจัดการแข่งขัน และการให้ข้อมูลที่เป็นประโยชน์ระหว่างการแข่งขัน :</span>}
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
                            <Button type="primary" htmlType="submit">
                                ตกลง
                            </Button>
                        </Row>
                    </Form>

                </Col>
                <Col lg={4} className="stick">
                    <Card style={{ top: 0, width: 400 }} className="card-stick ml-50">
                        <Steps progressDot direction="vertical" >
                            <Step className="item" title={`${current.qA} ระดับความพึงพอใจโดยรวมของผู้จัดการแข่งขัน`} status={current.qA} />
                            <Step title={`${current.qB} ระดับความพึงพอใจการเดินทางเข้ามาในการแข่งขัน`} status={current.qB} />
                            <Step title={`${current.qC} ระดับความพึงพอใจสถานที่การจัดการแข่งขันและที่พัก`} status={current.qC} />
                            <Step title={`${current.qD} ระดับความพึงพอใจด้านข้อมูลก่อนการจัดการแข่งขัน`} status={current.qD} />
                        </Steps>
                    </Card>
                </Col>
            </Row>
        </div>
        </Skeleton>
    )
}

export default Satisfaction
