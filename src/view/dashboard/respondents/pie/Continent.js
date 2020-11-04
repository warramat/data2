import React,{useEffect,useState} from "react";
import { Pie } from "react-chartjs-2";
import { Row,Col } from "antd";
import { GET_BARDATA,} from '../../../../service/api'


const Continent = () => {
  const[labelContinent,setLabelContinent] = useState([])
  const[dataContinent,setDataContinent] = useState([])

  useEffect(()=>{
    GetData()
  },[])

  const GetData = async() =>{
       try {
            const res = await GET_BARDATA()
            if(res.code === 200){
              setLabelContinent(res.result[0].live.continent.label)
              setDataContinent(res.result[0].live.region.data)
            }else{
                 alert("ERROR")
            }
            console.log("RES>>>",res)
       } catch (error) {
            console.log(error)
       }
  }

  const data = {
    labels: labelContinent,
    datasets: [
      {
        data: dataContinent,
        backgroundColor: [
          "#13EECC",
          "#3B88FD",
          "#0A5BB4",
          "#6204BF",
          "#F2E635",
          "#F205CB",
        ],
        borderWidth: 1,
        hoverBorderWidth: 5,
        hoverBorderColor: [
          "#13EECC",
          "#3B88FD",
          "#0A5BB4",
          "#6204BF",
          "#F2E635",
          "#F205CB",
        ],
        hoverBackgroundColor: [
          "#13EECC",
          "#3B88FD",
          "#0A5BB4",
          "#6204BF",
          "#F2E635",
          "#F205CB",
        ],
      },
    ],
  };
  const options = {
    legend: {
      display: false,
      position: "bottom",
      labels: {
        boxWidth: 15,
        fontSize: 15,
        fontColor: "#000000",
      },
    },
   
  };

  return (
    

    <Row  >
      <Row style={{ paddingLeft:"10px",paddingTop:"20px"}}>
        <div style={{fontSize:'25px',color:'#171717',marginLeft:'20px',marginRight:"8px"}}>นักกีฬาต่างชาติ</div>
        <div className="cad" style={{width:"157px",height:"46px",marginLeft:'20px',borderRadius:"5px",backgroundColor:"#f6f8fe"}}>
               461 คน
        </div>
      </Row>
      <Row>
            <Col style={{ paddingLeft:"30px",paddingTop:"40px"}}>
              <div style={{ letterSpacing: "0.68px",width: 13, height: 13, borderRadius: 10, backgroundColor: '#13EECC', border: '#13EECC',marginBottom:"-23px"}}></div>
                <span className="fo">ทวีปเอเชีย</span>
              
              <div style={{ width: 13, height: 13, borderRadius: 10, backgroundColor: '#0a5bb4', border: '#0a5bb4',marginTop:"10px",marginBottom:"-23px" }}></div>
                  <span className="fo">ทวีปอเมริกาเหนือ</span>
            
              <div style={{ width: 13, height: 13, borderRadius: 10, backgroundColor: '#f2e635', border: '#f2e635',marginTop:"10px",marginBottom:"-23px" }}></div>
                  <span className="fo">ทวีปแอฟริกา</span>
            </Col>
            <Col style={{ paddingLeft:"30px",paddingTop:"40px"}}>
              <div style={{ width: 13, height: 13, borderRadius: 10, backgroundColor: '#3b88fd', border: '#3b88fd',marginBottom:"-23px" }}></div>
                <span className="fo">ทวีปยุโรป</span>
              
              <div style={{ width: 13, height: 13, borderRadius: 10, backgroundColor: '#6204bf', border: '#6204bf',marginTop:"10px",marginBottom:"-23px" }}></div>
                  <span className="fo">ทวีปออสเตรเลีย</span>
              
              <div style={{ width: 13, height: 13, borderRadius: 10, backgroundColor: '#f205cb', border: '#f205cb',marginTop:"10px",marginBottom:"-23px" }}></div>
                  <span className="fo">ทวีปอเมริกาใต้</span>
              
            </Col>

        <Col style={{top:"-140px",left:"325px"}}><Pie data={data} options={options} /></Col>
      </Row>
    </Row>
  );
};
export default Continent;
