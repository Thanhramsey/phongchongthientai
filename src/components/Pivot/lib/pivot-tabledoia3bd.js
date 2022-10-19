import range from "lodash/range";
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { partial } from "components/Pivot/lib/partial";
import { getValue } from "components/Pivot/lib/get-value";
import styles from "assets/jss/material-dashboard-react/components/tableGridStyle.js";
import Modal from "@mui/material/Modal";
import GridContainer from "components/Grid/GridContainer.js";
//import GridItem from "components/Grid/GridItem.js";
import GridItemDoia3 from "components/Grid/GridItemDoia3.js";
import { DataGrid } from "@mui/x-data-grid";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeadertab.js";
import CardBody from "components/Card/CardBody.js";
import CloseIcon from "@mui/icons-material/Close";
import LoadingOverlay from "react-loading-overlay-ts";
import Config from "conFig.js";
const useStyles = makeStyles(styles);
import "assets/css/Pivot.css";
const ctcolumn = [
  { field: "teN_KV", headerName: "Tên KV", width: 200 },
  {
    field: "mA_TB",
    headerName: "Mã TB",
    width: 100,
  },
  {
    field: "teN_TB",
    headerName: "Tên TB",
    width: 170,
  },
  {
    field: "diachI_LD",
    headerName: "Địa chỉ",
    width: 150,
  },
  {
    field: "teN_KIEULD",
    headerName: "Kiểu LĐ",
    width: 130,
  },
  {
    field: "ngaY_HT",
    headerName: "Ngày HT",
    width: 150,
  },
];
export default function PivotTable(props) {
  const token = localStorage.getItem("token");
  var obj = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  const classes = useStyles();
  const sumArray = [];
  const { columns, rows, nPaginateRows, dimensionst, tungay, denngay } = props;
  const [paginatePage, setpaginatePage] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [rowsct, setRowsct] = React.useState([]);
  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const [isActive, setActive] = React.useState(false);
  const handleButtonClicked = () => {
    setActive((value) => !value);
    setTimeout(() => setActive(false), 1000);
  };
  const getdata = (a3id, column) => {
    handleButtonClicked();
    var ngay1 = tungay.getDate();
    var thang1 = ("0" + (tungay.getMonth() + 1)).slice(-2);
    var time1 = ngay1 + "/" + thang1 + "/" + tungay.getFullYear();
    var ngay2 = denngay.getDate();
    var thang2 = ("0" + (denngay.getMonth() + 1)).slice(-2);
    var time2 = ngay2 + "/" + thang2 + "/" + denngay.getFullYear();
    var url =
      Config.backend +
      "/api/doia3biendong/getdoia3ct?tungay=" +
      time1 +
      "&denngay=" +
      time2 +
      "&a3_id=" +
      a3id +
      "&kieu_bd=" +
      column;
    fetch(url, obj)
      .then((res) => res.json())
      .then((data) => {
        //setActive(false);
        setRowsct(data);
        if (data.length > 0) handleOpen();
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const grouptop1 = () => {
    return (
      <th colSpan="5" className={classes.top}>
        Cố định
      </th>
    );
  };
  const grouptop2 = () => {
    return (
      <th colSpan="5" className={classes.top}>
        Gphone
      </th>
    );
  };
  const grouptop3 = () => {
    return (
      <th colSpan="7" className={classes.top}>
        IMS
      </th>
    );
  };
  const grouptop4 = () => {
    return (
      <th colSpan="7" className={classes.top}>
        Fiber
      </th>
    );
  };
  const grouptop5 = () => {
    return (
      <th colSpan="7" className={classes.top}>
        MyTV
      </th>
    );
  };
  const groupbottom = () => {
    return (
      <tr>
        {columns.map((col) => {
          if (col.type !== "dimension" && col.value !== "a3_ID") {
            return (
              <th className={classes.a3bottom} key={col.title}>
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
              return <th className={classes.a3congthuc2} key={col.title}></th>;
            } else {
              return <th className={classes.a3congthuc1} key={col.title}></th>;
            }
          }
        })}
        <th className={classes.a3congthuc}> (1) </th>
        <th className={classes.a3congthuc}> (2) </th>
        <th className={classes.a3congthuc}> (3) </th>
        <th className={classes.a3congthuc}> (4) </th>
        <th className={classes.a3congthuc}> (5)=(1)-(2) </th>
        <th className={classes.a3congthuc}> (6) </th>
        <th className={classes.a3congthuc}> (7) </th>
        <th className={classes.a3congthuc}> (8) </th>
        <th className={classes.a3congthuc}> (9) </th>
        <th className={classes.a3congthuc}> (10)=(6)-(7) </th>
        <th className={classes.a3congthuc}> (11) </th>
        <th className={classes.a3congthuc}> (12) </th>
        <th className={classes.a3congthuc}> (13) </th>
        <th className={classes.a3congthuc}> (14) </th>
        <th className={classes.a3congthuc}> (15) </th>
        <th className={classes.a3congthuc}> (16)=(11)-(13) </th>
        <th className={classes.a3congthuc}> (17)=100*(13)/(11) </th>
        <th className={classes.a3congthuc}> (18) </th>
        <th className={classes.a3congthuc}> (19) </th>
        <th className={classes.a3congthuc}> (20) </th>
        <th className={classes.a3congthuc}> (21) </th>
        <th className={classes.a3congthuc}> (22) </th>
        <th className={classes.a3congthuc}> (23)=(18)-(20) </th>
        <th className={classes.a3congthuc}> (24)=100*(20)/(18) </th>
        <th className={classes.a3congthuc}> (25) </th>
        <th className={classes.a3congthuc}> (26) </th>
        <th className={classes.a3congthuc}> (27) </th>
        <th className={classes.a3congthuc}> (28) </th>
        <th className={classes.a3congthuc}> (29) </th>
        <th className={classes.a3congthuc}> (30)=(25)-(27) </th>
        <th className={classes.a3congthuc}> (31)=100*(27)/(25) </th>
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
          {grouptop5()}
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
                if (col.value !== "a3_ID") return renderCell(col, row);
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
    cell = React.isValidElement(text) ? (
      <span>{text}</span>
    ) : (
      <span
        dangerouslySetInnerHTML={{
          __html: text || (text === 0 && "0") || "",
        }}
      ></span>
    );
    // 1 group
    if (dimensionst.length === 1) {
      if (row["Nhóm A3"]) {
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
              onClick={() => getdata(row.a3_ID, col.value)}
              className={"reactPivot-normal"}
              key={[col.title, row.key].join("\xff")}
              title={col.title}
            >
              {cell}
            </td>
          );
        }
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
        if (row["Nhóm A3"]) {
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
                onClick={() => getdata(row.a3_ID, col.value)}
                className={"reactPivot-cap2"}
                key={[col.title, row.key].join("\xff")}
                title={col.title}
              >
                {cell}
              </td>
            );
          }
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
              onClick={() => getdata(row.a3_ID, col.value)}
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
              if (col.value !== "a3_ID") return sumvalue(col.value, rows);
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
    if (value === "cD_TT") {
      kq = (Number(sumArray[0]) - Number(sumArray[1])).toFixed(2);
      kq = Number(kq).toLocaleString();
    }
    if (value === "gP_TT") {
      kq = (Number(sumArray[5]) - Number(sumArray[6])).toFixed(2);
      kq = Number(kq).toLocaleString();
    }
    if (value === "imS_TT") {
      kq = (Number(sumArray[10]) - Number(sumArray[12])).toFixed(2);
      kq = Number(kq).toLocaleString();
    }
    if (value === "imS_HP") {
      kq = ((Number(sumArray[12]) / Number(sumArray[10])) * 100).toFixed(2);
      kq = Number(kq).toLocaleString();
    }
    if (value === "fttX_TT") {
      kq = (Number(sumArray[17]) - Number(sumArray[19])).toFixed(2);
      kq = Number(kq).toLocaleString();
    }
    if (value === "fttX_HP") {
      kq = ((Number(sumArray[19]) / Number(sumArray[17])) * 100).toFixed(2);
      kq = Number(kq).toLocaleString();
    }
    if (value === "mytV_TT") {
      kq = (Number(sumArray[24]) - Number(sumArray[26])).toFixed(2);
      kq = Number(kq).toLocaleString();
    }
    if (value === "mytV_HP") {
      kq = ((Number(sumArray[26]) / Number(sumArray[24])) * 100).toFixed(2);
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
        <LoadingOverlay active={isActive} spinner={true} text="Loading data...">
          <table id="table-to-xls" className="Pivot-table">
            {tHead}
            {tBody}
          </table>
        </LoadingOverlay>
        {renderPagination(paginatedResults)}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <GridContainer>
            <GridItemDoia3 xs={12} sm={12} md={8}></GridItemDoia3>
            <GridItemDoia3 xs={12} sm={12} md={8}>
              <Card>
                <CardHeader color="primary">
                  <h6
                    className={classes.cardTitleWhite}
                    style={{ marginTop: "-5px" }}
                  >
                    Biến động A3 chi tiết
                    <CloseIcon
                      color="secondary"
                      onClick={handleClose}
                      sx={{ px: 110, my: -1 }}
                    />
                  </h6>
                </CardHeader>
                <CardBody>
                  <div style={{ height: 500, width: "100%" }}>
                    <DataGrid
                      getRowId={(row) => row.mA_TB}
                      rows={rowsct}
                      columns={ctcolumn}
                      rowsPerPageOptions={[]}
                      hideFooter={true}
                      disableSelectionOnClick
                      rowHeight={30}
                      headerHeight={45}
                    />
                  </div>
                </CardBody>
              </Card>
            </GridItemDoia3>
          </GridContainer>
        </div>
      </Modal>
    </div>
  );
}

PivotTable.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
  nPaginateRows: PropTypes.number,
  dimensionst: PropTypes.array,
  tungay: PropTypes.instanceOf(Date),
  denngay: PropTypes.instanceOf(Date),
};
