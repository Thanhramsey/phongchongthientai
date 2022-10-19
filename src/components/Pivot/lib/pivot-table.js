import range from "lodash/range";
import React from "react";
import PropTypes from "prop-types";
import { partial } from "components/Pivot/lib/partial";
import { getValue } from "components/Pivot/lib/get-value";

export default function PivotTable(props) {
  const {
    columns,
    rows,
    sortBy,
    sortDir,
    onSort,
    nPaginateRows,
    tableClassName,
  } = props;
  const [paginatePage, setpaginatePage] = React.useState(0);
  const renderTableHead = () => {
    var sortByt = sortBy;
    var sortDirt = sortDir;
    return (
      <thead>
        <tr>
          {columns.map((col) => {
            var className = col.className;
            if (col.title === sortByt) className += " " + sortDirt;
            if (col.type === "dimension") {
              return (
                <th
                  className={className}
                  onClick={partial(onSort, col.title)}
                  style={{
                    cursor: "pointer",
                    borderWidth: "0.1px",
                    borderColor: "#aaaaaa",
                    borderStyle: "solid",
                    textAlign: "center",
                    width: "120px",
                    position: "sticky",
                    top: 0,
                  }}
                  key={col.title}
                >
                  {col.title}
                </th>
              );
            } else {
              return (
                <th
                  className={className}
                  onClick={partial(onSort, col.title)}
                  style={{
                    cursor: "pointer",
                    borderWidth: "0.1px",
                    borderColor: "#aaaaaa",
                    borderStyle: "solid",
                    textAlign: "center",
                    width: "80px",
                    position: "sticky",
                    top: 0,
                  }}
                  key={col.title}
                >
                  {col.title}
                </th>
              );
            }
          })}
        </tr>
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
    if (text === "NaN") text = "";
    if (row._level === 0) {
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
    if (row._level === 0) {
      if (col.type === "dimension") {
        return (
          <td
            className={col.className}
            key={[col.title, row.key].join("\xff")}
            title={col.title}
            style={{
              cursor: "pointer",
              borderTopWidth: "0.1px",
              borderBottomWidth: "0px",
              borderLeftWidth: "0px",
              borderRightWidth: "0px",
              borderColor: "#aaaaaa",
              borderStyle: "solid",
              textAlign: "center",
              width: "120px",
            }}
          >
            {cell}
          </td>
        );
      } else {
        return (
          <td
            className={col.className}
            key={[col.title, row.key].join("\xff")}
            title={col.title}
            style={{
              cursor: "pointer",
              borderTopWidth: "0.1px",
              borderBottomWidth: "0px",
              borderLeftWidth: "0.1px",
              borderRightWidth: "0px",
              borderColor: "#aaaaaa",
              borderStyle: "solid",
              textAlign: "center",
              width: "80px",
            }}
          >
            {cell}
          </td>
        );
      }
    } else if (row._level === 1) {
      if (col.type === "dimension") {
        return (
          <td
            className={col.className}
            key={[col.title, row.key].join("\xff")}
            title={col.title}
            style={{
              cursor: "pointer",
              borderTopWidth: "0.1px",
              borderBottomWidth: "0px",
              borderLeftWidth: "0.1px",
              borderRightWidth: "0px",
              borderColor: "#aaaaaa",
              borderStyle: "solid",
              textAlign: "center",
              width: "120px",
            }}
          >
            {cell}
          </td>
        );
      } else {
        return (
          <td
            className={col.className}
            key={[col.title, row.key].join("\xff")}
            title={col.title}
            style={{
              cursor: "pointer",
              borderTopWidth: "0.1px",
              borderBottomWidth: "0px",
              borderLeftWidth: "0.1px",
              borderRightWidth: "0px",
              borderColor: "#aaaaaa",
              borderStyle: "solid",
              textAlign: "center",
              width: "80px",
            }}
          >
            {cell}
          </td>
        );
      }
    } else {
      if (col.type === "dimension") {
        return (
          <td
            className={col.className}
            key={[col.title, row.key].join("\xff")}
            title={col.title}
            style={{
              cursor: "pointer",
              borderTopWidth: "0.1px",
              borderBottomWidth: "0px",
              borderLeftWidth: "0.1px",
              borderRightWidth: "0px",
              borderColor: "#aaaaaa",
              borderStyle: "solid",
              textAlign: "center",
              width: "120px",
            }}
          >
            {cell}
          </td>
        );
      } else {
        return (
          <td
            className={col.className}
            key={[col.title, row.key].join("\xff")}
            title={col.title}
            style={{
              cursor: "pointer",
              borderTopWidth: "0.1px",
              borderBottomWidth: "0px",
              borderLeftWidth: "0.1px",
              borderRightWidth: "0px",
              borderColor: "#aaaaaa",
              borderStyle: "solid",
              textAlign: "center",
              width: "80px",
            }}
          >
            {cell}
          </td>
        );
      }
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
  var tHead = renderTableHead(columns);
  return (
    <div className="reactPivot-results">
      <table
        className={tableClassName}
        style={{
          borderWidth: "0.1px",
          borderColor: "#aaaaaa",
          borderStyle: "solid",
          position: "relative",
          collapse: "collapse",
          height: "500px",
          overflow: "auto",
        }}
      >
        {tHead}
        {tBody}
      </table>
      {renderPagination(paginatedResults)}
    </div>
  );
}

PivotTable.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
  sortBy: PropTypes.string,
  sortDir: PropTypes.string,
  onSort: PropTypes.func,
  onColumnHide: PropTypes.func,
  nPaginateRows: PropTypes.number,
  tableClassName: PropTypes.string,
};
