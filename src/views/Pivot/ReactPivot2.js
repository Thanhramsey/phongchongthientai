import React from "react";
// @material-ui/core components
//import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import filter from "lodash/filter";
import map from "lodash/map";
import find from "lodash/find";
//import { createReactClass } from "create-react-class";
import DataFrame from "dataframe";
import Emitter from "wildemitter";

import { partial } from "components/Pivot/lib/partial";
import { download } from "components/Pivot/lib/download";
import { getValue } from "components/Pivot/lib/get-value";
import PivotTable from "components/Pivot/lib/pivot-table2.js";
import Dimensions from "components/Pivot/lib/dimensions2.js";
import ColumnControl from "components/Pivot/lib/column-control.js";
import "assets/css/Pivot.css";

export default function ReactPivot(props) {
  const {
    rows,
    dimensions,
    calculations,
    reduce,
    activeDimensions,
    hideRows,
    nPaginateRows,
  } = props;
  const tableClassName = "";
  const csvDownloadFileName = "table.csv";
  const csvTemplateFormat = false;
  const eventBus = new Emitter();
  const compact = false;
  const excludeSummaryFromExport = false;
  const soloText = "solo";
  const subDimensionText = "Sub Group...";
  const allDimensions = dimensions;
  const activeDimensionst = filter(activeDimensions, function (title) {
    return find(allDimensions, function (col) {
      return col.title === title;
    });
  });
  const [dimensionst, setDimensionst] = React.useState(activeDimensionst);
  const [sortBy, setSortBy] = React.useState(null);
  const [hiddenColumns, setHiddenColumnst] = React.useState([]);
  const [solo, setsolo] = React.useState({});
  const [rowst, setRowst] = React.useState([]);
  const hideRowst = hideRows;
  const [sortDir, setSortDir] = React.useState("asc");
  const dataFrame = DataFrame({
    rows: rows,
    dimensions: dimensions,
    reduce: reduce,
  });
  React.useEffect(() => {
    updateRows();
  }, []);
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
    var filtered = dimensionst.filter(function (el) {
      return el != null;
    });
    var calcOpts = {
      dimensions: filtered,
      sortBy: sortBy,
      sortDir: sortDir,
      compact: compact,
    };
    var filter = solo;
    if (filter) {
      calcOpts.filter = function (dVals) {
        var pass = true;
        Object.keys(filter).forEach(function (title) {
          if (dVals[title] !== filter[title]) pass = false;
        });
        return pass;
      };
    }
    var rowss = dataFrame.calculate(calcOpts).filter(function (row) {
      return hideRowstt ? !hideRowstt(row) : true;
    });
    setRowst(rowss);
  };
  const setDimensions = (updatedDimensions) => {
    eventBus.emit("activeDimensions", updatedDimensions);
    setDimensionst(updatedDimensions);
    setTimeout(updateRows, 0);
  };

  const setHiddenColumns = (hidden) => {
    eventBus.emit("hiddenColumns", hidden);
    setHiddenColumnst(hidden);
    setTimeout(updateRows, 0);
  };

  const setSort = (cTitle) => {
    var sortByt = sortBy;
    var sortDirt = sortDir;
    if (sortByt === cTitle) {
      sortDirt = sortDirt === "asc" ? "desc" : "asc";
    } else {
      sortByt = cTitle;
      sortDirt = "asc";
    }

    eventBus.emit("sortBy", sortByt);
    eventBus.emit("sortDir", sortDirt);
    setSortBy(sortByt);
    setSortDir(sortDirt);
    setTimeout(updateRows, 0);
  };

  const setSolo = (solos) => {
    var newSolo = solo;
    newSolo[solos.title] = solos.value;
    eventBus.emit("solo", newSolo);
    setsolo(newSolo);
    setTimeout(updateRows, 0);
  };

  const clearSolo = (title) => {
    var oldSolo = solo;
    var newSolo = {};
    Object.keys(oldSolo).forEach(function (k) {
      if (k !== title) newSolo[k] = oldSolo[k];
    });
    eventBus.emit("solo", newSolo);
    setsolo(newSolo);
    setTimeout(updateRows, 0);
  };

  const hideColumn = (cTitle) => {
    var hidden = hiddenColumns.concat([cTitle]);
    setHiddenColumns(hidden);
    setTimeout(updateRows, 0);
  };

  const downloadCSV = (rows) => {
    var columns = getColumns();

    var csv =
      map(columns, "title").map(JSON.stringify.bind(JSON)).join(",") + "\n";

    var maxLevel = dimensionst.length - 1;
    var excludeSummary = excludeSummaryFromExport;

    rows.map((row) => {
      if (excludeSummary && row._level < maxLevel) return;
      var vals = columns.map(function (col) {
        var val;
        if (col.type === "dimension") {
          val = row[col.title];
        } else {
          val = getValue(col, row);
        }

        if (col.template && csvTemplateFormat) {
          val = col.template(val);
        }

        return JSON.stringify(val);
      });
      csv += vals.join(",") + "\n";
    });
    download(csv, csvDownloadFileName, "text/csv");
  };
  var html = (
    <div className="reactPivot">
      <Dimensions
        dimensions={dimensions}
        subDimensionText={subDimensionText}
        selectedDimensions={dimensionst}
        onChange={setDimensions}
      />

      <ColumnControl
        hiddenColumns={hiddenColumns}
        onChange={setHiddenColumns}
      />

      <div className="reactPivot-csvExport">
        <button onClick={partial(downloadCSV, rowst)}>Export CSV</button>
      </div>

      {Object.keys(solo).map(function (title) {
        var value = solo[title];

        return (
          <div
            style={{ clear: "both" }}
            className="reactPivot-soloDisplay"
            key={"solo-" + title}
          >
            <span
              className="reactPivot-clearSolo"
              onClick={partial(clearSolo, title)}
            >
              &times;
            </span>
            {title}: {value}
          </div>
        );
      })}

      <PivotTable
        columns={getColumns()}
        rows={rowst}
        sortBy={sortBy}
        sortDir={sortDir}
        onSort={setSort}
        onColumnHide={hideColumn}
        nPaginateRows={nPaginateRows}
        tableClassName={tableClassName}
        onSolo={setSolo}
        soloText={soloText}
      />
    </div>
  );
  return html;
}

ReactPivot.propTypes = {
  rows: PropTypes.array,
  dimensions: PropTypes.array,
  activeDimensions: PropTypes.array,
  reduce: PropTypes.func,
  hideRows: PropTypes.func,
  calculations: PropTypes.array,
  nPaginateRows: PropTypes.number,
};
