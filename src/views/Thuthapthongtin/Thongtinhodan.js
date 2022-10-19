import React from "react";
import CustomTabsGrid from "components/CustomTabs/CustomTabsGrid.js";
//import Tasks from "components/Tasks/Tasks.js";
import Thongtinhodan from "components/Thuthapthongtin/Thongtinhodan.js";
import Config from "conFig.js";

const ruirocolumn = [
  { field: "stt", headerName: "STT", width: 20 },
  {
    field: "huyen",
    headerName: "Huyện, Thành phố",
    width: 150,
  },
  {
    field: "xA_PHUONG",
    headerName: "Xã phường",
    width: 150,
  },
  {
    field: "thon",
    headerName: "Thôn",
    width: 150,
  },
  {
    field: "diachi",
    headerName: "Địa chỉ",
    width: 200,
  },
  {
    field: "teN_CHUHO",
    headerName: "Chủ hộ",
    width: 150,
  },
  {
    field: "sO_NGUOI",
    headerName: "Số người",
    width: 200,
  },
];

export default function Hodan() {
  const [hodan, setHodan] = React.useState([]);
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
  const gethodan = () => {
    var url = Config.backend + "/api/hodan/gethodan";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setHodan(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  React.useEffect(() => {
    getroles();
    gethodan();
  }, []);
  return (
    <div>
      <CustomTabsGrid
        headerColor="primary"
        tabs={[
          {
            tabName: "Thông tin hộ dân",
            tabContent: (
              <Thongtinhodan hodanrows={hodan} hodancolumns={ruirocolumn} />
            ),
          },
        ]}
      />
    </div>
  );
}
