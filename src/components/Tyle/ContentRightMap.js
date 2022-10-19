import React from "react";
import dtimg from "assets/img/dashboardmenu/leftmenu_doanhthu.png";
import styles from "assets/jss/material-dashboard-react/components/dashboardMap.js";
const useStyles = makeStyles(styles);
import { makeStyles } from "@material-ui/core/styles";

export default function ContentRight() {
  const classes = useStyles();
  return (
    <div className={classes.content_right}>
      <div className={classes.full_cover}>
        <div className={classes.content_option}></div>
        <div className={classes.content_detail}>
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
