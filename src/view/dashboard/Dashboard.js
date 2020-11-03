/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import {Row, Col, Skeleton,Card } from 'antd';
import {
    GET_DATA_SPORTMAN,
} from '../../service/api'
// import Swal from "sweetalert2";
// import { _isEmpty} from '../../tools/util'
// import { Bar } from "react-chartjs-2";

const Dashboard = (props) => {
    const [loading,setLoading] = useState(false)
    const [label,setLabel] = useState([])
    const [dataInfo,setDataInfo] = useState([])

    useEffect(() => {
        GetData()
    }, [])

        const data = {
          labels: [
            "บ้านตนเอง(ไม่มีค่าใช้จ่าย)",
            "โรงแรม",
            "รีสอร์ท",
            "อุทยาน",
            "อื่นๆ",
          ],
          datasets: [
            {
              barThickness: 25,
              data: [8000, 5000, 7000, 5000, 8000],
              backgroundColor: "#13eecc",
            },
          ],
        };

        const option = {
          legend: {
            display: false,
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  min: 0,
                  max: 10000,
                  stepSize: 2000,
                },
                
              },
            ],
          },
        };

    const GetData = async () => {
        try {

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <Skeleton loading={loading} active>
            <div className="BG-forms">
            {/* <Bar data={data} options={option} /> */}
            <Row>NAVBAR</Row>
            <Row>SUB NAVBAR</Row>
            <Row>
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
            <Row>
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
            <Row>
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
            </div>
        </Skeleton>
    )
}

export default Dashboard
