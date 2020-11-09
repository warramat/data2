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
            stepSize: 200,
            fontSize: 15,
            fontFamily: "'Sukhumvit Set',sans-serif",
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            fontSize: 15,
            fontFamily: "'Sukhumvit Set',sans-serif",
          },
        },
      ],
    },
  };

  return (
    <Col>
      <b className="text-toppic">ที่พักอาศัยระหว่างการแข่งขัน</b>
      <div>
        <Col>
          <div className="pad1">
            <div
              style={{
                fontSize: "16px",
                color: "#292766",
                paddingLeft: "25px",
                opacity: 0.5,
              }}
            >
              คน
            </div>
            <Bar data={data} options={option} width={300} height={200} />
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
              marginTop: "-85px",
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
