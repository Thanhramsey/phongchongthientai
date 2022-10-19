import React from "react";
import dtimg from "assets/img/dashboardmenu/leftmenu_doanhthu.png";
import styles from "assets/jss/material-dashboard-react/components/dashboardMap.js";
const useStyles = makeStyles(styles);
import { makeStyles } from "@material-ui/core/styles";

export default function Menuleft() {
  const classes = useStyles();
  return (
    <div className={classes.menuleft}>
      <div className={classes.card}>
        <div className={classes.title}>
          <p style={{ color: "#effe07", fontSize: "20px" }}>Tỉnh Bình Định</p>
        </div>
        <div className={classes.table_inlist}>
          <table className={classes.table_white}>
            <thead></thead>
            <tbody>
              <tr style={{ textAlign: "center" }}>
                <th style={{ paddingRight: "5px" }}>
                  <a>
                    <img className={classes.image} src={dtimg}></img>
                    <span className={classes.hidden_xs}>Doanh thu địa bàn</span>
                  </a>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
