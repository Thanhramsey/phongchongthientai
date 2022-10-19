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
  const sumArray = [];
  const { columns, rows, nPaginateRows, dimensionst } = props;
  const [paginatePage, setpaginatePage] = React.useState(0);
  const groupbottom = () => {
    return (
      <tr>
        {columns.map((col) => {
          if (col.type !== "dimension") {
            if (
              col.value === "tbpsC_THANG_HTTotal" ||
              col.value === "dT_THANG_HTTotal" ||
              col.value === "dT_LKTotal"
            ) {
              return (
                <th className={classes.thdtdbbottomspec} key={col.title}>
                  {col.title}
                </th>
              );
            } else {
              return (
                <th className={classes.thdtdbbottom} key={col.title}>
                  {col.title}
                </th>
              );
            }
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
                <th className={classes.thdtdbcongthuc2} key={col.title}></th>
              );
            } else {
              return (
                <th className={classes.thdtdbcongthuc1} key={col.title}></th>
              );
            }
          }
        })}
        <th className={classes.thdtdbcongthuc}> (1) </th>
        <th className={classes.thdtdbcongthuc}> (2) </th>
        <th className={classes.thdtdbcongthuc}> (3) </th>
        <th className={classes.thdtdbcongthuc}> (4) </th>
        <th className={classes.thdtdbcongthuc}> (5) </th>
        <th className={classes.thdtdbcongthuc}> (6) </th>
        <th className={classes.thdtdbcongthuc}> (7) </th>
        <th className={classes.thdtdbcongthuc}> (8) </th>
        <th className={classes.thdtdbcongthuc}> (9)=(1)/(3) </th>
        <th className={classes.thdtdbcongthuc}> (10)= (2)/(4) </th>
        <th className={classes.thdtdbcongthuc}> (11)=(1)/(5) </th>
        <th className={classes.thdtdbcongthuc}> (12)=(2)/(6) </th>
        <th className={classes.thdtdbcongthuc}> (13) </th>
        <th className={classes.thdtdbcongthuc}> (14)=(1)-(13) </th>
        <th className={classes.thdtdbcongthuc}> (15)=(7)-(8) </th>
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
    if (text === "NaN" || text === Infinity) text = "";
    if (!isNaN(Number(text))) {
      text = Number(text).toLocaleString();
    }

    if (col.value === "tbPSCnamtruocTotal") {
      if (row.tbPSCnamtruocTotal < 0) {
        cell = React.isValidElement(text) ? (
          <span style="color: red;">{text}</span>
        ) : (
          <span
            style={{ color: "red", fontSize: "1em" }}
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
    } else if (col.value === "dT_TANGTRUONGTotal") {
      if (row.dT_TANGTRUONGTotal < 0) {
        cell = React.isValidElement(text) ? (
          <span style="color: red;">{text}</span>
        ) : (
          <span
            style={{ color: "red", fontSize: "1em" }}
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
    } else if (col.value === "tbPSCthangtruocTotal") {
      if (row.tbPSCthangtruocTotal < 100) {
        cell = React.isValidElement(text) ? (
          <span style="color: black;">{text}</span>
        ) : (
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: text || (text === 0 && "0") || "",
              }}
            ></span>
            <i
              className="fa fa-angle-double-down"
              style={{ color: "red", fontSize: "1em", marginLeft: "3px" }}
            ></i>
          </span>
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
    } else if (col.value === "dT_sothangtruocTotal") {
      if (row.dT_sothangtruocTotal < 100) {
        cell = React.isValidElement(text) ? (
          <span style="color: black;">{text}</span>
        ) : (
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: text || (text === 0 && "0") || "",
              }}
            ></span>
            <i
              className="fa fa-angle-double-down"
              style={{ color: "red", fontSize: "1em", marginLeft: "3px" }}
            ></i>
          </span>
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
    } else if (col.value === "tbPSCcungkyTotal") {
      if (row.tbPSCcungkyTotal < 100) {
        cell = React.isValidElement(text) ? (
          <span style="color: black;">{text}</span>
        ) : (
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: text || (text === 0 && "0") || "",
              }}
            ></span>
            <i
              className="fa fa-angle-double-down"
              style={{ color: "red", fontSize: "1em", marginLeft: "3px" }}
            ></i>
          </span>
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
    } else if (col.value === "dT_socungkyTotal") {
      if (row.dT_socungkyTotal < 100) {
        cell = React.isValidElement(text) ? (
          <span style="color: black;">{text}</span>
        ) : (
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: text || (text === 0 && "0") || "",
              }}
            ></span>
            <i
              className="fa fa-angle-double-down"
              style={{ color: "red", fontSize: "1em", marginLeft: "3px" }}
            ></i>
          </span>
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
    } else if (dimensionst.length === 3) {
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
      // 4 group
    } else {
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
      } else if (row._level === 2) {
        if (col.type === "dimension") {
          if (col.title === dimensionst[dimensionst.length - 1]) {
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
                className={"reactPivot-normal0"}
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
        // dòng thứ 4
      } else {
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
    if (value === "tbPSCthangtruocTotal") {
      kq = ((Number(sumArray[0]) / Number(sumArray[2])) * 100).toFixed(2);
      kq = Number(kq).toLocaleString();
    }
    if (value === "dT_sothangtruocTotal") {
      kq = ((Number(sumArray[1]) / Number(sumArray[3])) * 100).toFixed(2);
      kq = Number(kq).toLocaleString();
    }
    if (value === "tbPSCcungkyTotal") {
      kq = ((Number(sumArray[0]) / Number(sumArray[4])) * 100).toFixed(2);
      kq = Number(kq).toLocaleString();
    }
    if (value === "dT_socungkyTotal") {
      kq = ((Number(sumArray[1]) / Number(sumArray[5])) * 100).toFixed(2);
      kq = Number(kq).toLocaleString();
    }
    if (value === "tbPSCnamtruocTotal") {
      kq = (Number(sumArray[0]) - Number(sumArray[12])).toFixed(2);
      kq = Number(kq).toLocaleString();
    }
    if (value === "dT_TANGTRUONGTotal") {
      kq = (Number(sumArray[6]) - Number(sumArray[7])).toFixed(2);
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
