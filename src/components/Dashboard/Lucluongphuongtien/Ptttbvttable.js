import React from "react";
import styles from "assets/jss/material-dashboard-react/components/xephangDoanhthu.js";
const useStyles = makeStyles(styles);
import { makeStyles } from "@material-ui/core/styles";
import Config from "conFig.js";
import PropTypes from "prop-types";
const Solieuptttbvt = React.memo(function Solieuptttbvt(props) {
  const classes = useStyles();
  const { ruiro = 1 } = props;
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
  const getsolieu = () => {
    var url =
      Config.backend + "/api/phuongtienttbvt/getbaocaoptttbvt?ruiroid=" + ruiro;
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
    getsolieu();
  }, [ruiro]);
  const renderTableHead = () => {
    return (
      <thead>
        <tr>
          <th rowSpan="2" className={classes.tablexhdoanhthu_th}>
            TT
          </th>
          <th rowSpan="2" className={classes.tablexhdoanhthu_th}>
            Danh mục
          </th>
          <th colSpan="3" className={classes.tablexhdoanhthu_th}>
            Toàn tỉnh
          </th>
          <th colSpan="3" className={classes.tablexhdoanhthu_th}>
            Lực lượng vũ trang
          </th>
          <th colSpan="3" className={classes.tablexhdoanhthu_th}>
            Sở ban ngành
          </th>
          <th colSpan="3" className={classes.tablexhdoanhthu_th}>
            Cấp huyện
          </th>
        </tr>
        <tr>
          <th className={classes.tablexhdoanhthu_th}>Hiện có</th>
          <th className={classes.tablexhdoanhthu_th}>SL đã huy động</th>
          <th className={classes.tablexhdoanhthu_th}>Còn lại</th>
          <th className={classes.tablexhdoanhthu_th}>Hiện có</th>
          <th className={classes.tablexhdoanhthu_th}>SL đã huy động</th>
          <th className={classes.tablexhdoanhthu_th}>Còn lại</th>
          <th className={classes.tablexhdoanhthu_th}>Hiện có</th>
          <th className={classes.tablexhdoanhthu_th}>SL đã huy động</th>
          <th className={classes.tablexhdoanhthu_th}>Còn lại</th>
          <th className={classes.tablexhdoanhthu_th}>Hiện có</th>
          <th className={classes.tablexhdoanhthu_th}>SL đã huy động</th>
          <th className={classes.tablexhdoanhthu_th}>Còn lại</th>
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
              <td className={classes.tablexhdoanhthu_td_number}></td>
              <td className={classes.tablexhdoanhthu_td}>{row["ten"]}</td>
              <td className={classes.tablexhdoanhthu_td_number}>
                {Number(row["soluonG_H"]).toLocaleString()}
              </td>
              <td className={classes.tablexhdoanhthu_td_number}>
                {Number(row["dadunG_TT"]).toLocaleString()}
              </td>
              <td className={classes.tablexhdoanhthu_td_number}>
                {Number(row["conlaI_TT"]).toLocaleString()}
              </td>
              <td className={classes.tablexhdoanhthu_td_number}>
                {Number(row["soluonG_TT"]).toLocaleString()}
              </td>
              <td className={classes.tablexhdoanhthu_td_number}>
                {Number(row["dadunG_VTR"]).toLocaleString()}
              </td>
              <td className={classes.tablexhdoanhthu_td_number}>
                {Number(row["conlaI_VTR"]).toLocaleString()}
              </td>
              <td className={classes.tablexhdoanhthu_td_number}>
                {Number(row["soluonG_SBN"]).toLocaleString()}
              </td>
              <td className={classes.tablexhdoanhthu_td_number}>
                {Number(row["dadunG_SBN"]).toLocaleString()}
              </td>
              <td className={classes.tablexhdoanhthu_td_number}>
                {Number(row["conlaI_SBN"]).toLocaleString()}
              </td>
              <td className={classes.tablexhdoanhthu_td_number}>
                {Number(row["soluonG_H"]).toLocaleString()}
              </td>
              <td className={classes.tablexhdoanhthu_td_number}>
                {Number(row["dadunG_H"]).toLocaleString()}
              </td>
              <td className={classes.tablexhdoanhthu_td_number}>
                {Number(row["conlaI_H"]).toLocaleString()}
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
      <table className={classes.tablexhdoanhthu}>
        {tHead}
        {tBody}
      </table>
    </div>
  );
});

Solieuptttbvt.propTypes = {
  ruiro: PropTypes.string,
};
export default Solieuptttbvt;
