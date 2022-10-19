const cameraStyle = () => ({
  root: {
    "& .MuiInputBase-root": {
      color: "#fff",
    },
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

  backgound: {
    width: "100%",
    height: "100%",
  },
  img: {
    width: "40%",
    height: "40%",
    marginTop: "-10px",
    marginLeft: "-50px",
  },
});

export default cameraStyle;
