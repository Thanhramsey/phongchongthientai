import React from "react";
import PropTypes from "prop-types";
import { DataGrid } from "@mui/x-data-grid";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "@material-ui/core/Button";
import Snackbar from "components/Snackbar/Snackbar.js";
import AddAlert from "@material-ui/icons/AddAlert";
import Config from "conFig.js";

const RolePermission = React.memo(function RolePermission(props) {
  const { rolerows, rolecolumns, permissionrows, permissioncolumns } = props;
  const [selectedroleRows, setSelectedroleRows] = React.useState([]);
  const [selectedpermissionRows, setSelectedpermissionRows] = React.useState(
    []
  );
  const init = [];
  const [initpermission, setInitpermission] = React.useState([]);
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
  const getpermissionbyrole = () => {
    if (selectedroleRows.length == 1) {
      var role = selectedroleRows[0].rolE_ID;
      var url =
        Config.backend + "/api/permissions/permissionsbyrole?role=" + role;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (data.length !== 0) {
            data.map((prop) => {
              init.push(prop.pmS_ID);
            });
            setInitpermission(init);
          } else {
            setInitpermission([]);
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
      if (selectedpermissionRows.length == 0) {
        url =
          Config.backend +
          "/api/phanquyenpermission/phanpermission?role=" +
          selectedroleRows[0].rolE_ID +
          "&permission=0";
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
        selectedpermissionRows.map((prop) => {
          kq.push(prop.pmS_ID);
        });
        url =
          Config.backend +
          "/api/phanquyenpermission/phanpermission?role=" +
          selectedroleRows[0].rolE_ID +
          "&permission=(" +
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
    getpermissionbyrole();
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
            getRowId={(row) => row.pmS_ID}
            rows={permissionrows}
            columns={permissioncolumns}
            rowsPerPageOptions={[]}
            hideFooter={true}
            selectionModel={initpermission}
            checkboxSelection
            onSelectionModelChange={(ids) => {
              setInitpermission(ids);
              const selectedIDs = new Set(ids);
              const selectedRows = permissionrows.filter((row) =>
                selectedIDs.has(row.pmS_ID)
              );
              setSelectedpermissionRows(selectedRows);
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

RolePermission.propTypes = {
  rolerows: PropTypes.array,
  rolecolumns: PropTypes.array,
  permissionrows: PropTypes.array,
  permissioncolumns: PropTypes.array,
};
export default RolePermission;
