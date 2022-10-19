import React from "react";
import styles from "assets/jss/material-dashboard-react/components/xephangTylethucuoc.js";
const useStyles = makeStyles(styles);
import PropTypes from "prop-types";
import Config from "conFig.js";
import { makeStyles } from "@material-ui/core/styles";
const Xephangtltc = React.memo(function Xephangtltc(props) {
  const { thangthu } = props;
  const [data, setData] = React.useState([]);
  const classes = useStyles();
  const token = localStorage.getItem("token");
  var obj = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  const getxephangthucuoc = () => {
    var month = ("0" + (thangthu.getMonth() + 1)).slice(-2);
    var time = month + "/" + thangthu.getFullYear();
    var url = Config.backend + "/api/thucuoc/xephangthucuoc?thangthu=" + time;
    fetch(url, obj)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  React.useEffect(() => {
    getxephangthucuoc();
  }, [thangthu]);
  const renderTableHead = () => {
    return (
      <thead>
        <tr>
          <th className={classes.tablexhtltc_th}>Đơn vị</th>
          <th className={classes.tablexhtltc_th}>TL thu tháng</th>
          <th className={classes.tablexhtltc_th}>TL thu lk năm</th>
          <th className={classes.tablexhtltc_th}>XH</th>
        </tr>
      </thead>
    );
  };
  const renderTableBody = () => {
    return (
      <tbody>
        {data.map((row, i) => {
          return (
            <tr key={i}>
              <td className={classes.tablexhtltc_td}>{row["pbh"]}</td>
              <td className={classes.tablexhtltc_td}>{row["tL_THU_THANG"]}</td>
              <td className={classes.tablexhtltc_td}>{row["tL_THU_LK"]}</td>
              <td className={classes.tablexhtltc_td}>{row["xeP_HANG"]}</td>
            </tr>
          );
        })}
      </tbody>
    );
  };
  var tHead = renderTableHead();
  var tBody = data.length > 0 ? renderTableBody() : null;
  return (
    <div className={classes.table}>
      <table className={classes.tablexhtltc}>
        {tHead}
        {tBody}
      </table>
    </div>
  );
});
Xephangtltc.propTypes = {
  thangthu: PropTypes.instanceOf(Date),
};
export default Xephangtltc;
