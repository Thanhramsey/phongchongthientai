import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { DataGrid } from "@mui/x-data-grid";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "@material-ui/core/Button";
import Modal from "@mui/material/Modal";
import GridItemLogin from "components/Grid/GridItemLogin.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeadertab.js";
import CardBody from "components/Card/CardBody.js";
//import CustomInput from "components/CustomInput/CustomInput.js";
import CardFooter from "components/Card/CardFooter.js";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@mui/material/TextField";
import Config from "conFig.js";
import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);
const Thongtinhodan = React.memo(function Thongtinhodan(props) {
  const classes = useStyles();
  const { hodanrows, hodancolumns } = props;
  const [selectedroleRows, setSelectedroleRows] = React.useState([]);
  const [openthemhodan, setOpenthemhodan] = React.useState(false);
  const [quanhuyen, setQuanhuyen] = React.useState([]);
  const [quanhuyenvalue, setQuanhuyenvalue] = React.useState("");
  const [xaphuong, setXaphuong] = React.useState([]);
  const [xaphuongvalue, setXaphuongvalue] = React.useState("");
  const [thon, setThon] = React.useState([]);
  const [thonvalue, setThonvalue] = React.useState("");
  const selectedmenuRows = [];
  const handleClose = () => setOpenthemhodan(false);
  const token = localStorage.getItem("token");
  var obj = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  const getquanhuyen = () => {
    var url = Config.backend + "/api/diadanh/getquanhuyen";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setQuanhuyen(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const quanhuyenChange = (event) => {
    setQuanhuyenvalue(event.target.value);
    getxatuhuyen(event.target.value);
  };
  const getxatuhuyen = (id) => {
    var url = Config.backend + "/api/diadanh/getxatuhuyen?id=" + id;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setXaphuong(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const getthontuxa = (id) => {
    var url = Config.backend + "/api/diadanh/getthontuxa?id=" + id;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setThon(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const xaphuongChange = (event) => {
    setXaphuongvalue(event.target.value);
    getthontuxa(event.target.value);
  };
  const thonChange = (event) => {
    setThonvalue(event.target.value);
  };
  const capnhat = () => {
    if (selectedroleRows.length == 1) {
      var url;
      if (selectedmenuRows.length == 0) {
        url =
          Config.backend +
          "/api/phanquyenmenu/phanmenu?role=" +
          selectedroleRows[0].rolE_ID +
          "&menu=0";
        fetch(url, obj)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error("Error fetching data: ", error);
          });
      } else {
        var kq = [];
        selectedmenuRows.map((prop) => {
          kq.push(prop.id);
        });
        url =
          Config.backend +
          "/api/phanquyenmenu/phanmenu?role=" +
          selectedroleRows[0].rolE_ID +
          "&menu=(" +
          kq +
          ")";
        fetch(url, obj)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error("Error fetching data: ", error);
          });
      }
    }
  };
  const themhodan = () => {
    setOpenthemhodan(true);
  };
  React.useEffect(() => {
    getquanhuyen();
  }, []);
  return (
    <GridContainer>
      <GridItem xs={12} sm={10} md={12}>
        <Button color="primary" variant="contained" onClick={themhodan}>
          Thêm mới
        </Button>
      </GridItem>
      <GridItem xs={12} sm={10} md={12}>
        <div style={{ height: 500, width: "100%" }}>
          <DataGrid
            getRowId={(row) => row.id}
            rows={hodanrows}
            columns={hodancolumns}
            rowsPerPageOptions={[]}
            hideFooter={true}
            checkboxSelection={false}
            onSelectionModelChange={(ids) => {
              const selectedIDs = new Set(ids);
              const selectedRows = hodanrows.filter((row) =>
                selectedIDs.has(row.stt)
              );
              setSelectedroleRows(selectedRows);
            }}
            rowHeight={30}
            headerHeight={45}
          />
        </div>
      </GridItem>
      <Modal
        open={openthemhodan}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <GridContainer>
            <GridItemLogin xs={12} sm={12} md={3}></GridItemLogin>
            <GridItemLogin xs={12} sm={12} md={6}>
              <Card>
                <CardHeader color="primary">
                  <h6
                    className={classes.cardTitleWhite}
                    style={{ marginTop: "-5px" }}
                  >
                    Thêm hộ dân
                  </h6>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <FormControl style={{ width: "100%", marginTop: "10px" }}>
                        <InputLabel style={{ marginTop: "-8px" }}>
                          Chọn Tp/Huyện
                        </InputLabel>
                        <Select
                          value={quanhuyenvalue}
                          size="small"
                          onChange={quanhuyenChange}
                        >
                          {typeof quanhuyen === "object" &&
                            quanhuyen.map((prop, i) => {
                              return (
                                <MenuItem key={i} value={prop.id}>
                                  {prop.ten}
                                </MenuItem>
                              );
                            })}
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <FormControl style={{ width: "100%", marginTop: "10px" }}>
                        <InputLabel style={{ marginTop: "-8px" }}>
                          Chọn Xã phường
                        </InputLabel>
                        <Select
                          value={xaphuongvalue}
                          onChange={xaphuongChange}
                          size="small"
                        >
                          {typeof xaphuong === "object" &&
                            xaphuong.map((prop, i) => {
                              return (
                                <MenuItem key={i} value={prop.id}>
                                  {prop.ten}
                                </MenuItem>
                              );
                            })}
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <FormControl style={{ width: "100%", marginTop: "10px" }}>
                        <InputLabel style={{ marginTop: "-8px" }}>
                          Chọn thôn
                        </InputLabel>
                        <Select
                          value={thonvalue}
                          onChange={thonChange}
                          size="small"
                        >
                          {typeof thon === "object" &&
                            thon.map((prop, i) => {
                              return (
                                <MenuItem key={i} value={prop.id}>
                                  {prop.ten}
                                </MenuItem>
                              );
                            })}
                        </Select>
                      </FormControl>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <FormControl style={{ width: "100%", marginTop: "20px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Tên chủ hộ"
                          variant="outlined"
                          size="small"
                        />
                      </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <FormControl style={{ width: "100%", marginTop: "20px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Số điện thoại"
                          variant="outlined"
                          size="small"
                          type="number"
                        />
                      </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <FormControl style={{ width: "100%", marginTop: "20px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Địa chỉ"
                          variant="outlined"
                          size="small"
                        />
                      </FormControl>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <FormControl style={{ width: "100%", marginTop: "20px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Tên chủ hộ"
                          variant="outlined"
                          size="small"
                        />
                      </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <FormControl style={{ width: "100%", marginTop: "20px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Số điện thoại"
                          variant="outlined"
                          size="small"
                        />
                      </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <FormControl style={{ width: "100%", marginTop: "20px" }}>
                        <TextField
                          id="outlined-basic"
                          label="Địa chỉ"
                          variant="outlined"
                          size="small"
                        />
                      </FormControl>
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <CardFooter>
                  <Button color="info" onClick={capnhat}>
                    Cập nhật
                  </Button>
                </CardFooter>
              </Card>
            </GridItemLogin>
            <GridItemLogin xs={12} sm={12} md={3}></GridItemLogin>
          </GridContainer>
        </div>
      </Modal>
    </GridContainer>
  );
});

Thongtinhodan.propTypes = {
  hodanrows: PropTypes.array,
  hodancolumns: PropTypes.array,
};
export default Thongtinhodan;
