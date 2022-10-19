import {
  defaultFont,
  dangerColor,
  whiteColor,
} from "assets/jss/material-dashboard-react.js";

import dropdownStyle from "assets/jss/material-dashboard-react/dropdownStyle.js";

const headerLinksStyle = (theme) => ({
  ...dropdownStyle(theme),
  search: {
    "& > div": {
      marginTop: "0",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "10px 15px !important",
      float: "none !important",
      paddingTop: "1px",
      paddingBottom: "1px",
      padding: "0!important",
      width: "60%",
      marginTop: "40px",
      "& input": {
        color: whiteColor,
      },
    },
  },
  linkText: {
    zIndex: "4",
    ...defaultFont,
    fontSize: "14px",
    margin: "0px",
  },
  buttonLink: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      margin: "10px 15px 0",
      width: "-webkit-fill-available",
      "& svg": {
        width: "24px",
        height: "30px",
        marginRight: "15px",
        marginLeft: "-15px",
      },
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "24px",
        lineHeight: "30px",
        width: "24px",
        height: "30px",
        marginRight: "15px",
        marginLeft: "-15px",
      },
      "& > span": {
        justifyContent: "flex-start",
        width: "100%",
      },
    },
  },
  searchButton: {
    [theme.breakpoints.down("sm")]: {
      top: "-50px !important",
      marginRight: "22px",
      float: "right",
    },
  },
  margin: {
    zIndex: "4",
    margin: "0",
  },
  searchIcon: {
    width: "17px",
    zIndex: "4",
  },
  notifications: {
    zIndex: "4",
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      top: "2px",
      border: "1px solid " + whiteColor,
      right: "4px",
      fontSize: "9px",
      background: dangerColor[0],
      color: whiteColor,
      minWidth: "16px",
      height: "16px",
      borderRadius: "10px",
      textAlign: "center",
      lineHeight: "16px",
      verticalAlign: "middle",
      display: "block",
    },
    [theme.breakpoints.down("sm")]: {
      ...defaultFont,
      fontSize: "14px",
      marginRight: "8px",
    },
  },
  manager: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    display: "inline-block",
    marginRight: "50px",
  },
  searchWrapper: {
    [theme.breakpoints.down("sm")]: {
      width: "-webkit-fill-available",
      margin: "10px 15px 0",
    },
    display: "inline-block",
  },
  btn_icon: {
    width: "calc(40px + 2vw)",
    float: "left",
    position: "relative",
    cursor: "pointer",
    height: "40px",
  },
  img: {
    width: "100%",
    height: "100%",
    marginTop: "10px",
  },
  name: {
    fontSize: "12px",
    fontWeight: "500",
    color: "#fff",
  },
  backgound: {
    width: "100%",
    height: "100%",
  },
  left_main: {
    height: "100vh",
    width: "30%",
    position: "fixed",
    color: "#fff",
    fontSize: "calc(5px + .6vw)",
  },
  md_col_12: {
    position: "relative",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    float: "left",
    width: "100%",
  },
  title_right_menu_home: {
    height: "100%",
    display: "inline-block",
    width: "100%",
    padding: "20px",
    fontWeight: "700",
    textAlign: "center",
    color: "#f5c20a",
  },
  title_h3: {
    fontSize: "20px",
    fontWeight: "700",
    textShadow: "2px 2px #052ab1",
    lineHeight: "10px",
  },
  content_cus: {
    height: "calc(100vh - 100px);",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "auto",
  },
  content_cls: {
    overflow: "auto",
    height: "85vh",
    width: "100%",
  },
  col_md_6: {
    padding: "10px",
    width: "100%",
    float: "left",
  },
  item_center: {
    border: "1px solid",
    borderRadius: "10px",
    boxShadow: "0 3px 1px 0 #06598a",
    cursor: "pointer",
  },
  img_cls: {
    width: "50px",
    height: "50px",
    display: "block",
    margin: "10px auto",
  },
  title_h4: {
    fontWeight: "700",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "15px",
    color: "#ef2424",
    lineHeight: "5px",
  },
  title_h4_phoban: {
    fontWeight: "700",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "15px",
    color: "#db8200",
    lineHeight: "5px",
  },
  title_h4_tv: {
    fontWeight: "700",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "15px",
    color: "#00db27",
    lineHeight: "5px",
  },
  title_h4_uy: {
    fontWeight: "700",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "15px",
    color: "#ff6c08",
    lineHeight: "5px",
  },
  title_h4_sbn: {
    fontWeight: "700",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "15px",
    color: "#085dff",
    lineHeight: "5px",
  },
});

export default headerLinksStyle;
