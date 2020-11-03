/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { GET_DATA } from '../../service/api'
import { Bar } from "react-chartjs-2";
import moment from 'moment'

const Test = () => {
  const [labelChartOne, setLabelChartOne] = useState([])
  const [dataInfo, setDataInfo] = useState([])

  useEffect(() => {
    GetData()
  }, [])

  const GetData = async () => {
    try {
      const res = await GET_DATA()
      console.log("RES>>>", res)

      if (res.code === 200) {
        setLabelChartOne(res.result[0].residence.label)
        setDataInfo(res.result[0].residence.data)
        // console.log("res>>>",res.result[0].residence.label)
      } else {
        alert("ERROR", res)
      }

    } catch (error) {
      console.log(error)
    }
  }

  const data = {
    labels: labelChartOne,
    datasets: [
      {
        barThickness: 25,
        data: dataInfo,
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
            max: 5,
            stepSize: 2000,
          },

        },
      ],
    },
  };

  return (
    <div className="BG-forms">
      <Row>NAVBAR</Row>
      <Row>SUB NAVBAR</Row>
      <Row>
        <Col lg={4}>
          <Card>
            {
              labelChartOne.map((item, index) => {
                return <div key={index}>{item}</div>
              })
            }</Card>
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
          <Card>
            <Bar data={data} options={option} />
          </Card>
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
  )
}

export default Test
