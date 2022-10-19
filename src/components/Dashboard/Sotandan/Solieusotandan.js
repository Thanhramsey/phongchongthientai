import React from "react";
import styles from "assets/jss/material-dashboard-react/components/SolieusotanStyle.js";
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
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [data, setData] = React.useState([]);
  const [donvi, setDonvi] = React.useState("");
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
  const gotoopen = (id) => {
    setDonvi(id);
    setOpen(true);
  };
  React.useEffect(() => {
    getsolieusotandan();
  }, [ruiro, tinhhuyen]);
  const renderTableHead = () => {
    return (
      <thead>
        <tr>
          <th rowSpan="3" className={classes.tablesotan_th}>
            Đơn vị
          </th>
          <th colSpan="4" className={classes.tablesotan_th}>
            Kế hoạch
          </th>
          <th colSpan="4" className={classes.tablesotan_th}>
            Thực hiện
          </th>
        </tr>
        <tr>
          <th colSpan="2" className={classes.tablesotan_th}>
            Xem ghép
          </th>
          <th colSpan="2" className={classes.tablesotan_th}>
            Tập trung
          </th>
          <th colSpan="2" className={classes.tablesotan_th}>
            Xem ghép
          </th>
          <th colSpan="2" className={classes.tablesotan_th}>
            Tập trung
          </th>
        </tr>
        <tr>
          <th className={classes.tablesotan_th}>Số hộ</th>
          <th className={classes.tablesotan_th}>Số khẩu</th>
          <th className={classes.tablesotan_th}>Số hộ</th>
          <th className={classes.tablesotan_th}>Số khẩu</th>
          <th className={classes.tablesotan_th}>Số hộ</th>
          <th className={classes.tablesotan_th}>Số khẩu</th>
          <th className={classes.tablesotan_th}>Số hộ</th>
          <th className={classes.tablesotan_th}>Số khẩu</th>
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
              <td
                onClick={() => gotoopen(row["diaphuonG_ID"])}
                style={{ cursor: "default" }}
                className={classes.tablesotan_td}
              >
                {row["diaphuong"]}
              </td>
              <td className={classes.tablesotan_td_number}>
                {Number(row["sohO_GHEP_KH"]).toLocaleString()}
              </td>
              <td className={classes.tablesotan_td_number}>
                {Number(row["sokhaU_GHEP_KH"]).toLocaleString()}
              </td>
              <td className={classes.tablesotan_td_number}>
                {Number(row["sohO_TT_KH"]).toLocaleString()}
              </td>
              <td className={classes.tablesotan_td_number}>
                {Number(row["sokhaU_TT_KH"]).toLocaleString()}
              </td>
              <td className={classes.tablesotan_td_number}>
                {Number(row["sohO_GHEP_TH"]).toLocaleString()}
              </td>
              <td className={classes.tablesotan_td_number}>
                {Number(row["sokhaU_GHEP_TH"]).toLocaleString()}
              </td>
              <td className={classes.tablesotan_td_number}>
                {Number(row["sohO_TT_TH"]).toLocaleString()}
              </td>
              <td className={classes.tablesotan_td_number}>
                {Number(row["sokhaU_TT_TH"]).toLocaleString()}
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
      <table className={classes.tablesotan}>
        {tHead}
        {tBody}
      </table>
      <Modal
        open={open}
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
                  <Solieusotandan_ct ruiro={ruiro} donvi={donvi} />
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
