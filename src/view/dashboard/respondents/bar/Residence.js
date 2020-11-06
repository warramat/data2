import React from "react";
import { Bar } from "react-chartjs-2";
import { Col } from "antd";
import { ChangeToK } from "../../../../tools/util";

const Residence = ({ residence }) => {
  const data = {
    labels: ["บ้านตนเอง", "โรงแรม", "รีสอร์ท", "อุทยาน", "อื่นๆ"],
    datasets: [
      {
        barThickness: 25,
        data: residence.data,
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
              return ChangeToK(value);
            },
            // min: 0,
            // max: 10000,
            // stepSize: 2000,
          },
        },
      ],
    },
  };

  return (
    <Col>
      <b className="text-toppic">ที่พักอาศัย</b>
      <div
        style={{
          fontSize: "16px",
          color: "#292766",
          paddingLeft: "10px",
          opacity: 0.5,
        }}
      >
        คน
      </div>
      <div>
        <Col>
          <div>
            <Bar data={data} options={option} />
          </div>
        </Col>
        <Col>
          <div
            style={{
              fontSize: "16px",
              color: "#292766",
              opacity: "50%",
              transform: "rotate(-90deg)",
              transformOrigin: "40% 90%",
              marginLeft: "100%",
              width: "50px",
              marginTop: "-80px",
            }}
          >
            สถานที่
          </div>
        </Col>
      </div>
    </Col>
  );
};

export default Residence;
