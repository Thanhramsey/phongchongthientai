import React from "react";
import styles from "assets/jss/material-dashboard-react/components/xephangDoanhthu.js";
const useStyles = makeStyles(styles);
import { makeStyles } from "@material-ui/core/styles";
import Config from "conFig.js";
import PropTypes from "prop-types";
const Lucluongphuongtien = React.memo(function Lucluongphuongtien(props) {
  const classes = useStyles();
  const { ruiro, tinhhuyen } = props;
  //const [data, setData] = React.useState([]);
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
        //setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  React.useEffect(() => {
    getxephangdoanhthu();
  }, [ruiro, tinhhuyen]);
  const renderTableHead = () => {
    return (
      <thead>
        <tr>
          <th rowSpan="2" className={classes.tablexhdoanhthu_th}>
            Đơn vị
          </th>
          <th colSpan="8" className={classes.tablexhdoanhthu_th}>
            Đã điều động
          </th>
          <th colSpan="8" className={classes.tablexhdoanhthu_th}>
            Còn lại
          </th>
        </tr>
        <tr>
          <th className={classes.tablexhdoanhthu_th}>Quân đội</th>
          <th className={classes.tablexhdoanhthu_th}>Bộ đội biên phòng</th>
          <th className={classes.tablexhdoanhthu_th}>Công an</th>
          <th className={classes.tablexhdoanhthu_th}>LL xung kích</th>
          <th className={classes.tablexhdoanhthu_th}>Dân quân tự vệ</th>
          <th className={classes.tablexhdoanhthu_th}>Y tế</th>
          <th className={classes.tablexhdoanhthu_th}>LL hiệp đồng</th>
          <th className={classes.tablexhdoanhthu_th}>Khác</th>
          <th className={classes.tablexhdoanhthu_th}>Quân đội</th>
          <th className={classes.tablexhdoanhthu_th}>Bộ đội biên phòng</th>
          <th className={classes.tablexhdoanhthu_th}>Công an</th>
          <th className={classes.tablexhdoanhthu_th}>LL xung kích</th>
          <th className={classes.tablexhdoanhthu_th}>Dân quân tự vệ</th>
          <th className={classes.tablexhdoanhthu_th}>Y tế</th>
          <th className={classes.tablexhdoanhthu_th}>LL hiệp đồng</th>
          <th className={classes.tablexhdoanhthu_th}>Khác</th>
        </tr>
      </thead>
    );
  };
  const renderTableBody = () => {
    return (
      <tbody>
        <tr>
          <td className={classes.tablexhdoanhthu_td}>TP Quy nhơn</td>
          <td className={classes.tablexhdoanhthu_td_number}>74</td>
          <td className={classes.tablexhdoanhthu_td_number}>263</td>
          <td className={classes.tablexhdoanhthu_td_number}>315</td>
          <td className={classes.tablexhdoanhthu_td_number}>1166</td>
          <td className={classes.tablexhdoanhthu_td_number}>100</td>
          <td className={classes.tablexhdoanhthu_td_number}>200</td>
          <td className={classes.tablexhdoanhthu_td_number}>20</td>
          <td className={classes.tablexhdoanhthu_td_number}>463</td>
          <td className={classes.tablexhdoanhthu_td_number}>115</td>
          <td className={classes.tablexhdoanhthu_td_number}>106</td>
          <td className={classes.tablexhdoanhthu_td_number}>120</td>
          <td className={classes.tablexhdoanhthu_td_number}>500</td>
          <td className={classes.tablexhdoanhthu_td_number}>115</td>
          <td className={classes.tablexhdoanhthu_td_number}>106</td>
          <td className={classes.tablexhdoanhthu_td_number}>120</td>
          <td className={classes.tablexhdoanhthu_td_number}>500</td>
        </tr>
        <tr>
          <td className={classes.tablexhdoanhthu_td}>Thị xã An nhơn</td>
          <td className={classes.tablexhdoanhthu_td_number}>74</td>
          <td className={classes.tablexhdoanhthu_td_number}>263</td>
          <td className={classes.tablexhdoanhthu_td_number}>315</td>
          <td className={classes.tablexhdoanhthu_td_number}>1166</td>
          <td className={classes.tablexhdoanhthu_td_number}>100</td>
          <td className={classes.tablexhdoanhthu_td_number}>200</td>
          <td className={classes.tablexhdoanhthu_td_number}>20</td>
          <td className={classes.tablexhdoanhthu_td_number}>463</td>
          <td className={classes.tablexhdoanhthu_td_number}>115</td>
          <td className={classes.tablexhdoanhthu_td_number}>106</td>
          <td className={classes.tablexhdoanhthu_td_number}>120</td>
          <td className={classes.tablexhdoanhthu_td_number}>500</td>
          <td className={classes.tablexhdoanhthu_td_number}>115</td>
          <td className={classes.tablexhdoanhthu_td_number}>106</td>
          <td className={classes.tablexhdoanhthu_td_number}>120</td>
          <td className={classes.tablexhdoanhthu_td_number}>500</td>
        </tr>
        <tr>
          <td className={classes.tablexhdoanhthu_td}>Huyện Tuy phước</td>
          <td className={classes.tablexhdoanhthu_td_number}>74</td>
          <td className={classes.tablexhdoanhthu_td_number}>263</td>
          <td className={classes.tablexhdoanhthu_td_number}>315</td>
          <td className={classes.tablexhdoanhthu_td_number}>1166</td>
          <td className={classes.tablexhdoanhthu_td_number}>100</td>
          <td className={classes.tablexhdoanhthu_td_number}>200</td>
          <td className={classes.tablexhdoanhthu_td_number}>20</td>
          <td className={classes.tablexhdoanhthu_td_number}>463</td>
          <td className={classes.tablexhdoanhthu_td_number}>115</td>
          <td className={classes.tablexhdoanhthu_td_number}>106</td>
          <td className={classes.tablexhdoanhthu_td_number}>120</td>
          <td className={classes.tablexhdoanhthu_td_number}>500</td>
          <td className={classes.tablexhdoanhthu_td_number}>115</td>
          <td className={classes.tablexhdoanhthu_td_number}>106</td>
          <td className={classes.tablexhdoanhthu_td_number}>120</td>
          <td className={classes.tablexhdoanhthu_td_number}>500</td>
        </tr>
        <tr>
          <td className={classes.tablexhdoanhthu_td}>Huyện Tây sơn</td>
          <td className={classes.tablexhdoanhthu_td_number}>74</td>
          <td className={classes.tablexhdoanhthu_td_number}>263</td>
          <td className={classes.tablexhdoanhthu_td_number}>315</td>
          <td className={classes.tablexhdoanhthu_td_number}>1166</td>
          <td className={classes.tablexhdoanhthu_td_number}>100</td>
          <td className={classes.tablexhdoanhthu_td_number}>200</td>
          <td className={classes.tablexhdoanhthu_td_number}>20</td>
          <td className={classes.tablexhdoanhthu_td_number}>463</td>
          <td className={classes.tablexhdoanhthu_td_number}>115</td>
          <td className={classes.tablexhdoanhthu_td_number}>106</td>
          <td className={classes.tablexhdoanhthu_td_number}>120</td>
          <td className={classes.tablexhdoanhthu_td_number}>500</td>
          <td className={classes.tablexhdoanhthu_td_number}>115</td>
          <td className={classes.tablexhdoanhthu_td_number}>106</td>
          <td className={classes.tablexhdoanhthu_td_number}>120</td>
          <td className={classes.tablexhdoanhthu_td_number}>500</td>
        </tr>
        <tr>
          <td className={classes.tablexhdoanhthu_td}>Thị xã Hoài nhơn</td>
          <td className={classes.tablexhdoanhthu_td_number}>74</td>
          <td className={classes.tablexhdoanhthu_td_number}>263</td>
          <td className={classes.tablexhdoanhthu_td_number}>315</td>
          <td className={classes.tablexhdoanhthu_td_number}>1166</td>
          <td className={classes.tablexhdoanhthu_td_number}>100</td>
          <td className={classes.tablexhdoanhthu_td_number}>200</td>
          <td className={classes.tablexhdoanhthu_td_number}>20</td>
          <td className={classes.tablexhdoanhthu_td_number}>463</td>
          <td className={classes.tablexhdoanhthu_td_number}>115</td>
          <td className={classes.tablexhdoanhthu_td_number}>106</td>
          <td className={classes.tablexhdoanhthu_td_number}>120</td>
          <td className={classes.tablexhdoanhthu_td_number}>500</td>
          <td className={classes.tablexhdoanhthu_td_number}>115</td>
          <td className={classes.tablexhdoanhthu_td_number}>106</td>
          <td className={classes.tablexhdoanhthu_td_number}>120</td>
          <td className={classes.tablexhdoanhthu_td_number}>500</td>
        </tr>
        <tr>
          <td className={classes.tablexhdoanhthu_td_cap}>Tổng</td>
          <td className={classes.tablexhdoanhthu_td_cap_number}>1220</td>
          <td className={classes.tablexhdoanhthu_td_cap_number}>8900</td>
          <td className={classes.tablexhdoanhthu_td_cap_number}>2344</td>
          <td className={classes.tablexhdoanhthu_td_cap_number}>457</td>
          <td className={classes.tablexhdoanhthu_td_cap_number}>789</td>
          <td className={classes.tablexhdoanhthu_td_cap_number}>2000</td>
          <td className={classes.tablexhdoanhthu_td_cap_number}>12346</td>
          <td className={classes.tablexhdoanhthu_td_cap_number}>76221</td>
          <td className={classes.tablexhdoanhthu_td_cap_number}>7865</td>
          <td className={classes.tablexhdoanhthu_td_cap_number}>1114</td>
          <td className={classes.tablexhdoanhthu_td_cap_number}>5523</td>
          <td className={classes.tablexhdoanhthu_td_cap_number}>9800</td>
          <td className={classes.tablexhdoanhthu_td_cap_number}>7865</td>
          <td className={classes.tablexhdoanhthu_td_cap_number}>1114</td>
          <td className={classes.tablexhdoanhthu_td_cap_number}>5523</td>
          <td className={classes.tablexhdoanhthu_td_cap_number}>9800</td>
        </tr>
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

Lucluongphuongtien.propTypes = {
  ruiro: PropTypes.string,
  tinhhuyen: PropTypes.string,
};
export default Lucluongphuongtien;
