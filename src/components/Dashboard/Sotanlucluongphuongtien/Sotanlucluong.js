import React from "react";
import Chart from "components/Chart/Chartdoanhthuluyke.js";
import styles from "assets/jss/material-dashboard-react/components/dashBoardstllup.js";
const useStyles = makeStyles(styles);
import PropTypes from "prop-types";
import Config from "conFig.js";
import { makeStyles } from "@material-ui/core/styles";
const Sotanlucluong = React.memo(function Sotanlucluong(props) {
  const classes = useStyles();
  const { ruiro, tinhhuyen } = props;
  const th_thang = "";
  const tl_htkh_thang = "";
  const tl_tg_thang_ck = "";
  const token = localStorage.getItem("token");
  var obj = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  const getdtluyke = () => {
    var url = Config.backend + "/api/doanhthuluyke/getdoanhthuluyke?thangnam=";
    fetch(url, obj)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  React.useEffect(() => {
    getdtluyke();
  }, [ruiro, tinhhuyen]);
  return (
    <div>
      <div className={classes.row}>
        <div className={classes.col_sm_6}>
          <div className={classes.tlht_statis}>
            <div className={classes.top}>
              <span className={classes.li}>SƠ TÁN</span>
              <span className={classes.li}>
                KH:
                <span className={classes.dtlk_value_span}>{th_thang}</span>
              </span>
              <span className={classes.li}>
                TH:
                <span className={classes.dtlk_value_span}>{tl_htkh_thang}</span>
              </span>
              <span className={classes.li}>
                <span>%: 12</span>
                <span className={classes.dtlk_value_span}>
                  {tl_tg_thang_ck}
                </span>
              </span>
            </div>
            <div className={classes.center_chart}>
              <div className={classes.center_chart_content}>
                <div style={{ marginTop: "-32%" }}>
                  <Chart thuchien={tl_htkh_thang} />
                </div>
              </div>
            </div>
            <div className={classes.bottom_left}>
              <span style={{ color: "#FFF", fontSize: "12px" }}>Thực hiện</span>
            </div>
            <div className={classes.bottom_right}>
              <span style={{ color: "#FFF", fontSize: "12px" }}>Còn lại</span>
            </div>
          </div>
        </div>
        <div className={classes.col_sm_6}>
          <div className={classes.tlht_statis}>
            <div className={classes.top}>
              <span className={classes.li}>PT, TTB, VT</span>
              <span className={classes.li}>
                KH:
                <span className={classes.dtlk_value_span}>{th_thang}</span>
              </span>
              <span className={classes.li}>
                TH:
                <span className={classes.dtlk_value_span}>{tl_htkh_thang}</span>
              </span>
              <span className={classes.li}>
                <span>%: 12</span>
                <span className={classes.dtlk_value_span}>
                  {tl_tg_thang_ck}
                </span>
              </span>
            </div>
            <div className={classes.center_chart}>
              <div className={classes.center_chart_content}>
                <div style={{ marginTop: "-32%" }}>
                  <Chart thuchien={tl_htkh_thang} />
                </div>
              </div>
            </div>
            <div className={classes.bottom_left}>
              <span style={{ color: "#FFF", fontSize: "12px" }}>Thực hiện</span>
            </div>
            <div className={classes.bottom_right}>
              <span style={{ color: "#FFF", fontSize: "12px" }}>Còn lại</span>
            </div>
          </div>
        </div>
        <div className={classes.col_sm_6}>
          <div className={classes.tlht_statis}>
            <div className={classes.top}>
              <span className={classes.li}>LƯƠNG THỰC - TP</span>
              <span className={classes.li}>
                KH:
                <span className={classes.dtlk_value_span}>{th_thang}</span>
              </span>
              <span className={classes.li}>
                TH:
                <span className={classes.dtlk_value_span}>{tl_htkh_thang}</span>
              </span>
              <span className={classes.li}>
                <span>%: 12</span>
                <span className={classes.dtlk_value_span}>
                  {tl_tg_thang_ck}
                </span>
              </span>
            </div>
            <div className={classes.center_chart}>
              <div className={classes.center_chart_content}>
                <div style={{ marginTop: "-32%" }}>
                  <Chart thuchien={tl_htkh_thang} />
                </div>
              </div>
            </div>
            <div className={classes.bottom_left}>
              <span style={{ color: "#FFF", fontSize: "12px" }}>Thực hiện</span>
            </div>
            <div className={classes.bottom_right}>
              <span style={{ color: "#FFF", fontSize: "12px" }}>Còn lại</span>
            </div>
          </div>
        </div>
        <div className={classes.col_sm_6}>
          <div className={classes.tlht_statis}>
            <div className={classes.top}>
              <span className={classes.li}>LL ỨNG PHÓ</span>
              <span className={classes.li}>
                KH:
                <span className={classes.dtlk_value_span}>{th_thang}</span>
              </span>
              <span className={classes.li}>
                TH:
                <span className={classes.dtlk_value_span}>{tl_htkh_thang}</span>
              </span>
              <span className={classes.li}>
                <span>%: 12</span>
                <span className={classes.dtlk_value_span}>
                  {tl_tg_thang_ck}
                </span>
              </span>
            </div>
            <div className={classes.center_chart}>
              <div className={classes.center_chart_content}>
                <div style={{ marginTop: "-32%" }}>
                  <Chart thuchien={tl_htkh_thang} />
                </div>
              </div>
            </div>
            <div className={classes.bottom_left}>
              <span style={{ color: "#FFF", fontSize: "12px" }}>Thực hiện</span>
            </div>
            <div className={classes.bottom_right}>
              <span style={{ color: "#FFF", fontSize: "12px" }}>Còn lại</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
Sotanlucluong.propTypes = {
  ruiro: PropTypes.string,
  tinhhuyen: PropTypes.string,
};
export default Sotanlucluong;
