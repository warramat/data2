import React from 'react'
import { Radar } from '@reactchartjs/react-chart.js'
import {  Col, Row } from 'react-bootstrap';

const data = {
  labels: ['', '', '', ''],
  datasets: [
    {
      data: [10, 6, 3, 6],
      borderColor: '#13EECC',
      borderWidth: 2,
      display: false,
      
    },
  ],
}
const options = {

  legend: {
    display: false,
      borderRadius: 20  
     
   
 },
  scale: {
    ticks: { beginAtZero: true },
    
  },
  
}



const RadarChart = () => (
 
  <Row style={{ width: "1000px", height: "180px" }}>
    
    <Col xs={6} style={{width:200 }}>
    <div className='header'>
    <h1 style={{font: "normal normal bold 15px/35px Sukhumvit Set" , color: "#171717", marginLeft: 20 }}>ความพึงพอใจ</h1></div>

    <div><Radar  data={data} options={options}  /></div>
    </Col>


    </Row>
    
 
)

export default RadarChart

