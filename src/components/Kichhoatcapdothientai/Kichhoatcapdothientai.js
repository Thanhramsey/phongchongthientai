import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "@material-ui/core/Button";
import Snackbar from "components/Snackbar/Snackbar.js";
import AddAlert from "@material-ui/icons/AddAlert";
import FormControl from "@mui/material/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Config from "conFig.js";
const xaphuongcolumns = [
  { field: "id", headerName: "ID", width: 30, hide: true },
  {
    field: "ten",
    headerName: "Xã phường",
    width: 250,
  },
];
const ruirocolumns = [
  { field: "id", headerName: "ID", width: 30, hide: true },
  {
    field: "ten",
    headerName: "Tên",
    width: 200,
  },
];
const dacdiemruirocolumns = [
  { field: "id", headerName: "ID", width: 30, hide: true },
  {
    field: "ten",
    headerName: "Đặc điểm",
    width: 200,
  },
];
const capdoruirocolumns = [
  { field: "id", headerName: "ID", width: 30, hide: true },
  {
    field: "ten",
    headerName: "Cấp độ",
    width: 200,
  },
];
const dacdiemruirorows = [
  { id: "1", ten: "Trên cấp 14 (bão rất mạnh, siêu bão)" },
  { id: "2", ten: "12-13 (bão rất mạnh)" },
  { id: "3", ten: "10-11 (bão mạnh)" },
  { id: "4", ten: "8-9 (bão)" },
];
const capdoruirorows = [
  { id: "1", ten: "1" },
  { id: "2", ten: "2" },
  { id: "3", ten: "3" },
  { id: "4", ten: "4" },
  { id: "5", ten: "5" },
];
export default function Kichhoatcapdothientai() {
  const [selectedthientaiRows, setSelectedthientaiRows] = React.useState([]);
  const [quanhuyentemp, setQuanhuyentemp] = React.useState([]);
  const [quanhuyen, setQuanhuyen] = React.useState([2]);
  const [xaphuong, setXaphuong] = React.useState([]);
  const [ruirorows, setRuirorows] = React.useState([]);
  const init = [];
  const [initmenu, setInitmenu] = React.useState([]);
  const [alert, setAlert] = React.useState(false);
  const getruiro = () => {
    console.log("ok");
    var url = Config.backend + "/api/ruiro/getdanhsachruiro";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRuirorows(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const dsquanhuyen = () => {
    var url = Config.backend + "/api/diadanh/getquanhuyen";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setQuanhuyentemp(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const getmenubyrole = () => {
    if (selectedthientaiRows.length == 1) {
      var role = selectedthientaiRows[0].rolE_ID;
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
  const quanhuyenChange = (event) => {
    setQuanhuyen(event.target.value);
    getxatuhuyen(event.target.value);
  };
  const capnhat = () => {
    console.log("");
  };
  React.useEffect(() => {
    getmenubyrole();
    dsquanhuyen();
    getruiro();
    getxatuhuyen(2);
  }, []);
  return (
    <GridContainer>
      <GridItem xs={12} sm={10} md={12}>
        <Button color="primary" variant="contained" onClick={capnhat}>
          Cập nhật
        </Button>
        <FormControl>
          <Select
            value={quanhuyen}
            onChange={quanhuyenChange}
            style={{
              height: "35px",
              fontFamily: "Times New Roman",
              marginLeft: "195px",
            }}
          >
            {typeof quanhuyentemp === "object" &&
              quanhuyentemp.map((prop, i) => {
                return (
                  <MenuItem key={i} value={prop.id}>
                    {prop.ten}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      </GridItem>
      <GridItem xs={12} sm={10} md={3}>
        <div style={{ height: 500, width: "100%" }}>
          <DataGrid
            getRowId={(row) => row.id}
            rows={ruirorows}
            columns={ruirocolumns}
            rowsPerPageOptions={[]}
            hideFooter={true}
            checkboxSelection={false}
            onSelectionModelChange={(ids) => {
              const selectedIDs = new Set(ids);
              const selectedRows = ruirorows.filter((row) =>
                selectedIDs.has(row.id)
              );
              setSelectedthientaiRows(selectedRows);
            }}
            rowHeight={30}
            headerHeight={45}
          />
        </div>
      </GridItem>
      <GridItem xs={12} sm={10} md={3}>
        <div style={{ height: 500, width: "100%" }}>
          <DataGrid
            getRowId={(row) => row.id}
            rows={xaphuong}
            columns={xaphuongcolumns}
            rowsPerPageOptions={[]}
            hideFooter={true}
            selectionModel={initmenu}
            checkboxSelection
            onSelectionModelChange={(ids) => {
              setInitmenu(ids);
              const selectedIDs = new Set(ids);
              const selectedRows = ruirorows.filter((row) =>
                selectedIDs.has(row.id)
              );
              console.log(selectedRows);
              //setSelectedthientaiRows(selectedRows);
            }}
            rowHeight={30}
            headerHeight={45}
          />
        </div>
      </GridItem>
      <GridItem xs={12} sm={10} md={4}>
        <div style={{ height: 500, width: "100%" }}>
          <DataGrid
            getRowId={(row) => row.id}
            rows={dacdiemruirorows}
            columns={dacdiemruirocolumns}
            rowsPerPageOptions={[]}
            hideFooter={true}
            selectionModel={initmenu}
            checkboxSelection
            onSelectionModelChange={(ids) => {
              setInitmenu(ids);
              const selectedIDs = new Set(ids);
              const selectedRows = ruirorows.filter((row) =>
                selectedIDs.has(row.id)
              );
              console.log(selectedRows);
              //setSelectedmenuRows(selectedRows);
            }}
            rowHeight={30}
            headerHeight={45}
          />
        </div>
      </GridItem>
      <GridItem xs={12} sm={10} md={2}>
        <div style={{ height: 500, width: "100%" }}>
          <DataGrid
            getRowId={(row) => row.id}
            rows={capdoruirorows}
            columns={capdoruirocolumns}
            rowsPerPageOptions={[]}
            hideFooter={true}
            selectionModel={initmenu}
            checkboxSelection
            onSelectionModelChange={(ids) => {
              setInitmenu(ids);
              const selectedIDs = new Set(ids);
              const selectedRows = ruirorows.filter((row) =>
                selectedIDs.has(row.id)
              );
              setSelectedthientaiRows(selectedRows);
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
}
