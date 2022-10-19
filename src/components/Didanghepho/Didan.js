import React from "react";
import PropTypes from "prop-types";
import { DataGrid, GridEditRowsModel } from "@mui/x-data-grid";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Snackbar from "components/Snackbar/Snackbar.js";
import AddAlert from "@material-ui/icons/AddAlert";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Config from "conFig.js";
const hodancolumn = [
  { field: "id", headerName: "ID", width: 0, hide: true },
  {
    field: "diaphuong",
    headerName: "Địa phương",
    width: 160,
  },
  {
    field: "sohO_KH",
    headerName: "Số hộ KH",
    width: 90,
  },
  {
    field: "sokhaU_KH",
    headerName: "Số khẩu KH",
    width: 100,
  },
  {
    field: "sohO_TH",
    headerName: "Số hộ đã sơ tán",
    width: 90,
  },
  {
    field: "sokhaU_TH",
    headerName: "Số khẩu đã sơ tán",
    width: 110,
  },
];
const hodantheohuyencolumn = [
  { field: "id", headerName: "ID", width: 0, hide: true },
  {
    field: "diaphuong",
    headerName: "Địa phương",
    width: 300,
  },
  {
    field: "sohO_KH",
    headerName: "Số hộ KH",
    width: 200,
  },
  {
    field: "sokhaU_KH",
    headerName: "Số khẩu KH",
    width: 200,
  },
  {
    field: "sohO_TH",
    headerName: "Số hộ đã sơ tán",
    width: 200,
  },
  {
    field: "sokhaU_TH",
    headerName: "Số khẩu đã sơ tán",
    width: 200,
  },
];
const diemcachlycolumn = [
  { field: "diemsotantT_ID", headerName: "ID", width: 0, hide: true },
  {
    field: "ten",
    headerName: "Địa điểm",
    width: 300,
  },
  {
    field: "sohO_SOTAN",
    headerName: "Số hộ",
    width: 80,
    type: "number",
    editable: true,
  },
  {
    field: "sokhaU_SOTAN",
    headerName: "Số khẩu",
    width: 80,
    type: "number",
    editable: true,
  },
  {
    field: "suC_CHUA",
    headerName: "Sức chứa",
    width: 80,
    type: "number",
  },
];
const Didan = React.memo(function Didan(props) {
  const { ruiro } = props;
  const [alert, setAlert] = React.useState(false);
  const [ruirovalue, setRuirovalue] = React.useState("");
  const [quanhuyen, setQuanhuyen] = React.useState([]);
  const [quanhuyenvalue, setQuanhuyenvalue] = React.useState("");
  const [xaphuong, setXaphuong] = React.useState([]);
  const [xaphuongvalue, setXaphuongvalue] = React.useState("");
  const [hodan, setHodan] = React.useState([]);
  const [hodantheohuyen, setHodantheohuyen] = React.useState([]);
  const [diemcachlyrows, setDiemcachlyrows] = React.useState([]);
  var username = localStorage.getItem("username");
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
  const onChange = (model: GridEditRowsModel) => {
    //var sokhau = 0;
    var key = Object.keys(model)[0];
    //console.log(model[Object.keys(model)]);
    if (key !== undefined) {
      if (model[key].sohO_SOTAN !== undefined) {
        var value = model[key].sohO_SOTAN.value;
        if (value !== undefined && value !== null) {
          var soho = model[key].sohO_SOTAN.value;
          var url =
            Config.backend +
            "/api/sotan/capnhatsotantaptrung?ruiro_id=" +
            ruirovalue +
            "&diemsotantt_id=" +
            key +
            "&soho_sotan=" +
            soho +
            "&sokhau_sotan=-1&nguoi_cn=" +
            username;
          fetch(url)
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            })
            .catch((error) => {
              console.error("Error fetching data: ", error);
            });
        }
      }
      if (model[key].sokhaU_SOTAN !== undefined) {
        value = model[key].sokhaU_SOTAN.value;
        if (value !== undefined && value !== null) {
          var sokhau = model[key].sokhaU_SOTAN.value;
          url =
            Config.backend +
            "/api/sotan/capnhatsotantaptrung?ruiro_id=" +
            ruirovalue +
            "&diemsotantt_id=" +
            key +
            "&soho_sotan=-1" +
            "&sokhau_sotan=" +
            sokhau +
            "&nguoi_cn=" +
            username;
          fetch(url)
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            })
            .catch((error) => {
              console.error("Error fetching data: ", error);
            });
        }
      }
    }
  };
  const ruiroChange = (event) => {
    setRuirovalue(event.target.value);
    getquanhuyen();
  };
  const quanhuyenChange = (event) => {
    setQuanhuyenvalue(event.target.value);
    getxatuhuyen(event.target.value);
    getdanhsachdantheohuyen(event.target.value);
  };
  const xaphuongChange = (event) => {
    setXaphuongvalue(event.target.value);
    getdiemcachly(event.target.value);
    getdanhsachdantheoxa(event.target.value);
  };
  const getxatuhuyen = (id) => {
    if (ruirovalue !== undefined) {
      var url = Config.backend + "/api/diadanh/getxatuhuyen?id=" + id;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setXaphuong(data);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    } else {
      showNotification();
    }
  };
  const getdiemcachly = (id) => {
    var url = Config.backend + "/api/sotan/getdiemsotantheoxa?xa_id=" + id;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDiemcachlyrows(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const showNotification = () => {
    setAlert(true);
    setTimeout(function () {
      setAlert(false);
    }, 6000);
  };
  const getdanhsachdantheoxa = (id) => {
    if (ruirovalue !== undefined) {
      var url =
        Config.backend +
        "/api/sotan/getdsdidoidantaptrungtheoxa?ruiro_id=" +
        ruirovalue +
        "&xa_id=" +
        id;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setHodan(data);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    } else {
      showNotification();
    }
  };
  const getdanhsachdantheohuyen = (id) => {
    if (ruirovalue !== undefined) {
      var url =
        Config.backend +
        "/api/sotan/getdsdidoidantaptrungtheohuyen?ruiro_id=" +
        ruirovalue +
        "&huyen_id=" +
        id;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setHodantheohuyen(data);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }
  };
  return (
    <GridContainer>
      <GridItem xs={12} sm={10} md={12}>
        <FormControl style={{ width: "200px", marginTop: "10px" }}>
          <InputLabel style={{ marginTop: "-8px" }}>Chọn rủi ro</InputLabel>
          <Select value={ruirovalue} onChange={ruiroChange} size="small">
            {typeof ruiro === "object" &&
              ruiro.map((prop, i) => {
                return (
                  <MenuItem key={i} value={prop.id}>
                    {prop.ten}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
        <FormControl
          style={{ marginLeft: "35px", width: "200px", marginTop: "10px" }}
        >
          <InputLabel style={{ marginTop: "-8px" }}>Chọn Tp/Huyện</InputLabel>
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
        <FormControl
          style={{ marginLeft: "35px", width: "200px", marginTop: "10px" }}
        >
          <InputLabel style={{ marginTop: "-8px" }}>Chọn Xã phường</InputLabel>
          <Select value={xaphuongvalue} onChange={xaphuongChange} size="small">
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
      <GridItem xs={12} sm={10} md={6}>
        <div style={{ height: 200, width: "100%", marginTop: "5px" }}>
          <DataGrid
            getRowId={(row) => row.diemsotantT_ID}
            rows={diemcachlyrows}
            columns={diemcachlycolumn}
            rowsPerPageOptions={[]}
            hideFooter={true}
            checkboxSelection={false}
            onEditRowsModelChange={onChange}
            rowHeight={30}
            headerHeight={45}
          />
        </div>
      </GridItem>
      <GridItem xs={12} sm={10} md={6}>
        <div style={{ height: 200, width: "100%", marginTop: "5px" }}>
          <DataGrid
            getRowId={(row) => row.id}
            rows={hodan}
            columns={hodancolumn}
            rowsPerPageOptions={[]}
            hideFooter={true}
            checkboxSelection={false}
            rowHeight={30}
            headerHeight={45}
          />
        </div>
      </GridItem>
      <GridItem xs={12} sm={10} md={12}>
        <div style={{ height: 300, width: "100%", marginTop: "10px" }}>
          <DataGrid
            getRowId={(row) => row.id}
            rows={hodantheohuyen}
            columns={hodantheohuyencolumn}
            rowsPerPageOptions={[]}
            hideFooter={true}
            checkboxSelection={false}
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
          message="Vui lòng chọn đợt rủi ro"
          open={alert}
          closeNotification={() => setAlert(false)}
          close
        />
      </GridItem>
    </GridContainer>
  );
});

Didan.propTypes = {
  ruiro: PropTypes.array,
};
export default Didan;
