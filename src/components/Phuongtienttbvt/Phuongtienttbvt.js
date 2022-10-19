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
import CustomInput from "components/CustomInput/CustomInput.js";
import CardFooter from "components/Card/CardFooter.js";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Config from "conFig.js";
import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";
const diemdatptcolumn = [
  { field: "id", headerName: "ID", width: 0, hide: true },
  {
    field: "diadiemdat",
    headerName: "Địa điểm đặt",
    width: 220,
  },
  {
    field: "soluong",
    headerName: "Số lượng",
    width: 120,
  },
];
const diemdatptrow = [
  { id: "1", diadiemdat: "UB phường Lê Lợi", soluong: "3" },
];
const useStyles = makeStyles(styles);
const Phuongtienttbvt = React.memo(function Phuongtienttbvt(props) {
  const classes = useStyles();
  const { hodanrows, hodancolumns } = props;
  const [selectedroleRows, setSelectedroleRows] = React.useState([]);
  const [openthemphuongtien, setOpenthemphuongtien] = React.useState(false);
  console.log(selectedroleRows);
  const [donvi, setDonvi] = React.useState("");
  const [loaiptttbvt, setLoaiptttbvt] = React.useState("");
  const [donvivalue, setDonvivalue] = React.useState("");
  const [loaiptttbvtvalue, setLoaiptttbvtvalue] = React.useState("");
  const [ptttbvt, setPtttbvt] = React.useState("");
  const [ptttbvtvalue, setPtttbvtvalue] = React.useState("");
  const handleClose = () => setOpenthemphuongtien(false);
  const token = localStorage.getItem("token");
  var obj = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  const capnhat = () => {
    console.log("");
  };
  const getdmdonvi = () => {
    var url = Config.backend + "/api/donvi/getdmdonvi";
    fetch(url, obj)
      .then((res) => res.json())
      .then((data) => {
        setDonvi(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const getloaiptttbvt = () => {
    var url = Config.backend + "/api/phuongtienttbvt/getdmloaiptttbvt";
    fetch(url, obj)
      .then((res) => res.json())
      .then((data) => {
        setLoaiptttbvt(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const getphuongtientheoloai = (id) => {
    var url =
      Config.backend + "/api/phuongtienttbvt/getphuongtientheoloai?id=" + id;
    fetch(url, obj)
      .then((res) => res.json())
      .then((data) => {
        setPtttbvt(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const donviChange = (event) => {
    setDonvivalue(event.target.value);
  };
  const loaiptttbvtChange = (event) => {
    setLoaiptttbvtvalue(event.target.value);
    getphuongtientheoloai(event.target.value);
  };
  const ptttbvtChange = (event) => {
    setPtttbvtvalue(event.target.value);
  };
  const themphuongtien = () => {
    setOpenthemphuongtien(true);
  };
  const onChange = () => {
    console.log("");
  };
  React.useEffect(() => {
    getdmdonvi();
    getloaiptttbvt();
  }, []);
  return (
    <GridContainer>
      <GridItem xs={12} sm={10} md={12}>
        <Button color="primary" variant="contained" onClick={themphuongtien}>
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
        open={openthemphuongtien}
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
                    Thêm phương tiện - TTB - VT
                  </h6>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={5}>
                      <FormControl
                        style={{ width: "200px", marginTop: "10px" }}
                      >
                        <InputLabel style={{ marginTop: "-8px" }}>
                          Chọn đơn vị
                        </InputLabel>
                        <Select
                          value={donvivalue}
                          onChange={donviChange}
                          size="small"
                        >
                          {typeof donvi === "object" &&
                            donvi.map((prop, i) => {
                              return (
                                <MenuItem key={i} value={prop.id}>
                                  {prop.ten}
                                </MenuItem>
                              );
                            })}
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={5}>
                      <FormControl
                        style={{ width: "200px", marginTop: "10px" }}
                      >
                        <InputLabel style={{ marginTop: "-8px" }}>
                          Chọn loại PTTTBVT
                        </InputLabel>
                        <Select
                          value={loaiptttbvtvalue}
                          onChange={loaiptttbvtChange}
                          size="small"
                        >
                          {typeof loaiptttbvt === "object" &&
                            loaiptttbvt.map((prop, i) => {
                              return (
                                <MenuItem key={i} value={prop.id}>
                                  {prop.ten}
                                </MenuItem>
                              );
                            })}
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={2}>
                      <CustomInput
                        labelText="Năm"
                        id="oldpassword"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={5}>
                      <FormControl
                        style={{ width: "200px", marginTop: "10px" }}
                      >
                        <InputLabel style={{ marginTop: "-8px" }}>
                          Chọn PTTTBVT
                        </InputLabel>
                        <Select
                          value={ptttbvtvalue}
                          onChange={ptttbvtChange}
                          size="small"
                        >
                          {typeof ptttbvt === "object" &&
                            ptttbvt.map((prop, i) => {
                              return (
                                <MenuItem key={i} value={prop.id}>
                                  {prop.ten}
                                </MenuItem>
                              );
                            })}
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={5}>
                      <FormControl
                        style={{ width: "200px", marginTop: "10px" }}
                      >
                        <InputLabel style={{ marginTop: "-8px" }}>
                          Chọn điểm đặt
                        </InputLabel>
                        <Select
                          value={donvivalue}
                          onChange={donviChange}
                          size="small"
                        >
                          {typeof donvi === "object" &&
                            donvi.map((prop, i) => {
                              return (
                                <MenuItem key={i} value={prop.id}>
                                  {prop.ten}
                                </MenuItem>
                              );
                            })}
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={2}>
                      <CustomInput
                        labelText="Số lượng"
                        id="oldpassword"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={10} md={12}>
                      <div
                        style={{ height: 200, width: "100%", marginTop: "5px" }}
                      >
                        <DataGrid
                          getRowId={(row) => row.id}
                          rows={diemdatptrow}
                          columns={diemdatptcolumn}
                          rowsPerPageOptions={[]}
                          hideFooter={true}
                          checkboxSelection={false}
                          onEditRowsModelChange={onChange}
                          rowHeight={30}
                          headerHeight={45}
                        />
                      </div>
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <CardFooter>
                  <Button color="primary" variant="contained" onClick={capnhat}>
                    Thêm
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

Phuongtienttbvt.propTypes = {
  hodanrows: PropTypes.array,
  hodancolumns: PropTypes.array,
};
export default Phuongtienttbvt;
