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
      height="100%"
      options={{
        legend: "bottom",
        animation: {
          startup: true,
          easing: "linear",
          duration: 800,
        },
        backgroundColor: "transparent",
      }}
    />
  );
});

Chartcomponent.propTypes = {
  chartType: PropTypes.string,
  data: PropTypes.array,
};
export default Chartcomponent;
