import range from "lodash/range";
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { partial } from "components/Pivot/lib/partial";
import { getValue } from "components/Pivot/lib/get-value";
import styles from "assets/jss/material-dashboard-react/components/tableGridStyle.js";
const useStyles = makeStyles(styles);
import "assets/css/Pivot.css";

export default function PivotTable(props) {
  const classes = useStyles();
  const sumArray = [];
  const { columns, rows, nPaginateRows, dimensionst } = props;
  const [paginatePage, setpaginatePage] = React.useState(0);
  const grouptop1 = () => {
    return (
      <th colSpan="4" className={classes.top}>
        Phát triển mới
      </th>
    );
  };
  const grouptop2 = () => {
    return (
      <th colSpan="4" className={classes.top}>
        Hủy
      </th>
    );
  };
  const grouptop3 = () => {
    return (
      <th colSpan="4" className={classes.top}>
        Tạm ngưng/chêm nợ cước
      </th>
    );
  };
  const grouptop4 = () => {
    return (
      <th colSpan="5" className={classes.top}>
        Phát sinh cước
      </th>
    );
  };
  const groupbottom = () => {
    return (
      <tr>
        {columns.map((col) => {
          if (col.type !== "dimension") {
            return (
              <th className={classes.sldbbottom} key={col.title}>
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
        {columns.map((col) => {
          if (col.type == "dimension") {
            if (col.title === dimensionst[dimensionst.length - 1]) {
              return (
                <th className={classes.sldbcongthuc2} key={col.title}></th>
              );
            } else {
              return (
                <th className={classes.sldbcongthuc1} key={col.title}></th>
              );
            }
          }
        })}
        <th className={classes.sldbcongthuc}> (4) </th>
        <th className={classes.sldbcongthuc}> (5) </th>
        <th className={classes.sldbcongthuc}> (6)=(4)-(5) </th>
        <th className={classes.sldbcongthuc}> (7)=(4)/(5) </th>
        <th className={classes.sldbcongthuc}> (8) </th>
        <th className={classes.sldbcongthuc}> (9) </th>
        <th className={classes.sldbcongthuc}> (10)=(8)-(9) </th>
        <th className={classes.sldbcongthuc}> (11)=(8)/(9) </th>
        <th className={classes.sldbcongthuc}> (12) </th>
        <th className={classes.sldbcongthuc}> (13) </th>
        <th className={classes.sldbcongthuc}> (14)= (12)-(13) </th>
        <th className={classes.sldbcongthuc}> (15)=(12)/(13) </th>
        <th className={classes.sldbcongthuc}> (16) </th>
        <th className={classes.sldbcongthuc}> (17) </th>
        <th className={classes.sldbcongthuc}> (18)=(16)-(17) </th>
        <th className={classes.sldbcongthuc}> (21) </th>
        <th className={classes.sldbcongthuc}> (22)=(16)/(21) </th>
      </tr>
    );
  };
  const renderTableHead = () => {
    return (
      <thead>
        <tr>
          {columns.map((col) => {
            if (col.type === "dimension") {
              if (col.title === dimensionst[dimensionst.length - 1]) {
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
          {grouptop1()}
          {grouptop2()}
          {grouptop3()}
          {grouptop4()}
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
                return renderCell(col, row);
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
    if (text === "NaN" || text === "Infinity") text = "";
    if (!isNaN(Number(text))) {
      text = Number(text).toLocaleString();
    }
    if (row._level === 0) {
      cell = React.isValidElement(text) ? (
        <span style="color: #000000de;">{text}</span>
      ) : (
        <span
          style={{ color: "#000000de", fontSize: "1em" }}
          dangerouslySetInnerHTML={{
            __html: text || (text === 0 && "0") || "",
          }}
        ></span>
      );
    } else {
      cell = React.isValidElement(text) ? (
        <span>{text}</span>
      ) : (
        <span
          dangerouslySetInnerHTML={{
            __html: text || (text === 0 && "0") || "",
          }}
        ></span>
      );
    }
    // 1 group
    if (dimensionst.length === 1) {
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
      // 2 group
    } else if (dimensionst.length === 2) {
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
      } else {
        if (col.type === "dimension") {
          return (
            <td
              className={"reactPivot-cap2_1"}
              key={[col.title, row.key].join("\xff")}
              title={col.title}
            >
              {cell}
            </td>
          );
        } else {
          return (
            <td
              className={"reactPivot-cap2"}
              key={[col.title, row.key].join("\xff")}
              title={col.title}
            >
              {cell}
            </td>
          );
        }
      }
      // 3 group
    } else {
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
    }
  };
  const sum = (columns, rows) => {
    if (rows.length > 0) {
      return (
        <tr>
          {columns.map((col, i) => {
            if (col.type === "dimension") {
              if (i === 0) {
                return (
                  <th className={"reactPivot-sum"} key={col.title}>
                    Tổng
                  </th>
                );
              } else {
                return <th className={"reactPivot-sum"} key={col.title}></th>;
              }
            } else {
              return sumvalue(col.value, rows);
            }
          })}
        </tr>
      );
    }
  };
  const sumvalue = (value, rows) => {
    var temp = 0;
    rows.map((row) => {
      if (row._level === 0) {
        let t = Number(row[value]).toFixed(2);
        temp = Number(temp) + Number(t);
      }
    });
    sumArray.push(temp);
    var kq = temp.toLocaleString();
    if (value === "ptM_TANGTRUONGTotal") {
      kq = (Number(sumArray[0]) - Number(sumArray[1])).toFixed(0);
      kq = Number(kq).toLocaleString();
    }
    if (value === "ptM_TLTANGTRUONGTotal") {
      kq = ((Number(sumArray[0]) / Number(sumArray[1])) * 100).toFixed(2);
      kq = Number(kq).toLocaleString();
    }
    if (value === "huY_TANGTRUONGTotal") {
      kq = (Number(sumArray[4]) - Number(sumArray[5])).toFixed(0);
      kq = Number(kq).toLocaleString();
    }
    if (value === "huY_TLTANGTRUONGTotal") {
      kq = ((Number(sumArray[4]) / Number(sumArray[5])) * 100).toFixed(2);
      kq = Number(kq).toLocaleString();
    }
    if (value === "tdcN_TANGTRUONGTotal") {
      kq = (Number(sumArray[8]) - Number(sumArray[9])).toFixed(0);
      kq = Number(kq).toLocaleString();
    }
    if (value === "tdcN_TLTANGTRUONGTotal") {
      kq = ((Number(sumArray[8]) / Number(sumArray[9])) * 100).toFixed(2);
      kq = Number(kq).toLocaleString();
    }
    if (value === "psC_TT_NAMTotal") {
      kq = (Number(sumArray[12]) - Number(sumArray[13])).toFixed(2);
      kq = Number(kq).toLocaleString();
    }
    if (value === "psC_TLCKTotal") {
      kq = ((Number(sumArray[12]) / Number(sumArray[15])) * 100).toFixed(2);
      kq = Number(kq).toLocaleString();
    }
    if (kq === "NaN") kq = "";
    return (
      <td key={value} className={"reactPivot-sum"}>
        <span>{kq}</span>
      </td>
    );
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
