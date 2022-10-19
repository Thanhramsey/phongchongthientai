import React from "react";
import PropTypes from "prop-types";
import { DataGrid } from "@mui/x-data-grid";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "@material-ui/core/Button";
import Snackbar from "components/Snackbar/Snackbar.js";
import AddAlert from "@material-ui/icons/AddAlert";
import Config from "conFig.js";

const PhanQuyenMenu = React.memo(function PhanQuyenMenu(props) {
  const { rolerows, rolecolumns, menurows, menucolumns } = props;
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
      <GridItem xs={12} sm={10} md={12}>
        <Button color="primary" variant="contained" onClick={capnhat}>
          Cập nhật
        </Button>
      </GridItem>
      <GridItem xs={12} sm={10} md={4}>
        <div style={{ height: 500, width: "100%" }}>
          <DataGrid
            getRowId={(row) => row.rolE_ID}
            rows={rolerows}
            columns={rolecolumns}
            rowsPerPageOptions={[]}
            hideFooter={true}
            checkboxSelection={false}
            onSelectionModelChange={(ids) => {
              const selectedIDs = new Set(ids);
              const selectedRows = rolerows.filter((row) =>
                selectedIDs.has(row.rolE_ID)
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
            rows={menurows}
            columns={menucolumns}
            rowsPerPageOptions={[]}
            hideFooter={true}
            selectionModel={initmenu}
            checkboxSelection
            onSelectionModelChange={(ids) => {
              setInitmenu(ids);
              const selectedIDs = new Set(ids);
              const selectedRows = menurows.filter((row) =>
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

PhanQuyenMenu.propTypes = {
  rolerows: PropTypes.array,
  rolecolumns: PropTypes.array,
  menurows: PropTypes.array,
  menucolumns: PropTypes.array,
};
export default PhanQuyenMenu;
