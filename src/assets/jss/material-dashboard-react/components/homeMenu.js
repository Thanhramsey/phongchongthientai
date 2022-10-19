const homeMenu = () => ({
  backgound: {
    width: "100%",
    height: "100%",
  },
  left_main: {
    height: "100vh",
    width: "40%",
    position: "fixed",
    top: "0",
    right: "0",
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
    width: "46%",
    float: "left",
  },
  item_center: {
    border: "1px solid",
    borderRadius: "10px",
    boxShadow: "0 3px 1px 0 #06598a",
    cursor: "pointer",
  },
  img: {
    textDecoration: "none",
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
    fontSize: "18px",
    color: "#fff",
  },
});

export default homeMenu;
