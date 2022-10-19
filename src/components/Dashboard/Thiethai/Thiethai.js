import React from "react";
import PropTypes from "prop-types";
import polygon from "assets/img/polygon.svg";
import paymentimg from "assets/img/payment-method.svg";
import smartphoneimg from "assets/img/smartphone.svg";
import analyticsimg from "assets/img/analytics.svg";
import styles from "assets/jss/material-dashboard-react/components/dashBoardthiethai.js";
const useStyles = makeStyles(styles);
import Config from "conFig.js";
import { makeStyles } from "@material-ui/core/styles";
const Thiethai = React.memo(function Thiethai(props) {
  const { ruiro, tinhhuyen } = props;
  const [psc, setPsc] = React.useState(null);
  //const [psctyle, setPsctyle] = React.useState(null);
  const [huyptm, setHuyptm] = React.useState(null);
  const [ptm, setPtm] = React.useState(null);
  //const [ptmtyle, setPtmtyle] = React.useState(null);
  const [huy, setHuy] = React.useState(null);
  //const [huytyle, setHuytyle] = React.useState(null);
  const token = localStorage.getItem("token");
  var obj = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  const getthuebao = () => {
    var url = Config.backend + "/api/thuebao/getthuebao?thang=";
    fetch(url, obj)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setPsc(Number(data[0].psC_TK).toLocaleString());
          //setPsctyle(Number(data[0].tL_PSC_SO_CK).toLocaleString());
          setHuyptm(Number(data[0].tL_HUY_PTM).toLocaleString());
          setPtm(Number(data[0].ptM_TK).toLocaleString());
          //setPtmtyle(Number(data[0].ptM_SO_CK).toLocaleString());
          setHuy(Number(data[0].huY_TK).toLocaleString());
          //setHuytyle(Number(data[0].huY_SO_CK).toLocaleString());
        } else {
          setPsc(null);
          //setPsctyle(null);
          setHuyptm(null);
          setPtm(null);
          //setPtmtyle(null);
          setHuy(null);
          //setHuytyle(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  React.useEffect(() => {
    getthuebao();
  }, [ruiro, tinhhuyen]);
  const classes = useStyles();
  return (
    <div>
      <div className={classes.item}>
        <div className={classes.polygon_box}>
          <div className={classes.polygon_title}>Người chết</div>
          <div
            className={classes.polygon_canvas}
            style={{ backgroundImage: `url(${polygon})` }}
          >
            <div className={classes.icon}>
              <img src={paymentimg} className={classes.polygon_img}></img>
              <div className={classes.number}>{psc}</div>
              <div className={classes.number}>{psc} 0</div>
              <div className={classes.unit}>Người</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.polygon_box}>
          <div className={classes.polygon_title}>Người bị mất tích</div>
          <div
            className={classes.polygon_canvas}
            style={{ backgroundImage: `url(${polygon})` }}
          >
            <div className={classes.icon}>
              <img src={smartphoneimg} className={classes.polygon_img}></img>
              <div className={classes.number}>{huyptm}</div>
              <div className={classes.number}>{psc} 5</div>
              <div className={classes.unit}>Người</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.polygon_box}>
          <div className={classes.polygon_title}>Người bị ảnh hưởng</div>
          <div
            className={classes.polygon_canvas}
            style={{ backgroundImage: `url(${polygon})` }}
          >
            <div className={classes.icon}>
              <img src={analyticsimg} className={classes.polygon_img}></img>
              <div className={classes.number}>{ptm}</div>
              <div className={classes.number}>{psc} 20</div>
              <div className={classes.unit}>Người</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.polygon_box}>
          <div className={classes.polygon_title}>Nhà thiệt hại hoàn toàn</div>
          <div
            className={classes.polygon_canvas}
            style={{ backgroundImage: `url(${polygon})` }}
          >
            <div className={classes.icon}>
              <img src={paymentimg} className={classes.polygon_img}></img>
              <div className={classes.number}>{huy}</div>
              <div className={classes.number}>{psc} 10</div>
              <div className={classes.unit}>Cái</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.polygon_box}>
          <div className={classes.polygon_title}>Nhà thiệt hại rất nặng</div>
          <div
            className={classes.polygon_canvas}
            style={{ backgroundImage: `url(${polygon})` }}
          >
            <div className={classes.icon}>
              <img src={paymentimg} className={classes.polygon_img}></img>
              <div className={classes.number}>{huy}</div>
              <div className={classes.number}>{psc} 100</div>
              <div className={classes.unit}>Cái</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.polygon_box}>
          <div className={classes.polygon_title}>Nhà bị ngập nước</div>
          <div
            className={classes.polygon_canvas}
            style={{ backgroundImage: `url(${polygon})` }}
          >
            <div className={classes.icon}>
              <img src={paymentimg} className={classes.polygon_img}></img>
              <div className={classes.number}>{huy}</div>
              <div className={classes.number}>{psc} 10</div>
              <div className={classes.unit}>Cái</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.polygon_box}>
          <div className={classes.polygon_title}>Diện tích lúa</div>
          <div
            className={classes.polygon_canvas}
            style={{ backgroundImage: `url(${polygon})` }}
          >
            <div className={classes.icon}>
              <img src={paymentimg} className={classes.polygon_img}></img>
              <div className={classes.number}>{huy}</div>
              <div className={classes.number}>{psc} 10</div>
              <div className={classes.unit}>Ha</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.polygon_box}>
          <div className={classes.polygon_title}>
            Diện tích hoa màu, rau màu
          </div>
          <div
            className={classes.polygon_canvas}
            style={{ backgroundImage: `url(${polygon})` }}
          >
            <div className={classes.icon}>
              <img src={paymentimg} className={classes.polygon_img}></img>
              <div className={classes.number}>{huy}</div>
              <div className={classes.number}>{psc} 10</div>
              <div className={classes.unit}>Ha</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
Thiethai.propTypes = {
  ruiro: PropTypes.string,
  tinhhuyen: PropTypes.string,
};
export default Thiethai;
