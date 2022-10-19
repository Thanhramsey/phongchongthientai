import React from "react";
import styles from "assets/jss/material-dashboard-react/components/SolieusotanStyle.js";
const useStyles = makeStyles(styles);
import { makeStyles } from "@material-ui/core/styles";
import Config from "conFig.js";
import PropTypes from "prop-types";
const Solieustd_ct = React.memo(function Solieustd_ct(props) {
  const classes = useStyles();
  const { ruiro, donvi } = props;
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
  const getsolieusotandan = () => {
    var url =
      Config.backend +
      "/api/sotan/getsotandantheodiaphuong?ruiro_id=" +
      ruiro +
      "&diaphuong_id=" +
      donvi;
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
    getsolieusotandan();
  }, [ruiro, donvi]);
  const renderTableHead = () => {
    return (
      <thead>
        <tr>
          <th rowSpan="3" className={classes.tablesotan_ct_th}>
            Đơn vị
          </th>
          <th colSpan="4" className={classes.tablesotan_ct_th}>
            Kế hoạch
          </th>
          <th colSpan="4" className={classes.tablesotan_ct_th}>
            Thực hiện
          </th>
        </tr>
        <tr>
          <th colSpan="2" className={classes.tablesotan_ct_th}>
            Xem ghép
          </th>
          <th colSpan="2" className={classes.tablesotan_ct_th}>
            Tập trung
          </th>
          <th colSpan="2" className={classes.tablesotan_ct_th}>
            Xem ghép
          </th>
          <th colSpan="2" className={classes.tablesotan_ct_th}>
            Tập trung
          </th>
        </tr>
        <tr>
          <th className={classes.tablesotan_ct_th}>Số hộ</th>
          <th className={classes.tablesotan_ct_th}>Số khẩu</th>
          <th className={classes.tablesotan_ct_th}>Số hộ</th>
          <th className={classes.tablesotan_ct_th}>Số khẩu</th>
          <th className={classes.tablesotan_ct_th}>Số hộ</th>
          <th className={classes.tablesotan_ct_th}>Số khẩu</th>
          <th className={classes.tablesotan_ct_th}>Số hộ</th>
          <th className={classes.tablesotan_ct_th}>Số khẩu</th>
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
              <td className={classes.tablesotan_ct_td}>{row["diaphuong"]}</td>
              <td className={classes.tablesotan_ct_td_number}>
                {Number(row["sohO_GHEP_KH"]).toLocaleString()}
              </td>
              <td className={classes.tablesotan_ct_td_number}>
                {Number(row["sokhaU_GHEP_KH"]).toLocaleString()}
              </td>
              <td className={classes.tablesotan_ct_td_number}>
                {Number(row["sohO_TT_KH"]).toLocaleString()}
              </td>
              <td className={classes.tablesotan_ct_td_number}>
                {Number(row["sokhaU_TT_KH"]).toLocaleString()}
              </td>
              <td className={classes.tablesotan_ct_td_number}>
                {Number(row["sohO_GHEP_TH"]).toLocaleString()}
              </td>
              <td className={classes.tablesotan_ct_td_number}>
                {Number(row["sokhaU_GHEP_TH"]).toLocaleString()}
              </td>
              <td className={classes.tablesotan_ct_td_number}>
                {Number(row["sohO_TT_TH"]).toLocaleString()}
              </td>
              <td className={classes.tablesotan_ct_td_number}>
                {Number(row["sokhaU_TT_TH"]).toLocaleString()}
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  };
  var tHead = renderTableHead();
  var tBody = renderTableBody();
  return (
    <div className={classes.table}>
      <table className={classes.tablesotan}>
        {tHead}
        {tBody}
      </table>
    </div>
  );
});

Solieustd_ct.propTypes = {
  ruiro: PropTypes.string,
  donvi: PropTypes.string,
};
export default Solieustd_ct;
