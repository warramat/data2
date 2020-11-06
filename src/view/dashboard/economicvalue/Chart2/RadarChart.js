import React from 'react'
import { Radar } from '@reactchartjs/react-chart.js'
import { Col, Row } from 'antd';

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
    // layout: {
    //   padding: {
    //     left: 10,
    //     right: 10,
    //     top: 10,
    //     bottom: 10,
    //   },
    // },
    
    legend: {
      display: false,
    },
   
    scale: {
      ticks: { beginAtZero: true },

    },

  }
  return (
    <Row style={{ fontFamily: "Sukhumvit Set" }}>
      <Col>
      <Row >
        <Col>
        <div><b className="text-toppic" >ค่าตัวทวีคูณทางเศรษฐกิจ</b></div>
        <div className="text-title">ตามประเภทผู้ประเมิน</div>
        </Col>
      </Row>
      </Col>
      <Col >
        <Radar data={data} options={options} width={385} height={385}/>
      </Col>
      
      
    </Row>
  )
}

export default RadarChart

