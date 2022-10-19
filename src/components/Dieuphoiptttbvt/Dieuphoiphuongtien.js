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
          Cập nhật
        </Button>
        <FormControl>
          <Select value={"1"} style={{ marginLeft: "35px" }}>
            <MenuItem value={1}>Thành phố Quy Nhơn</MenuItem>
            <MenuItem value={2}>Huyện An Lão</MenuItem>
            <MenuItem value={3}>Thị xã Hoài Nhơn</MenuItem>
            <MenuItem value={4}>Huyện Hoài Ân</MenuItem>
            <MenuItem value={5}>Huyện Phù Mỹ</MenuItem>
            <MenuItem value={6}>Huyện Vĩnh Thạnh</MenuItem>
            <MenuItem value={7}>Huyện Tây Sơn</MenuItem>
            <MenuItem value={8}>Huyện Phù Cát</MenuItem>
            <MenuItem value={9}>Thị xã An Nhơn</MenuItem>
            <MenuItem value={10}>Huyện Tuy Phước</MenuItem>
            <MenuItem value={11}>Huyện Vân Canh</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <Select
            value={"1"}
            style={{ marginLeft: "35px", marginRight: "35px" }}
          >
            <MenuItem value={1}>Phường Nhơn Bình</MenuItem>
            <MenuItem value={2}>Phường Nhơn Phú</MenuItem>
            <MenuItem value={3}>Phường Đống Đa</MenuItem>
            <MenuItem value={4}>Phường Trần Quang Diệu</MenuItem>
            <MenuItem value={5}>Phường Hải Cảng</MenuItem>
            <MenuItem value={6}>Phường Quang Trung</MenuItem>
            <MenuItem value={7}>Phường Thị Nại</MenuItem>
            <MenuItem value={8}>Phường Lê Hồng Phong</MenuItem>
            <MenuItem value={9}>Phường Trần Hưng Đạo</MenuItem>
            <MenuItem value={10}>Phường Ngô Mây</MenuItem>
            <MenuItem value={11}>Phường Lý Thường Kiệt</MenuItem>
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
          message="Vui lòng chọn Role"
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
