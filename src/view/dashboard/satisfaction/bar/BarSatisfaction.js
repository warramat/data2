import React from "react";
import { Bar } from "react-chartjs-2";
import { Col} from "antd";
import {float1Point} from '../../../../tools/util'


const BarSatisfaction = ({ satisfaction }) => {
  let change2Point = []  

 if(satisfaction.data){
  change2Point = satisfaction.data.map((item)=>{
    return float1Point(item)
  })
 } 
 
  const data = {
    labels: satisfaction.label,
    datasets: [
      {
        barThickness: 75,
        data: change2Point,
        backgroundColor: "#13eecc",
      },
    ],
  };
  const option = {
    layout: {
      padding: {
          top: 150,
          right: 30,
      }
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 5,
            stepSize: 1,
          },
        },
      ],
    },
  };

  return (
    <Col >
      <h1 style={{ fontSize: "25px", color: "#171717", }}>แบบสอบถาม</h1>
      <h6 style={{
        fontSize: "16px",
        color: "#292766",
        paddingLeft:"20px",
        marginBottom:"-150px",
        opacity: 0.5,
     }}>ระดับ</h6>
      <div >
          <Bar data={data} options={option} />
          <Col>
               <div style={{
                    fontSize: "16px",
                    color: "#292766",
                    opacity: "50%",
                    transform: "rotate(-90deg)",
                    transformOrigin: "2% 90%",
                    marginLeft: "100%",
                    width: "300px",
                    marginTop:"-70px"
               }}>ความพึงพอใจ</div>
          </Col>
      </div>
    </Col>
  );
};

export default BarSatisfaction;