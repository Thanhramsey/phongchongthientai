import React from "react";
import styles from "assets/jss/material-dashboard-react/components/nhiemvu.js";
const useStyles = makeStyles(styles);
import { makeStyles } from "@material-ui/core/styles";
import Config from "conFig.js";
import PropTypes from "prop-types";
import Modal from "@mui/material/Modal";
import GridContainer from "components/Grid/GridContainer.js";
import GridItemLogin from "components/Grid/GridItemLogin.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeadertab.js";
import CardBody from "components/Card/CardBody.js";
import Nhiemvuthuchien_ct from "components/Dashboard/Nhiemvu/Nhiemvuthuchien_ct.js";
const Nhiemvuthuchien = React.memo(function Nhiemvuthuchien(props) {
  const classes = useStyles();
  const { ruiro, tinhhuyen } = props;
  const [data, setData] = React.useState([]);
  const [donvi, setDonvi] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
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
      "/api/nhiemvu/getnhiemvutheodiaphuong?ruiroid=" +
      ruiro +
      "&diaphuongid=" +
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
    getnhiemvutheocap();
  }, [ruiro, tinhhuyen]);
  const renderTableHead = () => {
    return (
      <thead>
        <tr>
          <th className={classes.tablenhiemvu_th}>STT</th>
          <th className={classes.tablenhiemvu_th}>Đơn vị</th>
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
              <td className={classes.tablenhiemvu_td}>{row["stt"]}</td>
              <td
                onClick={() => gotoopen(row["donvI_ID"])}
                style={{ cursor: "default" }}
                className={classes.tablenhiemvu_td}
              >
                {row["tendonvi"]}
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
      <table className={classes.tablenhiemvu}>
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
                  <Nhiemvuthuchien_ct ruiro={ruiro} donvi={donvi} />
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

Nhiemvuthuchien.propTypes = {
  ruiro: PropTypes.string,
  tinhhuyen: PropTypes.string,
};
export default Nhiemvuthuchien;
