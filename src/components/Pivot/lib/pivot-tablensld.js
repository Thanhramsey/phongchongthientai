import range from "lodash/range";
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { partial } from "components/Pivot/lib/partial";
import { getValue } from "components/Pivot/lib/get-value";
import styles from "assets/jss/material-dashboard-react/components/tableGridStyle.js";
const useStyles = makeStyles(styles);

export default function PivotTable(props) {
  const classes = useStyles();
  const { columns, rows, nPaginateRows, dimensionst } = props;
  const [paginatePage, setpaginatePage] = React.useState(0);
  const groupbottom = () => {
    return (
      <tr>
        {columns.map((col) => {
          if (col.type !== "dimension" && col.value !== "mA_NVKT") {
            return (
              <th className={classes.nsldbottom} key={col.title}>
                {col.title}
              </th>
            );
          }
        })}
      </tr>
    );
  };
  const congthuc = () => {
    return (
      <tr>
        {columns.map((col, i) => {
          if (col.type == "dimension") {
            if (i === 2) {
              return (
                <th className={classes.nsldcongthuc2} key={col.title}></th>
              );
            } else {
              return (
                <th className={classes.nsldcongthuc1} key={col.title}></th>
              );
            }
          }
        })}
        <th className={classes.nsldcongthuc}></th>
        <th className={classes.nsldcongthuc}> (1) </th>
        <th className={classes.nsldcongthuc}> (2) </th>
        <th className={classes.nsldcongthuc}> (3) </th>
        <th className={classes.nsldcongthuc}> (4) </th>
        <th className={classes.nsldcongthuc}> (5) </th>
        <th className={classes.nsldcongthuc}> (6)</th>
        <th className={classes.nsldcongthuc}> (7) </th>
        <th className={classes.nsldcongthuc}> (8) </th>
        <th className={classes.nsldcongthuc}> (9) </th>
        <th className={classes.nsldcongthuc}> (10) </th>
        <th className={classes.nsldcongthuc}> (11) </th>
        <th className={classes.nsldcongthuc}> (12) </th>
        <th className={classes.nsldcongthuc}> (13) </th>
        <th className={classes.nsldcongthuc}> (14) </th>
        <th className={classes.nsldcongthuc}> (15) </th>
        <th className={classes.nsldcongthuc}> (16) </th>
        <th className={classes.nsldcongthuc}> (17) </th>
        <th className={classes.nsldcongthuc}> (18) </th>
        <th className={classes.nsldcongthuc}> (19) </th>
        <th className={classes.nsldcongthuc}> (20) </th>
        <th className={classes.nsldcongthuc}> (21) </th>
        <th className={classes.nsldcongthuc}> (22) </th>
        <th className={classes.nsldcongthuc}> (23) </th>
        <th className={classes.nsldcongthuc}> (24) </th>
        <th className={classes.nsldcongthuc}> (25) </th>
        <th className={classes.nsldcongthuc}> (26) </th>
        <th className={classes.nsldcongthuc}> (27) </th>
      </tr>
    );
  };
  const renderTableHead = () => {
    return (
      <thead>
        <tr>
          {columns.map((col, i) => {
            if (col.type === "dimension") {
              if (i === 2) {
                return (
                  <th
                    rowSpan="2"
                    className={classes.renderTable}
                    key={col.title}
                  >
                    {col.title}
                  </th>
                );
              } else {
                return (
                  <th
                    rowSpan="2"
                    className={classes.renderTable1}
                    key={col.title}
                  >
                    {col.title}
                  </th>
                );
              }
            }
          })}
        </tr>
        {groupbottom()}
        {congthuc()}
      </thead>
    );
  };
  const renderTableBody = (columns, rows) => {
    return (
      <tbody>
        {rows.map((row) => {
          return (
            <tr key={row._key} className={"reactPivot-level-" + row._level}>
              {columns.map((col, i) => {
                if (i < row._level)
                  return <td key={i} className="reactPivot-indent" />;
                if (col.value !== "mA_NVKT") return renderCell(col, row);
              })}
            </tr>
          );
        })}
        {sum(columns, rows)}
      </tbody>
    );
  };
  const renderCell = (col, row) => {
    var val;
    var text;
    var cell;
    if (col.type === "dimension") {
      val = row[col.title];
      text = val;
      var dimensionExists = typeof val !== "undefined";
      if (col.template && dimensionExists) text = col.template(val, row);
    } else {
      val = getValue(col, row);
      text = val;
      if (col.template) text = col.template(val, row);
    }
    if (text === "NaN" || text === Infinity) text = "";
    if (!isNaN(Number(text))) {
      text = Number(text).toLocaleString();
    }
    if (col.value === "dS_DIABAN") text = "";
    if (col.type !== "dimension") {
      if (row._level === 0 || row._level === 1) text = "";
    }
    cell = React.isValidElement(text) ? (
      <span>{text}</span>
    ) : (
      <span
        dangerouslySetInnerHTML={{
          __html: text || (text === 0 && "0") || "",
        }}
      ></span>
    );
    // dòng thứ nhất
    if (row._level === 0) {
      if (col.type === "dimension") {
        if (col.title === dimensionst[dimensionst.length - 1]) {
          return (
            <td
              className={"reactPivot-dimension1"}
              key={[col.title, row.key].join("\xff")}
              title={col.title}
            >
              {cell}
            </td>
          );
        } else {
          return (
            <td
              className={"reactPivot-dimension"}
              key={[col.title, row.key].join("\xff")}
              title={col.title}
            >
              {cell}
            </td>
          );
        }
      } else {
        return (
          <td
            className={"reactPivot-content"}
            key={[col.title, row.key].join("\xff")}
            title={col.title}
          >
            {cell}
          </td>
        );
      }
      // dòng thứ hai
    } else if (row._level === 1) {
      if (col.type === "dimension") {
        if (col.title === dimensionst[dimensionst.length - 1]) {
          return (
            <td
              className={"reactPivot-normal2"}
              key={[col.title, row.key].join("\xff")}
              title={col.title}
            >
              {cell}
            </td>
          );
        } else {
          return (
            <td
              className={"reactPivot-normal1"}
              key={[col.title, row.key].join("\xff")}
              title={col.title}
            >
              {cell}
            </td>
          );
        }
      } else {
        return (
          <td
            className={"reactPivot-normal"}
            key={[col.title, row.key].join("\xff")}
            title={col.title}
          >
            {cell}
          </td>
        );
      }
      // dòng thứ ba
    } else {
      if (col.type === "dimension") {
        return (
          <td
            className={"reactPivot-normal1"}
            key={[col.title, row.key].join("\xff")}
            title={col.title}
          >
            {cell}
          </td>
        );
      } else {
        return (
          <td
            className={"reactPivot-normal"}
            key={[col.title, row.key].join("\xff")}
            title={col.title}
          >
            {cell}
          </td>
        );
      }
    }
  };
  const sum = (columns, rows) => {
    if (rows.length > 0) {
      return (
        <tr>
          {columns.map((col) => {
            return <th className={"reactPivot-sum"} key={col.title}></th>;
          })}
        </tr>
      );
    }
  };
  const renderPagination = (pagination) => {
    var nPaginatePages = pagination.nPages;
    var paginatePagef = pagination.curPage;
    if (nPaginatePages === 1) return "";
    return (
      <div className="reactPivot-paginate">
        {range(0, nPaginatePages).map((n) => {
          var c = "reactPivot-pageNumber";
          if (n === paginatePagef) c += " is-selected";
          return (
            <span className={c} key={n}>
              <a onClick={partial(setPaginate, n)}>{n + 1}</a>
            </span>
          );
        })}
      </div>
    );
  };
  const paginate = (results) => {
    if (results.length <= 0)
      return {
        rows: results,
        nPages: 1,
        curPage: 0,
      };
    var paginatePaget = paginatePage;
    var nPaginateRowst = nPaginateRows;
    if (!nPaginateRowst || !isFinite(nPaginateRowst))
      nPaginateRowst = results.length;
    var nPaginatePages = Math.ceil(results.length / nPaginateRowst);
    if (paginatePaget >= nPaginatePages) paginatePaget = nPaginatePages - 1;
    var iBoundaryRow = paginatePaget * nPaginateRowst;
    var boundaryLevel = results[iBoundaryRow]._level;
    var parentRows = [];
    if (boundaryLevel > 0) {
      for (var i = iBoundaryRow - 1; i >= 0; i--) {
        if (results[i]._level < boundaryLevel) {
          parentRows.unshift(results[i]);
          boundaryLevel = results[i]._level;
        }
        if (results[i]._level === 9) break;
      }
    }

    var iEnd = iBoundaryRow + nPaginateRowst;
    var rows = parentRows.concat(results.slice(iBoundaryRow, iEnd));

    return { rows: rows, nPages: nPaginatePages, curPage: paginatePaget };
  };

  const setPaginate = (nPage) => {
    setpaginatePage(nPage);
  };

  var results = rows;
  var paginatedResults = paginate(results);
  var tBody = renderTableBody(columns, paginatedResults.rows);
  //var total = sum(columns, paginatedResults.rows);
  var tHead = renderTableHead(columns);
  return (
    <div className="reactPivot-results">
      <div className="reactPivot-full">
        <table id="table-to-xls" className="Pivot-table">
          {tHead}
          {tBody}
        </table>
        {renderPagination(paginatedResults)}
      </div>
    </div>
  );
}

PivotTable.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
  nPaginateRows: PropTypes.number,
  dimensionst: PropTypes.array,
};
