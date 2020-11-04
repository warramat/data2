import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Col, Row } from "antd";
import { GET_BARDATA,} from '../../../../service/api'


const BarResidence = () => {
     const [labelBarChart, setlabelBarChart] = useState([]);
     const [dataBar, setDataBar] = useState([]);

     useEffect(() => {
          GetDataResource();
     }, []);
  
      const GetDataResource =async()=>{
          await GetBarData()
      };
  
      const GetBarData = async () => {
          try {
              const res = await GET_BARDATA();
                  if (res.code === 200) {
                      setlabelBarChart(res.result[0].residence.label);
                      setDataBar(res.result[0].residence.data);
                  } else {
                      alert("ERROR");
                  }
                  console.log("RES>>>", res);
                  } catch (error) {
              console.log(error);
          }
      };

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
     <Col >
     <h1  style={{fontSize: "25px",color: "#171717",}}>ที่พักอาศัย</h1>
     <h6 style={{
          fontSize: "16px",
          color: "#292766",
          opacity: 0.5,
         
     }}>คน</h6>
     <div style={{marginRight:"50px"}}>
          <Bar  data={data} options={option}/>
     </div>
     
     <div style={{
          fontSize: "16px",
          color: "#292766",
          opacity:"50%",
          transform: "rotate(-90deg)",
          transformOrigin: "2% 90%",
          marginLeft:"350px",
     }}>สถานที่</div>
    </Col>
  );
};

export default BarResidence
