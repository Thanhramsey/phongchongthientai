import React from "react";
import PropTypes from "prop-types";
import polygon from "assets/img/polygon.svg";
import paymentimg from "assets/img/payment-method.svg";
import smartphoneimg from "assets/img/smartphone.svg";
import analyticsimg from "assets/img/analytics.svg";
import down from "assets/img/down.svg";
import up from "assets/img/up.svg";
import styles from "assets/jss/material-dashboard-react/components/dashBoardthuebao.js";
const useStyles = makeStyles(styles);
import Config from "conFig.js";
import { makeStyles } from "@material-ui/core/styles";
const Thuebao = React.memo(function Thuebao(props) {
  const { donvi, capdv, dichvu, tendichvu } = props;
  const [psc, setPsc] = React.useState(null);
  const [psctyle, setPsctyle] = React.useState(null);
  const [huyptm, setHuyptm] = React.useState(null);
  const [ptm, setPtm] = React.useState(null);
  const [ptmtyle, setPtmtyle] = React.useState(null);
  const [huy, setHuy] = React.useState(null);
  const [huytyle, setHuytyle] = React.useState(null);
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
          setPsctyle(Number(data[0].tL_PSC_SO_CK).toLocaleString());
          setHuyptm(Number(data[0].tL_HUY_PTM).toLocaleString());
          setPtm(Number(data[0].ptM_TK).toLocaleString());
          setPtmtyle(Number(data[0].ptM_SO_CK).toLocaleString());
          setHuy(Number(data[0].huY_TK).toLocaleString());
          setHuytyle(Number(data[0].huY_SO_CK).toLocaleString());
        } else {
          setPsc(null);
          setPsctyle(null);
          setHuyptm(null);
          setPtm(null);
          setPtmtyle(null);
          setHuy(null);
          setHuytyle(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  React.useEffect(() => {
    getthuebao();
  }, [donvi, capdv, dichvu]);
  const classes = useStyles();
  return (
    <div>
      <div className={classes.item}>
        <div className={classes.polygon_box}>
          <div className={classes.polygon_title}>{tendichvu} PSC</div>
          <div
            className={classes.polygon_canvas}
            style={{ backgroundImage: `url(${polygon})` }}
          >
            <div className={classes.icon}>
              <img src={paymentimg} className={classes.polygon_img}></img>
              <div className={classes.number}>{psc}</div>
              <div className={classes.unit}>Thuê bao</div>
              {parseFloat(psctyle).toFixed(2) < 0 ? (
                <div className={classes.percent}>
                  <span
                    className={classes.arrow}
                    style={{ backgroundImage: `url(${down})` }}
                  ></span>
                  <a className={classes.down}>{psctyle} %</a>
                </div>
              ) : (
                <div className={classes.percent}>
                  <span
                    className={classes.arrow}
                    style={{ backgroundImage: `url(${up})` }}
                  ></span>
                  <a className={classes.up}>{psctyle} %</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.polygon_box}>
          <div className={classes.polygon_title}>{tendichvu} HỦY/PTM</div>
          <div
            className={classes.polygon_canvas}
            style={{ backgroundImage: `url(${polygon})` }}
          >
            <div className={classes.icon}>
              <img src={smartphoneimg} className={classes.polygon_img}></img>
              <div className={classes.number}>{huyptm}</div>
              <div className={classes.unit}>Phần trăm</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.polygon_box}>
          <div className={classes.polygon_title}>{tendichvu} PTM</div>
          <div
            className={classes.polygon_canvas}
            style={{ backgroundImage: `url(${polygon})` }}
          >
            <div className={classes.icon}>
              <img src={analyticsimg} className={classes.polygon_img}></img>
              <div className={classes.number}>{ptm}</div>
              <div className={classes.unit}>Thuê bao</div>
              {parseFloat(ptmtyle).toFixed(2) < 0 ? (
                <div className={classes.percent}>
                  <span
                    className={classes.arrow}
                    style={{ backgroundImage: `url(${down})` }}
                  ></span>
                  <a className={classes.down}>{ptmtyle} %</a>
                </div>
              ) : (
                <div className={classes.percent}>
                  <span
                    className={classes.arrow}
                    style={{ backgroundImage: `url(${up})` }}
                  ></span>
                  <a className={classes.up}>{ptmtyle} %</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.polygon_box}>
          <div className={classes.polygon_title}>{tendichvu} HỦY</div>
          <div
            className={classes.polygon_canvas}
            style={{ backgroundImage: `url(${polygon})` }}
          >
            <div className={classes.icon}>
              <img src={paymentimg} className={classes.polygon_img}></img>
              <div className={classes.number}>{huy}</div>
              <div className={classes.unit}>Thuê bao</div>
              {parseFloat(huytyle).toFixed(2) < 0 ? (
                <div className={classes.percent}>
                  <span
                    className={classes.arrow}
                    style={{ backgroundImage: `url(${down})` }}
                  ></span>
                  <a className={classes.down}>{huytyle} %</a>
                </div>
              ) : (
                <div className={classes.percent}>
                  <span
                    className={classes.arrow}
                    style={{ backgroundImage: `url(${up})` }}
                  ></span>
                  <a className={classes.up}>{huytyle} %</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
Thuebao.propTypes = {
  donvi: PropTypes.string,
  capdv: PropTypes.string,
  dichvu: PropTypes.string,
  tendichvu: PropTypes.string,
};
export default Thuebao;
