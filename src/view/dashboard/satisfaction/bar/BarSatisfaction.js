import React from "react";
import { Bar } from "react-chartjs-2";
import { Col} from "antd";



const BarSatisfaction = ({ dataSource }) => {
     const labelSatisfaction = ""
  const dataSatisfaction = ""
  if(dataSource.satisfaction) {
    labelSatisfaction = dataSource.satisfaction.label 
    dataSatisfaction = dataSource.satisfaction.data
  }
 
  const data = {
    labels: labelSatisfaction,
    datasets: [
      {
        barThickness: 25,
        data: dataSatisfaction,
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
        paddingLeft:"30px",
        opacity: 0.5,
     }}>ระดับ</h6>
      <div style={{ marginRight: "50px" }}>
        <Bar data={data} options={option} />
      </div>

      <div style={{
        fontSize: "16px",
        color: "#292766",
        opacity: "50%",
        transform: "rotate(-90deg)",
        transformOrigin: "2% 90%",
        marginLeft: "325px",
        width:"100px",
        marginTop:"-40px"
      }}>ความพึงพอใจ</div>
    </Col>
  );
};

export default BarSatisfaction;