/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState,useRef } from 'react'
import { Form, Input, Button, Row, Col, Select, Radio, Steps, Card,Skeleton } from 'antd';
import {
    GET_DATA_SPORTMAN,
    GET_DATA_TYPERACE,
    GET_DATA_AGE,
    GET_DATA_WORK,
    GET_DATA_SPORTMAN_SECTOR,
    // GET_DATA_SPORTMAN_LANDMASS,
    GET_DATA_PAYRANGE,
    GET_DATA_BUDGET,
    GET_DATA_RELAX,
    POST_EVALUTION
} from '../../service/api'
import { _isEmpty, NumberRegX } from '../../tools/util'
import Swal from "sweetalert2";
const { Option } = Select;
const { Step } = Steps;

const Exhibitors = (props) => {
    const formRef = useRef();
    const [openZone, setOpenZone] = useState(true);
    const [openTravel, setOpenTravel] = useState(false);
    const [openMore, setOpenMore] = useState("");
    const [openWorkMore, setOpenWorkMore] = useState("");
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState({
        sportsmanList: [],
        typeRaceList: [],
        ageList: [],
        workList: [],
        payList: [],
        budgetList: [],
        sectorList: [],
        landmassList: [],
        relaxList: []
    })
    const [current, setCurrent] = useState({
        evaluatorType: "wait",
        competitionType: "wait",
        gender: "wait",
        age: "wait",
        career: "wait",
        careerOther: "wait",
        liveInChiangMai: "wait",
        liveInChiangMaiFalse: "wait",
        aBreakBetweenMatches: "wait",
        aBreakBetweenMatchesOther: "wait",
        costsDuringCompetition: "wait",
        chiangMaiTravelPlans: "wait",
        chiangMaiTravelPlansTrue: "wait",
        name: "wait",
        tell: "wait"
    });

    useEffect(() => {
        GetData()
    }, [])

    const CheckEmptyValue = (value) => {
        if (_isEmpty(value)) {
            return []
        } else {
            return value
        }
    }

    const GetData = async () => {
        try {
            const sportman = await GET_DATA_SPORTMAN()
            const typerace = await GET_DATA_TYPERACE()
            const age = await GET_DATA_AGE()
            const work = await GET_DATA_WORK()
            const sector = await GET_DATA_SPORTMAN_SECTOR()
            // const landmass = await GET_DATA_SPORTMAN_LANDMASS()
            const payrange = await GET_DATA_PAYRANGE()
            const budget = await GET_DATA_BUDGET()
            const relax = await GET_DATA_RELAX()

            setList({
                sportsmanList: CheckEmptyValue(sportman.result[0].choices),
                typeRaceList: CheckEmptyValue(typerace.result[0].choices),
                ageList: CheckEmptyValue(age.result[0].choices),
                workList: CheckEmptyValue(work.result[0].choices),
                payList: CheckEmptyValue(payrange.result[0].choices),
                budgetList: CheckEmptyValue(budget.result[0].choices),
                sectorList: CheckEmptyValue(sector.result[0].choices),
                // landmassList: CheckEmptyValue(landmass.result[0].choices),
                relaxList: CheckEmptyValue(relax.result[0].choices),
            })

        } catch (error) {
            console.log(error);
        }

    }

    const onFinish = async (values) => {
        console.log("Onfinish", values)
        const dataPost = {
            evaluatorType: values.evaluatorType,
            competitionType: values.competitionType,
            gender: values.gender,
            age: values.age,
            career: values.career,
            careerOther: values.careerOther,
            liveInChiangMai: values.liveInChiangMai,
            liveInChiangMaiFalse: values.liveInChiangMaiFalse,
            aBreakBetweenMatches: values.aBreakBetweenMatches,
            aBreakBetweenMatchesOther: values.aBreakBetweenMatchesOther,
            costsDuringCompetition: values.costsDuringCompetition,
            chiangMaiTravelPlans: values.chiangMaiTravelPlans,
            chiangMaiTravelPlansTrue: values.chiangMaiTravelPlansTrue,
            contact: {
                name: values.name,
                tel: values.tell
            },
            language: "th"
        }
        setLoading(true)
        const res = await POST_EVALUTION(dataPost)
        if (res.code === 200) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "บันทึกข้อมูลสำเร็จ",
                showConfirmButton: false,
                timer: 1500
            });
            setLoading(false)
            resetField()
        }else{
            setLoading(true)
        }
    };

    const resetField=()=>{
        formRef.current.resetFields()
        setOpenMore("")
        setOpenWorkMore("")
        setOpenZone(true)
        setOpenTravel(false)
    }

    const checkMore = (value, word, list) => {
        if (word === "อื่นๆ ... ") {
            onValuesChange("aBreakBetweenMatches")
            const result = list.find((item) => item.id === value && item.choiceTh === word)
            if (_isEmpty(result)) {
                setOpenMore("")
            } else {
                setOpenMore(result.choiceTh)
            }
        } else if (word === "อื่นๆ ระบุ") {
            onValuesChange("career")
            const result = list.find((item) => item.id === value && item.choiceTh === word)
            if (_isEmpty(result)) {
                setOpenWorkMore("")
            } else {
                setOpenWorkMore(result.choiceTh)
            }
        } else if (word === "liveInChiangMai") {
            onValuesChange(word)
            setOpenZone(value)
        } else if (word === "chiangMaiTravelPlans") {
            onValuesChange(word)
            setOpenTravel(value)
        }
    }

    const onValuesChange = (changedVal) => {
        console.log("key", changedVal)
        setCurrent((prev) => ({ ...prev, [changedVal]: "finish" }))
    }

    const handleChangePage = (value) =>{
        if(value === "th"){
            props.history.push("/exhibitorsTh")
        }else{
            props.history.push("/exhibitorsEN")
        }
    }

    return (
        <Skeleton loading={loading} active>
        <div className="BG-forms">
            <Row align="middle" justify="end" className="button-lange">
                <Button onClick={()=>handleChangePage("th")}> <img src={'thailand.png'} width={20} alt="thailand"/>&nbsp;TH</Button>
                <Button onClick={()=>handleChangePage("en")}><img src={'united-kingdom.png'} width={20} alt="united-kingdom"/>&nbsp;EN</Button>
            </Row>
                <Row align="middle" justify="center">
                    <img src={'Logo UTMB-01.png'} className="img-header" alt="thailand"/>
                    <img src={'SAT-LOGO.png'} className="img-header" alt="thailand"/>
                </Row>
                <Row align="middle" justify="center">
                <p className="font-header" >ยินดีต้อนรับสู่มหกรรมการเเข่งขัน THAILAND ดอยอินทนนท์&nbsp;</p>
                </Row>

                <Row align="middle" justify="center" className="layout-row d-flex justify-content-center">
                <Col lg={12} md={24}>
                    <h1 className="title-font">แบบสอบถามออนไลน์สำหรับผู้เข้าร่วมงาน</h1>
                    <div className="mb-60 p-10">
                        <Form layout="vertical" ref={formRef} onFinish={onFinish} >
                            <Form.Item
                                id="services"
                                label="กลุ่มผู้ตอบเเบบสอบถาม "
                                name="evaluatorType"
                                rules={[{ required: true, message: 'โปรดเลือกกลุ่มผู้ตอบเเบบสอบถาม!' }]}
                            >
                                <Select className="row-flex" placeholder="เลือกกลุ่มผู้ตอบเเบบสอบถาม" onChange={() => onValuesChange("evaluatorType")}>
                                    {list.sportsmanList.map(item => (
                                        <Option key={item.id} value={item.id} >
                                            {item.choiceTh}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="ประเภทการแข่งขัน"
                                name="competitionType"
                                rules={[{ required: false, message: 'โปรดเลือกประเภทการแข่งขัน!' }]}
                            >
                                <Select className="row-flex" placeholder="เลือกประเภทการแข่งขัน" onChange={() => onValuesChange("competitionType")}>
                                    {list.typeRaceList.map(item => (
                                        <Option key={item.id} value={item.id}>
                                            {item.choiceTh}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="เพศ"
                                name="gender"
                                rules={[{ required: true, message: 'โปรดเลือกประเภทการแข่งขัน!' }]}
                            >
                                <Radio.Group className="row-flex" onChange={() => onValuesChange("gender")}>
                                    <Radio value="male">ผู้ชาย</Radio>
                                    <Radio value="female">ผู้หญิง</Radio>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item
                                label="อายุ"
                                name="age"
                                rules={[{ required: true, message: 'โปรดเลือกช่วงอายุ!' }]}
                            >
                                <Select className="row-flex" placeholder="เลือกช่วงอายุ" onChange={() => onValuesChange("age")}>
                                    {list.ageList.map(item => (
                                        <Option key={item.id} value={item.id}>
                                            {item.choiceTh}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="อาชีพ"
                                name="career"
                                rules={[{ required: true, message: 'โปรดเลือกอาชีพ!' }]}
                            >
                                <Select className="row-flex" placeholder="เลือกอาชีพ" onChange={(value) => checkMore(value, "อื่นๆ ระบุ", list.workList)}>
                                    {list.workList.map(item => (
                                        <Option key={item.id} value={item.id}>
                                            {item.choiceTh}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            {openWorkMore === "อื่นๆ ระบุ" ?
                                <Form.Item
                                    label="อาชีพ"
                                    name="careerOther"
                                    rules={[{ required: true, message: 'โปรดป้อนข้อมูลอาชีพ!' }]}
                                >
                                    <Input className="row-flex" style={{ width: '95%', marginLeft: '20px' }} placeholder="ป้อนข้อมูลอาชีพ" />
                                </Form.Item>
                                : null}

                            <Form.Item
                                label="ปัจจุบันท่านพำนักอาศัยอยู่ในจังหวัดเชียงใหม่"
                                name="liveInChiangMai"
                                rules={[{ required: true, message: 'โปรดเลือกประเภทการแข่งขัน!' }]}
                            >
                                <Radio.Group className="row-flex" onChange={(e) => checkMore(e.target.value, "liveInChiangMai", [])} >
                                    <Radio value={true}>ใช่</Radio>
                                    <Radio value={false}>ไม่ใช้</Radio>
                                </Radio.Group>
                            </Form.Item>

                            {openZone === false ?
                                <Form.Item
                                    label="ภูมิภาคนักกีฬาไทย "
                                    name="liveInChiangMaiFalse"
                                    rules={[{ required: true, message: 'โปรดเลือกภูมิภาคนักกีฬาไทย!' }]}
                                >
                                    <Select className="row-flex" style={{ width: '95%', marginLeft: '20px' }} placeholder="เลือกภูมิภาคนักกีฬาไทย">
                                        {list.sectorList.map(item => (
                                            <Option key={item.id} value={item.id}>
                                                {item.choiceTh}
                                            </Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                                : null}



                            <Form.Item
                                label="การพักระหว่างการแข่งขัน"
                                name="aBreakBetweenMatches"
                                rules={[{ required: true, message: 'การพักระหว่างการแข่งขัน!' }]}
                            >
                                <Radio.Group className="row-flex" onChange={(e) => checkMore(e.target.value, "อื่นๆ ... ", list.relaxList)} >
                                    {list.relaxList.map((item) => (
                                        <Radio className="radioStyle" key={item.id} value={item.id}>
                                            {item.choiceTh}
                                        </Radio>
                                    ))}
                                    {openMore === "อื่นๆ ... " ?
                                        <Form.Item
                                            label="ที่พัก"
                                            name="aBreakBetweenMatchesOther"
                                            rules={[{ required: true, message: 'ที่พักระหว่างการแข่งขัน!' }]}
                                        >
                                            <Input className="row-flex" style={{ width: '95%', marginLeft: '20px' }} placeholder="ป้อนข้อมูลที่พัก" />
                                        </Form.Item>
                                        : null}
                                </Radio.Group>
                            </Form.Item>



                            <Form.Item
                                label="ค่าใช้จ่ายที่เกิดขึ้นระหว่างการเข้าร่วมการแข่งขัน เช่นค่าที่พัก ค่าอาหาร ค่าของที่ระลึก ค่าเดินทาง เป็นต้น (ไม่รวมค่าสมัคร)"
                                name="costsDuringCompetition"
                                rules={[{ required: true, message: 'โปรดเลือกค่าใช้จ่าย!' }]}
                            >
                                <Select className="row-flex" placeholder="เลือกค่าใช้จ่าย" listHeight={260}
                                    onChange={() => onValuesChange("costsDuringCompetition")}>
                                    {list.payList.map(item => (
                                        <Option key={item.id} value={item.id} className	>
                                            {item.choiceTh}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>



                            <Form.Item
                                label="ท่านมีแพลนการท่องเที่ยวในจังหวัดเชียงใหม่หลังจากการแข่งขันหรือไม่"
                                name="chiangMaiTravelPlans"
                                rules={[{ required: true, message: 'โปรดเลือกแพลนการท่องเที่ยว!' }]}
                            >
                                <Radio.Group className="row-flex" onChange={(e) => checkMore(e.target.value, "chiangMaiTravelPlans", [])}>
                                    <Radio value={true}>มี</Radio>
                                    <Radio value={false}>ไม่มี</Radio>
                                </Radio.Group>
                            </Form.Item>

                            {openTravel === true ?
                                <Form.Item
                                    label="ท่านได้ตั้งงบประมาณการท่องเที่ยวหลังการแข่งขันประมาณเท่าไร"
                                    name="chiangMaiTravelPlansTrue"
                                    rules={[{ required: true, message: 'โปรดเลือกงบประมาณการท่องเที่ยว!' }]}
                                >
                                    <Select className="row-flex" style={{ width: '95%', marginLeft: '20px' }}
                                        placeholder="เลือกงบประมาณการท่องเที่ยว" listHeight={250}>
                                        {list.budgetList.map(item => (
                                            <Option key={item.id} value={item.id}>
                                                {item.choiceTh}
                                            </Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                                : null}

                            <p style={{ fontWeight: '600' }}>กรอกชื่อและเบอร์โทรติดต่อ เพื่อร่วมลุ้นรับรางวัล : </p >
                            <Form.Item
                                label="ชื่อ"
                                name="name"
                                rules={[{ required: true, message: 'โปรดป้อนชื่อ!' }]}
                            >
                                <Input onChange={() => onValuesChange("name")}
                                    className="row-flex" placeholder="กรอกข้อมูลชื่อ" />
                            </Form.Item>
                            <Form.Item
                                label="เบอร์โทรศัพท์"
                                name="tell"
                                rules={[{ required: true, message: 'โปรดป้อนเบอร์โทรศัพท์!' },
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                        const regexTH = NumberRegX('number');
                                        if (regexTH.test(value)) {
                                            return Promise.reject('กรุณาป้อนตัวเลข!');
                                        }
                                        return Promise.resolve()
                                    }
                                })
                                ]}
                            >
                                <Input onChange={() => onValuesChange("tell")} className="row-flex" placeholder="กรอกข้อมูลเบอร์โทรศัพท์" />
                            </Form.Item>

                            <Row justify="center" align="middle">
                                <Button className="button-submit" htmlType="submit" >
                                    ตกลง
                                </Button>
                            </Row>

                        </Form>
                    </div>
                </Col>
                <Col className="stick">
                    <Card style={{ top: 0,width:350 }} className="card-stick ml-50">
                        <Steps progressDot direction="vertical" >                    
                            <Step className="item" title={`${current.evaluatorType==="wait" ? "(รอ)" : "(เสร็จสิ้น)"} กลุ่มผู้ตอบเเบบสอบถาม`} status={current.evaluatorType} />
                            <Step title={`${current.competitionType==="wait" ? "(รอ)" : "(เสร็จสิ้น)"} ประเภทการแข่งขัน`} status={current.competitionType} />
                            <Step title={`${current.gender==="wait" ? "(รอ)" : "(เสร็จสิ้น)"} เพศ`} status={current.gender} />
                            <Step title={`${current.age==="wait" ? "(รอ)" : "(เสร็จสิ้น)"} ช่วงอายุ`} status={current.age} />
                            <Step title={`${current.career==="wait" ? "(รอ)" : "(เสร็จสิ้น)"} อาชีพ`} status={current.career} />
                            <Step title={`${current.liveInChiangMai==="wait" ? "(รอ)" : "(เสร็จสิ้น)"} ปัจจุบันท่านพำนักอาศัยอยู่ในจังหวัดเชียงใหม่`} status={current.liveInChiangMai} />
                            <Step title={`${current.aBreakBetweenMatches==="wait" ? "(รอ)" : "(เสร็จสิ้น)"} การพักระหว่างการแข่งขัน`} status={current.aBreakBetweenMatches} />
                            <Step title={`${current.costsDuringCompetition==="wait" ? "(รอ)" : "(เสร็จสิ้น)"} ค่าใช้จ่ายที่เกิดขึ้นระหว่างการเข้าร่วมการแข่งขัน`} status={current.costsDuringCompetition} />
                            <Step title={`${current.chiangMaiTravelPlans==="wait" ? "(รอ)" : "(เสร็จสิ้น)"} แพลนการท่องเที่ยวในจังหวัดเชียงใหม่หลังจากการแข่งขัน`} status={current.chiangMaiTravelPlans} />
                            <Step title={`${current.name==="wait" ? "(รอ)" : "(เสร็จสิ้น)"} ชื่อ`} status={current.name} />
                            <Step title={`${current.tell==="wait" ? "(รอ)" : "(เสร็จสิ้น)"} เบอร์โทรศัพท์`} status={current.tell} />
                        </Steps>
                    </Card>
                </Col>
            </Row>
            
        </div>
        </Skeleton>
    )
}

export default Exhibitors
