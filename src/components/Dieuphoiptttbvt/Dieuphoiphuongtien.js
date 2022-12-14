import React from "react";
import PropTypes from "prop-types";
import { DataGrid } from "@mui/x-data-grid";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "@material-ui/core/Button";
import Snackbar from "components/Snackbar/Snackbar.js";
import AddAlert from "@material-ui/icons/AddAlert";
import FormControl from "@mui/material/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
//import TextField from "@mui/material/TextField";
import Config from "conFig.js";

const Dieuphoiphuongtien = React.memo(function Dieuphoiphuongtien(props) {
  const {
    lucluongrows,
    lucluongcolumns,
    quanhuyenrows,
    quanhuyencolumns,
  } = props;
  const [selectedroleRows, setSelectedroleRows] = React.useState([]);
  const [selectedmenuRows, setSelectedmenuRows] = React.useState([]);
  const init = [];
  const [initmenu, setInitmenu] = React.useState([]);
  const [alert, setAlert] = React.useState(false);
  const token = localStorage.getItem("token");
  var obj = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  const getmenubyrole = () => {
    if (selectedroleRows.length == 1) {
      var role = selectedroleRows[0].rolE_ID;
      var url = Config.backend + "/api/menu/getmenubyrole?role=" + role;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (data.length !== 0) {
            data.map((prop) => {
              init.push(prop.id);
            });
            setInitmenu(init);
          } else {
            setInitmenu([]);
          }
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }
  };
  const showNotification = () => {
    setAlert(true);
    setTimeout(function () {
      setAlert(false);
    }, 6000);
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
    } else {
      showNotification();
    }
  };
  React.useEffect(() => {
    getmenubyrole();
  }, [selectedroleRows]);
  return (
    <GridContainer>
      <GridItem xs={12} sm={10} md={10}>
        <Button color="primary" variant="contained" onClick={capnhat}>
          C???p nh???t
        </Button>
        <FormControl>
          <Select value={"1"} style={{ marginLeft: "35px" }}>
            <MenuItem value={1}>Th??nh ph??? Quy Nh??n</MenuItem>
            <MenuItem value={2}>Huy???n An L??o</MenuItem>
            <MenuItem value={3}>Th??? x?? Ho??i Nh??n</MenuItem>
            <MenuItem value={4}>Huy???n Ho??i ??n</MenuItem>
            <MenuItem value={5}>Huy???n Ph?? M???</MenuItem>
            <MenuItem value={6}>Huy???n V??nh Th???nh</MenuItem>
            <MenuItem value={7}>Huy???n T??y S??n</MenuItem>
            <MenuItem value={8}>Huy???n Ph?? C??t</MenuItem>
            <MenuItem value={9}>Th??? x?? An Nh??n</MenuItem>
            <MenuItem value={10}>Huy???n Tuy Ph?????c</MenuItem>
            <MenuItem value={11}>Huy???n V??n Canh</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <Select
            value={"1"}
            style={{ marginLeft: "35px", marginRight: "35px" }}
          >
            <MenuItem value={1}>Ph?????ng Nh??n B??nh</MenuItem>
            <MenuItem value={2}>Ph?????ng Nh??n Ph??</MenuItem>
            <MenuItem value={3}>Ph?????ng ?????ng ??a</MenuItem>
            <MenuItem value={4}>Ph?????ng Tr???n Quang Di???u</MenuItem>
            <MenuItem value={5}>Ph?????ng H???i C???ng</MenuItem>
            <MenuItem value={6}>Ph?????ng Quang Trung</MenuItem>
            <MenuItem value={7}>Ph?????ng Th??? N???i</MenuItem>
            <MenuItem value={8}>Ph?????ng L?? H???ng Phong</MenuItem>
            <MenuItem value={9}>Ph?????ng Tr???n H??ng ?????o</MenuItem>
            <MenuItem value={10}>Ph?????ng Ng?? M??y</MenuItem>
            <MenuItem value={11}>Ph?????ng L?? Th?????ng Ki???t</MenuItem>
          </Select>
        </FormControl>
      </GridItem>
      <GridItem xs={12} sm={10} md={6}>
        <div style={{ height: 500, width: "100%" }}>
          <DataGrid
            getRowId={(row) => row.id}
            rows={lucluongrows}
            columns={lucluongcolumns}
            rowsPerPageOptions={[]}
            hideFooter={true}
            checkboxSelection={false}
            onSelectionModelChange={(ids) => {
              const selectedIDs = new Set(ids);
              const selectedRows = lucluongrows.filter((row) =>
                selectedIDs.has(row.id)
              );
              setSelectedroleRows(selectedRows);
            }}
            rowHeight={30}
            headerHeight={45}
          />
        </div>
      </GridItem>
      <GridItem xs={12} sm={10} md={6}>
        <div style={{ height: 500, width: "100%" }}>
          <DataGrid
            getRowId={(row) => row.id}
            rows={quanhuyenrows}
            columns={quanhuyencolumns}
            rowsPerPageOptions={[]}
            hideFooter={true}
            selectionModel={initmenu}
            checkboxSelection
            onSelectionModelChange={(ids) => {
              setInitmenu(ids);
              const selectedIDs = new Set(ids);
              const selectedRows = quanhuyenrows.filter((row) =>
                selectedIDs.has(row.id)
              );
              setSelectedmenuRows(selectedRows);
            }}
            rowHeight={30}
            headerHeight={45}
          />
        </div>
      </GridItem>
      <GridItem xs={12} sm={12} md={10} lg={8}>
        <Snackbar
          place="tc"
          color="info"
          icon={AddAlert}
          message="Vui l??ng ch???n Role"
          open={alert}
          closeNotification={() => setAlert(false)}
          close
        />
      </GridItem>
    </GridContainer>
  );
});

Dieuphoiphuongtien.propTypes = {
  lucluongrows: PropTypes.array,
  lucluongcolumns: PropTypes.array,
  quanhuyenrows: PropTypes.array,
  quanhuyencolumns: PropTypes.array,
};
export default Dieuphoiphuongtien;
