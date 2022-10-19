import without from "lodash/without";
import React from "react";
import PropTypes from "prop-types";

export default function ColumnControl(props) {
  const { hiddenColumns, onChange } = props;
  const showColumn = (evt) => {
    var col = evt.target.value;
    var hidden = without(hiddenColumns, col);
    onChange(hidden);
  };
  return (
    <div className="reactPivot-columnControl">
      {!hiddenColumns.length ? (
        ""
      ) : (
        <select value={""} onChange={showColumn}>
          <option value={""}>Hidden Columns</option>
          {hiddenColumns.map((column) => {
            return <option key={column}>{column}</option>;
          })}
        </select>
      )}
    </div>
  );
}

ColumnControl.propTypes = {
  hiddenColumns: PropTypes.array,
  onChange: PropTypes.func,
};
