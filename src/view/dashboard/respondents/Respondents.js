/* eslint-disable react-hooks/exhaustive-deps */
import React ,{useEffect, useState} from 'react'
import { Col, Row, Card } from 'antd'
import Donut from './Chart1/Donut'
import {GET_RADAR} from '../../../service/api'



const Respondents = () => {
  
        const [labelChartOne,setLabelChartOne] = useState([])
        const [dataRadar, setDataRadar] = useState([[]])
    
        useEffect(()=>{
            GetDataResource()
        },[])
        const GetDataResource  = async()=>{
                await GetRadar ()
        }
    
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
                    <Card>1</Card>
                </Col>
                <Col lg={4}>
                    <Card>2</Card>
                </Col>
                <Col lg={4}>
                    <Card>3</Card>
                </Col>
                <Col lg={4}>
                    <Card>4</Card>
                </Col>
                <Col lg={4}>
                    <Card>5</Card>
                </Col>
                <Col lg={4}>
                    <Card>6</Card>
                </Col>
            </Row>
            <Row justify={"center"} gutter={[15, 15]}>
                <Col lg={8}>
                    <Card>
                        1
                    </Card>
                </Col>
                <Col lg={8}>
                    <Card>2</Card>
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
