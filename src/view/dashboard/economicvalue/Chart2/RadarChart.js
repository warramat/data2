import React from "react";
import { Radar } from "@reactchartjs/react-chart.js";

const RadarChart = ({ economicLabels, economicData }) => {
  const data = {
    labels: economicLabels ,
    datasets: [
      {
        data: economicData,
        borderColor: "#13EECC",
        backgroundColor: "#13EECC70",
        borderWidth: 2,
        display: false,
        
      },
      
    ],
    
  };

  const options = {
    
    elements: {
      
      center: {
        fontStyle: "Sukhumvit Set",
        maxFontSize: 40,
      },
    },

    legend: {
      display: false,
      
  },
  

    scale: {
      pointLabels: {
        fontSize: 12.5 ,
        fontColor: '#464646'
      },
      ticks: {
        beginAtZero: true,
        fontSize: 0,
        fontFamily: "'Sukhumvit Set',sans-serif",
        
      },
      
    },
  };
  return (
    <div style={{ fontSize: 20 }}>
      <div>
        <b className="text-toppic">ค่าตัวทวีคูณทางเศรษฐกิจ</b>
      </div>
      <div className="text-title">ตามประเภทผู้ประเมิน</div>
      <div>
        {" "}
        <Radar data={data} options={options} width={300} height={280} />
      </div>
    </div>
  );
};

export default RadarChart;
