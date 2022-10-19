import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import PropTypes from "prop-types";
import GridItemLogin from "components/Grid/GridItemLogin.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import LoginInput from "components/CustomInput/LoginInput.js";
import PasswordInput from "components/CustomInput/PasswordInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Config from "conFig.js";
import Snackbar from "components/Snackbar/Snackbar.js";
import AddAlert from "@material-ui/icons/AddAlert";
//import Admin from "layouts/Admin.js";
import Home from "views/Home/Home.js";
//import Home from "layouts/Home.js";
import styles from "assets/jss/material-dashboard-react/components/loginInputStyle.js";
const useStyles = makeStyles(styles);

export default function Login(props) {
  const { ticket } = props;
  const [token, setToken] = React.useState(localStorage.getItem("token"));
  //const [roles, setRoles] = React.useState(sessionStorage.getItem("roles"));
  const classes = useStyles();
  const [username, setUsername] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [alert, setAlert] = React.useState(false);
  const [alert2, setAlert2] = React.useState(false);
  const [alert3, setAlert3] = React.useState(false);
  const [alert4, setAlert4] = React.useState(false);
  const checkticket = () => {
    if (Object.keys(ticket).length > 0 && token === null) {
      var url =
        Config.backend + "/api/users/ssotapdoan?ticket=" + ticket["ticket"];
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            if (data.message == 1) {
              showNotification3();
            } else {
              showNotification4();
            }
          } else {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            localStorage.removeItem("name");
            localStorage.removeItem("username");
            localStorage.setItem("token", data.token, 100000);
            localStorage.setItem("role", data.role);
            localStorage.setItem("name", data.firstName);
            localStorage.setItem("username", data.userName);
            setToken(data.token);
          }
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }
  };
  const loaddata = () => {
    if (username && password) {
      var url = Config.backend + "/api/users/authenticate";
      fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({ username: username, password: password }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            showNotification2();
          } else {
            localStorage.setItem("token", data.token, 100000);
            localStorage.setItem("role", data.role);
            localStorage.setItem("name", data.firstName);
            localStorage.setItem("username", data.username);
            setToken(data.token);
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
  const showNotification4 = () => {
    setAlert4(true);
    setTimeout(function () {
      setAlert4(false);
    }, 10000);
  };
  const setuser = (value) => {
    setUsername(value);
  };
  const setpass = (value) => {
    setPassword(value);
  };
  React.useEffect(() => {
    checkticket();
  }, [ticket]);
  React.useEffect(() => {
    checkticket();
  }, []);
  if (token !== null) {
    return (
      <Switch>
        <Redirect from="/admin/login" to="/admin/home" />
        <Route path="/admin" component={Home} />
      </Switch>
    );
  }
  return (
    <div>
      <GridContainer>
        <GridItemLogin xs={12} sm={12} md={4}></GridItemLogin>
        <GridItemLogin xs={12} sm={12} md={4}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Đăng nhập</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={6} sm={8} md={3}></GridItem>
                <GridItem xs={6} sm={8} md={6}>
                  <LoginInput
                    labelText="Username"
                    id="username"
                    onChange={setuser}
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
                    labelText="Password"
                    id="password"
                    value={password}
                    onChange={setpass}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="info" onClick={loaddata}>
                Đăng nhập
              </Button>
            </CardFooter>
          </Card>
        </GridItemLogin>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={10} lg={8}>
          <Snackbar
            place="tc"
            color="info"
            icon={AddAlert}
            message="Không được để trống tài khoản và mật khẩu"
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
            message="Thông tin đăng nhập không chính xác"
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
            color="warning"
            icon={AddAlert}
            message="Hết thời gian xác thực"
            open={alert3}
            closeNotification={() => setAlert3(false)}
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
            message="Tài khoản của bạn chưa được cấp quyền"
            open={alert4}
            closeNotification={() => setAlert4(false)}
            close
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
Login.propTypes = {
  ticket: PropTypes.object,
};
