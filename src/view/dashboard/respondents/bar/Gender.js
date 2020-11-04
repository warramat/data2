import React, { useState, useEffect } from "react";
import { HorizontalBar } from "react-chartjs-2";

import { GET_RESPONDENT } from "../../../../service/api";

const Gender = () => {
  const [dataInfo, setDataInfo] = useState([]);
  const [labelInfo, setLabelInfo] = useState([]);
  useEffect(() => {
    GetData();
  }, []);
  const GetData = async () => {
    try {
      const res = await GET_RESPONDENT();
      console.log("RES>>>", res);
      if (res.code === 200) {
        setLabelInfo(res.result[0].residence.label);
        setDataInfo(res.result[0].residence.data);
      } else {
        alert("ERROR", res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const data = {
    labels: labelInfo,
    datasets: [
      {
        barPercentage: 0.5,
        barThickness: 20,
        label: "ชาย",
        data: dataInfo,
        backgroundColor: "#3B88FD",
      },
      {
        barPercentage: 0.5,
        barThickness: 20,
        label: "หญิง",
        data: [-5, -10, -15, -13, -10],
        backgroundColor: "#13EECC",
      },
    ],
  };

  const options = {
    legend: {
      position: "top",
      align: "end",
      fullWidth: true,
      // display: false,
    },
    scales: {
      yAxes: [
        {
          stacked: true,
        },
      ],
      xAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
            min: -15,
            max: 15,

            callback: function (value, index, values) {
              return value + "K";
            },
          },
        },
      ],
    },
  };
  return (
    <>
      <HorizontalBar data={data} options={options} />
    </>
  );
};

export default Gender;
