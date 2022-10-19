import React from "react";
import CustomTabsGrid from "components/CustomTabs/CustomTabsGrid.js";
//import Tasks from "components/Tasks/Tasks.js";
import Dotthientai from "components/Dotthientai/Dotthientai.js";
import Config from "conFig.js";

const ruirocolumn = [
  { field: "id", headerName: "ID", width: 20, hide: true },
  {
    field: "ten",
    headerName: "TÊN",
    width: 200,
  },
  {
    field: "teN_LOAIRUIRO",
    headerName: "Loại rủi ro",
    width: 250,
  },
  {
    field: "ngaY_BD",
    headerName: "Ngày bắt đầu",
    width: 200,
  },
  {
    field: "ngaY_KT",
    headerName: "Ngày kết thúc",
    width: 200,
  },
  {
    field: "thonG_TIN",
    headerName: "Thông tin",
    width: 200,
  },
];

export default function Thientai() {
  const [ruiro, setRuiro] = React.useState([]);
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
  const getruiro = () => {
    var url = Config.backend + "/api/ruiro/getdanhsachruiro";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRuiro(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  React.useEffect(() => {
    getroles();
    getruiro();
  }, []);
  return (
    <div>
      <CustomTabsGrid
        headerColor="primary"
        tabs={[
          {
            tabName: "Đợt thiên tai",
            tabContent: (
              <Dotthientai ruirorows={ruiro} ruirocolumns={ruirocolumn} />
            ),
          },
        ]}
      />
    </div>
  );
}
