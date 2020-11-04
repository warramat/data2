import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Row,Col } from "antd";
import { GET_BARDATA,} from '../../../../service/api'

const Residence = () => {
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
    <Col>
    <Row>
         <div  style={{
            fontSize: "25px",
            color: "#171717",
     }}>ที่พักอาศัย</div>
     <div
            style={{
              fontSize: "16px",
              color: "#292766",
              paddingTop: "30px",
              marginLeft: "-80px",
              opacity: 0.5,
            }}
          >
            คน
          </div>
        </Row>
      <Row style={{ marginLeft:"30px",marginTop:"-10px" }}>
        <Bar  data={data} options={option}/>
      </Row>
       <Row>
      <span
            style={{
               height:"21px",
              fontSize: "16px",
              color: "#292766",
              marginLeft: "335px",
              opacity:"50%",
              transform: "rotate(-90deg)",
              transformOrigin: "2% 90%",
            }}
          >
            สถานที่
          </span>
    </Row>
    </Col>
  );
};

export default Residence;