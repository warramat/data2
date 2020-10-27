/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react'
import { Form, Input, Button, Row, Col, Select, Radio, Steps, Card, Skeleton } from 'antd';
import {
    GET_DATA_SPORTMAN,
    GET_DATA_TYPERACE,
    GET_DATA_AGE,
    GET_DATA_WORK,
    GET_DATA_SPORTMAN_SECTOR,
    GET_DATA_SPORTMAN_LANDMASS,
    GET_DATA_PAYRANGE,
    GET_DATA_BUDGET,
    GET_DATA_RELAX,
    POST_EVALUTION
} from '../../service/api'
import Swal from "sweetalert2";
import { _isEmpty, NumberRegX } from '../../tools/util'
const { Option } = Select;
const { Step } = Steps;

const Exhibitors = (props) => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [openZone, setOpenZone] = useState(true);
    const [openTravel, setOpenTravel] = useState(false);
    const [openMore, setOpenMore] = useState("");
    const [openWorkMore, setOpenWorkMore] = useState("");
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
            const landmass = await GET_DATA_SPORTMAN_LANDMASS()
            const payrange = await GET_DATA_PAYRANGE()
            const budget = await GET_DATA_BUDGET()
            const relax = await GET_DATA_RELAX()

            console.log("sportman", sportman)
            console.log("typerace", typerace)
            console.log("age", age)
            console.log("work", work)
            setList({
                sportsmanList: CheckEmptyValue(sportman.result[0].choices),
                typeRaceList: CheckEmptyValue(typerace.result[0].choices),
                ageList: CheckEmptyValue(age.result[0].choices),
                workList: CheckEmptyValue(work.result[0].choices),
                payList: CheckEmptyValue(payrange.result[0].choices),
                budgetList: CheckEmptyValue(budget.result[0].choices),
                sectorList: CheckEmptyValue(sector.result[0].choices),
                landmassList: CheckEmptyValue(landmass.result[0].choices),
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
            language: "en"
        }
        const res = await POST_EVALUTION(dataPost)
        if (res.code === 200) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Data have been saved",
                showConfirmButton: false,
                timer: 1500
            });
            setLoading(false)
            // props.history.push("/exhibitorsEN");
            formRef.current.resetFields()
        } else {
            setLoading(true)
        }
        console.log('Success:', values);
        console.log('Success:', res);
    };

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

    const handleChangePage = (value) => {
        if (value === "th") {
            props.history.push("/exhibitorsTh")
        } else {
            props.history.push("/exhibitorsEN")
        }
    }

    return (
        <Skeleton loading={loading} active>
            <div className="BG-forms">
                <Row align="middle" justify="end" className="button-lange">
                    <Button onClick={() => handleChangePage("th")}> <img src={'thailand.png'} width={20} alt="thailand" />&nbsp;TH</Button>
                    <Button onClick={() => handleChangePage("en")}><img src={'united-kingdom.png'} width={20} alt="united-kingdom" />&nbsp;EN</Button>
                </Row>
                <Row align="middle" justify="center">
                    <img src={'Logo UTMB-01.png'} className="img-header" alt="thailand"/><br/>
                </Row>
                <Row align="middle" justify="center">
                <p className="font-header" >Welcome to the THAILAND Doi Inthanon&nbsp;</p>
                </Row>
                {/* <Row align="middle" justify="center"><span className="font-header" >Welcome to the THAILAND Doi Inthanon&nbsp;</span><img src={'Logo UTMB-01.png'} width={150} alt="thailand"/></Row> */}
                <Row align="middle" justify="center" className="layout-row d-flex justify-content-center">
                    <Col lg={12} md={24} >
                        <h1 className="title-font">Online questionnaire for exhibitors</h1>
                        <div className="mb-60 p-10">
                            <Form layout="vertical" ref={formRef} onFinish={onFinish} >
                                <Form.Item
                                    id="services"
                                    label="Questionnaire group"
                                    name="evaluatorType"
                                    rules={[{ required: true, message: 'Please select Questionnaire group!' }]}
                                >
                                    <Select className="row-flex" placeholder="Select Questionnaire group" onChange={() => onValuesChange("evaluatorType")}>
                                        {list.sportsmanList.map(item => (
                                            <Option key={item.id} value={item.id} >
                                                {item.choiceEn}
                                            </Option>
                                        ))}
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    label="Competition type"
                                    name="competitionType"
                                    rules={[{ required: false, message: 'Please select Competition type!' }]}
                                >
                                    <Select className="row-flex" placeholder="Select Competition type" onChange={() => onValuesChange("competitionType")}>
                                        {list.typeRaceList.map(item => (
                                            <Option key={item.id} value={item.id}>
                                                {item.choiceEn}
                                            </Option>
                                        ))}
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    label="Gender"
                                    name="gender"
                                    rules={[{ required: true, message: 'Please Choose Gender!' }]}
                                >
                                    <Radio.Group className="row-flex" onChange={() => onValuesChange("gender")}>
                                        <Radio value="male">Male</Radio>
                                        <Radio value="female">Female</Radio>
                                    </Radio.Group>
                                </Form.Item>

                                <Form.Item
                                    label="Age Range"
                                    name="age"
                                    rules={[{ required: true, message: 'Please Choose Age range!' }]}
                                >
                                    <Select className="row-flex" placeholder="Choose Age range" onChange={() => onValuesChange("age")}>
                                        {list.ageList.map(item => (
                                            <Option key={item.id} value={item.id}>
                                                {item.choiceEn}
                                            </Option>
                                        ))}
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    label="Career"
                                    name="career"
                                    rules={[{ required: true, message: 'Please selcet Career!' }]}
                                >
                                    <Select className="row-flex" placeholder="Select Career" onChange={(value) => checkMore(value, "อื่นๆ ระบุ", list.workList)}>
                                        {list.workList.map(item => (
                                            <Option key={item.id} value={item.id}>
                                                {item.choiceEn}
                                            </Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                                {openWorkMore === "อื่นๆ ระบุ" ?
                                    <Form.Item
                                        label="Career"
                                        name="careerOther"
                                        rules={[{ required: true, message: 'Please input career!' }]}
                                    >
                                        <Input className="row-flex" style={{ width: '95%', marginLeft: '20px' }} placeholder="input career" />
                                    </Form.Item>
                                    : null}

                                <Form.Item
                                    label="You currently live in Chiang Mai Province"
                                    name="liveInChiangMai"
                                    rules={[{ required: true, message: 'Please choose you currently live in Chiang Mai Province.!' }]}
                                >
                                    <Radio.Group className="row-flex" onChange={(e) => checkMore(e.target.value, "liveInChiangMai", [])} >
                                        <Radio value={true}>True</Radio>
                                        <Radio value={false}>False</Radio>
                                    </Radio.Group>
                                </Form.Item>

                                {openZone === false ?
                                    <Form.Item
                                        label="Where are you from "
                                        name="liveInChiangMaiFalse"
                                        rules={[{ required: true, message: 'Please select where are you from!' }]}
                                    >
                                        <Select className="row-flex" style={{ width: '95%', marginLeft: '20px' }} placeholder="Select where are you from">
                                            {list.sectorList.map(item => (
                                                <Option key={item.id} value={item.id}>
                                                    {item.choiceEn}
                                                </Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                    : null}

                                <Form.Item
                                    label="Accommodation during the match"
                                    name="aBreakBetweenMatches"
                                    rules={[{ required: true, message: 'Please choose accommodation during the match!' }]}
                                >
                                    <Radio.Group className="row-flex" onChange={(e) => checkMore(e.target.value, "อื่นๆ ... ", list.relaxList)} >
                                        {list.relaxList.map((item) => (
                                            <Radio className="radioStyle" key={item.id} value={item.id}>
                                                {item.choiceEn}
                                            </Radio>
                                        ))}
                                        {openMore === "อื่นๆ ... " ?
                                            <Form.Item
                                                label="Accommodation"
                                                name="aBreakBetweenMatchesOther"
                                                rules={[{ required: true, message: 'Please input accommodation!' }]}
                                            >
                                                <Input className="row-flex" style={{ width: '95%', marginLeft: '20px' }} placeholder="ป้อนข้อมูลที่พัก" />
                                            </Form.Item>
                                            : null}
                                    </Radio.Group>
                                </Form.Item>



                                <Form.Item
                                    label="Expenses incurred during the course of the event, such as housing, meals, belongings, travel expenses (Excluding application fee)"
                                    name="costsDuringCompetition"
                                    rules={[{ required: true, message: 'Please select expenses incurred during the course of the event!' }]}
                                >
                                    <Select className="row-flex" placeholder="select expenses" listHeight={260}
                                        onChange={() => onValuesChange("costsDuringCompetition")}>
                                        {list.payList.map(item => (
                                            <Option key={item.id} value={item.id} className	>
                                                {item.choiceEn}
                                            </Option>
                                        ))}
                                    </Select>
                                </Form.Item>



                                <Form.Item
                                    label="Do you have a travel plan in Chiang Mai after the competition ?"
                                    name="chiangMaiTravelPlans"
                                    rules={[{ required: true, message: 'Please select travel plan!' }]}
                                >
                                    <Radio.Group className="row-flex" onChange={(e) => checkMore(e.target.value, "chiangMaiTravelPlans", [])}>
                                        <Radio value={true}>Have</Radio>
                                        <Radio value={false}>Don't Have</Radio>
                                    </Radio.Group>
                                </Form.Item>

                                {openTravel === true ?
                                    <Form.Item
                                        label="How much did you set the travel budget after the race?"
                                        name="chiangMaiTravelPlansTrue"
                                        rules={[{ required: true, message: 'Please select budget of travel!' }]}
                                    >
                                        <Select className="row-flex" style={{ width: '95%', marginLeft: '20px' }}
                                            placeholder="Select budget of travel" listHeight={250}>
                                            {list.budgetList.map(item => (
                                                <Option key={item.id} value={item.id}>
                                                    {item.choiceEn}
                                                </Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                    : null}

                                <p style={{ fontWeight: '600' }}>Enter your name and contact number to win prizes : </p >
                                <Form.Item
                                    label="Name"
                                    name="name"
                                    rules={[{ required: true, message: 'Please in put name!' }]}
                                >
                                    <Input onChange={() => onValuesChange("name")}
                                        className="row-flex" placeholder="Input name" />
                                </Form.Item>
                                <Form.Item
                                    label="Tel"
                                    name="tell"
                                    rules={[{ required: true, message: 'Please input tel!' },
                                    ({ getFieldValue }) => ({
                                        validator(rule, value) {
                                            const regexTH = NumberRegX('number');
                                            if (regexTH.test(value)) {
                                                return Promise.reject('input tel!');
                                            }
                                            return Promise.resolve()
                                        }
                                    })
                                    ]}
                                >
                                    <Input onChange={() => onValuesChange("tell")} className="row-flex" placeholder="Input tel" />
                                </Form.Item>

                                <Row justify="center" align="middle">
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                </Button>
                                </Row>

                            </Form>
                        </div>
                    </Col>
                    <Col className="stick">
                        <Card style={{ top: 0, width: 350 }} className="card-stick ml-50">
                            <Steps progressDot direction="vertical" >
                                <Step className="item" title={`${current.evaluatorType} evaluatorType`} status={current.evaluatorType} />
                                <Step title={`${current.competitionType} competitionType`} status={current.competitionType} />
                                <Step title={`${current.gender} gender`} status={current.gender} />
                                <Step title={`${current.age} age`} status={current.age} />
                                <Step title={`${current.career} career`} status={current.career} />
                                <Step title={`${current.liveInChiangMai} liveInChiangMai`} status={current.liveInChiangMai} />
                                <Step title={`${current.aBreakBetweenMatches} aBreakBetweenMatches`} status={current.aBreakBetweenMatches} />
                                <Step title={`${current.costsDuringCompetition} costsDuringCompetition`} status={current.costsDuringCompetition} />
                                <Step title={`${current.chiangMaiTravelPlans} chiangMaiTravelPlans`} status={current.chiangMaiTravelPlans} />
                                <Step title={`${current.name} name`} status={current.name} />
                                <Step title={`${current.tell} tell`} status={current.tell} />
                            </Steps>
                        </Card>
                    </Col>
                </Row>
                {/* </Col>
            </Row> */}

            </div>
        </Skeleton>
    )
}

export default Exhibitors
