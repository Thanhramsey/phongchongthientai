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
  const { columns, rows, nPaginateRows, dimensionst } = props;
  const [paginatePage, setpaginatePage] = React.useState(0);
  const grouptop11 = () => {
    return (
      <th colSpan="18" className={classes.top}>
        Thời gian thiết lập dịch vụ (TLDV)
      </th>
    );
  };
  const grouptop12 = () => {
    return (
      <th colSpan="24" className={classes.top}>
        Thời gian gian khắc phục sự cố (KPSC)
      </th>
    );
  };
  const grouptop13 = () => {
    return (
      <th colSpan="4" rowSpan="2" className={classes.top}>
        Tổng số thuê bao cuối kỳ báo cáo
      </th>
    );
  };
  const grouptop21 = () => {
    return (
      <th colSpan="3" className={classes.top1}>
        MegaVNN
      </th>
    );
  };
  const grouptop22 = () => {
    return (
      <th colSpan="3" className={classes.top1}>
        FiberVNN
      </th>
    );
  };
  const grouptop23 = () => {
    return (
      <th colSpan="3" className={classes.top1}>
        BRCD
      </th>
    );
  };
  const grouptop24 = () => {
    return (
      <th colSpan="3" className={classes.top1}>
        MyTV
      </th>
    );
  };
  const grouptop25 = () => {
    return (
      <th colSpan="3" className={classes.top1}>
        PSTN
      </th>
    );
  };
  const grouptop26 = () => {
    return (
      <th colSpan="3" className={classes.top1}>
        Tổng
      </th>
    );
  };
  const grouptop27 = () => {
    return (
      <th colSpan="4" className={classes.top1}>
        MegaVNN
      </th>
    );
  };
  const grouptop28 = () => {
    return (
      <th colSpan="4" className={classes.top1}>
        FiberVNN
      </th>
    );
  };
  const grouptop29 = () => {
    return (
      <th colSpan="4" className={classes.top1}>
        BRCD
      </th>
    );
  };
  const grouptop30 = () => {
    return (
      <th colSpan="4" className={classes.top1}>
        MyTV
      </th>
    );
  };
  const grouptop31 = () => {
    return (
      <th colSpan="4" className={classes.top1}>
        PSTN
      </th>
    );
  };
  const grouptop32 = () => {
    return (
      <th colSpan="4" className={classes.top1}>
        Tổng TG KPSC
      </th>
    );
  };

  const groupbottom = () => {
    return (
      <tr>
        {grouptop21()}
        {grouptop22()}
        {grouptop23()}
        {grouptop24()}
        {grouptop25()}
        {grouptop26()}
        {grouptop27()}
        {grouptop28()}
        {grouptop29()}
        {grouptop30()}
        {grouptop31()}
        {grouptop32()}
      </tr>
    );
  };
  const groupbottom2 = () => {
    return (
      <tr>
        {columns.map((col) => {
          if (col.type !== "dimension") {
            return (
              <th className={classes.tldvbottom} key={col.title}>
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
            return <th className={classes.tldvcongthuc1} key={col.title}></th>;
          }
        })}
        <th className={classes.tldvcongthuc}> (4) </th>
        <th className={classes.tldvcongthuc}> (5) </th>
        <th className={classes.tldvcongthuc}> (6)=(4)/(5) </th>
        <th className={classes.tldvcongthuc}> (7) </th>
        <th className={classes.tldvcongthuc}> (8) </th>
        <th className={classes.tldvcongthuc}> (9)=(7)/(8) </th>
        <th className={classes.tldvcongthuc}> (10)=(4)+(5) </th>
        <th className={classes.tldvcongthuc}> (11)=(5)+(8) </th>
        <th className={classes.tldvcongthuc}> (12)= (10)/(11) </th>
        <th className={classes.tldvcongthuc}> (13) </th>
        <th className={classes.tldvcongthuc}> (14) </th>
        <th className={classes.tldvcongthuc}> (15)=(13)/(14) </th>
        <th className={classes.tldvcongthuc}> (16) </th>
        <th className={classes.tldvcongthuc}> (17) </th>
        <th className={classes.tldvcongthuc}> (18)=(16)/(17) </th>
        <th className={classes.tldvcongthuc}> (19)=(10)+(13)+(16) </th>
        <th className={classes.tldvcongthuc}> (20)=(11)+(14)+(17) </th>
        <th className={classes.tldvcongthuc}> (21)=(19)/(20) </th>
        <th className={classes.tldvcongthuc}> (22) </th>
        <th className={classes.tldvcongthuc}> (23) </th>
        <th className={classes.tldvcongthuc}> (24)=(22)/(23) </th>
        <th className={classes.tldvcongthuc}> (25)=(20)/(40) </th>
        <th className={classes.tldvcongthuc}> (26) </th>
        <th className={classes.tldvcongthuc}> (27) </th>
        <th className={classes.tldvcongthuc}> (28)=(26)/(27) </th>
        <th className={classes.tldvcongthuc}> (29)=(27)/(45) </th>
        <th className={classes.tldvcongthuc}> (30) </th>
        <th className={classes.tldvcongthuc}> (31) </th>
        <th className={classes.tldvcongthuc}> (32)=(30)/(31) </th>
        <th className={classes.tldvcongthuc}> (33)=(31)/(46) </th>
        <th className={classes.tldvcongthuc}> (34) </th>
        <th className={classes.tldvcongthuc}> (35) </th>
        <th className={classes.tldvcongthuc}> (36)=(34)/(45) </th>
        <th className={classes.tldvcongthuc}> (37)=(35)/(48) </th>
        <th className={classes.tldvcongthuc}> (38) </th>
        <th className={classes.tldvcongthuc}> (39) </th>
        <th className={classes.tldvcongthuc}> (40)=(38)/(39) </th>
        <th className={classes.tldvcongthuc}> (41)=(40)/(49) </th>
        <th className={classes.tldvcongthuc}> (42)=(30+(34)+(38) </th>
        <th className={classes.tldvcongthuc}> (43)=(31)+(35)+(39) </th>
        <th className={classes.tldvcongthuc}> (44)=(42)/(43) </th>
        <th className={classes.tldvcongthuc}> (45)=(43)/(46+47+48+49) </th>
        <th className={classes.tldvcongthuc}> (46) </th>
        <th className={classes.tldvcongthuc}> (47) </th>
        <th className={classes.tldvcongthuc}> (48) </th>
        <th className={classes.tldvcongthuc}> (49) </th>
      </tr>
    );
  };
  const renderTableHead = () => {
    return (
      <thead>
        <tr>
          {columns.map((col) => {
            if (col.type === "dimension") {
              return (
                <th rowSpan="3" className={classes.renderTable} key={col.title}>
                  {col.title}
                </th>
              );
            }
          })}
          {grouptop11()}
          {grouptop12()}
          {grouptop13()}
        </tr>
        {groupbottom()}
        {groupbottom2()}
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
          return (
            <td
              className={col.className}
              key={[col.title, row.key].join("\xff")}
              title={col.title}
            >
              {cell}
            </td>
          );
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
          return (
            <td
              className={col.className}
              key={[col.title, row.key].join("\xff")}
              title={col.title}
            >
              {cell}
            </td>
          );
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
    var kq = temp.toLocaleString();
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
