import React from "react";
import Camera from "assets/img/camera.png";
import Modal from "@mui/material/Modal";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItemLogin.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeadertab.js";
import CardBody from "components/Card/CardBody.js";
import Cameraquynhon from "components/Dashboard/Camera/Cameraquynhon.js";
import Cameratamquan from "components/Dashboard/Camera/Cameratamquan.js";
import Cameradegi from "components/Dashboard/Camera/Cameradegi.js";
import styles from "assets/jss/material-dashboard-react/components/cameraStyle.js";
const useStyles = makeStyles(styles);
import { makeStyles } from "@material-ui/core/styles";
export default function CameraTQ() {
  const [opencamquynhon, setCamquynhon] = React.useState(false);
  const [opencamdegi, setCamdegi] = React.useState(false);
  const [opencamtamquan, setCamtamquan] = React.useState(false);
  const quynhonClose = () => setCamquynhon(false);
  const degiClose = () => setCamdegi(false);
  const tamquanClose = () => setCamtamquan(false);
  const openCamQN = () => {
    setCamquynhon(true);
  };
  const openCamDG = () => {
    setCamdegi(true);
  };
  const openCamTQ = () => {
    setCamtamquan(true);
  };
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <div className={classes.card_body_camera}>
        <div className={classes.card_content_camera}>
          <div className={classes.card_icon_camera}>
            <img
              className={classes.backgound}
              src={Camera}
              onClick={openCamQN}
            ></img>
          </div>
          <div className={classes.card_content_camera_title}>
            <span>Cảng QN</span>
          </div>
        </div>
        <div className={classes.card_content_camera}>
          <div className={classes.card_icon_camera}>
            <img
              className={classes.backgound}
              src={Camera}
              onClick={openCamDG}
            ></img>
          </div>
          <div className={classes.card_content_camera_title}>
            <span>Cảng Đề Gi</span>
          </div>
        </div>
        <div className={classes.card_content_camera}>
          <div className={classes.card_icon_camera}>
            <img
              className={classes.backgound}
              src={Camera}
              onClick={openCamTQ}
            ></img>
          </div>
          <div className={classes.card_content_camera_title}>
            <span>Cảng Tam Quan</span>
          </div>
        </div>
      </div>
      <Modal
        open={opencamquynhon}
        onClose={quynhonClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={2}></GridItem>
            <GridItem xs={12} sm={12} md={8}>
              <Card>
                <CardHeader color="primary">
                  <h6
                    className={classes.cardTitleWhite}
                    style={{ marginTop: "-5px" }}
                  >
                    Camera Quy Nhơn
                  </h6>
                </CardHeader>
                <CardBody>
                  <Cameraquynhon />
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={2}></GridItem>
          </GridContainer>
        </div>
      </Modal>
      <Modal
        open={opencamdegi}
        onClose={degiClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={2}></GridItem>
            <GridItem xs={12} sm={12} md={8}>
              <Card>
                <CardHeader color="primary">
                  <h6
                    className={classes.cardTitleWhite}
                    style={{ marginTop: "-5px" }}
                  >
                    Camera DeGi
                  </h6>
                </CardHeader>
                <CardBody>
                  <Cameradegi />
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={2}></GridItem>
          </GridContainer>
        </div>
      </Modal>
      <Modal
        open={opencamtamquan}
        onClose={tamquanClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={1}></GridItem>
            <GridItem xs={12} sm={12} md={10}>
              <Card>
                <CardHeader color="primary">
                  <h6
                    className={classes.cardTitleWhite}
                    style={{ marginTop: "-5px" }}
                  >
                    Camera Tam Quang
                  </h6>
                </CardHeader>
                <CardBody>
                  <Cameratamquan />
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={1}></GridItem>
          </GridContainer>
        </div>
      </Modal>
    </div>
  );
}
