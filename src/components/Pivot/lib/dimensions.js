import compact from "lodash/compact";
import React from "react";
import PropTypes from "prop-types";
import { partial } from "components/Pivot/lib/partial";

export default function DimenSion(props) {
  const { dimensions, selectedDimensions, onChange, subDimensionText } = props;
  const renderDimension = (selectedDimension, i) => {
    return (
      <select
        value={selectedDimension}
        onChange={partial(toggleDimension, i)}
        key={selectedDimension}
      >
        <option></option>
        {dimensions.map((prop) => {
          return (
            <option value={prop.title} key={prop.title}>
              {prop.title}
            </option>
          );
        })}
      </select>
    );
  };
  const toggleDimension = (iDimension, evt) => {
    var dimension = evt.target.value;
    var dimensions = selectedDimensions;
    var curIdx = dimensions.indexOf(dimension);
    if (curIdx >= 0) dimensions[curIdx] = null;
    dimensions[iDimension] = dimension;
    var updatedDimensions = compact(dimensions);
    onChange(updatedDimensions);
  };
  var subDimension = subDimensionText;
  var selectedDimension = selectedDimensions;
  var nSelected = selectedDimensions.length;
  return (
    <div className="reactPivot-dimensions">
      {selectedDimension.map(renderDimension)}
      <select value={""} onChange={partial(toggleDimension, nSelected)}>
        <option value={""}>{subDimension}</option>
        {dimensions.map((prop) => {
          return <option key={prop.title}>{prop.title}</option>;
        })}
      </select>
    </div>
  );
}

DimenSion.propTypes = {
  dimensions: PropTypes.array,
  selectedDimensions: PropTypes.array,
  onChange: PropTypes.func,
  subDimensionText: PropTypes.string,
};
