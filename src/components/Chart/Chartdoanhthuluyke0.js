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
      options={{
        backgroundColor: "transparent",
        height: 200,
        zIndex: 0,
        chartArea: {
          top: 24,
        },
        colors: ["rgb(38, 77, 153)", "rgb(165, 43, 14)"],
        pieHole: 0.4,
        pieStartAngle: 270,
        pieSliceText: "value",
        slices: {
          2: {
            color: "transparent",
          },
        },
        theme: "maximized",
        legend: "none",
        segmentShowStroke: false,
        enableInteractivity: false,
      }}
    />
  );
});

Chartcomponent.propTypes = {
  chartType: PropTypes.string,
  data: PropTypes.array,
};
export default Chartcomponent;
