import React from 'react'
import { Radar } from '@reactchartjs/react-chart.js'
import { Col, Row } from 'react-bootstrap';

const RadarChart = ({economicLabels ,  economicData}) => {
  const data = {
    labels: economicLabels,
    datasets: [
      {
        data: economicData,
        borderColor: '#13EECC',
        backgroundColor: '#13EECC70',
        borderWidth: 2,
        display: false,

      },
    ],
  }
  const options = {

    legend: {
      display: false,
      borderRadius: 20 ,
      fontFamily: "Sukhumvit Set",
    },
    scale: {
      ticks: { beginAtZero: true },

    },

  }
  return (
    <Row style={{ width: "480px", height: "300px" }}>
      <Col >
        <div >
          <b className="text-toppic">ค่าตัวทวีคูณทางเศรษฐกิจ</b></div>
        <b className="text-title">ตามประเภทผู้ประเมิน</b>

        <div style={{ left: 20 }}><Radar data={data} options={options} /></div>

      </Col>
    </Row>
  )
}

export default RadarChart

