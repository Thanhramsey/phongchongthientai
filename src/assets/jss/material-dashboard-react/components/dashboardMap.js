const dashboardMap = () => ({
  menuleft: {
    height: "40%",
    width: "18.5%",
    position: "absolute",
    top: "0",
    zIndex: 100,
    overflowX: "hidden",
    overflowY: "auto",
    left: "7px",
  },
  card: {
    width: "17vw",
    display: "block",
    backgroundImage:
      "linear-gradient(150deg,rgba(49,0,72,.5),rgba(0,0,123,.5) 40%,rgba(64,166,192,.5) 95%)",
    marginTop: "-20px",
  },
  title: {
    textAlign: "center",
  },
  table_inlist: {
    border: "1px solid #f9c040",
    marginBottom: "10px",
    borderRadius: "5px",
    backgroundColor: "#111871",
  },
  table_white: {
    cursor: "pointer",
    minHeight: "55px",
  },
  image: {
    width: "50px",
    height: "50px",
    verticalAlign: "middle",
  },
  hidden_xs: {
    color: "orange",
    fontSize: "calc(8px + .5vw)",
    marginLeft: "10px",
  },
  content_right: {
    width: "30%",
    height: "100vh",
    position: "fixed",
    right: "0",
    top: "0",
    color: "#fff",
    fontSize: "calc(8px + .6vw)",
  },
  full_cover: {
    width: "100%",
    height: "100%",
    paddingRight: "10px",
    paddingLeft: "10px",
  },
  content_option: {
    paddingTop: "5px",
  },
  content_detail: {
    backgroundImage:
      "linear-gradient(150deg,rgba(49,0,72,.5),rgba(0,0,123,.5) 40%,rgba(64,166,192,.5) 95%)",
    borderRadius: "10px",
    width: "100%",
    height: "100%",
  },
});

export default dashboardMap;
