import React from "react";
import styles from "assets/jss/material-dashboard-react/components/xephangDoanhthu.js";
const useStyles = makeStyles(styles);
import { makeStyles } from "@material-ui/core/styles";
import Config from "conFig.js";
import PropTypes from "prop-types";
const Xephangdoanhthu = React.memo(function Xephangdoanhthu(props) {
  const classes = useStyles();
  const { dichvu, cap } = props;
  const [data, setData] = React.useState([]);
  const token = localStorage.getItem("token");
  var obj = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  const getxephangdoanhthu = () => {
    var url =
      Config.backend + "/api/xephangdoanhthu/getxephangdoanhthu?thangnam=";
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
    getxephangdoanhthu();
  }, [dichvu, cap]);
  const renderTableHead = () => {
    return (
      <thead>
        <tr>
          <th className={classes.tablexhdoanhthu_th}>Đơn vị</th>
          <th className={classes.tablexhdoanhthu_th}>Kế hoạch</th>
          <th className={classes.tablexhdoanhthu_th}>Thực hiện</th>
          <th className={classes.tablexhdoanhthu_th}>% HTKH</th>
          <th className={classes.tablexhdoanhthu_th}>Xếp hạng</th>
        </tr>
      </thead>
    );
  };
  const renderTableBody = () => {
    return (
      <tbody>
        {data.map((row, i) => {
          {
            if (row["cap"] < 2) {
              return (
                <tr key={i}>
                  <td className={classes.tablexhdoanhthu_td_cap}>
                    {row["teN_DONVI"]}
                  </td>
                  <td className={classes.tablexhdoanhthu_td_cap_number}>
                    {Number(row["kh"]).toLocaleString()}
                  </td>
                  <td className={classes.tablexhdoanhthu_td_cap_number}>
                    {Number(row["thuC_HIEN"]).toLocaleString()}
                  </td>
                  <td className={classes.tablexhdoanhthu_td_cap_number}>
                    {Number(row["tL_HTKH"]).toLocaleString()}
                  </td>
                  <td className={classes.tablexhdoanhthu_td_cap_number}>
                    {Number(row["xh"]).toLocaleString()}
                  </td>
                </tr>
              );
            } else {
              return (
                <tr key={i}>
                  <td className={classes.tablexhdoanhthu_td}>
                    {row["teN_DONVI"]}
                  </td>
                  <td className={classes.tablexhdoanhthu_td_number}>
                    {Number(row["kh"]).toLocaleString()}
                  </td>
                  <td className={classes.tablexhdoanhthu_td_number}>
                    {Number(row["thuC_HIEN"]).toLocaleString()}
                  </td>
                  <td className={classes.tablexhdoanhthu_td_number}>
                    {Number(row["tL_HTKH"]).toLocaleString()}
                  </td>
                  <td className={classes.tablexhdoanhthu_td_number}>
                    {Number(row["xh"]).toLocaleString()}
                  </td>
                </tr>
              );
            }
          }
        })}
      </tbody>
    );
  };
  var tHead = renderTableHead();
  var tBody = data.length > 0 ? renderTableBody() : null;
  return (
    <div className={classes.table}>
      <table className={classes.tablexhdoanhthu}>
        {tHead}
        {tBody}
      </table>
    </div>
  );
});

Xephangdoanhthu.propTypes = {
  dichvu: PropTypes.string,
  cap: PropTypes.string,
};
export default Xephangdoanhthu;
