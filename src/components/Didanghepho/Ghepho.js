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
  { field: "id", headerName: "ID", width: 200, hide: true },
  {
    field: "diaphuong",
    headerName: "Địa điểm",
    width: 200,
  },
  {
    field: "sohO_KH",
    headerName: "Số hộ KH",
    width: 200,
  },
  {
    field: "sohO_TH",
    headerName: "Số hộ đã xen ghép",
    width: 200,
    editable: true,
  },
  {
    field: "sokhaU_KH",
    headerName: "Số khẩu KH",
    width: 200,
  },
  {
    field: "sokhaU_TH",
    headerName: "Số khẩu đã xen ghép",
    width: 200,
    editable: true,
  },
];
const Ghepho = React.memo(function Ghepho(props) {
  const { ruiro } = props;
  const [ruirovalue, setRuirovalue] = React.useState();
  const [quanhuyen, setQuanhuyen] = React.useState([]);
  const [quanhuyenvalue, setQuanhuyenvalue] = React.useState();
  const [xaphuong, setXaphuong] = React.useState([]);
  const [xaphuongvalue, setXaphuongvalue] = React.useState();
  const [hodan, setHodan] = React.useState([]);
  var username = localStorage.getItem("username");
  const [alert, setAlert] = React.useState(false);
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
  const ruiroChange = (event) => {
    setRuirovalue(event.target.value);
    getquanhuyen();
  };
  const quanhuyenChange = (event) => {
    setQuanhuyenvalue(event.target.value);
    getxatuhuyen(event.target.value);
  };
  const xaphuongChange = (event) => {
    setXaphuongvalue(event.target.value);
    getdanhsachdantheoxa(event.target.value);
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
  const getdanhsachdantheoxa = (id) => {
    if (ruirovalue !== undefined) {
      var url =
        Config.backend +
        "/api/sotan/getdsdidoidanxengheptheoxa?ruiro_id=" +
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
  const onChange = (model: GridEditRowsModel) => {
    var key = Object.keys(model)[0];
    if (key !== undefined) {
      if (model[key].sohO_TH !== undefined) {
        var value = model[key].sohO_TH.value;
        if (value !== undefined && value !== null) {
          const id = Object.keys(model)[0];
          const filtered = hodan.filter((hd) => {
            return hd.id === id;
          });
          var soho = model[key].sohO_TH.value;
          var url =
            Config.backend +
            "/api/sotan/capnhatsotanxenghep?ruiro_id=" +
            ruirovalue +
            "&diaphuong_id=" +
            xaphuongvalue +
            "&so_ho=" +
            soho +
            "&so_khau=" +
            filtered[0].sokhaU_TH +
            "&user=" +
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
      if (model[key].sokhaU_TH !== undefined) {
        value = model[key].sokhaU_TH.value;
        if (value !== undefined && value !== null) {
          const id = Object.keys(model)[0];
          const filtered = hodan.filter((hd) => {
            return hd.id === id;
          });
          var sokhau = model[key].sokhaU_TH.value;
          url =
            Config.backend +
            "/api/sotan/capnhatsotanxenghep?ruiro_id=" +
            ruirovalue +
            "&diaphuong_id=" +
            xaphuongvalue +
            "&so_ho=" +
            filtered[0].sohO_TH +
            "&so_khau=" +
            sokhau +
            "&user=" +
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
  const showNotification = () => {
    setAlert(true);
    setTimeout(function () {
      setAlert(false);
    }, 6000);
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
      <GridItem xs={12} sm={10} md={12}>
        <div style={{ height: 500, width: "100%", marginTop: "10px" }}>
          <DataGrid
            getRowId={(row) => row.id}
            rows={hodan}
            columns={hodancolumn}
            rowsPerPageOptions={[]}
            hideFooter={true}
            checkboxSelection={false}
            onEditRowsModelChange={onChange}
            rowHeight={30}
            headerHeight={45}
          />
        </div>
      </GridItem>
      <GridItem xs={12} sm={12} md={10} lg={8}>
        <Snackbar
          place="tc"
          color="warning"
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

Ghepho.propTypes = {
  ruiro: PropTypes.array,
};
export default Ghepho;
