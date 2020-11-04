import React,{useEffect,useState} from "react";
import { Pie } from "react-chartjs-2";
import { Row,Col } from "antd";
import { GET_BARDATA,} from '../../../../service/api'

const Region = () => {
  const[labelRegion,setLabelRegion] = useState([])
  const[dataRegion,setDataRegion] = useState([])
 

  useEffect(()=>{
     GetDataResource()
  },[])

  const GetDataResource =async()=>{
     await GetPieData()
 };

  const GetPieData = async() =>{
       try {
            const res = await GET_BARDATA()
            if(res.code === 200){
              setLabelRegion(res.result[0].live.region.label)
              setDataRegion(res.result[0].live.region.data)
            }else{
                 alert("ERROR")
            }
            console.log("RES>>>",res)
       } catch (error) {
            console.log(error)
       }
  }

  const data = {
    labels: labelRegion,
    datasets: [
      {
        data: dataRegion,
        backgroundColor:[
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
        fontFamily: "Sukhumvit Set",
      },
    },
  };

  return (
    

    <Row >

        <div style={{letterSpacing: "0.68px",fontSize:'25px',color:'#171717',marginLeft:'20px',marginRight:"8px"}}>นักกีฬาไทย</div>
        <div className="cad" style={{width:"157px",height:"46px",left:'20px',borderRadius:"5px",backgroundColor:"#f6f8fe"}}>
            1,461 คน
        </div>

      <Row>
            <Col style={{ paddingLeft:"30px",paddingTop:"40px"}}>
              <div style={{ width: 13, height: 13, borderRadius: 10, backgroundColor: '#13EECC', border: '#13EECC',marginBottom:"-23px"}}></div>
                <span className="fo" >ภาคเหนือ</span>

              <div style={{ width: 13, height: 13, borderRadius: 10, backgroundColor: '#0a5bb4', border: '#0a5bb4',marginTop:"10px",marginBottom:"-23px" }}></div>
                  <span className="fo">ภาคอีสาน</span>
            
              <div style={{ width: 13, height: 13, borderRadius: 10, backgroundColor: '#f2e635', border: '#f2e635',marginTop:"10px",marginBottom:"-23px" }}></div>
                  <span className="fo">ภาคตะวันออก</span>
            </Col>
            <Col style={{ paddingLeft:"60px",paddingTop:"40px"}}>
              <div style={{ width: 13, height: 13, borderRadius: 10, backgroundColor: '#3b88fd', border: '#3b88fd',marginBottom:"-23px" }}></div>
                <span className="fo">ภาคกลาง</span>
              
              <div style={{ width: 13, height: 13, borderRadius: 10, backgroundColor: '#6204bf', border: '#6204bf',marginTop:"10px",marginBottom:"-23px" }}></div>
                  <span className="fo">ภาคใต้</span>
              
              <div style={{ width: 13, height: 13, borderRadius: 10, backgroundColor: '#f205cb', border: '#f205cb',marginTop:"10px",marginBottom:"-23px" }}></div>
                  <span className="fo">ภาคตะวันตก</span>
              
            </Col>
       
        <Col style={{top:"-130px",left:"325px"}}><Pie data={data} options={options} /></Col>
      </Row>
    </Row>
  );
};
export default Region;
