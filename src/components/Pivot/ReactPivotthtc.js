import React from "react";
// @material-ui/core components
//import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import filter from "lodash/filter";
import find from "lodash/find";
//import { createReactClass } from "create-react-class";
import DataFrame from "dataframe";
import PivotTable from "components/Pivot/lib/pivot-tablethtc.js";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import "assets/css/Pivot.css";

export default function ReactPivotthtc(props) {
  const {
    rows,
    dimensions,
    calculations,
    reduce,
    activeDimensions,
    hideRows,
    nPaginateRows,
  } = props;
  React.useEffect(() => {
    updateRows();
  }, [rows]);
  const compact = false;
  const allDimensions = dimensions;
  const activeDimensionst = filter(activeDimensions, function (title) {
    return find(allDimensions, function (col) {
      return col.title === title;
    });
  });
  const dimensionst = activeDimensionst;
  const hiddenColumns = React.useState([]);
  const [rowst, setRowst] = React.useState([]);
  const hideRowst = hideRows;
  const dataFrame = DataFrame({
    rows: rows,
    dimensions: dimensions,
    reduce: reduce,
  });
  const getColumns = () => {
    var columns = [];
    dimensionst.map((title) => {
      var d = find(dimensions, function (col) {
        return col.title === title;
      });
      if (typeof d !== "undefined") {
        columns.push({
          type: "dimension",
          title: d.title,
          value: d.value,
          className: d.className,
          template: d.template,
          sortBy: d.sortBy,
        });
      }
    });

    calculations.forEach(function (c) {
      if (hiddenColumns.indexOf(c.title) >= 0) return;
      columns.push({
        type: "calculation",
        title: c.title,
        template: c.template,
        value: c.value,
        className: c.className,
        sortBy: c.sortBy,
      });
    });
    return columns;
  };

  const updateRows = () => {
    var columns = getColumns();
    var sortByTitle = sortBy;
    var sortCol =
      find(columns, function (col) {
        return col.title === sortByTitle;
      }) || {};
    var sortBy =
      sortCol.sortBy ||
      (sortCol.type === "dimension" ? sortCol.title : sortCol.value);
    var sortDir = sortDir;
    var hideRowstt = hideRowst;
    var diment = [];
    dimensionst.map((title) => {
      if (title !== "") diment.push(title);
    });
    var filtered = diment.filter(function (el) {
      return el != null;
    });
    var calcOpts = {
      dimensions: filtered,
      sortBy: sortBy,
      sortDir: sortDir,
      compact: compact,
    };
    calcOpts.filter = function (dVals) {
      var pass = true;
      Object.keys(filter).forEach(function (title) {
        if (dVals[title] !== filter[title]) pass = false;
      });
      return pass;
    };
    var rowss = dataFrame.calculate(calcOpts).filter(function (row) {
      return hideRowstt ? !hideRowstt(row) : true;
    });
    setRowst(rowss);
  };

  var html = (
    <div className="reactPivot" style={{ height: "650px" }}>
      <div className="reactPivot-csvExport">
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="download-table-xls-button"
          table="table-to-xls"
          filename="TinhHinhThuCuoc"
          sheet="TinhHinhThuCuoc"
          buttonText="Download file Excel"
        />
      </div>

      <PivotTable
        columns={getColumns()}
        rows={rowst}
        nPaginateRows={nPaginateRows}
        dimensionst={dimensionst}
      />
    </div>
  );
  return html;
}

ReactPivotthtc.propTypes = {
  rows: PropTypes.array,
  dimensions: PropTypes.array,
  activeDimensions: PropTypes.array,
  reduce: PropTypes.func,
  hideRows: PropTypes.func,
  calculations: PropTypes.array,
  nPaginateRows: PropTypes.number,
};
