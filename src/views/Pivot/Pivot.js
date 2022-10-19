import React from "react";
import ReactPivot from "./ReactPivot.js";
import { makeStyles } from "@material-ui/core/styles";
var data = require("./data.json");
import styles from "assets/jss/material-dashboard-react/components/piVot.js";
const useStyles = makeStyles(styles);

var dimensions = [
  { value: "firstName", title: "First Name" },
  { value: "lastName", title: "Last Name" },
  { value: "state", title: "State" },
  {
    value: function (row) {
      return row.transaction.business;
    },
    title: "Business",
  },
  {
    value: function (row) {
      return row.transaction.type;
    },
    title: "Transaction Type",
  },
];

var reduce = function (row, memo) {
  memo.count = (memo.count || 0) + 1;
  memo.amountTotal =
    (memo.amountTotal || 0) + parseFloat(row.transaction.amount);
  return memo;
};

var calculations = [
  {
    title: "Count",
    value: "count",
    className: "alignRight",
    sortBy: function (row) {
      return row.count;
    },
  },
  {
    title: "Amount",
    value: "amountTotal",
    template: function (val) {
      return "$" + val.toFixed(2);
    },
    className: "alignRight",
  },
  {
    title: "Avg Amount",
    value: function (row) {
      return row.amountTotal / row.count;
    },
    template: function (val) {
      return "$" + val.toFixed(2);
    },
    className: "alignRight",
  },
];

var hideRows = (row) => {
  return row.amountTotal < 1000;
};
export default function Pivot() {
  const classes = useStyles();
  const [showInput, setShowInput] = React.useState(false);
  const toggleShow = () => {
    setShowInput(!showInput);
  };
  return (
    <div className={classes.demo}>
      <div className={showInput ? classes.hide : ""}>
        <ReactPivot
          rows={data}
          dimensions={dimensions}
          calculations={calculations}
          reduce={reduce}
          activeDimensions={["Transaction Type"]}
          hideRows={hideRows}
          nPaginateRows={20}
        />
      </div>

      <div className={showInput ? "" : classes.hide}>
        <textarea value={JSON.stringify(data, null, 2)} readOnly={true} />
      </div>

      <p>
        <a className={showInput ? "" : classes.strong} onClick={toggleShow}>
          Grid View
        </a>
        {" | "}
        <a className={showInput ? classes.strong : ""} onClick={toggleShow}>
          Input Data
        </a>
      </p>
    </div>
  );
}
