import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
ChartJS.register(ArcElement, Tooltip);
import PropTypes from "prop-types";

const Chartcomponent = React.memo(function Chartcomponent(props) {
  const { thuchien } = props;
  let th = thuchien.replace(/,/g, ".");
  let conlai = 100 - th;
  const datas = [th, conlai];
  var data = {
    datasets: [
      {
        labels: ["Thực hiện", "còn lại"],
        data: datas,
        backgroundColor: ["rgb(51, 102, 204)", "rgb(220, 57, 18)"],
        display: true,
        borderColor: "#D1D6DC",
      },
    ],
  };

  const options = {
    rotation: -90,
    circumference: 180,
  };
  return (
    <Doughnut
      data={data}
      options={{
        responsive: true,
        layout: {
          marginTop: "-30px",
        },
        ...options,
      }}
    />
  );
});

Chartcomponent.propTypes = {
  thuchien: PropTypes.string,
};
export default Chartcomponent;
