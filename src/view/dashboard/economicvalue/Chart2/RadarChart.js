import React from 'react'
import { Radar } from '@reactchartjs/react-chart.js'
import {  Col, Row } from 'react-bootstrap';

const data = {
  labels: ['ผู้จัดการแข่งขัน ', 'นักกีฬาต่างชาติ', 'ผู้ติดตาม / ผู้ชม / ร้านอาหาร', 'อาสาสมัคร' , 'นักกีฬาไทย'],
  datasets: [
    {
      data: [4.9, 4.2, 4.0, 4.0, 4.1],
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
      borderRadius: 20  
     
   
 },
  scale: {
    ticks: { beginAtZero: true },
    
  },
  
}



const RadarChart = () => (
 
  <Row style={{ width: "480px", height: "300px" }}>
    
    <Col >
    <div >
    <b style={{font: "normal normal bold 20px/35px Sukhumvit Set" , color: "#292766", marginLeft: 5 }}>ค่าตัวทวีคูณทางเศรษฐกิจ</b></div>
    <b style={{font: "normal normal bold 15px/35px Sukhumvit Set" , color: "#292766", marginLeft: 5 }}>ตามประเภทผู้ประเมิน</b>
   
    <div style={{left: 20}}><Radar  data={data} options={options}  /></div>

    </Col>


    </Row>
    
 
)

export default RadarChart




// import React from 'react'
// import { Radar } from '@reactchartjs/react-chart.js'
// import {  Col, Row } from 'react-bootstrap';

// const data = {
//   labels: ['ผู้จัดการแข่งขัน ', 'นักกีฬาต่างชาติ', 'ผู้ติดตาม / ผู้ชม / ร้านอาหาร', 'อาสาสมัคร' , 'นักกีฬาไทย'],
//   datasets: [
//     {
//       data: [4.9, 4.2, 4.0, 4.0, 4.1],
//       borderColor: '#13EECC',
//       backgroundColor: '#13EECC70',
//       borderWidth: 2,
//       display: false,
      
//     },
//   ],
// }
// const options = {

//   legend: {
//     display: false,
//       borderRadius: 20  
     
   
//  },
//   scale: {
//     ticks: { beginAtZero: true },
    
//   },
  
// }



// const RadarChart = () => (
 
//   <Row style={{ width: "450px", height: "250px" }}>
    
//     <Col >
//     <div className='header'>
//     <b style={{font: "normal normal bold 20px/35px Sukhumvit Set" , color: "#292766", marginLeft: 5 }}>ค่าตัวทวีคูณทางเศรษฐกิจ</b></div>
//     <b style={{font: "normal normal bold 15px/35px Sukhumvit Set" , color: "#292766", marginLeft: 5 }}>ตามประเภทผู้ประเมิน</b>
   
//     <div><Radar  data={data} options={options}  /></div>

//     </Col>


//     </Row>
    
 
// )

// export default RadarChart

