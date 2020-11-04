/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Col, Row, Card } from 'antd'
import { GET_BARDATA,GET_RADAR } from '../../../service/api'
import BarResidence from './bar/Bar'
import Donut from './Chart1/Donut'
import Total from './question/Total'




const Respondents = () => {

    const [labelBarChart, setlabelBarChart] = useState([]);
    const [dataBar, setDataBar] = useState([]);

    const [labelChartOne,setLabelChartOne] = useState([])
    const [dataRadar, setDataRadar] = useState([[]])

    useEffect(() => {
        GetDataResource();
    }, []);

    const GetDataResource =async()=>{
        await GetBarData()
        await GetRadar()
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
  
      
    
  
   
    
        const GetRadar = async () => {
           try{
            const res = await GET_RADAR() 
            if(res.code === 200){
                setLabelChartOne(res.result[0].residence.label)
                setDataRadar(res.result[0].residence.data)
                console.log("ERROR",res.result[0].residence.data)
            }else{
                alert("ERROR")
            }
            console.log("RES>>>",res)
           }catch(error){
               console.log(error)
           }
    
        }

    return (
        <div >
            <Row justify={"center"} gutter={[15, 15]}>
                <Col lg={4}>
                    <Card>
                        <Total toppic="ทั้งหมดแบบสอบถาม" num="12461" image={'Artboard1.png'}></Total>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card>
                        <Total toppic="นักกีฬาไทย" num="12461" image={'Artboard4.png'}></Total>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card>
                        <Total toppic="นักกีฬาต่างชาติ" num="12461" image={'Artboard3.png'}></Total>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card>
                        <Total toppic="ผู้จัดการแข่งขัน" num="12461" image={'Artboard5.png'}></Total>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card>
                        <Total toppic="อาสาสมัคร" num="12461" image={'Artboard6.png'}></Total>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card>
                        <Total toppic="ผู้ติดตาม/ผู้ชม/ร้านอาหาร" num="12461" image={'Artboard7.png'}></Total>
                    </Card>
                </Col>
            </Row>
            <Row justify={"center"} gutter={[15, 15]}>
                <Col lg={8}>
                    <Card>
                        1
                    </Card>
                </Col>
                <Col lg={8}>
                    <Card><BarResidence labelBarChart={labelBarChart} dataBar={dataBar} /></Card>
                </Col>
                <Col lg={8}>
                    <Card>3</Card>
                </Col>
            </Row>
            <Row justify={"center"} gutter={[15, 15]}>
                <Col lg={8}>
                    <Card><Donut labelChartOne ={labelChartOne} dataRadar={dataRadar} /></Card>
                </Col>
                <Col lg={8}>
                    <Card>2</Card>
                </Col>
                <Col lg={8}>
                    <Card>3</Card>
                </Col>
            </Row>
        </div >
    )
}


export default Respondents
