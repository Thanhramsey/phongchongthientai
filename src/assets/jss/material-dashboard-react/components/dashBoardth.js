const dashBoardth = () => ({
  root: {
    "& .MuiInputBase-root": {
      color: "#fff",
    },
  },
  dashboard_th: {
    fontFamily: "Open Sans,Arial",
    fontSize: "1rem",
    lineHeight: "1.23",
    color: "#fff",
    height: "100vh",
    background: "#15182f",
    overflow: "auto",
    padding: "0",
  },
  dashboard_header: {
    padding: "7px",
    background: "#1f2445",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    zIndex: "100",
    borderBottom: "1px solid hsla(0,0%,100%,.05)",
    height: "35px",
  },
  header_title: {
    width: "20%",
    float: "left",
    color: "#f5c20a",
    textShadow: "2px 2px #052ab1",
    fontWeight: "700",
  },
  header_title_right: {
    width: "10%",
    float: "left",
    backgroundColor: "#464E79",
    padding: "0 5px",
  },
  header_title_left: {
    //width: "10%",
    float: "left",
    backgroundColor: "#464E79",
  },
  header_title_right_tree: {
    width: "40%",
    float: "left",
  },
  header_home_button: {
    width: "10%",
    float: "right",
    marginTop: "-2px",
  },
  header_span: {
    display: "inline-block",
    fontSize: "18px",
    verticalAlign: "middle",
    textTransform: "uppercase",
    color: "#007aff",
    fontWeight: "700",
  },
  dashboard_main: {
    padding: "1px 25px",
    marginTop: "65px",
  },
  row: {
    marginLeft: "-19px",
    marginRight: "11px",
  },
  card: {
    marginBottom: "10px",
    borderRadius: "5px",
    background: "#1f2445",
    border: "none",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    wordWrap: "break-word",
  },
  card_header_map: {
    //fontSize: "15px",
    padding: "0 5px",
    //fontWeight: "600",
    height: "37px",
    lineHeight: "37px",
    width: "30%",
  },
  card_header_tltc: {
    width: "50%",
    display: "inline-table",
  },
  card_header_left: {
    background: "#2d345f",
    fontSize: "15px",
    padding: "0 5px",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    fontWeight: "600",
    height: "37px",
    lineHeight: "37px",
    display: "flex",
  },
  card_body_map: {
    width: "100%",
    height: "200px",
  },
  card_body_camera: {
    width: "100%",
    height: "95px",
  },
  card_content_camera: {
    width: "33%",
    height: "95%",
    float: "left",
  },
  card_icon_camera: {
    width: "50%",
    height: "70%",
    marginLeft: "30px",
  },
  card_content_camera_title: {
    width: "90%",
    height: "30%",
    float: "right",
  },
  map_content: {
    width: "100%",
    height: "200px",
    display: "grid",
  },
  backgound: {
    width: "100%",
    height: "100%",
  },
  card_body_bdst: {
    width: "100%",
    height: "245px",
  },
  card_header_center: {
    background: "#2d345f",
    fontSize: "15px",
    padding: "0 5px",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    fontWeight: "600",
    height: "37px",
    lineHeight: "37px",
  },
  card_body_slst: {
    width: "100%",
    height: "350px",
    "@global": {
      "*::-webkit-scrollbar": {
        width: "0.7em",
        height: "0.8em",
      },
      "*::-webkit-scrollbar-track": {
        "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(0,0,0,.2)",
        outline: "1px solid slategrey",
      },
    },
  },
  card_body_nvth: {
    width: "100%",
    height: "455px",
  },
  card_header_right: {
    background: "#2d345f",
    fontSize: "15px",
    padding: "0 5px",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    fontWeight: "600",
    height: "37px",
    lineHeight: "37px",
    display: "flex",
  },
  card_body_cpt: {
    width: "100%",
    height: "85px",
  },
  card_body_cdt: {
    width: "100%",
    height: "85px",
  },
  card_body_tlc: {
    width: "100%",
    height: "65px",
  },
  card_body_xhc: {
    width: "100%",
    height: "212px",
    textAlign: "center",
  },
  card_header_bottom: {
    background: "#2d345f",
    fontSize: "15px",
    padding: "0 5px",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    fontWeight: "600",
    height: "37px",
    lineHeight: "37px",
  },
  card_body_bottom: {
    width: "100%",
    height: "350px",
    "@global": {
      "*::-webkit-scrollbar": {
        width: "0.7em",
        height: "0.8em",
      },
      "*::-webkit-scrollbar-track": {
        "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(0,0,0,.2)",
        outline: "1px solid slategrey",
      },
    },
  },
  card_body_nhiemvu: {
    width: "100%",
    height: "455px",
    "@global": {
      "*::-webkit-scrollbar": {
        width: "0.7em",
        height: "0.8em",
      },
      "*::-webkit-scrollbar-track": {
        "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(0,0,0,.2)",
        outline: "1px solid slategrey",
      },
    },
  },
  title_cuoc: {
    marginTop: "10px",
    fontSize: "14px",
  },
  content_cuoc: {
    marginTop: "8px",
    textAlign: "left",
    fontSize: "25px",
  },
  bottom_cuoc: {
    marginTop: "8px",
    fontSize: "14px",
  },
  tinhhuyen_header: {
    "@global": {
      "*::-webkit-scrollbar": {
        width: "0.4em",
        height: "0.6em",
      },
      "*::-webkit-scrollbar-track": {
        "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(0,0,0,.1)",
        outline: "1px solid slategrey",
      },
    },
    width: "70%",
    zIndex: "100",
    marginLeft: "27px",
  },
  tltc_header: {
    width: "45%",
    marginLeft: "10px",
    backgroundColor: "#464E79",
  },
  bieudosotan_header: {
    width: "70%",
    display: "inline-table",
  },
  xhdoanhthu_header: {
    width: "57%",
    display: "inline-table",
    float: "left",
  },
  xhdoanhthu_header_right: {
    width: "38%",
    display: "inline-table",
    float: "left",
  },
  chitieu_header: {
    width: "40%",
    display: "inline-table",
  },
  lttp_header: {
    width: "45%",
    display: "inline-table",
  },
  doanhthu_header: {
    width: "45%",
    display: "inline-table",
  },
  thiethai_header: {
    width: "40%",
    display: "inline-table",
  },
  card_body_thiethai: {
    width: "100%",
    height: "130px",
  },
  chitieu_content: {
    width: "96%",
    height: "80%",
    marginTop: "8%",
    marginLeft: "3%",
    overflow: "auto",
  },
  dichvu: {
    backgroundColor: "#464E79",
    color: "#fff",
    borderColor: "#464E79",
    borderRadius: "5px",
    height: "30px",
    fontSize: "14px",
    marginLeft: "130px",
    fontWeight: "bold",
  },
  dichvu_xhdt: {
    backgroundColor: "#464E79",
    color: "#fff",
    borderColor: "#464E79",
    borderRadius: "5px",
    height: "30px",
    fontSize: "14px",
    //marginLeft: "130px",
    fontWeight: "bold",
  },
  capchihuy: {
    backgroundColor: "#464E79",
    color: "#fff",
    borderColor: "#464E79",
    borderRadius: "5px",
    height: "30px",
    fontSize: "14px",
    //marginLeft: "130px",
    fontWeight: "bold",
  },
  doanhthu: {
    backgroundColor: "#464E79",
    color: "#fff",
    borderColor: "#464E79",
    borderRadius: "5px",
    height: "30px",
    fontSize: "14px",
    marginLeft: "70px",
    fontWeight: "bold",
  },
  xhkythuat_select: {
    backgroundColor: "#464E79",
    color: "#fff",
    borderColor: "#464E79",
    borderRadius: "5px",
    height: "30px",
    fontSize: "14px",
    fontWeight: "bold",
    width: "320px",
  },
  ruiro_select: {
    color: "#fff",
    border: "1px solid #00acc1",
    width: "150px",
  },
  thongtin_header: {
    textAlign: "center",
  },
  img: {
    width: "40%",
    height: "40%",
    marginTop: "-10px",
    marginLeft: "-50px",
  },
});

export default dashBoardth;
