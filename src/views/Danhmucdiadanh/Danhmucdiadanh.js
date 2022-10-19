import React from "react";
import CustomTabsGrid from "components/CustomTabs/CustomTabsGrid.js";
//import Tasks from "components/Tasks/Tasks.js";
import Danhmucdiadanh from "components/Diadanh/Danhmucdiadanh.js";
import Danhmucloaidiadanh from "components/Diadanh/Danhmucloaidiadanh.js";
import Config from "conFig.js";

const diadanhcolumn = [
  { field: "id", headerName: "ID", width: 20 },
  {
    field: "ma",
    headerName: "Mã",
    width: 200,
  },
  {
    field: "ten",
    headerName: "Tên",
    width: 250,
  },
];
const loaidiadanhcolumn = [
  { field: "id", headerName: "ID", width: 20 },
  {
    field: "ten",
    headerName: "Tên",
    width: 250,
  },
];

export default function Dmdiadanh() {
  const [diadanh, setDiadanh] = React.useState([]);
  const [loaidiadanh, setLoaidiadanh] = React.useState([]);
  const getroles = () => {
    var url = Config.backend + "/api/roles/roles";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const getdiadanh = () => {
    var url = Config.backend + "/api/diadanh/getdmdiadanh";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDiadanh(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
  const getloaidiadanh = () => {
    var url = Config.backend + "/api/diadanh/getdmloaidiadanh";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLoaidiadanh(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  React.useEffect(() => {
    getroles();
    getdiadanh();
    getloaidiadanh();
  }, []);
  return (
    <div>
      <CustomTabsGrid
        headerColor="primary"
        tabs={[
          {
            tabName: "Địa danh",
            tabContent: (
              <Danhmucdiadanh
                diadanhrows={diadanh}
                diadanhcolumns={diadanhcolumn}
              />
            ),
          },
          {
            tabName: "Loại địa danh",
            tabContent: (
              <Danhmucloaidiadanh
                loaidiadanhrows={loaidiadanh}
                loaidiadanhcolumns={loaidiadanhcolumn}
              />
            ),
          },
        ]}
      />
    </div>
  );
}
