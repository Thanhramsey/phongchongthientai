import React from "react";
import styles from "assets/jss/material-dashboard-react/components/nhiemvu.js";
const useStyles = makeStyles(styles);
import { makeStyles } from "@material-ui/core/styles";
import Config from "conFig.js";
import PropTypes from "prop-types";
const Nhiemvuthuchien_ct = React.memo(function Nhiemvuthuchien_ct(props) {
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
  const getnhiemvutheocap = () => {
    var url =
      Config.backend +
      "/api/nhiemvu/getnhiemvuthuchien?ruiroid=" +
      ruiro +
      "&donviid=" +
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
    getnhiemvutheocap();
  }, [ruiro, donvi]);
  const renderTableHead = () => {
    return (
      <thead>
        <tr>
          <th className={classes.tablenhiemvu_ct_th}>Nhiệm vụ</th>
          <th className={classes.tablenhiemvu_ct_th}>Thực hiện</th>
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
              <td className={classes.tablenhiemvu_ct_td}>{row["nhieM_VU"]}</td>
              <td className={classes.tablenhiemvu_ct_td}>{row["thuchien"]}</td>
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
      <table className={classes.tablenhiemvu}>
        {tHead}
        {tBody}
      </table>
    </div>
  );
});

Nhiemvuthuchien_ct.propTypes = {
  ruiro: PropTypes.string,
  donvi: PropTypes.string,
};
export default Nhiemvuthuchien_ct;
