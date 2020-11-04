import React from "react";
import { Bar } from "react-chartjs-2";
import { Row } from "antd";

const BarResidence = ({labelBarChart,dataBar}) => {
  const data = {
    labels: labelBarChart,
    datasets: [
      {
        barThickness: 25,
        data: dataBar,
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
    <Row
     //  className="font"
      style={{ fontFamily: "Sukhumvit Set",width: "785px", height: "431px", border: "1px solid black" }}>
     <div  style={{
            fontSize: "25px",
            color: "#171717",
            marginLeft: "20px",
            paddingBottom: "20px",
            paddingTop: "5px",
     }}>ที่พักอาศัย</div>
     <div
            style={{
              fontSize: "16px",
              color: "#292766",
              paddingTop: "50px",
              marginLeft: "-75px",
              opacity: 0.5,
          //     paddingBottom:"30px",
            }}
          >
            คน
          </div>
      <Row style={{ width: "725px", height: "235px",marginLeft:"30px",marginTop:"-10px" }}>
        <Bar  data={data} options={option}/>
      </Row>
      <span
            style={{
               height:"21px",
              fontSize: "16px",
              color: "#292766",
              paddingTop:"350px",
              marginLeft: "-35px",
              opacity:"50%",
              transform: "rotate(-90deg)",
              transformOrigin: "2% 90%",
            }}
          >
            สถานที่
          </span>
    </Row>
  );
};

export default BarResidence
