import React from "react";
import PropTypes from "prop-types";
import { PivotData } from "./Utilities";

// helper function for setting row/col-span in pivotTableRenderer
const spanSize = (arr, i, j) => {
  let x;
  if (i !== 0) {
    let asc, end;
    let noDraw = true;
    for (x = 0, end = j, asc = end >= 0; asc ? x <= end : x >= end; asc ? x++ : x--) {
      if (arr[i - 1][x] !== arr[i][x]) {
        noDraw = false;
      }
    }
    if (noDraw) {
      return -1;
    }
  }
  let len = 0;
  while (i + len < arr.length) {
    let asc1, end1;
    let stop = false;
    for (x = 0, end1 = j, asc1 = end1 >= 0; asc1 ? x <= end1 : x >= end1; asc1 ? x++ : x--) {
      if (arr[i][x] !== arr[i + len][x]) {
        stop = true;
      }
    }
    if (stop) {
      break;
    }
    len++;
  }
  return len;
};

const redColorScaleGenerator = (values) => {
  const min = Math.min.apply(Math, values);
  const max = Math.max.apply(Math, values);
  return x => {
    // eslint-disable-next-line no-magic-numbers
    const nonRed = 255 - Math.round(255 * (x - min) / (max - min));
    return { backgroundColor: `rgb(255,${nonRed},${nonRed})` };
  };
}

const makeRenderer = (opts = {}) => {
}

class TSVExportRenderer extends React.PureComponent {
default function
    const pivotData = new PivotData(this.props);
    const rowKeys = pivotData.getRowKeys();
    const colKeys = pivotData.getColKeys();
    if (rowKeys.length === 0) {
      rowKeys.push([]);
    }
    if (colKeys.length === 0) {
      colKeys.push([]);
    }

    const headerRow = pivotData.props.rows.map(r => r);
    if (colKeys.length === 1 && colKeys[0].length === 0) {
      headerRow.push(this.props.aggregatorName);
    } else {
      colKeys.map(c => headerRow.push(c.join("-")));
    }

    const result = rowKeys.map(r => {
      const row = r.map(x => x);
      colKeys.map(c => {
        const v = pivotData.getAggregator(r, c).value();
        row.push(v ? v : "");
      });
      return row;
    });

    result.unshift(headerRow);

    return React.createElement("textarea", {
      value: result.map(r => r.join("\t")).join("\n"),
      style: { width: window.innerWidth / 2, height: window.innerHeight / 2 },
      readOnly: true
    });
}

TSVExportRenderer.defaultProps = PivotData.defaultProps;
TSVExportRenderer.propTypes = PivotData.propTypes;

export default {
  Table: makeRenderer(),
  "Table Heatmap": makeRenderer({ heatmapMode: "full" }),
  "Table Col Heatmap": makeRenderer({ heatmapMode: "col" }),
  "Table Row Heatmap": makeRenderer({ heatmapMode: "row" }),
  "Exportable TSV": TSVExportRenderer,
};
