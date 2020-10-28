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

    const data = [
        {
            id: 5,
            title: "5 พอใจมากที่สุด"
        },
        {
            id: 4,
            title: "4 พอใจ"
        },
        {
            id: 3,
            title: "3 ปกติ"
        },
        {
            id: 2,
            title: "2 ไม่พอใจ"
        },     
        {
            id: 1,
            title: "1 ไม่พอใจอย่างยิ่ง"
        },      
    ]
    const onFinish = async values => {
        console.log('Success:', values);
        const dataPost = {
            qA: values.qA,
            qB: values.qB,
            qC: values.qC,
            qD: values.qD,
            qE: values.qE,
            language: "th"
        }
        setLoading(true)
        const res = await POST_SATISFACTION(dataPost)
        if (res.code === 200) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "บันทึกข้อมูลสำเร็จ",
                showConfirmButton: false,
                timer: 1500
            });
            setLoading(false)
            props.history.push("/satisfactionTh");
            // formRef.current.resetFields()
            window.scrollTo(0,0)
        } else {
            setLoading(true)
        }
        console.log('Success: res', res);
    };

    const onValuesChange = (changedVal) => {
        setCurrent((prev) => ({ ...prev, [changedVal]: "finish" }))
    }

    const handleChangePage = (value) => {
        if (value === "th") {
            props.history.push("/satisfactionTh")
        } else {
            props.history.push("/satisfactionEN")
        }
    }

    const onFinishFailed = (errorInfo) =>{
        if(errorInfo.errorFields){
            Toast.fire({
                icon: 'error',
                title: 'คุณป้อนข้อมูลไม่ครบ !',
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
                <p className="font-header" >ยินดีต้อนรับสู่มหกรรมการเเข่งขัน THAILAND ดอยอินทนนท์&nbsp;</p>
                </Row>
                {/* <Row align="middle" justify="center"><span className="font-header" >ยินดีต้อนรับสู่การเเข่งขัน THAILAND ดอยอินทนนท์&nbsp;</span><img src={'Logo UTMB-01.png'} width={150} alt="thailand"/></Row> */}
                <Row align="middle" justify="center" className="layout-row d-flex justify-content-center" >
                    <Col lg={12} md={24} className="mb-60">
                        <h2 className="title-font">แบบสอบถามระดับความพึงพอใจ</h2>
                        <Form
                            layout="vertical"
                            ref={formRef}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >   
                        
                            <Form.Item
                                label="ท่านคือผู้เข้าเเข่งขันหรือไม่"
                                name="qE"
                                rules={[{ required: true, message: 'โปรดเลือกคำตอบ!' }]}
                            >
                                <Radio.Group className="row-flex" onChange={() => onValuesChange("qE")}>
                                    <Radio value={true}>ใช่</Radio>
                                    <Radio value={false}>ไม่ใช่</Radio>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item
                                label="ระดับความพึงพอใจโดยรวมของผู้จัดการแข่งขัน :"
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
                                label="ระดับความพึงพอใจ การเดินทางเข้ามาในการแข่งขัน :"
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
                                label="ระดับความพึงพอใจ สถานที่การจัดการแข่งขันและที่พัก :"
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
                                label="ระดับความพึงพอใจ ด้านการประชาสัมพันธ์ก่อนการจัดการแข่งขัน และการให้ข้อมูลที่เป็นประโยชน์ระหว่างการแข่งขัน :"
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
                                    ตกลง
                                </Button>
                                </Col>
                            </Row>
                        </Form>

                    </Col>
                    <Col lg={4} className="stick-second">
                        <Card style={{ top: 0, width: 400 }} className="card-stick ml-50">
                            <Steps progressDot direction="vertical" >
                                <Step title={`${current.qE==="wait" ? "(รอ)" : "(เสร็จสิ้น)"} ท่านคือผู้เข้าเเข่งขันหรือไม่`} status={current.qE} />
                                <Step title={`${current.qA==="wait" ? "(รอ)" : "(เสร็จสิ้น)"} ระดับความพึงพอใจโดยรวมของผู้จัดการแข่งขัน`} status={current.qA} />
                                <Step title={`${current.qB==="wait" ? "(รอ)" : "(เสร็จสิ้น)"} ระดับความพึงพอใจการเดินทางเข้ามาในการแข่งขัน`} status={current.qB} />
                                <Step title={`${current.qC==="wait" ? "(รอ)" : "(เสร็จสิ้น)"} ระดับความพึงพอใจสถานที่การจัดการแข่งขันและที่พัก`} status={current.qC} />
                                <Step title={`${current.qD==="wait" ? "(รอ)" : "(เสร็จสิ้น)"} ระดับความพึงพอใจด้านข้อมูลก่อนการจัดการแข่งขัน`} status={current.qD} />
                            </Steps>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Skeleton>
    )
}

export default Satisfaction
