import React from "react";
import CustomTabsGrid from "components/CustomTabs/CustomTabsGrid.js";
//import Tasks from "components/Tasks/Tasks.js";
import Roles from "components/Roles/Roles.js";
import Permissions from "components/Permissions/Permissions.js";
import Menus from "components/Menus/Menus.js";
import Users from "components/Users/Users.js";
import PhanQuyenMenu from "components/PhanQuyenMenu/PhanQuyenMenu.js";
import RolePermission from "components/RolePermission/RolePermission.js";
import Config from "conFig.js";

const rolescolumn = [
  { field: "rolE_ID", headerName: "ROLE ID", width: 300 },
  {
    field: "rolE_NAME",
    headerName: "ROLE NAME",
    width: 300,
  },
  {
    field: "ghI_CHU",
    headerName: "Ghi Chú",
    width: 300,
  },
];
const permissionscolumn = [
  { field: "pmS_ID", headerName: "Permission ID", width: 150 },
  {
    field: "ctL_NAME",
    headerName: "Controller",
    width: 300,
  },
  {
    field: "pmS_NAME",
    headerName: "Tên",
    width: 300,
  },
];
const menuscolumn = [
  { field: "path", headerName: "Đường dẫn", width: 250 },
  {
    field: "name",
    headerName: "Tên",
    width: 300,
  },
  {
    field: "component",
    headerName: "Component",
    width: 300,
  },
];
const phanquyenrolecolumn = [
  { field: "rolE_ID", headerName: "ROLE ID", width: 150 },
  {
    field: "rolE_NAME",
    headerName: "ROLE NAME",
    width: 200,
  },
];
const phanquyenmenucolumn = [
  { field: "id", headerName: "id", width: 100 },
  {
    field: "path",
    headerName: "Đường dẫn",
    width: 250,
  },
  {
    field: "name",
    headerName: "Tên",
    width: 250,
  },
];
const userscolumn = [
  { field: "id", headerName: "id", width: 100 },
  {
    field: "firstName",
    headerName: "FirstName",
    width: 250,
  },
  {
    field: "lastName",
    headerName: "LastName",
    width: 250,
  },
  {
    field: "username",
    headerName: "Username",
    width: 250,
  },
  {
    field: "role",
    headerName: "Role",
    width: 250,
  },
];

export default function RolesMenuPermission() {
  const token = localStorage.getItem("token");
  var obj = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  const [roles, setRoles] = React.useState([]);
  const [permissions, setPermissions] = React.useState([]);
  const [menus, setMenus] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const getroles = () => {
    var url = Config.backend + "/api/roles/roles";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRoles(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const getpermissions = () => {
    var url = Config.backend + "/api/permissions/permissions";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPermissions(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const getmenus = () => {
    var url = Config.backend + "/api/users/getuser";
    fetch(url, obj)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const getusers = () => {
    var url = Config.backend + "/api/menu/getmenu";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMenus(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  React.useEffect(() => {
    getroles();
    getpermissions();
    getmenus();
    getusers();
  }, []);
  return (
    <div>
      <CustomTabsGrid
        headerColor="primary"
        tabs={[
          {
            tabName: "Roles",
            tabContent: <Roles rows={roles} columns={rolescolumn} />,
          },
          {
            tabName: "Permision",
            tabContent: (
              <Permissions rows={permissions} columns={permissionscolumn} />
            ),
          },
          {
            tabName: "Menu",
            tabContent: <Menus rows={menus} columns={menuscolumn} />,
          },
          {
            tabName: "Users",
            tabContent: <Users rows={users} columns={userscolumn} />,
          },
          {
            tabName: "Role Menu",
            tabContent: (
              <PhanQuyenMenu
                rolerows={roles}
                rolecolumns={phanquyenrolecolumn}
                menurows={menus}
                menucolumns={phanquyenmenucolumn}
              />
            ),
          },
          {
            tabName: "Role Permission",
            tabContent: (
              <RolePermission
                rolerows={roles}
                rolecolumns={phanquyenrolecolumn}
                permissionrows={permissions}
                permissioncolumns={permissionscolumn}
              />
            ),
          },
        ]}
      />
    </div>
  );
}
