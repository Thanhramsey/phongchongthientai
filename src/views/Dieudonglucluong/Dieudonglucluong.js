import React from "react";
import CustomTabsGrid from "components/CustomTabs/CustomTabsGrid.js";
//import Tasks from "components/Tasks/Tasks.js";
import Dieudonglucluongungpho from "components/Dieudonglucluong/Dieudonglucluong.js";
import Config from "conFig.js";

const lucluongcolumn = [
  { field: "id", headerName: "ID", width: 20, hide: true },
  {
    field: "lucluong",
    headerName: "Lực lượng",
    width: 180,
  },
  {
    field: "soluong",
    headerName: "Số lượng",
    width: 120,
  },
  {
    field: "soluonghientai",
    headerName: "Số lượng hiện tại",
    width: 200,
  },
];
const lucluongrows = [
  {
    id: "1",
    lucluong: "Bộ đội",
    soluong: "900",
    soluonghientai: "500",
  },
];
const quanhuyencolumn = [
  { field: "id", headerName: "ID", width: 30, hide: true },
  {
    field: "ten",
    headerName: "Xã phường",
    width: 250,
  },
];

export default function Dieudonglucluong() {
  const [quanhuyenrows, setQuanhuyenrows] = React.useState([]);
  const getxatuhuyen = () => {
    var url = Config.backend + "/api/diadanh/getxatuhuyen?id=" + 2;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setQuanhuyenrows(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };
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
  React.useEffect(() => {
    getroles();
    getxatuhuyen();
  }, []);
  return (
    <div>
      <CustomTabsGrid
        headerColor="primary"
        tabs={[
          {
            tabName: "Điều động lực lượng",
            tabContent: (
              <Dieudonglucluongungpho
                lucluongrows={lucluongrows}
                lucluongcolumns={lucluongcolumn}
                quanhuyenrows={quanhuyenrows}
                quanhuyencolumns={quanhuyencolumn}
              />
            ),
          },
        ]}
      />
    </div>
  );
}
