import React from "react";
import { Bar } from "react-chartjs-2";
import { Col} from "antd";



const Residence = ({ dataSource }) => {
  const labelResidence = ""
  const dataResidence = ""
  if(dataSource.residence) {
    labelResidence = dataSource.residence.label 
    dataResidence = dataSource.residence.data
  }
  
  const data = {
    labels: labelResidence,
    datasets: [
      {
        barThickness: 25,
        data: dataResidence,
        backgroundColor: "#13eecc",
      },
    ],
  };
  const option = {
    legend: {
      display: false,
    },
    scales: {
      xAxes:[{
          label:{

          },
      }],
      yAxes: [
        {
          ticks: {
            callback: function (value, index, values) {
              return value + "K";
            },
            min: 0,
            max: 10,
            stepSize: 2,
          },
        },
      ],
    },
  };

  return (
    <Col >
      <h1 style={{ fontSize: "25px", color: "#171717", }}>ที่พักอาศัย</h1>
      <h6 style={{
        fontSize: "16px",
        color: "#292766",
        paddingLeft:"30px",
        opacity: 0.5,
     }}>คน</h6>
      <div style={{ marginRight: "50px" }}>
        <Col style={{ marginRight: "50px" }}><Bar data={data} options={option} /></Col>
        <Col>
          <div style={{
            fontSize: "16px",
            color: "#292766",
            opacity: "50%",
            transform: "rotate(-90deg)",
            transformOrigin: "2% 90%",
            marginLeft: "325px",
            width:"50px",
            marginTop:"-40px"
          }}>สถานที่</div>
        </Col>
        
      </div>
    </Col>
  );
};

export default Residence;