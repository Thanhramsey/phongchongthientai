import React from "react";
import { useHistory } from "react-router-dom";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
import Divider from "@material-ui/core/Divider";
// @material-ui/icons
//import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
//import Search from "@material-ui/icons/Search";
// core components
import Button from "components/CustomButtons/Button.js";
import Modal from "@mui/material/Modal";
import GridItemLogin from "components/Grid/GridItemLogin.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import PasswordInput from "components/CustomInput/PasswordInput.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeadertab.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Snackbar from "components/Snackbar/Snackbar.js";
import AddAlert from "@material-ui/icons/AddAlert";
import Config from "conFig.js";
import Homeimg from "assets/img/home.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
//import Home from "views/Home/Home.js";

import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);
export default function AdminNavbarLinks() {
  const classes = useStyles();
  let history = useHistory();
  const gotohome = () => {
    history.push("/");
  };
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  var obj = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  const [openNotification, setOpenNotification] = React.useState(null);
  const [openProfile, setOpenProfile] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [oldpassword, setOldpassword] = React.useState(null);
  const [newpassword, setNewpassword] = React.useState(null);
  const [alert, setAlert] = React.useState(false);
  const [alert2, setAlert2] = React.useState(false);
  const [alert3, setAlert3] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleClickNotification = (event) => {
    if (openNotification && openNotification.contains(event.target)) {
      setOpenNotification(null);
    } else {
      setOpenNotification(event.currentTarget);
    }
  };
  const handleCloseNotification = () => {
    setOpenNotification(null);
  };
  const handleClickProfile = (event) => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  const handleCloseProfile = () => {
    setOpenProfile(null);
  };
  const change_password = () => {
    setOpen(true);
  };
  const setoldpass = (value) => {
    setOldpassword(value);
  };
  const setnewpass = (value) => {
    setNewpassword(value);
  };
  const capnhat = () => {
    if (oldpassword && newpassword) {
      var url =
        Config.backend +
        "/api/users/changepassword?oldpassword=" +
        oldpassword +
        "&newpassword=" +
        newpassword;
      fetch(url, obj)
        .then((res) => res.json())
        .then((data) => {
          if (data == "0") showNotification2();
          else {
            showNotification3();
            logout();
          }
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    } else {
      showNotification();
    }
  };
  const showNotification = () => {
    setAlert(true);
    setTimeout(function () {
      setAlert(false);
    }, 6000);
  };
  const showNotification2 = () => {
    setAlert2(true);
    setTimeout(function () {
      setAlert2(false);
    }, 6000);
  };
  const showNotification3 = () => {
    setAlert3(true);
    setTimeout(function () {
      setAlert3(false);
    }, 6000);
  };
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    location.href = "/admin/login";
  };
  return (
    <div>
      <div className={classes.searchWrapper}>
        <div className={classes.btn_icon}>
          <img src={Homeimg} className={classes.img} onClick={gotohome}></img>
        </div>
      </div>
      <div className={classes.manager}>
        <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-owns={openNotification ? "notification-menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleClickNotification}
          className={classes.buttonLink}
        >
          <Notifications className={classes.icons} />
          <span className={classes.notifications}>3</span>
          <Hidden mdUp implementation="css">
            <p onClick={handleCloseNotification} className={classes.linkText}>
              Notification
            </p>
          </Hidden>
        </Button>
        <Poppers
          open={Boolean(openNotification)}
          anchorEl={openNotification}
          transition
          disablePortal
          className={
            classNames({ [classes.popperClose]: !openNotification }) +
            " " +
            classes.popperNav
          }
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="notification-menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseNotification}>
                  <MenuList role="menu">
                    <MenuItem
                      onClick={handleCloseNotification}
                      className={classes.dropdownItem}
                    >
                      Thông báo 01
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseNotification}
                      className={classes.dropdownItem}
                    >
                      Chưa cập nhật thông tin
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseNotification}
                      className={classes.dropdownItem}
                    >
                      Thông báo số 02
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Poppers>
      </div>
      <div className={classes.manager}>
        <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-owns={openProfile ? "profile-menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleClickProfile}
          className={classes.buttonLink}
        >
          <span className={classes.name}>{name}</span>
          <ArrowDropDownIcon sx={{ color: "#fff" }} />
        </Button>
        <Poppers
          open={Boolean(openProfile)}
          anchorEl={openProfile}
          transition
          disablePortal
          className={
            classNames({ [classes.popperClose]: !openProfile }) +
            " " +
            classes.popperNav
          }
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="profile-menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseProfile}>
                  <MenuList role="menu">
                    <MenuItem
                      onClick={change_password}
                      className={classes.dropdownItem}
                    >
                      Đổi mật khẩu
                    </MenuItem>
                    <Divider light />
                    <MenuItem onClick={logout} className={classes.dropdownItem}>
                      Đăng xuất
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Poppers>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div>
            <GridContainer>
              <GridItemLogin xs={12} sm={12} md={4}></GridItemLogin>
              <GridItemLogin xs={12} sm={12} md={4}>
                <Card>
                  <CardHeader color="primary">
                    <h6
                      className={classes.cardTitleWhite}
                      style={{ marginTop: "-5px" }}
                    >
                      Đổi mật khẩu
                    </h6>
                  </CardHeader>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={6} sm={8} md={3}></GridItem>
                      <GridItem xs={6} sm={8} md={6}>
                        <PasswordInput
                          labelText="Mật khẩu cũ"
                          id="oldpassword"
                          onChange={setoldpass}
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={8} md={3}></GridItem>
                      <GridItem xs={12} sm={8} md={6}>
                        <PasswordInput
                          labelText="Mật khẩu mới"
                          id="newpassword"
                          value={newpassword}
                          onChange={setnewpass}
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={10} lg={8}>
                        <Snackbar
                          place="tc"
                          color="warning"
                          icon={AddAlert}
                          message="Không được để trống mật khẩu"
                          open={alert}
                          closeNotification={() => setAlert(false)}
                          close
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={10} lg={8}>
                        <Snackbar
                          place="tc"
                          color="warning"
                          icon={AddAlert}
                          message="Mật khẩu cũ không đúng"
                          open={alert2}
                          closeNotification={() => setAlert2(false)}
                          close
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={10} lg={8}>
                        <Snackbar
                          place="tc"
                          color="info"
                          icon={AddAlert}
                          message="Đổi mật khẩu thành công"
                          open={alert3}
                          closeNotification={() => setAlert3(false)}
                          close
                        />
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                  <CardFooter>
                    <Button color="info" onClick={capnhat}>
                      Cập nhật
                    </Button>
                  </CardFooter>
                </Card>
              </GridItemLogin>
            </GridContainer>
          </div>
        </Modal>
      </div>
    </div>
  );
}
