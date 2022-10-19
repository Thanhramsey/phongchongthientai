import React from "react";
import ReactPivot from "./ReactPivot2.js";
import { makeStyles } from "@material-ui/core/styles";
var data = require("./data2.json");
import styles from "assets/jss/material-dashboard-react/components/piVot.js";
const useStyles = makeStyles(styles);

var dimensions = [
  { value: "ten_ttvt", title: "TTVT" },
  { value: "ten_tokt", title: "Tổ KT" },
  { value: "ten_diaban", title: "Địa bàn" },
];

var reduce = function (row, memo) {
  memo.kh_namTotal =
    (memo.kh_namTotal || 0) + parseFloat(row.transaction.kh_nam);
  memo.kh_lkTotal = (memo.kh_lkTotal || 0) + parseFloat(row.transaction.kh_lk);
  memo.dt_lkTotal = (memo.dt_lkTotal || 0) + parseFloat(row.transaction.dt_lk);
  return memo;
};

var calculations = [
  {
    title: "KH năm",
    value: "kh_namTotal",
    template: function (val) {
      return val.toFixed(2);
    },
    className: "alignRight",
  },
  {
    title: "KH lũy kế",
    value: "kh_lkTotal",
    template: function (val) {
      return val.toFixed(2);
    },
    className: "alignRight",
  },
  {
    title: "KH tháng",
    value: "dt_lkTotal",
    template: function (val) {
      return val.toFixed(2);
    },
    className: "alignRight",
  },
];

var hideRows = (row) => {
  return row.kh_namTotal < 1;
};
export default function Pivot() {
  const classes = useStyles();
  const showInput = false;
  return (
    <div className={classes.demo}>
      <div className={showInput ? classes.hide : ""}>
        <ReactPivot
          rows={data}
          dimensions={dimensions}
          calculations={calculations}
          reduce={reduce}
          activeDimensions={["TTVT"]}
          hideRows={hideRows}
          nPaginateRows={20}
        />
      </div>
    </div>
  );
}
