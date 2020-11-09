import React from 'react'
import { Radar } from '@reactchartjs/react-chart.js'


const RadarChart = ({ economicLabels, economicData }) => {
  const data = {
    labels: economicLabels,
    datasets: [
      {
        data: economicData,
        borderColor: '#13EECC',
        backgroundColor: '#13EECC70',
        borderWidth: 2,
        display: false,

      },
    ],
  }

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
      ticks: { beginAtZero: true },

    },

  }
  return (
    <div style={{ fontSize: 20 }}>
      <div><b className="text-toppic" >ค่าตัวทวีคูณทางเศรษฐกิจ</b></div>
      <div className="text-title">ตามประเภทผู้ประเมิน</div>
      <div> <Radar data={data} options={options} width={300} height={220} /></div>

    </div>
  )
}

export default RadarChart

