import React from "react";
import Chart from "react-google-charts";
import PropTypes from "prop-types";

const Chartcomponent = React.memo(function Chartcomponent(props) {
  const { chartType, data } = props;
  return (
    <Chart
      chartType={chartType}
      loader={<div>Loading Chart</div>}
      data={data}
      height="90%"
      options={{
        chartArea: {
          marginTop: "20px",
          width: "83%",
          height: "73%",
        },
        animation: {
          startup: true,
          easing: "linear",
          duration: 800,
        },
        backgroundColor: "transparent",
        hAxis: {
          textStyle: {
            color: "#ffffff",
          },
        },
        vAxis: {
          textStyle: {
            color: "#ffffff",
          },
        },
        legend: {
          textStyle: {
            color: "#ffffff",
          },
          position: "bottom",
        },
        titleTextStyle: {
          color: "#ffffff",
        },
      }}
    />
  );
});

Chartcomponent.propTypes = {
  chartType: PropTypes.string,
  data: PropTypes.array,
};
export default Chartcomponent;
