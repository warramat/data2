import React from "react";
import { Bar } from "react-chartjs-2";
import { Col} from "antd";



const BarSatisfaction = ({ satisfaction }) => {
     
 
  const data = {
    labels: "",
    datasets: [
      {
        barThickness: 25,
        data: "",
        backgroundColor: "#13eecc",
      },
    ],
  };
  const option = {
    labels:{
          textAlign: 'center',

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
        opacity: 0.5,
     }}>ระดับ</h6>
      <div style={{ marginRight: "40px" }}>
          <Col style={{ marginRight: "40px",paddingTop:"30px",paddingBottom:"30px",paddingRight:"30px"}}>
               <Bar data={data} options={option} />
          </Col>
          <Col>
               <div style={{
                    fontSize: "16px",
                    color: "#292766",
                    opacity: "50%",
                    transform: "rotate(-90deg)",
                    transformOrigin: "2% 90%",
                    marginLeft: "100%",
                    width:"100px",
                    marginTop:"-55px"
               }}>ความพึงพอใจ</div>
          </Col>
      </div>
    </Col>
  );
};

export default BarSatisfaction;