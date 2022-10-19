import React from "react";
import styles from "assets/jss/material-dashboard-react/components/tablebaocaoStyle.js";
const useStyles = makeStyles(styles);
import { makeStyles } from "@material-ui/core/styles";
import Config from "conFig.js";
import PropTypes from "prop-types";
const Solieustd = React.memo(function Solieustd(props) {
  const classes = useStyles();
  const { ruiro, xa } = props;
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
    if (ruiro.length > 0 && xa.length > 0) {
      var url =
        Config.backend +
        "/api/sotan/getsotandantheodiaphuong?ruiro_id=" +
        ruiro +
        "&diaphuong_id=" +
        xa;
      fetch(url, obj)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }
  };
  React.useEffect(() => {
    getsolieusotandan();
  }, [ruiro, xa]);
  const renderTableHead = () => {
    return (
      <thead>
        <tr>
          <th rowSpan="3" className={classes.tablebcsotandan_th}>
            Đơn vị
          </th>
          <th colSpan="4" className={classes.tablebcsotandan_th}>
            Kế hoạch
          </th>
          <th colSpan="4" className={classes.tablebcsotandan_th}>
            Thực hiện
          </th>
          <th rowSpan="2" colSpan="2" className={classes.tablebcsotandan_th}>
            Tỷ lệ
          </th>
        </tr>
        <tr>
          <th colSpan="2" className={classes.tablebcsotandan_th}>
            Xen ghép
          </th>
          <th colSpan="2" className={classes.tablebcsotandan_th}>
            Tập trung
          </th>
          <th colSpan="2" className={classes.tablebcsotandan_th}>
            Xem ghép
          </th>
          <th colSpan="2" className={classes.tablebcsotandan_th}>
            Tập trung
          </th>
        </tr>
        <tr>
          <th className={classes.tablebcsotandan_th}>Số hộ</th>
          <th className={classes.tablebcsotandan_th}>Số khẩu</th>
          <th className={classes.tablebcsotandan_th}>Số hộ</th>
          <th className={classes.tablebcsotandan_th}>Số khẩu</th>
          <th className={classes.tablebcsotandan_th}>Số hộ</th>
          <th className={classes.tablebcsotandan_th}>Số khẩu</th>
          <th className={classes.tablebcsotandan_th}>Số hộ</th>
          <th className={classes.tablebcsotandan_th}>Số khẩu</th>
          <th className={classes.tablebcsotandan_th}>Số hộ</th>
          <th className={classes.tablebcsotandan_th}>Số khẩu</th>
        </tr>
        <tr>
          <th className={classes.tablebcsotandan_th}></th>
          <th className={classes.tablebcsotandan_number_th}>(1)</th>
          <th className={classes.tablebcsotandan_number_th}>(2)</th>
          <th className={classes.tablebcsotandan_number_th}>(3)</th>
          <th className={classes.tablebcsotandan_number_th}>(4)</th>
          <th className={classes.tablebcsotandan_number_th}>(5)</th>
          <th className={classes.tablebcsotandan_number_th}>(6)</th>
          <th className={classes.tablebcsotandan_number_th}>(7)</th>
          <th className={classes.tablebcsotandan_number_th}>(8)</th>
          <th className={classes.tablebcsotandan_number_th}>(5+7)/(1+3)</th>
          <th className={classes.tablebcsotandan_number_th}>(6+8)/(2+4)</th>
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
              <td className={classes.tablebcsotandan_td_number}>
                {row["diaphuong"]}
              </td>
              <td className={classes.tablebcsotandan_td_number}>
                {Number(row["sohO_GHEP_KH"]).toLocaleString()}
              </td>
              <td className={classes.tablebcsotandan_td_number}>
                {Number(row["sokhaU_GHEP_KH"]).toLocaleString()}
              </td>
              <td className={classes.tablebcsotandan_td_number}>
                {Number(row["sohO_TT_KH"]).toLocaleString()}
              </td>
              <td className={classes.tablebcsotandan_td_number}>
                {Number(row["sokhaU_TT_KH"]).toLocaleString()}
              </td>
              <td className={classes.tablebcsotandan_td_number}>
                {Number(row["sohO_GHEP_TH"]).toLocaleString()}
              </td>
              <td className={classes.tablebcsotandan_td_number}>
                {Number(row["sokhaU_GHEP_TH"]).toLocaleString()}
              </td>
              <td className={classes.tablebcsotandan_td_number}>
                {Number(row["sohO_TT_TH"]).toLocaleString()}
              </td>
              <td className={classes.tablebcsotandan_td_number}>
                {Number(row["sokhaU_TT_TH"]).toLocaleString()}
              </td>
              <td className={classes.tablebcsotandan_td_number}>
                {Number(
                  (Number(row["sohO_GHEP_TH"]) + Number(row["sohO_TT_TH"])) /
                    (Number(row["sohO_GHEP_KH"]) + Number(row["sohO_TT_KH"]))
                ).toFixed(2)}
              </td>
              <td className={classes.tablebcsotandan_td_number}>
                {Number(
                  (Number(row["sokhaU_GHEP_TH"]) +
                    Number(row["sokhaU_TT_TH"])) /
                    (Number(row["sokhaU_GHEP_KH"]) +
                      Number(row["sokhaU_TT_KH"]))
                ).toFixed(2)}
              </td>
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
      <table className={classes.tablebcsotandan}>
        {tHead}
        {tBody}
      </table>
    </div>
  );
});

Solieustd.propTypes = {
  ruiro: PropTypes.string,
  xa: PropTypes.string,
};
export default Solieustd;
