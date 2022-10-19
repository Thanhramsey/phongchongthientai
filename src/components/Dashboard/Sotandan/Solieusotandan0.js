import React from "react";
import styles from "assets/jss/material-dashboard-react/components/chitieuKythuat.js";
const useStyles = makeStyles(styles);
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@mui/material/Modal";
import GridContainer from "components/Grid/GridContainer.js";
import GridItemLogin from "components/Grid/GridItemLogin.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeadertab.js";
import CardBody from "components/Card/CardBody.js";
import Solieusotandan_ct from "components/Dashboard/Sotandan/Solieusotandan_ct.js";
import Config from "conFig.js";
import PropTypes from "prop-types";
const Solieustd = React.memo(function Solieustd(props) {
  const classes = useStyles();
  const { ruiro, tinhhuyen } = props;
  const [opennvct, setOpennvct] = React.useState(false);
  const handleClose = () => setOpennvct(false);
  const [data, setData] = React.useState([]);
  console.log(data);
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
      tinhhuyen;
    fetch(url, obj)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const gotoopen = () => {
    setOpennvct(true);
  };
  React.useEffect(() => {
    getsolieusotandan();
  }, [ruiro, tinhhuyen]);
  const renderTableHead = () => {
    return (
      <thead>
        <tr>
          <th rowSpan="3" className={classes.tablexhkythuat_th}>
            Đơn vị
          </th>
          <th colSpan="4" className={classes.tablexhkythuat_th}>
            Kế hoạch
          </th>
          <th colSpan="4" className={classes.tablexhkythuat_th}>
            Thực hiện
          </th>
        </tr>
        <tr>
          <th colSpan="2" className={classes.tablexhkythuat_th}>
            Xem ghép
          </th>
          <th colSpan="2" className={classes.tablexhkythuat_th}>
            Tập trung
          </th>
          <th colSpan="2" className={classes.tablexhkythuat_th}>
            Xem ghép
          </th>
          <th colSpan="2" className={classes.tablexhkythuat_th}>
            Tập trung
          </th>
        </tr>
        <tr>
          <th className={classes.tablexhkythuat_th}>Số hộ</th>
          <th className={classes.tablexhkythuat_th}>Số khẩu</th>
          <th className={classes.tablexhkythuat_th}>Số hộ</th>
          <th className={classes.tablexhkythuat_th}>Số khẩu</th>
          <th className={classes.tablexhkythuat_th}>Số hộ</th>
          <th className={classes.tablexhkythuat_th}>Số khẩu</th>
          <th className={classes.tablexhkythuat_th}>Số hộ</th>
          <th className={classes.tablexhkythuat_th}>Số khẩu</th>
        </tr>
      </thead>
    );
  };
  const renderTableBody = () => {
    return (
      <tbody>
        <tr>
          <td
            onClick={gotoopen}
            style={{ cursor: "default" }}
            className={classes.tablexhkythuat_td}
          >
            TP Quy nhơn
          </td>
          <td className={classes.tablexhkythuat_td_number}>74</td>
          <td className={classes.tablexhkythuat_td_number}>263</td>
          <td className={classes.tablexhkythuat_td_number}>315</td>
          <td className={classes.tablexhkythuat_td_number}>1166</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
        </tr>
        <tr>
          <td className={classes.tablexhkythuat_td}>Thị xã An nhơn</td>
          <td className={classes.tablexhkythuat_td_number}>74</td>
          <td className={classes.tablexhkythuat_td_number}>263</td>
          <td className={classes.tablexhkythuat_td_number}>315</td>
          <td className={classes.tablexhkythuat_td_number}>1166</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
        </tr>
        <tr>
          <td className={classes.tablexhkythuat_td}>Thị xã Hoài Nhơn</td>
          <td className={classes.tablexhkythuat_td_number}>74</td>
          <td className={classes.tablexhkythuat_td_number}>263</td>
          <td className={classes.tablexhkythuat_td_number}>315</td>
          <td className={classes.tablexhkythuat_td_number}>1166</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
        </tr>
        <tr>
          <td className={classes.tablexhkythuat_td}>Huyện An lão</td>
          <td className={classes.tablexhkythuat_td_number}>74</td>
          <td className={classes.tablexhkythuat_td_number}>263</td>
          <td className={classes.tablexhkythuat_td_number}>315</td>
          <td className={classes.tablexhkythuat_td_number}>1166</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
        </tr>
        <tr>
          <td className={classes.tablexhkythuat_td}>Huyện Hoài ân</td>
          <td className={classes.tablexhkythuat_td_number}>74</td>
          <td className={classes.tablexhkythuat_td_number}>263</td>
          <td className={classes.tablexhkythuat_td_number}>315</td>
          <td className={classes.tablexhkythuat_td_number}>1166</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
        </tr>
        <tr>
          <td className={classes.tablexhkythuat_td}>Huyện Phù mỹ</td>
          <td className={classes.tablexhkythuat_td_number}>74</td>
          <td className={classes.tablexhkythuat_td_number}>263</td>
          <td className={classes.tablexhkythuat_td_number}>315</td>
          <td className={classes.tablexhkythuat_td_number}>1166</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
        </tr>
        <tr>
          <td className={classes.tablexhkythuat_td}>Huyện Phù Cát</td>
          <td className={classes.tablexhkythuat_td_number}>74</td>
          <td className={classes.tablexhkythuat_td_number}>263</td>
          <td className={classes.tablexhkythuat_td_number}>315</td>
          <td className={classes.tablexhkythuat_td_number}>1166</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
        </tr>
        <tr>
          <td className={classes.tablexhkythuat_td}>Huyện Tuy phước</td>
          <td className={classes.tablexhkythuat_td_number}>74</td>
          <td className={classes.tablexhkythuat_td_number}>263</td>
          <td className={classes.tablexhkythuat_td_number}>315</td>
          <td className={classes.tablexhkythuat_td_number}>1166</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
        </tr>
        <tr>
          <td className={classes.tablexhkythuat_td}>Huyện Tây sơn</td>
          <td className={classes.tablexhkythuat_td_number}>74</td>
          <td className={classes.tablexhkythuat_td_number}>263</td>
          <td className={classes.tablexhkythuat_td_number}>315</td>
          <td className={classes.tablexhkythuat_td_number}>1166</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
        </tr>
        <tr>
          <td className={classes.tablexhkythuat_td}>Huyện Vân canh</td>
          <td className={classes.tablexhkythuat_td_number}>74</td>
          <td className={classes.tablexhkythuat_td_number}>263</td>
          <td className={classes.tablexhkythuat_td_number}>315</td>
          <td className={classes.tablexhkythuat_td_number}>1166</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
        </tr>
        <tr>
          <td className={classes.tablexhkythuat_td}>Huyện Vĩnh Thạnh</td>
          <td className={classes.tablexhkythuat_td_number}>74</td>
          <td className={classes.tablexhkythuat_td_number}>263</td>
          <td className={classes.tablexhkythuat_td_number}>315</td>
          <td className={classes.tablexhkythuat_td_number}>1166</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
          <td className={classes.tablexhkythuat_td_number}>0</td>
        </tr>
        <tr>
          <td className={classes.tablexhkythuat_td_cap}>Tổng</td>
          <td className={classes.tablexhkythuat_td_cap_number}>74</td>
          <td className={classes.tablexhkythuat_td_cap_number}>263</td>
          <td className={classes.tablexhkythuat_td_cap_number}>315</td>
          <td className={classes.tablexhkythuat_td_cap_number}>1166</td>
          <td className={classes.tablexhkythuat_td_cap_number}>0</td>
          <td className={classes.tablexhkythuat_td_cap_number}>0</td>
          <td className={classes.tablexhkythuat_td_cap_number}>0</td>
          <td className={classes.tablexhkythuat_td_cap_number}>0</td>
        </tr>
      </tbody>
    );
  };
  var tHead = renderTableHead();
  var tBody = renderTableBody();
  return (
    <div className={classes.table}>
      <table className={classes.tablexhkythuat}>
        {tHead}
        {tBody}
      </table>
      <Modal
        open={opennvct}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <GridContainer>
            <GridItemLogin xs={12} sm={12} md={3}></GridItemLogin>
            <GridItemLogin xs={12} sm={12} md={6}>
              <Card>
                <CardHeader color="primary">
                  <h6
                    className={classes.cardTitleWhite}
                    style={{ marginTop: "-5px" }}
                  >
                    Số liệu sơ tán dân chi tiết
                  </h6>
                </CardHeader>
                <CardBody>
                  <Solieusotandan_ct donvi={1} />
                </CardBody>
              </Card>
            </GridItemLogin>
            <GridItemLogin xs={12} sm={12} md={3}></GridItemLogin>
          </GridContainer>
        </div>
      </Modal>
    </div>
  );
});

Solieustd.propTypes = {
  ruiro: PropTypes.string,
  tinhhuyen: PropTypes.string,
};
export default Solieustd;
