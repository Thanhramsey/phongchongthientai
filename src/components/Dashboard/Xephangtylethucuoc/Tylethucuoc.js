import React from "react";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import PropTypes from "prop-types";
import Config from "conFig.js";
import styles from "assets/jss/material-dashboard-react/components/tyleThucuoc.js";
const useStyles = makeStyles(styles);
import { makeStyles } from "@material-ui/core/styles";

const Tylethucuoc = React.memo(function Tylethucuoc(props) {
  const { thangnam } = props;
  const [dathu_lk, setDathu_lk] = React.useState(0);
  const [dathu_thang, setDathu_thang] = React.useState(0);
  const [phaithu_lk_nam, setPhaithu_lk_nam] = React.useState(0);
  const [phaithu_thang, setPhaithu_thang] = React.useState(0);
  const [tyle_dathu_lk, setTyle_dathu_lk] = React.useState(0);
  const [tyle_dathu_thang, setTyle_dathu_thang] = React.useState(0);
  const token = localStorage.getItem("token");
  var obj = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  const gettylethucuoc = () => {
    var month = ("0" + (thangnam.getMonth() + 1)).slice(-2);
    var time = month + "/" + thangnam.getFullYear();
    var url = Config.backend + "/api/thucuoc/tylethucuoc?thangnam=" + time;
    fetch(url, obj)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setDathu_lk(Number(data[0].cuoC_DATHU_LK).toLocaleString());
          setDathu_thang(Number(data[0].cuoC_DATHU_THANG).toLocaleString());
          setPhaithu_lk_nam(
            Number(data[0].cuoC_PHAITHU_LK_NAM).toLocaleString()
          );
          setPhaithu_thang(Number(data[0].cuoC_PHAITHU_THANG).toLocaleString());
          setTyle_dathu_lk(Number(data[0].tL_CUOC_DATHU_LK).toLocaleString());
          setTyle_dathu_thang(
            Number(data[0].tL_CUOC_DATHU_THANG).toLocaleString()
          );
        }
        //setBangrong(temp);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  React.useEffect(() => {
    gettylethucuoc();
  }, [thangnam]);
  const classes = useStyles();
  return (
    <div>
      <div className={classes.row}>
        <div className={classes.card}>
          <div className={classes.card_body_cpt}>
            <GridContainer>
              <GridItem xs={12} sm={10} md={6}>
                <div className={classes.title_cuoc}>
                  <a style={{ color: "#fff" }}>Cước phải thu tháng</a>
                </div>
                <div className={classes.content_cuoc}>
                  <a style={{ color: "red" }}>{phaithu_thang}</a>
                </div>
                <div className={classes.bottom_cuoc}>
                  <a style={{ color: "#fff" }}>Triệu VNĐ</a>
                </div>
              </GridItem>
              <GridItem xs={12} sm={10} md={6}>
                <div className={classes.title_cuoc}>
                  <a style={{ color: "#fff" }}>Cước phải thu lk năm</a>
                </div>
                <div className={classes.content_cuoc}>
                  <a style={{ color: "red" }}>{phaithu_lk_nam}</a>
                </div>
                <div className={classes.bottom_cuoc}>
                  <a style={{ color: "#fff" }}>Triệu VNĐ</a>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.card}>
          <div className={classes.card_body_cdt}>
            <GridContainer>
              <GridItem xs={12} sm={10} md={6}>
                <div className={classes.title_cuoc}>
                  <a style={{ color: "#fff" }}>Cước đã thu tháng</a>
                </div>
                <div className={classes.content_cuoc}>
                  <a style={{ color: "rgb(81, 255, 0)" }}>{dathu_thang}</a>
                </div>
                <div className={classes.bottom_cuoc}>
                  <a style={{ color: "#fff" }}>Triệu VNĐ</a>
                </div>
              </GridItem>
              <GridItem xs={12} sm={10} md={6}>
                <div className={classes.title_cuoc}>
                  <a style={{ color: "#fff" }}>Cước đã thu lk năm</a>
                </div>
                <div className={classes.content_cuoc}>
                  <a style={{ color: "rgb(81, 255, 0)" }}>{dathu_lk}</a>
                </div>
                <div className={classes.bottom_cuoc}>
                  <a style={{ color: "#fff" }}>Triệu VNĐ</a>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.card}>
          <div className={classes.card_body_tlc}>
            <GridContainer>
              <GridItem xs={12} sm={10} md={6}>
                <div className={classes.title_cuoc}>
                  <a style={{ color: "#fff" }}>TL Cước đã thu tháng</a>
                </div>
                <div className={classes.content_cuoc}>
                  <a style={{ color: "blue" }}>{tyle_dathu_thang} %</a>
                </div>
              </GridItem>
              <GridItem xs={12} sm={10} md={6}>
                <div className={classes.title_cuoc}>
                  <a style={{ color: "#fff" }}>TL Cước đã thu lk năm</a>
                </div>
                <div className={classes.content_cuoc}>
                  <a style={{ color: "blue" }}>{tyle_dathu_lk} %</a>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
});
Tylethucuoc.propTypes = {
  thangnam: PropTypes.instanceOf(Date),
};
export default Tylethucuoc;
