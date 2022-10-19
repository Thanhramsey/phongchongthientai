import React from "react";
import { Route, Switch } from "react-router-dom";
//import Maps from "views/Maps/Maps.js";
import Ungpho from "layouts/Ungpho.js";
import Quantri from "layouts/Quantri.js";
import Thuthapthongtin from "layouts/Thuthapthongtin.js";
import Baocaothongke from "layouts/Baocaothongke.js";
import Dashboard from "views/Dashboard/Dashboard.js";
import Dashboardimg from "assets/img/dashboardmenu/ptcsktxh.png";
import Solieuimg from "assets/img/dashboardmenu/solieu.png";
import Tyleimg from "assets/img/dashboardmenu/tyle.png";
import AddAlert from "@material-ui/icons/AddAlert";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Snackbar from "components/Snackbar/Snackbar.js";
import Background from "assets/img/bando.png";
import Config from "conFig.js";
import { useIdleTimer } from "react-idle-timer";
import styles from "assets/jss/material-dashboard-react/components/homeMenu.js";
const useStyles = makeStyles(styles);
import { makeStyles } from "@material-ui/core/styles";

export default function HomeComponent() {
  const [alert, setAlert] = React.useState(false);
  const [thuthapthongtin, setThuthapthongtin] = React.useState(0);
  const [ungpho, setUngpho] = React.useState(0);
  const [dashboard, setDashboard] = React.useState(0);
  const [baocaothongke, setBaocaothongke] = React.useState(0);
  const [quantri, setQuantri] = React.useState(0);
  const [thongtinchung, setThongtinchung] = React.useState(0);
  const classes = useStyles();
  const timeout = 1800000;
  const [lastActive, setLastActive] = React.useState(+new Date());
  const [isIdle, setIsIdle] = React.useState(false);
  const handleOnActive = () => setIsIdle(false);
  const handleOnIdle = () => setIsIdle(true);
  const { getLastActiveTime } = useIdleTimer({
    timeout,
    onActive: handleOnActive,
    onIdle: handleOnIdle,
  });
  const role = localStorage.getItem("role");
  const checkrole = (dashboard) => {
    var url =
      Config.backend +
      "/api/checkdashboard/checkdashboard?role=" +
      role +
      "&dashboard=" +
      dashboard;
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return error;
      });
  };
  const gotothuthapthongtin = () => {
    let check = checkrole("Solieu");
    check.then((result) => {
      if (result === 1) setThuthapthongtin(1);
      else showNotification();
    });
  };
  const gotoungpho = () => {
    let check = checkrole("Solieu");
    check.then((result) => {
      if (result === 1) setUngpho(1);
      else showNotification();
    });
  };
  const gotodashboard = () => {
    let check = checkrole("Solieu");
    check.then((result) => {
      if (result === 1) setDashboard(1);
      else showNotification();
    });
  };
  const gotobaocaothongke = () => {
    let check = checkrole("Solieu");
    check.then((result) => {
      if (result === 1) setBaocaothongke(1);
      else showNotification();
    });
  };
  const gotothongtinchung = () => {
    let check = checkrole("Solieu");
    check.then((result) => {
      if (result === 1) setThongtinchung(1);
      else showNotification();
    });
  };
  const gotoquantri = () => {
    let check = checkrole("Solieu");
    check.then((result) => {
      if (result === 1) setQuantri(1);
      else showNotification();
    });
  };
  const showNotification = () => {
    setAlert(true);
    setTimeout(function () {
      setAlert(false);
    }, 6000);
  };
  React.useEffect(() => {
    setLastActive(getLastActiveTime());
    setInterval(() => {
      setLastActive(getLastActiveTime());
    }, 1800000);
  }, []);
  if (thuthapthongtin === 1) {
    return (
      <Switch>
        <Route path="/admin" component={Thuthapthongtin} />
      </Switch>
    );
  }
  if (ungpho === 1) {
    return (
      <Switch>
        <Route path="/admin" component={Ungpho} />
      </Switch>
    );
  }
  if (dashboard === 1) {
    return (
      <Switch>
        <Route path="/admin" component={Dashboard} />
      </Switch>
    );
  }
  if (baocaothongke === 1) {
    return (
      <Switch>
        <Route path="/admin" component={Baocaothongke} />
      </Switch>
    );
  }
  if (thongtinchung === 1) {
    console.log("");
  }
  if (quantri === 1) {
    return (
      <Switch>
        <Route path="/admin" component={Quantri} />
      </Switch>
    );
  }
  if (isIdle === true) {
    var d = +new Date();
    if (d - lastActive > 1800000) {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("name");
      location.href = "/admin/login";
    }
  }
  return (
    <div>
      <img className={classes.backgound} src={Background}></img>
      <div className={classes.left_main}>
        <div className={classes.md_col_12}>
          <div className={classes.title_right_menu_home}>
            <h3 className={classes.title_h3}>
              BAN CHỈ HUY PHÒNG, CHỐNG THIÊN TAI
            </h3>
            <h3 className={classes.title_h3}>
              TÌM KIẾM CỨU NẠN VÀ PHÒNG THỦ DÂN SỰ
            </h3>
            <h3 className={classes.title_h3}>TỈNH BÌNH ĐỊNH</h3>
          </div>
          <div className={classes.content_cus}>
            <div className={classes.content_cls}>
              <div className={classes.col_md_6}>
                <div className={classes.item_center}>
                  <a className={classes.img} onClick={gotodashboard}>
                    <img className={classes.img_cls} src={Solieuimg}></img>
                    <h4 className={classes.title_h4}>DASHBOARD</h4>
                  </a>
                </div>
              </div>
              <div className={classes.col_md_6}>
                <div className={classes.item_center}>
                  <a className={classes.img} onClick={gotothuthapthongtin}>
                    <img className={classes.img_cls} src={Dashboardimg}></img>
                    <h4 className={classes.title_h4}>
                      THU THẬP THÔNG TIN SỐ LIỆU
                    </h4>
                  </a>
                </div>
              </div>
              <div className={classes.col_md_6}>
                <div className={classes.item_center}>
                  <a className={classes.img} onClick={gotoungpho}>
                    <img className={classes.img_cls} src={Dashboardimg}></img>
                    <h4 className={classes.title_h4}>PHƯƠNG ÁN, NHIỆM VỤ</h4>
                  </a>
                </div>
              </div>
              <div className={classes.col_md_6}>
                <div className={classes.item_center}>
                  <a className={classes.img} onClick={gotobaocaothongke}>
                    <img className={classes.img_cls} src={Tyleimg}></img>
                    <h4 className={classes.title_h4}>BÁO CÁO THỐNG KÊ</h4>
                  </a>
                </div>
              </div>
              <div className={classes.col_md_6}>
                <div className={classes.item_center}>
                  <a className={classes.img} onClick={gotothongtinchung}>
                    <img className={classes.img_cls} src={Solieuimg}></img>
                    <h4 className={classes.title_h4}>THÔNG TIN CHUNG</h4>
                  </a>
                </div>
              </div>
              <div className={classes.col_md_6}>
                <div className={classes.item_center}>
                  <a className={classes.img} onClick={gotoquantri}>
                    <img className={classes.img_cls} src={Solieuimg}></img>
                    <h4 className={classes.title_h4}>QUẢN TRỊ</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={10} lg={8}>
          <Snackbar
            place="tc"
            color="warning"
            icon={AddAlert}
            message="Bạn không được quyền sử dụng chức năng này"
            open={alert}
            closeNotification={() => setAlert(false)}
            close
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
